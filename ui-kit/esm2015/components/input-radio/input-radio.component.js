import { Component, EventEmitter, Input, Optional, Output, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
let uniqueRadioCounter = 0;
export class InputRadioComponent {
    constructor(form, ngControl) {
        this.form = form;
        this.ngControl = ngControl;
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        this.labelForId = 'sof-input-radio-' + uniqueRadioCounter; // generate unique id
        ++uniqueRadioCounter;
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    sofFocus() {
        this.inputElement.nativeElement.focus();
    }
    onChange(e) {
        if (this.changeFn) {
            this.changeFn(e);
        }
        this.changeValue.emit(e);
    }
    writeValue(obj) { }
    registerOnChange(fn) {
        this.changeFn = fn;
    }
    registerOnTouched(fn) {
        this.touchFn = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
}
InputRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-radio',
                template: `
    <div class="custom-control custom-radio">
      <input
        #inputElement
        type="radio"
        [attr.id]="labelForId"
        [value]="value"
        [disabled]="isDisabled"
        [attr.name]="name"
        [checked]="value === ngControl?.value || checked"
        (change)="onChange(value)"
        [class.is-invalid]="
          invalid ||
          (ngControl?.invalid && (ngControl?.touched || form?.submitted))
        "
        class="custom-control-input"
      />
      <label class="custom-control-label" [attr.for]="labelForId">
        <ng-content></ng-content>
      </label>
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputRadioComponent }
                ],
                styles: [""]
            },] }
];
InputRadioComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }] }
];
InputRadioComponent.propDecorators = {
    value: [{ type: Input }],
    name: [{ type: Input }],
    checked: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    changeValue: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9pbnB1dC1yYWRpby9pbnB1dC1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFFTCxtQkFBbUIsRUFDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUVuRCxJQUFJLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQStCM0IsTUFBTSxPQUFPLG1CQUFtQjtJQXNDOUIsWUFDcUIsSUFBbUIsRUFDbkIsU0FBb0I7UUFEcEIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBZHpDOztXQUVHO1FBQ08sZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSWhELGVBQVUsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLHFCQUFxQjtRQVN6RSxFQUFFLGtCQUFrQixDQUFDO1FBQ3JCLElBQUksU0FBUyxFQUFFO1lBQ2IsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFXLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBTTtRQUNiLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFRLElBQVMsQ0FBQztJQUU3QixnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDOzs7WUFwR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJUO2dCQUVELFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUU7aUJBQ25FOzthQUNGOzs7WUFwQ1EsYUFBYSx1QkE0RWpCLFFBQVE7WUE3RWtCLFNBQVMsdUJBOEVuQyxRQUFROzs7b0JBcENWLEtBQUs7bUJBS0wsS0FBSztzQkFLTCxLQUFLO3lCQUtMLEtBQUs7c0JBS0wsS0FBSzswQkFLTCxNQUFNOzJCQUVOLFNBQVMsU0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IHtcbiAgT25Tb2ZGb2N1cyxcbiAgU09GX0ZPQ1VTX0NPTVBPTkVOVFxufSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvZGlyZWN0aXZlcy9mb2N1cyc7XG5cbmxldCB1bmlxdWVSYWRpb0NvdW50ZXIgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtaW5wdXQtcmFkaW8nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW9cIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICAjaW5wdXRFbGVtZW50XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIFthdHRyLmlkXT1cImxhYmVsRm9ySWRcIlxuICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXG4gICAgICAgIFtjaGVja2VkXT1cInZhbHVlID09PSBuZ0NvbnRyb2w/LnZhbHVlIHx8IGNoZWNrZWRcIlxuICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKHZhbHVlKVwiXG4gICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cIlxuICAgICAgICAgIGludmFsaWQgfHxcbiAgICAgICAgICAobmdDb250cm9sPy5pbnZhbGlkICYmIChuZ0NvbnRyb2w/LnRvdWNoZWQgfHwgZm9ybT8uc3VibWl0dGVkKSlcbiAgICAgICAgXCJcbiAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXG4gICAgICAvPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBbYXR0ci5mb3JdPVwibGFiZWxGb3JJZFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1yYWRpby5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBJbnB1dFJhZGlvQ29tcG9uZW50IH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFJhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uU29mRm9jdXMge1xuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZTogYW55O1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBuYW1lIG9mIHRoZSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNvbnRyb2wgaXMgY2hlY2tlZCBvciBub3QuXG4gICAqL1xuICBASW5wdXQoKSBjaGVja2VkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgRGV0ZXJtaW5lcyBpZiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGluIGEgdmFsaWQgc3RhdGUuXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgdGhhdCB3aWxsIGVtaXQgdGhlIHZhbHVlIHdoZW4gY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2VWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcblxuICBsYWJlbEZvcklkID0gJ3NvZi1pbnB1dC1yYWRpby0nICsgdW5pcXVlUmFkaW9Db3VudGVyOyAvLyBnZW5lcmF0ZSB1bmlxdWUgaWRcblxuICBjaGFuZ2VGbjtcbiAgdG91Y2hGbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZm9ybTogRm9ybUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2xcbiAgKSB7XG4gICAgKyt1bmlxdWVSYWRpb0NvdW50ZXI7XG4gICAgaWYgKG5nQ29udHJvbCkge1xuICAgICAgbmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzIGFzIGFueTtcbiAgICB9XG4gIH1cblxuICBzb2ZGb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBvbkNoYW5nZShlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VGbikge1xuICAgICAgdGhpcy5jaGFuZ2VGbihlKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZS5lbWl0KGUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge31cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy50b3VjaEZuID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59XG4iXX0=