import { Component, Host, Optional, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { InputNumberBaseDirective } from '@sofico-framework/ui-kit/components/number-base';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
export class InputNumberComponent extends InputNumberBaseDirective {
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
InputNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-number',
                template: `
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
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputNumberComponent }
                ]
            },] }
];
InputNumberComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputNumberComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtbnVtYmVyL2lucHV0LW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxJQUFJLEVBRUosUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFFTCxtQkFBbUIsRUFDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQTBCbkQsTUFBTSxPQUFPLG9CQUNYLFNBQVEsd0JBQXdCO0lBR2hDLFlBQ3FCLElBQW1CLEVBQ1gsU0FBb0I7UUFFL0MsS0FBSyxFQUFFLENBQUM7UUFIVyxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ1gsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUcvQyxJQUFJLFNBQVMsRUFBRTtZQUNiLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsV0FBVzs7UUFDVCxVQUFJLElBQUksQ0FBQyxTQUFTLDBDQUFFLGFBQWEsRUFBRTtZQUNqQyw2RkFBNkY7WUFDN0YsMklBQTJJO1lBQzNJLHVHQUF1RztZQUN2RywwR0FBMEc7WUFDMUcsd0VBQXdFO1lBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRTtpQkFDcEU7YUFDRjs7O1lBOUJRLGFBQWEsdUJBb0NqQixRQUFRO1lBckNKLFNBQVMsdUJBc0NiLFFBQVEsWUFBSSxJQUFJOzs7MkJBSGxCLFNBQVMsU0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZm9ybSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlckJhc2VEaXJlY3RpdmUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9udW1iZXItYmFzZSc7XG5pbXBvcnQge1xuICBPblNvZkZvY3VzLFxuICBTT0ZfRk9DVVNfQ09NUE9ORU5UXG59IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9kaXJlY3RpdmVzL2ZvY3VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWlucHV0LW51bWJlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlucHV0XG4gICAgICAjaW5wdXRFbGVtZW50XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBpbnB1dG1vZGU9XCJkZWNpbWFsXCJcbiAgICAgIFthdHRyLmlkXT1cImxhYmVsRm9ySWRcIlxuICAgICAgW3ZhbHVlXT1cImludGVybmFsVmFsdWVcIlxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwiXG4gICAgICAgIGludmFsaWQgfHxcbiAgICAgICAgKG5nQ29udHJvbD8uaW52YWxpZCAmJiAobmdDb250cm9sPy50b3VjaGVkIHx8IGZvcm0/LnN1Ym1pdHRlZCkpXG4gICAgICBcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgIChpbnB1dCk9XCJvbkNoYW5nZSgkZXZlbnQudGFyZ2V0Py52YWx1ZSlcIlxuICAgICAgKGJsdXIpPVwib25Ub3VjaCgpXCJcbiAgICAvPlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBJbnB1dE51bWJlckNvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXROdW1iZXJDb21wb25lbnRcbiAgZXh0ZW5kcyBJbnB1dE51bWJlckJhc2VEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uU29mRm9jdXMge1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBmb3JtOiBGb3JtQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKG5nQ29udHJvbCkge1xuICAgICAgbmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHNvZkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbD8udmFsdWVBY2Nlc3Nvcikge1xuICAgICAgLy8gRXZlcnkgdGltZSBhIGNvbnRyb2wgaXMgcmUtY3JlYXRlZCB0aGUgcHJldmlvdXMgd3JpdGVWYWx1ZSByZWZlcmVuY2UocykgaXMgbm90IGNsZWFuZWQgdXAuXG4gICAgICAvLyBTbywgb3ZlciB0aW1lLCBhIGxvdCBvZiB0aGVzZSByZWZlcmVuY2VzIGNhbiBiZSBidWlsdCB1cC4gVGhpcyBtZW1vcnkgbGVhayBpcyBhIGJ1ZyBpbiBBbmd1bGFyJ3MgaW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAgICAvLyBXZSBoaWRlIHRoYXQgcHJvYmxlbSBieSBhc3NpZ25pbmcgYW4gZW1wdHkgZnVuY3Rpb24gdG8gd3JpdGVWYWx1ZSBldmVyeSB0aW1lIHdlIGRlc3Ryb3kgdGhlIGNvbnRyb2wuXG4gICAgICAvLyBBbiBkZXRhaWxlZCBleHBsYW5hdGlvbiBvZiB0aGUgcHJvYmxlbSBjYW4gYmUgZm91bmQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzI5MzM1XG4gICAgICAvLyBUaGUgYnVnIGlzc3VlIGZvciBpdDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjAwMDdcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSA9ICgpID0+IHt9O1xuICAgIH1cbiAgfVxufVxuIl19