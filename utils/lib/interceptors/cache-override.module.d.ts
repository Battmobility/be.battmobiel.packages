import { ModuleWithProviders, Type } from '@angular/core';
import { WindowRefService } from '../services/window-ref.service';
import { CacheOverrideConfigAbstract } from './cache-override-config.abstract';
import * as ɵngcc0 from '@angular/core';
export declare class CacheOverrideModule {
    constructor(parentModule: CacheOverrideModule, windowRefService: WindowRefService, cacheOverrideConfig: CacheOverrideConfigAbstract);
    static forRoot(cacheOverrideConfig: Type<CacheOverrideConfigAbstract>): ModuleWithProviders<CacheOverrideModule>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CacheOverrideModule, [{ optional: true; skipSelf: true; }, { optional: true; }, { optional: true; }]>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<CacheOverrideModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<CacheOverrideModule>;
}

//# sourceMappingURL=cache-override.module.d.ts.map