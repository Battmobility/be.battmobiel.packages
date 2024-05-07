import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import { TimeFormatEnum } from '@sofico-framework/utils';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class InputTimePickerComponent implements OnInit, OnDestroy, OnChanges, ControlValueAccessor, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    private changeDetectorRef;
    size: string;
    timeFormat: TimeFormatEnum;
    use12Hours: boolean;
    placeHolder: string;
    hourStep: number;
    minuteStep: number;
    secondStep: number;
    allowEmpty: boolean;
    defaultOpenValue: Date;
    /**
     * The id of the input to connect to a label tag.
     * currently not supported
     */
    labelForId: string;
    /**
     *  Determines if the input is disabled.
     */
    isDisabled: boolean;
    /**
     * Determines whether the input is in a valid state.
     */
    invalid: boolean;
    /**
     * EventEmitter that will emit the value when changed.
     */
    changeValue: EventEmitter<Date>;
    /**
     * EventEmitter that will emit when control is touched.
     */
    touch: EventEmitter<any>;
    /**
     * Determines the min time of the control.
     */
    minTime: Date;
    /**
     * Determines the max time of the control.
     */
    maxTime: Date;
    minTime$: Observable<Date>;
    maxTime$: Observable<Date>;
    inputElement: ElementRef;
    disabledHours$: Observable<() => number[]>;
    disabledMinutes$: Observable<(hour: number) => number[]>;
    disabledSeconds$: Observable<(hour: number, minute: number) => number[]>;
    internalFormControl: FormControl;
    propagateChange: any;
    propagateTouch: any;
    constructor(form: FormComponent, ngControl: NgControl, changeDetectorRef: ChangeDetectorRef);
    sofFocus(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: any): void;
    onTouch($event: boolean): void;
    private getNgZorroDisabledHours;
    private getNgZorroDisabledMinutes;
    private getNgZorroDisabledSeconds;
    private hourAllowed;
    private minuteAllowed;
    private secondAllowed;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputTimePickerComponent, [{ optional: true; }, { optional: true; host: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputTimePickerComponent, "sof-input-time-picker", never, { "size": "size"; "timeFormat": "timeFormat"; "use12Hours": "use12Hours"; "allowEmpty": "allowEmpty"; "defaultOpenValue": "defaultOpenValue"; "invalid": "invalid"; "placeHolder": "placeHolder"; "hourStep": "hourStep"; "minuteStep": "minuteStep"; "secondStep": "secondStep"; "labelForId": "labelForId"; "isDisabled": "isDisabled"; "minTime": "minTime"; "maxTime": "maxTime"; }, { "changeValue": "changeValue"; "touch": "touch"; }, never, never>;
}

//# sourceMappingURL=input-time-picker.component.d.ts.map