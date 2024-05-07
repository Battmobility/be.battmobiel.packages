(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ngx-translate/core'), require('rxjs/operators'), require('@angular/common'), require('@sofico-framework/ui-kit/components/button'), require('@sofico-framework/ui-kit/components/input-single-select'), require('@sofico-framework/ui-kit/components/svg-icon')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/overview-list-sort-dropdown', ['exports', '@angular/core', '@angular/forms', '@ngx-translate/core', 'rxjs/operators', '@angular/common', '@sofico-framework/ui-kit/components/button', '@sofico-framework/ui-kit/components/input-single-select', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['overview-list-sort-dropdown'] = {}), global.ng.core, global.ng.forms, global.core$1, global.rxjs.operators, global.ng.common, global['sofico-framework']['ui-kit'].components.button, global['sofico-framework']['ui-kit'].components['input-single-select'], global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, core, forms, core$1, operators, common, button, inputSingleSelect, svgIcon) { 'use strict';

  var OverviewListSortDropdownComponent = /** @class */ (function () {
      function OverviewListSortDropdownComponent(translateService, fb) {
          this.translateService = translateService;
          this.fb = fb;
          this.form = this.fb.control(0);
          this.changeSorting = new core.EventEmitter();
          this.selectorLabel = function (x) { return x === null || x === void 0 ? void 0 : x.translation; };
          this.selectorValue = function (x) { return x === null || x === void 0 ? void 0 : x.index; };
      }
      Object.defineProperty(OverviewListSortDropdownComponent.prototype, "overviewListConfig", {
          set: function (config) {
              var _a, _b, _c, _d, _e, _f;
              this.selectors = (_b = (_a = config === null || config === void 0 ? void 0 : config.functionalProps) === null || _a === void 0 ? void 0 : _a.filter(function (prop) { return prop.sortable; })) === null || _b === void 0 ? void 0 : _b.map(function (prop) { return prop === null || prop === void 0 ? void 0 : prop.selector; });
              this.plainSorts = (_d = (_c = config === null || config === void 0 ? void 0 : config.functionalProps) === null || _c === void 0 ? void 0 : _c.filter(function (prop) { return prop.sortable; })) === null || _d === void 0 ? void 0 : _d.map(function (prop) { return prop === null || prop === void 0 ? void 0 : prop.plainSort; });
              this.labels = (_f = (_e = config === null || config === void 0 ? void 0 : config.functionalProps) === null || _e === void 0 ? void 0 : _e.filter(function (prop) { return prop.sortable; })) === null || _f === void 0 ? void 0 : _f.map(function (prop) { return prop === null || prop === void 0 ? void 0 : prop.label; });
              this.dropDownChoices$ = this.mapToTranslatedDropDownChoices();
          },
          enumerable: false,
          configurable: true
      });
      OverviewListSortDropdownComponent.prototype.changeDirection = function () {
          var _a, _b, _c;
          this.changeSorting.emit({
              prop: (_a = this.sorting) === null || _a === void 0 ? void 0 : _a.prop,
              plainSort: (_b = this.sorting) === null || _b === void 0 ? void 0 : _b.plainSort,
              order: ((_c = this.sorting) === null || _c === void 0 ? void 0 : _c.order) === 'asc' ? 'desc' : 'asc'
          });
      };
      OverviewListSortDropdownComponent.prototype.onChange = function (obj) {
          var _a;
          this.changeSorting.emit({
              prop: this.selectors[obj.index],
              plainSort: this.plainSorts[obj.index],
              order: (_a = this.sorting) === null || _a === void 0 ? void 0 : _a.order
          });
      };
      OverviewListSortDropdownComponent.prototype.mapToTranslatedDropDownChoices = function () {
          var _this = this;
          var arrayReadyTranslate = this.labels.map(function (label) { return _this.tc + '.' + label; });
          return this.translateService.stream(arrayReadyTranslate).pipe(operators.map(function (obj) { return Object.keys(obj).map(function (key, index) {
              return {
                  translation: obj[key],
                  index: index
              };
          }); }));
      };
      return OverviewListSortDropdownComponent;
  }());
  OverviewListSortDropdownComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-overview-list-sort-dropdown',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <button\n          sofButton\n          [icon]=\"\n            sorting?.order === 'asc'\n              ? 'icon-sort-amount-asc'\n              : 'icon-sort-amount-desc'\n          \"\n          class=\"btn\"\n          type=\"button\"\n          (click)=\"changeDirection()\"\n        ></button>\n      </div>\n      <sof-input-single-select\n        [tc]=\"tc\"\n        class=\"form-control\"\n        [formControl]=\"form\"\n        [options]=\"dropDownChoices$ | async\"\n        [selectorLabel]=\"selectorLabel\"\n        [selectorValue]=\"selectorValue\"\n        [clearable]=\"false\"\n        [showSearch]=\"false\"\n        (changeObjectValue)=\"onChange($event)\"\n      ></sof-input-single-select>\n    </div>\n  ",
                  styles: [".input-group{background-color:#fff;border-radius:.25rem}.input-group .btn{display:flex;align-items:center;border:1px solid #ced4da;border-right:0}.input-group sof-input-single-select.form-control{padding:0;border:0}"]
              },] }
  ];
  OverviewListSortDropdownComponent.ctorParameters = function () { return [
      { type: core$1.TranslateService },
      { type: forms.FormBuilder }
  ]; };
  OverviewListSortDropdownComponent.propDecorators = {
      tc: [{ type: core.Input }],
      sorting: [{ type: core.Input }],
      overviewListConfig: [{ type: core.Input }],
      changeSorting: [{ type: core.Output }]
  };

  var OverviewListSortDropdownModule = /** @class */ (function () {
      function OverviewListSortDropdownModule() {
      }
      return OverviewListSortDropdownModule;
  }());
  OverviewListSortDropdownModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [OverviewListSortDropdownComponent],
                  exports: [OverviewListSortDropdownComponent],
                  imports: [
                      common.CommonModule,
                      svgIcon.SvgIconModule,
                      core$1.TranslateModule,
                      inputSingleSelect.InputSingleSelectModule,
                      forms.FormsModule,
                      forms.ReactiveFormsModule,
                      button.ButtonModule
                  ]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.OverviewListSortDropdownComponent = OverviewListSortDropdownComponent;
  exports.OverviewListSortDropdownModule = OverviewListSortDropdownModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-overview-list-sort-dropdown.umd.js.map
