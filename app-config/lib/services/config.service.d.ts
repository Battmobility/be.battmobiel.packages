import { ObjectService, WindowRefService } from '@sofico-framework/utils';
import { AppConfig } from '../types/app-config.type';
import { Config } from '../types/config.type';
import * as ɵngcc0 from '@angular/core';
export declare class ConfigService {
    private appConfig;
    private windowRefService;
    private objectService;
    config: Config;
    /**
     * The config that is set on the nativeWindow
     */
    private provisioningConfig;
    constructor(appConfig: AppConfig, windowRefService: WindowRefService, objectService: ObjectService);
    private getValidUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfigService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ConfigService>;
}

//# sourceMappingURL=config.service.d.ts.map