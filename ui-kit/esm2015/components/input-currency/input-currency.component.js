import { Component, Host, Input, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { InputNumberBaseDirective } from '@sofico-framework/ui-kit/components/number-base';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
export class InputCurrencyComponent extends InputNumberBaseDirective {
    constructor(form, ngControl) {
        super();
        this.form = form;
        this.ngControl = ngControl;
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
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
}
InputCurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-currency',
                template: `
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">{{
          currencyCode | sofCurrencySymbol
        }}</span>
      </div>
      <input
        #inputElement
        type="text"
        inputmode="decimal"
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
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputCurrencyComponent }
                ]
            },] }
];
InputCurrencyComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputCurrencyComponent.propDecorators = {
    currencyCode: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9pbnB1dC1jdXJyZW5jeS9pbnB1dC1jdXJyZW5jeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFFTCxtQkFBbUIsRUFDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQWlDbkQsTUFBTSxPQUFPLHNCQUNYLFNBQVEsd0JBQXdCO0lBSWhDLFlBQ3FCLElBQW1CLEVBQ1gsU0FBb0I7UUFFL0MsS0FBSyxFQUFFLENBQUM7UUFIVyxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ1gsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUcvQyxJQUFJLFNBQVMsRUFBRTtZQUNiLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsV0FBVzs7UUFDVCxVQUFJLElBQUksQ0FBQyxTQUFTLDBDQUFFLGFBQWEsRUFBRTtZQUNqQyw2RkFBNkY7WUFDN0YsMklBQTJJO1lBQzNJLHVHQUF1RztZQUN2RywwR0FBMEc7WUFDMUcsd0VBQXdFO1lBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JUO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUU7aUJBQ3RFO2FBQ0Y7OztZQXJDUSxhQUFhLHVCQTRDakIsUUFBUTtZQTdDSixTQUFTLHVCQThDYixRQUFRLFlBQUksSUFBSTs7OzJCQUpsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IHsgSW5wdXROdW1iZXJCYXNlRGlyZWN0aXZlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvbnVtYmVyLWJhc2UnO1xuaW1wb3J0IHtcbiAgT25Tb2ZGb2N1cyxcbiAgU09GX0ZPQ1VTX0NPTVBPTkVOVFxufSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvZGlyZWN0aXZlcy9mb2N1cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1pbnB1dC1jdXJyZW5jeScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj57e1xuICAgICAgICAgIGN1cnJlbmN5Q29kZSB8IHNvZkN1cnJlbmN5U3ltYm9sXG4gICAgICAgIH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8aW5wdXRcbiAgICAgICAgI2lucHV0RWxlbWVudFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlucHV0bW9kZT1cImRlY2ltYWxcIlxuICAgICAgICBbYXR0ci5pZF09XCJsYWJlbEZvcklkXCJcbiAgICAgICAgW3ZhbHVlXT1cImludGVybmFsVmFsdWVcIlxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cIlxuICAgICAgICAgIGludmFsaWQgfHxcbiAgICAgICAgICAobmdDb250cm9sPy5pbnZhbGlkICYmIChuZ0NvbnRyb2w/LnRvdWNoZWQgfHwgZm9ybT8uc3VibWl0dGVkKSlcbiAgICAgICAgXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgICAgICAoaW5wdXQpPVwib25DaGFuZ2UoJGV2ZW50LnRhcmdldD8udmFsdWUpXCJcbiAgICAgICAgKGJsdXIpPVwib25Ub3VjaCgpXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogU09GX0ZPQ1VTX0NPTVBPTkVOVCwgdXNlRXhpc3Rpbmc6IElucHV0Q3VycmVuY3lDb21wb25lbnQgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q3VycmVuY3lDb21wb25lbnRcbiAgZXh0ZW5kcyBJbnB1dE51bWJlckJhc2VEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uU29mRm9jdXMge1xuICBASW5wdXQoKSBjdXJyZW5jeUNvZGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZm9ybTogRm9ybUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIGlmIChuZ0NvbnRyb2wpIHtcbiAgICAgIG5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBzb2ZGb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2w/LnZhbHVlQWNjZXNzb3IpIHtcbiAgICAgIC8vIEV2ZXJ5IHRpbWUgYSBjb250cm9sIGlzIHJlLWNyZWF0ZWQgdGhlIHByZXZpb3VzIHdyaXRlVmFsdWUgcmVmZXJlbmNlKHMpIGlzIG5vdCBjbGVhbmVkIHVwLlxuICAgICAgLy8gU28sIG92ZXIgdGltZSwgYSBsb3Qgb2YgdGhlc2UgcmVmZXJlbmNlcyBjYW4gYmUgYnVpbHQgdXAuIFRoaXMgbWVtb3J5IGxlYWsgaXMgYSBidWcgaW4gQW5ndWxhcidzIGltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgICAgLy8gV2UgaGlkZSB0aGF0IHByb2JsZW0gYnkgYXNzaWduaW5nIGFuIGVtcHR5IGZ1bmN0aW9uIHRvIHdyaXRlVmFsdWUgZXZlcnkgdGltZSB3ZSBkZXN0cm95IHRoZSBjb250cm9sLlxuICAgICAgLy8gQW4gZGV0YWlsZWQgZXhwbGFuYXRpb24gb2YgdGhlIHByb2JsZW0gY2FuIGJlIGZvdW5kIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvcHVsbC8yOTMzNVxuICAgICAgLy8gVGhlIGJ1ZyBpc3N1ZSBmb3IgaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwMDA3XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUgPSAoKSA9PiB7fTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==