import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '@sofico-framework/ui-kit/components/form';
import { InputModule } from '@sofico-framework/ui-kit/components/input';
import { InputWrapperModule } from '@sofico-framework/ui-kit/components/input-wrapper';

import * as ɵngcc0 from '@angular/core';
class SoficoFormsModule {
}
SoficoFormsModule.ɵfac = function SoficoFormsModule_Factory(t) { return new (t || SoficoFormsModule)(); };
SoficoFormsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SoficoFormsModule });
SoficoFormsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            ReactiveFormsModule,
            InputWrapperModule,
            FormModule,
            InputModule
        ], ReactiveFormsModule, InputWrapperModule, FormModule, InputModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SoficoFormsModule, { imports: function () { return [CommonModule,
        ReactiveFormsModule,
        InputWrapperModule,
        FormModule,
        InputModule]; }, exports: function () { return [ReactiveFormsModule, InputWrapperModule, FormModule, InputModule]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SoficoFormsModule, [{
        type: NgModule,
        args: [{
                exports: [ReactiveFormsModule, InputWrapperModule, FormModule, InputModule],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    InputWrapperModule,
                    FormModule,
                    InputModule
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SoficoFormsModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-sofico-forms.js.map