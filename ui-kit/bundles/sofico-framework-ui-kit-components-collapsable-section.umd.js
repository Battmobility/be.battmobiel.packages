(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ngx-translate/core'), require('@sofico-framework/ui-kit/components/svg-icon')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/collapsable-section', ['exports', '@angular/core', '@angular/common', '@ngx-translate/core', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['collapsable-section'] = {}), global.ng.core, global.ng.common, global.core$1, global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, core, common, core$1, svgIcon) { 'use strict';

  var CollapsableSectionComponent = /** @class */ (function () {
      function CollapsableSectionComponent() {
          this.active = false;
          this.stateChange = new core.EventEmitter();
          this.internalCollapsed = true;
      }
      Object.defineProperty(CollapsableSectionComponent.prototype, "collapsed", {
          set: function (value) {
              this.internalCollapsed = value;
          },
          enumerable: false,
          configurable: true
      });
      CollapsableSectionComponent.prototype.toggle = function () {
          this.internalCollapsed = !this.internalCollapsed;
          this.stateChange.emit(this.internalCollapsed);
      };
      return CollapsableSectionComponent;
  }());
  CollapsableSectionComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-collapsable-section',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <button\n      type=\"button\"\n      class=\"btn btn-plain d-flex justify-content-between align-items-center w-100 title\"\n      (click)=\"toggle()\"\n    >\n      <div class=\"d-flex align-items-center\">\n        <div>{{ tc + '.' + label | translate }}</div>\n        <div *ngIf=\"active\" class=\"text-primary font-weight-bolder pl-2\">\n          &bull;\n        </div>\n      </div>\n\n      <sof-svg-icon\n        class=\"sof-icon-12 icon-toggle\"\n        [icon]=\"'icon-chevron-' + (internalCollapsed ? 'down' : 'up')\"\n      ></sof-svg-icon>\n    </button>\n    <div *ngIf=\"!internalCollapsed\" class=\"mt-2\">\n      <ng-content></ng-content>\n    </div>\n  ",
                  styles: [":host{display:flex;flex-direction:column}.title{cursor:pointer;font-weight:500}"]
              },] }
  ];
  CollapsableSectionComponent.propDecorators = {
      tc: [{ type: core.Input }],
      label: [{ type: core.Input }],
      active: [{ type: core.Input }],
      collapsed: [{ type: core.Input }],
      stateChange: [{ type: core.Output }],
      internalCollapsed: [{ type: core.HostBinding, args: ['class.collapsed',] }]
  };

  var CollapsableSectionModule = /** @class */ (function () {
      function CollapsableSectionModule() {
      }
      return CollapsableSectionModule;
  }());
  CollapsableSectionModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [CollapsableSectionComponent],
                  exports: [CollapsableSectionComponent],
                  imports: [core$1.TranslateModule, common.CommonModule, svgIcon.SvgIconModule]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.CollapsableSectionComponent = CollapsableSectionComponent;
  exports.CollapsableSectionModule = CollapsableSectionModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-collapsable-section.umd.js.map
