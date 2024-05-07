import { EventEmitter, Component, Optional, Input, Output, ViewChild, NgModule } from '@angular/core';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { CommonModule } from '@angular/common';

let uniqueRadioCounter = 0;
class InputRadioComponent {
    constructor(form, ngControl) {
        this.form = form;
        this.ngControl = ngControl;
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        this.labelForId = 'sof-input-radio-' + uniqueRadioCounter; // generate unique id
        ++uniqueRadioCounter;
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    sofFocus() {
        this.inputElement.nativeElement.focus();
    }
    onChange(e) {
        if (this.changeFn) {
            this.changeFn(e);
        }
        this.changeValue.emit(e);
    }
    writeValue(obj) { }
    registerOnChange(fn) {
        this.changeFn = fn;
    }
    registerOnTouched(fn) {
        this.touchFn = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
}
InputRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-radio',
                template: `
    <div class="custom-control custom-radio">
      <input
        #inputElement
        type="radio"
        [attr.id]="labelForId"
        [value]="value"
        [disabled]="isDisabled"
        [attr.name]="name"
        [checked]="value === ngControl?.value || checked"
        (change)="onChange(value)"
        [class.is-invalid]="
          invalid ||
          (ngControl?.invalid && (ngControl?.touched || form?.submitted))
        "
        class="custom-control-input"
      />
      <label class="custom-control-label" [attr.for]="labelForId">
        <ng-content></ng-content>
      </label>
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputRadioComponent }
                ],
                styles: [""]
            },] }
];
InputRadioComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }] }
];
InputRadioComponent.propDecorators = {
    value: [{ type: Input }],
    name: [{ type: Input }],
    checked: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    changeValue: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }]
};

class InputRadioModule {
}
InputRadioModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ReactiveFormsModule],
                declarations: [InputRadioComponent],
                exports: [InputRadioComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputRadioComponent, InputRadioModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-radio.js.map
