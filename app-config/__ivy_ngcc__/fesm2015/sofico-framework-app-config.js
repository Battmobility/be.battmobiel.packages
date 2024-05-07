import { CurrencyPipe, DatePipe, CommonModule } from '@angular/common';
import { InjectionToken, Injectable, Inject, Pipe, NgModule, Optional, SkipSelf } from '@angular/core';
import { WindowRefService, ObjectService } from '@sofico-framework/utils';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@sofico-framework/utils';
import * as ɵngcc2 from '@angular/common';
const APP_CONFIG_TOKEN = new InjectionToken('app-config-token');

class ConfigService {
    constructor(appConfig, windowRefService, objectService) {
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
        const location = this.windowRefService.nativeWindow.location;
        const defaultConfig = {
            api: {
                baseUrl: `${location.protocol}//${location.host}/api`
            },
            auth: {
                clientId: '',
                allowedUrls: [`${location.protocol}//${location.host}`],
                baseUrl: `${location.protocol}//${location.host}/auth/realms/`,
                grant: 'implicit',
                realm: 'master',
                logoutRedirectUrls: []
            },
            debug: false,
            app: appConfig
        };
        let baseConfig;
        if ((_c = this.provisioningConfig) === null || _c === void 0 ? void 0 : _c.base) {
            baseConfig = {
                api: {
                    baseUrl: `https://${this.provisioningConfig.base.domain}/api`
                },
                auth: {
                    clientId: this.provisioningConfig.base.clientId,
                    allowedUrls: [`https://${this.provisioningConfig.base.domain}/api`],
                    baseUrl: `https://${this.provisioningConfig.base.domain}/auth/realms/`,
                    grant: 'implicit',
                    realm: 'master',
                    logoutRedirectUrls: []
                },
                app: appConfig
            };
        }
        let config = this.objectService.mergeDeep(defaultConfig, baseConfig, this.provisioningConfig);
        // We ensure the API and AUTH baseUrl have a trailing slash
        config = Object.assign(Object.assign({}, config), { api: Object.assign(Object.assign({}, config.api), { baseUrl: this.getValidUrl(config.api.baseUrl) }), auth: Object.assign(Object.assign({}, config.auth), { baseUrl: this.getValidUrl(config.auth.baseUrl) }) });
        this.config = config;
    }
    getValidUrl(url) {
        if ((url === null || url === void 0 ? void 0 : url.substr(-1)) !== '/') {
            return `${url}/`;
        }
        return url;
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(ɵngcc0.ɵɵinject(APP_CONFIG_TOKEN), ɵngcc0.ɵɵinject(ɵngcc1.WindowRefService), ɵngcc0.ɵɵinject(ɵngcc1.ObjectService)); };
ConfigService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac });
ConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [APP_CONFIG_TOKEN,] }] },
    { type: WindowRefService },
    { type: ObjectService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [APP_CONFIG_TOKEN]
            }] }, { type: ɵngcc1.WindowRefService }, { type: ɵngcc1.ObjectService }]; }, null); })();

class CurrencyConfigPipe {
    constructor(currencyPipe, configService) {
        this.currencyPipe = currencyPipe;
        this.configService = configService;
    }
    transform(value) {
        return this.currencyPipe.transform(value, this.configService.config.app.currencyCode);
    }
}
CurrencyConfigPipe.ɵfac = function CurrencyConfigPipe_Factory(t) { return new (t || CurrencyConfigPipe)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.CurrencyPipe), ɵngcc0.ɵɵdirectiveInject(ConfigService)); };
CurrencyConfigPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "sofCurrencyConfig", type: CurrencyConfigPipe, pure: true });
CurrencyConfigPipe.ctorParameters = () => [
    { type: CurrencyPipe },
    { type: ConfigService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CurrencyConfigPipe, [{
        type: Pipe,
        args: [{ name: 'sofCurrencyConfig' }]
    }], function () { return [{ type: ɵngcc2.CurrencyPipe }, { type: ConfigService }]; }, null); })();

class DateConfigPipe {
    constructor(datePipe, configService) {
        this.datePipe = datePipe;
        this.configService = configService;
    }
    transform(value) {
        return this.datePipe.transform(value, this.configService.config.app.dateFormat);
    }
}
DateConfigPipe.ɵfac = function DateConfigPipe_Factory(t) { return new (t || DateConfigPipe)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DatePipe), ɵngcc0.ɵɵdirectiveInject(ConfigService)); };
DateConfigPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "sofDateConfig", type: DateConfigPipe, pure: true });
DateConfigPipe.ctorParameters = () => [
    { type: DatePipe },
    { type: ConfigService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DateConfigPipe, [{
        type: Pipe,
        args: [{ name: 'sofDateConfig' }]
    }], function () { return [{ type: ɵngcc2.DatePipe }, { type: ConfigService }]; }, null); })();

class TimeConfigPipe {
    constructor(configService, datePipe) {
        this.configService = configService;
        this.datePipe = datePipe;
    }
    transform(value) {
        const dateTimeString = `1970-01-01 ${value}`;
        return this.datePipe.transform(dateTimeString, this.configService.config.app.timeFormat);
    }
}
TimeConfigPipe.ɵfac = function TimeConfigPipe_Factory(t) { return new (t || TimeConfigPipe)(ɵngcc0.ɵɵdirectiveInject(ConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DatePipe)); };
TimeConfigPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "sofTimeConfig", type: TimeConfigPipe, pure: true });
TimeConfigPipe.ctorParameters = () => [
    { type: ConfigService },
    { type: DatePipe }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TimeConfigPipe, [{
        type: Pipe,
        args: [{ name: 'sofTimeConfig' }]
    }], function () { return [{ type: ConfigService }, { type: ɵngcc2.DatePipe }]; }, null); })();

class DateTimeConfigPipe {
    constructor(configService, datePipe) {
        this.configService = configService;
        this.datePipe = datePipe;
    }
    transform(value) {
        return this.datePipe.transform(value, this.configService.config.app.dateFormat +
            ' ' +
            this.configService.config.app.timeFormat);
    }
}
DateTimeConfigPipe.ɵfac = function DateTimeConfigPipe_Factory(t) { return new (t || DateTimeConfigPipe)(ɵngcc0.ɵɵdirectiveInject(ConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DatePipe)); };
DateTimeConfigPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "sofDateTimeConfig", type: DateTimeConfigPipe, pure: true });
DateTimeConfigPipe.ctorParameters = () => [
    { type: ConfigService },
    { type: DatePipe }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DateTimeConfigPipe, [{
        type: Pipe,
        args: [{ name: 'sofDateTimeConfig' }]
    }], function () { return [{ type: ConfigService }, { type: ɵngcc2.DatePipe }]; }, null); })();

class AppConfigModule {
    constructor(parentModule, appConfig, windowRefService) {
        this.appConfig = appConfig;
        if (parentModule) {
            throw new Error('AppConfigModule is already loaded. Import in your base AppModule only.');
        }
        if (!appConfig) {
            throw Error(`${AppConfigModule.name} should be imported using forRoot static method!`);
        }
        if (!windowRefService) {
            throw new Error('You need to import the UtilServicesModule in your AppModule!');
        }
    }
    static forRoot(config) {
        return {
            ngModule: AppConfigModule,
            providers: [
                {
                    provide: APP_CONFIG_TOKEN,
                    useValue: config
                }
            ]
        };
    }
}
AppConfigModule.ɵfac = function AppConfigModule_Factory(t) { return new (t || AppConfigModule)(ɵngcc0.ɵɵinject(AppConfigModule, 12), ɵngcc0.ɵɵinject(APP_CONFIG_TOKEN, 8), ɵngcc0.ɵɵinject(ɵngcc1.WindowRefService, 8)); };
AppConfigModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AppConfigModule });
AppConfigModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ providers: [ConfigService], imports: [[CommonModule]] });
AppConfigModule.ctorParameters = () => [
    { type: AppConfigModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [APP_CONFIG_TOKEN,] }] },
    { type: WindowRefService, decorators: [{ type: Optional }] }
];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AppConfigModule, { imports: function () { return [CommonModule]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AppConfigModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                providers: [ConfigService]
            }]
    }], function () { return [{ type: AppConfigModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [APP_CONFIG_TOKEN]
            }] }, { type: ɵngcc1.WindowRefService, decorators: [{
                type: Optional
            }] }]; }, null); })();

class AppConfigUtilsModule {
}
AppConfigUtilsModule.ɵfac = function AppConfigUtilsModule_Factory(t) { return new (t || AppConfigUtilsModule)(); };
AppConfigUtilsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AppConfigUtilsModule });
AppConfigUtilsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AppConfigUtilsModule, { declarations: function () { return [CurrencyConfigPipe, DateConfigPipe, TimeConfigPipe, DateTimeConfigPipe]; }, imports: function () { return [CommonModule]; }, exports: function () { return [CurrencyConfigPipe, DateConfigPipe, TimeConfigPipe, DateTimeConfigPipe]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AppConfigUtilsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
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
            }]
    }], null, null); })();

/*
 * Public API Surface of app-config
 */

/**
 * Generated bundle index. Do not edit.
 */

export { APP_CONFIG_TOKEN, AppConfigModule, AppConfigUtilsModule, ConfigService, CurrencyConfigPipe, DateConfigPipe, DateTimeConfigPipe, TimeConfigPipe };

//# sourceMappingURL=sofico-framework-app-config.js.map