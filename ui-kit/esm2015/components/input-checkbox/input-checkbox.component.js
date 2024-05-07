import { Component, EventEmitter, Host, Input, Optional, Output, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
let uniqueCheckboxCounter = 0;
export class InputCheckboxComponent {
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
        this.labelForId = 'sof-input-checkbox-' + uniqueCheckboxCounter; // generate unique id
        ++uniqueCheckboxCounter;
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
InputCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-checkbox',
                template: `
    <div class="custom-control custom-checkbox">
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
      />
      <label
        [for]="labelForId"
        class="custom-control-label"
        (click)="onToggle($event)"
      >
        {{ label }}
      </label>
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputCheckboxComponent }
                ]
            },] }
];
InputCheckboxComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputCheckboxComponent.propDecorators = {
    label: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    selected: [{ type: Input }],
    indeterminate: [{ type: Input }],
    changeValue: [{ type: Output }],
    touch: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement', { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9pbnB1dC1jaGVja2JveC9pbnB1dC1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFFbkQsSUFBSSxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFnQzlCLE1BQU0sT0FBTyxzQkFBc0I7SUFvRGpDLFlBQ3FCLElBQW1CLEVBQ1gsU0FBb0I7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNYLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFwQmpEOztXQUVHO1FBQ08sZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRXBEOztXQUVHO1FBQ08sVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFJMUMsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFHeEIsZUFBVSxHQUFHLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDLENBQUMscUJBQXFCO1FBTS9FLEVBQUUscUJBQXFCLENBQUM7UUFDeEIsSUFBSSxTQUFTLEVBQUU7WUFDYixTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNoQztJQUNILENBQUM7SUEzQ0Q7O09BRUc7SUFDSCxJQUFhLFFB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TTsyQkFFTixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IHtcbiAgT25Tb2ZGb2N1cyxcbiAgU09GX0ZPQ1VTX0NPTVBPTkVOVFxufSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvZGlyZWN0aXZlcy9mb2N1cyc7XG5cbmxldCB1bmlxdWVDaGVja2JveENvdW50ZXIgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtaW5wdXQtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3hcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICAjaW5wdXRFbGVtZW50XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIFthdHRyLmlkXT1cImxhYmVsRm9ySWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICAgIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxuICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJcbiAgICAgICAgICBpbnZhbGlkIHx8XG4gICAgICAgICAgKG5nQ29udHJvbD8uaW52YWxpZCAmJiAobmdDb250cm9sPy50b3VjaGVkIHx8IGZvcm0/LnN1Ym1pdHRlZCkpXG4gICAgICAgIFwiXG4gICAgICAgIFtjaGVja2VkXT1cImludGVybmFsVmFsdWVcIlxuICAgICAgICBbYXR0ci52YWx1ZV09XCJpbnRlcm5hbFZhbHVlXCJcbiAgICAgIC8+XG4gICAgICA8bGFiZWxcbiAgICAgICAgW2Zvcl09XCJsYWJlbEZvcklkXCJcbiAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiXG4gICAgICAgIChjbGljayk9XCJvblRvZ2dsZSgkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogU09GX0ZPQ1VTX0NPTVBPTkVOVCwgdXNlRXhpc3Rpbmc6IElucHV0Q2hlY2tib3hDb21wb25lbnQgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q2hlY2tib3hDb21wb25lbnRcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBPblNvZkZvY3VzIHtcbiAgLyoqXG4gICAqIFRoZSB0cmFuc2xhdGVkIGxhYmVsIG9mIHRoZSBpbnB1dC5cbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBEZXRlcm1pbmVzIGlmIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgaXMgaW4gYSB2YWxpZCBzdGF0ZS5cbiAgICovXG4gIEBJbnB1dCgpIGludmFsaWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhlIGlucHV0IGlzIGNoZWNrZWQgb3Igbm90LlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHNlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUluZGV0ZXJtaW5hdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBpbnB1dCBpcyBpbmRldGVybWluYXRlIG9yIG5vdC5cbiAgICogQ2hlY2tlZCB0cnVlIHdpbGwgYWx3YXlzIHByZXZhaWwgb3ZlciBpbmRldGVybWluYXRlIHRydWUuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgaW5kZXRlcm1pbmF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gdmFsdWU7XG4gICAgdGhpcy5jYWxjdWxhdGVJbmRldGVybWluYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHRoZSB2YWx1ZSB3aGVuIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50RW1pdHRlciB0aGF0IHdpbGwgZW1pdCB3aGVuIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICovXG4gIEBPdXRwdXQoKSB0b3VjaCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcblxuICBpbnRlcm5hbFZhbHVlOiBib29sZWFuID0gbnVsbDtcbiAgaXNJbmRldGVybWluYXRlID0gZmFsc2U7XG4gIHByb3BhZ2F0ZUNoYW5nZTogYW55O1xuICBwcm9wYWdhdGVUb3VjaDogYW55O1xuICBsYWJlbEZvcklkID0gJ3NvZi1pbnB1dC1jaGVja2JveC0nICsgdW5pcXVlQ2hlY2tib3hDb3VudGVyOyAvLyBnZW5lcmF0ZSB1bmlxdWUgaWRcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZm9ybTogRm9ybUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbFxuICApIHtcbiAgICArK3VuaXF1ZUNoZWNrYm94Q291bnRlcjtcbiAgICBpZiAobmdDb250cm9sKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgc29mRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sPy52YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAvLyBFdmVyeSB0aW1lIGEgY29udHJvbCBpcyByZS1jcmVhdGVkIHRoZSBwcmV2aW91cyB3cml0ZVZhbHVlIHJlZmVyZW5jZShzKSBpcyBub3QgY2xlYW5lZCB1cC5cbiAgICAgIC8vIFNvLCBvdmVyIHRpbWUsIGEgbG90IG9mIHRoZXNlIHJlZmVyZW5jZXMgY2FuIGJlIGJ1aWx0IHVwLiBUaGlzIG1lbW9yeSBsZWFrIGlzIGEgYnVnIGluIEFuZ3VsYXIncyBpbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICAgIC8vIFdlIGhpZGUgdGhhdCBwcm9ibGVtIGJ5IGFzc2lnbmluZyBhbiBlbXB0eSBmdW5jdGlvbiB0byB3cml0ZVZhbHVlIGV2ZXJ5IHRpbWUgd2UgZGVzdHJveSB0aGUgY29udHJvbC5cbiAgICAgIC8vIEFuIGRldGFpbGVkIGV4cGxhbmF0aW9uIG9mIHRoZSBwcm9ibGVtIGNhbiBiZSBmb3VuZCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL3B1bGwvMjkzMzVcbiAgICAgIC8vIFRoZSBidWcgaXNzdWUgZm9yIGl0OiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDAwN1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlID0gKCkgPT4ge307XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBvblRvZ2dsZShldmVudDogYW55KTogdm9pZCB7XG4gICAgLy8gUHJldmVudCBuYXRpdmUgZnVuY3Rpb25hbGl0eSBvZiBicm93c2VyIGlucHV0LWNoZWNrYm94XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZUluZGV0ZXJtaW5hdGUoKTtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gIXRoaXMuaW50ZXJuYWxWYWx1ZTtcbiAgICAgIGlmICh0aGlzLnByb3BhZ2F0ZUNoYW5nZSkge1xuICAgICAgICB0aGlzLmludGVybmFsVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZS5lbWl0KG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBNdXN0IGhhcHBlbiBhZnRlciBwcm9wYWdhdGVDaGFuZ2UsIGlmIG5vdCBpdCB3aWxsIG5vdCB3b3JrIHByb3Blcmx5IHdoZW4gZm9ybUNvbnRyb2wgaGFzIHNldCB1cGRhdGVPbjogJ2JsdXInLlxuICAgIC8vIFdoZW4gdXBkYXRlT246ICdibHVyJyBpcyBzZXQgdGhlIGZvcm0gY29udHJvbCB3aWxsIG9ubHkgZW1pdCBhIHZhbHVlIG9uY2UgdGhlIGNvbnRyb2wgaXMgb3V0IG9mIGZvY3VzLlxuICAgIC8vIEJ5IGNhbGxpbmcgcHJvcGFnYXRlVG91Y2ggYmVmb3JlIHByb3BhZ2F0ZUNoYW5nZSB0aGUgb2xkIHZhbHVlIGlzIHVzZWQgYXMgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIHRoZSBuZXcgdmFsdWUuXG4gICAgLy8gSXQgc2VlbXMgdGhhdCBldmVyeSBwcm9wYWdhdGVDaGFuZ2UgaXMgaWdub3JlZCBvbmNlIHRoZSBwcm9wYWdhdGVUb3VjaCBpcyB0cmlnZ2VyZWQuXG4gICAgLy8gVGhlIHByb2JsZW0gZG9lc24ndCBvY2N1ciB3aGVuIHVwZGF0ZU9uIGlzICdjaGFuZ2UnIChkZWZhdWx0KSBhcyB0aGUgY29udHJvbCBpcyBub3QgbGltaXRlZCBieSBwcm9wYWdhdGVUb3VjaC5cbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgfVxuXG4gIG9uVG91Y2goKTogdm9pZCB7XG4gICAgdGhpcy50b3VjaC5lbWl0KCk7XG5cbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCAmJiB0aGlzLnByb3BhZ2F0ZVRvdWNoKSB7XG4gICAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlSW5kZXRlcm1pbmF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmluZGV0ZXJtaW5hdGUgPVxuICAgICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgJiYgIXRoaXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuIl19