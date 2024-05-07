(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/svg-icon', ['exports', '@angular/core', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['svg-icon'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

  var SvgIconComponent = /** @class */ (function () {
      function SvgIconComponent() {
          this.size = '16';
      }
      return SvgIconComponent;
  }());
  SvgIconComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-svg-icon',
                  template: "\n    <div class=\"svg-icon-wrapper size-{{ size }}\">\n      <svg>\n        <use attr.xlink:href=\"#{{ icon }}\" attr.href=\"#{{ icon }}\"></use>\n      </svg>\n    </div>\n  ",
                  styles: [":host{display:inline-block}.svg-icon-wrapper svg{display:block;width:inherit;height:inherit;border:inherit}.size-8{width:8px;height:8px}.size-12{width:12px;height:12px}.size-16{width:16px;height:16px}.size-20{width:20px;height:20px}.size-24{width:24px;height:24px}.size-28{width:28px;height:28px}.size-32{width:32px;height:32px}.size-48{width:48px;height:48px}"]
              },] }
  ];
  SvgIconComponent.propDecorators = {
      icon: [{ type: core.Input }],
      size: [{ type: core.Input }]
  };

  var SvgIconModule = /** @class */ (function () {
      function SvgIconModule() {
      }
      return SvgIconModule;
  }());
  SvgIconModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule],
                  declarations: [SvgIconComponent],
                  exports: [SvgIconComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.SvgIconComponent = SvgIconComponent;
  exports.SvgIconModule = SvgIconModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-svg-icon.umd.js.map
