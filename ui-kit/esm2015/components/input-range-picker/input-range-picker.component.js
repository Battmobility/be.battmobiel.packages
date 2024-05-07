var InputRangePickerComponent_1;
import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { DateFormatEnum } from '@sofico-framework/utils';
import * as _moment from 'moment';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { map } from 'rxjs/operators';
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
export { InputRangePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtcmFuZ2UtcGlja2VyL2lucHV0LXJhbmdlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBS2xDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBOEJWLHlCQUF5Qix1Q0FBekIseUJBQXlCO0lBNkZwQyxZQUNxQixJQUFtQixFQUNYLFNBQW9CLEVBQ3ZDLGdCQUFrQyxFQUNsQyxpQkFBb0M7UUFIekIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNYLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDdkMscUJBQWdC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QTs7WUFqTkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBRWxDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLDJCQUF5QixFQUFFO2lCQUN6RTs7YUFDRjs7O1lBOUNRLGFBQWEsdUJBNklqQixRQUFRO1lBL0krQixTQUFTLHVCQWdKaEQsUUFBUSxZQUFJLElBQUk7WUEvSVosZ0JBQWdCO1lBZHZCLGlCQUFpQjs7O21CQW1FaEIsS0FBSzt5QkFHTCxLQUFLOzJCQUlMLEtBQUs7MkJBU0wsS0FBSzswQkFLTCxLQUFLO3dCQUdMLEtBQUs7eUJBTUwsS0FBSzt5QkFLTCxLQUFLO3NCQUtMLEtBQUs7MEJBS0wsTUFBTTtvQkFLTixNQUFNOzJCQUVOLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOztBQXpEcEMseUJBQXlCO0lBNUJyQyxZQUFZLEVBQUU7R0E0QkYseUJBQXlCLENBc0xyQztTQXRMWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IHtcbiAgT25Tb2ZGb2N1cyxcbiAgU09GX0ZPQ1VTX0NPTVBPTkVOVFxufSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvZGlyZWN0aXZlcy9mb2N1cyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0RW51bSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcblxuaW1wb3J0ICogYXMgX21vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtcbiAgTnpEYXRlUGlja2VyU2l6ZVR5cGUsXG4gIFByZXNldFJhbmdlcyBhcyBQcmVzZXRSYW5nZXNOR1pvcnJvXG59IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSwgVW50aWxEZXN0cm95IH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcmVzZXRSYW5nZXMgfSBmcm9tICcuL3R5cGVzL3ByZXNldC1yYW5nZXMudHlwZSc7XG5cbmNvbnN0IG1vbWVudCA9IF9tb21lbnQ7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWlucHV0LXJhbmdlLXBpY2tlcicsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LXJhbmdlLXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei1yYW5nZS1waWNrZXJcbiAgICAgICNpbnB1dEVsZW1lbnRcbiAgICAgIFtueklucHV0UmVhZE9ubHldPVwiaW5wdXRSZWFkT25seVwiXG4gICAgICBbQC5kaXNhYmxlZF09XCJ0cnVlXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJpbnRlcm5hbEZvcm1Db250cm9sXCJcbiAgICAgIFtuekZvcm1hdF09XCJkYXRlRm9ybWF0XCJcbiAgICAgIFtuelJhbmdlc109XCJuelJhbmdlcyQgfCBhc3luY1wiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJwbGFjZUhvbGRlclwiXG4gICAgICBbbnpTZXBhcmF0b3JdPVwic2VwYXJhdG9yXCJcbiAgICAgIFtuelNpemVdPVwic2l6ZVwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cIlxuICAgICAgICBpbnZhbGlkIHx8XG4gICAgICAgIChuZ0NvbnRyb2w/LmludmFsaWQgJiYgKG5nQ29udHJvbD8udG91Y2hlZCB8fCBmb3JtPy5zdWJtaXR0ZWQpKVxuICAgICAgXCJcbiAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJvblRvdWNoKCRldmVudClcIlxuICAgID48L256LXJhbmdlLXBpY2tlcj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBTT0ZfRk9DVVNfQ09NUE9ORU5ULCB1c2VFeGlzdGluZzogSW5wdXRSYW5nZVBpY2tlckNvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRSYW5nZVBpY2tlckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Tb2ZGb2N1cyB7XG4gIHByaXZhdGUgdGMgPSAnQENPTU1PTic7XG5cbiAgLy8gU2l6ZSBvZiBTZWxlY3QgaW5wdXRcbiAgQElucHV0KCkgc2l6ZTogTnpEYXRlUGlja2VyU2l6ZVR5cGUgPSAnbGFyZ2UnO1xuXG4gIC8vIERhdGVGb3JtYXQgZm9yIGVudW1cbiAgQElucHV0KCkgZGF0ZUZvcm1hdDogRGF0ZUZvcm1hdEVudW0gPSBEYXRlRm9ybWF0RW51bS5CSUdfRU5ESUFOX0RBU0g7XG5cbiAgLy8gRG8geW91IHdhbnQgdG8gdXNlIHRoZSBkZWZhdWx0XG4gIC8vIHByZXNldCByYW5nZXMgZm9yIHF1aWNrIHNlbGVjdGlvblxuICBASW5wdXQoKSBzZXQgZGVmYXVsdFJhbmdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLm56UmFuZ2VzJCA9IHRoaXMuY2hhbmdlUHJlc2V0UmFuZ2VzVG9QcmVzZXRSYW5nZXNGcm9tTmdab3JybyhcbiAgICAgICAgdGhpcy5kZWZhdWx0UmFuZ2VzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEN1c3RvbSByYW5nZXMgZm9yIHF1aWNrIHNlbGVjdGlvblxuICBASW5wdXQoKSBzZXQgY3VzdG9tUmFuZ2VzKHZhbHVlOiBQcmVzZXRSYW5nZXNbXSkge1xuICAgIHRoaXMubnpSYW5nZXMkID0gdGhpcy5jaGFuZ2VQcmVzZXRSYW5nZXNUb1ByZXNldFJhbmdlc0Zyb21OZ1pvcnJvKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFBsYWNlaG9sZGVyIG9mIGRhdGUgaW5wdXRcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZ1tdO1xuXG4gIC8vIFNlcGFyYXRvclxuICBASW5wdXQoKSBzZXBhcmF0b3IgPSAn4oaSJztcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBpbnB1dCB0byBjb25uZWN0IHRvIGEgbGFiZWwgdGFnLlxuICAgKiBjdXJyZW50bHkgbm90IHN1cHBvcnRlZFxuICAgKi9cbiAgQElucHV0KCkgbGFiZWxGb3JJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAgRGV0ZXJtaW5lcyBpZiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGluIGEgdmFsaWQgc3RhdGUuXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEV2ZW50RW1pdHRlciB0aGF0IHdpbGwgZW1pdCB0aGUgdmFsdWUgd2hlbiBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZVZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHdoZW4gY29udHJvbCBpcyB0b3VjaGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIHRvdWNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcblxuICAvLyBTZXRzIHRoZSByZWFkb25seSBhdHRyaWJ1dGUgb2YgdGhlIGlucHV0IHRhZyAoYXZvaWRzIHZpcnR1YWxcbiAgLy8ga2V5Ym9hcmQgb24gdG91Y2ggZGV2aWNlcylcbiAgLy8gVE9ETyBzZWVrIGEgYmV0dGVyIHNvbHV0aW9uIGZvciB0b3VjaCBkZXZpY2VzXG4gIGlucHV0UmVhZE9ubHkgPSBmYWxzZTtcblxuICBpbnRlcm5hbEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKG51bGwpO1xuICBwcm9wYWdhdGVDaGFuZ2U6IGFueTtcbiAgcHJvcGFnYXRlVG91Y2g6IGFueTtcblxuICBkZWZhdWx0UmFuZ2VzOiBQcmVzZXRSYW5nZXNbXSA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ1RISVNfV0VFSycsXG4gICAgICBzdGFydERhdGU6IG1vbWVudCgpLnN0YXJ0T2YoJ3dlZWsnKS50b0RhdGUoKSxcbiAgICAgIGVuZERhdGU6IG1vbWVudCgpLmVuZE9mKCd3ZWVrJykudG9EYXRlKClcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnVEhJU19NT05USCcsXG4gICAgICBzdGFydERhdGU6IG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJykudG9EYXRlKCksXG4gICAgICBlbmREYXRlOiBtb21lbnQoKS5lbmRPZignbW9udGgnKS50b0RhdGUoKVxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdUSElTX1FVQVJURVInLFxuICAgICAgc3RhcnREYXRlOiBtb21lbnQoKS5zdGFydE9mKCdxdWFydGVyJykudG9EYXRlKCksXG4gICAgICBlbmREYXRlOiBtb21lbnQoKS5lbmRPZigncXVhcnRlcicpLnRvRGF0ZSgpXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ1RISVNfWUVBUicsXG4gICAgICBzdGFydERhdGU6IG1vbWVudCgpLnN0YXJ0T2YoJ3llYXInKS50b0RhdGUoKSxcbiAgICAgIGVuZERhdGU6IG1vbWVudCgpLmVuZE9mKCd5ZWFyJykudG9EYXRlKClcbiAgICB9XG4gIF07XG5cbiAgbnpSYW5nZXMkOiBPYnNlcnZhYmxlPFByZXNldFJhbmdlc05HWm9ycm8+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBmb3JtOiBGb3JtQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBpZiAobmdDb250cm9sKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgc29mRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS5mb2N1cygpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbEZvcm1Db250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSlcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgIGNvbnN0IGZvcm1hdERhdGVBcnJheSA9XG4gICAgICAgICAgICB2YWx1ZS5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICBtb21lbnQodmFsdWVbMF0pLmZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgRGF0ZUZvcm1hdEVudW0uQklHX0VORElBTl9EQVNILnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBtb21lbnQodmFsdWVbMV0pLmZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgRGF0ZUZvcm1hdEVudW0uQklHX0VORElBTl9EQVNILnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlLmVtaXQoZm9ybWF0RGF0ZUFycmF5KTtcblxuICAgICAgICAgIGlmICh0aGlzLnByb3BhZ2F0ZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UoZm9ybWF0RGF0ZUFycmF5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sPy52YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAvLyBFdmVyeSB0aW1lIGEgY29udHJvbCBpcyByZS1jcmVhdGVkIHRoZSBwcmV2aW91cyB3cml0ZVZhbHVlIHJlZmVyZW5jZShzKSBpcyBub3QgY2xlYW5lZCB1cC5cbiAgICAgIC8vIFNvLCBvdmVyIHRpbWUsIGEgbG90IG9mIHRoZXNlIHJlZmVyZW5jZXMgY2FuIGJlIGJ1aWx0IHVwLiBUaGlzIG1lbW9yeSBsZWFrIGlzIGEgYnVnIGluIEFuZ3VsYXIncyBpbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICAgIC8vIFdlIGhpZGUgdGhhdCBwcm9ibGVtIGJ5IGFzc2lnbmluZyBhbiBlbXB0eSBmdW5jdGlvbiB0byB3cml0ZVZhbHVlIGV2ZXJ5IHRpbWUgd2UgZGVzdHJveSB0aGUgY29udHJvbC5cbiAgICAgIC8vIEFuIGRldGFpbGVkIGV4cGxhbmF0aW9uIG9mIHRoZSBwcm9ibGVtIGNhbiBiZSBmb3VuZCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL3B1bGwvMjkzMzVcbiAgICAgIC8vIFRoZSBidWcgaXNzdWUgZm9yIGl0OiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDAwN1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlID0gKCkgPT4ge307XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmludGVybmFsRm9ybUNvbnRyb2wuc2V0VmFsdWUodmFsdWUgPz8gbnVsbCwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICB9XG5cbiAgb25Ub3VjaCgkZXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoISRldmVudCkge1xuICAgICAgdGhpcy50b3VjaC5lbWl0KCk7XG4gICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCAmJiB0aGlzLnByb3BhZ2F0ZVRvdWNoKSB7XG4gICAgICAgIHRoaXMucHJvcGFnYXRlVG91Y2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVByZXNldFJhbmdlc1RvUHJlc2V0UmFuZ2VzRnJvbU5nWm9ycm8oXG4gICAgcmFuZ2VzOiBQcmVzZXRSYW5nZXNbXVxuICApOiBPYnNlcnZhYmxlPFByZXNldFJhbmdlc05HWm9ycm8+IHtcbiAgICBjb25zdCBrZXlzRm9yVHJhbnNsYXRpb24gPSByYW5nZXMubWFwKHggPT4gdGhpcy50YyArICcuJyArIHgubGFiZWwpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc3RyZWFtKGtleXNGb3JUcmFuc2xhdGlvbikucGlwZShcbiAgICAgIG1hcChvYmogPT5cbiAgICAgICAgT2JqZWN0LmtleXMob2JqKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICBjb25zdCByYW5nZSA9IHJhbmdlcy5maW5kKHIgPT4gdGhpcy50YyArICcuJyArIHIubGFiZWwgPT09IGtleSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtvYmpba2V5XV06IFtyYW5nZS5zdGFydERhdGUsIHJhbmdlLmVuZERhdGVdXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBtYXAoYXJyYXlPZlJhbmdlcyA9PiBPYmplY3QuYXNzaWduKHt9LCAuLi5hcnJheU9mUmFuZ2VzKSlcbiAgICApO1xuICB9XG59XG4iXX0=