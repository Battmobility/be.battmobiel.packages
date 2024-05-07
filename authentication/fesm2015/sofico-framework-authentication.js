import { Injectable, NgModule, Optional, SkipSelf } from '@angular/core';
import { distinctUntilChanged, filter, take, tap, map, mergeMap, catchError } from 'rxjs/operators';
import { ReplaySubject, EMPTY, throwError } from 'rxjs';
import { PlatformLocation, CommonModule } from '@angular/common';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from '@sofico-framework/app-config';
import { WindowRefService } from '@sofico-framework/utils';
import { OAuthService, OAuthStorage, OAuthResourceServerErrorHandler, OAuthModule } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

class AuthenticatedResultService {
    constructor() {
        this._authenticatedResult$ = new ReplaySubject(1);
    }
    get authenticatedResult$() {
        return this._authenticatedResult$
            .asObservable()
            .pipe(distinctUntilChanged());
    }
    setAuthenticatedResult(value) {
        this._authenticatedResult$.next(value);
    }
}
AuthenticatedResultService.decorators = [
    { type: Injectable }
];

class AuthenticationService {
    constructor(httpClient, windowRefService, oauthService, router, configService, authenticatedResultService, platformLocation) {
        this.httpClient = httpClient;
        this.windowRefService = windowRefService;
        this.oauthService = oauthService;
        this.router = router;
        this.configService = configService;
        this.authenticatedResultService = authenticatedResultService;
        this.platformLocation = platformLocation;
        this.location = this.windowRefService.nativeWindow
            .location;
        this.baseHref = this.location.origin + this.platformLocation.getBaseHrefFromDOM();
        if (this.configService.config.auth.grant === 'implicit') {
            this.configureLoginWithSSO();
            this.listenOnErrorReceivedAndLogout();
        }
        else {
            throw new Error('unsupported authentication grant');
        }
    }
    loginWithSingleSignOn() {
        this.oauthService.initImplicitFlow();
    }
    logout(pathBasedRedirectUri = false) {
        this.oauthService.redirectUri = this.calculateRedirectUri(pathBasedRedirectUri);
        this.oauthService.logOut();
    }
    logoutWithoutRedirect() {
        this.oauthService.logOut(true);
    }
    setPostLogoutRedirectUri(uri) {
        this.oauthService.postLogoutRedirectUri = uri;
    }
    configureLoginWithSSO() {
        const languageParam = this.getLanguageParam();
        const authConfig = {
            clientId: this.configService.config.auth.clientId,
            issuer: this.calculateIssuer(this.configService.config),
            redirectUri: this.calculateRedirectUri(true),
            silentRefreshRedirectUri: this.baseHref + 'silent-refresh.html',
            postLogoutRedirectUri: this.baseHref
        };
        this.oauthService.configure(authConfig);
        if (languageParam) {
            this.oauthService.customQueryParams = {
                // kc_locale because it set a cookie automatically
                // that contains the language parameter so it's saved
                // when you refresh and wait to long before you take an action
                kc_locale: languageParam
            };
        }
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService
            .loadDiscoveryDocumentAndTryLogin()
            .then(() => this.authenticatedResultService.setAuthenticatedResult(this.oauthService.hasValidIdToken()))
            .catch(() => this.authenticatedResultService.setAuthenticatedResult(false));
        this.oauthService.setupAutomaticSilentRefresh();
    }
    calculateRedirectUri(pathBasedRedirectUri) {
        const { protocol, host, pathname, search } = this.location;
        return `${protocol}//${host}${pathBasedRedirectUri ? pathname + search : ''}`;
    }
    calculateIssuer(config) {
        return config.auth.baseUrl + config.auth.realm;
    }
    listenOnErrorReceivedAndLogout() {
        this.oauthService.events
            .pipe(filter(event => event.type === 'silent_refresh_error' ||
            event.type === 'token_error'), take(1))
            .subscribe(() => this.logout(true));
    }
    getLanguageParam() {
        // the reason why we're using windowRefService instead of activatedRouter
        // to get the router params is because activatedRouter params has no value.
        // This is because there is no NavigationEnd event on Router
        const queryString = this.windowRefService.nativeWindow.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get('ui_locales');
    }
}
AuthenticationService.decorators = [
    { type: Injectable }
];
AuthenticationService.ctorParameters = () => [
    { type: HttpClient },
    { type: WindowRefService },
    { type: OAuthService },
    { type: Router },
    { type: ConfigService },
    { type: AuthenticatedResultService },
    { type: PlatformLocation }
];

class AuthenticatedGuard {
    constructor(authenticationService, authenticatedResultService) {
        this.authenticationService = authenticationService;
        this.authenticatedResultService = authenticatedResultService;
    }
    canActivate() {
        return this.authenticatedResultService.authenticatedResult$.pipe(tap((authenticated) => {
            if (!authenticated) {
                this.authenticationService.loginWithSingleSignOn();
            }
        }));
    }
}
AuthenticatedGuard.decorators = [
    { type: Injectable }
];
AuthenticatedGuard.ctorParameters = () => [
    { type: AuthenticationService },
    { type: AuthenticatedResultService }
];

