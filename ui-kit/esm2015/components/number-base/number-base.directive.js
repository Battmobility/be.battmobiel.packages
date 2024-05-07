import { Directive, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { isNullOrUndefined } from '@sofico-framework/utils';
export class InputNumberBaseDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWJhc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9udW1iZXItYmFzZS9udW1iZXItYmFzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHNUQsTUFBTSxPQUFPLHdCQUF3QjtJQURyQztRQVlFOztXQUVHO1FBQ00sZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFlMUI7O1dBRUc7UUFDTyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFbkQ7O1dBRUc7UUFDTyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUsxQyxrQkFBYSxHQUFXLElBQUksQ0FBQztRQUk3QixrQ0FBa0M7UUFDbEMsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFFWCxVQUFLLEdBQVcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQWtJMUUsQ0FBQztJQTlKQzs7T0FFRztJQUNILElBQWEsV0FBVyxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQXdCRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFD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LEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7OztZQW5MRixTQUFTOzs7eUJBS1AsS0FBSzt5QkFLTCxLQUFLOzBCQUtMLEtBQUs7c0JBS0wsS0FBSzswQkFLTCxLQUFLOzBCQVFMLE1BQU07b0JBS04sTUFBTTsyQkFFTixTQUFTLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBJbnB1dE51bWJlckJhc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGlucHV0IHRvIGNvbm5lY3QgdG8gYSBsYWJlbCB0YWcuXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbEZvcklkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBEZXRlcm1pbmVzIGlmIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBwbGFjZWhvbGRlciBvZiB0aGUgaW5wdXQuXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGluIGEgdmFsaWQgc3RhdGUuXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZXJlIGlzIGEgbWF4IG51bWJlciBvZiBkZWNpbWFscyBhbGxvd2VkLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IG1heEZyYWN0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmZyYWN0aW9uRGlnaXRzID0gdmFsdWU7XG4gICAgdGhpcy5yZWdleCA9IHRoaXMuYnVpbGRNYXhGcmFjdGlvblJlZ2V4KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgdGhhdCB3aWxsIGVtaXQgdGhlIHZhbHVlIHdoZW4gY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2VWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgdGhhdCB3aWxsIGVtaXQgd2hlbiBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgdG91Y2ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKVxuICBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgaW50ZXJuYWxWYWx1ZTogc3RyaW5nID0gbnVsbDtcbiAgcHJvcGFnYXRlQ2hhbmdlOiBhbnk7XG4gIHByb3BhZ2F0ZVRvdWNoOiBhbnk7XG5cbiAgLy8gVGhlIGRlZmF1bHQgZGVjaW1hbCBwbGFjZXMgaXMgMlxuICBmcmFjdGlvbkRpZ2l0cyA9IDI7XG5cbiAgcHJpdmF0ZSByZWdleDogUmVnRXhwID0gdGhpcy5idWlsZE1heEZyYWN0aW9uUmVnZXgodGhpcy5mcmFjdGlvbkRpZ2l0cyk7XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgLy8gY29udmVydCBzdHJpbmcgaW5wdXQgdG8gcHJlcGFyZSBpdCBmb3IgbnVtYmVyIGNhc3RpbmdcbiAgICBjb25zdCBpbnB1dFZhbHVlQXNEZWNpbWFsID0gdGhpcy50b0RlY2ltYWwob2JqKTtcbiAgICAvLyBpZiBjb252ZXJzaW9uIHJlc3VsdHMgaW4gbnVsbCBvciB1bmRlZmluZWRcbiAgICBpZiAoaW5wdXRWYWx1ZUFzRGVjaW1hbCA9PT0gbnVsbCB8fCBpbnB1dFZhbHVlQXNEZWNpbWFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGJsb2NrIHRoZSBpbnB1dCB2YWx1ZVxuICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcyByZWdleCBvbmx5IGZhaWxzIHdoZW4gdGhlcmUgYXJlIHRvbyBtYW55IGZyYWN0aW9uIGRpZ2l0c1xuICAgICAgLy8gc28gdGhpcyB3aWxsIGN1dCBvZmYgdGhlIHVubmVjZXNzYXJ5IGRpZ2l0c1xuICAgICAgaWYgKCFpbnB1dFZhbHVlQXNEZWNpbWFsLm1hdGNoKHRoaXMucmVnZXgpKSB7XG4gICAgICAgIGNvbnN0IG1heEZyYWN0aW9uSW5kZXggPVxuICAgICAgICAgIGlucHV0VmFsdWVBc0RlY2ltYWwuaW5kZXhPZignLicpICsgdGhpcy5mcmFjdGlvbkRpZ2l0cztcbiAgICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gaW5wdXRWYWx1ZUFzRGVjaW1hbC5zdWJzdHIoXG4gICAgICAgICAgMCxcbiAgICAgICAgICBtYXhGcmFjdGlvbkluZGV4ICsgMVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gaW5wdXRWYWx1ZUFzRGVjaW1hbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIC8vIHVwZGF0ZSBpbnRlcm5hbCB2YWx1ZVxuICAgICAgY29uc3QgaW50ZXJuYWxWYWx1ZSA9IHRoaXMudXBkYXRlVmFsdWVCeVVzZXJJbnB1dCh2YWx1ZSk7XG5cbiAgICAgIC8vIGVtaXQgdmFsdWVcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUuZW1pdChpbnRlcm5hbFZhbHVlKTtcblxuICAgICAgLy8gcHJvcGFnYXRlIHRoZSBjaGFuZ2VcbiAgICAgIGlmICh0aGlzLnByb3BhZ2F0ZUNoYW5nZSAmJiBpbnRlcm5hbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UoXG4gICAgICAgICAgaW50ZXJuYWxWYWx1ZSA9PT0gbnVsbFxuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IE51bWJlcihpbnRlcm5hbFZhbHVlLnJlcGxhY2UoLywvZywgJy4nKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWx1ZUJ5VXNlcklucHV0KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjb252ZXJ0IHN0cmluZyBpbnB1dCB0byBwcmVwYXJlIGl0IGZvciBudW1iZXIgY2FzdGluZ1xuICAgICAgY29uc3QgaW5wdXRWYWx1ZUFzRGVjaW1hbCA9IHRoaXMudG9EZWNpbWFsKHZhbHVlKTtcbiAgICAgIC8vIGlmIGNvbnZlcnNpb24gcmVzdWx0cyBpbiB1bmRlZmluZWRcbiAgICAgIGlmIChpbnB1dFZhbHVlQXNEZWNpbWFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gYmxvY2sgdGhlIGlucHV0IHZhbHVlXG4gICAgICAgIHRoaXMuYmxvY2tJbnB1dFZhbHVlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBwcm9jZXNzZWQgdmFsdWUgY29udGFpbnMgdG9vIG1hbnkgZGVjaW1hbHMsIGJsb2NrIHRoZSBpbnB1dCB2YWx1ZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlucHV0VmFsdWVBc0RlY2ltYWw/Lm1hdGNoKHRoaXMucmVnZXgpICYmXG4gICAgICAgICAgIWlzTnVsbE9yVW5kZWZpbmVkKGlucHV0VmFsdWVBc0RlY2ltYWwpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuYmxvY2tJbnB1dFZhbHVlKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlbHNlLCBhc3NpZ24gcHJvY2Vzc2VkIGlucHV0IHZhbHVlIHRvIGludGVybmFsIHZhbHVlLCB1bmxlc3Mgbm90IGRlc2lyZWRcbiAgICAgICAgY29uc3QgYWxsb3dNb2RlbFRvRGlmZmVyRnJvbVZpZXcgPVxuICAgICAgICAgIFsnLScsICcrJywgJy4nLCAnLCddLmluZGV4T2YodmFsdWUpID4gLTE7XG4gICAgICAgIGlmICghYWxsb3dNb2RlbFRvRGlmZmVyRnJvbVZpZXcpIHtcbiAgICAgICAgICB0aGlzLmludGVybmFsVmFsdWUgPSBpbnB1dFZhbHVlQXNEZWNpbWFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlQXNEZWNpbWFsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2goKTogdm9pZCB7XG4gICAgdGhpcy50b3VjaC5lbWl0KCk7XG5cbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCAmJiB0aGlzLnByb3BhZ2F0ZVRvdWNoKSB7XG4gICAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IHZhbHVlO1xuICB9XG5cbiAgYmxvY2tJbnB1dFZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgc3RyaW5nIHRvIHVuZGVmaW5lZCwgbnVsbCBvciB0aGUgb3JpZ2luYWwgaW5wdXQgdmFsdWUuIFRoZSBwdXJwb3NlIGlzIHRvIHZhbGlkYXRlIHdoZXRoZXIgb3Igbm90IGl0IGhhcyBhIGRlY2ltYWwtbGlrZSBzdHJ1Y3R1cmUsXG4gICAqIHdoaWxlIHByZXBhcmluZyB0aGUgcmV0dXJuIHZhbHVlIGZvciBlYXN5IGNhc3RhYmlsaXR5IHRvIGEgbnVtYmVyLCB3aGlsZSBwcmVzZXJ2aW5nIHRoZSBpbnB1dCBpdHMgZGVjaW1hbCBsb2NhbGUgZmxleGliaWxpdHkuIFJldHVybnNcbiAgICogbnVsbCBpZiBpdCBkZXRlY3RzIGVtcHR5bmVzcy4gUmV0dXJucyB0aGUgaW5wdXQgdmFsdWUgaWYgaXQgY291bGQgY29udmVydCBpdCB0byBhIHNpbXBsZSBkZWNpbWFsLWxpa2UgdmFsdWUsIG5vdCBhY2NlcHRpbmcgc2NpZW50aWZpY1xuICAgKiB2YXJpYWJsZXMgKGVnLiBFdWxlcidzIG51bWJlcikuIFRodXMsIHN0cmluZyB2YWxpZGF0aW9uIG9ubHkgYWxsb3dzIGEgc2lnbmVkIGZsb2F0aW5nIHBvaW50IHZhbHVlLCB3aXRoIGNvbW1hIG9yIHBvaW50IGFzIGRlY2ltYWxcbiAgICogc2VwYXJhdG9yLCB3aXRob3V0IHRob3VzYW5kIHNlcGFyYXRvcnMuIFJldHVybnMgdW5kZWZpbmVkIGluIGFsbCBvdGhlciBjYXNlcy5cbiAgICogQHBhcmFtIHZhbHVlIFN0cmluZyB2YWx1ZSBvZiB3aGljaCB0byByZXRyaWV2ZSBhIGRlY2ltYWwtbGlrZSBjb252ZXJzaW9uXG4gICAqL1xuICB0b0RlY2ltYWwodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gZGVmYXVsdCBpdCB0byB1bmRlZmluZWRcbiAgICBsZXQgZGVjaW1hbDogc3RyaW5nO1xuICAgIC8vIHNldCBpdCB0byBudWxsIGlmIG5hdHVyYWxseSBudW1lcmljYWxseSBlbXB0eVxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgZGVjaW1hbCA9IG51bGw7XG4gICAgICAvLyBlbHNlLCBtYWtlIGl0IGNhc3RhYmxlIHRvIG51bWJlciwgcHJvY2Vzc2VkIHVzaW5nIG5hdHVyYWwgKG5vdCBwdXJlIEphdmFTY3JpcHQpIGxvZ2ljXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbHVlVG9TdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgaWYgKHZhbHVlVG9TdHJpbmcgPT09ICctJykge1xuICAgICAgICBkZWNpbWFsID0gJy0wJztcbiAgICAgIH0gZWxzZSBpZiAoWycrJywgJy4nLCAnLCddLmluZGV4T2YodmFsdWVUb1N0cmluZykgPiAtMSkge1xuICAgICAgICBkZWNpbWFsID0gJzAnO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIU51bWJlci5pc05hTihOdW1iZXIodmFsdWVUb1N0cmluZy5yZXBsYWNlKC8sL2csICcuJykpKSAmJlxuICAgICAgICAodmFsdWVUb1N0cmluZy5tYXRjaCgvXltcXCtcXC1dP1swLTkuLF0rJC8pIHx8IFtdKS5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICBkZWNpbWFsID0gdmFsdWVUb1N0cmluZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlY2ltYWw7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkTWF4RnJhY3Rpb25SZWdleCh2YWx1ZTogbnVtYmVyKTogUmVnRXhwIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXltcXFxcK1xcXFwtXSpcXFxcZCpbXFxcXCxcXFxcLl0/XFxcXGR7MCwke3ZhbHVlfX0kYCwgJ2cnKTtcbiAgfVxufVxuIl19