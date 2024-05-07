import { EventEmitter, Component, Optional, Input, Output, ViewChild, NgModule } from '@angular/core';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@sofico-framework/ui-kit/components/form';
import * as ɵngcc2 from '@angular/forms';

const _c0 = ["inputElement"];
const _c1 = ["*"];
let uniqueRadioCounter = 0;
class InputRadioComponent {
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
InputRadioComponent.ɵfac = function InputRadioComponent_Factory(t) { return new (t || InputRadioComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FormComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgControl, 8)); };
InputRadioComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputRadioComponent, selectors: [["sof-input-radio"]], viewQuery: function InputRadioComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, inputs: { isDisabled: "isDisabled", value: "value", name: "name", checked: "checked", invalid: "invalid" }, outputs: { changeValue: "changeValue" }, features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: SOF_FOCUS_COMPONENT, useExisting: InputRadioComponent }
        ])], ngContentSelectors: _c1, decls: 5, vars: 8, consts: [[1, "custom-control", "custom-radio"], ["type", "radio", 1, "custom-control-input", 3, "value", "disabled", "checked", "change"], ["inputElement", ""], [1, "custom-control-label"]], template: function InputRadioComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("change", function InputRadioComponent_Template_input_change_1_listener() { return ctx.onChange(ctx.value); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "label", 3);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("is-invalid", ctx.invalid || (ctx.ngControl == null ? null : ctx.ngControl.invalid) && ((ctx.ngControl == null ? null : ctx.ngControl.touched) || (ctx.form == null ? null : ctx.form.submitted)));
        ɵngcc0.ɵɵproperty("value", ctx.value)("disabled", ctx.isDisabled)("checked", ctx.value === (ctx.ngControl == null ? null : ctx.ngControl.value) || ctx.checked);
        ɵngcc0.ɵɵattribute("id", ctx.labelForId)("name", ctx.name);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵattribute("for", ctx.labelForId);
    } }, styles: [""] });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputRadioComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc1.FormComponent, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.NgControl, decorators: [{
                type: Optional
            }] }]; }, { changeValue: [{
            type: Output
        }], isDisabled: [{
            type: Input
        }], value: [{
            type: Input
        }], name: [{
            type: Input
        }], checked: [{
            type: Input
        }], invalid: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement']
        }] }); })();

class InputRadioModule {
}
InputRadioModule.ɵfac = function InputRadioModule_Factory(t) { return new (t || InputRadioModule)(); };
InputRadioModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputRadioModule });
InputRadioModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputRadioModule, { declarations: function () { return [InputRadioComponent]; }, imports: function () { return [CommonModule, ReactiveFormsModule]; }, exports: function () { return [InputRadioComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputRadioModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ReactiveFormsModule],
                declarations: [InputRadioComponent],
                exports: [InputRadioComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { InputRadioComponent, InputRadioModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-input-radio.js.map