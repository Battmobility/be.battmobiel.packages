import { __decorate } from 'tslib';
import { EventEmitter, Component, ViewEncapsulation, Optional, Host, ChangeDetectorRef, Input, Output, ViewChild, ElementRef, NgModule } from '@angular/core';
import { FormControl, NgControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { takeUntilDestroy, Changes, UntilDestroy } from 'ngx-reactivetoolkit';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule } from '@sofico-framework/ui-kit/components/loading';
import { NzSelectModule } from 'ng-zorro-antd/select';

var InputSingleSelectComponent_1;
let InputSingleSelectComponent = InputSingleSelectComponent_1 = class InputSingleSelectComponent {
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
        // Whether the search is loading in case of a server based search
        this.searchLoading = false;
        // Whether the search will be done server side.
        // This will disable the filtering done on the options since we would expect
        // the options to be filtered already on server side.
        this.serverSearch = false;
        // Specify content to show when no result matches..
        this.notFoundContent = '.NOT-FOUND';
        // The placeholder of the input.
        this.placeholder = '';
        /**
         * Determines whether the input is in a valid state.
         */
        this.invalid = false;
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        /**
         * EventEmitter that will emit the full object value when changed
         */
        this.changeObjectValue = new EventEmitter();
        /**
         * EventEmitter that will emit the current search term
         */
        this.changeSearch = new EventEmitter();
        /**
         * EventEmitter that will emit when control is touched.
         */
        this.touch = new EventEmitter();
        // Form control used instead in simple value, as the ng-select component has internal implementation we can't reach.
        // By making use of a form control internally we have all the features available.
        this.internalFormControl = new FormControl(null);
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
                this.sofFocus();
                this.changeValue.emit(value);
                const fullObject = this.options.find(option => this.selectorValue(option) === value);
                this.changeObjectValue.emit(fullObject);
                if (this.propagateChange) {
                    this.propagateChange(value);
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
        this.internalFormControl.setValue(value !== null && value !== void 0 ? value : null, { emitEvent: false });
    }
    onTouch() {
        this.touch.emit();
        if (!this.isDisabled && this.propagateTouch) {
            this.propagateTouch();
        }
    }
    setDisabledState(value) {
        this.isDisabled = value;
    }
};
InputSingleSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-single-select',
                encapsulation: ViewEncapsulation.None,
                template: `
    <div class="single-select">
      <nz-select
        #inputElement
        [@.disabled]="true"
        [formControl]="internalFormControl"
        [nzSize]="size"
        [nzShowSearch]="showSearch"
        [nzAllowClear]="clearable"
        [nzBorderless]="borderless"
        [nzDisabled]="isDisabled"
        [nzFilterOption]="nzSearchFn"
        [nzServerSearch]="serverSearch"
        [nzPlaceHolder]="placeholder"
        [nzNotFoundContent]="tc + notFoundContent | translate"
        [class.is-invalid]="
          invalid ||
          (ngControl?.invalid && (ngControl?.touched || form?.submitted))
        "
        (nzBlur)="onTouch()"
        (nzOnSearch)="changeSearch.emit($event)"
      >
        <ng-container *ngFor="let o of formattedOptions$ | async">
          <nz-option
            *ngIf="!searchLoading"
            [nzValue]="o.value"
            [nzLabel]="o.label"
            [nzDisabled]="o.disabled"
          ></nz-option>
        </ng-container>
        <nz-option *ngIf="searchLoading" nzDisabled nzCustomContent>
          <sof-loading size="sm"></sof-loading>
        </nz-option>
      </nz-select>
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputSingleSelectComponent_1 }
                ],
                styles: ["sof-input-single-select .ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector{height:38px}sof-input-single-select nz-select{width:100%}sof-input-single-select .single-select nz-select-item,sof-input-single-select .single-select nz-select-placeholder{align-self:center}sof-input-single-select .single-select .ant-select.is-invalid:not(.ant-select-open) nz-select-top-control{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem);transition:none}sof-input-single-select .single-select .ant-select.is-invalid:not(.ant-select-open) nz-select-arrow{margin-right:calc(1.5em + .75rem)}"]
            },] }
];
InputSingleSelectComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef }
];
InputSingleSelectComponent.propDecorators = {
    tc: [{ type: Input }],
    size: [{ type: Input }],
    showSearch: [{ type: Input }],
    clearable: [{ type: Input }],
    borderless: [{ type: Input }],
    searchLoading: [{ type: Input }],
    serverSearch: [{ type: Input }],
    notFoundContent: [{ type: Input }],
    placeholder: [{ type: Input }],
    labelForId: [{ type: Input }],
    isDisabled: [{ type: Input }],
    selectorLabel: [{ type: Input }],
    selectorValue: [{ type: Input }],
    selectorDisabled: [{ type: Input }],
    options: [{ type: Input }],
    invalid: [{ type: Input }],
    changeValue: [{ type: Output }],
    changeObjectValue: [{ type: Output }],
    changeSearch: [{ type: Output }],
    touch: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement', { read: ElementRef },] }],
    searchFn: [{ type: Input }]
};
__decorate([
    Changes('options')
], InputSingleSelectComponent.prototype, "options$", void 0);
InputSingleSelectComponent = InputSingleSelectComponent_1 = __decorate([
    UntilDestroy()
], InputSingleSelectComponent);

class InputSingleSelectModule {
}
InputSingleSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    NzSelectModule,
                    FormsModule,
                    TranslateModule,
                    LoadingModule
                ],
                declarations: [InputSingleSelectComponent],
                exports: [InputSingleSelectComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputSingleSelectComponent, InputSingleSelectModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-single-select.js.map
