import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
export declare class InputEditorComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    private quillAvailableSub$;
    private writeValueSub$;
    private quill;
    private skipChange;
    /**
     * Determines the value of the control.
     */
    set value(value: string);
    /**
     *  Determines if the input is disabled.
     */
    isDisabled: boolean;
    /**
     * Determines whether the input is in a valid state.
     */
    invalid: boolean;
    /**
     * Determines the height of the control.
     */
    height: string;
    /**
     * Determines if the in- and output of this formcontrol should be markdown
     */
    markdown: boolean;
    /**
     * EventEmitter that will emit the value when changed.
     */
    changeValue: EventEmitter<any>;
    editorContainerViewChild: ElementRef;
    propagateChange: any;
    propagateTouch: any;
    private markdownConverter;
    constructor(form: FormComponent, ngControl: NgControl);
    sofFocus(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: string): void;
    onChange(value: string): void;
    onTouch(): void;
    setDisabledState(value: boolean): void;
}
