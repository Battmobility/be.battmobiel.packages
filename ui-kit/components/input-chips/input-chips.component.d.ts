import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NgControl, ValidatorFn } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
export declare class InputChipsComponent implements ControlValueAccessor, OnDestroy, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    /**
     * The id of the input to connect to a label tag.
     */
    labelForId: string;
    /**
     * The placeholder of the input.
     */
    placeholder: string;
    /**
     *  Determines if the input is disabled.
     */
    isDisabled: boolean;
    /**
     * Determines whether the input is in a valid state.
     */
    invalid: boolean;
    /**
     * This regex is used for validation when creating new tags or editing one.
     */
    set validationRegex(regex: RegExp);
    /**
     * This character will be used as separator when entering a list of values
     */
    separator: string;
    /**
     * IMPORTANT: validators for the control linked to this field need to be
     * in this list to work
     *
     * This list is used together with a possible internal validator to build
     * the full list of validators that get set on the control.
     */
    set validators(validators: ValidatorFn | ValidatorFn[] | null);
    /**
     * EventEmitter that will emit the value when changed.
     */
    changeValue: EventEmitter<string[]>;
    /**
     * EventEmitter that will emit when control is touched.
     */
    touch: EventEmitter<any>;
    chipInput: ElementRef;
    internalValue: string[];
    propagateChange: any;
    propagateTouch: any;
    internalChipValue: string;
    internalValidators: ValidatorFn[];
    internalValidationRegex: RegExp;
    constructor(form: FormComponent, ngControl: NgControl);
    /**
     * Determines the value of the control.
     */
    set value(value: string[]);
    sofFocus(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: string[]): void;
    onChange(value: string[]): void;
    submitChip(event: Event): void;
    onChipValueChange(chipValue: string): void;
    onChipEdit(chipValue: string, index: number): void;
    onRemoveChip(chipIndex: number): void;
    onInvalidChip(invalid: boolean): void;
    onBlur(): void;
    private isValid;
    private submitChipValueIfValid;
    private addRegexError;
    private removeRegexError;
}
