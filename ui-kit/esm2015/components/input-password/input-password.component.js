import { Component, EventEmitter, Host, Input, Optional, Output, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
export class InputPasswordComponent {
    constructor(form, ngControl) {
        this.form = form;
        this.ngControl = ngControl;
        this.showPlainText = false;
        /**
         * The placeholder of the input.
         */
        this.placeholder = '';
        /**
         * The autocomplete of the input.
         */
        this.autocomplete = '';
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
        this.inputElement.nativeElement.focus();
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
        this.showPlainText = false;
        this.isDisabled = value;
    }
    toggle() {
        this.showPlainText = !this.showPlainText;
    }
}
InputPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-password',
                template: `
    <div class="input-group">
      <input
        #inputElement
        [attr.type]="showPlainText ? 'text' : 'password'"
        [attr.id]="labelForId"
        [attr.autocomplete]="autocomplete"
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
      <div class="input-group-append">
        <button
          class="btn btn-action"
          [class.is-invalid]="
            invalid ||
            (ngControl?.invalid && (ngControl?.touched || form?.submitted))
          "
          (click)="toggle()"
          type="button"
          [disabled]="isDisabled"
        >
          <sof-svg-icon icon="icon-eye" *ngIf="!showPlainText"></sof-svg-icon>
          <sof-svg-icon
            icon="icon-eye-crossed"
            *ngIf="showPlainText"
          ></sof-svg-icon>
        </button>
      </div>
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputPasswordComponent }
                ],
                styles: [".input-group input{border-right:unset}.input-group.is-invalid:focus-within,.input-group:focus-within{outline:0}.input-group:focus-within .input-group-append .btn{box-shadow:unset;border-left-color:transparent}.input-group .form-control:focus{box-shadow:unset}.input-group .form-control.is-invalid:focus{border-right-color:transparent;box-shadow:unset}button{color:#555;cursor:pointer;display:flex;justify-content:center;border-top:1px solid #ced4da;border-bottom:1px solid #ced4da;border-right:1px solid #ced4da;align-items:center;background:#fff}button.btn.focus,button.btn:focus{box-shadow:none}:host{display:flex}:host .form-control.is-invalid,:host .was-validated .form-control:invalid{background-position:right 10px center}"]
            },] }
];
InputPasswordComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputPasswordComponent.propDecorators = {
    labelForId: [{ type: Input }],
    value: [{ type: Input }],
    placeholder: [{ type: Input }],
    autocomplete: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    changeValue: [{ type: Output }],
    touch: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9pbnB1dC1wYXNzd29yZC9pbnB1dC1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUErQ25ELE1BQU0sT0FBTyxzQkFBc0I7SUFtRGpDLFlBQ3FCLElBQW1CLEVBQ1gsU0FBb0I7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNYLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFuRGpELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBYXRCOztXQUVHO1FBQ00sZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFMUI7O1dBRUc7UUFDTSxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQVkzQjs7V0FFRztRQUNPLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVuRDs7V0FFRztRQUNPLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSTFDLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBUTNCLElBQUksU0FBUyxFQUFFO1lBQ2IsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBbEREOztPQUVHO0lBQ0gsSUFBYSxLQUFLLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUErQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXOztRQUNULFVBQUksSUFBSSxDQUFDLFNBQVMsMENBQUUsYUFBYSxFQUFFO1lBQ2pDLDZGQUE2RjtZQUM3RiwySUFBMkk7WUFDM0ksdUdBQXVHO1lBQ3ZHLDBHQUEwRztZQUMxRyx3RUFBd0U7WUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsTUFBTSxnQkFBZ0IsR0FBRyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxJQUFJLENBQUM7WUFFdkMsYUFBYTtZQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFeEMsdUJBQXVCO1lBQ3ZCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMzQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7OztZQWxLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUNUO2dCQUVELFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUU7aUJBQ3RFOzthQUNGOzs7WUFsRFEsYUFBYSx1QkF1R2pCLFFBQVE7WUF4R2tCLFNBQVMsdUJBeUduQyxRQUFRLFlBQUksSUFBSTs7O3lCQS9DbEIsS0FBSztvQkFLTCxLQUFLOzBCQU9MLEtBQUs7MkJBS0wsS0FBSzt5QkFLTCxLQUFLO3NCQUtMLEtBQUs7MEJBS0wsTUFBTTtvQkFLTixNQUFNOzJCQUVOLFNBQVMsU0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZm9ybSc7XG5pbXBvcnQge1xuICBPblNvZkZvY3VzLFxuICBTT0ZfRk9DVVNfQ09NUE9ORU5UXG59IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9kaXJlY3RpdmVzL2ZvY3VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWlucHV0LXBhc3N3b3JkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICAjaW5wdXRFbGVtZW50XG4gICAgICAgIFthdHRyLnR5cGVdPVwic2hvd1BsYWluVGV4dCA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcIlxuICAgICAgICBbYXR0ci5pZF09XCJsYWJlbEZvcklkXCJcbiAgICAgICAgW2F0dHIuYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgIFt2YWx1ZV09XCJpbnRlcm5hbFZhbHVlXCJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJcbiAgICAgICAgICBpbnZhbGlkIHx8XG4gICAgICAgICAgKG5nQ29udHJvbD8uaW52YWxpZCAmJiAobmdDb250cm9sPy50b3VjaGVkIHx8IGZvcm0/LnN1Ym1pdHRlZCkpXG4gICAgICAgIFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgICAgKGlucHV0KT1cIm9uQ2hhbmdlKCRldmVudC50YXJnZXQ/LnZhbHVlKVwiXG4gICAgICAgIChibHVyKT1cIm9uVG91Y2goKVwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWFjdGlvblwiXG4gICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwiXG4gICAgICAgICAgICBpbnZhbGlkIHx8XG4gICAgICAgICAgICAobmdDb250cm9sPy5pbnZhbGlkICYmIChuZ0NvbnRyb2w/LnRvdWNoZWQgfHwgZm9ybT8uc3VibWl0dGVkKSlcbiAgICAgICAgICBcIlxuICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUoKVwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNvZi1zdmctaWNvbiBpY29uPVwiaWNvbi1leWVcIiAqbmdJZj1cIiFzaG93UGxhaW5UZXh0XCI+PC9zb2Ytc3ZnLWljb24+XG4gICAgICAgICAgPHNvZi1zdmctaWNvblxuICAgICAgICAgICAgaWNvbj1cImljb24tZXllLWNyb3NzZWRcIlxuICAgICAgICAgICAgKm5nSWY9XCJzaG93UGxhaW5UZXh0XCJcbiAgICAgICAgICA+PC9zb2Ytc3ZnLWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogU09GX0ZPQ1VTX0NPTVBPTkVOVCwgdXNlRXhpc3Rpbmc6IElucHV0UGFzc3dvcmRDb21wb25lbnQgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0UGFzc3dvcmRDb21wb25lbnRcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBPblNvZkZvY3VzIHtcbiAgc2hvd1BsYWluVGV4dCA9IGZhbHNlO1xuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBpbnB1dCB0byBjb25uZWN0IHRvIGEgbGFiZWwgdGFnLlxuICAgKi9cbiAgQElucHV0KCkgbGFiZWxGb3JJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2Vob2xkZXIgb2YgdGhlIGlucHV0LlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcblxuICAvKipcbiAgICogVGhlIGF1dG9jb21wbGV0ZSBvZiB0aGUgaW5wdXQuXG4gICAqL1xuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSAnJztcblxuICAvKipcbiAgICogIERldGVybWluZXMgaWYgdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBpbnB1dCBpcyBpbiBhIHZhbGlkIHN0YXRlLlxuICAgKi9cbiAgQElucHV0KCkgaW52YWxpZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHRoZSB2YWx1ZSB3aGVuIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHdoZW4gY29udHJvbCBpcyB0b3VjaGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIHRvdWNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIGludGVybmFsVmFsdWU6IHN0cmluZyA9IG51bGw7XG4gIHByb3BhZ2F0ZUNoYW5nZTogYW55O1xuICBwcm9wYWdhdGVUb3VjaDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBmb3JtOiBGb3JtQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sXG4gICkge1xuICAgIGlmIChuZ0NvbnRyb2wpIHtcbiAgICAgIG5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBzb2ZGb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2w/LnZhbHVlQWNjZXNzb3IpIHtcbiAgICAgIC8vIEV2ZXJ5IHRpbWUgYSBjb250cm9sIGlzIHJlLWNyZWF0ZWQgdGhlIHByZXZpb3VzIHdyaXRlVmFsdWUgcmVmZXJlbmNlKHMpIGlzIG5vdCBjbGVhbmVkIHVwLlxuICAgICAgLy8gU28sIG92ZXIgdGltZSwgYSBsb3Qgb2YgdGhlc2UgcmVmZXJlbmNlcyBjYW4gYmUgYnVpbHQgdXAuIFRoaXMgbWVtb3J5IGxlYWsgaXMgYSBidWcgaW4gQW5ndWxhcidzIGltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgICAgLy8gV2UgaGlkZSB0aGF0IHByb2JsZW0gYnkgYXNzaWduaW5nIGFuIGVtcHR5IGZ1bmN0aW9uIHRvIHdyaXRlVmFsdWUgZXZlcnkgdGltZSB3ZSBkZXN0cm95IHRoZSBjb250cm9sLlxuICAgICAgLy8gQW4gZGV0YWlsZWQgZXhwbGFuYXRpb24gb2YgdGhlIHByb2JsZW0gY2FuIGJlIGZvdW5kIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvcHVsbC8yOTMzNVxuICAgICAgLy8gVGhlIGJ1ZyBpc3N1ZSBmb3IgaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwMDA3XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUgPSAoKSA9PiB7fTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlVG91Y2ggPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlID8/IG51bGw7XG4gIH1cblxuICBvbkNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IG5ld0ludGVybmFsVmFsdWUgPSB2YWx1ZSA/PyBudWxsO1xuXG4gICAgICAvLyBlbWl0IHZhbHVlXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlLmVtaXQobmV3SW50ZXJuYWxWYWx1ZSk7XG5cbiAgICAgIC8vIHByb3BhZ2F0ZSB0aGUgY2hhbmdlXG4gICAgICBpZiAodGhpcy5wcm9wYWdhdGVDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gbmV3SW50ZXJuYWxWYWx1ZTtcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UobmV3SW50ZXJuYWxWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdWNoLmVtaXQoKTtcblxuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmIHRoaXMucHJvcGFnYXRlVG91Y2gpIHtcbiAgICAgIHRoaXMucHJvcGFnYXRlVG91Y2goKTtcbiAgICB9XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0ID0gZmFsc2U7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gdmFsdWU7XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0ID0gIXRoaXMuc2hvd1BsYWluVGV4dDtcbiAgfVxufVxuIl19