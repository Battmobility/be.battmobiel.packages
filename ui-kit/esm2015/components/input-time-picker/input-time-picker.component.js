var InputTimePickerComponent_1;
import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { TimeFormatEnum } from '@sofico-framework/utils';
import { Changes, takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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
export { InputTimePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9pbnB1dC10aW1lLXBpY2tlci9pbnB1dC10aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0lBb0NuQyx3QkFBd0Isc0NBQXhCLHdCQUF3QjtJQThFbkMsWUFDcUIsSUFBbUIsRUFDWCxTQUFvQixFQUN2QyxpQkFBb0M7UUFGekIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNYLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDdkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQS9FOUMsdUJBQXVCO1FBQ2QsU0FBSSxHQUFHLE9BQU8sQ0FBQztRQUV4Qixz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QUFNO3NCQUtOLEtBQUs7c0JBS0wsS0FBSzsyQkFLTCxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7QUFIM0I7SUFBbkIsT0FBTyxDQUFDLFNBQVMsQ0FBQzswREFBNEI7QUFDM0I7SUFBbkIsT0FBTyxDQUFDLFNBQVMsQ0FBQzswREFBNEI7QUFsRXBDLHdCQUF3QjtJQWxDcEMsWUFBWSxFQUFFO0dBa0NGLHdCQUF3QixDQW9ScEM7U0FwUlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IHtcbiAgT25Tb2ZGb2N1cyxcbiAgU09GX0ZPQ1VTX0NPTVBPTkVOVFxufSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvZGlyZWN0aXZlcy9mb2N1cyc7XG5pbXBvcnQgeyBUaW1lRm9ybWF0RW51bSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcbmltcG9ydCB7IENoYW5nZXMsIHRha2VVbnRpbERlc3Ryb3ksIFVudGlsRGVzdHJveSB9IGZyb20gJ25neC1yZWFjdGl2ZXRvb2xraXQnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWlucHV0LXRpbWUtcGlja2VyJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtdGltZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotdGltZS1waWNrZXJcbiAgICAgICNpbnB1dEVsZW1lbnRcbiAgICAgIFtALmRpc2FibGVkXT1cInRydWVcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImludGVybmFsRm9ybUNvbnRyb2xcIlxuICAgICAgW256U2l6ZV09XCJzaXplXCJcbiAgICAgIFtuekZvcm1hdF09XCJ0aW1lRm9ybWF0XCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInBsYWNlSG9sZGVyXCJcbiAgICAgIFtuelVzZTEySG91cnNdPVwidXNlMTJIb3Vyc1wiXG4gICAgICBbbnpIb3VyU3RlcF09XCJob3VyU3RlcFwiXG4gICAgICBbbnpNaW51dGVTdGVwXT1cIm1pbnV0ZVN0ZXBcIlxuICAgICAgW256U2Vjb25kU3RlcF09XCJzZWNvbmRTdGVwXCJcbiAgICAgIFtuekFsbG93RW1wdHldPVwiYWxsb3dFbXB0eVwiXG4gICAgICBbbnpEZWZhdWx0T3BlblZhbHVlXT1cImRlZmF1bHRPcGVuVmFsdWVcIlxuICAgICAgW256RGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICBbbnpEaXNhYmxlZEhvdXJzXT1cImRpc2FibGVkSG91cnMkIHwgYXN5bmNcIlxuICAgICAgW256RGlzYWJsZWRNaW51dGVzXT1cImRpc2FibGVkTWludXRlcyQgfCBhc3luY1wiXG4gICAgICBbbnpEaXNhYmxlZFNlY29uZHNdPVwiZGlzYWJsZWRTZWNvbmRzJCB8IGFzeW5jXCJcbiAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cIlxuICAgICAgICBpbnZhbGlkIHx8XG4gICAgICAgIChuZ0NvbnRyb2w/LmludmFsaWQgJiYgKG5nQ29udHJvbD8udG91Y2hlZCB8fCBmb3JtPy5zdWJtaXR0ZWQpKVxuICAgICAgXCJcbiAgICAgIChuek9wZW5DaGFuZ2UpPVwib25Ub3VjaCgkZXZlbnQpXCJcbiAgICA+PC9uei10aW1lLXBpY2tlcj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBTT0ZfRk9DVVNfQ09NUE9ORU5ULCB1c2VFeGlzdGluZzogSW5wdXRUaW1lUGlja2VyQ29tcG9uZW50IH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFRpbWVQaWNrZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Tb2ZGb2N1cyB7XG4gIC8vIFNpemUgb2YgU2VsZWN0IGlucHV0XG4gIEBJbnB1dCgpIHNpemUgPSAnbGFyZ2UnO1xuXG4gIC8vIFRpbWVGb3JtYXQgZm9yIGVudW1cbiAgQElucHV0KCkgdGltZUZvcm1hdDogVGltZUZvcm1hdEVudW0gPSBUaW1lRm9ybWF0RW51bS5ISF9USU1FX007XG5cbiAgLy8gRGlzcGxheSBhcyAxMiBob3VycyBmb3JtYXQgYW5kIHNldCBUaW1lRm9ybWF0RW51bSB0byBIX1RJTUVfTSBvciBIX1RJTUVfTV9TXG4gIEBJbnB1dCgpIHVzZTEySG91cnMgPSBmYWxzZTtcblxuICAvLyBQbGFjZWhvbGRlciBvZiBkYXRlIGlucHV0XG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmc7XG5cbiAgLy8gSW50ZXJ2YWwgYmV0d2VlbiBob3VycyBpbiB0aW1lLXBpY2tlci12aWV3XG4gIEBJbnB1dCgpIGhvdXJTdGVwOiBudW1iZXI7XG5cbiAgLy8gSW50ZXJ2YWwgYmV0d2VlbiBtaW51dGVzIGluIHRpbWUtcGlja2VyLXZpZXdcbiAgQElucHV0KCkgbWludXRlU3RlcDogbnVtYmVyO1xuXG4gIC8vIEludGVydmFsIGJldHdlZW4gc2Vjb25kcyBpbiB0aW1lLXBpY2tlci12aWV3XG4gIEBJbnB1dCgpIHNlY29uZFN0ZXA6IG51bWJlcjtcblxuICAvLyBBbGxvdyBjbGVhcmluZyB0ZXh0XG4gIEBJbnB1dCgpIGFsbG93RW1wdHkgPSB0cnVlO1xuXG4gIC8vIERlZmF1bHQgdmFsdWUgd2hlbiB5b3Ugb3BlbiB0aGUgcGFuZWwgd2hlbiBmb3JtQ29udHJvbCBpcyBudWxcbiAgQElucHV0KCkgZGVmYXVsdE9wZW5WYWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgaW5wdXQgdG8gY29ubmVjdCB0byBhIGxhYmVsIHRhZy5cbiAgICogY3VycmVudGx5IG5vdCBzdXBwb3J0ZWRcbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsRm9ySWQ6IHN0cmluZztcblxuICAvKipcbiAgICogIERldGVybWluZXMgaWYgdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBpbnB1dCBpcyBpbiBhIHZhbGlkIHN0YXRlLlxuICAgKi9cbiAgQElucHV0KCkgaW52YWxpZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgdGhhdCB3aWxsIGVtaXQgdGhlIHZhbHVlIHdoZW4gY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2VWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHdoZW4gY29udHJvbCBpcyB0b3VjaGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIHRvdWNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIG1pbiB0aW1lIG9mIHRoZSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgbWluVGltZTogRGF0ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgbWF4IHRpbWUgb2YgdGhlIGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSBtYXhUaW1lOiBEYXRlO1xuXG4gIEBDaGFuZ2VzKCdtaW5UaW1lJykgbWluVGltZSQ6IE9ic2VydmFibGU8RGF0ZT47XG4gIEBDaGFuZ2VzKCdtYXhUaW1lJykgbWF4VGltZSQ6IE9ic2VydmFibGU8RGF0ZT47XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcblxuICBkaXNhYmxlZEhvdXJzJDogT2JzZXJ2YWJsZTwoKSA9PiBudW1iZXJbXT47XG4gIGRpc2FibGVkTWludXRlcyQ6IE9ic2VydmFibGU8KGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW10+O1xuICBkaXNhYmxlZFNlY29uZHMkOiBPYnNlcnZhYmxlPChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXT47XG5cbiAgaW50ZXJuYWxGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChudWxsKTtcbiAgcHJvcGFnYXRlQ2hhbmdlOiBhbnk7XG4gIHByb3BhZ2F0ZVRvdWNoOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGZvcm06IEZvcm1Db21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgaWYgKG5nQ29udHJvbCkge1xuICAgICAgbmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHNvZkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF0uZm9jdXMoKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbD8udmFsdWVBY2Nlc3Nvcikge1xuICAgICAgLy8gRXZlcnkgdGltZSBhIGNvbnRyb2wgaXMgcmUtY3JlYXRlZCB0aGUgcHJldmlvdXMgd3JpdGVWYWx1ZSByZWZlcmVuY2UocykgaXMgbm90IGNsZWFuZWQgdXAuXG4gICAgICAvLyBTbywgb3ZlciB0aW1lLCBhIGxvdCBvZiB0aGVzZSByZWZlcmVuY2VzIGNhbiBiZSBidWlsdCB1cC4gVGhpcyBtZW1vcnkgbGVhayBpcyBhIGJ1ZyBpbiBBbmd1bGFyJ3MgaW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAgICAvLyBXZSBoaWRlIHRoYXQgcHJvYmxlbSBieSBhc3NpZ25pbmcgYW4gZW1wdHkgZnVuY3Rpb24gdG8gd3JpdGVWYWx1ZSBldmVyeSB0aW1lIHdlIGRlc3Ryb3kgdGhlIGNvbnRyb2wuXG4gICAgICAvLyBBbiBkZXRhaWxlZCBleHBsYW5hdGlvbiBvZiB0aGUgcHJvYmxlbSBjYW4gYmUgZm91bmQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzI5MzM1XG4gICAgICAvLyBUaGUgYnVnIGlzc3VlIGZvciBpdDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjAwMDdcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSA9ICgpID0+IHt9O1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmludGVybmFsRm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95KHRoaXMpKVxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZS5lbWl0KHZhbHVlKTtcblxuICAgICAgICAgIGlmICh0aGlzLnByb3BhZ2F0ZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLmRpc2FibGVkSG91cnMkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLm1pblRpbWUkLnBpcGUoc3RhcnRXaXRoKG51bGwpKSxcbiAgICAgIHRoaXMubWF4VGltZSQucGlwZShzdGFydFdpdGgobnVsbCkpXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW21pblRpbWUsIG1heFRpbWVdKSA9PlxuICAgICAgICB0aGlzLmdldE5nWm9ycm9EaXNhYmxlZEhvdXJzKG1pblRpbWUsIG1heFRpbWUpXG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMuZGlzYWJsZWRNaW51dGVzJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5taW5UaW1lJC5waXBlKHN0YXJ0V2l0aChudWxsKSksXG4gICAgICB0aGlzLm1heFRpbWUkLnBpcGUoc3RhcnRXaXRoKG51bGwpKVxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFttaW5UaW1lLCBtYXhUaW1lXSkgPT5cbiAgICAgICAgdGhpcy5nZXROZ1pvcnJvRGlzYWJsZWRNaW51dGVzKG1pblRpbWUsIG1heFRpbWUpXG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMuZGlzYWJsZWRTZWNvbmRzJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5taW5UaW1lJC5waXBlKHN0YXJ0V2l0aChudWxsKSksXG4gICAgICB0aGlzLm1heFRpbWUkLnBpcGUoc3RhcnRXaXRoKG51bGwpKVxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFttaW5UaW1lLCBtYXhUaW1lXSkgPT5cbiAgICAgICAgdGhpcy5nZXROZ1pvcnJvRGlzYWJsZWRTZWNvbmRzKG1pblRpbWUsIG1heFRpbWUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVUb3VjaCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbEZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gIH1cblxuICBvblRvdWNoKCRldmVudDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghJGV2ZW50KSB7XG4gICAgICB0aGlzLnRvdWNoLmVtaXQoKTtcbiAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmIHRoaXMucHJvcGFnYXRlVG91Y2gpIHtcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVUb3VjaCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Tmdab3Jyb0Rpc2FibGVkSG91cnMoXG4gICAgbWluVGltZTogRGF0ZSxcbiAgICBtYXhUaW1lOiBEYXRlXG4gICk6ICgpID0+IG51bWJlcltdIHtcbiAgICByZXR1cm4gKCkgPT5cbiAgICAgIFsuLi5BcnJheSgyNCkua2V5cygpXS5yZWR1Y2UoKGFjYywgaG91cikgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaG91ckFsbG93ZWQobWluVGltZSwgbWF4VGltZSwgaG91cikpIHtcbiAgICAgICAgICBhY2MucHVzaChob3VyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZ1pvcnJvRGlzYWJsZWRNaW51dGVzKFxuICAgIG1pblRpbWU6IERhdGUsXG4gICAgbWF4VGltZTogRGF0ZVxuICApOiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIGhvdXIgPT5cbiAgICAgIFsuLi5BcnJheSg2MCkua2V5cygpXS5yZWR1Y2UoKGFjYywgbWludXRlKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5ob3VyQWxsb3dlZChtaW5UaW1lLCBtYXhUaW1lLCBob3VyKSkge1xuICAgICAgICAgIGFjYy5wdXNoKG1pbnV0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMubWludXRlQWxsb3dlZChtaW5UaW1lLCBtYXhUaW1lLCBob3VyLCBtaW51dGUpKSB7XG4gICAgICAgICAgYWNjLnB1c2gobWludXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZ1pvcnJvRGlzYWJsZWRTZWNvbmRzKFxuICAgIG1pblRpbWU6IERhdGUsXG4gICAgbWF4VGltZTogRGF0ZVxuICApOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW10ge1xuICAgIHJldHVybiAoaG91ciwgbWludXRlKSA9PlxuICAgICAgWy4uLkFycmF5KDYwKS5rZXlzKCldLnJlZHVjZSgoYWNjLCBzZWNvbmQpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmhvdXJBbGxvd2VkKG1pblRpbWUsIG1heFRpbWUsIGhvdXIpKSB7XG4gICAgICAgICAgYWNjLnB1c2goc2Vjb25kKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5taW51dGVBbGxvd2VkKG1pblRpbWUsIG1heFRpbWUsIGhvdXIsIG1pbnV0ZSkpIHtcbiAgICAgICAgICBhY2MucHVzaChzZWNvbmQpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICF0aGlzLnNlY29uZEFsbG93ZWQobWluVGltZSwgbWF4VGltZSwgaG91ciwgbWludXRlLCBzZWNvbmQpXG4gICAgICAgICkge1xuICAgICAgICAgIGFjYy5wdXNoKHNlY29uZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgaG91ckFsbG93ZWQobWluVGltZTogRGF0ZSwgbWF4VGltZTogRGF0ZSwgaG91cjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKG1pblRpbWUgfHwgbWF4VGltZSkge1xuICAgICAgaWYgKG1heFRpbWUgJiYgbWF4VGltZS5nZXRIb3VycygpIDwgaG91cikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKG1pblRpbWUgJiYgbWluVGltZS5nZXRIb3VycygpID4gaG91cikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBtaW51dGVBbGxvd2VkKFxuICAgIG1pblRpbWU6IERhdGUsXG4gICAgbWF4VGltZTogRGF0ZSxcbiAgICBob3VyOiBudW1iZXIsXG4gICAgbWludXRlOiBudW1iZXJcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKG1pblRpbWUgfHwgbWF4VGltZSkge1xuICAgICAgaWYgKFxuICAgICAgICBtYXhUaW1lICYmXG4gICAgICAgIG1heFRpbWUuZ2V0SG91cnMoKSA9PT0gaG91ciAmJlxuICAgICAgICBtYXhUaW1lLmdldE1pbnV0ZXMoKSA8IG1pbnV0ZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIG1pblRpbWUgJiZcbiAgICAgICAgbWluVGltZS5nZXRIb3VycygpID09PSBob3VyICYmXG4gICAgICAgIG1pblRpbWUuZ2V0TWludXRlcygpID4gbWludXRlXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgc2Vjb25kQWxsb3dlZChcbiAgICBtaW5UaW1lOiBEYXRlLFxuICAgIG1heFRpbWU6IERhdGUsXG4gICAgaG91cjogbnVtYmVyLFxuICAgIG1pbnV0ZTogbnVtYmVyLFxuICAgIHNlY29uZDogbnVtYmVyXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChtaW5UaW1lIHx8IG1heFRpbWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgbWF4VGltZSAmJlxuICAgICAgICBtYXhUaW1lLmdldEhvdXJzKCkgPT09IGhvdXIgJiZcbiAgICAgICAgbWF4VGltZS5nZXRNaW51dGVzKCkgPT09IG1pbnV0ZSAmJlxuICAgICAgICBtYXhUaW1lLmdldFNlY29uZHMoKSA8IHNlY29uZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIG1pblRpbWUgJiZcbiAgICAgICAgbWluVGltZS5nZXRIb3VycygpID09PSBob3VyICYmXG4gICAgICAgIG1pblRpbWUuZ2V0TWludXRlcygpID09PSBtaW51dGUgJiZcbiAgICAgICAgbWluVGltZS5nZXRTZWNvbmRzKCkgPiBzZWNvbmRcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=