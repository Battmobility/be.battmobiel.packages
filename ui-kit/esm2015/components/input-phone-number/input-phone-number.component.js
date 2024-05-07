import { Component, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { calculatePhoneNumber } from './utils/phone-numbers.utils';
export class InputPhoneNumberComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtcGhvbmUtbnVtYmVyL2lucHV0LXBob25lLW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFFTCxtQkFBbUIsRUFDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDaEIsTUFBTSx1QkFBdUIsQ0FBQztBQUcvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQThDbkUsTUFBTSxPQUFPLHlCQUF5QjtJQTZEcEMsWUFDcUIsSUFBbUIsRUFDWCxTQUFvQjtRQUQ1QixTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ1gsY0FBUyxHQUFULFNBQVMsQ0FBVztRQS9DakQ7O1dBRUc7UUFDTSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQW1CMUI7O1dBRUc7UUFDTyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBSXJELGNBQVMsR0FBb0IsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNELGdCQUFXLEdBQWdCLElBQUksQ0FBQyxDQUFDLG9DQUFvQztRQUU3RSw0QkFBdUIsR0FBZ0IsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENB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OzJCQUVOLFNBQVMsU0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCB7XG4gIE9uU29mRm9jdXMsXG4gIFNPRl9GT0NVU19DT01QT05FTlRcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2RpcmVjdGl2ZXMvZm9jdXMnO1xuaW1wb3J0IHtcbiAgUGhvbmVOdW1iZXIsXG4gIFBob25lTnVtYmVyRm9ybWF0LFxuICBQaG9uZU51bWJlclV0aWxcbn0gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcbmltcG9ydCB7IENvdW50cnkgfSBmcm9tICcuL3R5cGVzL2NvdW50cnkudHlwZSc7XG5pbXBvcnQgeyBJbnB1dFBob25lTnVtYmVyIH0gZnJvbSAnLi90eXBlcy9pbnB1dC1waG9uZS1udW1iZXIudHlwZSc7XG5pbXBvcnQgeyBjYWxjdWxhdGVQaG9uZU51bWJlciB9IGZyb20gJy4vdXRpbHMvcGhvbmUtbnVtYmVycy51dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1pbnB1dC1waG9uZS1udW1iZXInLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1waG9uZS1udW1iZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgIDxzb2YtaW5wdXQtc2luZ2xlLXNlbGVjdFxuICAgICAgICAgIFt0Y109XCJ0Y1wiXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cInNpbmdsZVNlbGVjdEZvcm1Db250cm9sXCJcbiAgICAgICAgICBbbGFiZWxGb3JJZF09XCJsYWJlbEZvcklkXCJcbiAgICAgICAgICBbb3B0aW9uc109XCJjb3VudHJpZXNcIlxuICAgICAgICAgIFtzZWxlY3RvckxhYmVsXT1cInNlbGVjdG9yTGFiZWxcIlxuICAgICAgICAgIFtzZWxlY3RvclZhbHVlXT1cInNlbGVjdG9yVmFsdWVcIlxuICAgICAgICAgIFtjbGVhcmFibGVdPVwiZmFsc2VcIlxuICAgICAgICAgIFtpc0Rpc2FibGVkXT1cImludGVybmFsRGlzYWJsZWRcIlxuICAgICAgICAgIFtpbnZhbGlkXT1cIlxuICAgICAgICAgICAgaW52YWxpZCB8fFxuICAgICAgICAgICAgKG5nQ29udHJvbD8uaW52YWxpZCAmJiAobmdDb250cm9sPy50b3VjaGVkIHx8IGZvcm0/LnN1Ym1pdHRlZCkpXG4gICAgICAgICAgXCJcbiAgICAgICAgICAodG91Y2gpPVwib25Ub3VjaChmYWxzZSlcIlxuICAgICAgICAgIChjaGFuZ2VWYWx1ZSk9XCJvbkNoYW5nZUNvdW50cnlDb2RlKCRldmVudClcIlxuICAgICAgICA+PC9zb2YtaW5wdXQtc2luZ2xlLXNlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgICNpbnB1dEVsZW1lbnRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cIlxuICAgICAgICAgIGludmFsaWQgfHxcbiAgICAgICAgICAobmdDb250cm9sPy5pbnZhbGlkICYmIChuZ0NvbnRyb2w/LnRvdWNoZWQgfHwgZm9ybT8uc3VibWl0dGVkKSlcbiAgICAgICAgXCJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiaW50ZXJuYWxEaXNhYmxlZFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgIFt2YWx1ZV09XCJpbnRlcm5hbFZhbHVlLmxvY2FsQ29kZVwiXG4gICAgICAgIChibHVyKT1cIm9uVG91Y2goKVwiXG4gICAgICAgIChpbnB1dCk9XCJvbkNoYW5nZUxvY2FsQ29kZSgkZXZlbnQudGFyZ2V0Py52YWx1ZSlcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBTT0ZfRk9DVVNfQ09NUE9ORU5ULCB1c2VFeGlzdGluZzogSW5wdXRQaG9uZU51bWJlckNvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRQaG9uZU51bWJlckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3ksIE9uU29mRm9jdXMge1xuICBASW5wdXQoKSB0Yzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGlucHV0IHRvIGNvbm5lY3QgdG8gYSBsYWJlbCB0YWcuXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbEZvcklkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBEZXRlcm1pbmVzIGlmIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIHNldCBpc0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2Vob2xkZXIgb2YgdGhlIGlucHV0LlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcblxuICAvKipcbiAgICogVGhlIGNvdW50cmllcyB0aGF0IHBvcHVsYXRlIHRoZSBsaXN0LlxuICAgKi9cbiAgQElucHV0KCkgY291bnRyaWVzOiBDb3VudHJ5W107XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgaXMgaW4gYSB2YWxpZCBzdGF0ZS5cbiAgICovXG4gIEBJbnB1dCgpIGludmFsaWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHZhbHVlKHZhbHVlOiBJbnB1dFBob25lTnVtYmVyKSB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgdGhhdCB3aWxsIGVtaXQgdGhlIHZhbHVlIHdoZW4gY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2VWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8SW5wdXRQaG9uZU51bWJlcj4oKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBwaG9uZVV0aWw6IFBob25lTnVtYmVyVXRpbCA9IFBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpO1xuICBwcml2YXRlIHBob25lTnVtYmVyOiBQaG9uZU51bWJlciA9IG51bGw7IC8vIHN0b3JlIHRoZSBjYWxjdWxhdGVkIHBob25lIG51bWJlclxuXG4gIHNpbmdsZVNlbGVjdEZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChudWxsKTsgLy8gdXNlZCB0byBiZSBhYmxlIHRvIHNldCBkZWZhdWx0IHZhbHVlXG4gIGludGVybmFsVmFsdWU6IElucHV0UGhvbmVOdW1iZXIgPSB7XG4gICAgY291bnRyeUNvZGVJU08yOiBudWxsLFxuICAgIGxvY2FsQ29kZTogbnVsbFxuICB9O1xuICBpbnRlcm5hbERpc2FibGVkOiBib29sZWFuO1xuICBwcm9wYWdhdGVDaGFuZ2U6IGFueTtcbiAgcHJvcGFnYXRlVG91Y2g6IGFueTtcblxuICBzZWxlY3RvckxhYmVsID0gKHg6IENvdW50cnkpID0+XG4gICAgYCske3guY291bnRyeVBob25lQ29kZX0gKCR7eC5jb3VudHJ5Q29kZUlTTzN9KWA7XG4gIHNlbGVjdG9yVmFsdWUgPSAoeDogQ291bnRyeSkgPT4geC5jb3VudHJ5Q29kZUlTTzI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGZvcm06IEZvcm1Db21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2xcbiAgKSB7XG4gICAgaWYgKG5nQ29udHJvbCkge1xuICAgICAgbmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHNvZkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbD8udmFsdWVBY2Nlc3Nvcikge1xuICAgICAgLy8gRXZlcnkgdGltZSBhIGNvbnRyb2wgaXMgcmUtY3JlYXRlZCB0aGUgcHJldmlvdXMgd3JpdGVWYWx1ZSByZWZlcmVuY2UocykgaXMgbm90IGNsZWFuZWQgdXAuXG4gICAgICAvLyBTbywgb3ZlciB0aW1lLCBhIGxvdCBvZiB0aGVzZSByZWZlcmVuY2VzIGNhbiBiZSBidWlsdCB1cC4gVGhpcyBtZW1vcnkgbGVhayBpcyBhIGJ1ZyBpbiBBbmd1bGFyJ3MgaW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAgICAvLyBXZSBoaWRlIHRoYXQgcHJvYmxlbSBieSBhc3NpZ25pbmcgYW4gZW1wdHkgZnVuY3Rpb24gdG8gd3JpdGVWYWx1ZSBldmVyeSB0aW1lIHdlIGRlc3Ryb3kgdGhlIGNvbnRyb2wuXG4gICAgICAvLyBBbiBkZXRhaWxlZCBleHBsYW5hdGlvbiBvZiB0aGUgcHJvYmxlbSBjYW4gYmUgZm91bmQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzI5MzM1XG4gICAgICAvLyBUaGUgYnVnIGlzc3VlIGZvciBpdDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjAwMDdcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSA9ICgpID0+IHt9O1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVUb3VjaCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogSW5wdXRQaG9uZU51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHtcbiAgICAgIGNvdW50cnlDb2RlSVNPMjogdmFsdWU/LmNvdW50cnlDb2RlSVNPMiA/PyBudWxsLFxuICAgICAgbG9jYWxDb2RlOiB2YWx1ZT8ubG9jYWxDb2RlID8/IG51bGxcbiAgICB9O1xuXG4gICAgLy8gc2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBzaW5nbGUgc2VsZWN0IGNvbnRyb2xcbiAgICB0aGlzLnNpbmdsZVNlbGVjdEZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuaW50ZXJuYWxWYWx1ZS5jb3VudHJ5Q29kZUlTTzIpO1xuXG4gICAgdGhpcy5waG9uZU51bWJlciA9IGNhbGN1bGF0ZVBob25lTnVtYmVyKFxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlLmNvdW50cnlDb2RlSVNPMixcbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZS5sb2NhbENvZGVcbiAgICApO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbERpc2FibGVkID0gaXNEaXNhYmxlZDtcblxuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnNpbmdsZVNlbGVjdEZvcm1Db250cm9sLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaW5nbGVTZWxlY3RGb3JtQ29udHJvbC5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZUNvdW50cnlDb2RlKGNvdW50cnlDb2RlSVNPMjogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucGhvbmVOdW1iZXIgPSBjYWxjdWxhdGVQaG9uZU51bWJlcihcbiAgICAgICAgY291bnRyeUNvZGVJU08yLFxuICAgICAgICB0aGlzLmludGVybmFsVmFsdWUubG9jYWxDb2RlXG4gICAgICApO1xuXG4gICAgICB0aGlzLmVtaXRBbmRQcm9wYWdhdGUoY291bnRyeUNvZGVJU08yLCB0aGlzLmludGVybmFsVmFsdWUubG9jYWxDb2RlKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZUxvY2FsQ29kZShsb2NhbENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnBob25lTnVtYmVyID0gY2FsY3VsYXRlUGhvbmVOdW1iZXIoXG4gICAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZS5jb3VudHJ5Q29kZUlTTzIsXG4gICAgICAgIGxvY2FsQ29kZVxuICAgICAgKTtcblxuICAgICAgdGhpcy5lbWl0QW5kUHJvcGFnYXRlKHRoaXMuaW50ZXJuYWxWYWx1ZS5jb3VudHJ5Q29kZUlTTzIsIGxvY2FsQ29kZSk7XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaChwcm9wYWdhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGhvbmVOdW1iZXIpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHRoaXMuZm9ybWF0UGhvbmVOdW1iZXIoXG4gICAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSxcbiAgICAgICAgdGhpcy5waG9uZU51bWJlclxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCAmJiB0aGlzLnByb3BhZ2F0ZVRvdWNoICYmIHByb3BhZ2F0ZSkge1xuICAgICAgdGhpcy5wcm9wYWdhdGVUb3VjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBmb3JtYXQgcGhvbmUgbnVtYmVyLCBpbiBjb250cm9sLCBpbiBhIG1vcmUgcmVhZGFibGUgc3R5bGUgKGV4LiAwNDc1MjAxNDE0ID0+IDA0NzUgMjAgMTQgMTQpXG4gICAqL1xuICBwcml2YXRlIGZvcm1hdFBob25lTnVtYmVyKFxuICAgIHZhbHVlOiBJbnB1dFBob25lTnVtYmVyLFxuICAgIHBob25lTnVtYmVyOiBQaG9uZU51bWJlclxuICApOiBJbnB1dFBob25lTnVtYmVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udmFsdWUsXG4gICAgICBsb2NhbENvZGU6IHRoaXMucGhvbmVVdGlsLmZvcm1hdChwaG9uZU51bWJlciwgUGhvbmVOdW1iZXJGb3JtYXQuTkFUSU9OQUwpXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdEFuZFByb3BhZ2F0ZShjb3VudHJ5Q29kZUlTTzI6IHN0cmluZywgbG9jYWxDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB0bXBDb3VudHJ5Q29kZUlTTzIgPSBjb3VudHJ5Q29kZUlTTzIgPz8gbnVsbDtcbiAgICBjb25zdCB0bXBMb2NhbENvZGUgPSBsb2NhbENvZGUgPz8gbnVsbDtcbiAgICAvLyBudW1iZXIgd2l0aG91dCBjb3VudHJ5IHByZWZpeCBhbmQvb3IgMC1wcmVmaXggKGV4LiArMzIwNDc1MjAxNDE0ID0+IDQ3NTIwMTQxNClcbiAgICAvLyBwaG9uZSBudW1iZXIgaXMgZXF1YWwgdG8gbnVsbCB3aGVuIDEgY2hhcmFjdGVyIGlzIGluc2lkZSB0aGUgY29udHJvbCwgc28gZmlyc3QgZGVmYXVsdCB0byBsb2NhbENvZGUgYmVmb3JlIHdlIGFjY2VwdCBudWxsIGFzIGEgdmFsdWVcbiAgICBjb25zdCBuYXRpb25hbFBob25lTnVtYmVyID1cbiAgICAgIHRoaXMucGhvbmVOdW1iZXI/LmdldE5hdGlvbmFsTnVtYmVyKCk/LnRvU3RyaW5nKCkgPz8gdG1wTG9jYWxDb2RlO1xuXG4gICAgY29uc3QgY2hlY2tGb3JOdWxsVmFsdWVzID1cbiAgICAgIHRtcExvY2FsQ29kZSA9PT0gbnVsbCB8fFxuICAgICAgdG1wTG9jYWxDb2RlID09PSAnJyB8fFxuICAgICAgdG1wQ291bnRyeUNvZGVJU08yID09PSBudWxsO1xuXG4gICAgaWYgKGNoZWNrRm9yTnVsbFZhbHVlcykge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZS5lbWl0KG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlLmVtaXQoe1xuICAgICAgICBjb3VudHJ5Q29kZUlTTzI6IHRtcENvdW50cnlDb2RlSVNPMixcbiAgICAgICAgbG9jYWxDb2RlOiBuYXRpb25hbFBob25lTnVtYmVyXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wYWdhdGVDaGFuZ2UpIHtcbiAgICAgIC8vIG9ubHkgc2V0IGludGVybmFsIHZhbHVlIHdoZW4gaW4gY29udGV4dCBvZiBhIHJlYWN0aXZlIGZvcm0sIG5vdCB3aGVuIHVzZWQgc3RhbmRhbG9uZVxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0ge1xuICAgICAgICBjb3VudHJ5Q29kZUlTTzI6IHRtcENvdW50cnlDb2RlSVNPMixcbiAgICAgICAgbG9jYWxDb2RlOiB0bXBMb2NhbENvZGVcbiAgICAgIH07XG4gICAgICAvLyBlbWl0IG5ldyBmb3JtIHZhbHVlIHdpdGggY29ycmVjdGVkIGxvY2FsQ29kZVxuICAgICAgaWYgKGNoZWNrRm9yTnVsbFZhbHVlcykge1xuICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZShudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHtcbiAgICAgICAgICAuLi50aGlzLmludGVybmFsVmFsdWUsXG4gICAgICAgICAgbG9jYWxDb2RlOiBuYXRpb25hbFBob25lTnVtYmVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19