(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@ngx-translate/core'), require('@sofico-framework/ui-kit/components/drop-down'), require('@sofico-framework/ui-kit/components/svg-icon')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/drop-down-menu', ['exports', '@angular/core', '@angular/common', '@angular/router', '@ngx-translate/core', '@sofico-framework/ui-kit/components/drop-down', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['drop-down-menu'] = {}), global.ng.core, global.ng.common, global.ng.router, global.core$1, global['sofico-framework']['ui-kit'].components['drop-down'], global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, core, common, router, core$1, dropDown, svgIcon) { 'use strict';

  var DropDownMenuComponent = /** @class */ (function () {
      function DropDownMenuComponent() {
          this.isWithinNavBar = false;
          this.dropDownConfig = {};
          /**
           * Both routerLink and click are supported for menu items. They should not be combined though.
           */
          this.menuItems = [];
      }
      return DropDownMenuComponent;
  }());
  DropDownMenuComponent.decorators = [
      { type: core.Component, args: [{
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  selector: "sof-drop-down-menu",
                  template: "\n    <sof-drop-down [config]=\"dropDownConfig\" [isWithinNavBar]=\"isWithinNavBar\">\n      <a\n        *ngFor=\"let menuItem of menuItems\"\n        ngbDropdownItem\n        class=\"dropdown-item drop-down-menu-item\"\n        [routerLink]=\"menuItem.routerLink || []\"\n        (click)=\"menuItem.click && menuItem.click($event)\"\n      >\n        <sof-svg-icon\n          *ngIf=\"menuItem.itemIcon\"\n          class=\"mr-3\"\n          [ngClass]=\"menuItem.itemIcon.classes\"\n          [icon]=\"menuItem.itemIcon.icon\"\n          [size]=\"menuItem.itemIcon.size\"\n        ></sof-svg-icon>\n        <span>\n          {{\n            menuItem?.label\n              ? (tc + '.' + menuItem.label | translate: menuItem.params)\n              : menuItem.translation\n          }}\n        </span>\n      </a>\n    </sof-drop-down>\n  ",
                  styles: [":host{display:inline-block}.drop-down-menu-item{display:flex;align-items:center}"]
              },] }
  ];
  DropDownMenuComponent.propDecorators = {
      tc: [{ type: core.Input }],
      isWithinNavBar: [{ type: core.Input }],
      dropDownConfig: [{ type: core.Input }],
      menuItems: [{ type: core.Input }]
  };

  var DropDownMenuModule = /** @class */ (function () {
      function DropDownMenuModule() {
      }
      return DropDownMenuModule;
  }());
  DropDownMenuModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [DropDownMenuComponent],
                  exports: [DropDownMenuComponent],
                  imports: [
                      common.CommonModule,
                      router.RouterModule,
                      dropDown.DropDownModule,
                      svgIcon.SvgIconModule,
                      core$1.TranslateModule
                  ]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.DropDownMenuComponent = DropDownMenuComponent;
  exports.DropDownMenuModule = DropDownMenuModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-drop-down-menu.umd.js.map
