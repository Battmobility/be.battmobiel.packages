(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@ngx-translate/core'), require('@sofico-framework/ui-kit/components/svg-icon'), require('@sofico-framework/utils')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/breadcrumb', ['exports', '@angular/core', '@angular/common', '@angular/router', '@ngx-translate/core', '@sofico-framework/ui-kit/components/svg-icon', '@sofico-framework/utils'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.breadcrumb = {}), global.ng.core, global.ng.common, global.ng.router, global.core$1, global['sofico-framework']['ui-kit'].components['svg-icon'], global.utils));
}(this, (function (exports, core, common, router, core$1, svgIcon, utils) { 'use strict';

  /**
   * This component resembles a breadcrumb trail
   */
  var BreadcrumbComponent = /** @class */ (function () {
      function BreadcrumbComponent() {
      }
      return BreadcrumbComponent;
  }());
  BreadcrumbComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-breadcrumb',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <!--  todo: Check once sof-breadcrumbs class can be removed. Currently it seems to be in use by the promotions project.  -->\n    <div\n      class=\"d-flex flex-wrap justify-content-start align-items-center sof-breadcrumbs\"\n    >\n      <ng-container *ngFor=\"let breadcrumb of breadcrumbs; let last = last\">\n        <div\n          class=\"d-flex justify-content-start align-items-center\"\n          *ngIf=\"!last\"\n        >\n          <a\n            class=\"sof-link\"\n            [queryParamsHandling]=\"\n              breadcrumb.preserveQueryParams ? 'preserve' : ''\n            \"\n            [routerLink]=\"breadcrumb.path\"\n          >\n            {{\n              breadcrumb.label\n                ? (tc + '.' + breadcrumb.label\n                  | translate: breadcrumb.params\n                  | sofMaxStringLength)\n                : (breadcrumb.translation | sofMaxStringLength)\n            }}\n          </a>\n          <sof-svg-icon\n            icon=\"icon-chevron-right\"\n            class=\"sof-icon-light mx-1\"\n            size=\"8\"\n          ></sof-svg-icon>\n        </div>\n        <div *ngIf=\"last\" class=\"sof-link\">\n          <p class=\"m-0\">\n            {{\n              breadcrumb.label\n                ? (tc + '.' + breadcrumb.label\n                  | translate: breadcrumb.params\n                  | sofMaxStringLength)\n                : (breadcrumb.translation | sofMaxStringLength)\n            }}\n          </p>\n        </div>\n      </ng-container>\n    </div>\n  ",
                  styles: [":host a.sof-link{text-decoration:underline}:host .sof-link{font-size:.875rem;color:#6c757d}"]
              },] }
  ];
  BreadcrumbComponent.propDecorators = {
      tc: [{ type: core.Input }],
      breadcrumbs: [{ type: core.Input }]
  };

  var BreadcrumbModule = /** @class */ (function () {
      function BreadcrumbModule() {
      }
      return BreadcrumbModule;
  }());
  BreadcrumbModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [
                      common.CommonModule,
                      router.RouterModule,
                      svgIcon.SvgIconModule,
                      core$1.TranslateModule,
                      utils.UtilsPipesModule
                  ],
                  declarations: [BreadcrumbComponent],
                  exports: [BreadcrumbComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.BreadcrumbComponent = BreadcrumbComponent;
  exports.BreadcrumbModule = BreadcrumbModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-breadcrumb.umd.js.map
