(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@sofico-framework/utils')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/app-config', ['exports', '@angular/common', '@angular/core', '@sofico-framework/utils'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['app-config'] = {}), global.ng.common, global.ng.core, global.utils));
}(this, (function (exports, common, core, utils) { 'use strict';

    var APP_CONFIG_TOKEN = new core.InjectionToken('app-config-token');

    var ConfigService = /** @class */ (function () {
        function ConfigService(appConfig, windowRefService, objectService) {
            var _a, _b, _c;
            this.appConfig = appConfig;
            this.windowRefService = windowRefService;
            this.objectService = objectService;
            /**
             * The config that is set on the nativeWindow
             */
            this.provisioningConfig = this.windowRefService
                .nativeWindow.config;
            // provisioning config requirement
            if (!this.provisioningConfig) {
                throw Error('No provisioning configuration found!');
            }
            if (!(((_a = this.provisioningConfig.auth) === null || _a === void 0 ? void 0 : _a.clientId) || ((_b = this.provisioningConfig.base) === null || _b === void 0 ? void 0 : _b.clientId))) {
                throw Error('auth.clientId is required in configuration!');
            }
            var location = this.windowRefService.nativeWindow.location;
            var defaultConfig = {
                api: {
                    baseUrl: location.protocol + "//" + location.host + "/api"
                },
                auth: {
                    clientId: '',
                    allowedUrls: [location.protocol + "//" + location.host],
                    baseUrl: location.protocol + "//" + location.host + "/auth/realms/",
                    grant: 'implicit',
                    realm: 'master',
                    logoutRedirectUrls: []
                },
                debug: false,
                app: appConfig
            };
            var baseConfig;
            if ((_c = this.provisioningConfig) === null || _c === void 0 ? void 0 : _c.base) {
                baseConfig = {
                    api: {
                        baseUrl: "https://" + this.provisioningConfig.base.domain + "/api"
                    },
                    auth: {
                        clientId: this.provisioningConfig.base.clientId,
                        allowedUrls: ["https://" + this.provisioningConfig.base.domain + "/api"],
                        baseUrl: "https://" + this.provisioningConfig.base.domain + "/auth/realms/",
                        grant: 'implicit',
                        realm: 'master',
                        logoutRedirectUrls: []
                    },
                    app: appConfig
                };
            }
            var config = this.objectService.mergeDeep(defaultConfig, baseConfig, this.provisioningConfig);
            // We ensure the API and AUTH baseUrl have a trailing slash
            config = Object.assign(Object.assign({}, config), { api: Object.assign(Object.assign({}, config.api), { baseUrl: this.getValidUrl(config.api.baseUrl) }), auth: Object.assign(Object.assign({}, config.auth), { baseUrl: this.getValidUrl(config.auth.baseUrl) }) });
            this.config = config;
        }
        ConfigService.prototype.getValidUrl = function (url) {
            if ((url === null || url === void 0 ? void 0 : url.substr(-1)) !== '/') {
                return url + "/";
            }
            return url;
        };
        return ConfigService;
    }());
    ConfigService.decorators = [
        { type: core.Injectable }
    ];
    ConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [APP_CONFIG_TOKEN,] }] },
        { type: utils.WindowRefService },
        { type: utils.ObjectService }
    ]; };

    var CurrencyConfigPipe = /** @class */ (function () {
        function CurrencyConfigPipe(currencyPipe, configService) {
            this.currencyPipe = currencyPipe;
            this.configService = configService;
        }
        CurrencyConfigPipe.prototype.transform = function (value) {
            return this.currencyPipe.transform(value, this.configService.config.app.currencyCode);
        };
        return CurrencyConfigPipe;
    }());
    CurrencyConfigPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'sofCurrencyConfig' },] }
    ];
    CurrencyConfigPipe.ctorParameters = function () { return [
        { type: common.CurrencyPipe },
        { type: ConfigService }
    ]; };

    var DateConfigPipe = /** @class */ (function () {
        function DateConfigPipe(datePipe, configService) {
            this.datePipe = datePipe;
            this.configService = configService;
        }
        DateConfigPipe.prototype.transform = function (value) {
            return this.datePipe.transform(value, this.configService.config.app.dateFormat);
        };
        return DateConfigPipe;
    }());
    DateConfigPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'sofDateConfig' },] }
    ];
    DateConfigPipe.ctorParameters = function () { return [
        { type: common.DatePipe },
        { type: ConfigService }
    ]; };

    var TimeConfigPipe = /** @class */ (function () {
        function TimeConfigPipe(configService, datePipe) {
            this.configService = configService;
            this.datePipe = datePipe;
        }
        TimeConfigPipe.prototype.transform = function (value) {
            var dateTimeString = "1970-01-01 " + value;
            return this.datePipe.transform(dateTimeString, this.configService.config.app.timeFormat);
        };
        return TimeConfigPipe;
    }());
    TimeConfigPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'sofTimeConfig' },] }
    ];
    TimeConfigPipe.ctorParameters = function () { return [
        { type: ConfigService },
        { type: common.DatePipe }
    ]; };

    var DateTimeConfigPipe = /** @class */ (function () {
        function DateTimeConfigPipe(configService, datePipe) {
            this.configService = configService;
            this.datePipe = datePipe;
        }
        DateTimeConfigPipe.prototype.transform = function (value) {
            return this.datePipe.transform(value, this.configService.config.app.dateFormat +
                ' ' +
                this.configService.config.app.timeFormat);
        };
        return DateTimeConfigPipe;
    }());
    DateTimeConfigPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'sofDateTimeConfig' },] }
    ];
    DateTimeConfigPipe.ctorParameters = function () { return [
        { type: ConfigService },
        { type: common.DatePipe }
    ]; };

    var AppConfigModule = /** @class */ (function () {
        function AppConfigModule(parentModule, appConfig, windowRefService) {
            this.appConfig = appConfig;
            if (parentModule) {
                throw new Error('AppConfigModule is already loaded. Import in your base AppModule only.');
            }
            if (!appConfig) {
                throw Error(AppConfigModule.name + " should be imported using forRoot static method!");
            }
            if (!windowRefService) {
                throw new Error('You need to import the UtilServicesModule in your AppModule!');
            }
        }
        AppConfigModule.forRoot = function (config) {
            return {
                ngModule: AppConfigModule,
                providers: [
                    {
                        provide: APP_CONFIG_TOKEN,
                        useValue: config
                    }
                ]
            };
        };
        return AppConfigModule;
    }());
    AppConfigModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    providers: [ConfigService]
                },] }
    ];
    AppConfigModule.ctorParameters = function () { return [
        { type: AppConfigModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [APP_CONFIG_TOKEN,] }] },
        { type: utils.WindowRefService, decorators: [{ type: core.Optional }] }
    ]; };

    var AppConfigUtilsModule = /** @class */ (function () {
        function AppConfigUtilsModule() {
        }
        return AppConfigUtilsModule;
    }());
    AppConfigUtilsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [
                        CurrencyConfigPipe,
                        DateConfigPipe,
                        TimeConfigPipe,
                        DateTimeConfigPipe
                    ],
                    exports: [
                        CurrencyConfigPipe,
                        DateConfigPipe,
                        TimeConfigPipe,
                        DateTimeConfigPipe
                    ]
                },] }
    ];

    /*
     * Public API Surface of app-config
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.APP_CONFIG_TOKEN = APP_CONFIG_TOKEN;
    exports.AppConfigModule = AppConfigModule;
    exports.AppConfigUtilsModule = AppConfigUtilsModule;
    exports.ConfigService = ConfigService;
    exports.CurrencyConfigPipe = CurrencyConfigPipe;
    exports.DateConfigPipe = DateConfigPipe;
    exports.DateTimeConfigPipe = DateTimeConfigPipe;
    exports.TimeConfigPipe = TimeConfigPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-app-config.umd.js.map
