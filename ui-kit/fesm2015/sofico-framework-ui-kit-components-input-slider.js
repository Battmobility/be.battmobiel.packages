import { __decorate } from 'tslib';
import { EventEmitter, Component, ViewEncapsulation, Optional, Host, ChangeDetectorRef, Input, Output, ViewChild, ElementRef, Pipe, NgModule } from '@angular/core';
import { NgControl, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { isNullOrUndefined, isNumber } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { CommonModule } from '@angular/common';
import { InputCurrencyModule } from '@sofico-framework/ui-kit/components/input-currency';
import { InputNumberModule } from '@sofico-framework/ui-kit/components/input-number';
import { NzSliderModule } from 'ng-zorro-antd/slider';

var InputSliderComponent_1;
let InputSliderComponent = InputSliderComponent_1 = class InputSliderComponent {
    constructor(ngControl, changeDetectorRef, fb) {
        this.ngControl = ngControl;
        this.changeDetectorRef = changeDetectorRef;
        this.fb = fb;
        this.localReversed = false;
        this.localRange = false;
        /**
         *  Visibility of marks
         */
        this.marks = 'both';
        /**
         * The maximum amount of decimals allowed in the input fields
         */
        this.maxFraction = 0;
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        /**
         * EventEmitter that will emit the value after release.
         */
        this.valueAfterRelease = new EventEmitter();
        this.localValueForm = this.fb.group({
            minValue: [],
            maxValue: []
        });
        this.localLabelFormatFn = (value) => `${value}`;
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    /**
     *  Determines if the input will allow two boundary values to be picked.
     */
    set range(isRange) {
        this.localRange = isRange;
        this.updateLocalValueForm();
    }
    /**
     * Determines if the selected part of the slider is to the left
     * or to the right of the selected value
     * false => |=====O-----|   [default]
     * true =>  |-----O=====|
     */
    set reversed(isReversed) {
        this.localReversed = isReversed;
        this.calculateValue(this.calculatedValue);
    }
    /**
     * Determines the value of the control.
     */
    set value(value) {
        this.writeValue(value);
    }
    /**
     * Determines the min value of the slider.
     */
    set minValue(value) {
        this.localMinValue = value;
        this.calculateValue(this.calculatedValue);
        this.nzMarks = this.calculateMarks(this.localMinValue, this.localMaxValue);
    }
    /**
     * Determines the max value of the slider.
     */
    set maxValue(value) {
        this.localMaxValue = value;
        this.calculateValue(this.calculatedValue);
        this.nzMarks = this.calculateMarks(this.localMinValue, this.localMaxValue);
    }
    /**
     * Determines the display format of the values.
     */
    set labelFormatFn(fn) {
        this.localLabelFormatFn = fn;
        this.nzMarks = this.calculateMarks(this.localMinValue, this.localMaxValue);
    }
    ngOnInit() {
        // This logic interprets the values in the localValueForm and uses some
        // logic to get the correct values sent to the onChange method
        this.localValueForm.valueChanges
            .pipe(takeUntilDestroy(this))
            .subscribe(values => {
            let localValue;
            if (this.localRange) {
                localValue = [values.minValue, values.maxValue];
            }
            else {
                localValue = values.maxValue;
            }
            if (this.localRange) {
                if (!(isNullOrUndefined(localValue[0]) ||
                    isNullOrUndefined(localValue[1])) &&
                    localValue[0] > localValue[1]) {
                    localValue.reverse();
                }
                // If the value is null we will take the localMinValue or
                // localMaxValue instead. Same goes for if the value exceeds the
                // minValue or maxValue.
                if (isNullOrUndefined(localValue[0]) ||
                    localValue[0] < this.localMinValue) {
                    localValue[0] = this.localMinValue;
                }
                else if (isNullOrUndefined(localValue[1]) ||
                    localValue[1] > this.localMaxValue) {
                    localValue[1] = this.localMaxValue;
                }
                // If the value didn't change, don't trigger the onChange
                if (localValue[0] === this.internalValue[0] &&
                    localValue[1] === this.internalValue[1]) {
                    return;
                }
            }
            else {
                if (isNullOrUndefined(localValue)) {
                    localValue = this.localReversed
                        ? this.localMinValue
                        : this.localMaxValue;
                }
                else if (localValue < this.localMinValue) {
                    localValue = this.localMinValue;
                }
                else if (localValue > this.localMaxValue) {
                    localValue = this.localMaxValue;
                }
                if (this.localReversed) {
                    localValue = this.calculateReversedValue(localValue);
                }
                // If the value didn't change, don't trigger the onChange
                if (localValue === this.internalValue) {
                    return;
                }
            }
            this.onChange(localValue);
        });
    }
    onLoseFocus() {
        // Syncing the localValueForm with the actual values
        this.updateLocalValueForm(true);
    }
    sofFocus() {
        const handles = this.inputElement.nativeElement.getElementsByClassName('ant-slider-handle');
        const handle = handles[handles.length - 1];
        handle.focus();
        this.changeDetectorRef.detectChanges();
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
        this.internalValue = value !== null && value !== void 0 ? value : null;
        this.calculatedValue = this.internalValue;
        this.calculateValue(this.calculatedValue);
        this.updateLocalValueForm();
    }
    onChange(value, isSlider = false) {
        if (!this.isDisabled) {
            const newInternalValue = value !== null && value !== void 0 ? value : null;
            if (this.localReversed && !isNullOrUndefined(newInternalValue)) {
                this.calculatedValue = this.calculateReversedValue(newInternalValue);
            }
            else {
                this.calculatedValue = newInternalValue;
            }
            if (isSlider) {
                this.updateLocalValueForm();
            }
            // emit value
            this.changeValue.emit(this.calculatedValue);
            // propagate the change
            if (this.propagateChange) {
                this.internalValue = newInternalValue;
                this.propagateChange(this.calculatedValue);
            }
        }
    }
    onTouch(value) {
        this.valueAfterRelease.emit(value);
        if (!this.isDisabled && this.propagateTouch) {
            this.propagateTouch();
        }
    }
    setDisabledState(value) {
        this.isDisabled = value;
    }
    // If the slider needs to be reversed, this will check if all variables needed
    // for the calculation are available. If that is the case, the internal value
    // will be changed to it's correct value.
    calculateValue(value) {
        if (!!value) {
            // it doesn't make sense to reverse a slider if you have a range
            // so this will only support a single value
            if (typeof value === 'number') {
                if (this.localReversed) {
                    if (!!this.localMaxValue && !!this.localMinValue) {
                        this.internalValue = this.calculateReversedValue(value);
                    }
                }
            }
        }
    }
    calculateReversedValue(value) {
        return this.localMaxValue + this.localMinValue - value;
    }
    calculateMarks(min, max) {
        const marks = {};
        if (this.marks === 'neither') {
            return marks;
        }
        if (isNumber(min) && (this.marks === 'both' || this.marks === 'min')) {
            // Using nzMarks together with nzMin the mark values are only displayed
            // when the mark matches with the nzMin value as a string.
            // By applying an empty string as mark. They will never match and the mark value is not shown.
            // This is intended as we display the values our self.
            marks[min] = '';
        }
        if (isNumber(max) && (this.marks === 'both' || this.marks === 'max')) {
            // Using nzMarks together with nzMax the mark values are only displayed
            // when the mark matches with the nzMax value as a string.
            // By applying an empty string as mark. They will never match and the mark value is not shown.
            // This is intended as we display the values our self.
            marks[max] = '';
        }
        return marks;
    }
    updateLocalValueForm(emitEvent = false) {
        var _a, _b;
        if (this.localRange) {
            this.localValueForm.reset({
                minValue: (_a = this.calculatedValue) === null || _a === void 0 ? void 0 : _a[0],
                maxValue: (_b = this.calculatedValue) === null || _b === void 0 ? void 0 : _b[1]
            }, { emitEvent });
        }
        else {
            this.localValueForm.reset({
                maxValue: this.calculatedValue
            }, { emitEvent });
        }
    }
};
InputSliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-slider',
                encapsulation: ViewEncapsulation.None,
                template: `
    <nz-slider
      #inputElement
      [ngModel]="internalValue"
      [nzRange]="localRange"
      [nzMin]="localMinValue"
      [nzMax]="localMaxValue"
      [nzMarks]="nzMarks"
      [nzDisabled]="isDisabled"
      [nzReverse]="localReversed"
      nzTooltipVisible="never"
      (ngModelChange)="onChange($event, true)"
      (nzOnAfterChange)="onTouch($event)"
    ></nz-slider>
    <div class="marks">
      <div>
        <ng-container *ngIf="marks === 'both' || marks === 'min'">
          {{ localMinValue | sofLabelFormatFn: localLabelFormatFn }}
        </ng-container>
      </div>
      <div>
        <ng-container *ngIf="marks === 'both' || marks === 'max'">
          {{ localMaxValue | sofLabelFormatFn: localLabelFormatFn }}
        </ng-container>
      </div>
    </div>
    <div
      class="d-flex mt-2"
      [class.justify-content-between]="localRange"
      [class.justify-content-end]="!localReversed"
    >
      <sof-input-number
        *ngIf="localRange"
        class="slider-input"
        [formControl]="localValueForm.controls.minValue"
        [maxFraction]="maxFraction"
        [isDisabled]="isDisabled"
        (touch)="onLoseFocus()"
      ></sof-input-number>
      <sof-input-number
        class="slider-input"
        [formControl]="localValueForm.controls.maxValue"
        [maxFraction]="maxFraction"
        [isDisabled]="isDisabled"
        (touch)="onLoseFocus()"
      ></sof-input-number>
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputSliderComponent_1 }
                ],
                styles: ["sof-input-slider{display:block}sof-input-slider .current-value-wrapper{display:flex;justify-content:center;align-items:center}sof-input-slider .current-value-wrapper .current-value{padding:.25rem .5rem;border-radius:2px;font-size:.875rem}sof-input-slider .marks{display:flex;justify-content:space-between;font-size:.875rem;color:grey}sof-input-slider nz-slider .ant-slider-with-marks{margin-bottom:10px}sof-input-slider nz-slider .ant-slider-dot,sof-input-slider nz-slider .ant-slider-handle{border-width:1px}sof-input-slider .input-wrapper{width:100%;display:flex;justify-content:space-between;align-items:center}sof-input-slider .slider-input{max-width:40%}sof-input-slider input{text-align:right}"]
            },] }
];
InputSliderComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef },
    { type: FormBuilder }
];
InputSliderComponent.propDecorators = {
    isDisabled: [{ type: Input }],
    range: [{ type: Input }],
    reversed: [{ type: Input }],
    marks: [{ type: Input }],
    maxFraction: [{ type: Input }],
    value: [{ type: Input }],
    minValue: [{ type: Input }],
    maxValue: [{ type: Input }],
    labelFormatFn: [{ type: Input }],
    changeValue: [{ type: Output }],
    valueAfterRelease: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement', { read: ElementRef },] }]
};
InputSliderComponent = InputSliderComponent_1 = __decorate([
    UntilDestroy()
], InputSliderComponent);

class LabelFormatFnPipe {
    transform(value, fn) {
        return fn(value);
    }
}
LabelFormatFnPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofLabelFormatFn' },] }
];

class InputSliderModule {
}
InputSliderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NzSliderModule,
                    ReactiveFormsModule,
                    FormsModule,
                    CommonModule,
                    InputNumberModule,
                    InputCurrencyModule
                ],
                declarations: [InputSliderComponent, LabelFormatFnPipe],
                exports: [InputSliderComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputSliderComponent, InputSliderModule, LabelFormatFnPipe };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-slider.js.map
