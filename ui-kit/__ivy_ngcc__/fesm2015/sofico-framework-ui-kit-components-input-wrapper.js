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

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@sofico-framework/ui-kit/components/form';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '@sofico-framework/utils';
import * as ɵngcc4 from '@ngx-translate/core';

function InputWrapperComponent_label_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1, " *");
    ɵngcc0.ɵɵelementContainerEnd();
} }
function InputWrapperComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "label", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, InputWrapperComponent_label_1_ng_container_2_Template, 2, 0, "ng-container", 3);
    ɵngcc0.ɵɵpipe(3, "async");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.label, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(3, 2, ctx_r0.required$));
} }
function InputWrapperComponent_small_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "small", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.hint, " ");
} }
function InputWrapperComponent_ng_container_6_ul_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "li", 7);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "translate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r7 = ctx.$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("display", "block");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(3, 3, ctx_r6.tc + "." + message_r7.value, message_r7.params), " ");
} }
function InputWrapperComponent_ng_container_6_ul_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul");
    ɵngcc0.ɵɵtemplate(1, InputWrapperComponent_ng_container_6_ul_1_ng_container_1_Template, 4, 6, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const errorMessages_r4 = ɵngcc0.ɵɵnextContext().ngIf;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", errorMessages_r4);
} }
function InputWrapperComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, InputWrapperComponent_ng_container_6_ul_1_Template, 2, 1, "ul", 3);
    ɵngcc0.ɵɵpipe(2, "async");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const errorMessages_r4 = ctx.ngIf;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    let tmp_0_0 = null;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (errorMessages_r4 == null ? null : errorMessages_r4.length) > 0 && (((tmp_0_0 = ɵngcc0.ɵɵpipeBind1(2, 1, ctx_r2.control$)) == null ? null : tmp_0_0.touched) || (ctx_r2.form == null ? null : ctx_r2.form.submitted)));
} }
const _c0 = ["*"];
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
InputWrapperComponent.ɵfac = function InputWrapperComponent_Factory(t) { return new (t || InputWrapperComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FormComponent, 8)); };
InputWrapperComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputWrapperComponent, selectors: [["sof-input-wrapper"]], contentQueries: function InputWrapperComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, InputDirective, 0);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.children = _t);
    } }, inputs: { label: "label", hint: "hint" }, ngContentSelectors: _c0, decls: 8, vars: 7, consts: [[1, "form-group"], ["class", "sb-form-control-wrapper-label", 4, "ngIf"], ["class", "form-text text-muted", 4, "ngIf"], [4, "ngIf"], [1, "sb-form-control-wrapper-label"], [1, "form-text", "text-muted"], [4, "ngFor", "ngForOf"], [1, "invalid-feedback"]], template: function InputWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, InputWrapperComponent_label_1_Template, 4, 4, "label", 1);
        ɵngcc0.ɵɵpipe(2, "sofIsNullOrUndefined");
        ɵngcc0.ɵɵelementStart(3, "div");
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, InputWrapperComponent_small_5_Template, 2, 1, "small", 2);
        ɵngcc0.ɵɵtemplate(6, InputWrapperComponent_ng_container_6_Template, 3, 3, "ng-container", 3);
        ɵngcc0.ɵɵpipe(7, "async");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ɵngcc0.ɵɵpipeBind1(2, 3, ctx.label));
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", (ctx.hint == null ? null : ctx.hint.length) > 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(7, 5, ctx.errorMessages$));
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf], pipes: [ɵngcc3.IsNullOrUndefinedPipe, ɵngcc2.AsyncPipe, ɵngcc4.TranslatePipe], styles: ["ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}"] });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputWrapperComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc1.FormComponent, decorators: [{
                type: Optional
            }] }]; }, { label: [{
            type: Input
        }], hint: [{
            type: Input
        }], children: [{
            type: ContentChildren,
            args: [InputDirective]
        }] }); })();

class InputWrapperModule {
}
InputWrapperModule.ɵfac = function InputWrapperModule_Factory(t) { return new (t || InputWrapperModule)(); };
InputWrapperModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputWrapperModule });
InputWrapperModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, UtilsPipesModule, TranslateModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputWrapperModule, { declarations: function () { return [InputWrapperComponent]; }, imports: function () { return [CommonModule, UtilsPipesModule, TranslateModule]; }, exports: function () { return [InputWrapperComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputWrapperModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, UtilsPipesModule, TranslateModule],
                declarations: [InputWrapperComponent],
                exports: [InputWrapperComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { InputWrapperComponent, InputWrapperModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-input-wrapper.js.map