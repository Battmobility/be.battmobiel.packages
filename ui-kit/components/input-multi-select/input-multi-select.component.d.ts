import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import { SearchFnSelect } from '@sofico-framework/ui-kit/types';
import { NzFilterOptionType, NzSelectSizeType } from 'ng-zorro-antd/select';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class InputMultiSelectComponent implements ControlValueAccessor, OnChanges, OnInit, OnDestroy, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    private changeDetectorRef;
    constructor(form: FormComponent, ngControl: NgControl, changeDetectorRef: ChangeDetectorRef);
    tc: string;
    size: NzSelectSizeType;
    showSearch: boolean;
    clearable: boolean;
    borderless: boolean;
    notFoundContent: string;
    placeholder: string;
    tokenSeparators: string[];
    maxMultipleCount: number;
    maxTagCount: number;
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
     * The options that populate the list.
     */
    options: any[];
    /**
     * Determines which property that must be used as list label.
     */
    selectorLabel: (x: any) => any;
    /**
     * Determines which property that must be used as list value.
     */
    selectorValue: (x: any) => any;
    /**
     * Determines which property that must be used as option disable.
     */
    selectorDisabled: (x: any) => any;
    /**
     * Determines whether the input is in a valid state.
     */
    invalid: boolean;
    /**
     * EventEmitter that will emit the value when changed.
     */
    changeValue: EventEmitter<any>;
    internalFormControl: FormControl;
    propagateChange: any;
    propagateTouch: any;
    options$: Observable<any[]>;
    formattedOptions$: Observable<{
        label: string;
        value: any;
        disabled: boolean;
    }[]>;
    inputElement: ElementRef;
    searchFn: SearchFnSelect;
    nzSearchFn: NzFilterOptionType;
    sofFocus(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: any): void;
    onTouch(): void;
    setDisabledState(value: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputMultiSelectComponent, [{ optional: true; }, { optional: true; host: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputMultiSelectComponent, "sof-input-multi-select", never, { "size": "size"; "showSearch": "showSearch"; "clearable": "clearable"; "borderless": "borderless"; "notFoundContent": "notFoundContent"; "placeholder": "placeholder"; "tokenSeparators": "tokenSeparators"; "maxTagCount": "maxTagCount"; "searchFn": "searchFn"; "isDisabled": "isDisabled"; "tc": "tc"; "maxMultipleCount": "maxMultipleCount"; "labelForId": "labelForId"; "options": "options"; "selectorLabel": "selectorLabel"; "selectorValue": "selectorValue"; "selectorDisabled": "selectorDisabled"; "invalid": "invalid"; }, { "changeValue": "changeValue"; }, never, never>;
}

//# sourceMappingURL=input-multi-select.component.d.ts.map