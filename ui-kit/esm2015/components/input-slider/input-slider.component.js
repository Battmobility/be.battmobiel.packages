var InputSliderComponent_1;
import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, NgControl } from '@angular/forms';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { isNullOrUndefined, isNumber } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
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
export { InputSliderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtc2xpZGVyL2lucHV0LXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFFTCxtQkFBbUIsRUFDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0lBMkR4RCxvQkFBb0Isa0NBQXBCLG9CQUFvQjtJQTBHL0IsWUFDNkIsU0FBb0IsRUFDdkMsaUJBQW9DLEVBQ3BDLEVBQWU7UUFGSSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3ZDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQXJHekIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQW1DbkI7O1dBRUc7UUFDTSxVQUFLLEdBQXVDLE1BQU0sQ0FBQztRQUU1RDs7V0FFRztRQUNNLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBbUN6Qjs7V0FFRztRQUNPLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQTZCLENBQUM7UUFFdEU7O1dBRUc7UUFD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RnZDLEtBQUs7b0JBS0wsS0FBSzt1QkFXTCxLQUFLO29CQVFMLEtBQUs7MEJBS0wsS0FBSztvQkFLTCxLQUFLO3VCQU9MLEtBQUs7dUJBU0wsS0FBSzs0QkFTTCxLQUFLOzBCQVFMLE1BQU07Z0NBS04sTUFBTTsyQkFFTixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7QUFqR3BDLG9CQUFvQjtJQXpEaEMsWUFBWSxFQUFFO0dBeURGLG9CQUFvQixDQTJVaEM7U0EzVVksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUJ1aWxkZXIsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIE9uU29mRm9jdXMsXG4gIFNPRl9GT0NVU19DT01QT05FTlRcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2RpcmVjdGl2ZXMvZm9jdXMnO1xuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQsIGlzTnVtYmVyIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuaW1wb3J0IHsgTnpNYXJrcyB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2xpZGVyJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3ksIFVudGlsRGVzdHJveSB9IGZyb20gJ25neC1yZWFjdGl2ZXRvb2xraXQnO1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1pbnB1dC1zbGlkZXInLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1zbGlkZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotc2xpZGVyXG4gICAgICAjaW5wdXRFbGVtZW50XG4gICAgICBbbmdNb2RlbF09XCJpbnRlcm5hbFZhbHVlXCJcbiAgICAgIFtuelJhbmdlXT1cImxvY2FsUmFuZ2VcIlxuICAgICAgW256TWluXT1cImxvY2FsTWluVmFsdWVcIlxuICAgICAgW256TWF4XT1cImxvY2FsTWF4VmFsdWVcIlxuICAgICAgW256TWFya3NdPVwibnpNYXJrc1wiXG4gICAgICBbbnpEaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgIFtuelJldmVyc2VdPVwibG9jYWxSZXZlcnNlZFwiXG4gICAgICBuelRvb2x0aXBWaXNpYmxlPVwibmV2ZXJcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAobnpPbkFmdGVyQ2hhbmdlKT1cIm9uVG91Y2goJGV2ZW50KVwiXG4gICAgPjwvbnotc2xpZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJtYXJrc1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1hcmtzID09PSAnYm90aCcgfHwgbWFya3MgPT09ICdtaW4nXCI+XG4gICAgICAgICAge3sgbG9jYWxNaW5WYWx1ZSB8IHNvZkxhYmVsRm9ybWF0Rm46IGxvY2FsTGFiZWxGb3JtYXRGbiB9fVxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1hcmtzID09PSAnYm90aCcgfHwgbWFya3MgPT09ICdtYXgnXCI+XG4gICAgICAgICAge3sgbG9jYWxNYXhWYWx1ZSB8IHNvZkxhYmVsRm9ybWF0Rm46IGxvY2FsTGFiZWxGb3JtYXRGbiB9fVxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZC1mbGV4IG10LTJcIlxuICAgICAgW2NsYXNzLmp1c3RpZnktY29udGVudC1iZXR3ZWVuXT1cImxvY2FsUmFuZ2VcIlxuICAgICAgW2NsYXNzLmp1c3RpZnktY29udGVudC1lbmRdPVwiIWxvY2FsUmV2ZXJzZWRcIlxuICAgID5cbiAgICAgIDxzb2YtaW5wdXQtbnVtYmVyXG4gICAgICAgICpuZ0lmPVwibG9jYWxSYW5nZVwiXG4gICAgICAgIGNsYXNzPVwic2xpZGVyLWlucHV0XCJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImxvY2FsVmFsdWVGb3JtLmNvbnRyb2xzLm1pblZhbHVlXCJcbiAgICAgICAgW21heEZyYWN0aW9uXT1cIm1heEZyYWN0aW9uXCJcbiAgICAgICAgW2lzRGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICAgICh0b3VjaCk9XCJvbkxvc2VGb2N1cygpXCJcbiAgICAgID48L3NvZi1pbnB1dC1udW1iZXI+XG4gICAgICA8c29mLWlucHV0LW51bWJlclxuICAgICAgICBjbGFzcz1cInNsaWRlci1pbnB1dFwiXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJsb2NhbFZhbHVlRm9ybS5jb250cm9scy5tYXhWYWx1ZVwiXG4gICAgICAgIFttYXhGcmFjdGlvbl09XCJtYXhGcmFjdGlvblwiXG4gICAgICAgIFtpc0Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgICAgICAodG91Y2gpPVwib25Mb3NlRm9jdXMoKVwiXG4gICAgICA+PC9zb2YtaW5wdXQtbnVtYmVyPlxuICAgIDwvZGl2PlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBJbnB1dFNsaWRlckNvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRTbGlkZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBPblNvZkZvY3VzLCBPbkluaXQge1xuICBuek1hcmtzOiBOek1hcmtzO1xuXG4gIHByb3BhZ2F0ZUNoYW5nZTogYW55O1xuICBwcm9wYWdhdGVUb3VjaDogYW55O1xuICBsb2NhbE1pblZhbHVlOiBudW1iZXI7XG4gIGxvY2FsTWF4VmFsdWU6IG51bWJlcjtcbiAgbG9jYWxSZXZlcnNlZCA9IGZhbHNlO1xuICBsb2NhbFJhbmdlID0gZmFsc2U7XG5cbiAgLy8gVGhpcyBpcyB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciB0aGF0IGdldHMgdXNlZCBpbiB0aGUgbnpTbGlkZXIuIFRoaXMgdmFsdWVcbiAgLy8gaXMgYWxzbyBzZXQgdG8gYW55IGFzIHRoZSB0ZW1wbGF0ZSBjYW4ndCBjb3BlIHdpdGggbnVtYmVyfFtudW1iZXIsIG51bWJlcl1cbiAgaW50ZXJuYWxWYWx1ZTogYW55O1xuXG4gIC8vIEluIGNhc2Ugb2YgcmV2ZXJzaW5nIHRoZSBzbGlkZXIsIHdlJ2xsIG5lZWQgdG8gbWFuaXB1bGF0ZSB0aGUgcmVhbCBpbnRlcm5hbFxuICAvLyB2YWx1ZSB0byBrZWVwIHRoZSBtaW4gdmFsdWUgb24gdGhlIGxlZnQuIFRoYXQgbWFuaXB1bGF0ZWQgdmFsdWUgaXMgc3RvcmVkXG4gIC8vIGhlcmUuIFRoaXMgdmFsdWUgaXMgYWxzbyB0aGUgdmFsdWUgdGhhdCBnZXRzIHVzZWQgaW4gdGhlIEZvcm1Db250cm9sLlxuICBjYWxjdWxhdGVkVmFsdWU6IGFueTtcblxuICAvKipcbiAgICogIERldGVybWluZXMgaWYgdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogIERldGVybWluZXMgaWYgdGhlIGlucHV0IHdpbGwgYWxsb3cgdHdvIGJvdW5kYXJ5IHZhbHVlcyB0byBiZSBwaWNrZWQuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgcmFuZ2UoaXNSYW5nZTogYm9vbGVhbikge1xuICAgIHRoaXMubG9jYWxSYW5nZSA9IGlzUmFuZ2U7XG4gICAgdGhpcy51cGRhdGVMb2NhbFZhbHVlRm9ybSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhlIHNlbGVjdGVkIHBhcnQgb2YgdGhlIHNsaWRlciBpcyB0byB0aGUgbGVmdFxuICAgKiBvciB0byB0aGUgcmlnaHQgb2YgdGhlIHNlbGVjdGVkIHZhbHVlXG4gICAqIGZhbHNlID0+IHw9PT09PU8tLS0tLXwgICBbZGVmYXVsdF1cbiAgICogdHJ1ZSA9PiAgfC0tLS0tTz09PT09fFxuICAgKi9cbiAgQElucHV0KCkgc2V0IHJldmVyc2VkKGlzUmV2ZXJzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmxvY2FsUmV2ZXJzZWQgPSBpc1JldmVyc2VkO1xuICAgIHRoaXMuY2FsY3VsYXRlVmFsdWUodGhpcy5jYWxjdWxhdGVkVmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqICBWaXNpYmlsaXR5IG9mIG1hcmtzXG4gICAqL1xuICBASW5wdXQoKSBtYXJrczogJ25laXRoZXInIHwgJ21pbicgfCAnbWF4JyB8ICdib3RoJyA9ICdib3RoJztcblxuICAvKipcbiAgICogVGhlIG1heGltdW0gYW1vdW50IG9mIGRlY2ltYWxzIGFsbG93ZWQgaW4gdGhlIGlucHV0IGZpZWxkc1xuICAgKi9cbiAgQElucHV0KCkgbWF4RnJhY3Rpb24gPSAwO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgW251bWJlciwgbnVtYmVyXSkge1xuICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgbWluIHZhbHVlIG9mIHRoZSBzbGlkZXIuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgbWluVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMubG9jYWxNaW5WYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2FsY3VsYXRlVmFsdWUodGhpcy5jYWxjdWxhdGVkVmFsdWUpO1xuICAgIHRoaXMubnpNYXJrcyA9IHRoaXMuY2FsY3VsYXRlTWFya3ModGhpcy5sb2NhbE1pblZhbHVlLCB0aGlzLmxvY2FsTWF4VmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIG1heCB2YWx1ZSBvZiB0aGUgc2xpZGVyLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IG1heFZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmxvY2FsTWF4VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNhbGN1bGF0ZVZhbHVlKHRoaXMuY2FsY3VsYXRlZFZhbHVlKTtcbiAgICB0aGlzLm56TWFya3MgPSB0aGlzLmNhbGN1bGF0ZU1hcmtzKHRoaXMubG9jYWxNaW5WYWx1ZSwgdGhpcy5sb2NhbE1heFZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBkaXNwbGF5IGZvcm1hdCBvZiB0aGUgdmFsdWVzLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IGxhYmVsRm9ybWF0Rm4oZm46ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvY2FsTGFiZWxGb3JtYXRGbiA9IGZuO1xuICAgIHRoaXMubnpNYXJrcyA9IHRoaXMuY2FsY3VsYXRlTWFya3ModGhpcy5sb2NhbE1pblZhbHVlLCB0aGlzLmxvY2FsTWF4VmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50RW1pdHRlciB0aGF0IHdpbGwgZW1pdCB0aGUgdmFsdWUgd2hlbiBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZVZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBbbnVtYmVyLCBudW1iZXJdPigpO1xuXG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgdGhhdCB3aWxsIGVtaXQgdGhlIHZhbHVlIGFmdGVyIHJlbGVhc2UuXG4gICAqL1xuICBAT3V0cHV0KCkgdmFsdWVBZnRlclJlbGVhc2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IFtudW1iZXIsIG51bWJlcl0+KCk7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcblxuICBsb2NhbFZhbHVlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIG1pblZhbHVlOiBbXSxcbiAgICBtYXhWYWx1ZTogW11cbiAgfSk7XG5cbiAgbG9jYWxMYWJlbEZvcm1hdEZuOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nID0gKHZhbHVlOiBudW1iZXIpID0+IGAke3ZhbHVlfWA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXJcbiAgKSB7XG4gICAgaWYgKG5nQ29udHJvbCkge1xuICAgICAgbmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFRoaXMgbG9naWMgaW50ZXJwcmV0cyB0aGUgdmFsdWVzIGluIHRoZSBsb2NhbFZhbHVlRm9ybSBhbmQgdXNlcyBzb21lXG4gICAgLy8gbG9naWMgdG8gZ2V0IHRoZSBjb3JyZWN0IHZhbHVlcyBzZW50IHRvIHRoZSBvbkNoYW5nZSBtZXRob2RcbiAgICB0aGlzLmxvY2FsVmFsdWVGb3JtLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSlcbiAgICAgIC5zdWJzY3JpYmUodmFsdWVzID0+IHtcbiAgICAgICAgbGV0IGxvY2FsVmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMubG9jYWxSYW5nZSkge1xuICAgICAgICAgIGxvY2FsVmFsdWUgPSBbdmFsdWVzLm1pblZhbHVlLCB2YWx1ZXMubWF4VmFsdWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2FsVmFsdWUgPSB2YWx1ZXMubWF4VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sb2NhbFJhbmdlKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgaXNOdWxsT3JVbmRlZmluZWQobG9jYWxWYWx1ZVswXSkgfHxcbiAgICAgICAgICAgICAgaXNOdWxsT3JVbmRlZmluZWQobG9jYWxWYWx1ZVsxXSlcbiAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgIGxvY2FsVmFsdWVbMF0gPiBsb2NhbFZhbHVlWzFdXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBsb2NhbFZhbHVlLnJldmVyc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIG51bGwgd2Ugd2lsbCB0YWtlIHRoZSBsb2NhbE1pblZhbHVlIG9yXG4gICAgICAgICAgLy8gbG9jYWxNYXhWYWx1ZSBpbnN0ZWFkLiBTYW1lIGdvZXMgZm9yIGlmIHRoZSB2YWx1ZSBleGNlZWRzIHRoZVxuICAgICAgICAgIC8vIG1pblZhbHVlIG9yIG1heFZhbHVlLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGlzTnVsbE9yVW5kZWZpbmVkKGxvY2FsVmFsdWVbMF0pIHx8XG4gICAgICAgICAgICBsb2NhbFZhbHVlWzBdIDwgdGhpcy5sb2NhbE1pblZhbHVlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBsb2NhbFZhbHVlWzBdID0gdGhpcy5sb2NhbE1pblZhbHVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBpc051bGxPclVuZGVmaW5lZChsb2NhbFZhbHVlWzFdKSB8fFxuICAgICAgICAgICAgbG9jYWxWYWx1ZVsxXSA+IHRoaXMubG9jYWxNYXhWYWx1ZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbG9jYWxWYWx1ZVsxXSA9IHRoaXMubG9jYWxNYXhWYWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgZGlkbid0IGNoYW5nZSwgZG9uJ3QgdHJpZ2dlciB0aGUgb25DaGFuZ2VcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBsb2NhbFZhbHVlWzBdID09PSB0aGlzLmludGVybmFsVmFsdWVbMF0gJiZcbiAgICAgICAgICAgIGxvY2FsVmFsdWVbMV0gPT09IHRoaXMuaW50ZXJuYWxWYWx1ZVsxXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQobG9jYWxWYWx1ZSkpIHtcbiAgICAgICAgICAgIGxvY2FsVmFsdWUgPSB0aGlzLmxvY2FsUmV2ZXJzZWRcbiAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsTWluVmFsdWVcbiAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsTWF4VmFsdWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChsb2NhbFZhbHVlIDwgdGhpcy5sb2NhbE1pblZhbHVlKSB7XG4gICAgICAgICAgICBsb2NhbFZhbHVlID0gdGhpcy5sb2NhbE1pblZhbHVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAobG9jYWxWYWx1ZSA+IHRoaXMubG9jYWxNYXhWYWx1ZSkge1xuICAgICAgICAgICAgbG9jYWxWYWx1ZSA9IHRoaXMubG9jYWxNYXhWYWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5sb2NhbFJldmVyc2VkKSB7XG4gICAgICAgICAgICBsb2NhbFZhbHVlID0gdGhpcy5jYWxjdWxhdGVSZXZlcnNlZFZhbHVlKGxvY2FsVmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBkaWRuJ3QgY2hhbmdlLCBkb24ndCB0cmlnZ2VyIHRoZSBvbkNoYW5nZVxuICAgICAgICAgIGlmIChsb2NhbFZhbHVlID09PSB0aGlzLmludGVybmFsVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKGxvY2FsVmFsdWUpO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkxvc2VGb2N1cygpOiB2b2lkIHtcbiAgICAvLyBTeW5jaW5nIHRoZSBsb2NhbFZhbHVlRm9ybSB3aXRoIHRoZSBhY3R1YWwgdmFsdWVzXG4gICAgdGhpcy51cGRhdGVMb2NhbFZhbHVlRm9ybSh0cnVlKTtcbiAgfVxuXG4gIHNvZkZvY3VzKCk6IHZvaWQge1xuICAgIGNvbnN0IGhhbmRsZXMgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAnYW50LXNsaWRlci1oYW5kbGUnXG4gICAgKTtcbiAgICBjb25zdCBoYW5kbGUgPSBoYW5kbGVzW2hhbmRsZXMubGVuZ3RoIC0gMV07XG4gICAgaGFuZGxlLmZvY3VzKCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2w/LnZhbHVlQWNjZXNzb3IpIHtcbiAgICAgIC8vIEV2ZXJ5IHRpbWUgYSBjb250cm9sIGlzIHJlLWNyZWF0ZWQgdGhlIHByZXZpb3VzIHdyaXRlVmFsdWUgcmVmZXJlbmNlKHMpIGlzIG5vdCBjbGVhbmVkIHVwLlxuICAgICAgLy8gU28sIG92ZXIgdGltZSwgYSBsb3Qgb2YgdGhlc2UgcmVmZXJlbmNlcyBjYW4gYmUgYnVpbHQgdXAuIFRoaXMgbWVtb3J5IGxlYWsgaXMgYSBidWcgaW4gQW5ndWxhcidzIGltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgICAgLy8gV2UgaGlkZSB0aGF0IHByb2JsZW0gYnkgYXNzaWduaW5nIGFuIGVtcHR5IGZ1bmN0aW9uIHRvIHdyaXRlVmFsdWUgZXZlcnkgdGltZSB3ZSBkZXN0cm95IHRoZSBjb250cm9sLlxuICAgICAgLy8gQW4gZGV0YWlsZWQgZXhwbGFuYXRpb24gb2YgdGhlIHByb2JsZW0gY2FuIGJlIGZvdW5kIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvcHVsbC8yOTMzNVxuICAgICAgLy8gVGhlIGJ1ZyBpc3N1ZSBmb3IgaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwMDA3XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUgPSAoKSA9PiB7fTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlVG91Y2ggPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlciB8IFtudW1iZXIsIG51bWJlcl0pOiB2b2lkIHtcbiAgICB0aGlzLmludGVybmFsVmFsdWUgPSB2YWx1ZSA/PyBudWxsO1xuICAgIHRoaXMuY2FsY3VsYXRlZFZhbHVlID0gdGhpcy5pbnRlcm5hbFZhbHVlO1xuICAgIHRoaXMuY2FsY3VsYXRlVmFsdWUodGhpcy5jYWxjdWxhdGVkVmFsdWUpO1xuICAgIHRoaXMudXBkYXRlTG9jYWxWYWx1ZUZvcm0oKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKHZhbHVlOiBudW1iZXIgfCBbbnVtYmVyLCBudW1iZXJdLCBpc1NsaWRlcjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IG5ld0ludGVybmFsVmFsdWUgPSB2YWx1ZSA/PyBudWxsO1xuXG4gICAgICBpZiAodGhpcy5sb2NhbFJldmVyc2VkICYmICFpc051bGxPclVuZGVmaW5lZChuZXdJbnRlcm5hbFZhbHVlKSkge1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZWRWYWx1ZSA9IHRoaXMuY2FsY3VsYXRlUmV2ZXJzZWRWYWx1ZShcbiAgICAgICAgICBuZXdJbnRlcm5hbFZhbHVlIGFzIG51bWJlclxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVkVmFsdWUgPSBuZXdJbnRlcm5hbFZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTbGlkZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGVMb2NhbFZhbHVlRm9ybSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHZhbHVlXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlLmVtaXQodGhpcy5jYWxjdWxhdGVkVmFsdWUpO1xuXG4gICAgICAvLyBwcm9wYWdhdGUgdGhlIGNoYW5nZVxuICAgICAgaWYgKHRoaXMucHJvcGFnYXRlQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IG5ld0ludGVybmFsVmFsdWU7XG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuY2FsY3VsYXRlZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblRvdWNoKHZhbHVlOiBudW1iZXIgfCBbbnVtYmVyLCBudW1iZXJdKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZUFmdGVyUmVsZWFzZS5lbWl0KHZhbHVlKTtcblxuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmIHRoaXMucHJvcGFnYXRlVG91Y2gpIHtcbiAgICAgIHRoaXMucHJvcGFnYXRlVG91Y2goKTtcbiAgICB9XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gdmFsdWU7XG4gIH1cblxuICAvLyBJZiB0aGUgc2xpZGVyIG5lZWRzIHRvIGJlIHJldmVyc2VkLCB0aGlzIHdpbGwgY2hlY2sgaWYgYWxsIHZhcmlhYmxlcyBuZWVkZWRcbiAgLy8gZm9yIHRoZSBjYWxjdWxhdGlvbiBhcmUgYXZhaWxhYmxlLiBJZiB0aGF0IGlzIHRoZSBjYXNlLCB0aGUgaW50ZXJuYWwgdmFsdWVcbiAgLy8gd2lsbCBiZSBjaGFuZ2VkIHRvIGl0J3MgY29ycmVjdCB2YWx1ZS5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVWYWx1ZSh2YWx1ZTogbnVtYmVyIHwgW251bWJlciwgbnVtYmVyXSk6IHZvaWQge1xuICAgIGlmICghIXZhbHVlKSB7XG4gICAgICAvLyBpdCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gcmV2ZXJzZSBhIHNsaWRlciBpZiB5b3UgaGF2ZSBhIHJhbmdlXG4gICAgICAvLyBzbyB0aGlzIHdpbGwgb25seSBzdXBwb3J0IGEgc2luZ2xlIHZhbHVlXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAodGhpcy5sb2NhbFJldmVyc2VkKSB7XG4gICAgICAgICAgaWYgKCEhdGhpcy5sb2NhbE1heFZhbHVlICYmICEhdGhpcy5sb2NhbE1pblZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB0aGlzLmNhbGN1bGF0ZVJldmVyc2VkVmFsdWUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlUmV2ZXJzZWRWYWx1ZSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbE1heFZhbHVlICsgdGhpcy5sb2NhbE1pblZhbHVlIC0gKHZhbHVlIGFzIG51bWJlcik7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZU1hcmtzKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IHsgW2tleTogbnVtYmVyXTogc3RyaW5nIH0ge1xuICAgIGNvbnN0IG1hcmtzID0ge307XG5cbiAgICBpZiAodGhpcy5tYXJrcyA9PT0gJ25laXRoZXInKSB7XG4gICAgICByZXR1cm4gbWFya3M7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKG1pbikgJiYgKHRoaXMubWFya3MgPT09ICdib3RoJyB8fCB0aGlzLm1hcmtzID09PSAnbWluJykpIHtcbiAgICAgIC8vIFVzaW5nIG56TWFya3MgdG9nZXRoZXIgd2l0aCBuek1pbiB0aGUgbWFyayB2YWx1ZXMgYXJlIG9ubHkgZGlzcGxheWVkXG4gICAgICAvLyB3aGVuIHRoZSBtYXJrIG1hdGNoZXMgd2l0aCB0aGUgbnpNaW4gdmFsdWUgYXMgYSBzdHJpbmcuXG4gICAgICAvLyBCeSBhcHBseWluZyBhbiBlbXB0eSBzdHJpbmcgYXMgbWFyay4gVGhleSB3aWxsIG5ldmVyIG1hdGNoIGFuZCB0aGUgbWFyayB2YWx1ZSBpcyBub3Qgc2hvd24uXG4gICAgICAvLyBUaGlzIGlzIGludGVuZGVkIGFzIHdlIGRpc3BsYXkgdGhlIHZhbHVlcyBvdXIgc2VsZi5cbiAgICAgIG1hcmtzW21pbl0gPSAnJztcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIobWF4KSAmJiAodGhpcy5tYXJrcyA9PT0gJ2JvdGgnIHx8IHRoaXMubWFya3MgPT09ICdtYXgnKSkge1xuICAgICAgLy8gVXNpbmcgbnpNYXJrcyB0b2dldGhlciB3aXRoIG56TWF4IHRoZSBtYXJrIHZhbHVlcyBhcmUgb25seSBkaXNwbGF5ZWRcbiAgICAgIC8vIHdoZW4gdGhlIG1hcmsgbWF0Y2hlcyB3aXRoIHRoZSBuek1heCB2YWx1ZSBhcyBhIHN0cmluZy5cbiAgICAgIC8vIEJ5IGFwcGx5aW5nIGFuIGVtcHR5IHN0cmluZyBhcyBtYXJrLiBUaGV5IHdpbGwgbmV2ZXIgbWF0Y2ggYW5kIHRoZSBtYXJrIHZhbHVlIGlzIG5vdCBzaG93bi5cbiAgICAgIC8vIFRoaXMgaXMgaW50ZW5kZWQgYXMgd2UgZGlzcGxheSB0aGUgdmFsdWVzIG91ciBzZWxmLlxuICAgICAgbWFya3NbbWF4XSA9ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBtYXJrcztcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTG9jYWxWYWx1ZUZvcm0oZW1pdEV2ZW50OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb2NhbFJhbmdlKSB7XG4gICAgICB0aGlzLmxvY2FsVmFsdWVGb3JtLnJlc2V0KFxuICAgICAgICB7XG4gICAgICAgICAgbWluVmFsdWU6IHRoaXMuY2FsY3VsYXRlZFZhbHVlPy5bMF0sXG4gICAgICAgICAgbWF4VmFsdWU6IHRoaXMuY2FsY3VsYXRlZFZhbHVlPy5bMV1cbiAgICAgICAgfSxcbiAgICAgICAgeyBlbWl0RXZlbnQgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2NhbFZhbHVlRm9ybS5yZXNldChcbiAgICAgICAge1xuICAgICAgICAgIG1heFZhbHVlOiB0aGlzLmNhbGN1bGF0ZWRWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICB7IGVtaXRFdmVudCB9XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19