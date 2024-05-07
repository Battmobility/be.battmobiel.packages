import { EventEmitter, Component, Optional, Host, Input, Output, ViewChild, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@sofico-framework/ui-kit/components/form';
import * as ɵngcc2 from '@angular/forms';

const _c0 = ["inputElement"];
class InputTextareaComponent {
    constructor(form, ngControl) {
        this.form = form;
        this.ngControl = ngControl;
        /**
         * Determines if the textarea should be resizable. Default: true
         */
        this.resizable = true;
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
        this.isDisabled = value;
    }
}
InputTextareaComponent.ɵfac = function InputTextareaComponent_Factory(t) { return new (t || InputTextareaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FormComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgControl, 9)); };
InputTextareaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputTextareaComponent, selectors: [["sof-input-textarea"]], viewQuery: function InputTextareaComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, inputs: { resizable: "resizable", placeholder: "placeholder", value: "value", isDisabled: "isDisabled", labelForId: "labelForId", invalid: "invalid" }, outputs: { changeValue: "changeValue", touch: "touch" }, features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: SOF_FOCUS_COMPONENT, useExisting: InputTextareaComponent }
        ])], decls: 2, vars: 8, consts: [[1, "form-control", 3, "value", "placeholder", "disabled", "input", "blur"], ["inputElement", ""]], template: function InputTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "textarea", 0, 1);
        ɵngcc0.ɵɵlistener("input", function InputTextareaComponent_Template_textarea_input_0_listener($event) { return ctx.onChange($event.target == null ? null : $event.target.value); })("blur", function InputTextareaComponent_Template_textarea_blur_0_listener() { return ctx.onTouch(); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("is-invalid", ctx.invalid || (ctx.ngControl == null ? null : ctx.ngControl.invalid) && ((ctx.ngControl == null ? null : ctx.ngControl.touched) || (ctx.form == null ? null : ctx.form.submitted)))("not-resizable", !ctx.resizable);
        ɵngcc0.ɵɵproperty("value", ctx.internalValue)("placeholder", ctx.placeholder)("disabled", ctx.isDisabled);
        ɵngcc0.ɵɵattribute("id", ctx.labelForId);
    } }, styles: [".not-resizable[_ngcontent-%COMP%]{resize:none}"] });
InputTextareaComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputTextareaComponent.propDecorators = {
    resizable: [{ type: Input }],
    labelForId: [{ type: Input }],
    value: [{ type: Input }],
    placeholder: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    changeValue: [{ type: Output }],
    touch: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputTextareaComponent, [{
        type: Component,
        args: [{
                selector: 'sof-input-textarea',
                template: `
    <textarea
      #inputElement
      [attr.id]="labelForId"
      [value]="internalValue"
      class="form-control"
      [class.is-invalid]="
        invalid ||
        (ngControl?.invalid && (ngControl?.touched || form?.submitted))
      "
      [class.not-resizable]="!resizable"
      [placeholder]="placeholder"
      [disabled]="isDisabled"
      (input)="onChange($event.target?.value)"
      (blur)="onTouch()"
    ></textarea>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputTextareaComponent }
                ],
                styles: [".not-resizable{resize:none}"]
            }]
    }], function () { return [{ type: ɵngcc1.FormComponent, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.NgControl, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, { resizable: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], changeValue: [{
            type: Output
        }], touch: [{
            type: Output
        }], value: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], labelForId: [{
            type: Input
        }], invalid: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement']
        }] }); })();

class InputTextareaModule {
}
InputTextareaModule.ɵfac = function InputTextareaModule_Factory(t) { return new (t || InputTextareaModule)(); };
InputTextareaModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputTextareaModule });
InputTextareaModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputTextareaModule, { declarations: function () { return [InputTextareaComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [InputTextareaComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputTextareaModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [InputTextareaComponent],
                exports: [InputTextareaComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { InputTextareaComponent, InputTextareaModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-input-textarea.js.map