(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@sofico-framework/ui-kit/components/form'), require('@sofico-framework/ui-kit/directives/focus'), require('@angular/common'), require('@sofico-framework/ui-kit/components/svg-icon')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/input-password', ['exports', '@angular/core', '@angular/forms', '@sofico-framework/ui-kit/components/form', '@sofico-framework/ui-kit/directives/focus', '@angular/common', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['input-password'] = {}), global.ng.core, global.ng.forms, global['sofico-framework']['ui-kit'].components.form, global['sofico-framework']['ui-kit'].directives.focus, global.ng.common, global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, core, forms, form, focus, common, svgIcon) { 'use strict';

  var InputPasswordComponent = /** @class */ (function () {
      function InputPasswordComponent(form, ngControl) {
          this.form = form;
          this.ngControl = ngControl;
          this.showPlainText = false;
          /**
           * The placeholder of the input.
           */
          this.placeholder = '';
          /**
           * The autocomplete of the input.
           */
          this.autocomplete = '';
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
      Object.defineProperty(InputPasswordComponent.prototype, "value", {
          /**
           * Determines the value of the control.
           */
          set: function (value) {
              this.writeValue(value);
          },
          enumerable: false,
          configurable: true
      });
      InputPasswordComponent.prototype.sofFocus = function () {
          this.inputElement.nativeElement.focus();
      };
      InputPasswordComponent.prototype.ngOnDestroy = function () {
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
      InputPasswordComponent.prototype.registerOnChange = function (fn) {
          this.propagateChange = fn;
      };
      InputPasswordComponent.prototype.registerOnTouched = function (fn) {
          this.propagateTouch = fn;
      };
      InputPasswordComponent.prototype.writeValue = function (value) {
          this.internalValue = value !== null && value !== void 0 ? value : null;
      };
      InputPasswordComponent.prototype.onChange = function (value) {
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
      InputPasswordComponent.prototype.onTouch = function () {
          this.touch.emit();
          if (!this.isDisabled && this.propagateTouch) {
              this.propagateTouch();
          }
      };
      InputPasswordComponent.prototype.setDisabledState = function (value) {
          this.showPlainText = false;
          this.isDisabled = value;
      };
      InputPasswordComponent.prototype.toggle = function () {
          this.showPlainText = !this.showPlainText;
      };
      return InputPasswordComponent;
  }());
  InputPasswordComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-input-password',
                  template: "\n    <div class=\"input-group\">\n      <input\n        #inputElement\n        [attr.type]=\"showPlainText ? 'text' : 'password'\"\n        [attr.id]=\"labelForId\"\n        [attr.autocomplete]=\"autocomplete\"\n        [value]=\"internalValue\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          invalid ||\n          (ngControl?.invalid && (ngControl?.touched || form?.submitted))\n        \"\n        [placeholder]=\"placeholder\"\n        [disabled]=\"isDisabled\"\n        (input)=\"onChange($event.target?.value)\"\n        (blur)=\"onTouch()\"\n      />\n      <div class=\"input-group-append\">\n        <button\n          class=\"btn btn-action\"\n          [class.is-invalid]=\"\n            invalid ||\n            (ngControl?.invalid && (ngControl?.touched || form?.submitted))\n          \"\n          (click)=\"toggle()\"\n          type=\"button\"\n          [disabled]=\"isDisabled\"\n        >\n          <sof-svg-icon icon=\"icon-eye\" *ngIf=\"!showPlainText\"></sof-svg-icon>\n          <sof-svg-icon\n            icon=\"icon-eye-crossed\"\n            *ngIf=\"showPlainText\"\n          ></sof-svg-icon>\n        </button>\n      </div>\n    </div>\n  ",
                  providers: [
                      { provide: focus.SOF_FOCUS_COMPONENT, useExisting: InputPasswordComponent }
                  ],
                  styles: [".input-group input{border-right:unset}.input-group.is-invalid:focus-within,.input-group:focus-within{outline:0}.input-group:focus-within .input-group-append .btn{box-shadow:unset;border-left-color:transparent}.input-group .form-control:focus{box-shadow:unset}.input-group .form-control.is-invalid:focus{border-right-color:transparent;box-shadow:unset}button{color:#555;cursor:pointer;display:flex;justify-content:center;border-top:1px solid #ced4da;border-bottom:1px solid #ced4da;border-right:1px solid #ced4da;align-items:center;background:#fff}button.btn.focus,button.btn:focus{box-shadow:none}:host{display:flex}:host .form-control.is-invalid,:host .was-validated .form-control:invalid{background-position:right 10px center}"]
              },] }
  ];
  InputPasswordComponent.ctorParameters = function () { return [
      { type: form.FormComponent, decorators: [{ type: core.Optional }] },
      { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Host }] }
  ]; };
  InputPasswordComponent.propDecorators = {
      labelForId: [{ type: core.Input }],
      value: [{ type: core.Input }],
      placeholder: [{ type: core.Input }],
      autocomplete: [{ type: core.Input }],
      isDisabled: [{ type: core.Input }],
      invalid: [{ type: core.Input }],
      changeValue: [{ type: core.Output }],
      touch: [{ type: core.Output }],
      inputElement: [{ type: core.ViewChild, args: ['inputElement',] }]
  };

  var InputPasswordModule = /** @class */ (function () {
      function InputPasswordModule() {
      }
      return InputPasswordModule;
  }());
  InputPasswordModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [InputPasswordComponent],
                  exports: [InputPasswordComponent],
                  imports: [common.CommonModule, svgIcon.SvgIconModule]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.InputPasswordComponent = InputPasswordComponent;
  exports.InputPasswordModule = InputPasswordModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-input-password.umd.js.map
