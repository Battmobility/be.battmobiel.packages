import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import * as ɵngcc0 from '@angular/core';
export declare class InputTextComponent implements ControlValueAccessor, OnDestroy, OnSofFocus {
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
     * Determines the value of the control.
     */
    set value(value: string);
    /**
     * EventEmitter that will emit the value when changed.
     */
    changeValue: EventEmitter<string>;
    /**
     * EventEmitter that will emit when control is touched.
     */
    touch: EventEmitter<any>;
    htmlInputElement: ElementRef;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputTextComponent, [{ optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputTextComponent, "sof-input-text", never, { "placeholder": "placeholder"; "value": "value"; "isDisabled": "isDisabled"; "labelForId": "labelForId"; "invalid": "invalid"; }, { "changeValue": "changeValue"; "touch": "touch"; }, never, never>;
}

//# sourceMappingURL=input-text.component.d.ts.map