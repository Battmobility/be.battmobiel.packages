import { EventEmitter, Component, Optional, Host, Input, Output, ViewChild, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@sofico-framework/ui-kit/components/form';
import * as ɵngcc2 from '@angular/forms';

const _c0 = ["inputElement"];
let uniqueCheckboxCounter = 0;
class InputCheckboxComponent {
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
InputCheckboxComponent.ɵfac = function InputCheckboxComponent_Factory(t) { return new (t || InputCheckboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FormComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgControl, 9)); };
InputCheckboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputCheckboxComponent, selectors: [["sof-input-checkbox"]], viewQuery: function InputCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, inputs: { selected: "selected", indeterminate: "indeterminate", isDisabled: "isDisabled", label: "label", invalid: "invalid" }, outputs: { changeValue: "changeValue", touch: "touch" }, features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: SOF_FOCUS_COMPONENT, useExisting: InputCheckboxComponent }
        ])], decls: 5, vars: 8, consts: [[1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "disabled", "checked"], ["inputElement", ""], [1, "custom-control-label", 3, "for", "click"]], template: function InputCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "input", 1, 2);
        ɵngcc0.ɵɵelementStart(3, "label", 3);
        ɵngcc0.ɵɵlistener("click", function InputCheckboxComponent_Template_label_click_3_listener($event) { return ctx.onToggle($event); });
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("is-invalid", ctx.invalid || (ctx.ngControl == null ? null : ctx.ngControl.invalid) && ((ctx.ngControl == null ? null : ctx.ngControl.touched) || (ctx.form == null ? null : ctx.form.submitted)));
        ɵngcc0.ɵɵproperty("disabled", ctx.isDisabled)("checked", ctx.internalValue);
        ɵngcc0.ɵɵattribute("id", ctx.labelForId)("value", ctx.internalValue);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("for", ctx.labelForId);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.label, " ");
    } }, encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputCheckboxComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc1.FormComponent, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.NgControl, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, { changeValue: [{
            type: Output
        }], touch: [{
            type: Output
        }], selected: [{
            type: Input
        }], indeterminate: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], label: [{
            type: Input
        }], invalid: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }] }); })();

class InputCheckboxModule {
}
InputCheckboxModule.ɵfac = function InputCheckboxModule_Factory(t) { return new (t || InputCheckboxModule)(); };
InputCheckboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputCheckboxModule });
InputCheckboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputCheckboxModule, { declarations: function () { return [InputCheckboxComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [InputCheckboxComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputCheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [InputCheckboxComponent],
                exports: [InputCheckboxComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { InputCheckboxComponent, InputCheckboxModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-input-checkbox.js.map