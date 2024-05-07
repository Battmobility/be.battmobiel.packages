import { Component, ChangeDetectionStrategy, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@ng-bootstrap/ng-bootstrap';
import * as ɵngcc3 from '@angular/router';
import * as ɵngcc4 from '@sofico-framework/ui-kit/components/svg-icon';

const _c0 = ["dropDown"];
function DropDownComponent_ng_container_0_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DropDownComponent_ng_container_0_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DropDownComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵtemplate(2, DropDownComponent_ng_container_0_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "a", 9);
    ɵngcc0.ɵɵtemplate(4, DropDownComponent_ng_container_0_ng_container_3_ng_container_4_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    const _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("d-none", ctx_r4.isDisabled);
    ɵngcc0.ɵɵproperty("routerLink", null)("ngClass", ctx_r4.config.toggleButtonClasses);
    ɵngcc0.ɵɵattribute("id", ctx_r4.config.toggleButtonId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("d-none", !ctx_r4.isDisabled);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r4.config.toggleButtonClasses);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1);
} }
function DropDownComponent_ng_container_0_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DropDownComponent_ng_container_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "button", 10);
    ɵngcc0.ɵɵtemplate(1, DropDownComponent_ng_container_0_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    const _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r6.isDisabled)("ngClass", ctx_r6.config.toggleButtonClasses);
    ɵngcc0.ɵɵattribute("id", ctx_r6.config.toggleButtonId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1);
} }
function DropDownComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 2, 3);
    ɵngcc0.ɵɵtemplate(3, DropDownComponent_ng_container_0_ng_container_3_Template, 5, 10, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(4, DropDownComponent_ng_container_0_ng_template_4_Template, 2, 4, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementStart(6, "div", 6);
    ɵngcc0.ɵɵprojection(7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r5 = ɵngcc0.ɵɵreference(5);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("placement", ctx_r0.config.dropDownPlacement ? ctx_r0.config.dropDownPlacement : "bottom-left");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isWithinNavBar)("ngIfElse", _r5);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵattribute("aria-labelledby", ctx_r0.config.toggleButtonId);
} }
function DropDownComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "span", 12);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r10.badge);
} }
function DropDownComponent_ng_template_1_sof_svg_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sof-svg-icon", 13);
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("mr-3", ctx_r11.config.toggleButtonText);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r11.config.toggleButtonIconClasses)("icon", ctx_r11.config.toggleButtonIcon)("size", ctx_r11.config.toggleButtonIconSize);
} }
function DropDownComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DropDownComponent_ng_template_1_ng_container_0_Template, 3, 1, "ng-container", 0);
    ɵngcc0.ɵɵtemplate(1, DropDownComponent_ng_template_1_sof_svg_icon_1_Template, 1, 5, "sof-svg-icon", 11);
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.badge);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.config.toggleButtonIcon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.config.toggleButtonText);
} }
const _c1 = ["*"];
class DropDownComponent {
    constructor() {
        this.config = {};
        this.isWithinNavBar = false;
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (((_a = changes.isDisabled) === null || _a === void 0 ? void 0 : _a.currentValue) && ((_b = this.dropDownVC) === null || _b === void 0 ? void 0 : _b.isOpen())) {
            this.dropDownVC.close();
        }
    }
}
DropDownComponent.ɵfac = function DropDownComponent_Factory(t) { return new (t || DropDownComponent)(); };
DropDownComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DropDownComponent, selectors: [["sof-drop-down"]], viewQuery: function DropDownComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropDownVC = _t.first);
    } }, inputs: { config: "config", isWithinNavBar: "isWithinNavBar", isDisabled: "isDisabled", badge: "badge" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 3, vars: 1, consts: [[4, "ngIf"], ["buttonRef", ""], ["ngbDropdown", "", 1, "d-inline-block", 3, "placement"], ["dropDown", "ngbDropdown"], [4, "ngIf", "ngIfElse"], ["alternative", ""], ["ngbDropdownMenu", ""], ["ngbDropdownToggle", "", 1, "nav-link", 3, "routerLink", "ngClass"], [4, "ngTemplateOutlet"], [1, "nav-link", 3, "ngClass"], ["ngbDropdownToggle", "", "type", "button", 1, "drop-down-button", 3, "disabled", "ngClass"], [3, "mr-3", "ngClass", "icon", "size", 4, "ngIf"], [1, "badge", "badge-primary"], [3, "ngClass", "icon", "size"]], template: function DropDownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, DropDownComponent_ng_container_0_Template, 8, 4, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, DropDownComponent_ng_template_1_Template, 4, 3, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.config !== null);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NgbDropdown, ɵngcc2.NgbDropdownMenu, ɵngcc3.RouterLinkWithHref, ɵngcc2.NgbDropdownToggle, ɵngcc1.NgClass, ɵngcc1.NgTemplateOutlet, ɵngcc4.SvgIconComponent], styles: ["[_nghost-%COMP%]{display:inline-block}.nav-link[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:2px}.drop-down-button[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%]{display:flex;align-items:center}.drop-down-button[_ngcontent-%COMP%]:after, .nav-link[_ngcontent-%COMP%]:after{margin-left:.5rem}"], changeDetection: 0 });
