import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { CheckboxTreeOptionItem } from './types/checkbox-tree-option-item.type';
import { CheckboxTreeResultItem } from './types/checkbox-tree-result-item.type';
interface EnhancedOption {
    id: string;
    label: string;
    children?: EnhancedOption[];
    expanded?: boolean;
    selected?: boolean;
    indeterminate?: boolean;
}
export declare class InputCheckboxTreeComponent implements ControlValueAccessor {
    /**
     *  Determines if the input is disabled.
     */
    isDisabled: boolean;
    options$: BehaviorSubject<CheckboxTreeOptionItem[]>;
    /**
     *  Sets the the available options (checkboxes).
     */
    set options(v: CheckboxTreeOptionItem[]);
    values$: BehaviorSubject<CheckboxTreeResultItem[]>;
    /**
     * Determines whether the input is in a valid state.
     */
    invalid: boolean;
    /**
     * Determines if the input is checked or not.
     */
    set value(value: CheckboxTreeResultItem[]);
    /**
     * EventEmitter that will emit the value when changed.
     */
    changeValue: EventEmitter<CheckboxTreeResultItem[]>;
    /**
     * EventEmitter that will emit the options who have expanded and who not.
     */
    changeOptionExpanded: EventEmitter<CheckboxTreeOptionItem[]>;
    enhancedOptions$: Observable<EnhancedOption[]>;
    propagateChange: any;
    propagateTouch: any;
    trackByFn: (i: any) => any;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(tree: CheckboxTreeResultItem[]): void;
    onChange(parent: EnhancedOption, current: EnhancedOption): void;
    toggleCollapseState(option: CheckboxTreeOptionItem): void;
}
export {};
