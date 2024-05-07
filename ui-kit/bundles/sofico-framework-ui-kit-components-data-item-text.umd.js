(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@sofico-framework/ui-kit/components/data-item'), require('@sofico-framework/utils')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/data-item-text', ['exports', '@angular/core', '@angular/common', '@sofico-framework/ui-kit/components/data-item', '@sofico-framework/utils'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['data-item-text'] = {}), global.ng.core, global.ng.common, global['sofico-framework']['ui-kit'].components['data-item'], global.utils));
}(this, (function (exports, core, common, dataItem, utils) { 'use strict';

  var DataItemTextComponent = /** @class */ (function () {
      function DataItemTextComponent() {
      }
      return DataItemTextComponent;
  }());
  DataItemTextComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-data-item-text',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <sof-data-item>\n      <ng-container data-item-label>\n        {{ label }}\n      </ng-container>\n      <ng-container data-item-value>\n        {{ !(value | sofIsNullOrUndefined) ? value : '-' }}\n      </ng-container>\n    </sof-data-item>\n  "
              },] }
  ];
  DataItemTextComponent.propDecorators = {
      label: [{ type: core.Input }],
      value: [{ type: core.Input }]
  };

  var DataItemTextModule = /** @class */ (function () {
      function DataItemTextModule() {
      }
      return DataItemTextModule;
  }());
  DataItemTextModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [DataItemTextComponent],
                  imports: [common.CommonModule, dataItem.DataItemComponentModule, utils.UtilsPipesModule],
                  exports: [DataItemTextComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.DataItemTextComponent = DataItemTextComponent;
  exports.DataItemTextModule = DataItemTextModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item-text.umd.js.map
