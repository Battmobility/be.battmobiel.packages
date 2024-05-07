import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import { Observable } from 'rxjs';
export declare class InputFileComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    /**
     * Translation context
     */
    tc: string;
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
     * Allow the dropping file(s).
     */
    droppable: boolean;
    /**
     * Allow the selection of more than one file.
     */
    multiple: boolean;
    /**
     * Allowed file types.
     */
    acceptedMimeTypes: string[];
    /**
     * Determines the value of the control.
     */
    set value(value: FileList);
    /**
     * EventEmitter that will emit the value when changed.
     */
    changeValue: EventEmitter<FileList>;
    /**
     * EventEmitter that will emit when control is touched.
     */
    touch: EventEmitter<any>;
    dropArea: ElementRef;
    btnElement: ElementRef;
    internalValue: FileList;
    propagateChange: any;
    propagateTouch: any;
    dropAreaDropEvent$: Observable<DragEvent>;
    dropAreaDragEnterEvent$: Observable<DragEvent>;
    dropAreaDragOverEvent$: Observable<DragEvent>;
    dropAreaDragLeaveEvent$: Observable<DragEvent>;
    highlight$: Observable<boolean>;
    droppedFiles$: Observable<FileList>;
    private flagPositiveClick;
    constructor(form: FormComponent, ngControl: NgControl);
    sofFocus(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: FileList): void;
    onChange(value: FileList): void;
    onTouch(): void;
    setDisabledState(value: boolean): void;
    lockOutOnTouch(): void;
    private getDroppedFiles$;
    private getHighlight$;
    private getDropEvent$;
}
