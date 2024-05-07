import { Component, Optional, Host, ViewChild, NgModule } from '@angular/core';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { InputNumberBaseDirective } from '@sofico-framework/ui-kit/components/number-base';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { Big } from 'big.js';
import { CommonModule } from '@angular/common';

class InputPercentageComponent extends InputNumberBaseDirective {
    constructor(form, ngControl) {
        super();
        this.form = form;
        this.ngControl = ngControl;
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
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
    writeValue(obj) {
        // multiply value by 100 before writing it to the input
        let multipliedBy100 = null;
        try {
            multipliedBy100 = +new Big(obj).mul(100);
        }
        catch (error) { }
        super.writeValue(multipliedBy100);
    }
    onChange(value) {
        // update internal value
        const internalValue = this.updateValueByUserInput(value);
        let inputValueAsDecimalDividedBy100 = null;
        try {
            inputValueAsDecimalDividedBy100 = +new Big(internalValue.replace(/,/g, '.')).div(100);
        }
        catch (error) { }
        // emit value
        this.changeValue.emit(inputValueAsDecimalDividedBy100);
        // propagate the change, divided by 100
        if (this.propagateChange && internalValue !== undefined) {
            this.propagateChange(inputValueAsDecimalDividedBy100 === null
                ? null
                : inputValueAsDecimalDividedBy100);
        }
    }
}
InputPercentageComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-percentage',
                template: `
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">%</span>
      </div>
      <input
        #inputElement
        type="text"
        inputmode="decimal"
        [attr.id]="labelForId"
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
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputPercentageComponent }
                ]
            },] }
];
InputPercentageComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputPercentageComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement',] }]
};

class InputPercentageModule {
}
InputPercentageModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ReactiveFormsModule],
                declarations: [InputPercentageComponent],
                exports: [InputPercentageComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputPercentageComponent, InputPercentageModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-percentage.js.map
