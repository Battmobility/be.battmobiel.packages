import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '@sofico-framework/ui-kit/components/form';
import { InputModule } from '@sofico-framework/ui-kit/components/input';
import { InputWrapperModule } from '@sofico-framework/ui-kit/components/input-wrapper';

class SoficoFormsModule {
}
SoficoFormsModule.decorators = [
    { type: NgModule, args: [{
                exports: [ReactiveFormsModule, InputWrapperModule, FormModule, InputModule],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    InputWrapperModule,
                    FormModule,
                    InputModule
                ]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { SoficoFormsModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-sofico-forms.js.map
