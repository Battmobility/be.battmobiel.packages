(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@sofico-framework/ui-kit/components/svg-icon')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/alert', ['exports', '@angular/core', '@angular/common', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.alert = {}), global.ng.core, global.ng.common, global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, core, common, svgIcon) { 'use strict';

  var AlertComponent = /** @class */ (function () {
      function AlertComponent() {
          var _a;
          /**
           * Type of alert that must be displayed. This has an impact on icons and colors.
           * Options: info, success, warning and danger.
           */
          this.type = 'info';
          /**
           * Whether or not the alert can be closed.
           */
          this.isDismissible = false;
          /**
           * Event that will inform when the alert is closed.
           */
          this.dismiss = new core.EventEmitter();
          this.alertIcons = (_a = {},
              _a['info'] = 'icon-info-circle',
              _a['success'] = 'icon-checkmark-circle',
              _a['warning'] = 'icon-warning',
              _a['danger'] = 'icon-cross-circle',
              _a);
      }
      AlertComponent.prototype.onClose = function () {
          this.display = 'none';
          this.dismiss.emit();
      };
      return AlertComponent;
  }());
  AlertComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-alert',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <div class=\"alert alert-{{ type }}\" role=\"alert\">\n      <sof-svg-icon\n        class=\"alert-icon-type\"\n        [icon]=\"alertIcons[type]\"\n        size=\"20\"\n      ></sof-svg-icon>\n      <div class=\"alert-content\">\n        <ng-content></ng-content>\n      </div>\n      <button class=\"btn btn-plain\" (click)=\"onClose()\">\n        <sof-svg-icon\n          *ngIf=\"isDismissible\"\n          class=\"alert-icon-dismiss\"\n          icon=\"icon-cross\"\n          size=\"12\"\n        ></sof-svg-icon>\n      </button>\n    </div>\n  ",
                  styles: [":host{display:block}.alert{display:flex;align-items:center;margin:0}.alert .alert-icon-type{flex-shrink:0;margin-right:1rem}.alert .alert-content{width:100%}.alert .alert-icon-dismiss{flex-shrink:0;margin-left:1rem;cursor:pointer}"]
              },] }
  ];
  AlertComponent.propDecorators = {
      type: [{ type: core.Input }],
      isDismissible: [{ type: core.Input }],
      dismiss: [{ type: core.Output }],
      display: [{ type: core.HostBinding, args: ['style.display',] }]
  };

  var AlertModule = /** @class */ (function () {
      function AlertModule() {
      }
      return AlertModule;
  }());
  AlertModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule, svgIcon.SvgIconModule],
                  declarations: [AlertComponent],
                  exports: [AlertComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.AlertComponent = AlertComponent;
  exports.AlertModule = AlertModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-alert.umd.js.map
