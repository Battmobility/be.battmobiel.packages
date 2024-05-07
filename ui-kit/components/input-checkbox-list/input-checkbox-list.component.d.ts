import { EventEmitter, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { InputCheckboxComponent } from '@sofico-framework/ui-kit/components/input-checkbox';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import { Observable } from 'rxjs';
interface EnhancedOption {
    id: string;
    label: string;
    selected?: boolean;
}
export declare class InputCheckboxListComponent implements ControlValueAccessor, OnSofFocus {
    /**
     *  Determines if the input is disabled.
     */
    isDisabled: boolean;
    private options$;
    /**
     *  Sets the the available options (checkboxes).
     */
    set options(v: {
        label: string;
        id: string;
    }[]);
    private values$;
    /**
     * Determines whether the input is in a valid state.
     */
    invalid: boolean;
    /**
     * Determines if the input is checked or not.
     */
    set value(value: string[]);
    /**
     * EventEmitter that will emit the value when changed.
     */
    changeValue: EventEmitter<string[]>;
    checkboxes: QueryList<InputCheckboxComponent>;
    enhancedOptions$: Observable<EnhancedOption[]>;
    propagateChange: any;
    propagateTouch: any;
    trackByFn: (i: any) => any;
    sofFocus(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(list: string[]): void;
    onChange(option: {
        label: string;
        id: string;
    }, selected: boolean): void;
}
export {};
