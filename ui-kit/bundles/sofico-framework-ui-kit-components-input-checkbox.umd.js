(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@sofico-framework/ui-kit/components/form'), require('@sofico-framework/ui-kit/directives/focus'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/input-checkbox', ['exports', '@angular/core', '@angular/forms', '@sofico-framework/ui-kit/components/form', '@sofico-framework/ui-kit/directives/focus', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['input-checkbox'] = {}), global.ng.core, global.ng.forms, global['sofico-framework']['ui-kit'].components.form, global['sofico-framework']['ui-kit'].directives.focus, global.ng.common));
}(this, (function (exports, core, forms, form, focus, common) { 'use strict';

  var uniqueCheckboxCounter = 0;
  var InputCheckboxComponent = /** @class */ (function () {
      function InputCheckboxComponent(form, ngControl) {
          this.form = form;
          this.ngControl = ngControl;
          /**
           * EventEmitter that will emit the value when changed.
           */
          this.changeValue = new core.EventEmitter();
          /**
           * EventEmitter that will emit when control is touched.
           */
          this.touch = new core.EventEmitter();
          this.internalValue = null;
          this.isIndeterminate = false;
          this.labelForId = 'sof-input-checkbox-' + uniqueCheckboxCounter; // generate unique id
          ++uniqueCheckboxCounter;
          if (ngControl) {
              ngControl.valueAccessor = this;
          }
      }
      Object.defineProperty(InputCheckboxComponent.prototype, "selected", {
          /**
           * Determines if the input is checked or not.
           */
          set: function (value) {
              this.writeValue(value);
              this.calculateIndeterminate();
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(InputCheckboxComponent.prototype, "indeterminate", {
          /**
           * Determines if the input is indeterminate or not.
           * Checked true will always prevail over indeterminate true.
           */
          set: function (value) {
              this.isIndeterminate = value;
              this.calculateIndeterminate();
          },
          enumerable: false,
          configurable: true
      });
      InputCheckboxComponent.prototype.sofFocus = function () {
          this.inputElement.nativeElement.focus();
      };
      InputCheckboxComponent.prototype.ngOnDestroy = function () {
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
      InputCheckboxComponent.prototype.registerOnChange = function (fn) {
          this.propagateChange = fn;
      };
      InputCheckboxComponent.prototype.registerOnTouched = function (fn) {
          this.propagateTouch = fn;
      };
      InputCheckboxComponent.prototype.writeValue = function (value) {
          this.internalValue = value;
      };
      InputCheckboxComponent.prototype.onToggle = function (event) {
          // Prevent native functionality of browser input-checkbox
          event.preventDefault();
          if (!this.isDisabled) {
              this.calculateIndeterminate();
              var newValue = !this.internalValue;
              if (this.propagateChange) {
                  this.internalValue = newValue;
                  this.propagateChange(newValue);
              }
              this.changeValue.emit(newValue);
          }
          // Must happen after propagateChange, if not it will not work properly when formControl has set updateOn: 'blur'.
          // When updateOn: 'blur' is set the form control will only emit a value once the control is out of focus.
          // By calling propagateTouch before propagateChange the old value is used as initial value instead of the new value.
          // It seems that every propagateChange is ignored once the propagateTouch is triggered.
          // The problem doesn't occur when updateOn is 'change' (default) as the control is not limited by propagateTouch.
          this.onTouch();
      };
      InputCheckboxComponent.prototype.onTouch = function () {
          this.touch.emit();
          if (!this.isDisabled && this.propagateTouch) {
              this.propagateTouch();
          }
      };
      InputCheckboxComponent.prototype.setDisabledState = function (isDisabled) {
          this.isDisabled = isDisabled;
      };
      InputCheckboxComponent.prototype.calculateIndeterminate = function () {
          this.inputElement.nativeElement.indeterminate =
              this.isIndeterminate && !this.internalValue;
      };
      return InputCheckboxComponent;
  }());
  InputCheckboxComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-input-checkbox',
                  template: "\n    <div class=\"custom-control custom-checkbox\">\n      <input\n        #inputElement\n        type=\"checkbox\"\n        [attr.id]=\"labelForId\"\n        [disabled]=\"isDisabled\"\n        class=\"custom-control-input\"\n        [class.is-invalid]=\"\n          invalid ||\n          (ngControl?.invalid && (ngControl?.touched || form?.submitted))\n        \"\n        [checked]=\"internalValue\"\n        [attr.value]=\"internalValue\"\n      />\n      <label\n        [for]=\"labelForId\"\n        class=\"custom-control-label\"\n        (click)=\"onToggle($event)\"\n      >\n        {{ label }}\n      </label>\n    </div>\n  ",
                  providers: [
                      { provide: focus.SOF_FOCUS_COMPONENT, useExisting: InputCheckboxComponent }
                  ]
              },] }
  ];
  InputCheckboxComponent.ctorParameters = function () { return [
      { type: form.FormComponent, decorators: [{ type: core.Optional }] },
      { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Host }] }
  ]; };
  InputCheckboxComponent.propDecorators = {
      label: [{ type: core.Input }],
      isDisabled: [{ type: core.Input }],
      invalid: [{ type: core.Input }],
      selected: [{ type: core.Input }],
      indeterminate: [{ type: core.Input }],
      changeValue: [{ type: core.Output }],
      touch: [{ type: core.Output }],
      inputElement: [{ type: core.ViewChild, args: ['inputElement', { static: true },] }]
  };

  var InputCheckboxModule = /** @class */ (function () {
      function InputCheckboxModule() {
      }
      return InputCheckboxModule;
  }());
  InputCheckboxModule.decorators = [
      { type: core.NgModule, args: [{
                  imports: [common.CommonModule],
                  declarations: [InputCheckboxComponent],
                  exports: [InputCheckboxComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.InputCheckboxComponent = InputCheckboxComponent;
  exports.InputCheckboxModule = InputCheckboxModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-input-checkbox.umd.js.map
