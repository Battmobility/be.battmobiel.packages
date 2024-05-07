import { __decorate } from 'tslib';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { Subject } from 'rxjs';
import { distinctUntilChanged, startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

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
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-form',
                template: `
    <form [formGroup]="formGroup" (submit)="onSubmit()">
      <ng-content></ng-content>
    </form>
  `,
                styles: [""]
            },] }
];
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

class FormModule {
}
FormModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ReactiveFormsModule, TranslateModule],
                declarations: [FormComponent],
                exports: [FormComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { FormComponent, FormModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-form.js.map
