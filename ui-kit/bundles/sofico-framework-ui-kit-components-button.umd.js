(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@sofico-framework/ui-kit/components/loading'), require('@sofico-framework/ui-kit/components/svg-icon')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/button', ['exports', '@angular/core', '@angular/common', '@sofico-framework/ui-kit/components/loading', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.button = {}), global.ng.core, global.ng.common, global['sofico-framework']['ui-kit'].components.loading, global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, core, common, loading, svgIcon) { 'use strict';

  var ButtonDirectiveComponent = /** @class */ (function () {
      function ButtonDirectiveComponent() {
          /**
           * Defines what size the icon will have.
           * The default size will be 16px.
           */
          this.iconSize = '16';
          /**
           * Defines what size the suffix icon will have.
           * The default size will be 16px.
           */
          this.iconSuffixSize = '16';
          /**
           * Defines what the button type must be. Defaults to: 'button'.
           * Possible values are based on the HTML standard.
           * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
           */
          this.type = 'button';
      }
      return ButtonDirectiveComponent;
  }());
  ButtonDirectiveComponent.decorators = [
      { type: core.Component, args: [{
                  // tslint:disable-next-line:component-selector
                  selector: '[sofButton]',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <div\n      class=\"button-wrapper d-flex justify-content-center align-items-center position-relative\"\n    >\n      <sof-loading\n        *ngIf=\"loading\"\n        size=\"sm\"\n        class=\"position-absolute\"\n      ></sof-loading>\n      <sof-svg-icon\n        *ngIf=\"icon\"\n        [icon]=\"icon\"\n        [size]=\"iconSize\"\n        [class.mr-2]=\"contentWrapper.childNodes.length !== 0 || iconSuffix\"\n        [class.invisible]=\"loading\"\n      >\n      </sof-svg-icon>\n      <span #contentWrapper [class.invisible]=\"loading\">\n        <ng-content></ng-content>\n      </span>\n      <sof-svg-icon\n        *ngIf=\"iconSuffix\"\n        [icon]=\"iconSuffix\"\n        [size]=\"iconSuffixSize\"\n        [class.ml-2]=\"contentWrapper.childNodes.length !== 0\"\n        [class.invisible]=\"loading\"\n      >\n      </sof-svg-icon>\n    </div>\n  ",
                  styles: [""]
              },] }
  ];
  ButtonDirectiveComponent.propDecorators = {
      loading: [{ type: core.Input }],
      icon: [{ type: core.Input }],
      iconSuffix: [{ type: core.Input }],
      iconSize: [{ type: core.Input }],
      iconSuffixSize: [{ type: core.Input }],
      type: [{ type: core.HostBinding, args: ['attr.type',] }, { type: core.Input }]
  };

  var ButtonModule = /** @class */ (function () {
      function ButtonModule() {
      }
      return ButtonModule;
  }());
  ButtonModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule, loading.LoadingModule, svgIcon.SvgIconModule],
                  declarations: [ButtonDirectiveComponent],
                  exports: [ButtonDirectiveComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.ButtonDirectiveComponent = ButtonDirectiveComponent;
  exports.ButtonModule = ButtonModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-button.umd.js.map
