import { Component, EventEmitter, Host, Input, Optional, Output, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { isNullOrUndefined } from '@sofico-framework/utils';
import { chipsRegexValidator } from './validators/chips-regex.validator';
export class InputChipsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9pbnB1dC1jaGlwcy9pbnB1dC1jaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLFNBQVMsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUEwQ3pFLE1BQU0sT0FBTyxtQkFBbUI7SUF5RjlCLFlBQ3FCLElBQW1CLEVBQ1gsU0FBb0I7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNYLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFyRmpEOztXQUVHO1FBQ00sZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUE4RDFCOztXQUVHO1FBQ08sZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQ3JEOztXQUVHO1FBQ08sVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFPMUMsc0JBQWlCLEdBQVcsSUFBSSxDQUFDO1FBUS9CLElBQUksU0FBUyxFQUFFO1lBQ2IsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBOUVEOztPQUVHO0lBQ0gsSUFBYSxlQUFlLENBQUMsS0FBYTs7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Riw0RUFBNEU7UUFDNUUsZ0JBQUksSUFBSSxDQUFDLFNBQVMsMENBQUUsT0FBTywwQ0FBRSxRQUFRLENBQUMsT0FBTyxHQUFHO1lBQzlDLFlBQUEsSUFBSSxDQUFDLFNBQVMsMENBQUUsT0FBTywwQ0FBRSxTQUFTLHVDQUM3QixJQUFJLENBQUMsU0FBUywwQ0FBRSxNQUFNLEtBQ3pCLEtBQUssRUFBRSxJQUFJLEtBQ1Y7WUFDSCxZQUFBLElBQUksQ0FBQyxTQUFTLDBDQUFFLE9BQU8sMENBQUUsc0JBQXNCLEdBQUc7U0FDbkQ7SUFDSCxDQUFDOzs7WUFoVEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQ1Q7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRTtpQkFDbkU7O2FBRUY7OztZQS9DUSxhQUFhLHVCQTBJakIsUUFBUTtZQTNJa0IsU0FBUyx1QkE0SW5DLFFBQVEsWUFBSSxJQUFJOzs7eUJBdEZsQixLQUFLOzBCQUlMLEtBQUs7eUJBSUwsS0FBSztzQkFJTCxLQUFLOzhCQUlMLEtBQUs7d0JBc0JMLEtBQUs7eUJBUUwsS0FBSzswQkF1QkwsTUFBTTtvQkFJTixNQUFNO3dCQUVOLFNBQVMsU0FBQyxXQUFXO29CQXFCckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCB7XG4gIE9uU29mRm9jdXMsXG4gIFNPRl9GT0NVU19DT01QT05FTlRcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2RpcmVjdGl2ZXMvZm9jdXMnO1xuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91dGlscyc7XG5pbXBvcnQgeyBjaGlwc1JlZ2V4VmFsaWRhdG9yIH0gZnJvbSAnLi92YWxpZGF0b3JzL2NoaXBzLXJlZ2V4LnZhbGlkYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1pbnB1dC1jaGlwcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcFwiXG4gICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJcbiAgICAgICAgaW52YWxpZCB8fFxuICAgICAgICAobmdDb250cm9sPy5pbnZhbGlkICYmIChuZ0NvbnRyb2w/LnRvdWNoZWQgfHwgZm9ybT8uc3VibWl0dGVkKSlcbiAgICAgIFwiXG4gICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgKGZvY3VzKT1cImNoaXBJbnB1dC5mb2N1cygpXCJcbiAgICA+XG4gICAgICA8c29mLWVkaXRhYmxlLWNoaXBcbiAgICAgICAgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAqbmdGb3I9XCJsZXQgY2hpcCBvZiBpbnRlcm5hbFZhbHVlOyBsZXQgaW5kZXggPSBpbmRleFwiXG4gICAgICAgIFtsYWJlbF09XCJjaGlwXCJcbiAgICAgICAgW3ZhbGlkYXRpb25SZWdleF09XCJpbnRlcm5hbFZhbGlkYXRpb25SZWdleFwiXG4gICAgICAgIChlZGl0Q2hpcCk9XCJvbkNoaXBFZGl0KCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgKHJlbW92ZUNoaXApPVwib25SZW1vdmVDaGlwKGluZGV4KVwiXG4gICAgICAgIChpbnZhbGlkQ2hpcCk9XCJvbkludmFsaWRDaGlwKCRldmVudClcIlxuICAgICAgPjwvc29mLWVkaXRhYmxlLWNoaXA+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICAjY2hpcElucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3M9XCJjaGlwLWlucHV0IGQtYmxvY2sgZmxleC1ncm93LTFcIlxuICAgICAgICBbdmFsdWVdPVwiaW50ZXJuYWxDaGlwVmFsdWVcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgKGlucHV0KT1cIm9uQ2hpcFZhbHVlQ2hhbmdlKCRldmVudC50YXJnZXQ/LnZhbHVlKVwiXG4gICAgICAgIChrZXlkb3duLmVudGVyKT1cInN1Ym1pdENoaXAoJGV2ZW50KVwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBJbnB1dENoaXBzQ29tcG9uZW50IH1cbiAgXSxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtY2hpcHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENoaXBzQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSwgT25Tb2ZGb2N1cyB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGlucHV0IHRvIGNvbm5lY3QgdG8gYSBsYWJlbCB0YWcuXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbEZvcklkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcGxhY2Vob2xkZXIgb2YgdGhlIGlucHV0LlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcbiAgLyoqXG4gICAqICBEZXRlcm1pbmVzIGlmIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGluIGEgdmFsaWQgc3RhdGUuXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkOiBib29sZWFuO1xuICAvKipcbiAgICogVGhpcyByZWdleCBpcyB1c2VkIGZvciB2YWxpZGF0aW9uIHdoZW4gY3JlYXRpbmcgbmV3IHRhZ3Mgb3IgZWRpdGluZyBvbmUuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgdmFsaWRhdGlvblJlZ2V4KHJlZ2V4OiBSZWdFeHApIHtcbiAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHJlZ2V4KSkge1xuICAgICAgdGhpcy5pbnRlcm5hbFZhbGlkYXRpb25SZWdleCA9IHJlZ2V4O1xuXG4gICAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJuYWxWYWxpZGF0b3JzKSB7XG4gICAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbD8uc2V0VmFsaWRhdG9ycyhbXG4gICAgICAgICAgICBjaGlwc1JlZ2V4VmFsaWRhdG9yKHRoaXMuaW50ZXJuYWxWYWxpZGF0aW9uUmVnZXgpLFxuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFZhbGlkYXRvcnNcbiAgICAgICAgICBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sPy5zZXRWYWxpZGF0b3JzKFxuICAgICAgICAgICAgY2hpcHNSZWdleFZhbGlkYXRvcih0aGlzLmludGVybmFsVmFsaWRhdGlvblJlZ2V4KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbD8udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogVGhpcyBjaGFyYWN0ZXIgd2lsbCBiZSB1c2VkIGFzIHNlcGFyYXRvciB3aGVuIGVudGVyaW5nIGEgbGlzdCBvZiB2YWx1ZXNcbiAgICovXG4gIEBJbnB1dCgpIHNlcGFyYXRvcjogc3RyaW5nO1xuICAvKipcbiAgICogSU1QT1JUQU5UOiB2YWxpZGF0b3JzIGZvciB0aGUgY29udHJvbCBsaW5rZWQgdG8gdGhpcyBmaWVsZCBuZWVkIHRvIGJlXG4gICAqIGluIHRoaXMgbGlzdCB0byB3b3JrXG4gICAqXG4gICAqIFRoaXMgbGlzdCBpcyB1c2VkIHRvZ2V0aGVyIHdpdGggYSBwb3NzaWJsZSBpbnRlcm5hbCB2YWxpZGF0b3IgdG8gYnVpbGRcbiAgICogdGhlIGZ1bGwgbGlzdCBvZiB2YWxpZGF0b3JzIHRoYXQgZ2V0IHNldCBvbiB0aGUgY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHNldCB2YWxpZGF0b3JzKHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuIHwgVmFsaWRhdG9yRm5bXSB8IG51bGwpIHtcbiAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHZhbGlkYXRvcnMpKSB7XG4gICAgICB0aGlzLmludGVybmFsVmFsaWRhdG9ycyA9IEFycmF5LmlzQXJyYXkodmFsaWRhdG9ycylcbiAgICAgICAgPyB2YWxpZGF0b3JzXG4gICAgICAgIDogW3ZhbGlkYXRvcnNdO1xuXG4gICAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJuYWxWYWxpZGF0aW9uUmVnZXgpIHtcbiAgICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sPy5zZXRWYWxpZGF0b3JzKFtcbiAgICAgICAgICAgIGNoaXBzUmVnZXhWYWxpZGF0b3IodGhpcy5pbnRlcm5hbFZhbGlkYXRpb25SZWdleCksXG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsVmFsaWRhdG9yc1xuICAgICAgICAgIF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2w/LnNldFZhbGlkYXRvcnModGhpcy5pbnRlcm5hbFZhbGlkYXRvcnMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2w/LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHRoZSB2YWx1ZSB3aGVuIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHdoZW4gY29udHJvbCBpcyB0b3VjaGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIHRvdWNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnY2hpcElucHV0JykgY2hpcElucHV0OiBFbGVtZW50UmVmO1xuXG4gIGludGVybmFsVmFsdWU6IHN0cmluZ1tdO1xuICBwcm9wYWdhdGVDaGFuZ2U6IGFueTtcbiAgcHJvcGFnYXRlVG91Y2g6IGFueTtcbiAgaW50ZXJuYWxDaGlwVmFsdWU6IHN0cmluZyA9IG51bGw7XG4gIGludGVybmFsVmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXTtcbiAgaW50ZXJuYWxWYWxpZGF0aW9uUmVnZXg6IFJlZ0V4cDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZm9ybTogRm9ybUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbFxuICApIHtcbiAgICBpZiAobmdDb250cm9sKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBzb2ZGb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmNoaXBJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2w/LnZhbHVlQWNjZXNzb3IpIHtcbiAgICAgIC8vIEV2ZXJ5IHRpbWUgYSBjb250cm9sIGlzIHJlLWNyZWF0ZWQgdGhlIHByZXZpb3VzIHdyaXRlVmFsdWUgcmVmZXJlbmNlKHMpIGlzIG5vdCBjbGVhbmVkIHVwLlxuICAgICAgLy8gU28sIG92ZXIgdGltZSwgYSBsb3Qgb2YgdGhlc2UgcmVmZXJlbmNlcyBjYW4gYmUgYnVpbHQgdXAuIFRoaXMgbWVtb3J5IGxlYWsgaXMgYSBidWcgaW4gQW5ndWxhcidzIGltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgICAgLy8gV2UgaGlkZSB0aGF0IHByb2JsZW0gYnkgYXNzaWduaW5nIGFuIGVtcHR5IGZ1bmN0aW9uIHRvIHdyaXRlVmFsdWUgZXZlcnkgdGltZSB3ZSBkZXN0cm95IHRoZSBjb250cm9sLlxuICAgICAgLy8gQW4gZGV0YWlsZWQgZXhwbGFuYXRpb24gb2YgdGhlIHByb2JsZW0gY2FuIGJlIGZvdW5kIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvcHVsbC8yOTMzNVxuICAgICAgLy8gVGhlIGJ1ZyBpc3N1ZSBmb3IgaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwMDA3XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUgPSAoKSA9PiB7fTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlVG91Y2ggPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUgPz8gW107XG4gIH1cblxuICBvbkNoYW5nZSh2YWx1ZTogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgY29uc3QgbmV3SW50ZXJuYWxWYWx1ZSA9IHZhbHVlID8/IFtdO1xuXG4gICAgICAvLyBwcm9wYWdhdGUgdGhlIGNoYW5nZVxuICAgICAgaWYgKHRoaXMucHJvcGFnYXRlQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IG5ld0ludGVybmFsVmFsdWU7XG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKG5ld0ludGVybmFsVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHZhbHVlXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlLmVtaXQobmV3SW50ZXJuYWxWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc3VibWl0Q2hpcChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9wYWdhdGVUb3VjaCkge1xuICAgICAgdGhpcy5wcm9wYWdhdGVUb3VjaCgpO1xuICAgIH1cblxuICAgIGlmICghIXRoaXMuaW50ZXJuYWxDaGlwVmFsdWUpIHtcbiAgICAgIGV2ZW50Py5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVybmFsQ2hpcFZhbHVlVHJpbW1lZCA9IHRoaXMuaW50ZXJuYWxDaGlwVmFsdWU/LnRyaW0oKTtcblxuICAgIGlmICghIWludGVybmFsQ2hpcFZhbHVlVHJpbW1lZCkge1xuICAgICAgaWYgKFxuICAgICAgICAhaXNOdWxsT3JVbmRlZmluZWQodGhpcy5zZXBhcmF0b3IpICYmXG4gICAgICAgIGludGVybmFsQ2hpcFZhbHVlVHJpbW1lZC5pbmRleE9mKHRoaXMuc2VwYXJhdG9yKSA+PSAwXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgaXRlbUxpc3QgPSBpbnRlcm5hbENoaXBWYWx1ZVRyaW1tZWRcbiAgICAgICAgICAuc3BsaXQodGhpcy5zZXBhcmF0b3IpXG4gICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSk7XG4gICAgICAgIGlmIChpdGVtTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLnN1Ym1pdENoaXBWYWx1ZUlmVmFsaWQoaXRlbUxpc3RbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IFsuLi50aGlzLmludGVybmFsVmFsdWUsIC4uLml0ZW1MaXN0XTtcblxuICAgICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5pbnRlcm5hbFZhbHVlKTtcbiAgICAgICAgICB0aGlzLmludGVybmFsQ2hpcFZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3VibWl0Q2hpcFZhbHVlSWZWYWxpZChpbnRlcm5hbENoaXBWYWx1ZVRyaW1tZWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmludGVybmFsQ2hpcFZhbHVlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgb25DaGlwVmFsdWVDaGFuZ2UoY2hpcFZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmludGVybmFsQ2hpcFZhbHVlID0gY2hpcFZhbHVlO1xuICB9XG5cbiAgb25DaGlwRWRpdChjaGlwVmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IFtcbiAgICAgIC4uLnRoaXMuaW50ZXJuYWxWYWx1ZS5zbGljZSgwLCBpbmRleCksXG4gICAgICBjaGlwVmFsdWUsXG4gICAgICAuLi50aGlzLmludGVybmFsVmFsdWUuc2xpY2UoaW5kZXggKyAxKVxuICAgIF07XG5cbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuaW50ZXJuYWxWYWx1ZSk7XG4gIH1cblxuICBvblJlbW92ZUNoaXAoY2hpcEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmludGVybmFsVmFsdWUgPSB0aGlzLmludGVybmFsVmFsdWUuZmlsdGVyKFxuICAgICAgKHZhbHVlLCBpbmRleCkgPT4gaW5kZXggIT09IGNoaXBJbmRleFxuICAgICk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuaW50ZXJuYWxWYWx1ZSk7XG4gIH1cblxuICBvbkludmFsaWRDaGlwKGludmFsaWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgdGhpcy5hZGRSZWdleEVycm9yKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlUmVnZXhFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9wYWdhdGVUb3VjaCkge1xuICAgICAgdGhpcy5wcm9wYWdhdGVUb3VjaCgpO1xuICAgIH1cblxuICAgIHRoaXMuaW50ZXJuYWxDaGlwVmFsdWUgPSAnJztcbiAgICB0aGlzLnJlbW92ZVJlZ2V4RXJyb3IoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNWYWxpZCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaW50ZXJuYWxWYWxpZGF0aW9uUmVnZXgpIHtcbiAgICAgIGlmICghIXZhbHVlICYmICF2YWx1ZS5tYXRjaCh0aGlzLmludGVybmFsVmFsaWRhdGlvblJlZ2V4KSkge1xuICAgICAgICB0aGlzLmFkZFJlZ2V4RXJyb3IoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVSZWdleEVycm9yKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN1Ym1pdENoaXBWYWx1ZUlmVmFsaWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVmFsaWQodmFsdWUpKSB7XG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSBbLi4udGhpcy5pbnRlcm5hbFZhbHVlLCB2YWx1ZV07XG5cbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5pbnRlcm5hbFZhbHVlKTtcbiAgICAgIHRoaXMuaW50ZXJuYWxDaGlwVmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcm5hbENoaXBWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkUmVnZXhFcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLnNldEVycm9ycyh7XG4gICAgICAuLi50aGlzLm5nQ29udHJvbC5lcnJvcnMsXG4gICAgICByZWdleDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVSZWdleEVycm9yKCk6IHZvaWQge1xuICAgIC8vICd1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5JyB0cmlnZ2VycyB2YWx1ZUNoYW5nZXMgb2YgY29udHJvbCB3aGljaCBpc24ndCBkZXNpcmVkLlxuICAgIC8vIEJ5IGNoZWNraW5nIGlmIHRoZSBlcnJvciBleGlzdHMgd2UgY2FuIHJlZHVjZSB0aGUgbnVtYmVyIG9mIHZhbHVlQ2hhbmdlcy5cbiAgICBpZiAodGhpcy5uZ0NvbnRyb2w/LmNvbnRyb2w/Lmhhc0Vycm9yKCdyZWdleCcpKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbD8uY29udHJvbD8uc2V0RXJyb3JzKHtcbiAgICAgICAgLi4udGhpcy5uZ0NvbnRyb2w/LmVycm9ycyxcbiAgICAgICAgcmVnZXg6IG51bGxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5uZ0NvbnRyb2w/LmNvbnRyb2w/LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==