(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@ngx-translate/core'), require('@sofico-framework/ui-kit/components/button'), require('@sofico-framework/ui-kit/components/svg-icon'), require('@sofico-framework/utils')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/tab', ['exports', '@angular/core', '@angular/common', '@angular/router', '@ngx-translate/core', '@sofico-framework/ui-kit/components/button', '@sofico-framework/ui-kit/components/svg-icon', '@sofico-framework/utils'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.tab = {}), global.ng.core, global.ng.common, global.ng.router, global.core$1, global['sofico-framework']['ui-kit'].components.button, global['sofico-framework']['ui-kit'].components['svg-icon'], global.utils));
}(this, (function (exports, core, common, router, core$1, button, svgIcon, utils) { 'use strict';

  var TabComponent = /** @class */ (function () {
      function TabComponent(elementRef) {
          this.elementRef = elementRef;
          this.clickTab = new core.EventEmitter();
      }
      return TabComponent;
  }());
  TabComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-tab',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <button\n      *ngIf=\"tab?.routerLink | sofIsNullOrUndefined; else withLink\"\n      sofButton\n      type=\"button\"\n      [icon]=\"tab.icon\"\n      [class.selected]=\"isSelected\"\n      (click)=\"clickTab.emit()\"\n    >\n      <span\n        class=\"pr-2\"\n        *ngIf=\"!(tab.count | sofIsNullOrUndefined)\"\n        [class.pl-2]=\"!(tab.icon | sofIsNullOrUndefined)\"\n        >{{ tab.count }}</span\n      >\n      <span class=\"title\" *ngIf=\"!(tab.label | sofIsNullOrUndefined)\">{{\n        tc + '.' + tab.label | translate\n      }}</span>\n      <span class=\"title\" *ngIf=\"!(tab.translation | sofIsNullOrUndefined)\">{{\n        tab.translation\n      }}</span>\n    </button>\n    <ng-template #withLink>\n      <a\n        sofButton\n        type=\"button\"\n        [icon]=\"tab.icon\"\n        [routerLink]=\"tab.routerLink\"\n        [queryParams]=\"tab.queryParams\"\n        routerLinkActive=\"selected\"\n        (click)=\"clickTab.emit()\"\n      >\n        <span\n          class=\"counter pr-2\"\n          *ngIf=\"!(tab.count | sofIsNullOrUndefined)\"\n          [class.pl-2]=\"!(tab.icon | sofIsNullOrUndefined)\"\n          >{{ tab.count }}</span\n        >\n        <ng-container *ngIf=\"!(tab.label | sofIsNullOrUndefined)\">\n          {{ tc + '.' + tab.label | translate }}\n        </ng-container>\n        <ng-container *ngIf=\"!(tab.translation | sofIsNullOrUndefined)\">\n          {{ tab.translation }}\n        </ng-container>\n      </a>\n    </ng-template>\n  ",
                  styles: [":host{display:block}:host a,:host button{display:flex;align-items:center;padding:.375rem 1.5rem;border-width:1px 1px 2px;border-style:solid}:host a:hover,:host button:hover{text-decoration:none}:host a:focus,:host button:focus{outline:none;box-shadow:none}:host a.selected,:host button.selected{padding-top:.5rem;padding-bottom:.5rem;cursor:default;font-weight:700;border-bottom-width:4px}"]
              },] }
  ];
  TabComponent.ctorParameters = function () { return [
      { type: core.ElementRef }
  ]; };
  TabComponent.propDecorators = {
      tc: [{ type: core.Input }],
      tab: [{ type: core.Input }],
      isSelected: [{ type: core.Input }],
      clickTab: [{ type: core.Output }]
  };

  var TabModule = /** @class */ (function () {
      function TabModule() {
      }
      return TabModule;
  }());
  TabModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [
                      common.CommonModule,
                      svgIcon.SvgIconModule,
                      button.ButtonModule,
                      utils.UtilsPipesModule,
                      router.RouterModule,
                      core$1.TranslateModule
                  ],
                  declarations: [TabComponent],
                  exports: [TabComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.TabComponent = TabComponent;
  exports.TabModule = TabModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-tab.umd.js.map
