(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@sofico-framework/utils')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/number-base', ['exports', '@angular/core', '@sofico-framework/utils'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['number-base'] = {}), global.ng.core, global.utils));
}(this, (function (exports, core, utils) { 'use strict';

    var InputNumberBaseDirective = /** @class */ (function () {
        function InputNumberBaseDirective() {
            /**
             * The placeholder of the input.
             */
            this.placeholder = '';
            /**
             * EventEmitter that will emit the value when changed.
             */
            this.changeValue = new core.EventEmitter();
            /**
             * EventEmitter that will emit when control is touched.
             */
            this.touch = new core.EventEmitter();
            this.internalValue = null;
            // The default decimal places is 2
            this.fractionDigits = 2;
            this.regex = this.buildMaxFractionRegex(this.fractionDigits);
        }
        Object.defineProperty(InputNumberBaseDirective.prototype, "maxFraction", {
            /**
             * Determines if there is a max number of decimals allowed.
             */
            set: function (value) {
                this.fractionDigits = value;
                this.regex = this.buildMaxFractionRegex(value);
            },
            enumerable: false,
            configurable: true
        });
        InputNumberBaseDirective.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        InputNumberBaseDirective.prototype.registerOnTouched = function (fn) {
            this.propagateTouch = fn;
        };
        InputNumberBaseDirective.prototype.writeValue = function (obj) {
            // convert string input to prepare it for number casting
            var inputValueAsDecimal = this.toDecimal(obj);
            // if conversion results in null or undefined
            if (inputValueAsDecimal === null || inputValueAsDecimal === undefined) {
                // block the input value
                this.internalValue = null;
            }
            else {
                // this regex only fails when there are too many fraction digits
                // so this will cut off the unnecessary digits
                if (!inputValueAsDecimal.match(this.regex)) {
                    var maxFractionIndex = inputValueAsDecimal.indexOf('.') + this.fractionDigits;
                    this.internalValue = inputValueAsDecimal.substr(0, maxFractionIndex + 1);
                }
                else {
                    this.internalValue = inputValueAsDecimal;
                }
            }
        };
        InputNumberBaseDirective.prototype.onChange = function (value) {
            if (!this.isDisabled) {
                // update internal value
                var internalValue = this.updateValueByUserInput(value);
                // emit value
                this.changeValue.emit(internalValue);
                // propagate the change
                if (this.propagateChange && internalValue !== undefined) {
                    this.propagateChange(internalValue === null
                        ? null
                        : Number(internalValue.replace(/,/g, '.')));
                }
            }
        };
        InputNumberBaseDirective.prototype.updateValueByUserInput = function (value) {
            if (value !== undefined) {
                // convert string input to prepare it for number casting
                var inputValueAsDecimal = this.toDecimal(value);
                // if conversion results in undefined
                if (inputValueAsDecimal === undefined) {
                    // block the input value
                    this.blockInputValue();
                }
                else {
                    // if processed value contains too many decimals, block the input value
                    if (!(inputValueAsDecimal === null || inputValueAsDecimal === void 0 ? void 0 : inputValueAsDecimal.match(this.regex)) &&
                        !utils.isNullOrUndefined(inputValueAsDecimal)) {
                        this.blockInputValue();
                        return this.internalValue;
                    }
                    // else, assign processed input value to internal value, unless not desired
                    var allowModelToDifferFromView = ['-', '+', '.', ','].indexOf(value) > -1;
                    if (!allowModelToDifferFromView) {
                        this.internalValue = inputValueAsDecimal;
                    }
                    return inputValueAsDecimal;
                }
            }
        };
        InputNumberBaseDirective.prototype.onTouch = function () {
            this.touch.emit();
            if (!this.isDisabled && this.propagateTouch) {
                this.propagateTouch();
            }
        };
        InputNumberBaseDirective.prototype.setDisabledState = function (value) {
            this.isDisabled = value;
        };
        InputNumberBaseDirective.prototype.blockInputValue = function () {
            this.inputElement.nativeElement.value = this.internalValue;
        };
        /**
         * Converts string to undefined, null or the original input value. The purpose is to validate whether or not it has a decimal-like structure,
         * while preparing the return value for easy castability to a number, while preserving the input its decimal locale flexibility. Returns
         * null if it detects emptyness. Returns the input value if it could convert it to a simple decimal-like value, not accepting scientific
         * variables (eg. Euler's number). Thus, string validation only allows a signed floating point value, with comma or point as decimal
         * separator, without thousand separators. Returns undefined in all other cases.
         * @param value String value of which to retrieve a decimal-like conversion
         */
        InputNumberBaseDirective.prototype.toDecimal = function (value) {
            // default it to undefined
            var decimal;
            // set it to null if naturally numerically empty
            if (value === undefined || value === null || value === '') {
                decimal = null;
                // else, make it castable to number, processed using natural (not pure JavaScript) logic
            }
            else {
                var valueToString = value.toString();
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
        };
        InputNumberBaseDirective.prototype.buildMaxFractionRegex = function (value) {
            return new RegExp("^[\\+\\-]*\\d*[\\,\\.]?\\d{0," + value + "}$", 'g');
        };
        return InputNumberBaseDirective;
    }());
    InputNumberBaseDirective.decorators = [
        { type: core.Directive }
    ];
    InputNumberBaseDirective.propDecorators = {
        labelForId: [{ type: core.Input }],
        isDisabled: [{ type: core.Input }],
        placeholder: [{ type: core.Input }],
        invalid: [{ type: core.Input }],
        maxFraction: [{ type: core.Input }],
        changeValue: [{ type: core.Output }],
        touch: [{ type: core.Output }],
        inputElement: [{ type: core.ViewChild, args: ['inputElement',] }]
    };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InputNumberBaseDirective = InputNumberBaseDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-number-base.umd.js.map
