import { Component, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
let uniqueSwitchCounter = 0;
export class InputSwitchComponent {
    constructor(form, ngControl) {
        this.form = form;
        this.ngControl = ngControl;
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        /**
         * EventEmitter that will emit when control is touched.
         */
        this.touch = new EventEmitter();
        this.internalValue = null;
        this.isIndeterminate = false;
        this.labelForId = 'sof-input-switch-' + uniqueSwitchCounter; // generate unique id
        ++uniqueSwitchCounter;
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    /**
     * Determines if the input is checked or not.
     */
    set selected(value) {
        this.writeValue(value);
        this.calculateIndeterminate();
    }
    /**
     * Determines if the input is indeterminate or not.
     * Checked true will always prevail over indeterminate true.
     */
    set indeterminate(value) {
        this.isIndeterminate = value;
        this.calculateIndeterminate();
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
        this.internalValue = value;
    }
    onToggle(event) {
        // Prevent native functionality of browser input-checkbox
        event.preventDefault();
        if (!this.isDisabled) {
            this.calculateIndeterminate();
            const newValue = !this.internalValue;
            if (this.propagateChange) {
                this.internalValue = newValue;
                this.propagateChange(newValue);
            }
            this.changeValue.emit(newValue);
        }
        // Must happen after propagateChange, if not it will not work properly when formControl has set updateOn: 'blur'.
        // When updateOn: 'blur' is set the form control will only emit a value once the control is out of focus.
        // By calling propagateTouch before propagateChange the old value is used as initial value instead of the new value.
        // It seems that every propagateChange is ignored once the propagateTouch is triggered.
        // The problem doesn't occur when updateOn is 'change' (default) as the control is not limited by propagateTouch.
        this.onTouch();
    }
    onTouch() {
        this.touch.emit();
        if (!this.isDisabled && this.propagateTouch) {
            this.propagateTouch();
        }
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    calculateIndeterminate() {
        this.inputElement.nativeElement.indeterminate =
            this.isIndeterminate && !this.internalValue;
    }
}
InputSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-switch',
                encapsulation: ViewEncapsulation.None,
                template: `
    <div class="custom-control custom-switch">
      <input
        #inputElement
        type="checkbox"
        [attr.id]="labelForId"
        [disabled]="isDisabled"
        class="custom-control-input"
        [class.is-invalid]="
          invalid ||
          (ngControl?.invalid && (ngControl?.touched || form?.submitted))
        "
        [checked]="internalValue"
        [attr.value]="internalValue"
        (change)="onToggle($event)"
      />
      <label [for]="labelForId" class="custom-control-label">
        {{ label }}
      </label>
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputSwitchComponent }
                ],
                styles: ["sof-input-switch .custom-switch{padding-left:0!important}sof-input-switch .custom-switch .custom-control-label{margin-right:2.5rem}sof-input-switch .custom-switch .custom-control-label:after{top:calc(.25rem);left:calc(100% + 8px);width:calc(1rem);height:calc(1rem)}sof-input-switch .custom-switch .custom-control-label:before{left:calc(100% + 8px);right:-2.25rem}"]
            },] }
];
InputSwitchComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputSwitchComponent.propDecorators = {
    label: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    selected: [{ type: Input }],
    indeterminate: [{ type: Input }],
    changeValue: [{ type: Output }],
    touch: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement', { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtc3dpdGNoL2lucHV0LXN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDekUsT0FBTyxFQUVMLG1CQUFtQixFQUNwQixNQUFNLDJDQUEyQyxDQUFDO0FBRW5ELElBQUksbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0FBK0I1QixNQUFNLE9BQU8sb0JBQW9CO0lBb0QvQixZQUNxQixJQUFtQixFQUNYLFNBQW9CO1FBRDVCLFNBQUksR0FBSixJQUFJLENBQWU7UUFDWCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBcEJqRDs7V0FFRztRQUNPLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVwRDs7V0FFRztRQUNPLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSTFDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBR3hCLGVBQVUsR0FBRyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLHFCQUFxQjtRQU0zRSxFQUFFLG1CQUFtQixDQUFDO1FBQ3RCLElBQUksU0FBUyxFQUFFO1lBQ2IsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBM0NEOztPQUVHO0lBQ0gs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S0wsS0FBSzs0QkFTTCxLQUFLOzBCQVFMLE1BQU07b0JBS04sTUFBTTsyQkFFTixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCB7XG4gIE9uU29mRm9jdXMsXG4gIFNPRl9GT0NVU19DT01QT05FTlRcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2RpcmVjdGl2ZXMvZm9jdXMnO1xuXG5sZXQgdW5pcXVlU3dpdGNoQ291bnRlciA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1pbnB1dC1zd2l0Y2gnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1zd2l0Y2guY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgICNpbnB1dEVsZW1lbnRcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgW2F0dHIuaWRdPVwibGFiZWxGb3JJZFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXG4gICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cIlxuICAgICAgICAgIGludmFsaWQgfHxcbiAgICAgICAgICAobmdDb250cm9sPy5pbnZhbGlkICYmIChuZ0NvbnRyb2w/LnRvdWNoZWQgfHwgZm9ybT8uc3VibWl0dGVkKSlcbiAgICAgICAgXCJcbiAgICAgICAgW2NoZWNrZWRdPVwiaW50ZXJuYWxWYWx1ZVwiXG4gICAgICAgIFthdHRyLnZhbHVlXT1cImludGVybmFsVmFsdWVcIlxuICAgICAgICAoY2hhbmdlKT1cIm9uVG9nZ2xlKCRldmVudClcIlxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBbZm9yXT1cImxhYmVsRm9ySWRcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCI+XG4gICAgICAgIHt7IGxhYmVsIH19XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBJbnB1dFN3aXRjaENvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRTd2l0Y2hDb21wb25lbnRcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBPblNvZkZvY3VzIHtcbiAgLyoqXG4gICAqIFRoZSB0cmFuc2xhdGVkIGxhYmVsIG9mIHRoZSBpbnB1dC5cbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBEZXRlcm1pbmVzIGlmIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgaXMgaW4gYSB2YWxpZCBzdGF0ZS5cbiAgICovXG4gIEBJbnB1dCgpIGludmFsaWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhlIGlucHV0IGlzIGNoZWNrZWQgb3Igbm90LlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHNlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUluZGV0ZXJtaW5hdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBpbnB1dCBpcyBpbmRldGVybWluYXRlIG9yIG5vdC5cbiAgICogQ2hlY2tlZCB0cnVlIHdpbGwgYWx3YXlzIHByZXZhaWwgb3ZlciBpbmRldGVybWluYXRlIHRydWUuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgaW5kZXRlcm1pbmF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gdmFsdWU7XG4gICAgdGhpcy5jYWxjdWxhdGVJbmRldGVybWluYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHRoZSB2YWx1ZSB3aGVuIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50RW1pdHRlciB0aGF0IHdpbGwgZW1pdCB3aGVuIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICovXG4gIEBPdXRwdXQoKSB0b3VjaCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcblxuICBpbnRlcm5hbFZhbHVlOiBib29sZWFuID0gbnVsbDtcbiAgaXNJbmRldGVybWluYXRlID0gZmFsc2U7XG4gIHByb3BhZ2F0ZUNoYW5nZTogYW55O1xuICBwcm9wYWdhdGVUb3VjaDogYW55O1xuICBsYWJlbEZvcklkID0gJ3NvZi1pbnB1dC1zd2l0Y2gtJyArIHVuaXF1ZVN3aXRjaENvdW50ZXI7IC8vIGdlbmVyYXRlIHVuaXF1ZSBpZFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBmb3JtOiBGb3JtQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sXG4gICkge1xuICAgICsrdW5pcXVlU3dpdGNoQ291bnRlcjtcbiAgICBpZiAobmdDb250cm9sKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgc29mRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sPy52YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAvLyBFdmVyeSB0aW1lIGEgY29udHJvbCBpcyByZS1jcmVhdGVkIHRoZSBwcmV2aW91cyB3cml0ZVZhbHVlIHJlZmVyZW5jZShzKSBpcyBub3QgY2xlYW5lZCB1cC5cbiAgICAgIC8vIFNvLCBvdmVyIHRpbWUsIGEgbG90IG9mIHRoZXNlIHJlZmVyZW5jZXMgY2FuIGJlIGJ1aWx0IHVwLiBUaGlzIG1lbW9yeSBsZWFrIGlzIGEgYnVnIGluIEFuZ3VsYXIncyBpbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICAgIC8vIFdlIGhpZGUgdGhhdCBwcm9ibGVtIGJ5IGFzc2lnbmluZyBhbiBlbXB0eSBmdW5jdGlvbiB0byB3cml0ZVZhbHVlIGV2ZXJ5IHRpbWUgd2UgZGVzdHJveSB0aGUgY29udHJvbC5cbiAgICAgIC8vIEFuIGRldGFpbGVkIGV4cGxhbmF0aW9uIG9mIHRoZSBwcm9ibGVtIGNhbiBiZSBmb3VuZCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL3B1bGwvMjkzMzVcbiAgICAgIC8vIFRoZSBidWcgaXNzdWUgZm9yIGl0OiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDAwN1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlID0gKCkgPT4ge307XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBvblRvZ2dsZShldmVudDogYW55KTogdm9pZCB7XG4gICAgLy8gUHJldmVudCBuYXRpdmUgZnVuY3Rpb25hbGl0eSBvZiBicm93c2VyIGlucHV0LWNoZWNrYm94XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZUluZGV0ZXJtaW5hdGUoKTtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gIXRoaXMuaW50ZXJuYWxWYWx1ZTtcbiAgICAgIGlmICh0aGlzLnByb3BhZ2F0ZUNoYW5nZSkge1xuICAgICAgICB0aGlzLmludGVybmFsVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZS5lbWl0KG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBNdXN0IGhhcHBlbiBhZnRlciBwcm9wYWdhdGVDaGFuZ2UsIGlmIG5vdCBpdCB3aWxsIG5vdCB3b3JrIHByb3Blcmx5IHdoZW4gZm9ybUNvbnRyb2wgaGFzIHNldCB1cGRhdGVPbjogJ2JsdXInLlxuICAgIC8vIFdoZW4gdXBkYXRlT246ICdibHVyJyBpcyBzZXQgdGhlIGZvcm0gY29udHJvbCB3aWxsIG9ubHkgZW1pdCBhIHZhbHVlIG9uY2UgdGhlIGNvbnRyb2wgaXMgb3V0IG9mIGZvY3VzLlxuICAgIC8vIEJ5IGNhbGxpbmcgcHJvcGFnYXRlVG91Y2ggYmVmb3JlIHByb3BhZ2F0ZUNoYW5nZSB0aGUgb2xkIHZhbHVlIGlzIHVzZWQgYXMgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIHRoZSBuZXcgdmFsdWUuXG4gICAgLy8gSXQgc2VlbXMgdGhhdCBldmVyeSBwcm9wYWdhdGVDaGFuZ2UgaXMgaWdub3JlZCBvbmNlIHRoZSBwcm9wYWdhdGVUb3VjaCBpcyB0cmlnZ2VyZWQuXG4gICAgLy8gVGhlIHByb2JsZW0gZG9lc24ndCBvY2N1ciB3aGVuIHVwZGF0ZU9uIGlzICdjaGFuZ2UnIChkZWZhdWx0KSBhcyB0aGUgY29udHJvbCBpcyBub3QgbGltaXRlZCBieSBwcm9wYWdhdGVUb3VjaC5cbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgfVxuXG4gIG9uVG91Y2goKTogdm9pZCB7XG4gICAgdGhpcy50b3VjaC5lbWl0KCk7XG5cbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCAmJiB0aGlzLnByb3BhZ2F0ZVRvdWNoKSB7XG4gICAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlSW5kZXRlcm1pbmF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmluZGV0ZXJtaW5hdGUgPVxuICAgICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgJiYgIXRoaXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuIl19