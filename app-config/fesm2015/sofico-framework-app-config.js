import { CurrencyPipe, DatePipe, CommonModule } from '@angular/common';
import { InjectionToken, Injectable, Inject, Pipe, NgModule, Optional, SkipSelf } from '@angular/core';
import { WindowRefService, ObjectService } from '@sofico-framework/utils';

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
ConfigService.decorators = [
    { type: Injectable }
];
ConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [APP_CONFIG_TOKEN,] }] },
    { type: WindowRefService },
    { type: ObjectService }
];

class CurrencyConfigPipe {
    constructor(currencyPipe, configService) {
        this.currencyPipe = currencyPipe;
        this.configService = configService;
    }
    transform(value) {
        return this.currencyPipe.transform(value, this.configService.config.app.currencyCode);
    }
}
CurrencyConfigPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofCurrencyConfig' },] }
];
CurrencyConfigPipe.ctorParameters = () => [
    { type: CurrencyPipe },
    { type: ConfigService }
];

class DateConfigPipe {
    constructor(datePipe, configService) {
        this.datePipe = datePipe;
        this.configService = configService;
    }
    transform(value) {
        return this.datePipe.transform(value, this.configService.config.app.dateFormat);
    }
}
DateConfigPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofDateConfig' },] }
];
DateConfigPipe.ctorParameters = () => [
    { type: DatePipe },
    { type: ConfigService }
];

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
TimeConfigPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofTimeConfig' },] }
];
TimeConfigPipe.ctorParameters = () => [
    { type: ConfigService },
    { type: DatePipe }
];

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
DateTimeConfigPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofDateTimeConfig' },] }
];
DateTimeConfigPipe.ctorParameters = () => [
    { type: ConfigService },
    { type: DatePipe }
];

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
AppConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [ConfigService]
            },] }
];
AppConfigModule.ctorParameters = () => [
    { type: AppConfigModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [APP_CONFIG_TOKEN,] }] },
    { type: WindowRefService, decorators: [{ type: Optional }] }
];

class AppConfigUtilsModule {
}
AppConfigUtilsModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/*
 * Public API Surface of app-config
 */

/**
 * Generated bundle index. Do not edit.
 */

export { APP_CONFIG_TOKEN, AppConfigModule, AppConfigUtilsModule, ConfigService, CurrencyConfigPipe, DateConfigPipe, DateTimeConfigPipe, TimeConfigPipe };
//# sourceMappingURL=sofico-framework-app-config.js.map
