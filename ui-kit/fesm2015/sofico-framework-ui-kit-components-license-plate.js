import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
LicensePlateComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
LicensePlateComponent.propDecorators = {
    countryCode: [{ type: Input }],
    value: [{ type: Input }]
};

class LicensePlateComponentModule {
}
LicensePlateComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [LicensePlateComponent],
                exports: [LicensePlateComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { LicensePlateComponent, LicensePlateComponentModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-license-plate.js.map
