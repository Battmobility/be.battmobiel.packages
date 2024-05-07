import { Component, Optional, Host, ViewChild, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { InputNumberBaseDirective } from '@sofico-framework/ui-kit/components/number-base';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@sofico-framework/ui-kit/components/form';
import * as ɵngcc2 from '@angular/forms';

const _c0 = ["inputElement"];
class InputNumberComponent extends InputNumberBaseDirective {
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
InputNumberComponent.ɵfac = function InputNumberComponent_Factory(t) { return new (t || InputNumberComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FormComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgControl, 9)); };
InputNumberComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputNumberComponent, selectors: [["sof-input-number"]], viewQuery: function InputNumberComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: SOF_FOCUS_COMPONENT, useExisting: InputNumberComponent }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 6, consts: [["type", "text", "inputmode", "decimal", 1, "form-control", 3, "value", "placeholder", "disabled", "input", "blur"], ["inputElement", ""]], template: function InputNumberComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "input", 0, 1);
        ɵngcc0.ɵɵlistener("input", function InputNumberComponent_Template_input_input_0_listener($event) { return ctx.onChange($event.target == null ? null : $event.target.value); })("blur", function InputNumberComponent_Template_input_blur_0_listener() { return ctx.onTouch(); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("is-invalid", ctx.invalid || (ctx.ngControl == null ? null : ctx.ngControl.invalid) && ((ctx.ngControl == null ? null : ctx.ngControl.touched) || (ctx.form == null ? null : ctx.form.submitted)));
        ɵngcc0.ɵɵproperty("value", ctx.internalValue)("placeholder", ctx.placeholder)("disabled", ctx.isDisabled);
        ɵngcc0.ɵɵattribute("id", ctx.labelForId);
    } }, encapsulation: 2 });
InputNumberComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputNumberComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputNumberComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc1.FormComponent, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.NgControl, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement']
        }] }); })();

class InputNumberModule {
}
InputNumberModule.ɵfac = function InputNumberModule_Factory(t) { return new (t || InputNumberModule)(); };
InputNumberModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputNumberModule });
InputNumberModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputNumberModule, { declarations: function () { return [InputNumberComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [InputNumberComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputNumberModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [InputNumberComponent],
                exports: [InputNumberComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { InputNumberComponent, InputNumberModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-input-number.js.map