import { ViewportScroller } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
export declare class RouterToolsService {
    private router;
    private viewportScroller;
    private position;
    constructor(router: Router, viewportScroller: ViewportScroller);
    navigateWithPositionRestore(commands: any[], extras?: NavigationExtras): Promise<boolean | void>;
    navigateWithPreviousPositionRestore(commands: any[], extras?: NavigationExtras): Promise<boolean | void>;
    private internalNavigateWithPositionRestore;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterToolsService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<RouterToolsService>;
}

//# sourceMappingURL=router-tools.service.d.ts.map