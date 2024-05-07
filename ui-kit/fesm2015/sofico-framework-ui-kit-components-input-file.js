import { __decorate } from 'tslib';
import { EventEmitter, Component, Optional, Host, Input, Output, ViewChild, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { merge, EMPTY, timer, fromEvent } from 'rxjs';
import { map, filter, mapTo, distinctUntilChanged, debounce, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

var InputFileComponent_1;
let InputFileComponent = InputFileComponent_1 = class InputFileComponent {
    constructor(form, ngControl) {
        this.form = form;
        this.ngControl = ngControl;
        /**
         * The placeholder of the input.
         */
        this.placeholder = '';
        /**
         * Allowed file types.
         */
        this.acceptedMimeTypes = [
            'application/pdf',
            'image/jpeg',
            'image/x-png'
        ];
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        /**
         * EventEmitter that will emit when control is touched.
         */
        this.touch = new EventEmitter();
        this.internalValue = null;
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    /**
     * Determines the value of the control.
     */
    set value(value) {
        this.writeValue(value);
    }
    sofFocus() {
        this.btnElement.nativeElement.focus();
    }
    ngOnInit() {
        this.dropAreaDropEvent$ = this.getDropEvent$(this.dropArea.nativeElement, 'drop');
        this.dropAreaDragEnterEvent$ = this.getDropEvent$(this.dropArea.nativeElement, 'dragenter');
        this.dropAreaDragOverEvent$ = this.getDropEvent$(this.dropArea.nativeElement, 'dragover');
        this.dropAreaDragLeaveEvent$ = this.getDropEvent$(this.dropArea.nativeElement, 'dragleave');
        this.highlight$ = this.getHighlight$();
        this.droppedFiles$ = this.getDroppedFiles$();
    }
    ngAfterViewInit() {
        this.droppedFiles$.pipe(takeUntilDestroy(this)).subscribe(fileList => {
            this.onChange(fileList);
        });
    }
    ngOnDestroy() {
        var _a;
        if ((_a = this.ngControl) === null || _a === void 0 ? void 0 : _a.valueAccessor) {
            // Every time a control is re-created the previous writeValue reference(s) is not cleaned up.
            // So, over time, a lot of these references can be built up. This memory leak is a bug in Angular's implementation of ControlValueAccessor.
            // We hide that problem by assigning an empty function to writeValue every time we destroy the control.
            // An detailed explanation of the problem can be found here: https://github.com/angular/angular/pull/29335
            // The bug issue for it: https://github.com/angular/angular/issues/20007
            this.ngControl.valueAccessor.writeValue = () => { };
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouch = fn;
    }
    writeValue(value) {
        this.internalValue = value !== null && value !== void 0 ? value : null;
    }
    onChange(value) {
        if (!this.isDisabled && value) {
            const newInternalValue = value !== null && value !== void 0 ? value : null;
            // emit value
            this.changeValue.emit(newInternalValue);
            // propagate the change
            if (this.propagateChange) {
                this.internalValue = newInternalValue;
                this.propagateChange(newInternalValue);
            }
        }
    }
    onTouch() {
        if (this.flagPositiveClick) {
            this.flagPositiveClick = false;
        }
        else {
            this.touch.emit();
            if (!this.isDisabled && this.propagateTouch) {
                this.propagateTouch();
            }
        }
    }
    setDisabledState(value) {
        this.isDisabled = value;
    }
    lockOutOnTouch() {
        this.flagPositiveClick = true;
    }
    getDroppedFiles$() {
        return this.dropAreaDropEvent$.pipe(map((e) => e.dataTransfer.files), filter(files => (this.multiple ? files.length > 0 : files.length === 1)), filter(files => Array.from(files).every(file => this.acceptedMimeTypes.includes(file.type))));
    }
    getHighlight$() {
        return merge(merge(this.dropAreaDragEnterEvent$, this.dropAreaDragOverEvent$).pipe(mapTo(true)), merge(this.dropAreaDropEvent$, this.dropAreaDragLeaveEvent$).pipe(mapTo(false))).pipe(
        // This delays un-highlighting the drop zone,
        // first added as a fix to eliminate flickering by dragLeave Events
        distinctUntilChanged(), debounce(startDevice => (startDevice ? EMPTY : timer(100))), distinctUntilChanged());
    }
    getDropEvent$(elementRef, eventName) {
        return fromEvent(elementRef, eventName).pipe(tap((e) => {
            e.preventDefault();
            e.stopPropagation();
        }));
    }
};
InputFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-file',
                template: `
    <div #dropArea class="input-group" [class.highlight]="highlight$ | async">
      <input
        type="text"
        class="form-control"
        [value]="
          internalValue?.length === 1
            ? internalValue[0]?.name
            : internalValue?.length > 1
            ? (tc + '.FILES-SELECTED-COUNT'
              | translate: { count: internalValue?.length })
            : this.multiple
            ? (tc + '.NO-FILES-SELECTED' | translate)
            : (tc + '.NO-FILE-SELECTED' | translate)
        "
        [attr.id]="labelForId"
        [readOnly]="true"
        [class.is-invalid]="
          invalid ||
          (ngControl?.invalid && (ngControl?.touched || form?.submitted))
        "
        [placeholder]="placeholder"
        (blur)="onTouch()"
        (click)="lockOutOnTouch(); fileInput.click()"
      />
      <div class="input-group-append">
        <button
          #btnElement
          type="button"
          class="btn btn-action"
          [disabled]="isDisabled"
          [class.is-invalid]="
            invalid ||
            (ngControl?.invalid && (ngControl?.touched || form?.submitted))
          "
          (blur)="onTouch()"
          (click)="lockOutOnTouch(); fileInput.click()"
        >
          <sof-svg-icon icon="icon-folder"></sof-svg-icon>
        </button>
      </div>
    </div>
    <input
      #fileInput
      type="file"
      class="d-none"
      [attr.multiple]="multiple"
      [attr.accept]="acceptedMimeTypes"
      [disabled]="isDisabled"
      (input)="onChange($event.target?.files)"
    />
  `,
                providers: [{ provide: SOF_FOCUS_COMPONENT, useExisting: InputFileComponent_1 }],
                styles: [".highlight input{border-left-color:#343a40}.highlight .input-group-append button,.highlight input{background-color:#f8f9fa;border-top-color:#343a40;border-bottom-color:#343a40}.highlight .input-group-append button{border-right-color:#343a40}.input-group input{border-right:unset;cursor:default}.input-group.is-invalid:focus-within,.input-group:focus-within{outline:0}.input-group:focus-within .input-group-append .btn{box-shadow:unset;border-left-color:transparent}.input-group .form-control:focus{box-shadow:unset}.input-group .form-control.is-invalid:focus{border-right-color:transparent;box-shadow:unset}button{color:#555;cursor:pointer;display:flex;justify-content:center;border-top:1px solid #ced4da;border-bottom:1px solid #ced4da;border-right:1px solid #ced4da;align-items:center;background:#fff}button.btn.focus,button.btn:focus{box-shadow:none}:host{display:flex}:host .form-control.is-invalid,:host .was-validated .form-control:invalid{background-position:right 10px center}"]
            },] }
];
InputFileComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputFileComponent.propDecorators = {
    tc: [{ type: Input }],
    labelForId: [{ type: Input }],
    placeholder: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    droppable: [{ type: Input }],
    multiple: [{ type: Input }],
    acceptedMimeTypes: [{ type: Input }],
    value: [{ type: Input }],
    changeValue: [{ type: Output }],
    touch: [{ type: Output }],
    dropArea: [{ type: ViewChild, args: ['dropArea', { static: true },] }],
    btnElement: [{ type: ViewChild, args: ['btnElement',] }]
};
InputFileComponent = InputFileComponent_1 = __decorate([
    UntilDestroy()
], InputFileComponent);

class InputFileModule {
}
InputFileModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SvgIconModule, TranslateModule],
                declarations: [InputFileComponent],
                exports: [InputFileComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputFileComponent, InputFileModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-file.js.map
