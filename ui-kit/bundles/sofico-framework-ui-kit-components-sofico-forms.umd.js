(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@sofico-framework/ui-kit/components/form'), require('@sofico-framework/ui-kit/components/input'), require('@sofico-framework/ui-kit/components/input-wrapper')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/sofico-forms', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@sofico-framework/ui-kit/components/form', '@sofico-framework/ui-kit/components/input', '@sofico-framework/ui-kit/components/input-wrapper'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['sofico-forms'] = {}), global.ng.common, global.ng.core, global.ng.forms, global['sofico-framework']['ui-kit'].components.form, global['sofico-framework']['ui-kit'].components.input, global['sofico-framework']['ui-kit'].components['input-wrapper']));
}(this, (function (exports, common, core, forms, form, input, inputWrapper) { 'use strict';

    var SoficoFormsModule = /** @class */ (function () {
        function SoficoFormsModule() {
        }
        return SoficoFormsModule;
    }());
    SoficoFormsModule.decorators = [
        { type: core.NgModule, args: [{
                    exports: [forms.ReactiveFormsModule, inputWrapper.InputWrapperModule, form.FormModule, input.InputModule],
                    imports: [
                        common.CommonModule,
                        forms.ReactiveFormsModule,
                        inputWrapper.InputWrapperModule,
                        form.FormModule,
                        input.InputModule
                    ]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SoficoFormsModule = SoficoFormsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-sofico-forms.umd.js.map
