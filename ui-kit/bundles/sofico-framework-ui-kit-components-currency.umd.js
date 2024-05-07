(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@sofico-framework/utils'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/currency', ['exports', '@angular/core', '@sofico-framework/utils', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.currency = {}), global.ng.core, global.utils, global.ng.common));
}(this, (function (exports, core, utils, common) { 'use strict';

  var CurrencyComponent = /** @class */ (function () {
      function CurrencyComponent() {
          /**
           * The minimal fraction
           */
          this.minFraction = 2;
          /**
           * The maximal fraction
           */
          this.maxFraction = 17;
      }
      Object.defineProperty(CurrencyComponent.prototype, "isNumber", {
          get: function () {
              return utils.isNumber(this.value);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(CurrencyComponent.prototype, "format", {
          get: function () {
              return "1." + this.minFraction + "-" + this.maxFraction;
          },
          enumerable: false,
          configurable: true
      });
      return CurrencyComponent;
  }());
  CurrencyComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-currency',
                  template: "\n    <ng-container *ngIf=\"isNumber; else noValue\">\n      {{ value | currency: currencyCode:'symbol-narrow':format }}\n    </ng-container>\n    <ng-template #noValue>-</ng-template>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush
              },] }
  ];
  CurrencyComponent.propDecorators = {
      value: [{ type: core.Input }],
      currencyCode: [{ type: core.Input }],
      minFraction: [{ type: core.Input }],
      maxFraction: [{ type: core.Input }]
  };

  var CurrencyComponentModule = /** @class */ (function () {
      function CurrencyComponentModule() {
      }
      return CurrencyComponentModule;
  }());
  CurrencyComponentModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule],
                  declarations: [CurrencyComponent],
                  exports: [CurrencyComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.CurrencyComponent = CurrencyComponent;
  exports.CurrencyComponentModule = CurrencyComponentModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-currency.umd.js.map
