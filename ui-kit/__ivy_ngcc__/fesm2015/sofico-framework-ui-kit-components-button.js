import { Component, ChangeDetectionStrategy, Input, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule } from '@sofico-framework/ui-kit/components/loading';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@sofico-framework/ui-kit/components/loading';
import * as ɵngcc3 from '@sofico-framework/ui-kit/components/svg-icon';

const _c0 = ["sofButton", ""];
function ButtonDirectiveComponent_sof_loading_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sof-loading", 5);
} }
function ButtonDirectiveComponent_sof_svg_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sof-svg-icon", 6);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵclassProp("mr-2", _r2.childNodes.length !== 0 || ctx_r1.iconSuffix)("invisible", ctx_r1.loading);
    ɵngcc0.ɵɵproperty("icon", ctx_r1.icon)("size", ctx_r1.iconSize);
} }
function ButtonDirectiveComponent_sof_svg_icon_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sof-svg-icon", 6);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵclassProp("ml-2", _r2.childNodes.length !== 0)("invisible", ctx_r3.loading);
    ɵngcc0.ɵɵproperty("icon", ctx_r3.iconSuffix)("size", ctx_r3.iconSuffixSize);
} }
const _c1 = ["*"];
class ButtonDirectiveComponent {
    constructor() {
        /**
         * Defines what size the icon will have.
         * The default size will be 16px.
         */
        this.iconSize = '16';
        /**
         * Defines what size the suffix icon will have.
         * The default size will be 16px.
         */
        this.iconSuffixSize = '16';
        /**
         * Defines what the button type must be. Defaults to: 'button'.
         * Possible values are based on the HTML standard.
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
         */
        this.type = 'button';
    }
}
ButtonDirectiveComponent.ɵfac = function ButtonDirectiveComponent_Factory(t) { return new (t || ButtonDirectiveComponent)(); };
ButtonDirectiveComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ButtonDirectiveComponent, selectors: [["", "sofButton", ""]], hostVars: 1, hostBindings: function ButtonDirectiveComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("type", ctx.type);
    } }, inputs: { iconSize: "iconSize", iconSuffixSize: "iconSuffixSize", type: "type", loading: "loading", icon: "icon", iconSuffix: "iconSuffix" }, attrs: _c0, ngContentSelectors: _c1, decls: 7, vars: 5, consts: [[1, "button-wrapper", "d-flex", "justify-content-center", "align-items-center", "position-relative"], ["size", "sm", "class", "position-absolute", 4, "ngIf"], [3, "icon", "size", "mr-2", "invisible", 4, "ngIf"], ["contentWrapper", ""], [3, "icon", "size", "ml-2", "invisible", 4, "ngIf"], ["size", "sm", 1, "position-absolute"], [3, "icon", "size"]], template: function ButtonDirectiveComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ButtonDirectiveComponent_sof_loading_1_Template, 1, 0, "sof-loading", 1);
        ɵngcc0.ɵɵtemplate(2, ButtonDirectiveComponent_sof_svg_icon_2_Template, 1, 6, "sof-svg-icon", 2);
        ɵngcc0.ɵɵelementStart(3, "span", null, 3);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, ButtonDirectiveComponent_sof_svg_icon_6_Template, 1, 6, "sof-svg-icon", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.loading);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("invisible", ctx.loading);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.iconSuffix);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.LoadingComponent, ɵngcc3.SvgIconComponent], styles: [""], changeDetection: 0 });
ButtonDirectiveComponent.propDecorators = {
    loading: [{ type: Input }],
    icon: [{ type: Input }],
    iconSuffix: [{ type: Input }],
    iconSize: [{ type: Input }],
    iconSuffixSize: [{ type: Input }],
    type: [{ type: HostBinding, args: ['attr.type',] }, { type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonDirectiveComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: '[sofButton]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div
      class="button-wrapper d-flex justify-content-center align-items-center position-relative"
    >
      <sof-loading
        *ngIf="loading"
        size="sm"
        class="position-absolute"
      ></sof-loading>
      <sof-svg-icon
        *ngIf="icon"
        [icon]="icon"
        [size]="iconSize"
        [class.mr-2]="contentWrapper.childNodes.length !== 0 || iconSuffix"
        [class.invisible]="loading"
      >
      </sof-svg-icon>
      <span #contentWrapper [class.invisible]="loading">
        <ng-content></ng-content>
      </span>
      <sof-svg-icon
        *ngIf="iconSuffix"
        [icon]="iconSuffix"
        [size]="iconSuffixSize"
        [class.ml-2]="contentWrapper.childNodes.length !== 0"
        [class.invisible]="loading"
      >
      </sof-svg-icon>
    </div>
  `,
                styles: [""]
            }]
    }], function () { return []; }, { iconSize: [{
            type: Input
        }], iconSuffixSize: [{
            type: Input
        }], type: [{
            type: HostBinding,
            args: ['attr.type']
        }, {
            type: Input
        }], loading: [{
            type: Input
        }], icon: [{
            type: Input
        }], iconSuffix: [{
            type: Input
        }] }); })();

class ButtonModule {
}
ButtonModule.ɵfac = function ButtonModule_Factory(t) { return new (t || ButtonModule)(); };
ButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, LoadingModule, SvgIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonModule, { declarations: function () { return [ButtonDirectiveComponent]; }, imports: function () { return [CommonModule, LoadingModule, SvgIconModule]; }, exports: function () { return [ButtonDirectiveComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, LoadingModule, SvgIconModule],
                declarations: [ButtonDirectiveComponent],
                exports: [ButtonDirectiveComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonDirectiveComponent, ButtonModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-button.js.map