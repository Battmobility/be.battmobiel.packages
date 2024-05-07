(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@sofico-framework/ui-kit/components/data-item'), require('@sofico-framework/ui-kit/components/number')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/data-item-number', ['exports', '@angular/core', '@angular/common', '@sofico-framework/ui-kit/components/data-item', '@sofico-framework/ui-kit/components/number'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['data-item-number'] = {}), global.ng.core, global.ng.common, global['sofico-framework']['ui-kit'].components['data-item'], global['sofico-framework']['ui-kit'].components.number));
}(this, (function (exports, core, common, dataItem, number) { 'use strict';

  var DataItemNumberComponent = /** @class */ (function () {
      function DataItemNumberComponent() {
          this.minFraction = 0;
          this.maxFraction = 17;
      }
      return DataItemNumberComponent;
  }());
  DataItemNumberComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-data-item-number',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <sof-data-item>\n      <ng-container data-item-label>\n        {{ label }}\n      </ng-container>\n      <ng-container data-item-value>\n        <sof-number\n          [value]=\"value\"\n          [minFraction]=\"minFraction\"\n          [maxFraction]=\"maxFraction\"\n        >\n        </sof-number>\n      </ng-container>\n    </sof-data-item>\n  "
              },] }
  ];
  DataItemNumberComponent.propDecorators = {
      label: [{ type: core.Input }],
      value: [{ type: core.Input }],
      minFraction: [{ type: core.Input }],
      maxFraction: [{ type: core.Input }]
  };

  var DataItemNumberModule = /** @class */ (function () {
      function DataItemNumberModule() {
      }
      return DataItemNumberModule;
  }());
  DataItemNumberModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [DataItemNumberComponent],
                  imports: [common.CommonModule, dataItem.DataItemComponentModule, number.NumberComponentModule],
                  exports: [DataItemNumberComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.DataItemNumberComponent = DataItemNumberComponent;
  exports.DataItemNumberModule = DataItemNumberModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item-number.umd.js.map
