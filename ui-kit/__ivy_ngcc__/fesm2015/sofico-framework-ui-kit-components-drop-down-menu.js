import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DropDownModule } from '@sofico-framework/ui-kit/components/drop-down';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@sofico-framework/ui-kit/components/drop-down';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '@angular/router';
import * as ɵngcc4 from '@sofico-framework/ui-kit/components/svg-icon';
import * as ɵngcc5 from '@ngx-translate/core';

function DropDownMenuComponent_a_1_sof_svg_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sof-svg-icon", 4);
} if (rf & 2) {
    const menuItem_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", menuItem_r1.itemIcon.classes)("icon", menuItem_r1.itemIcon.icon)("size", menuItem_r1.itemIcon.size);
} }
const _c0 = function () { return []; };
function DropDownMenuComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 2);
    ɵngcc0.ɵɵlistener("click", function DropDownMenuComponent_a_1_Template_a_click_0_listener($event) { const menuItem_r1 = ctx.$implicit; return menuItem_r1.click && menuItem_r1.click($event); });
    ɵngcc0.ɵɵtemplate(1, DropDownMenuComponent_a_1_sof_svg_icon_1_Template, 1, 3, "sof-svg-icon", 3);
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵpipe(4, "translate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("routerLink", menuItem_r1.routerLink || ɵngcc0.ɵɵpureFunction0(6, _c0));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", menuItem_r1.itemIcon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", (menuItem_r1 == null ? null : menuItem_r1.label) ? ɵngcc0.ɵɵpipeBind2(4, 3, ctx_r0.tc + "." + menuItem_r1.label, menuItem_r1.params) : menuItem_r1.translation, " ");
} }
class DropDownMenuComponent {
    constructor() {
        this.isWithinNavBar = false;
        this.dropDownConfig = {};
        /**
         * Both routerLink and click are supported for menu items. They should not be combined though.
         */
        this.menuItems = [];
    }
}
DropDownMenuComponent.ɵfac = function DropDownMenuComponent_Factory(t) { return new (t || DropDownMenuComponent)(); };
DropDownMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DropDownMenuComponent, selectors: [["sof-drop-down-menu"]], inputs: { isWithinNavBar: "isWithinNavBar", dropDownConfig: "dropDownConfig", menuItems: "menuItems", tc: "tc" }, decls: 2, vars: 3, consts: [[3, "config", "isWithinNavBar"], ["ngbDropdownItem", "", "class", "dropdown-item drop-down-menu-item", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 1, "dropdown-item", "drop-down-menu-item", 3, "routerLink", "click"], ["class", "mr-3", 3, "ngClass", "icon", "size", 4, "ngIf"], [1, "mr-3", 3, "ngClass", "icon", "size"]], template: function DropDownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "sof-drop-down", 0);
        ɵngcc0.ɵɵtemplate(1, DropDownMenuComponent_a_1_Template, 5, 7, "a", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("config", ctx.dropDownConfig)("isWithinNavBar", ctx.isWithinNavBar);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.menuItems);
    } }, directives: [ɵngcc1.DropDownComponent, ɵngcc2.NgForOf, ɵngcc3.RouterLinkWithHref, ɵngcc2.NgIf, ɵngcc4.SvgIconComponent, ɵngcc2.NgClass], pipes: [ɵngcc5.TranslatePipe], styles: ["[_nghost-%COMP%]{display:inline-block}.drop-down-menu-item[_ngcontent-%COMP%]{display:flex;align-items:center}"], changeDetection: 0 });
DropDownMenuComponent.propDecorators = {
    tc: [{ type: Input }],
    isWithinNavBar: [{ type: Input }],
    dropDownConfig: [{ type: Input }],
    menuItems: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DropDownMenuComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: `sof-drop-down-menu`,
                template: `
    <sof-drop-down [config]="dropDownConfig" [isWithinNavBar]="isWithinNavBar">
      <a
        *ngFor="let menuItem of menuItems"
        ngbDropdownItem
        class="dropdown-item drop-down-menu-item"
        [routerLink]="menuItem.routerLink || []"
        (click)="menuItem.click && menuItem.click($event)"
      >
        <sof-svg-icon
          *ngIf="menuItem.itemIcon"
          class="mr-3"
          [ngClass]="menuItem.itemIcon.classes"
          [icon]="menuItem.itemIcon.icon"
          [size]="menuItem.itemIcon.size"
        ></sof-svg-icon>
        <span>
          {{
            menuItem?.label
              ? (tc + '.' + menuItem.label | translate: menuItem.params)
              : menuItem.translation
          }}
        </span>
      </a>
    </sof-drop-down>
  `,
                styles: [":host{display:inline-block}.drop-down-menu-item{display:flex;align-items:center}"]
            }]
    }], function () { return []; }, { isWithinNavBar: [{
            type: Input
        }], dropDownConfig: [{
            type: Input
        }], menuItems: [{
            type: Input
        }], tc: [{
            type: Input
        }] }); })();

class DropDownMenuModule {
}
DropDownMenuModule.ɵfac = function DropDownMenuModule_Factory(t) { return new (t || DropDownMenuModule)(); };
DropDownMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DropDownMenuModule });
DropDownMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            RouterModule,
            DropDownModule,
            SvgIconModule,
            TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DropDownMenuModule, { declarations: function () { return [DropDownMenuComponent]; }, imports: function () { return [CommonModule,
        RouterModule,
        DropDownModule,
        SvgIconModule,
        TranslateModule]; }, exports: function () { return [DropDownMenuComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DropDownMenuModule, [{
        type: NgModule,
        args: [{
                declarations: [DropDownMenuComponent],
                exports: [DropDownMenuComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    DropDownModule,
                    SvgIconModule,
                    TranslateModule
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { DropDownMenuComponent, DropDownMenuModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-drop-down-menu.js.map