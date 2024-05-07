import { DropDownConfig } from '@sofico-framework/ui-kit/components/drop-down';
import { DropDownMenuItem } from './types/drop-down-menu-item.type';
import * as ɵngcc0 from '@angular/core';
export declare class DropDownMenuComponent {
    tc: string;
    isWithinNavBar: boolean;
    dropDownConfig: DropDownConfig;
    /**
     * Both routerLink and click are supported for menu items. They should not be combined though.
     */
    menuItems: DropDownMenuItem[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DropDownMenuComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DropDownMenuComponent, "sof-drop-down-menu", never, { "isWithinNavBar": "isWithinNavBar"; "dropDownConfig": "dropDownConfig"; "menuItems": "menuItems"; "tc": "tc"; }, {}, never, never>;
}

//# sourceMappingURL=drop-down-menu.component.d.ts.map