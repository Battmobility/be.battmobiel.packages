(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@sofico-framework/ui-kit/directives/focus'), require('@angular/common'), require('@angular/forms'), require('@ngx-translate/core'), require('@sofico-framework/ui-kit/components/svg-icon')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/search-bar', ['exports', '@angular/core', '@sofico-framework/ui-kit/directives/focus', '@angular/common', '@angular/forms', '@ngx-translate/core', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['search-bar'] = {}), global.ng.core, global['sofico-framework']['ui-kit'].directives.focus, global.ng.common, global.ng.forms, global.core$1, global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, core, focus, common, forms, core$1, svgIcon) { 'use strict';

  var SearchBarComponent = /** @class */ (function () {
      function SearchBarComponent() {
          this.search = new core.EventEmitter();
          this.internalValue = '';
      }
      SearchBarComponent.prototype.onClear = function () {
          this.internalValue = '';
          this.search.emit('');
      };
      SearchBarComponent.prototype.onKeyPress = function () {
          this.search.emit(this.internalValue);
      };
      SearchBarComponent.prototype.sofFocus = function () {
          this.searchInput.nativeElement.focus();
      };
      return SearchBarComponent;
  }());
  SearchBarComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-search-bar',
                  template: "\n    <div class=\"input-group mb-3 sof-input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" (click)=\"searchInput.focus()\">\n          <sof-svg-icon icon=\"icon-search\" class=\"search-icon\"></sof-svg-icon>\n        </span>\n      </div>\n      <input\n        #searchInput\n        [(ngModel)]=\"internalValue\"\n        (keyup)=\"onKeyPress()\"\n        type=\"text\"\n        class=\"form-control\"\n        [class.clear-input]=\"internalValue\"\n        placeholder=\"{{ placeholder }}\"\n      />\n      <div *ngIf=\"internalValue\" class=\"input-group-append\">\n        <span class=\"input-group-text\">\n          <button class=\"btn btn-plain\" (click)=\"onClear()\">\n            <sof-svg-icon\n              icon=\"icon-cross\"\n              class=\"sof-clear-icon\"\n              size=\"8\"\n            ></sof-svg-icon>\n          </button>\n        </span>\n      </div>\n    </div>\n  ",
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  providers: [{ provide: focus.SOF_FOCUS_COMPONENT, useExisting: SearchBarComponent }],
                  styles: [".input-group .sof-clear-icon:hover{cursor:pointer}.input-group .input-group-append .input-group-text .btn{display:flex}.input-group .clear-input,.input-group .input-group-prepend .input-group-text{border-right:none}.input-group .input-group-append .input-group-text,.input-group input.form-control{border-left:none}"]
              },] }
  ];
  SearchBarComponent.propDecorators = {
      placeholder: [{ type: core.Input }],
      search: [{ type: core.Output }],
      searchInput: [{ type: core.ViewChild, args: ['searchInput',] }]
  };

  var SearchBarModule = /** @class */ (function () {
      function SearchBarModule() {
      }
      return SearchBarModule;
  }());
  SearchBarModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [
                      common.CommonModule,
                      forms.FormsModule,
                      forms.ReactiveFormsModule,
                      svgIcon.SvgIconModule,
                      core$1.TranslateModule
                  ],
                  declarations: [SearchBarComponent],
                  exports: [SearchBarComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.SearchBarComponent = SearchBarComponent;
  exports.SearchBarModule = SearchBarModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-search-bar.umd.js.map
