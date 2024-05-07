import { __decorate } from 'tslib';
import { Component, Optional, Input, ContentChildren, NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { InputDirective } from '@sofico-framework/ui-kit/components/input';
import { isObject, UtilsPipesModule } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { startWith, switchMap, debounceTime, filter, map, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

let InputWrapperComponent = class InputWrapperComponent {
    constructor(form) {
        this.form = form;
    }
    ngOnDestroy() { }
    ngAfterContentInit() {
        var _a;
        this.tc = (_a = this.form) === null || _a === void 0 ? void 0 : _a.tc;
        // we need a trigger when the formgroup adds or removes controls
        const trigger$ = this.form.formGroup.valueChanges.pipe(startWith(null));
        this.control$ = trigger$.pipe(switchMap(() => this.children.changes
            .pipe(startWith(this.children), debounceTime(0) // children is not updated yet by angular
        )
            .pipe(filter(children => (children === null || children === void 0 ? void 0 : children.length) > 0), // ignore if no children
        // this is to allow radiobuttons
        map(children => [
            ...new Set(children.map(v => v.formControl))
        ]), tap(children => {
            // throw error if length of distincted children is different then 1
            if (children.length !== 1) {
                throw new Error('A sof-input-wrapper component can only contain one InputDirective (unless its a radiobutton)');
            }
        }), map(children => children[0]) // only one distinct control supported
        )), takeUntilDestroy(this));
        this.required$ = this.control$.pipe(map(control => {
            var _a;
            return (control === null || control === void 0 ? void 0 : control.validator) &&
                ((_a = control === null || control === void 0 ? void 0 : control.validator(new FormControl(''))) === null || _a === void 0 ? void 0 : _a.required) === true;
        }));
        this.errorMessages$ = this.control$.pipe(switchMap(control => {
            return control === null || control === void 0 ? void 0 : control.statusChanges.pipe(startWith(control.status), map(status => this.mapErrorObjToMessages(control.errors, this.form.actualErrorMap)));
        }));
    }
    mapErrorObjToMessages(obj, errorMap) {
        return (errorMap &&
            obj &&
            Object.keys(obj).map(k => {
                const params = obj[k];
                return {
                    value: errorMap[k],
                    params: isObject(params) ? params : null
                };
            }));
    }
};
InputWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-wrapper',
                template: `
    <div class="form-group">
      <label
        *ngIf="!(label | sofIsNullOrUndefined)"
        class="sb-form-control-wrapper-label"
      >
        {{ label }}
        <ng-container *ngIf="required$ | async"> *</ng-container>
      </label>

      <div>
        <ng-content></ng-content>
      </div>
      <small *ngIf="hint?.length > 0" class="form-text text-muted">
        {{ hint }}
      </small>
      <ng-container *ngIf="errorMessages$ | async as errorMessages">
        <ul
          *ngIf="
            errorMessages?.length > 0 &&
            ((control$ | async)?.touched || form?.submitted)
          "
        >
          <ng-container *ngFor="let message of errorMessages">
            <li class="invalid-feedback" [style.display]="'block'">
              {{ tc + '.' + message.value | translate: message.params }}
            </li>
          </ng-container>
        </ul>
      </ng-container>
    </div>
  `,
                styles: ["ul{list-style-type:none;padding:0}"]
            },] }
];
InputWrapperComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] }
];
InputWrapperComponent.propDecorators = {
    label: [{ type: Input }],
    hint: [{ type: Input }],
    children: [{ type: ContentChildren, args: [InputDirective,] }]
};
InputWrapperComponent = __decorate([
    UntilDestroy()
], InputWrapperComponent);

class InputWrapperModule {
}
InputWrapperModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, UtilsPipesModule, TranslateModule],
                declarations: [InputWrapperComponent],
                exports: [InputWrapperComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputWrapperComponent, InputWrapperModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-wrapper.js.map
