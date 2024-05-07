import { __decorate } from 'tslib';
import { EventEmitter, Component, ViewEncapsulation, Optional, Host, ChangeDetectorRef, Input, Output, ViewChild, ElementRef, NgModule } from '@angular/core';
import { FormControl, NgControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { DateFormatEnum } from '@sofico-framework/utils';
import * as _moment from 'moment';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

var InputRangePickerComponent_1;
const moment = _moment;
let InputRangePickerComponent = InputRangePickerComponent_1 = class InputRangePickerComponent {
    constructor(form, ngControl, translateService, changeDetectorRef) {
        this.form = form;
        this.ngControl = ngControl;
        this.translateService = translateService;
        this.changeDetectorRef = changeDetectorRef;
        this.tc = '@COMMON';
        // Size of Select input
        this.size = 'large';
        // DateFormat for enum
        this.dateFormat = DateFormatEnum.BIG_ENDIAN_DASH;
        // Separator
        this.separator = '→';
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
        this.defaultRanges = [
            {
                label: 'THIS_WEEK',
                startDate: moment().startOf('week').toDate(),
                endDate: moment().endOf('week').toDate()
            },
            {
                label: 'THIS_MONTH',
                startDate: moment().startOf('month').toDate(),
                endDate: moment().endOf('month').toDate()
            },
            {
                label: 'THIS_QUARTER',
                startDate: moment().startOf('quarter').toDate(),
                endDate: moment().endOf('quarter').toDate()
            },
            {
                label: 'THIS_YEAR',
                startDate: moment().startOf('year').toDate(),
                endDate: moment().endOf('year').toDate()
            }
        ];
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    // Do you want to use the default
    // preset ranges for quick selection
    set defaultRange(value) {
        if (value) {
            this.nzRanges$ = this.changePresetRangesToPresetRangesFromNgZorro(this.defaultRanges);
        }
    }
    // Custom ranges for quick selection
    set customRanges(value) {
        this.nzRanges$ = this.changePresetRangesToPresetRangesFromNgZorro(value);
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
                const formatDateArray = value.length !== 0
                    ? [
                        moment(value[0]).format(DateFormatEnum.BIG_ENDIAN_DASH.toUpperCase()),
                        moment(value[1]).format(DateFormatEnum.BIG_ENDIAN_DASH.toUpperCase())
                    ]
                    : null;
                this.changeValue.emit(formatDateArray);
                if (this.propagateChange) {
                    this.propagateChange(formatDateArray);
                }
            }
        });
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
        this.internalFormControl.setValue(value !== null && value !== void 0 ? value : null, { emitEvent: false });
    }
    onTouch($event) {
        if (!$event) {
            this.touch.emit();
            if (!this.isDisabled && this.propagateTouch) {
                this.propagateTouch();
            }
        }
    }
    changePresetRangesToPresetRangesFromNgZorro(ranges) {
        const keysForTranslation = ranges.map(x => this.tc + '.' + x.label);
        return this.translateService.stream(keysForTranslation).pipe(map(obj => Object.keys(obj).map(key => {
            const range = ranges.find(r => this.tc + '.' + r.label === key);
            return {
                [obj[key]]: [range.startDate, range.endDate]
            };
        })), map(arrayOfRanges => Object.assign({}, ...arrayOfRanges)));
    }
};
InputRangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-range-picker',
                encapsulation: ViewEncapsulation.None,
                template: `
    <nz-range-picker
      #inputElement
      [nzInputReadOnly]="inputReadOnly"
      [@.disabled]="true"
      [formControl]="internalFormControl"
      [nzFormat]="dateFormat"
      [nzRanges]="nzRanges$ | async"
      [nzPlaceHolder]="placeHolder"
      [nzSeparator]="separator"
      [nzSize]="size"
      [nzDisabled]="isDisabled"
      [class.is-invalid]="
        invalid ||
        (ngControl?.invalid && (ngControl?.touched || form?.submitted))
      "
      (nzOnOpenChange)="onTouch($event)"
    ></nz-range-picker>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputRangePickerComponent_1 }
                ],
                styles: ["sof-input-range-picker nz-range-picker{width:100%;height:38px}sof-input-range-picker nz-range-picker .ant-picker-suffix .anticon-calendar{display:flex}sof-input-range-picker nz-range-picker.is-invalid>div:first-child>div:nth-child(3){background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}sof-input-range-picker .ant-picker-range .ant-picker-active-bar{background:unset;transition:unset;opacity:unset}"]
            },] }
];
InputRangePickerComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] },
    { type: TranslateService },
    { type: ChangeDetectorRef }
];
InputRangePickerComponent.propDecorators = {
    size: [{ type: Input }],
    dateFormat: [{ type: Input }],
    defaultRange: [{ type: Input }],
    customRanges: [{ type: Input }],
    placeHolder: [{ type: Input }],
    separator: [{ type: Input }],
    labelForId: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    changeValue: [{ type: Output }],
    touch: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement', { read: ElementRef },] }]
};
InputRangePickerComponent = InputRangePickerComponent_1 = __decorate([
    UntilDestroy()
], InputRangePickerComponent);

class InputRangePickerModule {
}
InputRangePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzDatePickerModule, FormsModule, ReactiveFormsModule],
                declarations: [InputRangePickerComponent],
                exports: [InputRangePickerComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputRangePickerComponent, InputRangePickerModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-range-picker.js.map
