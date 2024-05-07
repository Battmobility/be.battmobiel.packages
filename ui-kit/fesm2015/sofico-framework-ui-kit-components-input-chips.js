import { EventEmitter, Component, Optional, Host, Input, Output, ViewChild, NgModule } from '@angular/core';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { isNullOrUndefined } from '@sofico-framework/utils';
import { CommonModule } from '@angular/common';
import { EditableChipModule } from '@sofico-framework/ui-kit/components/editable-chip';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

function chipsRegexValidator(regex) {
    return (control) => {
        var _a;
        if (isNullOrUndefined(regex) ||
            isNullOrUndefined(control === null || control === void 0 ? void 0 : control.value) ||
            !Array.isArray(control.value)) {
            return null;
        }
        if ((_a = control.value) === null || _a === void 0 ? void 0 : _a.some(chip => !chip.match(regex))) {
            return { invalidChips: true };
        }
        return null;
    };
}

class InputChipsComponent {
    constructor(form, ngControl) {
        this.form = form;
        this.ngControl = ngControl;
        /**
         * The placeholder of the input.
         */
        this.placeholder = '';
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        /**
         * EventEmitter that will emit when control is touched.
         */
        this.touch = new EventEmitter();
        this.internalChipValue = null;
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    /**
     * This regex is used for validation when creating new tags or editing one.
     */
    set validationRegex(regex) {
        var _a, _b, _c;
        if (!isNullOrUndefined(regex)) {
            this.internalValidationRegex = regex;
            if (this.ngControl) {
                if (this.internalValidators) {
                    (_a = this.ngControl.control) === null || _a === void 0 ? void 0 : _a.setValidators([
                        chipsRegexValidator(this.internalValidationRegex),
                        ...this.internalValidators
                    ]);
                }
                else {
                    (_b = this.ngControl.control) === null || _b === void 0 ? void 0 : _b.setValidators(chipsRegexValidator(this.internalValidationRegex));
                }
                (_c = this.ngControl.control) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
            }
        }
    }
    /**
     * IMPORTANT: validators for the control linked to this field need to be
     * in this list to work
     *
     * This list is used together with a possible internal validator to build
     * the full list of validators that get set on the control.
     */
    set validators(validators) {
        var _a, _b, _c;
        if (!isNullOrUndefined(validators)) {
            this.internalValidators = Array.isArray(validators)
                ? validators
                : [validators];
            if (this.ngControl) {
                if (this.internalValidationRegex) {
                    (_a = this.ngControl.control) === null || _a === void 0 ? void 0 : _a.setValidators([
                        chipsRegexValidator(this.internalValidationRegex),
                        ...this.internalValidators
                    ]);
                }
                else {
                    (_b = this.ngControl.control) === null || _b === void 0 ? void 0 : _b.setValidators(this.internalValidators);
                }
                (_c = this.ngControl.control) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
            }
        }
    }
    /**
     * Determines the value of the control.
     */
    set value(value) {
        this.writeValue(value);
    }
    sofFocus() {
        this.chipInput.nativeElement.focus();
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
        this.internalValue = value !== null && value !== void 0 ? value : [];
    }
    onChange(value) {
        if (!this.isDisabled) {
            const newInternalValue = value !== null && value !== void 0 ? value : [];
            // propagate the change
            if (this.propagateChange) {
                this.internalValue = newInternalValue;
                this.propagateChange(newInternalValue);
            }
            // emit value
            this.changeValue.emit(newInternalValue);
        }
    }
    submitChip(event) {
        var _a;
        if (this.propagateTouch) {
            this.propagateTouch();
        }
        if (!!this.internalChipValue) {
            event === null || event === void 0 ? void 0 : event.preventDefault();
        }
        const internalChipValueTrimmed = (_a = this.internalChipValue) === null || _a === void 0 ? void 0 : _a.trim();
        if (!!internalChipValueTrimmed) {
            if (!isNullOrUndefined(this.separator) &&
                internalChipValueTrimmed.indexOf(this.separator) >= 0) {
                const itemList = internalChipValueTrimmed
                    .split(this.separator)
                    .filter(Boolean)
                    .map(item => item.trim());
                if (itemList.length === 1) {
                    this.submitChipValueIfValid(itemList[0]);
                }
                else {
                    this.internalValue = [...this.internalValue, ...itemList];
                    this.onChange(this.internalValue);
                    this.internalChipValue = '';
                }
            }
            else {
                this.submitChipValueIfValid(internalChipValueTrimmed);
            }
        }
        else {
            this.internalChipValue = '';
        }
    }
    onChipValueChange(chipValue) {
        this.internalChipValue = chipValue;
    }
    onChipEdit(chipValue, index) {
        this.internalValue = [
            ...this.internalValue.slice(0, index),
            chipValue,
            ...this.internalValue.slice(index + 1)
        ];
        this.onChange(this.internalValue);
    }
    onRemoveChip(chipIndex) {
        this.internalValue = this.internalValue.filter((value, index) => index !== chipIndex);
        this.onChange(this.internalValue);
    }
    onInvalidChip(invalid) {
        if (invalid) {
            this.addRegexError();
        }
        else {
            this.removeRegexError();
        }
    }
    onBlur() {
        if (this.propagateTouch) {
            this.propagateTouch();
        }
        this.internalChipValue = '';
        this.removeRegexError();
    }
    isValid(value) {
        if (this.internalValidationRegex) {
            if (!!value && !value.match(this.internalValidationRegex)) {
                this.addRegexError();
                return false;
            }
            else {
                this.removeRegexError();
                return true;
            }
        }
        else {
            return true;
        }
    }
    submitChipValueIfValid(value) {
        if (this.isValid(value)) {
            this.internalValue = [...this.internalValue, value];
            this.onChange(this.internalValue);
            this.internalChipValue = '';
        }
        else {
            this.internalChipValue = value;
        }
    }
    addRegexError() {
        this.ngControl.control.setErrors(Object.assign(Object.assign({}, this.ngControl.errors), { regex: true }));
    }
    removeRegexError() {
        var _a, _b, _c, _d, _e, _f, _g;
        // 'updateValueAndValidity' triggers valueChanges of control which isn't desired.
        // By checking if the error exists we can reduce the number of valueChanges.
        if ((_b = (_a = this.ngControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.hasError('regex')) {
            (_d = (_c = this.ngControl) === null || _c === void 0 ? void 0 : _c.control) === null || _d === void 0 ? void 0 : _d.setErrors(Object.assign(Object.assign({}, (_e = this.ngControl) === null || _e === void 0 ? void 0 : _e.errors), { regex: null }));
            (_g = (_f = this.ngControl) === null || _f === void 0 ? void 0 : _f.control) === null || _g === void 0 ? void 0 : _g.updateValueAndValidity();
        }
    }
}
InputChipsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-chips',
                template: `
    <div
      class="form-control d-flex flex-row flex-wrap"
      [class.is-invalid]="
        invalid ||
        (ngControl?.invalid && (ngControl?.touched || form?.submitted))
      "
      tabindex="0"
      (focus)="chipInput.focus()"
    >
      <sof-editable-chip
        class="overflow-hidden"
        *ngFor="let chip of internalValue; let index = index"
        [label]="chip"
        [validationRegex]="internalValidationRegex"
        (editChip)="onChipEdit($event, index)"
        (removeChip)="onRemoveChip(index)"
        (invalidChip)="onInvalidChip($event)"
      ></sof-editable-chip>

      <input
        #chipInput
        type="text"
        class="chip-input d-block flex-grow-1"
        [value]="internalChipValue"
        [placeholder]="placeholder"
        [disabled]="isDisabled"
        (blur)="onBlur()"
        (input)="onChipValueChange($event.target?.value)"
        (keydown.enter)="submitChip($event)"
      />
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputChipsComponent }
                ],
                styles: [".form-control{height:auto}input,input:focus,input:hover{border:none;outline:none}.chip-input{min-width:50px}"]
            },] }
];
InputChipsComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputChipsComponent.propDecorators = {
    labelForId: [{ type: Input }],
    placeholder: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    validationRegex: [{ type: Input }],
    separator: [{ type: Input }],
    validators: [{ type: Input }],
    changeValue: [{ type: Output }],
    touch: [{ type: Output }],
    chipInput: [{ type: ViewChild, args: ['chipInput',] }],
    value: [{ type: Input }]
};

class InputChipsModule {
}
InputChipsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [InputChipsComponent],
                imports: [
                    CommonModule,
                    SvgIconModule,
                    NzTagModule,
                    ReactiveFormsModule,
                    EditableChipModule
                ],
                exports: [InputChipsComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputChipsComponent, InputChipsModule, chipsRegexValidator };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-chips.js.map
