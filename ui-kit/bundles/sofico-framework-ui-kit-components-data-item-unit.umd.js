(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@sofico-framework/ui-kit/components/data-item'), require('@sofico-framework/ui-kit/components/unit')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/data-item-unit', ['exports', '@angular/core', '@angular/common', '@sofico-framework/ui-kit/components/data-item', '@sofico-framework/ui-kit/components/unit'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['data-item-unit'] = {}), global.ng.core, global.ng.common, global['sofico-framework']['ui-kit'].components['data-item'], global['sofico-framework']['ui-kit'].components.unit));
}(this, (function (exports, core, common, dataItem, unit) { 'use strict';

  var DataItemUnitComponent = /** @class */ (function () {
      function DataItemUnitComponent() {
          this.minFraction = 0;
          this.maxFraction = 2;
      }
      return DataItemUnitComponent;
  }());
  DataItemUnitComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-data-item-unit',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <sof-data-item>\n      <ng-container data-item-label>\n        {{ label }}\n      </ng-container>\n      <ng-container data-item-value>\n        <sof-unit\n          [value]=\"value\"\n          [minFraction]=\"minFraction\"\n          [maxFraction]=\"maxFraction\"\n          [valueSigned]=\"valueSigned\"\n          [unit]=\"unit\"\n        ></sof-unit>\n      </ng-container>\n    </sof-data-item>\n  "
              },] }
  ];
  DataItemUnitComponent.propDecorators = {
      label: [{ type: core.Input }],
      value: [{ type: core.Input }],
      minFraction: [{ type: core.Input }],
      maxFraction: [{ type: core.Input }],
      valueSigned: [{ type: core.Input }],
      unit: [{ type: core.Input }]
  };

  var DataItemUnitModule = /** @class */ (function () {
      function DataItemUnitModule() {
      }
      return DataItemUnitModule;
  }());
  DataItemUnitModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [DataItemUnitComponent],
                  imports: [common.CommonModule, dataItem.DataItemComponentModule, unit.UnitComponentModule],
                  exports: [DataItemUnitComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.DataItemUnitComponent = DataItemUnitComponent;
  exports.DataItemUnitModule = DataItemUnitModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item-unit.umd.js.map
