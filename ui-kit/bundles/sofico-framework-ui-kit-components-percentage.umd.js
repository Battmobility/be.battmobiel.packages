(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@sofico-framework/utils')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/percentage', ['exports', '@angular/core', '@angular/common', '@sofico-framework/utils'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.percentage = {}), global.ng.core, global.ng.common, global.utils));
}(this, (function (exports, core, common, utils) { 'use strict';

  var PercentageComponent = /** @class */ (function () {
      function PercentageComponent() {
          this.minFraction = 2;
          this.maxFraction = 17;
      }
      Object.defineProperty(PercentageComponent.prototype, "format", {
          get: function () {
              return "1." + this.minFraction + "-" + this.maxFraction;
          },
          enumerable: false,
          configurable: true
      });
      return PercentageComponent;
  }());
  PercentageComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-percentage',
                  template: "\n    <ng-container *ngIf=\"value | sofIsNumber; else noValue\">\n      <span *ngIf=\"valueSigned && value > 0\">+</span\n      >{{ value | percent: format }}\n    </ng-container>\n    <ng-template #noValue>-</ng-template>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush
              },] }
  ];
  PercentageComponent.propDecorators = {
      value: [{ type: core.Input }],
      valueSigned: [{ type: core.Input }],
      minFraction: [{ type: core.Input }],
      maxFraction: [{ type: core.Input }]
  };

  var PercentageComponentModule = /** @class */ (function () {
      function PercentageComponentModule() {
      }
      return PercentageComponentModule;
  }());
  PercentageComponentModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule, utils.UtilsPipesModule],
                  declarations: [PercentageComponent],
                  exports: [PercentageComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.PercentageComponent = PercentageComponent;
  exports.PercentageComponentModule = PercentageComponentModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-percentage.umd.js.map
