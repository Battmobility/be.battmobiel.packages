(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@sofico-framework/utils'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/unit', ['exports', '@angular/core', '@sofico-framework/utils', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.unit = {}), global.ng.core, global.utils, global.ng.common));
}(this, (function (exports, core, utils, common) { 'use strict';

  var UnitComponent = /** @class */ (function () {
      function UnitComponent() {
          this.minFraction = 0;
          this.maxFraction = 2;
      }
      Object.defineProperty(UnitComponent.prototype, "isNumber", {
          get: function () {
              return utils.isNumber(this.value);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(UnitComponent.prototype, "format", {
          get: function () {
              return "1." + this.minFraction + "-" + this.maxFraction;
          },
          enumerable: false,
          configurable: true
      });
      return UnitComponent;
  }());
  UnitComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-unit',
                  template: "\n    <ng-container *ngIf=\"isNumber; else noValue\">\n      <span *ngIf=\"valueSigned && value > 0\">+</span\n      >{{ value | number: format }} {{ unit }}\n    </ng-container>\n    <ng-template #noValue>-</ng-template>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush
              },] }
  ];
  UnitComponent.propDecorators = {
      value: [{ type: core.Input }],
      minFraction: [{ type: core.Input }],
      maxFraction: [{ type: core.Input }],
      valueSigned: [{ type: core.Input }],
      unit: [{ type: core.Input }]
  };

  var UnitComponentModule = /** @class */ (function () {
      function UnitComponentModule() {
      }
      return UnitComponentModule;
  }());
  UnitComponentModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule],
                  declarations: [UnitComponent],
                  exports: [UnitComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.UnitComponent = UnitComponent;
  exports.UnitComponentModule = UnitComponentModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-unit.umd.js.map
