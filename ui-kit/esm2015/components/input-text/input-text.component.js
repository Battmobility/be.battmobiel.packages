import { Component, EventEmitter, Host, Input, Optional, Output, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
export class InputTextComponent {
    constructor(form, ngControl) {
        this.form = form;
        this.ngControl = ngControl;
        /**
         * The placeholder of the input.
         */
        this.placeholder = '';
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
        this.htmlInputElement.nativeElement.focus();
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
        if (!this.isDisabled) {
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
        this.touch.emit();
        if (!this.isDisabled && this.propagateTouch) {
            this.propagateTouch();
        }
    }
    setDisabledState(value) {
        this.isDisabled = value;
    }
}
InputTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-text',
                template: `
    <input
      #htmlInputElement
      type="text"
      [attr.id]="labelForId"
      [value]="internalValue"
      class="form-control"
      [class.is-invalid]="
        invalid ||
        (ngControl?.invalid && (ngControl?.touched || form?.submitted))
      "
      [placeholder]="placeholder"
      [disabled]="isDisabled"
      (input)="onChange($event.target?.value)"
      (blur)="onTouch()"
    />
  `,
                providers: [{ provide: SOF_FOCUS_COMPONENT, useExisting: InputTextComponent }]
            },] }
];
InputTextComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputTextComponent.propDecorators = {
    labelForId: [{ type: Input }],
    placeholder: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    value: [{ type: Input }],
    changeValue: [{ type: Output }],
    touch: [{ type: Output }],
    htmlInputElement: [{ type: ViewChild, args: ['htmlInputElement',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2lucHV0LXRleHQvaW5wdXQtdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUF1Qm5ELE1BQU0sT0FBTyxrQkFBa0I7SUE0QzdCLFlBQ3FCLElBQW1CLEVBQ1gsU0FBb0I7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNYLGNBQVMsR0FBVCxTQUFTLENBQVc7UUF2Q2pEOztXQUVHO1FBQ00sZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFrQjFCOztXQUVHO1FBQ08sZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRW5EOztXQUVHO1FBQ08sVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFJMUMsa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFRM0IsSUFBSSxTQUFTLEVBQUU7WUFDYixTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNoQztJQUNILENBQUM7SUE5QkQ7O09BRUc7SUFDSCxJQUFhLEtBQUssQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQTJCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsV0FBVzs7UUFDVCxVQUFJLElBQUksQ0FBQyxTQUFTLDBDQUFFLGFBQWEsRUFBRTtZQUNqQyw2RkFBNkY7WUFDN0YsMklBQTJJO1lBQzNJLHVHQUF1RztZQUN2RywwR0FBMEc7WUFDMUcsd0VBQXdFO1lBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksSUFBSSxDQUFDO1lBRXZDLGFBQWE7WUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRXhDLHVCQUF1QjtZQUN2QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUN4QztTQUNGO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7O1lBOUhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLENBQUM7YUFDL0U7OztZQTFCUSxhQUFhLHVCQXdFakIsUUFBUTtZQXpFa0IsU0FBUyx1QkEwRW5DLFFBQVEsWUFBSSxJQUFJOzs7eUJBekNsQixLQUFLOzBCQUtMLEtBQUs7eUJBS0wsS0FBSztzQkFJTCxLQUFLO29CQUtMLEtBQUs7MEJBT0wsTUFBTTtvQkFLTixNQUFNOytCQUVOLFNBQVMsU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCB7XG4gIE9uU29mRm9jdXMsXG4gIFNPRl9GT0NVU19DT01QT05FTlRcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2RpcmVjdGl2ZXMvZm9jdXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtaW5wdXQtdGV4dCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlucHV0XG4gICAgICAjaHRtbElucHV0RWxlbWVudFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgW2F0dHIuaWRdPVwibGFiZWxGb3JJZFwiXG4gICAgICBbdmFsdWVdPVwiaW50ZXJuYWxWYWx1ZVwiXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJcbiAgICAgICAgaW52YWxpZCB8fFxuICAgICAgICAobmdDb250cm9sPy5pbnZhbGlkICYmIChuZ0NvbnRyb2w/LnRvdWNoZWQgfHwgZm9ybT8uc3VibWl0dGVkKSlcbiAgICAgIFwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgICAgKGlucHV0KT1cIm9uQ2hhbmdlKCRldmVudC50YXJnZXQ/LnZhbHVlKVwiXG4gICAgICAoYmx1cik9XCJvblRvdWNoKClcIlxuICAgIC8+XG4gIGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU09GX0ZPQ1VTX0NPTVBPTkVOVCwgdXNlRXhpc3Rpbmc6IElucHV0VGV4dENvbXBvbmVudCB9XVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFRleHRDb21wb25lbnRcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBPblNvZkZvY3VzIHtcbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgaW5wdXQgdG8gY29ubmVjdCB0byBhIGxhYmVsIHRhZy5cbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsRm9ySWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBsYWNlaG9sZGVyIG9mIHRoZSBpbnB1dC5cbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgLyoqXG4gICAqICBEZXRlcm1pbmVzIGlmIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGluIGEgdmFsaWQgc3RhdGUuXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgdGhhdCB3aWxsIGVtaXQgdGhlIHZhbHVlIHdoZW4gY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2VWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgdGhhdCB3aWxsIGVtaXQgd2hlbiBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgdG91Y2ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdodG1sSW5wdXRFbGVtZW50JykgaHRtbElucHV0RWxlbWVudDogRWxlbWVudFJlZjtcblxuICBpbnRlcm5hbFZhbHVlOiBzdHJpbmcgPSBudWxsO1xuICBwcm9wYWdhdGVDaGFuZ2U6IGFueTtcbiAgcHJvcGFnYXRlVG91Y2g6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZm9ybTogRm9ybUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbFxuICApIHtcbiAgICBpZiAobmdDb250cm9sKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgc29mRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5odG1sSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbD8udmFsdWVBY2Nlc3Nvcikge1xuICAgICAgLy8gRXZlcnkgdGltZSBhIGNvbnRyb2wgaXMgcmUtY3JlYXRlZCB0aGUgcHJldmlvdXMgd3JpdGVWYWx1ZSByZWZlcmVuY2UocykgaXMgbm90IGNsZWFuZWQgdXAuXG4gICAgICAvLyBTbywgb3ZlciB0aW1lLCBhIGxvdCBvZiB0aGVzZSByZWZlcmVuY2VzIGNhbiBiZSBidWlsdCB1cC4gVGhpcyBtZW1vcnkgbGVhayBpcyBhIGJ1ZyBpbiBBbmd1bGFyJ3MgaW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAgICAvLyBXZSBoaWRlIHRoYXQgcHJvYmxlbSBieSBhc3NpZ25pbmcgYW4gZW1wdHkgZnVuY3Rpb24gdG8gd3JpdGVWYWx1ZSBldmVyeSB0aW1lIHdlIGRlc3Ryb3kgdGhlIGNvbnRyb2wuXG4gICAgICAvLyBBbiBkZXRhaWxlZCBleHBsYW5hdGlvbiBvZiB0aGUgcHJvYmxlbSBjYW4gYmUgZm91bmQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzI5MzM1XG4gICAgICAvLyBUaGUgYnVnIGlzc3VlIGZvciBpdDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjAwMDdcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSA9ICgpID0+IHt9O1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVUb3VjaCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUgPz8gbnVsbDtcbiAgfVxuXG4gIG9uQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgY29uc3QgbmV3SW50ZXJuYWxWYWx1ZSA9IHZhbHVlID8/IG51bGw7XG5cbiAgICAgIC8vIGVtaXQgdmFsdWVcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWUuZW1pdChuZXdJbnRlcm5hbFZhbHVlKTtcblxuICAgICAgLy8gcHJvcGFnYXRlIHRoZSBjaGFuZ2VcbiAgICAgIGlmICh0aGlzLnByb3BhZ2F0ZUNoYW5nZSkge1xuICAgICAgICB0aGlzLmludGVybmFsVmFsdWUgPSBuZXdJbnRlcm5hbFZhbHVlO1xuICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZShuZXdJbnRlcm5hbFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblRvdWNoKCk6IHZvaWQge1xuICAgIHRoaXMudG91Y2guZW1pdCgpO1xuXG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgdGhpcy5wcm9wYWdhdGVUb3VjaCkge1xuICAgICAgdGhpcy5wcm9wYWdhdGVUb3VjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxufVxuIl19