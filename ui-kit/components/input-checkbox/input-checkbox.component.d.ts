import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import * as ɵngcc0 from '@angular/core';
export declare class InputCheckboxComponent implements ControlValueAccessor, OnDestroy, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    /**
     * The translated label of the input.
     */
    label: string;
    /**
     *  Determines if the input is disabled.
     */
    isDisabled: boolean;
    /**
     * Determines whether the input is in a valid state.
     */
    invalid: boolean;
    /**
     * Determines if the input is checked or not.
     */
    set selected(value: boolean);
    /**
     * Determines if the input is indeterminate or not.
     * Checked true will always prevail over indeterminate true.
     */
    set indeterminate(value: boolean);
    /**
     * EventEmitter that will emit the value when changed.
     */
    changeValue: EventEmitter<boolean>;
    /**
     * EventEmitter that will emit when control is touched.
     */
    touch: EventEmitter<any>;
    inputElement: ElementRef;
    internalValue: boolean;
    isIndeterminate: boolean;
    propagateChange: any;
    propagateTouch: any;
    labelForId: string;
    constructor(form: FormComponent, ngControl: NgControl);
    sofFocus(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: boolean): void;
    onToggle(event: any): void;
    onTouch(): void;
    setDisabledState(isDisabled: boolean): void;
    private calculateIndeterminate;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputCheckboxComponent, [{ optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputCheckboxComponent, "sof-input-checkbox", never, { "selected": "selected"; "indeterminate": "indeterminate"; "isDisabled": "isDisabled"; "label": "label"; "invalid": "invalid"; }, { "changeValue": "changeValue"; "touch": "touch"; }, never, never>;
}

//# sourceMappingURL=input-checkbox.component.d.ts.map