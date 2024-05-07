(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/license-plate', ['exports', '@angular/core', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['license-plate'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

  var LicensePlateComponent = /** @class */ (function () {
      function LicensePlateComponent() {
          var _a;
          this.licensePlateCountryCodes = (_a = {},
              _a['be'] = 'B',
              _a['de'] = 'D',
              _a['fr'] = 'F',
              _a['lu'] = 'L',
              _a['nl'] = 'NL',
              _a);
      }
      Object.defineProperty(LicensePlateComponent.prototype, "countryCode", {
          /**
           * Country code is specified in ISO Alpha 2 format.
           * ex: BE, NL, DE, etc
           */
          set: function (value) {
              this.localCountryCode = value === null || value === void 0 ? void 0 : value.toLocaleLowerCase();
          },
          enumerable: false,
          configurable: true
      });
      return LicensePlateComponent;
  }());
  LicensePlateComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-license-plate',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <div class=\"license-plate license-plate-{{ localCountryCode }}\">\n      <div\n        *ngIf=\"licensePlateCountryCodes[localCountryCode] as code\"\n        class=\"country-code\"\n      >\n        {{ code }}\n      </div>\n      <span class=\"value\">\n        {{ value }}\n      </span>\n    </div>\n  ",
                  styles: [".license-plate{display:inline-flex;border:1px solid #000;border-radius:2px;min-width:100px;font-weight:500}.license-plate .country-code{display:flex;align-items:center;padding-left:6px;padding-right:6px;text-align:center;font-size:.625rem}.license-plate .value{display:flex;justify-content:center;align-items:center;width:100%;padding-left:.5rem;padding-right:.5rem;text-align:center;white-space:nowrap;background-color:#fff;color:#000}.license-plate-be{border-color:#ac191a}.license-plate-be .country-code{background-color:#19469f;color:#fff}.license-plate-be .value{background-color:#e1e6e3;color:#ac191a}.license-plate-de{border-color:#000}.license-plate-de .country-code{background-color:#19469f;color:#fff}.license-plate-de .value{background-color:#fff;color:#000}.license-plate-nl{border-color:#000}.license-plate-nl .country-code{background-color:#19469f;color:#fff}.license-plate-nl .value{background-color:#ffd104;color:#000}.license-plate-lu{border-color:#000}.license-plate-lu .country-code{background-color:#19469f;color:#fff}.license-plate-lu .value{background-color:#ffd104;color:#000}.license-plate-fr{border-color:#000}.license-plate-fr .country-code{background-color:#19469f;color:#fff}.license-plate-fr .value{background-color:#fff;color:#000}"]
              },] }
  ];
  LicensePlateComponent.propDecorators = {
      countryCode: [{ type: core.Input }],
      value: [{ type: core.Input }]
  };

  var LicensePlateComponentModule = /** @class */ (function () {
      function LicensePlateComponentModule() {
      }
      return LicensePlateComponentModule;
  }());
  LicensePlateComponentModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule],
                  declarations: [LicensePlateComponent],
                  exports: [LicensePlateComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.LicensePlateComponent = LicensePlateComponent;
  exports.LicensePlateComponentModule = LicensePlateComponentModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-license-plate.umd.js.map
