import { Directive, Input, NgModule } from '@angular/core';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@sofico-framework/ui-kit/components/form';
class InputDirective {
    constructor(form) {
        this.form = form;
    }
    set formControlName(name) {
        throw new Error('You should use the [formControl] directive instead of the formControlName directive');
    }
    ngOnInit() {
        if (!this.form) {
            throw new Error('The [sofInput] directive should be used inside a sof-form element');
        }
    }
}
InputDirective.ɵfac = function InputDirective_Factory(t) { return new (t || InputDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FormComponent)); };
InputDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: InputDirective, selectors: [["", "sofInput", ""]], inputs: { formControlName: "formControlName", sofInput: "sofInput", formControl: "formControl", errorMap: "errorMap" } });
InputDirective.ctorParameters = () => [
    { type: FormComponent }
];
InputDirective.propDecorators = {
    sofInput: [{ type: Input }],
    formControl: [{ type: Input }],
    formControlName: [{ type: Input }],
    errorMap: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputDirective, [{
        type: Directive,
        args: [{
                selector: '[sofInput]'
            }]
    }], function () { return [{ type: ɵngcc1.FormComponent }]; }, { formControlName: [{
            type: Input
        }], sofInput: [{
            type: Input
        }], formControl: [{
            type: Input
        }], errorMap: [{
            type: Input
        }] }); })();

class InputModule {
}
InputModule.ɵfac = function InputModule_Factory(t) { return new (t || InputModule)(); };
InputModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputModule });
InputModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputModule, { declarations: function () { return [InputDirective]; }, imports: function () { return [CommonModule, ReactiveFormsModule]; }, exports: function () { return [InputDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ReactiveFormsModule],
                declarations: [InputDirective],
                exports: [InputDirective]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { InputDirective, InputModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-input.js.map