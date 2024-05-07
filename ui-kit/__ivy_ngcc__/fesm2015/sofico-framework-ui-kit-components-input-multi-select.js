import { __decorate } from 'tslib';
import { EventEmitter, Component, ViewEncapsulation, Optional, Host, ChangeDetectorRef, Input, Output, ViewChild, ElementRef, NgModule } from '@angular/core';
import { FormControl, NgControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { takeUntilDestroy, Changes, UntilDestroy } from 'ngx-reactivetoolkit';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NzSelectModule } from 'ng-zorro-antd/select';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@sofico-framework/ui-kit/components/form';
import * as ɵngcc2 from '@angular/forms';
import * as ɵngcc3 from 'ng-zorro-antd/select';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from '@ngx-translate/core';

const _c0 = ["inputElement"];
var InputMultiSelectComponent_1;
let InputMultiSelectComponent = InputMultiSelectComponent_1 = class InputMultiSelectComponent {
    constructor(form, ngControl, changeDetectorRef) {
        this.form = form;
        this.ngControl = ngControl;
        this.changeDetectorRef = changeDetectorRef;
        // Size of Select input
        this.size = 'large';
        // Whether to show the search icon
        this.showSearch = true;
        // Whether to show the clear button icon
        this.clearable = true;
        // Whether the select has borderless styling
        this.borderless = false;
        // Specify content to show when no result matches..
        this.notFoundContent = '.NOT-FOUND';
        // The placeholder of the input.
        this.placeholder = '';
        // Separator used to tokenize on tag/multiple mode
        this.tokenSeparators = [','];
        // Max tag count to show
        this.maxTagCount = 5;
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        // Form control used instead in simple value, as the ng-select component has internal implementation we can't reach.
        // By making use of a form control internally we have all the features available.
        this.internalFormControl = new FormControl([]);
        // Determines how the search is done.
        this.searchFn = (input, x) => { var _a; return (_a = x === null || x === void 0 ? void 0 : x.label) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(input.toLowerCase()); };
        this.nzSearchFn = (input, x) => this.searchFn(input, { label: x.nzLabel, value: x.nzValue });
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    sofFocus() {
        this.inputElement.nativeElement.getElementsByTagName('input')[0].focus();
        this.changeDetectorRef.detectChanges();
    }
    ngOnInit() {
        this.formattedOptions$ = this.options$.pipe(map(options => options !== null && options !== void 0 ? options : []), map(options => options.map(option => ({
            label: this.selectorLabel(option),
            value: this.selectorValue(option),
            disabled: this.selectorDisabled ? this.selectorDisabled(option) : null
        }))));
        // the reason why we're using valueChanges instead of fn ngModelChange
        // is because:
        // When we want to update the single-select without that the user
        // did something we will trigger the fn writeValue. That fn
        // will update the form value.
        // When we update the value we're aware of the change of the value.
        // So sometimes we don't want that valueChanges isn't triggered.
        // that's possible by adding { emitEvent: false } to the patchValue
        // but when you use the fn ngModelChange he will ignore the
        // { emitEvent: false } option. So to use that we need to
        // listen on the valueChanges events instead.
        this.internalFormControl.valueChanges
            .pipe(takeUntilDestroy(this))
            .subscribe(value => {
            if (!this.isDisabled) {
                this.changeValue.emit(this.internalFormControl.value);
                if (this.propagateChange) {
                    this.propagateChange(this.internalFormControl.value);
                }
            }
        });
    }
    ngOnChanges() { }
    ngOnDestroy() {
        var _a;
        if ((_a = this.ngControl) === null || _a === void 0 ? void 0 : _a.valueAccessor) {
            // Every time a control is re-created the previous writeValue reference(s) is not cleaned up.
            // So, over time, a lot of these references can be built up. This memory leak is a bug in Angular's implementation of ControlValueAccessor.
            // We hide that problem by assigning an empty function to writeValue every time we destroy the control.
            // An detailed explanation of the problem can be found here: https://github.com/angular/angular/pull/29335
            // The bug issue for it: https://github.com/angular/angular/issues/20007
            this.ngControl.valueAccessor.writeValue = () => { };
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouch = fn;
    }
    writeValue(value) {
        this.internalFormControl.setValue(value !== null && value !== void 0 ? value : [], { emitEvent: false });
    }
    onTouch() {
        if (!this.isDisabled && this.propagateTouch) {
            this.propagateTouch();
        }
    }
    setDisabledState(value) {
        this.isDisabled = value;
    }
};
InputMultiSelectComponent.ɵfac = function InputMultiSelectComponent_Factory(t) { return new (t || InputMultiSelectComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FormComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgControl, 9), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
InputMultiSelectComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputMultiSelectComponent, selectors: [["sof-input-multi-select"]], viewQuery: function InputMultiSelectComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 1, ElementRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, inputs: { size: "size", showSearch: "showSearch", clearable: "clearable", borderless: "borderless", notFoundContent: "notFoundContent", placeholder: "placeholder", tokenSeparators: "tokenSeparators", maxTagCount: "maxTagCount", searchFn: "searchFn", isDisabled: "isDisabled", tc: "tc", maxMultipleCount: "maxMultipleCount", labelForId: "labelForId", options: "options", selectorLabel: "selectorLabel", selectorValue: "selectorValue", selectorDisabled: "selectorDisabled", invalid: "invalid" }, outputs: { changeValue: "changeValue" }, features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: SOF_FOCUS_COMPONENT, useExisting: InputMultiSelectComponent_1 }
        ]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 20, consts: [[1, "multi-select"], ["nzMode", "multiple", 3, "formControl", "nzOptions", "nzSize", "nzShowArrow", "nzShowSearch", "nzAllowClear", "nzBorderless", "nzDisabled", "nzFilterOption", "nzPlaceHolder", "nzNotFoundContent", "nzTokenSeparators", "nzMaxTagCount", "nzBlur"], ["inputElement", ""]], template: function InputMultiSelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "nz-select", 1, 2);
        ɵngcc0.ɵɵlistener("nzBlur", function InputMultiSelectComponent_Template_nz_select_nzBlur_1_listener() { return ctx.onTouch(); });
        ɵngcc0.ɵɵpipe(3, "async");
        ɵngcc0.ɵɵpipe(4, "translate");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("is-invalid", ctx.invalid || (ctx.ngControl == null ? null : ctx.ngControl.invalid) && ((ctx.ngControl == null ? null : ctx.ngControl.touched) || (ctx.form == null ? null : ctx.form.submitted)));
        ɵngcc0.ɵɵproperty("@.disabled", true)("formControl", ctx.internalFormControl)("nzOptions", ɵngcc0.ɵɵpipeBind1(3, 16, ctx.formattedOptions$))("nzSize", ctx.size)("nzShowArrow", true)("nzShowSearch", ctx.showSearch)("nzAllowClear", ctx.clearable)("nzBorderless", ctx.borderless)("nzDisabled", ctx.isDisabled)("nzFilterOption", ctx.nzSearchFn)("nzPlaceHolder", ctx.placeholder)("nzNotFoundContent", ɵngcc0.ɵɵpipeBind1(4, 18, ctx.tc + ctx.notFoundContent))("nzTokenSeparators", ctx.tokenSeparators)("nzMaxTagCount", ctx.maxTagCount);
    } }, directives: [ɵngcc3.NzSelectComponent, ɵngcc2.NgControlStatus, ɵngcc2.FormControlDirective], pipes: [ɵngcc4.AsyncPipe, ɵngcc5.TranslatePipe], styles: ["sof-input-multi-select .ant-select-multiple.ant-select-lg .ant-select-selector:after{line-height:30px}sof-input-multi-select .ant-select-multiple.ant-select-lg .ant-select-selection-item{line-height:32px;height:32px}sof-input-multi-select nz-select{width:100%}sof-input-multi-select .multi-select nz-select-item,sof-input-multi-select .multi-select nz-select-placeholder{align-items:center}sof-input-multi-select .multi-select nz-select-top-control{align-content:center}sof-input-multi-select .multi-select .ant-select.is-invalid:not(.ant-select-open) nz-select-top-control{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem);transition:none}sof-input-multi-select .multi-select .ant-select.is-invalid:not(.ant-select-open) nz-select-arrow{margin-right:calc(1.5em + .75rem)}"], encapsulation: 2 });
InputMultiSelectComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef }
];
InputMultiSelectComponent.propDecorators = {
    tc: [{ type: Input }],
    size: [{ type: Input }],
    showSearch: [{ type: Input }],
    clearable: [{ type: Input }],
    borderless: [{ type: Input }],
    notFoundContent: [{ type: Input }],
    placeholder: [{ type: Input }],
    tokenSeparators: [{ type: Input }],
    maxMultipleCount: [{ type: Input }],
    maxTagCount: [{ type: Input }],
    labelForId: [{ type: Input }],
    isDisabled: [{ type: Input }],
    options: [{ type: Input }],
    selectorLabel: [{ type: Input }],
    selectorValue: [{ type: Input }],
    selectorDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    changeValue: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement', { read: ElementRef },] }],
    searchFn: [{ type: Input }]
};
__decorate([
    Changes('options')
], InputMultiSelectComponent.prototype, "options$", void 0);
InputMultiSelectComponent = InputMultiSelectComponent_1 = __decorate([
    UntilDestroy()
], InputMultiSelectComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputMultiSelectComponent, [{
        type: Component,
        args: [{
                selector: 'sof-input-multi-select',
                encapsulation: ViewEncapsulation.None,
                template: `
    <div class="multi-select">
      <nz-select
        #inputElement
        [@.disabled]="true"
        [formControl]="internalFormControl"
        [nzOptions]="formattedOptions$ | async"
        nzMode="multiple"
        [nzSize]="size"
        [nzShowArrow]="true"
        [nzShowSearch]="showSearch"
        [nzAllowClear]="clearable"
        [nzBorderless]="borderless"
        [nzDisabled]="isDisabled"
        [nzFilterOption]="nzSearchFn"
        [nzPlaceHolder]="placeholder"
        [nzNotFoundContent]="tc + notFoundContent | translate"
        [nzTokenSeparators]="tokenSeparators"
        [nzMaxTagCount]="maxTagCount"
        [class.is-invalid]="
          invalid ||
          (ngControl?.invalid && (ngControl?.touched || form?.submitted))
        "
        (nzBlur)="onTouch()"
      ></nz-select>
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputMultiSelectComponent_1 }
                ],
                styles: ["sof-input-multi-select .ant-select-multiple.ant-select-lg .ant-select-selector:after{line-height:30px}sof-input-multi-select .ant-select-multiple.ant-select-lg .ant-select-selection-item{line-height:32px;height:32px}sof-input-multi-select nz-select{width:100%}sof-input-multi-select .multi-select nz-select-item,sof-input-multi-select .multi-select nz-select-placeholder{align-items:center}sof-input-multi-select .multi-select nz-select-top-control{align-content:center}sof-input-multi-select .multi-select .ant-select.is-invalid:not(.ant-select-open) nz-select-top-control{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem);transition:none}sof-input-multi-select .multi-select .ant-select.is-invalid:not(.ant-select-open) nz-select-arrow{margin-right:calc(1.5em + .75rem)}"]
            }]
    }], function () { return [{ type: ɵngcc1.FormComponent, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.NgControl, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, { size: [{
            type: Input
        }], showSearch: [{
            type: Input
        }], clearable: [{
            type: Input
        }], borderless: [{
            type: Input
        }], notFoundContent: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], tokenSeparators: [{
            type: Input
        }], maxTagCount: [{
            type: Input
        }], changeValue: [{
            type: Output
        }], searchFn: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], tc: [{
            type: Input
        }], maxMultipleCount: [{
            type: Input
        }], labelForId: [{
            type: Input
        }], options: [{
            type: Input
        }], selectorLabel: [{
            type: Input
        }], selectorValue: [{
            type: Input
        }], selectorDisabled: [{
            type: Input
        }], invalid: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { read: ElementRef }]
        }] }); })();

class InputMultiSelectModule {
}
InputMultiSelectModule.ɵfac = function InputMultiSelectModule_Factory(t) { return new (t || InputMultiSelectModule)(); };
InputMultiSelectModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputMultiSelectModule });
InputMultiSelectModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzSelectModule,
            FormsModule,
            TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputMultiSelectModule, { declarations: function () { return [InputMultiSelectComponent]; }, imports: function () { return [CommonModule,
        ReactiveFormsModule,
        NzSelectModule,
        FormsModule,
        TranslateModule]; }, exports: function () { return [InputMultiSelectComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputMultiSelectModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    NzSelectModule,
                    FormsModule,
                    TranslateModule
                ],
                declarations: [InputMultiSelectComponent],
                exports: [InputMultiSelectComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { InputMultiSelectComponent, InputMultiSelectModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-input-multi-select.js.map