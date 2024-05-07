import { EventEmitter, Directive, Input, Output, ViewChild } from '@angular/core';
import { isNullOrUndefined } from '@sofico-framework/utils';

class InputNumberBaseDirective {
    constructor() {
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
        this.internalValue = null;
        // The default decimal places is 2
        this.fractionDigits = 2;
        this.regex = this.buildMaxFractionRegex(this.fractionDigits);
    }
    /**
     * Determines if there is a max number of decimals allowed.
     */
    set maxFraction(value) {
        this.fractionDigits = value;
        this.regex = this.buildMaxFractionRegex(value);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouch = fn;
    }
    writeValue(obj) {
        // convert string input to prepare it for number casting
        const inputValueAsDecimal = this.toDecimal(obj);
        // if conversion results in null or undefined
        if (inputValueAsDecimal === null || inputValueAsDecimal === undefined) {
            // block the input value
            this.internalValue = null;
        }
        else {
            // this regex only fails when there are too many fraction digits
            // so this will cut off the unnecessary digits
            if (!inputValueAsDecimal.match(this.regex)) {
                const maxFractionIndex = inputValueAsDecimal.indexOf('.') + this.fractionDigits;
                this.internalValue = inputValueAsDecimal.substr(0, maxFractionIndex + 1);
            }
            else {
                this.internalValue = inputValueAsDecimal;
            }
        }
    }
    onChange(value) {
        if (!this.isDisabled) {
            // update internal value
            const internalValue = this.updateValueByUserInput(value);
            // emit value
            this.changeValue.emit(internalValue);
            // propagate the change
            if (this.propagateChange && internalValue !== undefined) {
                this.propagateChange(internalValue === null
                    ? null
                    : Number(internalValue.replace(/,/g, '.')));
            }
        }
    }
    updateValueByUserInput(value) {
        if (value !== undefined) {
            // convert string input to prepare it for number casting
            const inputValueAsDecimal = this.toDecimal(value);
            // if conversion results in undefined
            if (inputValueAsDecimal === undefined) {
                // block the input value
                this.blockInputValue();
            }
            else {
                // if processed value contains too many decimals, block the input value
                if (!(inputValueAsDecimal === null || inputValueAsDecimal === void 0 ? void 0 : inputValueAsDecimal.match(this.regex)) &&
                    !isNullOrUndefined(inputValueAsDecimal)) {
                    this.blockInputValue();
                    return this.internalValue;
                }
                // else, assign processed input value to internal value, unless not desired
                const allowModelToDifferFromView = ['-', '+', '.', ','].indexOf(value) > -1;
                if (!allowModelToDifferFromView) {
                    this.internalValue = inputValueAsDecimal;
                }
                return inputValueAsDecimal;
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
        this.isDisabled = value;
    }
    blockInputValue() {
        this.inputElement.nativeElement.value = this.internalValue;
    }
    /**
     * Converts string to undefined, null or the original input value. The purpose is to validate whether or not it has a decimal-like structure,
     * while preparing the return value for easy castability to a number, while preserving the input its decimal locale flexibility. Returns
     * null if it detects emptyness. Returns the input value if it could convert it to a simple decimal-like value, not accepting scientific
     * variables (eg. Euler's number). Thus, string validation only allows a signed floating point value, with comma or point as decimal
     * separator, without thousand separators. Returns undefined in all other cases.
     * @param value String value of which to retrieve a decimal-like conversion
     */
    toDecimal(value) {
        // default it to undefined
        let decimal;
        // set it to null if naturally numerically empty
        if (value === undefined || value === null || value === '') {
            decimal = null;
            // else, make it castable to number, processed using natural (not pure JavaScript) logic
        }
        else {
            const valueToString = value.toString();
            if (valueToString === '-') {
                decimal = '-0';
            }
            else if (['+', '.', ','].indexOf(valueToString) > -1) {
                decimal = '0';
            }
            else if (!Number.isNaN(Number(valueToString.replace(/,/g, '.'))) &&
                (valueToString.match(/^[\+\-]?[0-9.,]+$/) || []).length) {
                decimal = valueToString;
            }
        }
        return decimal;
    }
    buildMaxFractionRegex(value) {
        return new RegExp(`^[\\+\\-]*\\d*[\\,\\.]?\\d{0,${value}}$`, 'g');
    }
}
InputNumberBaseDirective.decorators = [
    { type: Directive }
];
InputNumberBaseDirective.propDecorators = {
    labelForId: [{ type: Input }],
    isDisabled: [{ type: Input }],
    placeholder: [{ type: Input }],
    invalid: [{ type: Input }],
    maxFraction: [{ type: Input }],
    changeValue: [{ type: Output }],
    touch: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }]
};

/**
 * Generated bundle index. Do not edit.
 */

export { InputNumberBaseDirective };
//# sourceMappingURL=sofico-framework-ui-kit-components-number-base.js.map
