(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/data-item', ['exports', '@angular/core', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['data-item'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

  var DataItemComponent = /** @class */ (function () {
      function DataItemComponent() {
      }
      return DataItemComponent;
  }());
  DataItemComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-data-item',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <div class=\"label\">\n      <ng-content select=\"[data-item-label]\"></ng-content>\n    </div>\n    <div class=\"value\">\n      <ng-content select=\"[data-item-value]\"></ng-content>\n    </div>\n  ",
                  styles: [":host{display:block}.label{color:#adb5bd;font-size:.75rem}.value{font-size:.875rem;color:#000;overflow-wrap:break-word}"]
              },] }
  ];

  var DataItemComponentModule = /** @class */ (function () {
      function DataItemComponentModule() {
      }
      return DataItemComponentModule;
  }());
  DataItemComponentModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule],
                  declarations: [DataItemComponent],
                  exports: [DataItemComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.DataItemComponent = DataItemComponent;
  exports.DataItemComponentModule = DataItemComponentModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item.umd.js.map
