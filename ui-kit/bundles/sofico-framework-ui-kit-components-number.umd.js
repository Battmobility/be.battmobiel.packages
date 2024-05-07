(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@sofico-framework/utils'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/number', ['exports', '@angular/core', '@sofico-framework/utils', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.number = {}), global.ng.core, global.utils, global.ng.common));
}(this, (function (exports, core, utils, common) { 'use strict';

  var NumberComponent = /** @class */ (function () {
      function NumberComponent() {
          this.minFraction = 0;
          this.maxFraction = 17;
      }
      Object.defineProperty(NumberComponent.prototype, "isNumber", {
          get: function () {
              return utils.isNumber(this.value);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(NumberComponent.prototype, "format", {
          get: function () {
              return "1." + this.minFraction + "-" + this.maxFraction;
          },
          enumerable: false,
          configurable: true
      });
      return NumberComponent;
  }());
  NumberComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-number',
                  template: "\n    <ng-container *ngIf=\"isNumber; else noValue\">\n      {{ value | number: format }}\n    </ng-container>\n    <ng-template #noValue>-</ng-template>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush
              },] }
  ];
  NumberComponent.propDecorators = {
      value: [{ type: core.Input }],
      minFraction: [{ type: core.Input }],
      maxFraction: [{ type: core.Input }]
  };

  var NumberComponentModule = /** @class */ (function () {
      function NumberComponentModule() {
      }
      return NumberComponentModule;
  }());
  NumberComponentModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule],
                  declarations: [NumberComponent],
                  exports: [NumberComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NumberComponent = NumberComponent;
  exports.NumberComponentModule = NumberComponentModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-number.umd.js.map
