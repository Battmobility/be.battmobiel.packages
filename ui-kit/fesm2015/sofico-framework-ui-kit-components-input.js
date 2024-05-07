import { Directive, Input, NgModule } from '@angular/core';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
InputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sofInput]'
            },] }
];
InputDirective.ctorParameters = () => [
    { type: FormComponent }
];
InputDirective.propDecorators = {
    sofInput: [{ type: Input }],
    formControl: [{ type: Input }],
    formControlName: [{ type: Input }],
    errorMap: [{ type: Input }]
};

class InputModule {
}
InputModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ReactiveFormsModule],
                declarations: [InputDirective],
                exports: [InputDirective]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputDirective, InputModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input.js.map
