import { AfterContentInit, OnDestroy, QueryList } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { Observable } from 'rxjs';
import { FormErrorMessage } from './types/form-error-message.type';
import * as ɵngcc0 from '@angular/core';
export declare class InputWrapperComponent implements AfterContentInit, OnDestroy {
    form: FormComponent;
    /**
     * The label will be displayed above the input field.
     */
    label: string;
    /**
     * The hint is used to add some extra information below the input field.
     */
    hint: string;
    tc: string;
    errorMessages$: Observable<FormErrorMessage[]>;
    control$: Observable<AbstractControl>;
    required$: Observable<boolean>;
    children: QueryList<any>;
    constructor(form: FormComponent);
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    private mapErrorObjToMessages;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputWrapperComponent, [{ optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputWrapperComponent, "sof-input-wrapper", never, { "label": "label"; "hint": "hint"; }, {}, ["children"], ["*"]>;
}

//# sourceMappingURL=input-wrapper.component.d.ts.map