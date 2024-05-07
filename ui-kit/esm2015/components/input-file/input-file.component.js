var InputFileComponent_1;
import { __decorate } from "tslib";
import { Component, EventEmitter, Host, Input, Optional, Output, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { EMPTY, fromEvent, merge, timer } from 'rxjs';
import { debounce, distinctUntilChanged, filter, map, mapTo, tap } from 'rxjs/operators';
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
export { InputFileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2lucHV0LWZpbGUvaW5wdXQtZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFFTCxtQkFBbUIsRUFDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQ0wsUUFBUSxFQUNSLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILEtBQUssRUFDTCxHQUFHLEVBQ0osTUFBTSxnQkFBZ0IsQ0FBQztJQTREWCxrQkFBa0IsZ0NBQWxCLGtCQUFrQjtJQW1GN0IsWUFDcUIsSUFBbUIsRUFDWCxTQUFvQjtRQUQ1QixTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ1gsY0FBUyxHQUFULFNBQVMsQ0FBVztRQXBFakQ7O1dBRUc7UUFDTSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQXNCMUI7O1dBRUc7UUFDTSxzQkFBaUIsR0FBYTtZQUNyQyxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLGFBQWE7U0FDZCxDQUFDO1FBU0Y7O1dBRUc7UUFDTyxnQkFBVyxHQUFH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S0wsS0FBSztvQkFTTCxLQUFLOzBCQU9MLE1BQU07b0JBS04sTUFBTTt1QkFFTixTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFFdEMsU0FBUyxTQUFDLFlBQVk7O0FBdEVaLGtCQUFrQjtJQTFEOUIsWUFBWSxFQUFFO0dBMERGLGtCQUFrQixDQXVPOUI7U0F2T1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCB7XG4gIE9uU29mRm9jdXMsXG4gIFNPRl9GT0NVU19DT01QT05FTlRcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2RpcmVjdGl2ZXMvZm9jdXMnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSwgVW50aWxEZXN0cm95IH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5pbXBvcnQgeyBFTVBUWSwgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIG1hcFRvLFxuICB0YXBcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1pbnB1dC1maWxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICNkcm9wQXJlYSBjbGFzcz1cImlucHV0LWdyb3VwXCIgW2NsYXNzLmhpZ2hsaWdodF09XCJoaWdobGlnaHQkIHwgYXN5bmNcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgW3ZhbHVlXT1cIlxuICAgICAgICAgIGludGVybmFsVmFsdWU/Lmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgPyBpbnRlcm5hbFZhbHVlWzBdPy5uYW1lXG4gICAgICAgICAgICA6IGludGVybmFsVmFsdWU/Lmxlbmd0aCA+IDFcbiAgICAgICAgICAgID8gKHRjICsgJy5GSUxFUy1TRUxFQ1RFRC1DT1VOVCdcbiAgICAgICAgICAgICAgfCB0cmFuc2xhdGU6IHsgY291bnQ6IGludGVybmFsVmFsdWU/Lmxlbmd0aCB9KVxuICAgICAgICAgICAgOiB0aGlzLm11bHRpcGxlXG4gICAgICAgICAgICA/ICh0YyArICcuTk8tRklMRVMtU0VMRUNURUQnIHwgdHJhbnNsYXRlKVxuICAgICAgICAgICAgOiAodGMgKyAnLk5PLUZJTEUtU0VMRUNURUQnIHwgdHJhbnNsYXRlKVxuICAgICAgICBcIlxuICAgICAgICBbYXR0ci5pZF09XCJsYWJlbEZvcklkXCJcbiAgICAgICAgW3JlYWRPbmx5XT1cInRydWVcIlxuICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJcbiAgICAgICAgICBpbnZhbGlkIHx8XG4gICAgICAgICAgKG5nQ29udHJvbD8uaW52YWxpZCAmJiAobmdDb250cm9sPy50b3VjaGVkIHx8IGZvcm0/LnN1Ym1pdHRlZCkpXG4gICAgICAgIFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgIChibHVyKT1cIm9uVG91Y2goKVwiXG4gICAgICAgIChjbGljayk9XCJsb2NrT3V0T25Ub3VjaCgpOyBmaWxlSW5wdXQuY2xpY2soKVwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgI2J0bkVsZW1lbnRcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tYWN0aW9uXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwiXG4gICAgICAgICAgICBpbnZhbGlkIHx8XG4gICAgICAgICAgICAobmdDb250cm9sPy5pbnZhbGlkICYmIChuZ0NvbnRyb2w/LnRvdWNoZWQgfHwgZm9ybT8uc3VibWl0dGVkKSlcbiAgICAgICAgICBcIlxuICAgICAgICAgIChibHVyKT1cIm9uVG91Y2goKVwiXG4gICAgICAgICAgKGNsaWNrKT1cImxvY2tPdXRPblRvdWNoKCk7IGZpbGVJbnB1dC5jbGljaygpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzb2Ytc3ZnLWljb24gaWNvbj1cImljb24tZm9sZGVyXCI+PC9zb2Ytc3ZnLWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGlucHV0XG4gICAgICAjZmlsZUlucHV0XG4gICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICBjbGFzcz1cImQtbm9uZVwiXG4gICAgICBbYXR0ci5tdWx0aXBsZV09XCJtdWx0aXBsZVwiXG4gICAgICBbYXR0ci5hY2NlcHRdPVwiYWNjZXB0ZWRNaW1lVHlwZXNcIlxuICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgICAgKGlucHV0KT1cIm9uQ2hhbmdlKCRldmVudC50YXJnZXQ/LmZpbGVzKVwiXG4gICAgLz5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtZmlsZS5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBJbnB1dEZpbGVDb21wb25lbnQgfV1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRGaWxlQ29tcG9uZW50XG4gIGltcGxlbWVudHNcbiAgICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBPbkluaXQsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Tb2ZGb2N1cyB7XG4gIC8qKlxuICAgKiBUcmFuc2xhdGlvbiBjb250ZXh0XG4gICAqL1xuICBASW5wdXQoKSB0Yzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGlucHV0IHRvIGNvbm5lY3QgdG8gYSBsYWJlbCB0YWcuXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbEZvcklkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwbGFjZWhvbGRlciBvZiB0aGUgaW5wdXQuXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIC8qKlxuICAgKiAgRGV0ZXJtaW5lcyBpZiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGluIGEgdmFsaWQgc3RhdGUuXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbGxvdyB0aGUgZHJvcHBpbmcgZmlsZShzKS5cbiAgICovXG4gIEBJbnB1dCgpIGRyb3BwYWJsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWxsb3cgdGhlIHNlbGVjdGlvbiBvZiBtb3JlIHRoYW4gb25lIGZpbGUuXG4gICAqL1xuICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWxsb3dlZCBmaWxlIHR5cGVzLlxuICAgKi9cbiAgQElucHV0KCkgYWNjZXB0ZWRNaW1lVHlwZXM6IHN0cmluZ1tdID0gW1xuICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICdpbWFnZS9qcGVnJyxcbiAgICAnaW1hZ2UveC1wbmcnXG4gIF07XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHZhbHVlKHZhbHVlOiBGaWxlTGlzdCkge1xuICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHRoZSB2YWx1ZSB3aGVuIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVMaXN0PigpO1xuXG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgdGhhdCB3aWxsIGVtaXQgd2hlbiBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgdG91Y2ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdkcm9wQXJlYScsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGRyb3BBcmVhOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdidG5FbGVtZW50JykgYnRuRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBpbnRlcm5hbFZhbHVlOiBGaWxlTGlzdCA9IG51bGw7XG4gIHByb3BhZ2F0ZUNoYW5nZTogYW55O1xuICBwcm9wYWdhdGVUb3VjaDogYW55O1xuICBkcm9wQXJlYURyb3BFdmVudCQ6IE9ic2VydmFibGU8RHJhZ0V2ZW50PjtcbiAgZHJvcEFyZWFEcmFnRW50ZXJFdmVudCQ6IE9ic2VydmFibGU8RHJhZ0V2ZW50PjtcbiAgZHJvcEFyZWFEcmFnT3ZlckV2ZW50JDogT2JzZXJ2YWJsZTxEcmFnRXZlbnQ+O1xuICBkcm9wQXJlYURyYWdMZWF2ZUV2ZW50JDogT2JzZXJ2YWJsZTxEcmFnRXZlbnQ+O1xuICBoaWdobGlnaHQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBkcm9wcGVkRmlsZXMkOiBPYnNlcnZhYmxlPEZpbGVMaXN0PjtcbiAgcHJpdmF0ZSBmbGFnUG9zaXRpdmVDbGljazogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZm9ybTogRm9ybUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbFxuICApIHtcbiAgICBpZiAobmdDb250cm9sKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgc29mRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5idG5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZHJvcEFyZWFEcm9wRXZlbnQkID0gdGhpcy5nZXREcm9wRXZlbnQkKFxuICAgICAgdGhpcy5kcm9wQXJlYS5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2Ryb3AnXG4gICAgKTtcbiAgICB0aGlzLmRyb3BBcmVhRHJhZ0VudGVyRXZlbnQkID0gdGhpcy5nZXREcm9wRXZlbnQkKFxuICAgICAgdGhpcy5kcm9wQXJlYS5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2RyYWdlbnRlcidcbiAgICApO1xuICAgIHRoaXMuZHJvcEFyZWFEcmFnT3ZlckV2ZW50JCA9IHRoaXMuZ2V0RHJvcEV2ZW50JChcbiAgICAgIHRoaXMuZHJvcEFyZWEubmF0aXZlRWxlbWVudCxcbiAgICAgICdkcmFnb3ZlcidcbiAgICApO1xuICAgIHRoaXMuZHJvcEFyZWFEcmFnTGVhdmVFdmVudCQgPSB0aGlzLmdldERyb3BFdmVudCQoXG4gICAgICB0aGlzLmRyb3BBcmVhLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnZHJhZ2xlYXZlJ1xuICAgICk7XG5cbiAgICB0aGlzLmhpZ2hsaWdodCQgPSB0aGlzLmdldEhpZ2hsaWdodCQoKTtcblxuICAgIHRoaXMuZHJvcHBlZEZpbGVzJCA9IHRoaXMuZ2V0RHJvcHBlZEZpbGVzJCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZHJvcHBlZEZpbGVzJC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpLnN1YnNjcmliZShmaWxlTGlzdCA9PiB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGZpbGVMaXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbD8udmFsdWVBY2Nlc3Nvcikge1xuICAgICAgLy8gRXZlcnkgdGltZSBhIGNvbnRyb2wgaXMgcmUtY3JlYXRlZCB0aGUgcHJldmlvdXMgd3JpdGVWYWx1ZSByZWZlcmVuY2UocykgaXMgbm90IGNsZWFuZWQgdXAuXG4gICAgICAvLyBTbywgb3ZlciB0aW1lLCBhIGxvdCBvZiB0aGVzZSByZWZlcmVuY2VzIGNhbiBiZSBidWlsdCB1cC4gVGhpcyBtZW1vcnkgbGVhayBpcyBhIGJ1ZyBpbiBBbmd1bGFyJ3MgaW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAgICAvLyBXZSBoaWRlIHRoYXQgcHJvYmxlbSBieSBhc3NpZ25pbmcgYW4gZW1wdHkgZnVuY3Rpb24gdG8gd3JpdGVWYWx1ZSBldmVyeSB0aW1lIHdlIGRlc3Ryb3kgdGhlIGNvbnRyb2wuXG4gICAgICAvLyBBbiBkZXRhaWxlZCBleHBsYW5hdGlvbiBvZiB0aGUgcHJvYmxlbSBjYW4gYmUgZm91bmQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzI5MzM1XG4gICAgICAvLyBUaGUgYnVnIGlzc3VlIGZvciBpdDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjAwMDdcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSA9ICgpID0+IHt9O1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVUb3VjaCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRmlsZUxpc3QpOiB2b2lkIHtcbiAgICB0aGlzLmludGVybmFsVmFsdWUgPSB2YWx1ZSA/PyBudWxsO1xuICB9XG5cbiAgb25DaGFuZ2UodmFsdWU6IEZpbGVMaXN0KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgdmFsdWUpIHtcbiAgICAgIGNvbnN0IG5ld0ludGVybmFsVmFsdWUgPSB2YWx1ZSA/PyBudWxsO1xuXG4gICAgICAvLyBlbWl0IHZhbHVlXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlLmVtaXQobmV3SW50ZXJuYWxWYWx1ZSk7XG5cbiAgICAgIC8vIHByb3BhZ2F0ZSB0aGUgY2hhbmdlXG4gICAgICBpZiAodGhpcy5wcm9wYWdhdGVDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gbmV3SW50ZXJuYWxWYWx1ZTtcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UobmV3SW50ZXJuYWxWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mbGFnUG9zaXRpdmVDbGljaykge1xuICAgICAgdGhpcy5mbGFnUG9zaXRpdmVDbGljayA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdWNoLmVtaXQoKTtcblxuICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgdGhpcy5wcm9wYWdhdGVUb3VjaCkge1xuICAgICAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IHZhbHVlO1xuICB9XG5cbiAgbG9ja091dE9uVG91Y2goKTogdm9pZCB7XG4gICAgdGhpcy5mbGFnUG9zaXRpdmVDbGljayA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIGdldERyb3BwZWRGaWxlcyQoKTogT2JzZXJ2YWJsZTxGaWxlTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmRyb3BBcmVhRHJvcEV2ZW50JC5waXBlKFxuICAgICAgbWFwKChlOiBEcmFnRXZlbnQpID0+IGUuZGF0YVRyYW5zZmVyLmZpbGVzKSxcbiAgICAgIGZpbHRlcihmaWxlcyA9PiAodGhpcy5tdWx0aXBsZSA/IGZpbGVzLmxlbmd0aCA+IDAgOiBmaWxlcy5sZW5ndGggPT09IDEpKSxcbiAgICAgIGZpbHRlcihmaWxlcyA9PlxuICAgICAgICBBcnJheS5mcm9tKGZpbGVzKS5ldmVyeShmaWxlID0+XG4gICAgICAgICAgdGhpcy5hY2NlcHRlZE1pbWVUeXBlcy5pbmNsdWRlcyhmaWxlLnR5cGUpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIaWdobGlnaHQkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBtZXJnZShcbiAgICAgIG1lcmdlKHRoaXMuZHJvcEFyZWFEcmFnRW50ZXJFdmVudCQsIHRoaXMuZHJvcEFyZWFEcmFnT3ZlckV2ZW50JCkucGlwZShcbiAgICAgICAgbWFwVG8odHJ1ZSlcbiAgICAgICksXG4gICAgICBtZXJnZSh0aGlzLmRyb3BBcmVhRHJvcEV2ZW50JCwgdGhpcy5kcm9wQXJlYURyYWdMZWF2ZUV2ZW50JCkucGlwZShcbiAgICAgICAgbWFwVG8oZmFsc2UpXG4gICAgICApXG4gICAgKS5waXBlKFxuICAgICAgLy8gVGhpcyBkZWxheXMgdW4taGlnaGxpZ2h0aW5nIHRoZSBkcm9wIHpvbmUsXG4gICAgICAvLyBmaXJzdCBhZGRlZCBhcyBhIGZpeCB0byBlbGltaW5hdGUgZmxpY2tlcmluZyBieSBkcmFnTGVhdmUgRXZlbnRzXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgZGVib3VuY2Uoc3RhcnREZXZpY2UgPT4gKHN0YXJ0RGV2aWNlID8gRU1QVFkgOiB0aW1lcigxMDApKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RHJvcEV2ZW50JChcbiAgICBlbGVtZW50UmVmOiBhbnksXG4gICAgZXZlbnROYW1lOlxuICAgICAgfCAnZHJhZydcbiAgICAgIHwgJ2RyYWdlbmQnXG4gICAgICB8ICdkcmFnZW50ZXInXG4gICAgICB8ICdkcmFnZXhpdCdcbiAgICAgIHwgJ2RyYWdsZWF2ZSdcbiAgICAgIHwgJ2RyYWdvdmVyJ1xuICAgICAgfCAnZHJhZ3N0YXJ0J1xuICAgICAgfCAnZHJvcCdcbiAgKTogT2JzZXJ2YWJsZTxEcmFnRXZlbnQ+IHtcbiAgICByZXR1cm4gZnJvbUV2ZW50KGVsZW1lbnRSZWYsIGV2ZW50TmFtZSkucGlwZShcbiAgICAgIHRhcCgoZTogRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSlcbiAgICApIGFzIE9ic2VydmFibGU8RHJhZ0V2ZW50PjtcbiAgfVxufVxuIl19