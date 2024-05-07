import { ModuleWithProviders } from '@angular/core';
import { WindowRefService } from '@sofico-framework/utils';
import { AppConfig } from './types/app-config.type';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class AppConfigModule {
    private appConfig;
    constructor(parentModule: AppConfigModule, appConfig: AppConfig, windowRefService: WindowRefService);
    static forRoot(config: AppConfig): ModuleWithProviders<AppConfigModule>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AppConfigModule, [{ optional: true; skipSelf: true; }, { optional: true; }, { optional: true; }]>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<AppConfigModule, never, [typeof ɵngcc1.CommonModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<AppConfigModule>;
}

//# sourceMappingURL=app-config.module.d.ts.map