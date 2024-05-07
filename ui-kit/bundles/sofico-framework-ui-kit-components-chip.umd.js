(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@sofico-framework/ui-kit/components/button'), require('@sofico-framework/ui-kit/components/svg-icon')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/chip', ['exports', '@angular/core', '@angular/common', '@sofico-framework/ui-kit/components/button', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.chip = {}), global.ng.core, global.ng.common, global['sofico-framework']['ui-kit'].components.button, global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, core, common, button, svgIcon) { 'use strict';

  var ChipComponent = /** @class */ (function () {
      function ChipComponent() {
          this.isSelected = true;
          this.removed = new core.EventEmitter();
          this.selected = new core.EventEmitter();
      }
      ChipComponent.prototype.onRemove = function (event) {
          this.removed.emit();
          event.stopPropagation();
      };
      ChipComponent.prototype.onSelected = function (event) {
          if (!this.isDisabled && this.selectable) {
              this.selected.emit();
          }
          event.stopPropagation();
      };
      return ChipComponent;
  }());
  ChipComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-chip',
                  template: "\n    <div\n      class=\"chip\"\n      [class.small-chip]=\"smallChip\"\n      [class.disabled]=\"isDisabled\"\n      [class.unselected]=\"!isSelected\"\n      [class.selectable]=\"selectable\"\n      (click)=\"onSelected($event)\"\n    >\n      <sof-svg-icon\n        *ngIf=\"!!icon\"\n        class=\"mr-2\"\n        [size]=\"'12'\"\n        [icon]=\"icon\"\n      ></sof-svg-icon>\n      <ng-content></ng-content>\n      <button\n        sofButton\n        *ngIf=\"removable && !isDisabled\"\n        class=\"btn btn-plain ml-2 d-flex\"\n        icon=\"icon-cross\"\n        [iconSize]=\"'12'\"\n        [disabled]=\"isDisabled\"\n        (click)=\"onRemove($event)\"\n      ></button>\n    </div>\n  ",
                  styles: [".chip{display:flex;align-items:center;white-space:nowrap;margin-bottom:.25rem;margin-right:.25rem;padding:.5rem;border-radius:20px;border-style:solid;border-width:1px}.selectable{cursor:pointer}.disabled{cursor:default}.small-chip{padding:.25rem .5rem}"]
              },] }
  ];
  ChipComponent.propDecorators = {
      removable: [{ type: core.Input }],
      smallChip: [{ type: core.Input }],
      isDisabled: [{ type: core.Input }],
      isSelected: [{ type: core.Input }],
      selectable: [{ type: core.Input }],
      icon: [{ type: core.Input }],
      removed: [{ type: core.Output }],
      selected: [{ type: core.Output }]
  };

  var ChipModule = /** @class */ (function () {
      function ChipModule() {
      }
      return ChipModule;
  }());
  ChipModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [ChipComponent],
                  exports: [ChipComponent],
                  imports: [common.CommonModule, svgIcon.SvgIconModule, button.ButtonModule]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.ChipComponent = ChipComponent;
  exports.ChipModule = ChipModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-chip.umd.js.map
