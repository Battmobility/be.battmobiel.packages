var InputSingleSelectTextHybridComponent_1;
import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { hotSafe } from '@sofico-framework/utils';
import { Changes, takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { map } from 'rxjs/operators';
let InputSingleSelectTextHybridComponent = InputSingleSelectTextHybridComponent_1 = class InputSingleSelectTextHybridComponent {
    constructor(form, ngControl, changeDetectorRef) {
        this.form = form;
        this.ngControl = ngControl;
        this.changeDetectorRef = changeDetectorRef;
        // Size of Select input
        this.size = 'large';
        //  Whether to show the search icon
        this.showSearch = true;
        // Whether the select has borderless styling
        this.borderless = false;
        // Specify content to show when no result matches..
        this.notFoundContent = '.NOT-FOUND';
        /**
         * The placeholder of the input.
         */
        this.placeholder = '';
        /**
         * Determines whether the input is in a valid state.
         */
        this.invalid = false;
        /**
         * Determines whether the input can be cleared.
         */
        this.clearable = true;
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        /**
         * EventEmitter that will emit the full object value when changed
         */
        this.changeObjectValue = new EventEmitter();
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
        if (this.freeForm) {
            this.inputElement.nativeElement.focus();
        }
        else if (this.nzSelectElement) {
            this.nzSelectElement.nativeElement
                .getElementsByTagName('input')[0]
                .focus();
            this.changeDetectorRef.detectChanges();
        }
    }
    ngOnInit() {
        this.formattedOptions$ = this.options$.pipe(map(options => options !== null && options !== void 0 ? options : []), map(options => options.map(option => ({
            label: this.selectorLabel(option),
            value: this.selectorValue(option),
            disabled: this.selectorDisabled ? this.selectorDisabled(option) : null
        }))), hotSafe());
        this.disabled$.pipe(takeUntilDestroy(this)).subscribe(disabled => {
            if (disabled) {
                this.internalFormControl.disable({ emitEvent: false });
            }
            else {
                this.internalFormControl.enable({ emitEvent: false });
            }
        });
        this.freeForm$.pipe(takeUntilDestroy(this)).subscribe(disabled => {
            if (this.internalFormControl.value !== null) {
                this.internalFormControl.patchValue(null);
                this.onChange();
            }
        });
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
                if (!this.freeForm) {
                    this.sofFocus();
                }
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
    onChange() {
        if (!this.isDisabled) {
            this.changeValue.emit(this.internalFormControl.value);
            const fullObject = this.options.find(option => this.selectorValue(option) === this.internalFormControl.value);
            this.changeObjectValue.emit(fullObject);
            if (this.propagateChange) {
                this.propagateChange(this.internalFormControl.value);
            }
        }
    }
    onTouch() {
        this.touch.emit();
        if (!this.isDisabled && this.propagateTouch) {
            this.propagateTouch();
        }
    }
    setDisabledState(value) {
        this.isDisabled = value;
        if (value) {
            this.internalFormControl.disable({ emitEvent: false });
        }
        else {
            this.internalFormControl.enable({ emitEvent: false });
        }
    }
};
InputSingleSelectTextHybridComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-single-select-text-hybrid',
                encapsulation: ViewEncapsulation.None,
                template: `
    <div class="single-select" *ngIf="!freeForm">
      <nz-select
        #nzSelectElement
        [@.disabled]="true"
        [formControl]="internalFormControl"
        [nzOptions]="formattedOptions$ | async"
        [nzSize]="size"
        [nzShowSearch]="showSearch"
        [nzAllowClear]="clearable"
        [nzBorderless]="borderless"
        [nzDisabled]="isDisabled"
        [nzFilterOption]="nzSearchFn"
        [nzPlaceHolder]="placeholder"
        [nzNotFoundContent]="tc + notFoundContent | translate"
        [class.is-invalid]="
          invalid ||
          (ngControl?.invalid && (ngControl?.touched || form?.submitted))
        "
        (nzBlur)="onTouch()"
      ></nz-select>
    </div>
    <input
      #inputElement
      *ngIf="freeForm"
      type="text"
      [attr.id]="labelForId"
      [formControl]="internalFormControl"
      class="form-control"
      [class.is-invalid]="
        invalid ||
        (ngControl?.invalid && (ngControl?.touched || form?.submitted))
      "
      [placeholder]="placeholder"
      (input)="onChange()"
      (blur)="onTouch()"
    />
  `,
                providers: [
                    {
                        provide: SOF_FOCUS_COMPONENT,
                        useExisting: InputSingleSelectTextHybridComponent_1
                    }
                ],
                styles: ["sof-input-single-select-text-hybrid .ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector{height:38px}sof-input-single-select-text-hybrid nz-select{width:100%}sof-input-single-select-text-hybrid .single-select nz-select-item,sof-input-single-select-text-hybrid .single-select nz-select-placeholder{align-self:center}sof-input-single-select-text-hybrid .single-select .ant-select.is-invalid:not(.ant-select-open) nz-select-top-control{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem);transition:none}sof-input-single-select-text-hybrid .single-select .ant-select.is-invalid:not(.ant-select-open) nz-select-arrow{margin-right:calc(1.5em + .75rem)}"]
            },] }
];
InputSingleSelectTextHybridComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef }
];
InputSingleSelectTextHybridComponent.propDecorators = {
    tc: [{ type: Input }],
    size: [{ type: Input }],
    showSearch: [{ type: Input }],
    borderless: [{ type: Input }],
    notFoundContent: [{ type: Input }],
    freeForm: [{ type: Input }],
    labelForId: [{ type: Input }],
    isDisabled: [{ type: Input }],
    placeholder: [{ type: Input }],
    options: [{ type: Input }],
    selectorLabel: [{ type: Input }],
    selectorValue: [{ type: Input }],
    selectorDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    clearable: [{ type: Input }],
    changeValue: [{ type: Output }],
    changeObjectValue: [{ type: Output }],
    touch: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    nzSelectElement: [{ type: ViewChild, args: ['nzSelectElement', { read: ElementRef },] }],
    searchFn: [{ type: Input }]
};
__decorate([
    Changes('options')
], InputSingleSelectTextHybridComponent.prototype, "options$", void 0);
__decorate([
    Changes('isDisabled')
], InputSingleSelectTextHybridComponent.prototype, "disabled$", void 0);
__decorate([
    Changes('freeForm')
], InputSingleSelectTextHybridComponent.prototype, "freeForm$", void 0);
InputSingleSelectTextHybridComponent = InputSingleSelectTextHybridComponent_1 = __decorate([
    UntilDestroy()
], InputSingleSelectTextHybridComponent);
export { InputSingleSelectTextHybridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2luZ2xlLXNlbGVjdC10ZXh0LWh5YnJpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2lucHV0LXNpbmdsZS1zZWxlY3QtdGV4dC1oeWJyaWQvaW5wdXQtc2luZ2xlLXNlbGVjdC10ZXh0LWh5YnJpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFFbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBTWxELE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0lBb0R4QixvQ0FBb0Msa0RBQXBDLG9DQUFvQztJQTRHL0MsWUFDcUIsSUFBbUIsRUFDWCxTQUFvQixFQUN2QyxpQkFBb0M7UUFGekIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNYLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDdkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTNHOUMsdUJBQXVCO1FBQ2QsU0FBSSxHQUFxQixPQUFPLENBQUM7UUFFMUMsbUNBQW1DO1FB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LEtBQUs7eUJBR0wsS0FBSzs4QkFHTCxLQUFLO3VCQUtMLEtBQUs7eUJBS0wsS0FBSzt5QkFLTCxLQUFLOzBCQUtMLEtBQUs7c0JBS0wsS0FBSzs0QkFLTCxLQUFLOzRCQUtMLEtBQUs7K0JBS0wsS0FBSztzQkFLTCxLQUFLO3dCQUtMLEtBQUs7MEJBS0wsTUFBTTtnQ0FLTixNQUFNO29CQUtOLE1BQU07MkJBaUJOLFNBQVMsU0FBQyxjQUFjOzhCQUN4QixTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3VCQUlqRCxLQUFLOztBQWJjO0lBQW5CLE9BQU8sQ0FBQyxTQUFTLENBQUM7c0VBQTZCO0FBQ3pCO0lBQXRCLE9BQU8sQ0FBQyxZQUFZLENBQUM7dUVBQWdDO0FBQ2pDO0lBQXBCLE9BQU8sQ0FBQyxVQUFVLENBQUM7dUVBQWdDO0FBMUZ6QyxvQ0FBb0M7SUFsRGhELFlBQVksRUFBRTtHQWtERixvQ0FBb0MsQ0FrUGhEO1NBbFBZLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCB7XG4gIE9uU29mRm9jdXMsXG4gIFNPRl9GT0NVU19DT01QT05FTlRcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2RpcmVjdGl2ZXMvZm9jdXMnO1xuaW1wb3J0IHsgU2VhcmNoRm5TZWxlY3QsIFNlYXJjaE9wdGlvbiB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC90eXBlcyc7XG5pbXBvcnQgeyBob3RTYWZlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuaW1wb3J0IHtcbiAgTnpGaWx0ZXJPcHRpb25UeXBlLFxuICBOelNlbGVjdEl0ZW1JbnRlcmZhY2UsXG4gIE56U2VsZWN0U2l6ZVR5cGVcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9zZWxlY3QnO1xuaW1wb3J0IHsgQ2hhbmdlcywgdGFrZVVudGlsRGVzdHJveSwgVW50aWxEZXN0cm95IH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWlucHV0LXNpbmdsZS1zZWxlY3QtdGV4dC1oeWJyaWQnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1zaW5nbGUtc2VsZWN0LXRleHQtaHlicmlkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNpbmdsZS1zZWxlY3RcIiAqbmdJZj1cIiFmcmVlRm9ybVwiPlxuICAgICAgPG56LXNlbGVjdFxuICAgICAgICAjbnpTZWxlY3RFbGVtZW50XG4gICAgICAgIFtALmRpc2FibGVkXT1cInRydWVcIlxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiaW50ZXJuYWxGb3JtQ29udHJvbFwiXG4gICAgICAgIFtuek9wdGlvbnNdPVwiZm9ybWF0dGVkT3B0aW9ucyQgfCBhc3luY1wiXG4gICAgICAgIFtuelNpemVdPVwic2l6ZVwiXG4gICAgICAgIFtuelNob3dTZWFyY2hdPVwic2hvd1NlYXJjaFwiXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiY2xlYXJhYmxlXCJcbiAgICAgICAgW256Qm9yZGVybGVzc109XCJib3JkZXJsZXNzXCJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICAgIFtuekZpbHRlck9wdGlvbl09XCJuelNlYXJjaEZuXCJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwidGMgKyBub3RGb3VuZENvbnRlbnQgfCB0cmFuc2xhdGVcIlxuICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJcbiAgICAgICAgICBpbnZhbGlkIHx8XG4gICAgICAgICAgKG5nQ29udHJvbD8uaW52YWxpZCAmJiAobmdDb250cm9sPy50b3VjaGVkIHx8IGZvcm0/LnN1Ym1pdHRlZCkpXG4gICAgICAgIFwiXG4gICAgICAgIChuekJsdXIpPVwib25Ub3VjaCgpXCJcbiAgICAgID48L256LXNlbGVjdD5cbiAgICA8L2Rpdj5cbiAgICA8aW5wdXRcbiAgICAgICNpbnB1dEVsZW1lbnRcbiAgICAgICpuZ0lmPVwiZnJlZUZvcm1cIlxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgW2F0dHIuaWRdPVwibGFiZWxGb3JJZFwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiaW50ZXJuYWxGb3JtQ29udHJvbFwiXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJcbiAgICAgICAgaW52YWxpZCB8fFxuICAgICAgICAobmdDb250cm9sPy5pbnZhbGlkICYmIChuZ0NvbnRyb2w/LnRvdWNoZWQgfHwgZm9ybT8uc3VibWl0dGVkKSlcbiAgICAgIFwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgKGlucHV0KT1cIm9uQ2hhbmdlKClcIlxuICAgICAgKGJsdXIpPVwib25Ub3VjaCgpXCJcbiAgICAvPlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBTT0ZfRk9DVVNfQ09NUE9ORU5ULFxuICAgICAgdXNlRXhpc3Rpbmc6IElucHV0U2luZ2xlU2VsZWN0VGV4dEh5YnJpZENvbXBvbmVudFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFNpbmdsZVNlbGVjdFRleHRIeWJyaWRDb21wb25lbnRcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Tb2ZGb2N1cyB7XG4gIEBJbnB1dCgpIHRjOiBzdHJpbmc7XG5cbiAgLy8gU2l6ZSBvZiBTZWxlY3QgaW5wdXRcbiAgQElucHV0KCkgc2l6ZTogTnpTZWxlY3RTaXplVHlwZSA9ICdsYXJnZSc7XG5cbiAgLy8gIFdoZXRoZXIgdG8gc2hvdyB0aGUgc2VhcmNoIGljb25cbiAgQElucHV0KCkgc2hvd1NlYXJjaCA9IHRydWU7XG5cbiAgLy8gV2hldGhlciB0aGUgc2VsZWN0IGhhcyBib3JkZXJsZXNzIHN0eWxpbmdcbiAgQElucHV0KCkgYm9yZGVybGVzcyA9IGZhbHNlO1xuXG4gIC8vIFNwZWNpZnkgY29udGVudCB0byBzaG93IHdoZW4gbm8gcmVzdWx0IG1hdGNoZXMuLlxuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnQgPSAnLk5PVC1GT1VORCc7XG5cbiAgLyoqXG4gICAqIFN3aXRjaCB0byBmcmVlZm9ybSBpbnB1dFxuICAgKi9cbiAgQElucHV0KCkgZnJlZUZvcm06IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgaW5wdXQgdG8gY29ubmVjdCB0byBhIGxhYmVsIHRhZy5cbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsRm9ySWQ6IHN0cmluZztcblxuICAvKipcbiAgICogIERldGVybWluZXMgaWYgdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIHBsYWNlaG9sZGVyIG9mIHRoZSBpbnB1dC5cbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb25zIHRoYXQgcG9wdWxhdGUgdGhlIGxpc3QuXG4gICAqL1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnlbXTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGljaCBwcm9wZXJ0eSB0aGF0IG11c3QgYmUgdXNlZCBhcyBsaXN0IGxhYmVsLlxuICAgKi9cbiAgQElucHV0KCkgc2VsZWN0b3JMYWJlbDogKHg6IGFueSkgPT4gYW55O1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoaWNoIHByb3BlcnR5IHRoYXQgbXVzdCBiZSB1c2VkIGFzIGxpc3QgdmFsdWUuXG4gICAqL1xuICBASW5wdXQoKSBzZWxlY3RvclZhbHVlOiAoeDogYW55KSA9PiBhbnk7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hpY2ggcHJvcGVydHkgdGhhdCBtdXN0IGJlIHVzZWQgYXMgb3B0aW9uIGRpc2FibGUuXG4gICAqL1xuICBASW5wdXQoKSBzZWxlY3RvckRpc2FibGVkOiAoeDogYW55KSA9PiBhbnk7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgaXMgaW4gYSB2YWxpZCBzdGF0ZS5cbiAgICovXG4gIEBJbnB1dCgpIGludmFsaWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBpbnB1dCBjYW4gYmUgY2xlYXJlZC5cbiAgICovXG4gIEBJbnB1dCgpIGNsZWFyYWJsZSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEV2ZW50RW1pdHRlciB0aGF0IHdpbGwgZW1pdCB0aGUgdmFsdWUgd2hlbiBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZVZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50RW1pdHRlciB0aGF0IHdpbGwgZW1pdCB0aGUgZnVsbCBvYmplY3QgdmFsdWUgd2hlbiBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlT2JqZWN0VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHdoZW4gY29udHJvbCBpcyB0b3VjaGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIHRvdWNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLy8gRm9ybSBjb250cm9sIHVzZWQgaW5zdGVhZCBpbiBzaW1wbGUgdmFsdWUsIGFzIHRoZSBuZy1zZWxlY3QgY29tcG9uZW50IGhhcyBpbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiB3ZSBjYW4ndCByZWFjaC5cbiAgLy8gQnkgbWFraW5nIHVzZSBvZiBhIGZvcm0gY29udHJvbCBpbnRlcm5hbGx5IHdlIGhhdmUgYWxsIHRoZSBmZWF0dXJlcyBhdmFpbGFibGUuXG4gIGludGVybmFsRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wobnVsbCk7XG4gIHByb3BhZ2F0ZUNoYW5nZTogYW55O1xuICBwcm9wYWdhdGVUb3VjaDogYW55O1xuXG4gIC8vIHNvdXJjZSBzdHJlYW1zXG4gIEBDaGFuZ2VzKCdvcHRpb25zJykgb3B0aW9ucyQ6IE9ic2VydmFibGU8YW55W10+O1xuICBAQ2hhbmdlcygnaXNEaXNhYmxlZCcpIGRpc2FibGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgQENoYW5nZXMoJ2ZyZWVGb3JtJykgZnJlZUZvcm0kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIC8vIHByZXNlbnRhdGlvbiBzdHJlYW1zXG4gIGZvcm1hdHRlZE9wdGlvbnMkOiBPYnNlcnZhYmxlPFxuICAgIHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IGFueTsgZGlzYWJsZWQ6IGJvb2xlYW4gfVtdXG4gID47XG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbnpTZWxlY3RFbGVtZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIG56U2VsZWN0RWxlbWVudDogRWxlbWVudFJlZjtcblxuICAvLyBEZXRlcm1pbmVzIGhvdyB0aGUgc2VhcmNoIGlzIGRvbmUuXG4gIEBJbnB1dCgpXG4gIHNlYXJjaEZuOiBTZWFyY2hGblNlbGVjdCA9IChpbnB1dDogc3RyaW5nLCB4OiBTZWFyY2hPcHRpb24pID0+XG4gICAgeD8ubGFiZWw/LnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChpbnB1dC50b0xvd2VyQ2FzZSgpKTtcblxuICBuelNlYXJjaEZuOiBOekZpbHRlck9wdGlvblR5cGUgPSAoaW5wdXQ6IHN0cmluZywgeDogTnpTZWxlY3RJdGVtSW50ZXJmYWNlKSA9PlxuICAgIHRoaXMuc2VhcmNoRm4oaW5wdXQsIHsgbGFiZWw6IHgubnpMYWJlbCBhcyBzdHJpbmcsIHZhbHVlOiB4Lm56VmFsdWUgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGZvcm06IEZvcm1Db21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgaWYgKG5nQ29udHJvbCkge1xuICAgICAgbmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHNvZkZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZyZWVGb3JtKSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm56U2VsZWN0RWxlbWVudCkge1xuICAgICAgdGhpcy5uelNlbGVjdEVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF1cbiAgICAgICAgLmZvY3VzKCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1hdHRlZE9wdGlvbnMkID0gdGhpcy5vcHRpb25zJC5waXBlKFxuICAgICAgbWFwKG9wdGlvbnMgPT4gb3B0aW9ucyA/PyBbXSksXG4gICAgICBtYXAob3B0aW9ucyA9PlxuICAgICAgICBvcHRpb25zLm1hcChvcHRpb24gPT4gKHtcbiAgICAgICAgICBsYWJlbDogdGhpcy5zZWxlY3RvckxhYmVsKG9wdGlvbiksXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc2VsZWN0b3JWYWx1ZShvcHRpb24pLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnNlbGVjdG9yRGlzYWJsZWQgPyB0aGlzLnNlbGVjdG9yRGlzYWJsZWQob3B0aW9uKSA6IG51bGxcbiAgICAgICAgfSkpXG4gICAgICApLFxuICAgICAgaG90U2FmZSgpXG4gICAgKTtcblxuICAgIHRoaXMuZGlzYWJsZWQkLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSkuc3Vic2NyaWJlKGRpc2FibGVkID0+IHtcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmludGVybmFsRm9ybUNvbnRyb2wuZGlzYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmludGVybmFsRm9ybUNvbnRyb2wuZW5hYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmZyZWVGb3JtJC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpLnN1YnNjcmliZShkaXNhYmxlZCA9PiB7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbEZvcm1Db250cm9sLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxGb3JtQ29udHJvbC5wYXRjaFZhbHVlKG51bGwpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0aGUgcmVhc29uIHdoeSB3ZSdyZSB1c2luZyB2YWx1ZUNoYW5nZXMgaW5zdGVhZCBvZiBmbiBuZ01vZGVsQ2hhbmdlXG4gICAgLy8gaXMgYmVjYXVzZTpcbiAgICAvLyBXaGVuIHdlIHdhbnQgdG8gdXBkYXRlIHRoZSBzaW5nbGUtc2VsZWN0IHdpdGhvdXQgdGhhdCB0aGUgdXNlclxuICAgIC8vIGRpZCBzb21ldGhpbmcgd2Ugd2lsbCB0cmlnZ2VyIHRoZSBmbiB3cml0ZVZhbHVlLiBUaGF0IGZuXG4gICAgLy8gd2lsbCB1cGRhdGUgdGhlIGZvcm0gdmFsdWUuXG4gICAgLy8gV2hlbiB3ZSB1cGRhdGUgdGhlIHZhbHVlIHdlJ3JlIGF3YXJlIG9mIHRoZSBjaGFuZ2Ugb2YgdGhlIHZhbHVlLlxuICAgIC8vIFNvIHNvbWV0aW1lcyB3ZSBkb24ndCB3YW50IHRoYXQgdmFsdWVDaGFuZ2VzIGlzbid0IHRyaWdnZXJlZC5cbiAgICAvLyB0aGF0J3MgcG9zc2libGUgYnkgYWRkaW5nIHsgZW1pdEV2ZW50OiBmYWxzZSB9IHRvIHRoZSBwYXRjaFZhbHVlXG4gICAgLy8gYnV0IHdoZW4geW91IHVzZSB0aGUgZm4gbmdNb2RlbENoYW5nZSBoZSB3aWxsIGlnbm9yZSB0aGVcbiAgICAvLyB7IGVtaXRFdmVudDogZmFsc2UgfSBvcHRpb24uIFNvIHRvIHVzZSB0aGF0IHdlIG5lZWQgdG9cbiAgICAvLyBsaXN0ZW4gb24gdGhlIHZhbHVlQ2hhbmdlcyBldmVudHMgaW5zdGVhZC5cbiAgICB0aGlzLmludGVybmFsRm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95KHRoaXMpKVxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmZyZWVGb3JtKSB7XG4gICAgICAgICAgICB0aGlzLnNvZkZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUuZW1pdCh2YWx1ZSk7XG4gICAgICAgICAgY29uc3QgZnVsbE9iamVjdCA9IHRoaXMub3B0aW9ucy5maW5kKFxuICAgICAgICAgICAgb3B0aW9uID0+IHRoaXMuc2VsZWN0b3JWYWx1ZShvcHRpb24pID09PSB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VPYmplY3RWYWx1ZS5lbWl0KGZ1bGxPYmplY3QpO1xuXG4gICAgICAgICAgaWYgKHRoaXMucHJvcGFnYXRlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2w/LnZhbHVlQWNjZXNzb3IpIHtcbiAgICAgIC8vIEV2ZXJ5IHRpbWUgYSBjb250cm9sIGlzIHJlLWNyZWF0ZWQgdGhlIHByZXZpb3VzIHdyaXRlVmFsdWUgcmVmZXJlbmNlKHMpIGlzIG5vdCBjbGVhbmVkIHVwLlxuICAgICAgLy8gU28sIG92ZXIgdGltZSwgYSBsb3Qgb2YgdGhlc2UgcmVmZXJlbmNlcyBjYW4gYmUgYnVpbHQgdXAuIFRoaXMgbWVtb3J5IGxlYWsgaXMgYSBidWcgaW4gQW5ndWxhcidzIGltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgICAgLy8gV2UgaGlkZSB0aGF0IHByb2JsZW0gYnkgYXNzaWduaW5nIGFuIGVtcHR5IGZ1bmN0aW9uIHRvIHdyaXRlVmFsdWUgZXZlcnkgdGltZSB3ZSBkZXN0cm95IHRoZSBjb250cm9sLlxuICAgICAgLy8gQW4gZGV0YWlsZWQgZXhwbGFuYXRpb24gb2YgdGhlIHByb2JsZW0gY2FuIGJlIGZvdW5kIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvcHVsbC8yOTMzNVxuICAgICAgLy8gVGhlIGJ1ZyBpc3N1ZSBmb3IgaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwMDA3XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUgPSAoKSA9PiB7fTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlVG91Y2ggPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJuYWxGb3JtQ29udHJvbC5zZXRWYWx1ZSh2YWx1ZSA/PyBudWxsLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gIH1cblxuICBvbkNoYW5nZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZS5lbWl0KHRoaXMuaW50ZXJuYWxGb3JtQ29udHJvbC52YWx1ZSk7XG4gICAgICBjb25zdCBmdWxsT2JqZWN0ID0gdGhpcy5vcHRpb25zLmZpbmQoXG4gICAgICAgIG9wdGlvbiA9PiB0aGlzLnNlbGVjdG9yVmFsdWUob3B0aW9uKSA9PT0gdGhpcy5pbnRlcm5hbEZvcm1Db250cm9sLnZhbHVlXG4gICAgICApO1xuICAgICAgdGhpcy5jaGFuZ2VPYmplY3RWYWx1ZS5lbWl0KGZ1bGxPYmplY3QpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wYWdhdGVDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5pbnRlcm5hbEZvcm1Db250cm9sLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblRvdWNoKCk6IHZvaWQge1xuICAgIHRoaXMudG91Y2guZW1pdCgpO1xuXG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgdGhpcy5wcm9wYWdhdGVUb3VjaCkge1xuICAgICAgdGhpcy5wcm9wYWdhdGVUb3VjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxGb3JtQ29udHJvbC5kaXNhYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcm5hbEZvcm1Db250cm9sLmVuYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=