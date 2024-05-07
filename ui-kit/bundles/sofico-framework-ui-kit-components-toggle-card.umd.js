(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@sofico-framework/ui-kit/components/svg-icon')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/toggle-card', ['exports', '@angular/core', '@angular/common', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['toggle-card'] = {}), global.ng.core, global.ng.common, global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, core, common, svgIcon) { 'use strict';

  var ToggleCardComponent = /** @class */ (function () {
      function ToggleCardComponent() {
          this.selectedIcon = 'icon-trash';
          this.toggle = new core.EventEmitter();
      }
      ToggleCardComponent.prototype.open = function () {
          if (!(this.selected || this.isDisabled)) {
              this.toggle.emit();
          }
      };
      ToggleCardComponent.prototype.close = function (event) {
          event.stopPropagation();
          if (!this.isDisabled) {
              this.toggle.emit();
          }
      };
      return ToggleCardComponent;
  }());
  ToggleCardComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-toggle-card',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <div\n      [class.sof-card-selected]=\"!invalid && selected\"\n      [class.sof-card]=\"!invalid && !selected\"\n      [class.sof-card-invalid]=\"invalid\"\n      class=\"card\"\n    >\n      <button\n        *ngIf=\"!selected || isDisabled\"\n        type=\"button\"\n        (click)=\"open()\"\n        [disabled]=\"isDisabled\"\n        [class.show-pointer]=\"!isDisabled\"\n        class=\"body-button card-body px-3 py-2\"\n      >\n        <ng-container *ngTemplateOutlet=\"cardContent\"></ng-container>\n      </button>\n      <div *ngIf=\"selected && !isDisabled\" class=\"card-body px-3 py-2\">\n        <ng-container *ngTemplateOutlet=\"cardContent\"></ng-container>\n      </div>\n    </div>\n\n    <!-- CARD-CONTENT -->\n    <ng-template #cardContent>\n      <div class=\"d-flex flex-row align-items-center\">\n        <sof-svg-icon\n          *ngIf=\"icon\"\n          [icon]=\"icon\"\n          class=\"sof-icon-primary mr-3 my-auto\"\n          size=\"32\"\n        ></sof-svg-icon>\n        <h5 class=\"flex-grow-1 m-auto title\">{{ title }}</h5>\n        <button\n          class=\"close-button\"\n          [disabled]=\"isDisabled\"\n          (click)=\"close($event)\"\n          type=\"button\"\n        >\n          <sof-svg-icon\n            class=\"my-auto\"\n            [icon]=\"selected ? selectedIcon : 'icon-plus'\"\n            [class.show-pointer]=\"selected && !isDisabled\"\n            [class.disabled-icon]=\"isDisabled\"\n          ></sof-svg-icon>\n        </button>\n      </div>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
                  styles: [".show-pointer{cursor:pointer}.disabled-icon{fill:#adb5bd}.body-button{text-align:left}.body-button,.close-button{border:none;background:none}.close-button{display:flex;flex-direction:row;align-items:center;text-align:center;height:auto}"]
              },] }
  ];
  ToggleCardComponent.propDecorators = {
      icon: [{ type: core.Input }],
      title: [{ type: core.Input }],
      selected: [{ type: core.Input }],
      selectedIcon: [{ type: core.Input }],
      isDisabled: [{ type: core.Input }],
      invalid: [{ type: core.Input }],
      toggle: [{ type: core.Output }]
  };

  var ToggleCardModule = /** @class */ (function () {
      function ToggleCardModule() {
      }
      return ToggleCardModule;
  }());
  ToggleCardModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [ToggleCardComponent],
                  exports: [ToggleCardComponent],
                  imports: [common.CommonModule, svgIcon.SvgIconModule]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.ToggleCardComponent = ToggleCardComponent;
  exports.ToggleCardModule = ToggleCardModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-toggle-card.umd.js.map
