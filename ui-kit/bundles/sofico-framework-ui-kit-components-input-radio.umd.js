(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@sofico-framework/ui-kit/components/form'), require('@sofico-framework/ui-kit/directives/focus'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/input-radio', ['exports', '@angular/core', '@angular/forms', '@sofico-framework/ui-kit/components/form', '@sofico-framework/ui-kit/directives/focus', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['input-radio'] = {}), global.ng.core, global.ng.forms, global['sofico-framework']['ui-kit'].components.form, global['sofico-framework']['ui-kit'].directives.focus, global.ng.common));
}(this, (function (exports, core, forms, form, focus, common) { 'use strict';

  var uniqueRadioCounter = 0;
  var InputRadioComponent = /** @class */ (function () {
      function InputRadioComponent(form, ngControl) {
          this.form = form;
          this.ngControl = ngControl;
          /**
           * EventEmitter that will emit the value when changed.
           */
          this.changeValue = new core.EventEmitter();
          this.labelForId = 'sof-input-radio-' + uniqueRadioCounter; // generate unique id
          ++uniqueRadioCounter;
          if (ngControl) {
              ngControl.valueAccessor = this;
          }
      }
      InputRadioComponent.prototype.sofFocus = function () {
          this.inputElement.nativeElement.focus();
      };
      InputRadioComponent.prototype.onChange = function (e) {
          if (this.changeFn) {
              this.changeFn(e);
          }
          this.changeValue.emit(e);
      };
      InputRadioComponent.prototype.writeValue = function (obj) { };
      InputRadioComponent.prototype.registerOnChange = function (fn) {
          this.changeFn = fn;
      };
      InputRadioComponent.prototype.registerOnTouched = function (fn) {
          this.touchFn = fn;
      };
      InputRadioComponent.prototype.setDisabledState = function (isDisabled) {
          this.isDisabled = isDisabled;
      };
      return InputRadioComponent;
  }());
  InputRadioComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-input-radio',
                  template: "\n    <div class=\"custom-control custom-radio\">\n      <input\n        #inputElement\n        type=\"radio\"\n        [attr.id]=\"labelForId\"\n        [value]=\"value\"\n        [disabled]=\"isDisabled\"\n        [attr.name]=\"name\"\n        [checked]=\"value === ngControl?.value || checked\"\n        (change)=\"onChange(value)\"\n        [class.is-invalid]=\"\n          invalid ||\n          (ngControl?.invalid && (ngControl?.touched || form?.submitted))\n        \"\n        class=\"custom-control-input\"\n      />\n      <label class=\"custom-control-label\" [attr.for]=\"labelForId\">\n        <ng-content></ng-content>\n      </label>\n    </div>\n  ",
                  providers: [
                      { provide: focus.SOF_FOCUS_COMPONENT, useExisting: InputRadioComponent }
                  ],
                  styles: [""]
              },] }
  ];
  InputRadioComponent.ctorParameters = function () { return [
      { type: form.FormComponent, decorators: [{ type: core.Optional }] },
      { type: forms.NgControl, decorators: [{ type: core.Optional }] }
  ]; };
  InputRadioComponent.propDecorators = {
      value: [{ type: core.Input }],
      name: [{ type: core.Input }],
      checked: [{ type: core.Input }],
      isDisabled: [{ type: core.Input }],
      invalid: [{ type: core.Input }],
      changeValue: [{ type: core.Output }],
      inputElement: [{ type: core.ViewChild, args: ['inputElement',] }]
  };

  var InputRadioModule = /** @class */ (function () {
      function InputRadioModule() {
      }
      return InputRadioModule;
  }());
  InputRadioModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule, forms.ReactiveFormsModule],
                  declarations: [InputRadioComponent],
                  exports: [InputRadioComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.InputRadioComponent = InputRadioComponent;
  exports.InputRadioModule = InputRadioModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-input-radio.umd.js.map
