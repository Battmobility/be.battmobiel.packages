import { EventEmitter, Component, Optional, Host, Input, Output, ViewChild, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { CommonModule } from '@angular/common';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class InputPasswordComponent {
    constructor(form, ngControl) {
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
        this.changeValue = new EventEmitter();
        /**
         * EventEmitter that will emit when control is touched.
         */
        this.touch = new EventEmitter();
        this.internalValue = null;
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    /**
     * Determines the value of the control.
     */
    set value(value) {
        this.writeValue(value);
    }
    sofFocus() {
        this.inputElement.nativeElement.focus();
    }
    ngOnDestroy() {
        var _a;
        if ((_a = this.ngControl) === null || _a === void 0 ? void 0 : _a.valueAccessor) {
            // Every time a control is re-created the previous writeValue reference(s) is not cleaned up.
            // So, over time, a lot of these references can be built up. This memory leak is a bug in Angular's implementation of ControlValueAccessor.
            // We hide that problem by assigning an empty function to writeValue every time we destroy the control.
            // An detailed explanation of the problem can be found here: https://github.com/angular/angular/pull/29335
            // The bug issue for it: https://github.com/angular/angular/issues/20007
            this.ngControl.valueAccessor.writeValue = () => { };
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouch = fn;
    }
    writeValue(value) {
        this.internalValue = value !== null && value !== void 0 ? value : null;
    }
    onChange(value) {
        if (!this.isDisabled) {
            const newInternalValue = value !== null && value !== void 0 ? value : null;
            // emit value
            this.changeValue.emit(newInternalValue);
            // propagate the change
            if (this.propagateChange) {
                this.internalValue = newInternalValue;
                this.propagateChange(newInternalValue);
            }
        }
    }
    onTouch() {
        this.touch.emit();
        if (!this.isDisabled && this.propagateTouch) {
            this.propagateTouch();
        }
    }
    setDisabledState(value) {
        this.showPlainText = false;
        this.isDisabled = value;
    }
    toggle() {
        this.showPlainText = !this.showPlainText;
    }
}
InputPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-password',
                template: `
    <div class="input-group">
      <input
        #inputElement
        [attr.type]="showPlainText ? 'text' : 'password'"
        [attr.id]="labelForId"
        [attr.autocomplete]="autocomplete"
        [value]="internalValue"
        class="form-control"
        [class.is-invalid]="
          invalid ||
          (ngControl?.invalid && (ngControl?.touched || form?.submitted))
        "
        [placeholder]="placeholder"
        [disabled]="isDisabled"
        (input)="onChange($event.target?.value)"
        (blur)="onTouch()"
      />
      <div class="input-group-append">
        <button
          class="btn btn-action"
          [class.is-invalid]="
            invalid ||
            (ngControl?.invalid && (ngControl?.touched || form?.submitted))
          "
          (click)="toggle()"
          type="button"
          [disabled]="isDisabled"
        >
          <sof-svg-icon icon="icon-eye" *ngIf="!showPlainText"></sof-svg-icon>
          <sof-svg-icon
            icon="icon-eye-crossed"
            *ngIf="showPlainText"
          ></sof-svg-icon>
        </button>
      </div>
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputPasswordComponent }
                ],
                styles: [".input-group input{border-right:unset}.input-group.is-invalid:focus-within,.input-group:focus-within{outline:0}.input-group:focus-within .input-group-append .btn{box-shadow:unset;border-left-color:transparent}.input-group .form-control:focus{box-shadow:unset}.input-group .form-control.is-invalid:focus{border-right-color:transparent;box-shadow:unset}button{color:#555;cursor:pointer;display:flex;justify-content:center;border-top:1px solid #ced4da;border-bottom:1px solid #ced4da;border-right:1px solid #ced4da;align-items:center;background:#fff}button.btn.focus,button.btn:focus{box-shadow:none}:host{display:flex}:host .form-control.is-invalid,:host .was-validated .form-control:invalid{background-position:right 10px center}"]
            },] }
];
InputPasswordComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputPasswordComponent.propDecorators = {
    labelForId: [{ type: Input }],
    value: [{ type: Input }],
    placeholder: [{ type: Input }],
    autocomplete: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    changeValue: [{ type: Output }],
    touch: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }]
};

class InputPasswordModule {
}
InputPasswordModule.decorators = [
    { type: NgModule, args: [{
                declarations: [InputPasswordComponent],
                exports: [InputPasswordComponent],
                imports: [CommonModule, SvgIconModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputPasswordComponent, InputPasswordModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-password.js.map
