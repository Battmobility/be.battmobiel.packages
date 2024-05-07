(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@sofico-framework/ui-kit/components/data-item'), require('@sofico-framework/ui-kit/components/percentage')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/data-item-percentage', ['exports', '@angular/core', '@angular/common', '@sofico-framework/ui-kit/components/data-item', '@sofico-framework/ui-kit/components/percentage'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['data-item-percentage'] = {}), global.ng.core, global.ng.common, global['sofico-framework']['ui-kit'].components['data-item'], global['sofico-framework']['ui-kit'].components.percentage));
}(this, (function (exports, core, common, dataItem, percentage) { 'use strict';

  var DataItemPercentageComponent = /** @class */ (function () {
      function DataItemPercentageComponent() {
          this.minFraction = 2;
          this.maxFraction = 17;
      }
      return DataItemPercentageComponent;
  }());
  DataItemPercentageComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-data-item-percentage',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <sof-data-item>\n      <ng-container data-item-label>\n        {{ label }}\n      </ng-container>\n      <ng-container data-item-value>\n        <sof-percentage\n          [value]=\"value\"\n          [valueSigned]=\"valueSigned\"\n          [minFraction]=\"minFraction\"\n          [maxFraction]=\"maxFraction\"\n        ></sof-percentage>\n      </ng-container>\n    </sof-data-item>\n  "
              },] }
  ];
  DataItemPercentageComponent.propDecorators = {
      label: [{ type: core.Input }],
      value: [{ type: core.Input }],
      valueSigned: [{ type: core.Input }],
      minFraction: [{ type: core.Input }],
      maxFraction: [{ type: core.Input }]
  };

  var DataItemPercentageModule = /** @class */ (function () {
      function DataItemPercentageModule() {
      }
      return DataItemPercentageModule;
  }());
  DataItemPercentageModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [DataItemPercentageComponent],
                  imports: [common.CommonModule, dataItem.DataItemComponentModule, percentage.PercentageComponentModule],
                  exports: [DataItemPercentageComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.DataItemPercentageComponent = DataItemPercentageComponent;
  exports.DataItemPercentageModule = DataItemPercentageModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item-percentage.umd.js.map
