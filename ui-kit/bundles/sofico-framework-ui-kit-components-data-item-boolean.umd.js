(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@sofico-framework/ui-kit/components/data-item'), require('@sofico-framework/utils')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/data-item-boolean', ['exports', '@angular/core', '@angular/common', '@sofico-framework/ui-kit/components/data-item', '@sofico-framework/utils'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['data-item-boolean'] = {}), global.ng.core, global.ng.common, global['sofico-framework']['ui-kit'].components['data-item'], global.utils));
}(this, (function (exports, core, common, dataItem, utils) { 'use strict';

  var DataItemBooleanComponent = /** @class */ (function () {
      function DataItemBooleanComponent() {
      }
      return DataItemBooleanComponent;
  }());
  DataItemBooleanComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-data-item-boolean',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <sof-data-item>\n      <ng-container data-item-label>\n        {{ label }}\n      </ng-container>\n      <ng-container data-item-value>\n        {{ value ? labelTrue : labelFalse }}\n      </ng-container>\n    </sof-data-item>\n  "
              },] }
  ];
  DataItemBooleanComponent.propDecorators = {
      label: [{ type: core.Input }],
      value: [{ type: core.Input }],
      labelTrue: [{ type: core.Input }],
      labelFalse: [{ type: core.Input }]
  };

  var DataItemBooleanModule = /** @class */ (function () {
      function DataItemBooleanModule() {
      }
      return DataItemBooleanModule;
  }());
  DataItemBooleanModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [DataItemBooleanComponent],
                  imports: [common.CommonModule, dataItem.DataItemComponentModule, utils.UtilsPipesModule],
                  exports: [DataItemBooleanComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.DataItemBooleanComponent = DataItemBooleanComponent;
  exports.DataItemBooleanModule = DataItemBooleanModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item-boolean.umd.js.map
