import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import { SearchFnSelect } from '@sofico-framework/ui-kit/types';
import { NzFilterOptionType, NzSelectSizeType } from 'ng-zorro-antd/select';
import { Observable } from 'rxjs';
export declare class InputSingleSelectTextHybridComponent implements ControlValueAccessor, OnInit, OnChanges, OnDestroy, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    private changeDetectorRef;
    tc: string;
    size: NzSelectSizeType;
    showSearch: boolean;
    borderless: boolean;
    notFoundContent: string;
    /**
     * Switch to freeform input
     */
    freeForm: boolean;
    /**
     * The id of the input to connect to a label tag.
     */
    labelForId: string;
    /**
     *  Determines if the input is disabled.
     */
    isDisabled: boolean;
    /**
     * The placeholder of the input.
     */
    placeholder: string;
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
     * Determines whether the input can be cleared.
     */
    clearable: boolean;
    /**
     * EventEmitter that will emit the value when changed.
     */
    changeValue: EventEmitter<any>;
    /**
     * EventEmitter that will emit the full object value when changed
     */
    changeObjectValue: EventEmitter<any>;
    /**
     * EventEmitter that will emit when control is touched.
     */
    touch: EventEmitter<any>;
    internalFormControl: FormControl;
    propagateChange: any;
    propagateTouch: any;
    options$: Observable<any[]>;
    disabled$: Observable<boolean>;
    freeForm$: Observable<boolean>;
    formattedOptions$: Observable<{
        label: string;
        value: any;
        disabled: boolean;
    }[]>;
    inputElement: ElementRef;
    nzSelectElement: ElementRef;
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
    onChange(): void;
    onTouch(): void;
    setDisabledState(value: boolean): void;
}
