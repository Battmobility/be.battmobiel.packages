import { __decorate } from 'tslib';
import { EventEmitter, Component, ViewEncapsulation, Optional, Host, ChangeDetectorRef, Input, Output, ViewChild, ElementRef, NgModule } from '@angular/core';
import { FormControl, NgControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { DateFormatEnum } from '@sofico-framework/utils';
import * as _moment from 'moment';
import { takeUntilDestroy, Changes, UntilDestroy } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

var InputDatePickerComponent_1;
const moment = _moment;
let InputDatePickerComponent = InputDatePickerComponent_1 = class InputDatePickerComponent {
    constructor(form, ngControl, changeDetectorRef) {
        this.form = form;
        this.ngControl = ngControl;
        this.changeDetectorRef = changeDetectorRef;
        // Size of Select input
        this.size = 'large';
        // DateFormat for enum
        this.dateFormat = DateFormatEnum.BIG_ENDIAN_DASH;
        // Separator
        this.separator = '→';
        // Show the today button
        this.showToday = false;
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
        // Sets the readonly attribute of the input tag (avoids virtual
        // keyboard on touch devices)
        // TODO seek a better solution for touch devices
        this.inputReadOnly = false;
        this.internalFormControl = new FormControl(null);
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    sofFocus() {
        this.inputElement.nativeElement.getElementsByTagName('input')[0].focus();
        this.changeDetectorRef.detectChanges();
    }
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
        this.disabledDate$ = combineLatest([
            this.minDate$.pipe(startWith(null)),
            this.maxDate$.pipe(startWith(null))
        ]).pipe(map(([minDate, maxDate]) => this.getNgZorroDisabledDate(minDate, maxDate)));
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
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouch = fn;
    }
    writeValue(value) {
        this.internalFormControl.setValue(value, {
            emitEvent: false
        });
    }
    onTouch($event) {
        if (!$event) {
            this.touch.emit();
            if (!this.isDisabled && this.propagateTouch) {
                this.propagateTouch();
            }
        }
    }
    getNgZorroDisabledDate(minDate, maxDate) {
        if (!minDate && !maxDate) {
            return () => false;
        }
        else if (!minDate && maxDate) {
            return (current) => moment(current).isAfter(maxDate, 'day');
        }
        else if (minDate && !maxDate) {
            return (current) => moment(current).isBefore(minDate, 'day');
        }
        else {
            return (current) => !moment(current).isBetween(minDate, maxDate, 'day', '[]');
        }
    }
    formatMomentToDate(date) {
        return date.toDate();
    }
};
InputDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-date-picker',
                encapsulation: ViewEncapsulation.None,
                template: `
    <nz-date-picker
      #inputElement
      [nzInputReadOnly]="inputReadOnly"
      [@.disabled]="true"
      [formControl]="internalFormControl"
      [nzFormat]="dateFormat"
      [nzPlaceHolder]="placeHolder"
      [nzSeparator]="separator"
      [nzSize]="size"
      [nzDisabled]="isDisabled"
      [nzShowToday]="showToday"
      [nzDisabledDate]="disabledDate$ | async"
      [class.is-invalid]="
        invalid ||
        (ngControl?.invalid && (ngControl?.touched || form?.submitted))
      "
      (nzOnOpenChange)="onTouch($event)"
    ></nz-date-picker>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputDatePickerComponent_1 }
                ],
                styles: ["sof-input-date-picker nz-date-picker{width:100%;height:38px}sof-input-date-picker nz-date-picker .ant-picker-suffix .anticon-calendar{display:flex;cursor:pointer;pointer-events:auto}sof-input-date-picker nz-date-picker.is-invalid .ant-picker-input input{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem);transition:none}sof-input-date-picker .ant-picker-date .ant-picker-active-bar{background:unset;transition:unset;opacity:unset}"]
            },] }
];
InputDatePickerComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef }
];
InputDatePickerComponent.propDecorators = {
    size: [{ type: Input }],
    dateFormat: [{ type: Input }],
    placeHolder: [{ type: Input }],
    separator: [{ type: Input }],
    showToday: [{ type: Input }],
    labelForId: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    changeValue: [{ type: Output }],
    touch: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement', { read: ElementRef },] }]
};
__decorate([
    Changes('minDate')
], InputDatePickerComponent.prototype, "minDate$", void 0);
__decorate([
    Changes('maxDate')
], InputDatePickerComponent.prototype, "maxDate$", void 0);
InputDatePickerComponent = InputDatePickerComponent_1 = __decorate([
    UntilDestroy()
], InputDatePickerComponent);

class InputDatePickerModule {
}
InputDatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzDatePickerModule, FormsModule, ReactiveFormsModule],
                declarations: [InputDatePickerComponent],
                exports: [InputDatePickerComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputDatePickerComponent, InputDatePickerModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-date-picker.js.map
