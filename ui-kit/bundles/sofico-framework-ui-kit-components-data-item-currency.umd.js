(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@sofico-framework/ui-kit/components/currency'), require('@sofico-framework/ui-kit/components/data-item')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/data-item-currency', ['exports', '@angular/core', '@angular/common', '@sofico-framework/ui-kit/components/currency', '@sofico-framework/ui-kit/components/data-item'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['data-item-currency'] = {}), global.ng.core, global.ng.common, global['sofico-framework']['ui-kit'].components.currency, global['sofico-framework']['ui-kit'].components['data-item']));
}(this, (function (exports, core, common, currency, dataItem) { 'use strict';

  var DataItemCurrencyComponent = /** @class */ (function () {
      function DataItemCurrencyComponent() {
          this.minFraction = 2;
          this.maxFraction = 17;
      }
      return DataItemCurrencyComponent;
  }());
  DataItemCurrencyComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-data-item-currency',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <sof-data-item>\n      <ng-container data-item-label>\n        {{ label }}\n      </ng-container>\n      <ng-container data-item-value>\n        <sof-currency\n          [value]=\"value\"\n          [currencyCode]=\"currencyCode\"\n          [minFraction]=\"minFraction\"\n          [maxFraction]=\"maxFraction\"\n        ></sof-currency>\n      </ng-container>\n    </sof-data-item>\n  "
              },] }
  ];
  DataItemCurrencyComponent.propDecorators = {
      label: [{ type: core.Input }],
      value: [{ type: core.Input }],
      currencyCode: [{ type: core.Input }],
      minFraction: [{ type: core.Input }],
      maxFraction: [{ type: core.Input }]
  };

  var DataItemCurrencyModule = /** @class */ (function () {
      function DataItemCurrencyModule() {
      }
      return DataItemCurrencyModule;
  }());
  DataItemCurrencyModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [DataItemCurrencyComponent],
                  imports: [common.CommonModule, dataItem.DataItemComponentModule, currency.CurrencyComponentModule],
                  exports: [DataItemCurrencyComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.DataItemCurrencyComponent = DataItemCurrencyComponent;
  exports.DataItemCurrencyModule = DataItemCurrencyModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item-currency.umd.js.map
