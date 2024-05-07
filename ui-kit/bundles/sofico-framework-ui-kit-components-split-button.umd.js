(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ng-bootstrap/ng-bootstrap'), require('@sofico-framework/ui-kit/components/button')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/split-button', ['exports', '@angular/core', '@angular/common', '@ng-bootstrap/ng-bootstrap', '@sofico-framework/ui-kit/components/button'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['split-button'] = {}), global.ng.core, global.ng.common, global.ngBootstrap, global['sofico-framework']['ui-kit'].components.button));
}(this, (function (exports, core, common, ngBootstrap, button) { 'use strict';

  var SplitButtonComponent = /** @class */ (function () {
      function SplitButtonComponent() {
      }
      return SplitButtonComponent;
  }());
  SplitButtonComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-split-button',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <div ngbDropdown placement=\"bottom-right\">\n      <div class=\"btn-group\">\n        <ng-content select=\"[split-button-primary]\"></ng-content>\n        <button\n          sofButton\n          ngbDropdownToggle\n          [ngClass]=\"classDropdownBtn\"\n          icon=\"icon-chevron-down\"\n          iconSize=\"12\"\n          type=\"button\"\n        ></button>\n      </div>\n      <div ngbDropdownMenu class=\"dropdown-menu\">\n        <ng-content select=\"[split-button-content]\"></ng-content>\n      </div>\n    </div>\n  ",
                  styles: [":host{display:inline-block}button:after{display:none}"]
              },] }
  ];
  SplitButtonComponent.propDecorators = {
      classDropdownBtn: [{ type: core.Input }]
  };

  var SplitButtonModule = /** @class */ (function () {
      function SplitButtonModule() {
      }
      return SplitButtonModule;
  }());
  SplitButtonModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule, button.ButtonModule, ngBootstrap.NgbDropdownModule],
                  declarations: [SplitButtonComponent],
                  exports: [SplitButtonComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.SplitButtonComponent = SplitButtonComponent;
  exports.SplitButtonModule = SplitButtonModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-split-button.umd.js.map
