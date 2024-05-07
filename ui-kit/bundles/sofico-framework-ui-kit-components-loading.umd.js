(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/loading', ['exports', '@angular/core', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.loading = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

  var LoadingComponent = /** @class */ (function () {
      function LoadingComponent() {
          this.size = 'md';
      }
      return LoadingComponent;
  }());
  LoadingComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-loading',
                  template: "\n    <div class=\"text-center\">\n      <div class=\"spinner-border spinner-border-{{ size }}\" role=\"status\"></div>\n    </div>\n  ",
                  styles: [""]
              },] }
  ];
  LoadingComponent.propDecorators = {
      size: [{ type: core.Input }]
  };

  var LoadingModule = /** @class */ (function () {
      function LoadingModule() {
      }
      return LoadingModule;
  }());
  LoadingModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule],
                  declarations: [LoadingComponent],
                  exports: [LoadingComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.LoadingComponent = LoadingComponent;
  exports.LoadingModule = LoadingModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-loading.umd.js.map
