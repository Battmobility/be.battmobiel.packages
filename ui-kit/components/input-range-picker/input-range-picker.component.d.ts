import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import { DateFormatEnum } from '@sofico-framework/utils';
import { NzDatePickerSizeType, PresetRanges as PresetRangesNGZorro } from 'ng-zorro-antd/date-picker';
import { Observable } from 'rxjs';
import { PresetRanges } from './types/preset-ranges.type';
export declare class InputRangePickerComponent implements OnInit, OnDestroy, ControlValueAccessor, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    private translateService;
    private changeDetectorRef;
    private tc;
    size: NzDatePickerSizeType;
    dateFormat: DateFormatEnum;
    set defaultRange(value: boolean);
    set customRanges(value: PresetRanges[]);
    placeHolder: string[];
    separator: string;
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
    changeValue: EventEmitter<string[]>;
    /**
     * EventEmitter that will emit when control is touched.
     */
    touch: EventEmitter<any>;
    inputElement: ElementRef;
    inputReadOnly: boolean;
    internalFormControl: FormControl;
    propagateChange: any;
    propagateTouch: any;
    defaultRanges: PresetRanges[];
    nzRanges$: Observable<PresetRangesNGZorro>;
    constructor(form: FormComponent, ngControl: NgControl, translateService: TranslateService, changeDetectorRef: ChangeDetectorRef);
    sofFocus(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: any): void;
    onTouch($event: boolean): void;
    private changePresetRangesToPresetRangesFromNgZorro;
}
