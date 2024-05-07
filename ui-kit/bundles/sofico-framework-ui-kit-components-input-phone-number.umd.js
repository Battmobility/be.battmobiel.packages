(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@sofico-framework/ui-kit/components/form'), require('@sofico-framework/ui-kit/directives/focus'), require('google-libphonenumber'), require('@angular/common'), require('@sofico-framework/ui-kit/components/input-single-select')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/input-phone-number', ['exports', '@angular/core', '@angular/forms', '@sofico-framework/ui-kit/components/form', '@sofico-framework/ui-kit/directives/focus', 'google-libphonenumber', '@angular/common', '@sofico-framework/ui-kit/components/input-single-select'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['input-phone-number'] = {}), global.ng.core, global.ng.forms, global['sofico-framework']['ui-kit'].components.form, global['sofico-framework']['ui-kit'].directives.focus, global.googleLibphonenumber, global.ng.common, global['sofico-framework']['ui-kit'].components['input-single-select']));
}(this, (function (exports, core, forms, form, focus, googleLibphonenumber, common, inputSingleSelect) { 'use strict';

    var phoneUtil$1 = googleLibphonenumber.PhoneNumberUtil.getInstance();
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

    var InputPhoneNumberComponent = /** @class */ (function () {
        function InputPhoneNumberComponent(form, ngControl) {
            this.form = form;
            this.ngControl = ngControl;
            /**
             * The placeholder of the input.
             */
            this.placeholder = '';
            /**
             * EventEmitter that will emit the value when changed.
             */
            this.changeValue = new core.EventEmitter();
            this.phoneUtil = googleLibphonenumber.PhoneNumberUtil.getInstance();
            this.phoneNumber = null; // store the calculated phone number
            this.singleSelectFormControl = new forms.FormControl(null); // used to be able to set default value
            this.internalValue = {
                countryCodeISO2: null,
                localCode: null
            };
            this.selectorLabel = function (x) { return "+" + x.countryPhoneCode + " (" + x.countryCodeISO3 + ")"; };
            this.selectorValue = function (x) { return x.countryCodeISO2; };
            if (ngControl) {
                ngControl.valueAccessor = this;
            }
        }
        Object.defineProperty(InputPhoneNumberComponent.prototype, "isDisabled", {
            /**
             *  Determines if the input is disabled.
             */
            set: function (value) {
                this.setDisabledState(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputPhoneNumberComponent.prototype, "value", {
            /**
             * Determines the value of the control.
             */
            set: function (value) {
                this.writeValue(value);
            },
            enumerable: false,
            configurable: true
        });
        InputPhoneNumberComponent.prototype.sofFocus = function () {
            this.inputElement.nativeElement.focus();
        };
        InputPhoneNumberComponent.prototype.ngOnDestroy = function () {
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
        InputPhoneNumberComponent.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        InputPhoneNumberComponent.prototype.registerOnTouched = function (fn) {
            this.propagateTouch = fn;
        };
        InputPhoneNumberComponent.prototype.writeValue = function (value) {
            var _a, _b;
            this.internalValue = {
                countryCodeISO2: (_a = value === null || value === void 0 ? void 0 : value.countryCodeISO2) !== null && _a !== void 0 ? _a : null,
                localCode: (_b = value === null || value === void 0 ? void 0 : value.localCode) !== null && _b !== void 0 ? _b : null
            };
            // set the default value of the single select control
            this.singleSelectFormControl.setValue(this.internalValue.countryCodeISO2);
            this.phoneNumber = calculatePhoneNumber(this.internalValue.countryCodeISO2, this.internalValue.localCode);
        };
        InputPhoneNumberComponent.prototype.setDisabledState = function (isDisabled) {
            this.internalDisabled = isDisabled;
            if (isDisabled) {
                this.singleSelectFormControl.disable();
            }
            else {
                this.singleSelectFormControl.enable();
            }
        };
        InputPhoneNumberComponent.prototype.onChangeCountryCode = function (countryCodeISO2) {
            if (!this.isDisabled) {
                this.phoneNumber = calculatePhoneNumber(countryCodeISO2, this.internalValue.localCode);
                this.emitAndPropagate(countryCodeISO2, this.internalValue.localCode);
            }
        };
        InputPhoneNumberComponent.prototype.onChangeLocalCode = function (localCode) {
            if (!this.isDisabled) {
                this.phoneNumber = calculatePhoneNumber(this.internalValue.countryCodeISO2, localCode);
                this.emitAndPropagate(this.internalValue.countryCodeISO2, localCode);
            }
        };
        InputPhoneNumberComponent.prototype.onTouch = function (propagate) {
            if (propagate === void 0) { propagate = true; }
            if (this.phoneNumber) {
                this.internalValue = this.formatPhoneNumber(this.internalValue, this.phoneNumber);
            }
            if (!this.isDisabled && this.propagateTouch && propagate) {
                this.propagateTouch();
            }
        };
        /**
         * format phone number, in control, in a more readable style (ex. 0475201414 => 0475 20 14 14)
         */
        InputPhoneNumberComponent.prototype.formatPhoneNumber = function (value, phoneNumber) {
            return Object.assign(Object.assign({}, value), { localCode: this.phoneUtil.format(phoneNumber, googleLibphonenumber.PhoneNumberFormat.NATIONAL) });
        };
        InputPhoneNumberComponent.prototype.emitAndPropagate = function (countryCodeISO2, localCode) {
            var _a, _b, _c;
            var tmpCountryCodeISO2 = countryCodeISO2 !== null && countryCodeISO2 !== void 0 ? countryCodeISO2 : null;
            var tmpLocalCode = localCode !== null && localCode !== void 0 ? localCode : null;
            // number without country prefix and/or 0-prefix (ex. +320475201414 => 475201414)
            // phone number is equal to null when 1 character is inside the control, so first default to localCode before we accept null as a value
            var nationalPhoneNumber = (_c = (_b = (_a = this.phoneNumber) === null || _a === void 0 ? void 0 : _a.getNationalNumber()) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : tmpLocalCode;
            var checkForNullValues = tmpLocalCode === null ||
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
        };
        return InputPhoneNumberComponent;
    }());
    InputPhoneNumberComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sof-input-phone-number',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <sof-input-single-select\n          [tc]=\"tc\"\n          [formControl]=\"singleSelectFormControl\"\n          [labelForId]=\"labelForId\"\n          [options]=\"countries\"\n          [selectorLabel]=\"selectorLabel\"\n          [selectorValue]=\"selectorValue\"\n          [clearable]=\"false\"\n          [isDisabled]=\"internalDisabled\"\n          [invalid]=\"\n            invalid ||\n            (ngControl?.invalid && (ngControl?.touched || form?.submitted))\n          \"\n          (touch)=\"onTouch(false)\"\n          (changeValue)=\"onChangeCountryCode($event)\"\n        ></sof-input-single-select>\n      </div>\n      <input\n        #inputElement\n        type=\"text\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          invalid ||\n          (ngControl?.invalid && (ngControl?.touched || form?.submitted))\n        \"\n        [attr.disabled]=\"internalDisabled\"\n        [placeholder]=\"placeholder\"\n        [value]=\"internalValue.localCode\"\n        (blur)=\"onTouch()\"\n        (input)=\"onChangeLocalCode($event.target?.value)\"\n      />\n    </div>\n  ",
                    providers: [
                        { provide: focus.SOF_FOCUS_COMPONENT, useExisting: InputPhoneNumberComponent }
                    ],
                    styles: ["sof-input-phone-number sof-input-single-select{min-width:125px}sof-input-phone-number .input-group-prepend:focus-within+.form-control,sof-input-phone-number .input-group-prepend:hover+.form-control{z-index:-1}"]
                },] }
    ];
    InputPhoneNumberComponent.ctorParameters = function () { return [
        { type: form.FormComponent, decorators: [{ type: core.Optional }] },
        { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Host }] }
    ]; };
    InputPhoneNumberComponent.propDecorators = {
        tc: [{ type: core.Input }],
        labelForId: [{ type: core.Input }],
        isDisabled: [{ type: core.Input }],
        placeholder: [{ type: core.Input }],
        countries: [{ type: core.Input }],
        invalid: [{ type: core.Input }],
        value: [{ type: core.Input }],
        changeValue: [{ type: core.Output }],
        inputElement: [{ type: core.ViewChild, args: ['inputElement',] }]
    };

    var InputPhoneNumberModule = /** @class */ (function () {
        function InputPhoneNumberModule() {
        }
        return InputPhoneNumberModule;
    }());
    InputPhoneNumberModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, inputSingleSelect.InputSingleSelectModule, forms.ReactiveFormsModule],
                    declarations: [InputPhoneNumberComponent],
                    exports: [InputPhoneNumberComponent]
                },] }
    ];

    var phoneUtil = googleLibphonenumber.PhoneNumberUtil.getInstance();
    function phoneNumberValidator(control) {
        var _a, _b, _c, _d;
        if (!((_a = control === null || control === void 0 ? void 0 : control.value) === null || _a === void 0 ? void 0 : _a.localCode)) {
            return null;
        }
        var phoneNumber = calculatePhoneNumber((_b = control === null || control === void 0 ? void 0 : control.value) === null || _b === void 0 ? void 0 : _b.countryCodeISO2, (_c = control === null || control === void 0 ? void 0 : control.value) === null || _c === void 0 ? void 0 : _c.localCode);
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

    exports.InputPhoneNumberComponent = InputPhoneNumberComponent;
    exports.InputPhoneNumberModule = InputPhoneNumberModule;
    exports.calculatePhoneNumber = calculatePhoneNumber;
    exports.phoneNumberValidator = phoneNumberValidator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-input-phone-number.umd.js.map
