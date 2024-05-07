import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function LicensePlateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const code_r1 = ctx.ngIf;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", code_r1, " ");
} }
class LicensePlateComponent {
    constructor() {
        this.licensePlateCountryCodes = {
            ['be']: 'B',
            ['de']: 'D',
            ['fr']: 'F',
            ['lu']: 'L',
            ['nl']: 'NL'
        };
    }
    /**
     * Country code is specified in ISO Alpha 2 format.
     * ex: BE, NL, DE, etc
     */
    set countryCode(value) {
        this.localCountryCode = value === null || value === void 0 ? void 0 : value.toLocaleLowerCase();
    }
}
LicensePlateComponent.ɵfac = function LicensePlateComponent_Factory(t) { return new (t || LicensePlateComponent)(); };
LicensePlateComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LicensePlateComponent, selectors: [["sof-license-plate"]], inputs: { countryCode: "countryCode", value: "value" }, decls: 4, vars: 5, consts: [["class", "country-code", 4, "ngIf"], [1, "value"], [1, "country-code"]], template: function LicensePlateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, LicensePlateComponent_div_1_Template, 2, 1, "div", 0);
        ɵngcc0.ɵɵelementStart(2, "span", 1);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("license-plate license-plate-", ctx.localCountryCode, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.licensePlateCountryCodes[ctx.localCountryCode]);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.value, " ");
    } }, directives: [ɵngcc1.NgIf], styles: [".license-plate[_ngcontent-%COMP%]{display:inline-flex;border:1px solid #000;border-radius:2px;min-width:100px;font-weight:500}.license-plate[_ngcontent-%COMP%]   .country-code[_ngcontent-%COMP%]{display:flex;align-items:center;padding-left:6px;padding-right:6px;text-align:center;font-size:.625rem}.license-plate[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;padding-left:.5rem;padding-right:.5rem;text-align:center;white-space:nowrap;background-color:#fff;color:#000}.license-plate-be[_ngcontent-%COMP%]{border-color:#ac191a}.license-plate-be[_ngcontent-%COMP%]   .country-code[_ngcontent-%COMP%]{background-color:#19469f;color:#fff}.license-plate-be[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{background-color:#e1e6e3;color:#ac191a}.license-plate-de[_ngcontent-%COMP%]{border-color:#000}.license-plate-de[_ngcontent-%COMP%]   .country-code[_ngcontent-%COMP%]{background-color:#19469f;color:#fff}.license-plate-de[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{background-color:#fff;color:#000}.license-plate-nl[_ngcontent-%COMP%]{border-color:#000}.license-plate-nl[_ngcontent-%COMP%]   .country-code[_ngcontent-%COMP%]{background-color:#19469f;color:#fff}.license-plate-nl[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{background-color:#ffd104;color:#000}.license-plate-lu[_ngcontent-%COMP%]{border-color:#000}.license-plate-lu[_ngcontent-%COMP%]   .country-code[_ngcontent-%COMP%]{background-color:#19469f;color:#fff}.license-plate-lu[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{background-color:#ffd104;color:#000}.license-plate-fr[_ngcontent-%COMP%]{border-color:#000}.license-plate-fr[_ngcontent-%COMP%]   .country-code[_ngcontent-%COMP%]{background-color:#19469f;color:#fff}.license-plate-fr[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{background-color:#fff;color:#000}"], changeDetection: 0 });
LicensePlateComponent.propDecorators = {
    countryCode: [{ type: Input }],
    value: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LicensePlateComponent, [{
        type: Component,
        args: [{
                selector: 'sof-license-plate',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="license-plate license-plate-{{ localCountryCode }}">
      <div
        *ngIf="licensePlateCountryCodes[localCountryCode] as code"
        class="country-code"
      >
        {{ code }}
      </div>
      <span class="value">
        {{ value }}
      </span>
    </div>
  `,
                styles: [".license-plate{display:inline-flex;border:1px solid #000;border-radius:2px;min-width:100px;font-weight:500}.license-plate .country-code{display:flex;align-items:center;padding-left:6px;padding-right:6px;text-align:center;font-size:.625rem}.license-plate .value{display:flex;justify-content:center;align-items:center;width:100%;padding-left:.5rem;padding-right:.5rem;text-align:center;white-space:nowrap;background-color:#fff;color:#000}.license-plate-be{border-color:#ac191a}.license-plate-be .country-code{background-color:#19469f;color:#fff}.license-plate-be .value{background-color:#e1e6e3;color:#ac191a}.license-plate-de{border-color:#000}.license-plate-de .country-code{background-color:#19469f;color:#fff}.license-plate-de .value{background-color:#fff;color:#000}.license-plate-nl{border-color:#000}.license-plate-nl .country-code{background-color:#19469f;color:#fff}.license-plate-nl .value{background-color:#ffd104;color:#000}.license-plate-lu{border-color:#000}.license-plate-lu .country-code{background-color:#19469f;color:#fff}.license-plate-lu .value{background-color:#ffd104;color:#000}.license-plate-fr{border-color:#000}.license-plate-fr .country-code{background-color:#19469f;color:#fff}.license-plate-fr .value{background-color:#fff;color:#000}"]
            }]
    }], function () { return []; }, { countryCode: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();

class LicensePlateComponentModule {
}
LicensePlateComponentModule.ɵfac = function LicensePlateComponentModule_Factory(t) { return new (t || LicensePlateComponentModule)(); };
LicensePlateComponentModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LicensePlateComponentModule });
LicensePlateComponentModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LicensePlateComponentModule, { declarations: function () { return [LicensePlateComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [LicensePlateComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LicensePlateComponentModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [LicensePlateComponent],
                exports: [LicensePlateComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { LicensePlateComponent, LicensePlateComponentModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-license-plate.js.map