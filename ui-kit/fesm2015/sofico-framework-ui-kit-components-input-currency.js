import { Component, Optional, Host, Input, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { InputNumberBaseDirective } from '@sofico-framework/ui-kit/components/number-base';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { CommonModule } from '@angular/common';
import { UtilsPipesModule } from '@sofico-framework/utils';

class InputCurrencyComponent extends InputNumberBaseDirective {
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
}
InputCurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-currency',
                template: `
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">{{
          currencyCode | sofCurrencySymbol
        }}</span>
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
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputCurrencyComponent }
                ]
            },] }
];
InputCurrencyComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputCurrencyComponent.propDecorators = {
    currencyCode: [{ type: Input }]
};

class InputCurrencyModule {
}
InputCurrencyModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, UtilsPipesModule],
                declarations: [InputCurrencyComponent],
                exports: [InputCurrencyComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputCurrencyComponent, InputCurrencyModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-currency.js.map
