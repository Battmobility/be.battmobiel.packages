(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@sofico-framework/ui-kit/components/form'), require('@sofico-framework/ui-kit/directives/focus'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/input-textarea', ['exports', '@angular/core', '@angular/forms', '@sofico-framework/ui-kit/components/form', '@sofico-framework/ui-kit/directives/focus', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['input-textarea'] = {}), global.ng.core, global.ng.forms, global['sofico-framework']['ui-kit'].components.form, global['sofico-framework']['ui-kit'].directives.focus, global.ng.common));
}(this, (function (exports, core, forms, form, focus, common) { 'use strict';

  var InputTextareaComponent = /** @class */ (function () {
      function InputTextareaComponent(form, ngControl) {
          this.form = form;
          this.ngControl = ngControl;
          /**
           * Determines if the textarea should be resizable. Default: true
           */
          this.resizable = true;
          /**
           * The placeholder of the input.
           */
          this.placeholder = '';
          /**
           * EventEmitter that will emit the value when changed.
           */
          this.changeValue = new core.EventEmitter();
          /**
           * EventEmitter that will emit when control is touched.
           */
          this.touch = new core.EventEmitter();
          this.internalValue = null;
          if (ngControl) {
              ngControl.valueAccessor = this;
          }
      }
      Object.defineProperty(InputTextareaComponent.prototype, "value", {
          /**
           * Determines the value of the control.
           */
          set: function (value) {
              this.writeValue(value);
          },
          enumerable: false,
          configurable: true
      });
      InputTextareaComponent.prototype.sofFocus = function () {
          this.inputElement.nativeElement.focus();
      };
      InputTextareaComponent.prototype.ngOnDestroy = function () {
          var _a;
          if ((_a = this.ngControl) === null || _a === void 0 ? void 0 : _a.valueAccessor) {
              // Every time a control is re-created the previous writeValue reference(s) is not cleaned up.
              // So, over time, a lot of these references can be built up. This memory leak is a bug in Angular's implementation of ControlValueAccessor.
              // We hide that problem by assigning an empty function to writeValue every time we destroy the control.
              // An detailed explanation of the problem can be found here: https://github.com/angular/angular/pull/29335
              // The bug issue for it: https://github.com/angular/angular/issues/20007
              this.ngControl.valueAccessor.writeValue = function () { };
          }
      };
      InputTextareaComponent.prototype.registerOnChange = function (fn) {
          this.propagateChange = fn;
      };
      InputTextareaComponent.prototype.registerOnTouched = function (fn) {
          this.propagateTouch = fn;
      };
      InputTextareaComponent.prototype.writeValue = function (value) {
          this.internalValue = value !== null && value !== void 0 ? value : null;
      };
      InputTextareaComponent.prototype.onChange = function (value) {
          if (!this.isDisabled) {
              var newInternalValue = value !== null && value !== void 0 ? value : null;
              // emit value
              this.changeValue.emit(newInternalValue);
              // propagate the change
              if (this.propagateChange) {
                  this.internalValue = newInternalValue;
                  this.propagateChange(newInternalValue);
              }
          }
      };
      InputTextareaComponent.prototype.onTouch = function () {
          this.touch.emit();
          if (!this.isDisabled && this.propagateTouch) {
              this.propagateTouch();
          }
      };
      InputTextareaComponent.prototype.setDisabledState = function (value) {
          this.isDisabled = value;
      };
      return InputTextareaComponent;
  }());
  InputTextareaComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-input-textarea',
                  template: "\n    <textarea\n      #inputElement\n      [attr.id]=\"labelForId\"\n      [value]=\"internalValue\"\n      class=\"form-control\"\n      [class.is-invalid]=\"\n        invalid ||\n        (ngControl?.invalid && (ngControl?.touched || form?.submitted))\n      \"\n      [class.not-resizable]=\"!resizable\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"isDisabled\"\n      (input)=\"onChange($event.target?.value)\"\n      (blur)=\"onTouch()\"\n    ></textarea>\n  ",
                  providers: [
                      { provide: focus.SOF_FOCUS_COMPONENT, useExisting: InputTextareaComponent }
                  ],
                  styles: [".not-resizable{resize:none}"]
              },] }
  ];
  InputTextareaComponent.ctorParameters = function () { return [
      { type: form.FormComponent, decorators: [{ type: core.Optional }] },
      { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Host }] }
  ]; };
  InputTextareaComponent.propDecorators = {
      resizable: [{ type: core.Input }],
      labelForId: [{ type: core.Input }],
      value: [{ type: core.Input }],
      placeholder: [{ type: core.Input }],
      isDisabled: [{ type: core.Input }],
      invalid: [{ type: core.Input }],
      changeValue: [{ type: core.Output }],
      touch: [{ type: core.Output }],
      inputElement: [{ type: core.ViewChild, args: ['inputElement',] }]
  };

  var InputTextareaModule = /** @class */ (function () {
      function InputTextareaModule() {
      }
      return InputTextareaModule;
  }());
  InputTextareaModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule],
                  declarations: [InputTextareaComponent],
                  exports: [InputTextareaComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.InputTextareaComponent = InputTextareaComponent;
  exports.InputTextareaModule = InputTextareaModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-input-textarea.umd.js.map
