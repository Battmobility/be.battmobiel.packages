import { ElementRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import * as ɵngcc0 from '@angular/core';
export declare class InputRadioComponent implements ControlValueAccessor, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    /**
     * Determines the value of the control.
     */
    value: any;
    /**
     * Determines the name of the control.
     */
    name: string;
    /**
     * Determines whether the control is checked or not.
     */
    checked: boolean;
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
    changeValue: EventEmitter<any>;
    inputElement: ElementRef;
    labelForId: string;
    changeFn: any;
    touchFn: any;
    constructor(form: FormComponent, ngControl: NgControl);
    sofFocus(): void;
    onChange(e: any): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputRadioComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputRadioComponent, "sof-input-radio", never, { "isDisabled": "isDisabled"; "value": "value"; "name": "name"; "checked": "checked"; "invalid": "invalid"; }, { "changeValue": "changeValue"; }, never, ["*"]>;
}

//# sourceMappingURL=input-radio.component.d.ts.map