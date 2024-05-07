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

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
import * as ɵngcc2 from '@sofico-framework/utils';
import * as ɵngcc3 from 'angular-oauth2-oidc';
import * as ɵngcc4 from '@angular/router';
import * as ɵngcc5 from '@sofico-framework/app-config';
import * as ɵngcc6 from '@angular/common';
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
AuthenticatedResultService.ɵfac = function AuthenticatedResultService_Factory(t) { return new (t || AuthenticatedResultService)(); };
AuthenticatedResultService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AuthenticatedResultService, factory: AuthenticatedResultService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AuthenticatedResultService, [{
        type: Injectable
    }], function () { return []; }, null); })();

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
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(ɵngcc0.ɵɵinject(ɵngcc1.HttpClient), ɵngcc0.ɵɵinject(ɵngcc2.WindowRefService), ɵngcc0.ɵɵinject(ɵngcc3.OAuthService), ɵngcc0.ɵɵinject(ɵngcc4.Router), ɵngcc0.ɵɵinject(ɵngcc5.ConfigService), ɵngcc0.ɵɵinject(AuthenticatedResultService), ɵngcc0.ɵɵinject(ɵngcc6.PlatformLocation)); };
AuthenticationService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AuthenticationService, factory: AuthenticationService.ɵfac });
AuthenticationService.ctorParameters = () => [
    { type: HttpClient },
    { type: WindowRefService },
    { type: OAuthService },
    { type: Router },
    { type: ConfigService },
    { type: AuthenticatedResultService },
    { type: PlatformLocation }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AuthenticationService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.HttpClient }, { type: ɵngcc2.WindowRefService }, { type: ɵngcc3.OAuthService }, { type: ɵngcc4.Router }, { type: ɵngcc5.ConfigService }, { type: AuthenticatedResultService }, { type: ɵngcc6.PlatformLocation }]; }, null); })();

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
AuthenticatedGuard.ɵfac = function AuthenticatedGuard_Factory(t) { return new (t || AuthenticatedGuard)(ɵngcc0.ɵɵinject(AuthenticationService), ɵngcc0.ɵɵinject(AuthenticatedResultService)); };
AuthenticatedGuard.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AuthenticatedGuard, factory: AuthenticatedGuard.ɵfac });
AuthenticatedGuard.ctorParameters = () => [
    { type: AuthenticationService },
    { type: AuthenticatedResultService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AuthenticatedGuard, [{
        type: Injectable
    }], function () { return [{ type: AuthenticationService }, { type: AuthenticatedResultService }]; }, null); })();

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
GuestGuard.ɵfac = function GuestGuard_Factory(t) { return new (t || GuestGuard)(ɵngcc0.ɵɵinject(AuthenticationService), ɵngcc0.ɵɵinject(AuthenticatedResultService), ɵngcc0.ɵɵinject(ɵngcc5.ConfigService), ɵngcc0.ɵɵinject(ɵngcc4.Router)); };
GuestGuard.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: GuestGuard, factory: GuestGuard.ɵfac });
GuestGuard.ctorParameters = () => [
    { type: AuthenticationService },
    { type: AuthenticatedResultService },
    { type: ConfigService },
    { type: Router }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(GuestGuard, [{
        type: Injectable
    }], function () { return [{ type: AuthenticationService }, { type: AuthenticatedResultService }, { type: ɵngcc5.ConfigService }, { type: ɵngcc4.Router }]; }, null); })();

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
CustomOAuthInterceptor.ɵfac = function CustomOAuthInterceptor_Factory(t) { return new (t || CustomOAuthInterceptor)(ɵngcc0.ɵɵinject(ɵngcc3.OAuthStorage), ɵngcc0.ɵɵinject(ɵngcc3.OAuthResourceServerErrorHandler), ɵngcc0.ɵɵinject(ɵngcc5.ConfigService), ɵngcc0.ɵɵinject(AuthenticatedResultService)); };
CustomOAuthInterceptor.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CustomOAuthInterceptor, factory: CustomOAuthInterceptor.ɵfac });
CustomOAuthInterceptor.ctorParameters = () => [
    { type: OAuthStorage },
    { type: OAuthResourceServerErrorHandler },
    { type: ConfigService },
    { type: AuthenticatedResultService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CustomOAuthInterceptor, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc3.OAuthStorage }, { type: ɵngcc3.OAuthResourceServerErrorHandler }, { type: ɵngcc5.ConfigService }, { type: AuthenticatedResultService }]; }, null); })();

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
ResourceServerAutoLogoutErrorHandler.ɵfac = function ResourceServerAutoLogoutErrorHandler_Factory(t) { return new (t || ResourceServerAutoLogoutErrorHandler)(ɵngcc0.ɵɵinject(ɵngcc3.OAuthService), ɵngcc0.ɵɵinject(ɵngcc2.WindowRefService)); };
ResourceServerAutoLogoutErrorHandler.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ResourceServerAutoLogoutErrorHandler, factory: ResourceServerAutoLogoutErrorHandler.ɵfac });
ResourceServerAutoLogoutErrorHandler.ctorParameters = () => [
    { type: OAuthService },
    { type: WindowRefService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ResourceServerAutoLogoutErrorHandler, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc3.OAuthService }, { type: ɵngcc2.WindowRefService }]; }, null); })();

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
SessionStorageOAuthStore.ɵfac = function SessionStorageOAuthStore_Factory(t) { return new (t || SessionStorageOAuthStore)(ɵngcc0.ɵɵinject(ɵngcc5.ConfigService), ɵngcc0.ɵɵinject(ɵngcc2.WindowRefService)); };
SessionStorageOAuthStore.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: SessionStorageOAuthStore, factory: SessionStorageOAuthStore.ɵfac });
SessionStorageOAuthStore.ctorParameters = () => [
    { type: ConfigService },
    { type: WindowRefService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SessionStorageOAuthStore, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc5.ConfigService }, { type: ɵngcc2.WindowRefService }]; }, null); })();

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
AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(ɵngcc0.ɵɵinject(AuthenticationModule, 12), ɵngcc0.ɵɵinject(ɵngcc2.WindowRefService, 8), ɵngcc0.ɵɵinject(ɵngcc1.HttpClientModule, 8), ɵngcc0.ɵɵinject(ɵngcc5.ConfigService, 8)); };
AuthenticationModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AuthenticationModule });
AuthenticationModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ providers: [
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
    ], imports: [[CommonModule, OAuthModule.forRoot()]] });
AuthenticationModule.ctorParameters = () => [
    { type: AuthenticationModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: WindowRefService, decorators: [{ type: Optional }] },
    { type: HttpClientModule, decorators: [{ type: Optional }] },
    { type: ConfigService, decorators: [{ type: Optional }] }
];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AuthenticationModule, { imports: function () { return [CommonModule, ɵngcc3.OAuthModule]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AuthenticationModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], function () { return [{ type: AuthenticationModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: ɵngcc2.WindowRefService, decorators: [{
                type: Optional
            }] }, { type: ɵngcc1.HttpClientModule, decorators: [{
                type: Optional
            }] }, { type: ɵngcc5.ConfigService, decorators: [{
                type: Optional
            }] }]; }, null); })();

/*
 * Public API Surface of authentication
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthenticatedGuard, AuthenticatedResultService, AuthenticationModule, AuthenticationService, CustomOAuthInterceptor, GuestGuard, ResourceServerAutoLogoutErrorHandler, SessionStorageOAuthStore };

//# sourceMappingURL=sofico-framework-authentication.js.map