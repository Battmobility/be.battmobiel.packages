import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
export declare class InputPasswordComponent implements ControlValueAccessor, OnDestroy, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    showPlainText: boolean;
    /**
     * The id of the input to connect to a label tag.
     */
    labelForId: string;
    /**
     * Determines the value of the control.
     */
    set value(value: string);
    /**
     * The placeholder of the input.
     */
    placeholder: string;
    /**
     * The autocomplete of the input.
     */
    autocomplete: string;
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
    changeValue: EventEmitter<string>;
    /**
     * EventEmitter that will emit when control is touched.
     */
    touch: EventEmitter<any>;
    inputElement: ElementRef;
    internalValue: string;
    propagateChange: any;
    propagateTouch: any;
    constructor(form: FormComponent, ngControl: NgControl);
    sofFocus(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: string): void;
    onChange(value: string): void;
    onTouch(): void;
    setDisabledState(value: boolean): void;
    toggle(): void;
}
