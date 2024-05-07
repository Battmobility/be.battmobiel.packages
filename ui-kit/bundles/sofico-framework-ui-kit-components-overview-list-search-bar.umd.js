(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@sofico-framework/ui-kit/directives/focus'), require('@angular/common'), require('@ngx-translate/core'), require('@sofico-framework/ui-kit/components/search-bar')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/overview-list-search-bar', ['exports', '@angular/core', '@sofico-framework/ui-kit/directives/focus', '@angular/common', '@ngx-translate/core', '@sofico-framework/ui-kit/components/search-bar'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['overview-list-search-bar'] = {}), global.ng.core, global['sofico-framework']['ui-kit'].directives.focus, global.ng.common, global.core$1, global['sofico-framework']['ui-kit'].components['search-bar']));
}(this, (function (exports, core, focus, common, core$1, searchBar) { 'use strict';

  var OverviewListSearchBarComponent = /** @class */ (function () {
      function OverviewListSearchBarComponent() {
          this.changeTerm = new core.EventEmitter();
      }
      OverviewListSearchBarComponent.prototype.sofFocus = function () {
          this.searchBar.sofFocus();
      };
      return OverviewListSearchBarComponent;
  }());
  OverviewListSearchBarComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-overview-list-search-bar',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <sof-search-bar\n      #searchBar\n      [placeholder]=\"tc + '.' + 'FILTER' | translate\"\n      (search)=\"changeTerm.emit($event)\"\n    ></sof-search-bar>\n  ",
                  providers: [
                      {
                          provide: focus.SOF_FOCUS_COMPONENT,
                          useExisting: OverviewListSearchBarComponent
                      }
                  ],
                  styles: [""]
              },] }
  ];
  OverviewListSearchBarComponent.propDecorators = {
      tc: [{ type: core.Input }],
      changeTerm: [{ type: core.Output }],
      searchBar: [{ type: core.ViewChild, args: ['searchBar',] }]
  };

  var OverviewListSearchBarModule = /** @class */ (function () {
      function OverviewListSearchBarModule() {
      }
      return OverviewListSearchBarModule;
  }());
  OverviewListSearchBarModule.decorators = [
      { type: core.NgModule, args: [{
                  exports: [OverviewListSearchBarComponent],
                  declarations: [OverviewListSearchBarComponent],
                  imports: [common.CommonModule, core$1.TranslateModule, searchBar.SearchBarModule]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.OverviewListSearchBarComponent = OverviewListSearchBarComponent;
  exports.OverviewListSearchBarModule = OverviewListSearchBarModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-overview-list-search-bar.umd.js.map
