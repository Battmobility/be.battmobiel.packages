(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@sofico-framework/ui-kit/components/form'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/input', ['exports', '@angular/core', '@sofico-framework/ui-kit/components/form', '@angular/common', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.input = {}), global.ng.core, global['sofico-framework']['ui-kit'].components.form, global.ng.common, global.ng.forms));
}(this, (function (exports, core, form, common, forms) { 'use strict';

    var InputDirective = /** @class */ (function () {
        function InputDirective(form) {
            this.form = form;
        }
        Object.defineProperty(InputDirective.prototype, "formControlName", {
            set: function (name) {
                throw new Error('You should use the [formControl] directive instead of the formControlName directive');
            },
            enumerable: false,
            configurable: true
        });
        InputDirective.prototype.ngOnInit = function () {
            if (!this.form) {
                throw new Error('The [sofInput] directive should be used inside a sof-form element');
            }
        };
        return InputDirective;
    }());
    InputDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[sofInput]'
                },] }
    ];
    InputDirective.ctorParameters = function () { return [
        { type: form.FormComponent }
    ]; };
    InputDirective.propDecorators = {
        sofInput: [{ type: core.Input }],
        formControl: [{ type: core.Input }],
        formControlName: [{ type: core.Input }],
        errorMap: [{ type: core.Input }]
    };

    var InputModule = /** @class */ (function () {
        function InputModule() {
        }
        return InputModule;
    }());
    InputModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, forms.ReactiveFormsModule],
                    declarations: [InputDirective],
                    exports: [InputDirective]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InputDirective = InputDirective;
    exports.InputModule = InputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-input.umd.js.map
