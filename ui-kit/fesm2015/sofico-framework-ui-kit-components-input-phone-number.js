import { EventEmitter, Component, ViewEncapsulation, Optional, Host, Input, Output, ViewChild, NgModule } from '@angular/core';
import { FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
import { CommonModule } from '@angular/common';
import { InputSingleSelectModule } from '@sofico-framework/ui-kit/components/input-single-select';

const phoneUtil$1 = PhoneNumberUtil.getInstance();
function calculatePhoneNumber(countryCodeISO2, localCode) {
    if (countryCodeISO2 && localCode) {
        try {
            // can throw an Error, therefore it's inside a try-catch
            return phoneUtil$1.parseAndKeepRawInput(localCode, countryCodeISO2);
        }
        catch (e) { }
    }
    return null;
}

class InputPhoneNumberComponent {
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
        this.phoneUtil = PhoneNumberUtil.getInstance();
        this.phoneNumber = null; // store the calculated phone number
        this.singleSelectFormControl = new FormControl(null); // used to be able to set default value
        this.internalValue = {
            countryCodeISO2: null,
            localCode: null
        };
        this.selectorLabel = (x) => `+${x.countryPhoneCode} (${x.countryCodeISO3})`;
        this.selectorValue = (x) => x.countryCodeISO2;
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    /**
     *  Determines if the input is disabled.
     */
    set isDisabled(value) {
        this.setDisabledState(value);
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
        var _a, _b;
        this.internalValue = {
            countryCodeISO2: (_a = value === null || value === void 0 ? void 0 : value.countryCodeISO2) !== null && _a !== void 0 ? _a : null,
            localCode: (_b = value === null || value === void 0 ? void 0 : value.localCode) !== null && _b !== void 0 ? _b : null
        };
        // set the default value of the single select control
        this.singleSelectFormControl.setValue(this.internalValue.countryCodeISO2);
        this.phoneNumber = calculatePhoneNumber(this.internalValue.countryCodeISO2, this.internalValue.localCode);
    }
    setDisabledState(isDisabled) {
        this.internalDisabled = isDisabled;
        if (isDisabled) {
            this.singleSelectFormControl.disable();
        }
        else {
            this.singleSelectFormControl.enable();
        }
    }
    onChangeCountryCode(countryCodeISO2) {
        if (!this.isDisabled) {
            this.phoneNumber = calculatePhoneNumber(countryCodeISO2, this.internalValue.localCode);
            this.emitAndPropagate(countryCodeISO2, this.internalValue.localCode);
        }
    }
    onChangeLocalCode(localCode) {
        if (!this.isDisabled) {
            this.phoneNumber = calculatePhoneNumber(this.internalValue.countryCodeISO2, localCode);
            this.emitAndPropagate(this.internalValue.countryCodeISO2, localCode);
        }
    }
    onTouch(propagate = true) {
        if (this.phoneNumber) {
            this.internalValue = this.formatPhoneNumber(this.internalValue, this.phoneNumber);
        }
        if (!this.isDisabled && this.propagateTouch && propagate) {
            this.propagateTouch();
        }
    }
    /**
     * format phone number, in control, in a more readable style (ex. 0475201414 => 0475 20 14 14)
     */
    formatPhoneNumber(value, phoneNumber) {
        return Object.assign(Object.assign({}, value), { localCode: this.phoneUtil.format(phoneNumber, PhoneNumberFormat.NATIONAL) });
    }
    emitAndPropagate(countryCodeISO2, localCode) {
        var _a, _b, _c;
        const tmpCountryCodeISO2 = countryCodeISO2 !== null && countryCodeISO2 !== void 0 ? countryCodeISO2 : null;
        const tmpLocalCode = localCode !== null && localCode !== void 0 ? localCode : null;
        // number without country prefix and/or 0-prefix (ex. +320475201414 => 475201414)
        // phone number is equal to null when 1 character is inside the control, so first default to localCode before we accept null as a value
        const nationalPhoneNumber = (_c = (_b = (_a = this.phoneNumber) === null || _a === void 0 ? void 0 : _a.getNationalNumber()) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : tmpLocalCode;
        const checkForNullValues = tmpLocalCode === null ||
            tmpLocalCode === '' ||
            tmpCountryCodeISO2 === null;
        if (checkForNullValues) {
            this.changeValue.emit(null);
        }
        else {
            this.changeValue.emit({
                countryCodeISO2: tmpCountryCodeISO2,
                localCode: nationalPhoneNumber
            });
        }
        if (this.propagateChange) {
            // only set internal value when in context of a reactive form, not when used standalone
            this.internalValue = {
                countryCodeISO2: tmpCountryCodeISO2,
                localCode: tmpLocalCode
            };
            // emit new form value with corrected localCode
            if (checkForNullValues) {
                this.propagateChange(null);
            }
            else {
                this.propagateChange(Object.assign(Object.assign({}, this.internalValue), { localCode: nationalPhoneNumber }));
            }
        }
    }
}
InputPhoneNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-phone-number',
                encapsulation: ViewEncapsulation.None,
                template: `
    <div class="input-group">
      <div class="input-group-prepend">
        <sof-input-single-select
          [tc]="tc"
          [formControl]="singleSelectFormControl"
          [labelForId]="labelForId"
          [options]="countries"
          [selectorLabel]="selectorLabel"
          [selectorValue]="selectorValue"
          [clearable]="false"
          [isDisabled]="internalDisabled"
          [invalid]="
            invalid ||
            (ngControl?.invalid && (ngControl?.touched || form?.submitted))
          "
          (touch)="onTouch(false)"
          (changeValue)="onChangeCountryCode($event)"
        ></sof-input-single-select>
      </div>
      <input
        #inputElement
        type="text"
        class="form-control"
        [class.is-invalid]="
          invalid ||
          (ngControl?.invalid && (ngControl?.touched || form?.submitted))
        "
        [attr.disabled]="internalDisabled"
        [placeholder]="placeholder"
        [value]="internalValue.localCode"
        (blur)="onTouch()"
        (input)="onChangeLocalCode($event.target?.value)"
      />
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputPhoneNumberComponent }
                ],
                styles: ["sof-input-phone-number sof-input-single-select{min-width:125px}sof-input-phone-number .input-group-prepend:focus-within+.form-control,sof-input-phone-number .input-group-prepend:hover+.form-control{z-index:-1}"]
            },] }
];
InputPhoneNumberComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputPhoneNumberComponent.propDecorators = {
    tc: [{ type: Input }],
    labelForId: [{ type: Input }],
    isDisabled: [{ type: Input }],
    placeholder: [{ type: Input }],
    countries: [{ type: Input }],
    invalid: [{ type: Input }],
    value: [{ type: Input }],
    changeValue: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }]
};

class InputPhoneNumberModule {
}
InputPhoneNumberModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, InputSingleSelectModule, ReactiveFormsModule],
                declarations: [InputPhoneNumberComponent],
                exports: [InputPhoneNumberComponent]
            },] }
];

const phoneUtil = PhoneNumberUtil.getInstance();
function phoneNumberValidator(control) {
    var _a, _b, _c, _d;
    if (!((_a = control === null || control === void 0 ? void 0 : control.value) === null || _a === void 0 ? void 0 : _a.localCode)) {
        return null;
    }
    const phoneNumber = calculatePhoneNumber((_b = control === null || control === void 0 ? void 0 : control.value) === null || _b === void 0 ? void 0 : _b.countryCodeISO2, (_c = control === null || control === void 0 ? void 0 : control.value) === null || _c === void 0 ? void 0 : _c.localCode);
    if (phoneNumber &&
        phoneUtil.isValidNumberForRegion(phoneNumber, (_d = control.value) === null || _d === void 0 ? void 0 : _d.countryCodeISO2)) {
        return null;
    }
    return {
        phoneNumber: true
    };
}

/**
 * Generated bundle index. Do not edit.
 */

export { InputPhoneNumberComponent, InputPhoneNumberModule, calculatePhoneNumber, phoneNumberValidator };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-phone-number.js.map
