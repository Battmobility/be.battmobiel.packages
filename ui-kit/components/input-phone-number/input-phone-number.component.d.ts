import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import { Country } from './types/country.type';
import { InputPhoneNumber } from './types/input-phone-number.type';
export declare class InputPhoneNumberComponent implements ControlValueAccessor, OnDestroy, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    tc: string;
    /**
     * The id of the input to connect to a label tag.
     */
    labelForId: string;
    /**
     *  Determines if the input is disabled.
     */
    set isDisabled(value: boolean);
    /**
     * The placeholder of the input.
     */
    placeholder: string;
    /**
     * The countries that populate the list.
     */
    countries: Country[];
    /**
     * Determines whether the input is in a valid state.
     */
    invalid: boolean;
    /**
     * Determines the value of the control.
     */
    set value(value: InputPhoneNumber);
    /**
     * EventEmitter that will emit the value when changed.
     */
    changeValue: EventEmitter<InputPhoneNumber>;
    inputElement: ElementRef;
    private phoneUtil;
    private phoneNumber;
    singleSelectFormControl: FormControl;
    internalValue: InputPhoneNumber;
    internalDisabled: boolean;
    propagateChange: any;
    propagateTouch: any;
    selectorLabel: (x: Country) => string;
    selectorValue: (x: Country) => string;
    constructor(form: FormComponent, ngControl: NgControl);
    sofFocus(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: InputPhoneNumber): void;
    setDisabledState(isDisabled: boolean): void;
    onChangeCountryCode(countryCodeISO2: string): void;
    onChangeLocalCode(localCode: string): void;
    onTouch(propagate?: boolean): void;
    /**
     * format phone number, in control, in a more readable style (ex. 0475201414 => 0475 20 14 14)
     */
    private formatPhoneNumber;
    private emitAndPropagate;
}
