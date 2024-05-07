import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class FormComponent implements OnInit, OnDestroy {
    /**
     * The translation context.
     */
    tc: string;
    /**
     * Contains the form that the wrapped form controls use.
     */
    formGroup: FormGroup;
    /**
     * EventEmitter that will emit when the form is submitted.
     */
    formSubmit: EventEmitter<any>;
    /**
     * EventEmitter that will emit when the form is dirty. This means that
     * the user has changed the form's value.
     */
    formDirty: EventEmitter<boolean>;
    submitted: boolean;
    actualErrorMap: {
        [key: string]: string;
    };
    private formDirty$;
    /**
     * Contains a map of error translation keys that match the validators identifier.
     * The validators that are supported by default are:
     * - required
     * - email
     * - maxLength
     * - inRange
     * - phoneNumber
     * - isInteger
     */
    set errorMap(map: {
        [key: string]: string;
    });
    ngOnInit(): void;
    ngOnDestroy(): void;
    onSubmit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FormComponent, "sof-form", never, { "errorMap": "errorMap"; "tc": "tc"; "formGroup": "formGroup"; }, { "formSubmit": "formSubmit"; "formDirty": "formDirty"; }, never, ["*"]>;
}

//# sourceMappingURL=form.component.d.ts.map