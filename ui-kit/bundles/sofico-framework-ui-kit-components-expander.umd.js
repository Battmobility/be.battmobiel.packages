(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@sofico-framework/ui-kit/components/svg-icon')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/expander', ['exports', '@angular/core', '@angular/common', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.expander = {}), global.ng.core, global.ng.common, global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, core, common, svgIcon) { 'use strict';

  var ExpanderComponent = /** @class */ (function () {
      function ExpanderComponent() {
          /**
           * Manually set whether the expander is open or closed.
           * Useful when you want to reset the expansion state.
           */
          this.isExpanded = false;
          /**
           * Output that will emit if the toggle is expanded or not.
           */
          this.expanded = new core.EventEmitter();
      }
      ExpanderComponent.prototype.toggle = function () {
          this.isExpanded = !this.isExpanded;
          this.expanded.emit(this.isExpanded);
      };
      return ExpanderComponent;
  }());
  ExpanderComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-expander',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <div [class.expanded]=\"!isExpanded\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"expander\">\n      <button (click)=\"toggle()\">\n        <span class=\"label\">{{ isExpanded ? lessLabel : moreLabel }}</span>\n        <sof-svg-icon\n          [icon]=\"isExpanded ? 'icon-chevron-up' : 'icon-chevron-down'\"\n          size=\"8\"\n          class=\"ml-1\"\n        ></sof-svg-icon>\n      </button>\n    </div>\n  ",
                  styles: [".expanded{display:none}.expander{display:flex;flex-direction:row;justify-content:center}.expander .label{margin-right:.25rem;font-size:.8rem}.expander button{display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:center;height:auto;border:none;cursor:pointer;background:none}@media print{.expanded{display:block}.expander{display:none}}"]
              },] }
  ];
  ExpanderComponent.ctorParameters = function () { return []; };
  ExpanderComponent.propDecorators = {
      moreLabel: [{ type: core.Input }],
      lessLabel: [{ type: core.Input }],
      isExpanded: [{ type: core.Input }],
      expanded: [{ type: core.Output }]
  };

  var ExpanderComponentModule = /** @class */ (function () {
      function ExpanderComponentModule() {
      }
      return ExpanderComponentModule;
  }());
  ExpanderComponentModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule, svgIcon.SvgIconModule],
                  declarations: [ExpanderComponent],
                  exports: [ExpanderComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.ExpanderComponent = ExpanderComponent;
  exports.ExpanderComponentModule = ExpanderComponentModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-expander.umd.js.map
