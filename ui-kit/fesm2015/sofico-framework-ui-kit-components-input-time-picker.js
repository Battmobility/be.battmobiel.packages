import { __decorate } from 'tslib';
import { EventEmitter, Component, ViewEncapsulation, Optional, Host, ChangeDetectorRef, Input, Output, ViewChild, ElementRef, NgModule } from '@angular/core';
import { FormControl, NgControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { TimeFormatEnum } from '@sofico-framework/utils';
import { takeUntilDestroy, Changes, UntilDestroy } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

var InputTimePickerComponent_1;
let InputTimePickerComponent = InputTimePickerComponent_1 = class InputTimePickerComponent {
    constructor(form, ngControl, changeDetectorRef) {
        this.form = form;
        this.ngControl = ngControl;
        this.changeDetectorRef = changeDetectorRef;
        // Size of Select input
        this.size = 'large';
        // TimeFormat for enum
        this.timeFormat = TimeFormatEnum.HH_TIME_M;
        // Display as 12 hours format and set TimeFormatEnum to H_TIME_M or H_TIME_M_S
        this.use12Hours = false;
        // Allow clearing text
        this.allowEmpty = true;
        // Default value when you open the panel when formControl is nul
        this.defaultOpenValue = new Date();
        /**
         * Determines whether the input is in a valid state.
         */
        this.invalid = false;
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        /**
         * EventEmitter that will emit when control is touched.
         */
        this.touch = new EventEmitter();
        this.internalFormControl = new FormControl(null);
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    sofFocus() {
        this.inputElement.nativeElement.getElementsByTagName('input')[0].focus();
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
    ngOnChanges() { }
    ngOnInit() {
        this.internalFormControl.valueChanges
            .pipe(takeUntilDestroy(this))
            .subscribe(value => {
            if (!this.isDisabled) {
                this.changeValue.emit(value);
                if (this.propagateChange) {
                    this.propagateChange(value);
                }
            }
        });
        this.disabledHours$ = combineLatest([
            this.minTime$.pipe(startWith(null)),
            this.maxTime$.pipe(startWith(null))
        ]).pipe(map(([minTime, maxTime]) => this.getNgZorroDisabledHours(minTime, maxTime)));
        this.disabledMinutes$ = combineLatest([
            this.minTime$.pipe(startWith(null)),
            this.maxTime$.pipe(startWith(null))
        ]).pipe(map(([minTime, maxTime]) => this.getNgZorroDisabledMinutes(minTime, maxTime)));
        this.disabledSeconds$ = combineLatest([
            this.minTime$.pipe(startWith(null)),
            this.maxTime$.pipe(startWith(null))
        ]).pipe(map(([minTime, maxTime]) => this.getNgZorroDisabledSeconds(minTime, maxTime)));
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouch = fn;
    }
    writeValue(value) {
        this.internalFormControl.setValue(value, { emitEvent: false });
    }
    onTouch($event) {
        if (!$event) {
            this.touch.emit();
            if (!this.isDisabled && this.propagateTouch) {
                this.propagateTouch();
            }
        }
    }
    getNgZorroDisabledHours(minTime, maxTime) {
        return () => [...Array(24).keys()].reduce((acc, hour) => {
            if (!this.hourAllowed(minTime, maxTime, hour)) {
                acc.push(hour);
            }
            return acc;
        }, []);
    }
    getNgZorroDisabledMinutes(minTime, maxTime) {
        return hour => [...Array(60).keys()].reduce((acc, minute) => {
            if (!this.hourAllowed(minTime, maxTime, hour)) {
                acc.push(minute);
            }
            else if (!this.minuteAllowed(minTime, maxTime, hour, minute)) {
                acc.push(minute);
            }
            return acc;
        }, []);
    }
    getNgZorroDisabledSeconds(minTime, maxTime) {
        return (hour, minute) => [...Array(60).keys()].reduce((acc, second) => {
            if (!this.hourAllowed(minTime, maxTime, hour)) {
                acc.push(second);
            }
            else if (!this.minuteAllowed(minTime, maxTime, hour, minute)) {
                acc.push(second);
            }
            else if (!this.secondAllowed(minTime, maxTime, hour, minute, second)) {
                acc.push(second);
            }
            return acc;
        }, []);
    }
    hourAllowed(minTime, maxTime, hour) {
        if (minTime || maxTime) {
            if (maxTime && maxTime.getHours() < hour) {
                return false;
            }
            else if (minTime && minTime.getHours() > hour) {
                return false;
            }
        }
        return true;
    }
    minuteAllowed(minTime, maxTime, hour, minute) {
        if (minTime || maxTime) {
            if (maxTime &&
                maxTime.getHours() === hour &&
                maxTime.getMinutes() < minute) {
                return false;
            }
            else if (minTime &&
                minTime.getHours() === hour &&
                minTime.getMinutes() > minute) {
                return false;
            }
        }
        return true;
    }
    secondAllowed(minTime, maxTime, hour, minute, second) {
        if (minTime || maxTime) {
            if (maxTime &&
                maxTime.getHours() === hour &&
                maxTime.getMinutes() === minute &&
                maxTime.getSeconds() < second) {
                return false;
            }
            else if (minTime &&
                minTime.getHours() === hour &&
                minTime.getMinutes() === minute &&
                minTime.getSeconds() > second) {
                return false;
            }
        }
        return true;
    }
};
InputTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-time-picker',
                encapsulation: ViewEncapsulation.None,
                template: `
    <nz-time-picker
      #inputElement
      [@.disabled]="true"
      [formControl]="internalFormControl"
      [nzSize]="size"
      [nzFormat]="timeFormat"
      [nzPlaceHolder]="placeHolder"
      [nzUse12Hours]="use12Hours"
      [nzHourStep]="hourStep"
      [nzMinuteStep]="minuteStep"
      [nzSecondStep]="secondStep"
      [nzAllowEmpty]="allowEmpty"
      [nzDefaultOpenValue]="defaultOpenValue"
      [nzDisabled]="isDisabled"
      [nzDisabledHours]="disabledHours$ | async"
      [nzDisabledMinutes]="disabledMinutes$ | async"
      [nzDisabledSeconds]="disabledSeconds$ | async"
      [class.is-invalid]="
        invalid ||
        (ngControl?.invalid && (ngControl?.touched || form?.submitted))
      "
      (nzOpenChange)="onTouch($event)"
    ></nz-time-picker>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputTimePickerComponent_1 }
                ],
                styles: ["sof-input-time-picker nz-time-picker{width:100%;height:38px}sof-input-time-picker nz-time-picker .ant-picker-suffix .anticon-clock-circle{display:flex}sof-input-time-picker nz-time-picker.is-invalid .ant-picker-input input{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem);transition:none}"]
            },] }
];
InputTimePickerComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef }
];
InputTimePickerComponent.propDecorators = {
    size: [{ type: Input }],
    timeFormat: [{ type: Input }],
    use12Hours: [{ type: Input }],
    placeHolder: [{ type: Input }],
    hourStep: [{ type: Input }],
    minuteStep: [{ type: Input }],
    secondStep: [{ type: Input }],
    allowEmpty: [{ type: Input }],
    defaultOpenValue: [{ type: Input }],
    labelForId: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    changeValue: [{ type: Output }],
    touch: [{ type: Output }],
    minTime: [{ type: Input }],
    maxTime: [{ type: Input }],
    inputElement: [{ type: ViewChild, args: ['inputElement', { read: ElementRef },] }]
};
__decorate([
    Changes('minTime')
], InputTimePickerComponent.prototype, "minTime$", void 0);
__decorate([
    Changes('maxTime')
], InputTimePickerComponent.prototype, "maxTime$", void 0);
InputTimePickerComponent = InputTimePickerComponent_1 = __decorate([
    UntilDestroy()
], InputTimePickerComponent);

class InputTimePickerModule {
}
InputTimePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NzTimePickerModule,
                    FormsModule,
                    ReactiveFormsModule,
                    FormsModule
                ],
                declarations: [InputTimePickerComponent],
                exports: [InputTimePickerComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputTimePickerComponent, InputTimePickerModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-time-picker.js.map
