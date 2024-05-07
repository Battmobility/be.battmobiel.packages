import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import { DateFormatEnum } from '@sofico-framework/utils';
import { NzDatePickerSizeType } from 'ng-zorro-antd/date-picker';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class InputDatePickerComponent implements OnInit, OnDestroy, OnChanges, ControlValueAccessor, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    private changeDetectorRef;
    size: NzDatePickerSizeType;
    dateFormat: DateFormatEnum;
    placeHolder: string;
    separator: string;
    showToday: boolean;
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
     * Determines the min date of the control.
     */
    minDate: Date;
    /**
     * Determines the max date of the control.
     */
    maxDate: Date;
    /**
     * EventEmitter that will emit the value when changed.
     */
    changeValue: EventEmitter<Date>;
    /**
     * EventEmitter that will emit when control is touched.
     */
    touch: EventEmitter<Date>;
    minDate$: Observable<Date>;
    maxDate$: Observable<Date>;
    inputElement: ElementRef;
    inputReadOnly: boolean;
    internalFormControl: FormControl;
    propagateChange: any;
    propagateTouch: any;
    disabledDate$: Observable<(current: Date) => boolean>;
    constructor(form: FormComponent, ngControl: NgControl, changeDetectorRef: ChangeDetectorRef);
    sofFocus(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: Date): void;
    onTouch($event: boolean): void;
    private getNgZorroDisabledDate;
    private formatMomentToDate;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputDatePickerComponent, [{ optional: true; }, { optional: true; host: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputDatePickerComponent, "sof-input-date-picker", never, { "size": "size"; "dateFormat": "dateFormat"; "separator": "separator"; "showToday": "showToday"; "invalid": "invalid"; "placeHolder": "placeHolder"; "labelForId": "labelForId"; "isDisabled": "isDisabled"; "minDate": "minDate"; "maxDate": "maxDate"; }, { "changeValue": "changeValue"; "touch": "touch"; }, never, never>;
}

//# sourceMappingURL=input-date-picker.component.d.ts.map