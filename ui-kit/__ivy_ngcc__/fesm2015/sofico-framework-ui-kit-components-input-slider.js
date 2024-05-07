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

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
import * as ɵngcc2 from 'ng-zorro-antd/slider';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@sofico-framework/ui-kit/components/input-number';

const _c0 = ["inputElement"];
function InputSliderComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "sofLabelFormatFn");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(2, 1, ctx_r1.localMinValue, ctx_r1.localLabelFormatFn), " ");
} }
function InputSliderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "sofLabelFormatFn");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(2, 1, ctx_r2.localMaxValue, ctx_r2.localLabelFormatFn), " ");
} }
function InputSliderComponent_sof_input_number_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "sof-input-number", 6);
    ɵngcc0.ɵɵlistener("touch", function InputSliderComponent_sof_input_number_8_Template_sof_input_number_touch_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onLoseFocus(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("formControl", ctx_r3.localValueForm.controls.minValue)("maxFraction", ctx_r3.maxFraction)("isDisabled", ctx_r3.isDisabled);
} }
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
InputSliderComponent.ɵfac = function InputSliderComponent_Factory(t) { return new (t || InputSliderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgControl, 9), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FormBuilder)); };
InputSliderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputSliderComponent, selectors: [["sof-input-slider"]], viewQuery: function InputSliderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 1, ElementRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, inputs: { marks: "marks", maxFraction: "maxFraction", range: "range", reversed: "reversed", value: "value", minValue: "minValue", maxValue: "maxValue", labelFormatFn: "labelFormatFn", isDisabled: "isDisabled" }, outputs: { changeValue: "changeValue", valueAfterRelease: "valueAfterRelease" }, features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: SOF_FOCUS_COMPONENT, useExisting: InputSliderComponent_1 }
        ])], decls: 10, vars: 17, consts: [["nzTooltipVisible", "never", 3, "ngModel", "nzRange", "nzMin", "nzMax", "nzMarks", "nzDisabled", "nzReverse", "ngModelChange", "nzOnAfterChange"], ["inputElement", ""], [1, "marks"], [4, "ngIf"], [1, "d-flex", "mt-2"], ["class", "slider-input", 3, "formControl", "maxFraction", "isDisabled", "touch", 4, "ngIf"], [1, "slider-input", 3, "formControl", "maxFraction", "isDisabled", "touch"]], template: function InputSliderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nz-slider", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function InputSliderComponent_Template_nz_slider_ngModelChange_0_listener($event) { return ctx.onChange($event, true); })("nzOnAfterChange", function InputSliderComponent_Template_nz_slider_nzOnAfterChange_0_listener($event) { return ctx.onTouch($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div");
        ɵngcc0.ɵɵtemplate(4, InputSliderComponent_ng_container_4_Template, 3, 4, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div");
        ɵngcc0.ɵɵtemplate(6, InputSliderComponent_ng_container_6_Template, 3, 4, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 4);
        ɵngcc0.ɵɵtemplate(8, InputSliderComponent_sof_input_number_8_Template, 1, 3, "sof-input-number", 5);
        ɵngcc0.ɵɵelementStart(9, "sof-input-number", 6);
        ɵngcc0.ɵɵlistener("touch", function InputSliderComponent_Template_sof_input_number_touch_9_listener() { return ctx.onLoseFocus(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngModel", ctx.internalValue)("nzRange", ctx.localRange)("nzMin", ctx.localMinValue)("nzMax", ctx.localMaxValue)("nzMarks", ctx.nzMarks)("nzDisabled", ctx.isDisabled)("nzReverse", ctx.localReversed);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.marks === "both" || ctx.marks === "min");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.marks === "both" || ctx.marks === "max");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("justify-content-between", ctx.localRange)("justify-content-end", !ctx.localReversed);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.localRange);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("formControl", ctx.localValueForm.controls.maxValue)("maxFraction", ctx.maxFraction)("isDisabled", ctx.isDisabled);
    } }, directives: function () { return [ɵngcc2.NzSliderComponent, ɵngcc1.NgControlStatus, ɵngcc1.NgModel, ɵngcc3.NgIf, ɵngcc4.InputNumberComponent, ɵngcc1.FormControlDirective]; }, pipes: function () { return [LabelFormatFnPipe]; }, styles: ["sof-input-slider{display:block}sof-input-slider .current-value-wrapper{display:flex;justify-content:center;align-items:center}sof-input-slider .current-value-wrapper .current-value{padding:.25rem .5rem;border-radius:2px;font-size:.875rem}sof-input-slider .marks{display:flex;justify-content:space-between;font-size:.875rem;color:grey}sof-input-slider nz-slider .ant-slider-with-marks{margin-bottom:10px}sof-input-slider nz-slider .ant-slider-dot,sof-input-slider nz-slider .ant-slider-handle{border-width:1px}sof-input-slider .input-wrapper{width:100%;display:flex;justify-content:space-between;align-items:center}sof-input-slider .slider-input{max-width:40%}sof-input-slider input{text-align:right}"], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputSliderComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc1.NgControl, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FormBuilder }]; }, { marks: [{
            type: Input
        }], maxFraction: [{
            type: Input
        }], changeValue: [{
            type: Output
        }], valueAfterRelease: [{
            type: Output
        }], range: [{
            type: Input
        }], reversed: [{
            type: Input
        }], value: [{
            type: Input
        }], minValue: [{
            type: Input
        }], maxValue: [{
            type: Input
        }], labelFormatFn: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { read: ElementRef }]
        }] }); })();

class LabelFormatFnPipe {
    transform(value, fn) {
        return fn(value);
    }
}
LabelFormatFnPipe.ɵfac = function LabelFormatFnPipe_Factory(t) { return new (t || LabelFormatFnPipe)(); };
LabelFormatFnPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "sofLabelFormatFn", type: LabelFormatFnPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LabelFormatFnPipe, [{
        type: Pipe,
        args: [{ name: 'sofLabelFormatFn' }]
    }], null, null); })();

class InputSliderModule {
}
InputSliderModule.ɵfac = function InputSliderModule_Factory(t) { return new (t || InputSliderModule)(); };
InputSliderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputSliderModule });
InputSliderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[
            NzSliderModule,
            ReactiveFormsModule,
            FormsModule,
            CommonModule,
            InputNumberModule,
            InputCurrencyModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputSliderModule, { declarations: function () { return [InputSliderComponent, LabelFormatFnPipe]; }, imports: function () { return [NzSliderModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        InputNumberModule,
        InputCurrencyModule]; }, exports: function () { return [InputSliderComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputSliderModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { InputSliderComponent, InputSliderModule, LabelFormatFnPipe };

//# sourceMappingURL=sofico-framework-ui-kit-components-input-slider.js.map