class GuestGuard {
    constructor(authenticationService, authenticatedResultService, configService, router) {
        this.authenticationService = authenticationService;
        this.authenticatedResultService = authenticatedResultService;
        this.configService = configService;
        this.router = router;
    }
    canActivate() {
        return this.authenticatedResultService.authenticatedResult$.pipe(map((authenticated) => {
            if (authenticated) {
                this.router.navigate(['/']);
                return false;
            }
            else {
                if (this.configService.config.auth.grant === 'implicit') {
                    this.authenticationService.loginWithSingleSignOn();
                    return false;
                }
            }
            return !authenticated;
        }));
    }
}
GuestGuard.decorators = [
    { type: Injectable }
];
GuestGuard.ctorParameters = () => [
    { type: AuthenticationService },
    { type: AuthenticatedResultService },
    { type: ConfigService },
    { type: Router }
];

class CustomOAuthInterceptor {
    constructor(authStorage, errorHandler, configService, authenticatedResultService) {
        this.authStorage = authStorage;
        this.errorHandler = errorHandler;
        this.configService = configService;
        this.authenticatedResultService = authenticatedResultService;
    }
    intercept(req, next) {
        const url = req.url.toLowerCase();
        if (!this.configService.config) {
            return next.handle(req);
        }
        if (!this.configService.config.auth) {
            return next.handle(req);
        }
        if (!this.configService.config.auth.allowedUrls) {
            return next.handle(req);
        }
        if (!this.checkUrl(url, this.configService.config.auth.allowedUrls)) {
            return next.handle(req);
        }
        return this.authenticatedResultService.authenticatedResult$.pipe(take(1), filter(v => !!v), mergeMap(() => {
            const token = this.authStorage.getItem('access_token');
            const header = 'Bearer ' + token;
            const headers = req.headers.set('Authorization', header);
            req = req.clone({ headers });
            return next.handle(req);
        }), catchError(err => this.errorHandler.handleError(err)));
    }
    checkUrl(url, allowedUrls) {
        const found = allowedUrls.find(u => url.startsWith(u));
        return !!found;
    }
}
CustomOAuthInterceptor.decorators = [
    { type: Injectable }
];
CustomOAuthInterceptor.ctorParameters = () => [
    { type: OAuthStorage },
    { type: OAuthResourceServerErrorHandler },
    { type: ConfigService },
    { type: AuthenticatedResultService }
];

class ResourceServerAutoLogoutErrorHandler {
    constructor(oauthService, windowRefService) {
        this.oauthService = oauthService;
        this.windowRefService = windowRefService;
        this.location = this.windowRefService.nativeWindow
            .location;
    }
    handleError(err) {
        if (err.status === 401) {
            this.logout(true);
            return EMPTY;
        }
        else {
            return throwError(err);
        }
    }
    logout(pathBasedRedirectUri) {
        this.oauthService.redirectUri = this.calculateRedirectUri(pathBasedRedirectUri);
        this.oauthService.logOut();
    }
    calculateRedirectUri(pathBasedRedirectUri) {
        const { protocol, host, pathname, search } = this.location;
        return `${protocol}//${host}${pathBasedRedirectUri ? pathname + search : ''}`;
    }
}
ResourceServerAutoLogoutErrorHandler.decorators = [
    { type: Injectable }
];
ResourceServerAutoLogoutErrorHandler.ctorParameters = () => [
    { type: OAuthService },
    { type: WindowRefService }
];

class SessionStorageOAuthStore {
    constructor(configService, windowRefService) {
        this.configService = configService;
        this.windowRefService = windowRefService;
        this.prefix = this.configService.config.auth.clientId;
        this.storage = this.windowRefService.nativeWindow.sessionStorage;
    }
    getItem(key) {
        return this.storage.getItem(this.calculateKey(key));
    }
    removeItem(key) {
        this.storage.removeItem(this.calculateKey(key));
    }
    setItem(key, data) {
        this.storage.setItem(this.calculateKey(key), data);
    }
    calculateKey(key) {
        return `${this.prefix}_${key}`;
    }
}
SessionStorageOAuthStore.decorators = [
    { type: Injectable }
];
SessionStorageOAuthStore.ctorParameters = () => [
    { type: ConfigService },
    { type: WindowRefService }
];

class AuthenticationModule {
    constructor(parentModule, windowRefService, httpClient, configService) {
        if (parentModule) {
            throw new Error('AuthenticationModule is already loaded. Import in your base AppModule only.');
        }
        if (!windowRefService) {
            throw new Error('You need to import the UtilServicesModule in your AppModule!');
        }
        if (!httpClient) {
            throw new Error('You need to import the HttpClientModule in your AppModule!');
        }
        if (!configService) {
            throw new Error('You need to import the AppConfigModule in your AppModule!');
        }
    }
}
AuthenticationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OAuthModule.forRoot()],
                declarations: [],
                providers: [
                    AuthenticationService,
                    AuthenticatedResultService,
                    AuthenticatedGuard,
                    GuestGuard,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: CustomOAuthInterceptor,
                        multi: true
                    },
                    {
                        provide: OAuthStorage,
                        useClass: SessionStorageOAuthStore
                    },
                    {
                        provide: OAuthResourceServerErrorHandler,
                        useClass: ResourceServerAutoLogoutErrorHandler
                    }
                ]
            },] }
];
AuthenticationModule.ctorParameters = () => [
    { type: AuthenticationModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: WindowRefService, decorators: [{ type: Optional }] },
    { type: HttpClientModule, decorators: [{ type: Optional }] },
    { type: ConfigService, decorators: [{ type: Optional }] }
];

/*
 * Public API Surface of authentication
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthenticatedGuard, AuthenticatedResultService, AuthenticationModule, AuthenticationService, CustomOAuthInterceptor, GuestGuard, ResourceServerAutoLogoutErrorHandler, SessionStorageOAuthStore };
//# sourceMappingURL=sofico-framework-authentication.js.map
