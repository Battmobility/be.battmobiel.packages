import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import { SearchFnSelect } from '@sofico-framework/ui-kit/types';
import { NzFilterOptionType, NzSelectSizeType } from 'ng-zorro-antd/select';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class InputSingleSelectComponent implements ControlValueAccessor, OnChanges, OnInit, OnDestroy, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    private changeDetectorRef;
    tc: string;
    size: NzSelectSizeType;
    showSearch: boolean;
    clearable: boolean;
    borderless: boolean;
    searchLoading: boolean;
    serverSearch: boolean;
    notFoundContent: string;
    placeholder: string;
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
     * The options that populate the list.
     */
    options: any[];
    /**
     * Determines whether the input is in a valid state.
     */
    invalid: boolean;
    /**
     * EventEmitter that will emit the value when changed.
     */
    changeValue: EventEmitter<any>;
    /**
     * EventEmitter that will emit the full object value when changed
     */
    changeObjectValue: EventEmitter<any>;
    /**
     * EventEmitter that will emit the current search term
     */
    changeSearch: EventEmitter<string>;
    /**
     * EventEmitter that will emit when control is touched.
     */
    touch: EventEmitter<any>;
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
    constructor(form: FormComponent, ngControl: NgControl, changeDetectorRef: ChangeDetectorRef);
    sofFocus(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: any): void;
    onTouch(): void;
    setDisabledState(value: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputSingleSelectComponent, [{ optional: true; }, { optional: true; host: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputSingleSelectComponent, "sof-input-single-select", never, { "size": "size"; "showSearch": "showSearch"; "clearable": "clearable"; "borderless": "borderless"; "searchLoading": "searchLoading"; "serverSearch": "serverSearch"; "notFoundContent": "notFoundContent"; "placeholder": "placeholder"; "invalid": "invalid"; "searchFn": "searchFn"; "isDisabled": "isDisabled"; "tc": "tc"; "labelForId": "labelForId"; "selectorLabel": "selectorLabel"; "selectorValue": "selectorValue"; "selectorDisabled": "selectorDisabled"; "options": "options"; }, { "changeValue": "changeValue"; "changeObjectValue": "changeObjectValue"; "changeSearch": "changeSearch"; "touch": "touch"; }, never, never>;
}

//# sourceMappingURL=input-single-select.component.d.ts.map