DropDownComponent.propDecorators = {
    config: [{ type: Input }],
    isDisabled: [{ type: Input }],
    badge: [{ type: Input }],
    isWithinNavBar: [{ type: Input }],
    dropDownVC: [{ type: ViewChild, args: ['dropDown',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DropDownComponent, [{
        type: Component,
        args: [{
                selector: `sof-drop-down`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="config !== null">
      <div
        ngbDropdown
        #dropDown="ngbDropdown"
        [placement]="
          config.dropDownPlacement ? config.dropDownPlacement : 'bottom-left'
        "
        class="d-inline-block"
      >
        <ng-container *ngIf="isWithinNavBar; else alternative">
          <a
            [class.d-none]="isDisabled"
            ngbDropdownToggle
            [routerLink]="null"
            class="nav-link"
            [attr.id]="config.toggleButtonId"
            [ngClass]="config.toggleButtonClasses"
          >
            <ng-container *ngTemplateOutlet="buttonRef"></ng-container>
          </a>
          <a
            [class.d-none]="!isDisabled"
            class="nav-link"
            [ngClass]="config.toggleButtonClasses"
          >
            <ng-container *ngTemplateOutlet="buttonRef"></ng-container>
          </a>
        </ng-container>
        <ng-template #alternative>
          <button
            ngbDropdownToggle
            class="drop-down-button"
            type="button"
            [disabled]="isDisabled"
            [attr.id]="config.toggleButtonId"
            [ngClass]="config.toggleButtonClasses"
          >
            <ng-container *ngTemplateOutlet="buttonRef"></ng-container>
          </button>
        </ng-template>

        <div ngbDropdownMenu [attr.aria-labelledby]="config.toggleButtonId">
          <ng-content></ng-content>
        </div>
      </div>
    </ng-container>

    <ng-template #buttonRef>
      <ng-container *ngIf="badge">
        <span class="badge badge-primary">{{ badge }}</span>
      </ng-container>
      <sof-svg-icon
        *ngIf="config.toggleButtonIcon"
        [class.mr-3]="config.toggleButtonText"
        [ngClass]="config.toggleButtonIconClasses"
        [icon]="config.toggleButtonIcon"
        [size]="config.toggleButtonIconSize"
      ></sof-svg-icon>
      <span>{{ config.toggleButtonText }}</span>
    </ng-template>
  `,
                styles: [":host{display:inline-block}.nav-link{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:2px}.drop-down-button,.nav-link{display:flex;align-items:center}.drop-down-button:after,.nav-link:after{margin-left:.5rem}"]
            }]
    }], function () { return []; }, { config: [{
            type: Input
        }], isWithinNavBar: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], badge: [{
            type: Input
        }], dropDownVC: [{
            type: ViewChild,
            args: ['dropDown']
        }] }); })();

class DropDownModule {
}
DropDownModule.ɵfac = function DropDownModule_Factory(t) { return new (t || DropDownModule)(); };
DropDownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DropDownModule });
DropDownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, NgbDropdownModule, SvgIconModule, RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DropDownModule, { declarations: function () { return [DropDownComponent]; }, imports: function () { return [CommonModule, NgbDropdownModule, SvgIconModule, RouterModule]; }, exports: function () { return [DropDownComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DropDownModule, [{
        type: NgModule,
        args: [{
                declarations: [DropDownComponent],
                exports: [DropDownComponent],
                imports: [CommonModule, NgbDropdownModule, SvgIconModule, RouterModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { DropDownComponent, DropDownModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-drop-down.js.map