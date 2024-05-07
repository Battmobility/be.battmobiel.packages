import { __decorate } from 'tslib';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { Subject } from 'rxjs';
import { distinctUntilChanged, startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';

const _c0 = ["*"];
let FormComponent = class FormComponent {
    constructor() {
        /**
         * EventEmitter that will emit when the form is submitted.
         */
        this.formSubmit = new EventEmitter();
        /**
         * EventEmitter that will emit when the form is dirty. This means that
         * the user has changed the form's value.
         */
        this.formDirty = new EventEmitter();
        this.submitted = false;
        this.actualErrorMap = {
            required: 'VALIDATION_REQUIRED',
            email: 'VALIDATION_EMAIL',
            maxLength: 'VALIDATION_MAX-LENGTH',
            inRange: 'VALIDATION_NOT-IN-RANGE',
            phoneNumber: 'VALIDATION_PHONE-NUMBER',
            isInteger: 'VALIDATION_NOT-IS-INTEGER'
        };
        this.formDirty$ = new Subject();
    }
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
    set errorMap(map) {
        this.actualErrorMap = Object.assign(Object.assign({}, this.actualErrorMap), map);
    }
    ngOnInit() {
        this.formDirty$
            .pipe(distinctUntilChanged(), takeUntilDestroy(this))
            .subscribe(dirty => this.formDirty.emit(dirty));
        this.formGroup.valueChanges
            .pipe(startWith(null), takeUntilDestroy(this))
            .subscribe(() => {
            if (this.submitted && !this.formGroup.dirty) {
                this.submitted = false;
            }
            this.formDirty$.next(this.formGroup.dirty);
        });
    }
    ngOnDestroy() { }
    onSubmit() {
        this.submitted = true;
        this.formSubmit.emit(this.formGroup.value);
    }
};
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormComponent, selectors: [["sof-form"]], inputs: { errorMap: "errorMap", tc: "tc", formGroup: "formGroup" }, outputs: { formSubmit: "formSubmit", formDirty: "formDirty" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "formGroup", "submit"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "form", 0);
        ɵngcc0.ɵɵlistener("submit", function FormComponent_Template_form_submit_0_listener() { return ctx.onSubmit(); });
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("formGroup", ctx.formGroup);
    } }, directives: [ɵngcc1.ɵangular_packages_forms_forms_ba, ɵngcc1.NgControlStatusGroup, ɵngcc1.FormGroupDirective], styles: [""] });
FormComponent.propDecorators = {
    tc: [{ type: Input }],
    formGroup: [{ type: Input }],
    formSubmit: [{ type: Output }],
    formDirty: [{ type: Output }],
    errorMap: [{ type: Input }]
};
FormComponent = __decorate([
    UntilDestroy()
], FormComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FormComponent, [{
        type: Component,
        args: [{
                selector: 'sof-form',
                template: `
    <form [formGroup]="formGroup" (submit)="onSubmit()">
      <ng-content></ng-content>
    </form>
  `,
                styles: [""]
            }]
    }], function () { return []; }, { formSubmit: [{
            type: Output
        }], formDirty: [{
            type: Output
        }], errorMap: [{
            type: Input
        }], tc: [{
            type: Input
        }], formGroup: [{
            type: Input
        }] }); })();

class FormModule {
}
FormModule.ɵfac = function FormModule_Factory(t) { return new (t || FormModule)(); };
FormModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FormModule });
FormModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, ReactiveFormsModule, TranslateModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FormModule, { declarations: function () { return [FormComponent]; }, imports: function () { return [CommonModule, ReactiveFormsModule, TranslateModule]; }, exports: function () { return [FormComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FormModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ReactiveFormsModule, TranslateModule],
                declarations: [FormComponent],
                exports: [FormComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { FormComponent, FormModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-form.js.map