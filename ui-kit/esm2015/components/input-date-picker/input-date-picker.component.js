var InputDatePickerComponent_1;
import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { DateFormatEnum } from '@sofico-framework/utils';
import * as _moment from 'moment';
import { Changes, takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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
export { InputDatePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9pbnB1dC1kYXRlLXBpY2tlci9pbnB1dC1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBR2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztJQStCVix3QkFBd0Isc0NBQXhCLHdCQUF3QjtJQW9FbkMsWUFDcUIsSUFBbUIsRUFDWCxTQUFvQixFQUN2QyxpQkFBb0M7UUFGekIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNYLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDdkMsc0JBQWlC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QU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsMEJBQXdCLEVBQUU7aUJBQ3hFOzthQUNGOzs7WUE1Q1EsYUFBYSx1QkFrSGpCLFFBQVE7WUFuSCtCLFNBQVMsdUJBb0hoRCxRQUFRLFlBQUksSUFBSTtZQWxJbkIsaUJBQWlCOzs7bUJBK0RoQixLQUFLO3lCQUdMLEtBQUs7MEJBR0wsS0FBSzt3QkFHTCxLQUFLO3dCQUdMLEtBQUs7eUJBTUwsS0FBSzt5QkFLTCxLQUFLO3NCQUtMLEtBQUs7c0JBS0wsS0FBSztzQkFLTCxLQUFLOzBCQUtMLE1BQU07b0JBS04sTUFBTTsyQkFLTixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7QUFIM0I7SUFBbkIsT0FBTyxDQUFDLFNBQVMsQ0FBQzswREFBNEI7QUFDM0I7SUFBbkIsT0FBTyxDQUFDLFNBQVMsQ0FBQzswREFBNEI7QUF0RHBDLHdCQUF3QjtJQTdCcEMsWUFBWSxFQUFFO0dBNkJGLHdCQUF3QixDQStKcEM7U0EvSlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IHtcbiAgT25Tb2ZGb2N1cyxcbiAgU09GX0ZPQ1VTX0NPTVBPTkVOVFxufSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvZGlyZWN0aXZlcy9mb2N1cyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0RW51bSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcblxuaW1wb3J0ICogYXMgX21vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IE56RGF0ZVBpY2tlclNpemVUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBDaGFuZ2VzLCB0YWtlVW50aWxEZXN0cm95LCBVbnRpbERlc3Ryb3kgfSBmcm9tICduZ3gtcmVhY3RpdmV0b29sa2l0JztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBtb21lbnQgPSBfbW9tZW50O1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1pbnB1dC1kYXRlLXBpY2tlcicsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWRhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LWRhdGUtcGlja2VyXG4gICAgICAjaW5wdXRFbGVtZW50XG4gICAgICBbbnpJbnB1dFJlYWRPbmx5XT1cImlucHV0UmVhZE9ubHlcIlxuICAgICAgW0AuZGlzYWJsZWRdPVwidHJ1ZVwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiaW50ZXJuYWxGb3JtQ29udHJvbFwiXG4gICAgICBbbnpGb3JtYXRdPVwiZGF0ZUZvcm1hdFwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJwbGFjZUhvbGRlclwiXG4gICAgICBbbnpTZXBhcmF0b3JdPVwic2VwYXJhdG9yXCJcbiAgICAgIFtuelNpemVdPVwic2l6ZVwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgIFtuelNob3dUb2RheV09XCJzaG93VG9kYXlcIlxuICAgICAgW256RGlzYWJsZWREYXRlXT1cImRpc2FibGVkRGF0ZSQgfCBhc3luY1wiXG4gICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJcbiAgICAgICAgaW52YWxpZCB8fFxuICAgICAgICAobmdDb250cm9sPy5pbnZhbGlkICYmIChuZ0NvbnRyb2w/LnRvdWNoZWQgfHwgZm9ybT8uc3VibWl0dGVkKSlcbiAgICAgIFwiXG4gICAgICAobnpPbk9wZW5DaGFuZ2UpPVwib25Ub3VjaCgkZXZlbnQpXCJcbiAgICA+PC9uei1kYXRlLXBpY2tlcj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBTT0ZfRk9DVVNfQ09NUE9ORU5ULCB1c2VFeGlzdGluZzogSW5wdXREYXRlUGlja2VyQ29tcG9uZW50IH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dERhdGVQaWNrZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Tb2ZGb2N1cyB7XG4gIC8vIFNpemUgb2YgU2VsZWN0IGlucHV0XG4gIEBJbnB1dCgpIHNpemU6IE56RGF0ZVBpY2tlclNpemVUeXBlID0gJ2xhcmdlJztcblxuICAvLyBEYXRlRm9ybWF0IGZvciBlbnVtXG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQ6IERhdGVGb3JtYXRFbnVtID0gRGF0ZUZvcm1hdEVudW0uQklHX0VORElBTl9EQVNIO1xuXG4gIC8vIFBsYWNlaG9sZGVyIG9mIGRhdGUgaW5wdXRcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZztcblxuICAvLyBTZXBhcmF0b3JcbiAgQElucHV0KCkgc2VwYXJhdG9yID0gJ+KGkic7XG5cbiAgLy8gU2hvdyB0aGUgdG9kYXkgYnV0dG9uXG4gIEBJbnB1dCgpIHNob3dUb2RheSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGlucHV0IHRvIGNvbm5lY3QgdG8gYSBsYWJlbCB0YWcuXG4gICAqIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbEZvcklkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBEZXRlcm1pbmVzIGlmIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgaXMgaW4gYSB2YWxpZCBzdGF0ZS5cbiAgICovXG4gIEBJbnB1dCgpIGludmFsaWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgbWluIGRhdGUgb2YgdGhlIGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBtYXggZGF0ZSBvZiB0aGUgY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIEV2ZW50RW1pdHRlciB0aGF0IHdpbGwgZW1pdCB0aGUgdmFsdWUgd2hlbiBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZVZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgdGhhdCB3aWxsIGVtaXQgd2hlbiBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgdG91Y2ggPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgQENoYW5nZXMoJ21pbkRhdGUnKSBtaW5EYXRlJDogT2JzZXJ2YWJsZTxEYXRlPjtcbiAgQENoYW5nZXMoJ21heERhdGUnKSBtYXhEYXRlJDogT2JzZXJ2YWJsZTxEYXRlPjtcblxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIC8vIFNldHMgdGhlIHJlYWRvbmx5IGF0dHJpYnV0ZSBvZiB0aGUgaW5wdXQgdGFnIChhdm9pZHMgdmlydHVhbFxuICAvLyBrZXlib2FyZCBvbiB0b3VjaCBkZXZpY2VzKVxuICAvLyBUT0RPIHNlZWsgYSBiZXR0ZXIgc29sdXRpb24gZm9yIHRvdWNoIGRldmljZXNcbiAgaW5wdXRSZWFkT25seSA9IGZhbHNlO1xuXG4gIGludGVybmFsRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wobnVsbCk7XG4gIHByb3BhZ2F0ZUNoYW5nZTogYW55O1xuICBwcm9wYWdhdGVUb3VjaDogYW55O1xuICBkaXNhYmxlZERhdGUkOiBPYnNlcnZhYmxlPChjdXJyZW50OiBEYXRlKSA9PiBib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZm9ybTogRm9ybUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBpZiAobmdDb250cm9sKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgc29mRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS5mb2N1cygpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbEZvcm1Db250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSlcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUuZW1pdCh2YWx1ZSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5wcm9wYWdhdGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5kaXNhYmxlZERhdGUkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLm1pbkRhdGUkLnBpcGUoc3RhcnRXaXRoKG51bGwpKSxcbiAgICAgIHRoaXMubWF4RGF0ZSQucGlwZShzdGFydFdpdGgobnVsbCkpXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW21pbkRhdGUsIG1heERhdGVdKSA9PiB0aGlzLmdldE5nWm9ycm9EaXNhYmxlZERhdGUobWluRGF0ZSwgbWF4RGF0ZSkpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbD8udmFsdWVBY2Nlc3Nvcikge1xuICAgICAgLy8gRXZlcnkgdGltZSBhIGNvbnRyb2wgaXMgcmUtY3JlYXRlZCB0aGUgcHJldmlvdXMgd3JpdGVWYWx1ZSByZWZlcmVuY2UocykgaXMgbm90IGNsZWFuZWQgdXAuXG4gICAgICAvLyBTbywgb3ZlciB0aW1lLCBhIGxvdCBvZiB0aGVzZSByZWZlcmVuY2VzIGNhbiBiZSBidWlsdCB1cC4gVGhpcyBtZW1vcnkgbGVhayBpcyBhIGJ1ZyBpbiBBbmd1bGFyJ3MgaW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAgICAvLyBXZSBoaWRlIHRoYXQgcHJvYmxlbSBieSBhc3NpZ25pbmcgYW4gZW1wdHkgZnVuY3Rpb24gdG8gd3JpdGVWYWx1ZSBldmVyeSB0aW1lIHdlIGRlc3Ryb3kgdGhlIGNvbnRyb2wuXG4gICAgICAvLyBBbiBkZXRhaWxlZCBleHBsYW5hdGlvbiBvZiB0aGUgcHJvYmxlbSBjYW4gYmUgZm91bmQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzI5MzM1XG4gICAgICAvLyBUaGUgYnVnIGlzc3VlIGZvciBpdDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjAwMDdcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSA9ICgpID0+IHt9O1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge31cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlVG91Y2ggPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmludGVybmFsRm9ybUNvbnRyb2wuc2V0VmFsdWUodmFsdWUsIHtcbiAgICAgIGVtaXRFdmVudDogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIG9uVG91Y2goJGV2ZW50OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCEkZXZlbnQpIHtcbiAgICAgIHRoaXMudG91Y2guZW1pdCgpO1xuICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgdGhpcy5wcm9wYWdhdGVUb3VjaCkge1xuICAgICAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXROZ1pvcnJvRGlzYWJsZWREYXRlKFxuICAgIG1pbkRhdGU6IERhdGUsXG4gICAgbWF4RGF0ZTogRGF0ZVxuICApOiAoY3VycmVudDogRGF0ZSkgPT4gYm9vbGVhbiB7XG4gICAgaWYgKCFtaW5EYXRlICYmICFtYXhEYXRlKSB7XG4gICAgICByZXR1cm4gKCkgPT4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghbWluRGF0ZSAmJiBtYXhEYXRlKSB7XG4gICAgICByZXR1cm4gKGN1cnJlbnQ6IERhdGUpID0+IG1vbWVudChjdXJyZW50KS5pc0FmdGVyKG1heERhdGUsICdkYXknKTtcbiAgICB9IGVsc2UgaWYgKG1pbkRhdGUgJiYgIW1heERhdGUpIHtcbiAgICAgIHJldHVybiAoY3VycmVudDogRGF0ZSkgPT4gbW9tZW50KGN1cnJlbnQpLmlzQmVmb3JlKG1pbkRhdGUsICdkYXknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChjdXJyZW50OiBEYXRlKSA9PlxuICAgICAgICAhbW9tZW50KGN1cnJlbnQpLmlzQmV0d2VlbihtaW5EYXRlLCBtYXhEYXRlLCAnZGF5JywgJ1tdJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRNb21lbnRUb0RhdGUoZGF0ZTogTW9tZW50KTogRGF0ZSB7XG4gICAgcmV0dXJuIGRhdGUudG9EYXRlKCk7XG4gIH1cbn1cbiJdfQ==