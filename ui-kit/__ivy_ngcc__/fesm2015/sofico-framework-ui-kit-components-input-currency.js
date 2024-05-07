import { Component, Optional, Host, Input, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { InputNumberBaseDirective } from '@sofico-framework/ui-kit/components/number-base';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { CommonModule } from '@angular/common';
import { UtilsPipesModule } from '@sofico-framework/utils';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@sofico-framework/ui-kit/components/form';
import * as ɵngcc2 from '@angular/forms';
import * as ɵngcc3 from '@sofico-framework/utils';
class InputCurrencyComponent extends InputNumberBaseDirective {
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
InputCurrencyComponent.ɵfac = function InputCurrencyComponent_Factory(t) { return new (t || InputCurrencyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FormComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgControl, 9)); };
InputCurrencyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputCurrencyComponent, selectors: [["sof-input-currency"]], inputs: { currencyCode: "currencyCode" }, features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: SOF_FOCUS_COMPONENT, useExisting: InputCurrencyComponent }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 7, vars: 9, consts: [[1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "inputmode", "decimal", 1, "form-control", 3, "value", "placeholder", "disabled", "input", "blur"], ["inputElement", ""]], template: function InputCurrencyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "span", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵpipe(4, "sofCurrencySymbol");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "input", 3, 4);
        ɵngcc0.ɵɵlistener("input", function InputCurrencyComponent_Template_input_input_5_listener($event) { return ctx.onChange($event.target == null ? null : $event.target.value); })("blur", function InputCurrencyComponent_Template_input_blur_5_listener() { return ctx.onTouch(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(4, 7, ctx.currencyCode));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("is-invalid", ctx.invalid || (ctx.ngControl == null ? null : ctx.ngControl.invalid) && ((ctx.ngControl == null ? null : ctx.ngControl.touched) || (ctx.form == null ? null : ctx.form.submitted)));
        ɵngcc0.ɵɵproperty("value", ctx.internalValue)("placeholder", ctx.placeholder)("disabled", ctx.isDisabled);
        ɵngcc0.ɵɵattribute("id", ctx.labelForId);
    } }, pipes: [ɵngcc3.CurrencySymbolPipe], encapsulation: 2 });
InputCurrencyComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputCurrencyComponent.propDecorators = {
    currencyCode: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputCurrencyComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc1.FormComponent, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.NgControl, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, { currencyCode: [{
            type: Input
        }] }); })();

class InputCurrencyModule {
}
InputCurrencyModule.ɵfac = function InputCurrencyModule_Factory(t) { return new (t || InputCurrencyModule)(); };
InputCurrencyModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputCurrencyModule });
InputCurrencyModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, UtilsPipesModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputCurrencyModule, { declarations: function () { return [InputCurrencyComponent]; }, imports: function () { return [CommonModule, UtilsPipesModule]; }, exports: function () { return [InputCurrencyComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputCurrencyModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, UtilsPipesModule],
                declarations: [InputCurrencyComponent],
                exports: [InputCurrencyComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { InputCurrencyComponent, InputCurrencyModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-input-currency.js.map