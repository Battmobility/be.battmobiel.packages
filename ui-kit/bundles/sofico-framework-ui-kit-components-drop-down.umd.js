(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@ng-bootstrap/ng-bootstrap'), require('@sofico-framework/ui-kit/components/svg-icon')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/drop-down', ['exports', '@angular/core', '@angular/common', '@angular/router', '@ng-bootstrap/ng-bootstrap', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['drop-down'] = {}), global.ng.core, global.ng.common, global.ng.router, global.ngBootstrap, global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, core, common, router, ngBootstrap, svgIcon) { 'use strict';

  var DropDownComponent = /** @class */ (function () {
      function DropDownComponent() {
          this.config = {};
          this.isWithinNavBar = false;
      }
      DropDownComponent.prototype.ngOnChanges = function (changes) {
          var _a, _b;
          if (((_a = changes.isDisabled) === null || _a === void 0 ? void 0 : _a.currentValue) && ((_b = this.dropDownVC) === null || _b === void 0 ? void 0 : _b.isOpen())) {
              this.dropDownVC.close();
          }
      };
      return DropDownComponent;
  }());
  DropDownComponent.decorators = [
      { type: core.Component, args: [{
                  selector: "sof-drop-down",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <ng-container *ngIf=\"config !== null\">\n      <div\n        ngbDropdown\n        #dropDown=\"ngbDropdown\"\n        [placement]=\"\n          config.dropDownPlacement ? config.dropDownPlacement : 'bottom-left'\n        \"\n        class=\"d-inline-block\"\n      >\n        <ng-container *ngIf=\"isWithinNavBar; else alternative\">\n          <a\n            [class.d-none]=\"isDisabled\"\n            ngbDropdownToggle\n            [routerLink]=\"null\"\n            class=\"nav-link\"\n            [attr.id]=\"config.toggleButtonId\"\n            [ngClass]=\"config.toggleButtonClasses\"\n          >\n            <ng-container *ngTemplateOutlet=\"buttonRef\"></ng-container>\n          </a>\n          <a\n            [class.d-none]=\"!isDisabled\"\n            class=\"nav-link\"\n            [ngClass]=\"config.toggleButtonClasses\"\n          >\n            <ng-container *ngTemplateOutlet=\"buttonRef\"></ng-container>\n          </a>\n        </ng-container>\n        <ng-template #alternative>\n          <button\n            ngbDropdownToggle\n            class=\"drop-down-button\"\n            type=\"button\"\n            [disabled]=\"isDisabled\"\n            [attr.id]=\"config.toggleButtonId\"\n            [ngClass]=\"config.toggleButtonClasses\"\n          >\n            <ng-container *ngTemplateOutlet=\"buttonRef\"></ng-container>\n          </button>\n        </ng-template>\n\n        <div ngbDropdownMenu [attr.aria-labelledby]=\"config.toggleButtonId\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #buttonRef>\n      <ng-container *ngIf=\"badge\">\n        <span class=\"badge badge-primary\">{{ badge }}</span>\n      </ng-container>\n      <sof-svg-icon\n        *ngIf=\"config.toggleButtonIcon\"\n        [class.mr-3]=\"config.toggleButtonText\"\n        [ngClass]=\"config.toggleButtonIconClasses\"\n        [icon]=\"config.toggleButtonIcon\"\n        [size]=\"config.toggleButtonIconSize\"\n      ></sof-svg-icon>\n      <span>{{ config.toggleButtonText }}</span>\n    </ng-template>\n  ",
                  styles: [":host{display:inline-block}.nav-link{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:2px}.drop-down-button,.nav-link{display:flex;align-items:center}.drop-down-button:after,.nav-link:after{margin-left:.5rem}"]
              },] }
  ];
  DropDownComponent.propDecorators = {
      config: [{ type: core.Input }],
      isDisabled: [{ type: core.Input }],
      badge: [{ type: core.Input }],
      isWithinNavBar: [{ type: core.Input }],
      dropDownVC: [{ type: core.ViewChild, args: ['dropDown',] }]
  };

  var DropDownModule = /** @class */ (function () {
      function DropDownModule() {
      }
      return DropDownModule;
  }());
  DropDownModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [DropDownComponent],
                  exports: [DropDownComponent],
                  imports: [common.CommonModule, ngBootstrap.NgbDropdownModule, svgIcon.SvgIconModule, router.RouterModule]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.DropDownComponent = DropDownComponent;
  exports.DropDownModule = DropDownModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-drop-down.umd.js.map
