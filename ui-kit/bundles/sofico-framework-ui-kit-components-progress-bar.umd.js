(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/progress-bar', ['exports', '@angular/core', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['progress-bar'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

  var ProgressBarComponent = /** @class */ (function () {
      function ProgressBarComponent() {
          this.color = 'primary';
      }
      Object.defineProperty(ProgressBarComponent.prototype, "percentage", {
          set: function (value) {
              this.progressBarWidth = value + '%';
          },
          enumerable: false,
          configurable: true
      });
      return ProgressBarComponent;
  }());
  ProgressBarComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-progress-bar',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <div class=\"progress\">\n      <div\n        class=\"progress-bar\"\n        role=\"progressbar\"\n        [ngClass]=\"color\"\n        [style.width]=\"progressBarWidth\"\n      ></div>\n    </div>\n  ",
                  styles: [".progress{border-radius:0;height:10px}.progress .progress-bar{transition:none}"]
              },] }
  ];
  ProgressBarComponent.propDecorators = {
      color: [{ type: core.Input }],
      percentage: [{ type: core.Input }]
  };

  var ProgressBarComponentModule = /** @class */ (function () {
      function ProgressBarComponentModule() {
      }
      return ProgressBarComponentModule;
  }());
  ProgressBarComponentModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule],
                  declarations: [ProgressBarComponent],
                  exports: [ProgressBarComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.ProgressBarComponent = ProgressBarComponent;
  exports.ProgressBarComponentModule = ProgressBarComponentModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-progress-bar.umd.js.map
