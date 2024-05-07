import { ModuleWithProviders } from '@angular/core';
import { PageTitleConfig } from './page-title.config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@ngx-translate/core';
export declare class PageTitleModule {
    constructor(parentModule: PageTitleModule);
    /**
     * Optional configuration
     * @param pageTitleConfig some basic settings used by PageTitleService
     */
    static forRoot(pageTitleConfig: PageTitleConfig): ModuleWithProviders<PageTitleModule>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageTitleModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<PageTitleModule, never, [typeof ɵngcc1.CommonModule, typeof ɵngcc2.TranslateModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<PageTitleModule>;
}

//# sourceMappingURL=page-title.module.d.ts.map