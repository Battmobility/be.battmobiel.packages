(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('rxjs'), require('@angular/common'), require('@angular/common/http'), require('@angular/router'), require('@sofico-framework/app-config'), require('@sofico-framework/utils'), require('angular-oauth2-oidc'), require('angular-oauth2-oidc-jwks')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/authentication', ['exports', '@angular/core', 'rxjs/operators', 'rxjs', '@angular/common', '@angular/common/http', '@angular/router', '@sofico-framework/app-config', '@sofico-framework/utils', 'angular-oauth2-oidc', 'angular-oauth2-oidc-jwks'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework'].authentication = {}), global.ng.core, global.rxjs.operators, global.rxjs, global.ng.common, global.ng.common.http, global.ng.router, global.appConfig, global.utils, global.angularOauth2Oidc, global.angularOauth2OidcJwks));
}(this, (function (exports, core, operators, rxjs, common, http, router, appConfig, utils, angularOauth2Oidc, angularOauth2OidcJwks) { 'use strict';

    var AuthenticatedResultService = /** @class */ (function () {
        function AuthenticatedResultService() {
            this._authenticatedResult$ = new rxjs.ReplaySubject(1);
        }
        Object.defineProperty(AuthenticatedResultService.prototype, "authenticatedResult$", {
            get: function () {
                return this._authenticatedResult$
                    .asObservable()
                    .pipe(operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        AuthenticatedResultService.prototype.setAuthenticatedResult = function (value) {
            this._authenticatedResult$.next(value);
        };
        return AuthenticatedResultService;
    }());
    AuthenticatedResultService.decorators = [
        { type: core.Injectable }
    ];

    var AuthenticationService = /** @class */ (function () {
        function AuthenticationService(httpClient, windowRefService, oauthService, router, configService, authenticatedResultService, platformLocation) {
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
        AuthenticationService.prototype.loginWithSingleSignOn = function () {
            this.oauthService.initImplicitFlow();
        };
        AuthenticationService.prototype.logout = function (pathBasedRedirectUri) {
            if (pathBasedRedirectUri === void 0) { pathBasedRedirectUri = false; }
            this.oauthService.redirectUri = this.calculateRedirectUri(pathBasedRedirectUri);
            this.oauthService.logOut();
        };
        AuthenticationService.prototype.logoutWithoutRedirect = function () {
            this.oauthService.logOut(true);
        };
        AuthenticationService.prototype.setPostLogoutRedirectUri = function (uri) {
            this.oauthService.postLogoutRedirectUri = uri;
        };
        AuthenticationService.prototype.configureLoginWithSSO = function () {
            var _this = this;
            var languageParam = this.getLanguageParam();
            var authConfig = {
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
            this.oauthService.tokenValidationHandler = new angularOauth2OidcJwks.JwksValidationHandler();
            this.oauthService
                .loadDiscoveryDocumentAndTryLogin()
                .then(function () { return _this.authenticatedResultService.setAuthenticatedResult(_this.oauthService.hasValidIdToken()); })
                .catch(function () { return _this.authenticatedResultService.setAuthenticatedResult(false); });
            this.oauthService.setupAutomaticSilentRefresh();
        };
        AuthenticationService.prototype.calculateRedirectUri = function (pathBasedRedirectUri) {
            var _a = this.location, protocol = _a.protocol, host = _a.host, pathname = _a.pathname, search = _a.search;
            return protocol + "//" + host + (pathBasedRedirectUri ? pathname + search : '');
        };
        AuthenticationService.prototype.calculateIssuer = function (config) {
            return config.auth.baseUrl + config.auth.realm;
        };
        AuthenticationService.prototype.listenOnErrorReceivedAndLogout = function () {
            var _this = this;
            this.oauthService.events
                .pipe(operators.filter(function (event) { return event.type === 'silent_refresh_error' ||
                event.type === 'token_error'; }), operators.take(1))
                .subscribe(function () { return _this.logout(true); });
        };
        AuthenticationService.prototype.getLanguageParam = function () {
            // the reason why we're using windowRefService instead of activatedRouter
            // to get the router params is because activatedRouter params has no value.
            // This is because there is no NavigationEnd event on Router
            var queryString = this.windowRefService.nativeWindow.location.search;
            var urlParams = new URLSearchParams(queryString);
            return urlParams.get('ui_locales');
        };
        return AuthenticationService;
    }());
    AuthenticationService.decorators = [
        { type: core.Injectable }
    ];
    AuthenticationService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: utils.WindowRefService },
        { type: angularOauth2Oidc.OAuthService },
        { type: router.Router },
        { type: appConfig.ConfigService },
        { type: AuthenticatedResultService },
        { type: common.PlatformLocation }
    ]; };

    var AuthenticatedGuard = /** @class */ (function () {
        function AuthenticatedGuard(authenticationService, authenticatedResultService) {
            this.authenticationService = authenticationService;
            this.authenticatedResultService = authenticatedResultService;
        }
        AuthenticatedGuard.prototype.canActivate = function () {
            var _this = this;
            return this.authenticatedResultService.authenticatedResult$.pipe(operators.tap(function (authenticated) {
                if (!authenticated) {
                    _this.authenticationService.loginWithSingleSignOn();
                }
            }));
        };
        return AuthenticatedGuard;
    }());
    AuthenticatedGuard.decorators = [
        { type: core.Injectable }
    ];
    AuthenticatedGuard.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: AuthenticatedResultService }
    ]; };

    var GuestGuard = /** @class */ (function () {
        function GuestGuard(authenticationService, authenticatedResultService, configService, router) {
            this.authenticationService = authenticationService;
            this.authenticatedResultService = authenticatedResultService;
            this.configService = configService;
            this.router = router;
        }
        GuestGuard.prototype.canActivate = function () {
            var _this = this;
            return this.authenticatedResultService.authenticatedResult$.pipe(operators.map(function (authenticated) {
                if (authenticated) {
                    _this.router.navigate(['/']);
                    return false;
                }
                else {
                    if (_this.configService.config.auth.grant === 'implicit') {
                        _this.authenticationService.loginWithSingleSignOn();
                        return false;
                    }
                }
                return !authenticated;
            }));
        };
        return GuestGuard;
    }());
    GuestGuard.decorators = [
        { type: core.Injectable }
    ];
    GuestGuard.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: AuthenticatedResultService },
        { type: appConfig.ConfigService },
        { type: router.Router }
    ]; };

    var CustomOAuthInterceptor = /** @class */ (function () {
        function CustomOAuthInterceptor(authStorage, errorHandler, configService, authenticatedResultService) {
            this.authStorage = authStorage;
            this.errorHandler = errorHandler;
            this.configService = configService;
            this.authenticatedResultService = authenticatedResultService;
        }
        CustomOAuthInterceptor.prototype.intercept = function (req, next) {
            var _this = this;
            var url = req.url.toLowerCase();
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
            return this.authenticatedResultService.authenticatedResult$.pipe(operators.take(1), operators.filter(function (v) { return !!v; }), operators.mergeMap(function () {
                var token = _this.authStorage.getItem('access_token');
                var header = 'Bearer ' + token;
                var headers = req.headers.set('Authorization', header);
                req = req.clone({ headers: headers });
                return next.handle(req);
            }), operators.catchError(function (err) { return _this.errorHandler.handleError(err); }));
        };
        CustomOAuthInterceptor.prototype.checkUrl = function (url, allowedUrls) {
            var found = allowedUrls.find(function (u) { return url.startsWith(u); });
            return !!found;
        };
        return CustomOAuthInterceptor;
    }());
    CustomOAuthInterceptor.decorators = [
        { type: core.Injectable }
    ];
    CustomOAuthInterceptor.ctorParameters = function () { return [
        { type: angularOauth2Oidc.OAuthStorage },
        { type: angularOauth2Oidc.OAuthResourceServerErrorHandler },
        { type: appConfig.ConfigService },
        { type: AuthenticatedResultService }
    ]; };

    var ResourceServerAutoLogoutErrorHandler = /** @class */ (function () {
        function ResourceServerAutoLogoutErrorHandler(oauthService, windowRefService) {
            this.oauthService = oauthService;
            this.windowRefService = windowRefService;
            this.location = this.windowRefService.nativeWindow
                .location;
        }
        ResourceServerAutoLogoutErrorHandler.prototype.handleError = function (err) {
            if (err.status === 401) {
                this.logout(true);
                return rxjs.EMPTY;
            }
            else {
                return rxjs.throwError(err);
            }
        };
        ResourceServerAutoLogoutErrorHandler.prototype.logout = function (pathBasedRedirectUri) {
            this.oauthService.redirectUri = this.calculateRedirectUri(pathBasedRedirectUri);
            this.oauthService.logOut();
        };
        ResourceServerAutoLogoutErrorHandler.prototype.calculateRedirectUri = function (pathBasedRedirectUri) {
            var _a = this.location, protocol = _a.protocol, host = _a.host, pathname = _a.pathname, search = _a.search;
            return protocol + "//" + host + (pathBasedRedirectUri ? pathname + search : '');
        };
        return ResourceServerAutoLogoutErrorHandler;
    }());
    ResourceServerAutoLogoutErrorHandler.decorators = [
        { type: core.Injectable }
    ];
    ResourceServerAutoLogoutErrorHandler.ctorParameters = function () { return [
        { type: angularOauth2Oidc.OAuthService },
        { type: utils.WindowRefService }
    ]; };

    var SessionStorageOAuthStore = /** @class */ (function () {
        function SessionStorageOAuthStore(configService, windowRefService) {
            this.configService = configService;
            this.windowRefService = windowRefService;
            this.prefix = this.configService.config.auth.clientId;
            this.storage = this.windowRefService.nativeWindow.sessionStorage;
        }
        SessionStorageOAuthStore.prototype.getItem = function (key) {
            return this.storage.getItem(this.calculateKey(key));
        };
        SessionStorageOAuthStore.prototype.removeItem = function (key) {
            this.storage.removeItem(this.calculateKey(key));
        };
        SessionStorageOAuthStore.prototype.setItem = function (key, data) {
            this.storage.setItem(this.calculateKey(key), data);
        };
        SessionStorageOAuthStore.prototype.calculateKey = function (key) {
            return this.prefix + "_" + key;
        };
        return SessionStorageOAuthStore;
    }());
    SessionStorageOAuthStore.decorators = [
        { type: core.Injectable }
    ];
    SessionStorageOAuthStore.ctorParameters = function () { return [
        { type: appConfig.ConfigService },
        { type: utils.WindowRefService }
    ]; };

    var AuthenticationModule = /** @class */ (function () {
        function AuthenticationModule(parentModule, windowRefService, httpClient, configService) {
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
        return AuthenticationModule;
    }());
    AuthenticationModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, angularOauth2Oidc.OAuthModule.forRoot()],
                    declarations: [],
                    providers: [
                        AuthenticationService,
                        AuthenticatedResultService,
                        AuthenticatedGuard,
                        GuestGuard,
                        {
                            provide: http.HTTP_INTERCEPTORS,
                            useClass: CustomOAuthInterceptor,
                            multi: true
                        },
                        {
                            provide: angularOauth2Oidc.OAuthStorage,
                            useClass: SessionStorageOAuthStore
                        },
                        {
                            provide: angularOauth2Oidc.OAuthResourceServerErrorHandler,
                            useClass: ResourceServerAutoLogoutErrorHandler
                        }
                    ]
                },] }
    ];
    AuthenticationModule.ctorParameters = function () { return [
        { type: AuthenticationModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] },
        { type: utils.WindowRefService, decorators: [{ type: core.Optional }] },
        { type: http.HttpClientModule, decorators: [{ type: core.Optional }] },
        { type: appConfig.ConfigService, decorators: [{ type: core.Optional }] }
    ]; };

    /*
     * Public API Surface of authentication
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AuthenticatedGuard = AuthenticatedGuard;
    exports.AuthenticatedResultService = AuthenticatedResultService;
    exports.AuthenticationModule = AuthenticationModule;
    exports.AuthenticationService = AuthenticationService;
    exports.CustomOAuthInterceptor = CustomOAuthInterceptor;
    exports.GuestGuard = GuestGuard;
    exports.ResourceServerAutoLogoutErrorHandler = ResourceServerAutoLogoutErrorHandler;
    exports.SessionStorageOAuthStore = SessionStorageOAuthStore;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-authentication.umd.js.map
