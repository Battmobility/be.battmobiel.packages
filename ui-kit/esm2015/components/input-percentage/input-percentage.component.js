import { Component, Host, Optional, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { InputNumberBaseDirective } from '@sofico-framework/ui-kit/components/number-base';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { Big } from 'big.js';
export class InputPercentageComponent extends InputNumberBaseDirective {
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
    writeValue(obj) {
        // multiply value by 100 before writing it to the input
        let multipliedBy100 = null;
        try {
            multipliedBy100 = +new Big(obj).mul(100);
        }
        catch (error) { }
        super.writeValue(multipliedBy100);
    }
    onChange(value) {
        // update internal value
        const internalValue = this.updateValueByUserInput(value);
        let inputValueAsDecimalDividedBy100 = null;
        try {
            inputValueAsDecimalDividedBy100 = +new Big(internalValue.replace(/,/g, '.')).div(100);
        }
        catch (error) { }
        // emit value
        this.changeValue.emit(inputValueAsDecimalDividedBy100);
        // propagate the change, divided by 100
        if (this.propagateChange && internalValue !== undefined) {
            this.propagateChange(inputValueAsDecimalDividedBy100 === null
                ? null
                : inputValueAsDecimalDividedBy100);
        }
    }
}
InputPercentageComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-percentage',
                template: `
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">%</span>
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
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputPercentageComponent }
                ]
            },] }
];
InputPercentageComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputPercentageComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGVyY2VudGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2lucHV0LXBlcmNlbnRhZ2UvaW5wdXQtcGVyY2VudGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxJQUFJLEVBRUosUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFFTCxtQkFBbUIsRUFDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBK0I3QixNQUFNLE9BQU8sd0JBQ1gsU0FBUSx3QkFBd0I7SUFHaEMsWUFDcUIsSUFBbUIsRUFDWCxTQUFvQjtRQUUvQyxLQUFLLEVBQUUsQ0FBQztRQUhXLFNBQUksR0FBSixJQUFJLENBQWU7UUFDWCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBRy9DLElBQUksU0FBUyxFQUFFO1lBQ2IsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXOztRQUNULFVBQUksSUFBSSxDQUFDLFNBQVMsMENBQUUsYUFBYSxFQUFFO1lBQ2pDLDZGQUE2RjtZQUM3RiwySUFBMkk7WUFDM0ksdUdBQXVHO1lBQ3ZHLDBHQUEwRztZQUMxRyx3RUFBd0U7WUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsR0FBUTtRQUNqQix1REFBdUQ7UUFDdkQsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUk7WUFDRixlQUFlLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUM7UUFBQyxPQUFPLEtBQUssRUFBRSxHQUFFO1FBQ2xCLEtBQUssQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLHdCQUF3QjtRQUN4QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekQsSUFBSSwrQkFBK0IsR0FBRyxJQUFJLENBQUM7UUFDM0MsSUFBSTtZQUNGLCtCQUErQixHQUFHLENBQUMsSUFBSSxHQUFHLENBQ3hDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUNqQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNaO1FBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRTtRQUVsQixhQUFhO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUV2RCx1Q0FBdUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGVBQWUsQ0FDbEIsK0JBQStCLEtBQUssSUFBSTtnQkFDdEMsQ0FBQyxDQUFDLElBQUk7Z0JBQ04sQ0FBQyxDQUFDLCtCQUErQixDQUNwQyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7WUF6RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLHdCQUF3QixFQUFFO2lCQUN4RTthQUNGOzs7WUFwQ1EsYUFBYSx1QkEwQ2pCLFFBQVE7WUEzQ0osU0FBUyx1QkE0Q2IsUUFBUSxZQUFJLElBQUk7OzsyQkFIbEIsU0FBUyxTQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCB7IElucHV0TnVtYmVyQmFzZURpcmVjdGl2ZSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL251bWJlci1iYXNlJztcbmltcG9ydCB7XG4gIE9uU29mRm9jdXMsXG4gIFNPRl9GT0NVU19DT01QT05FTlRcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2RpcmVjdGl2ZXMvZm9jdXMnO1xuaW1wb3J0IHsgQmlnIH0gZnJvbSAnYmlnLmpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWlucHV0LXBlcmNlbnRhZ2UnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+JTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgICNpbnB1dEVsZW1lbnRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpbnB1dG1vZGU9XCJkZWNpbWFsXCJcbiAgICAgICAgW2F0dHIuaWRdPVwibGFiZWxGb3JJZFwiXG4gICAgICAgIFt2YWx1ZV09XCJpbnRlcm5hbFZhbHVlXCJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJcbiAgICAgICAgICBpbnZhbGlkIHx8XG4gICAgICAgICAgKG5nQ29udHJvbD8uaW52YWxpZCAmJiAobmdDb250cm9sPy50b3VjaGVkIHx8IGZvcm0/LnN1Ym1pdHRlZCkpXG4gICAgICAgIFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgICAgKGlucHV0KT1cIm9uQ2hhbmdlKCRldmVudC50YXJnZXQ/LnZhbHVlKVwiXG4gICAgICAgIChibHVyKT1cIm9uVG91Y2goKVwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBJbnB1dFBlcmNlbnRhZ2VDb21wb25lbnQgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0UGVyY2VudGFnZUNvbXBvbmVudFxuICBleHRlbmRzIElucHV0TnVtYmVyQmFzZURpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Tb2ZGb2N1cyB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGZvcm06IEZvcm1Db21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2xcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAobmdDb250cm9sKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgc29mRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sPy52YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAvLyBFdmVyeSB0aW1lIGEgY29udHJvbCBpcyByZS1jcmVhdGVkIHRoZSBwcmV2aW91cyB3cml0ZVZhbHVlIHJlZmVyZW5jZShzKSBpcyBub3QgY2xlYW5lZCB1cC5cbiAgICAgIC8vIFNvLCBvdmVyIHRpbWUsIGEgbG90IG9mIHRoZXNlIHJlZmVyZW5jZXMgY2FuIGJlIGJ1aWx0IHVwLiBUaGlzIG1lbW9yeSBsZWFrIGlzIGEgYnVnIGluIEFuZ3VsYXIncyBpbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICAgIC8vIFdlIGhpZGUgdGhhdCBwcm9ibGVtIGJ5IGFzc2lnbmluZyBhbiBlbXB0eSBmdW5jdGlvbiB0byB3cml0ZVZhbHVlIGV2ZXJ5IHRpbWUgd2UgZGVzdHJveSB0aGUgY29udHJvbC5cbiAgICAgIC8vIEFuIGRldGFpbGVkIGV4cGxhbmF0aW9uIG9mIHRoZSBwcm9ibGVtIGNhbiBiZSBmb3VuZCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL3B1bGwvMjkzMzVcbiAgICAgIC8vIFRoZSBidWcgaXNzdWUgZm9yIGl0OiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDAwN1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlID0gKCkgPT4ge307XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIC8vIG11bHRpcGx5IHZhbHVlIGJ5IDEwMCBiZWZvcmUgd3JpdGluZyBpdCB0byB0aGUgaW5wdXRcbiAgICBsZXQgbXVsdGlwbGllZEJ5MTAwID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgbXVsdGlwbGllZEJ5MTAwID0gK25ldyBCaWcob2JqKS5tdWwoMTAwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICBzdXBlci53cml0ZVZhbHVlKG11bHRpcGxpZWRCeTEwMCk7XG4gIH1cblxuICBvbkNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gdXBkYXRlIGludGVybmFsIHZhbHVlXG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZSA9IHRoaXMudXBkYXRlVmFsdWVCeVVzZXJJbnB1dCh2YWx1ZSk7XG5cbiAgICBsZXQgaW5wdXRWYWx1ZUFzRGVjaW1hbERpdmlkZWRCeTEwMCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGlucHV0VmFsdWVBc0RlY2ltYWxEaXZpZGVkQnkxMDAgPSArbmV3IEJpZyhcbiAgICAgICAgaW50ZXJuYWxWYWx1ZS5yZXBsYWNlKC8sL2csICcuJylcbiAgICAgICkuZGl2KDEwMCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgICAvLyBlbWl0IHZhbHVlXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZS5lbWl0KGlucHV0VmFsdWVBc0RlY2ltYWxEaXZpZGVkQnkxMDApO1xuXG4gICAgLy8gcHJvcGFnYXRlIHRoZSBjaGFuZ2UsIGRpdmlkZWQgYnkgMTAwXG4gICAgaWYgKHRoaXMucHJvcGFnYXRlQ2hhbmdlICYmIGludGVybmFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UoXG4gICAgICAgIGlucHV0VmFsdWVBc0RlY2ltYWxEaXZpZGVkQnkxMDAgPT09IG51bGxcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IGlucHV0VmFsdWVBc0RlY2ltYWxEaXZpZGVkQnkxMDBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=