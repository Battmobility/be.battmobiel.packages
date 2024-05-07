var InputMultiSelectComponent_1;
import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { Changes, takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { map } from 'rxjs/operators';
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
InputMultiSelectComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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
export { InputMultiSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtbXVsdGktc2VsZWN0L2lucHV0LW11bHRpLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFPbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU5RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7SUFzQ3hCLHlCQUF5Qix1Q0FBekIseUJBQXlCO0lBRXBDLFlBQ3FCLElBQW1CLEVBQ1gsU0FBb0IsRUFDdkMsaUJBQW9DO1FBRnpCLFNBQUksR0FBSixJQUFJLENBQWU7UUFDWCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3ZDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFTOUMsdUJBQXVCO1FBQ2QsU0FBSSxHQUFxQixPQUFPLENBQUM7UUFFMUMsa0NBQWtDO1FBQ3pCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFFM0Isd0NBQXdDO1FBQy9CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFMUIsNENBQTRDO1FBQ25DLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFNUIsbURBQW1EO1FBQzFDLG9CQUFlLEdBQUcsWUFBWSxDQUFDO1FBRXhDLGdDQUFnQztRQUN2QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUUxQixrREFBa0Q7UUFDekMsb0JBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBTWpDLHdCQUF3QjtRQUNmLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBc0N6Qjs7V0FFRztRQUNPLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVoRCxvSEFBb0g7UUFDcEgsaUZBQWlGO1FBQ2pGLHdCQUFtQixHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBYzFDLHFDQUFxQztRQUM1QixhQUFRLEdBQW1CLENBQUMsS0FBYSxFQUFFLENBQWUsRUFBRSxFQUFFLHdCQUNyRSxDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsS0FBSywwQ0FBRSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBQyxDQUFDO1FBRTFELGVBQVUsR0FBdUIsQ0FBQyxLQUFhLEVBQUUsQ0FBd0IsRUFBRSxFQUFFLENBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQWpHdkUsSUFBSSxTQUFTLEVBQUU7WUFDYixTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNoQztJQUNILENBQUM7SUFnR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDekMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksRUFBRSxDQUFDLEVBQzdCLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ3ZFLENBQUMsQ0FBQyxDQUNKLENBQ0YsQ0FBQztRQUVGLHNFQUFzRTtRQUN0RSxjQUFjO1FBQ2QsaUVBQWlFO1FBQ2pFLDJEQUEyRDtRQUMzRCw4QkFBOEI7UUFDOUIsbUVBQW1FO1FBQ25FLGdFQUFnRTtRQUNoRSxtRUFBbUU7UUFDbkUsMkRBQTJEO1FBQzNELHlEQUF5RDtRQUN6RCw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVk7YUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV0RCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0RDthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVyxLQUFVLENBQUM7SUFFdEIsV0FBVzs7UUFDVCxVQUFJLElBQUksQ0FBQyxTQUFTLDBDQUFFLGFBQWEsRUFBRTtZQUNqQyw2RkFBNkY7WUFDN0YsMklBQTJJO1lBQzNJLHVHQUF1RztZQUN2RywwR0FBMEc7WUFDMUcsd0VBQXdFO1lBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztDQUNGLENBQUE7O1lBeE5BLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUVsQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCVDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLDJCQUF5QixFQUFFO2lCQUN6RTs7YUFDRjs7O1lBbERRLGFBQWEsdUJBc0RqQixRQUFRO1lBdkQrQixTQUFTLHVCQXdEaEQsUUFBUSxZQUFJLElBQUk7WUF0RW5CLGlCQUFpQjs7O2lCQThFaEIsS0FBSzttQkFHTCxLQUFLO3lCQUdMLEtBQUs7d0JBR0wsS0FBSzt5QkFHTCxLQUFLOzhCQUdMLEtBQUs7MEJBR0wsS0FBSzs4QkFHTCxLQUFLOytCQUlMLEtBQUs7MEJBR0wsS0FBSzt5QkFNTCxLQUFLO3lCQUtMLEtBQUs7c0JBS0wsS0FBSzs0QkFLTCxLQUFLOzRCQUtMLEtBQUs7K0JBS0wsS0FBSztzQkFLTCxLQUFLOzBCQUtMLE1BQU07MkJBZ0JOLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3VCQUc5QyxLQUFLOztBQVZjO0lBQW5CLE9BQU8sQ0FBQyxTQUFTLENBQUM7MkRBQTZCO0FBMUZyQyx5QkFBeUI7SUFwQ3JDLFlBQVksRUFBRTtHQW9DRix5QkFBeUIsQ0FxTHJDO1NBckxZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCB7XG4gIE9uU29mRm9jdXMsXG4gIFNPRl9GT0NVU19DT01QT05FTlRcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2RpcmVjdGl2ZXMvZm9jdXMnO1xuaW1wb3J0IHsgU2VhcmNoRm5TZWxlY3QsIFNlYXJjaE9wdGlvbiB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC90eXBlcyc7XG5pbXBvcnQge1xuICBOekZpbHRlck9wdGlvblR5cGUsXG4gIE56U2VsZWN0SXRlbUludGVyZmFjZSxcbiAgTnpTZWxlY3RTaXplVHlwZVxufSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XG5pbXBvcnQgeyBDaGFuZ2VzLCB0YWtlVW50aWxEZXN0cm95LCBVbnRpbERlc3Ryb3kgfSBmcm9tICduZ3gtcmVhY3RpdmV0b29sa2l0JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQFVudGlsRGVzdHJveSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtaW5wdXQtbXVsdGktc2VsZWN0JyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtbXVsdGktc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm11bHRpLXNlbGVjdFwiPlxuICAgICAgPG56LXNlbGVjdFxuICAgICAgICAjaW5wdXRFbGVtZW50XG4gICAgICAgIFtALmRpc2FibGVkXT1cInRydWVcIlxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiaW50ZXJuYWxGb3JtQ29udHJvbFwiXG4gICAgICAgIFtuek9wdGlvbnNdPVwiZm9ybWF0dGVkT3B0aW9ucyQgfCBhc3luY1wiXG4gICAgICAgIG56TW9kZT1cIm11bHRpcGxlXCJcbiAgICAgICAgW256U2l6ZV09XCJzaXplXCJcbiAgICAgICAgW256U2hvd0Fycm93XT1cInRydWVcIlxuICAgICAgICBbbnpTaG93U2VhcmNoXT1cInNob3dTZWFyY2hcIlxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImNsZWFyYWJsZVwiXG4gICAgICAgIFtuekJvcmRlcmxlc3NdPVwiYm9yZGVybGVzc1wiXG4gICAgICAgIFtuekRpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgICAgICBbbnpGaWx0ZXJPcHRpb25dPVwibnpTZWFyY2hGblwiXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cInRjICsgbm90Rm91bmRDb250ZW50IHwgdHJhbnNsYXRlXCJcbiAgICAgICAgW256VG9rZW5TZXBhcmF0b3JzXT1cInRva2VuU2VwYXJhdG9yc1wiXG4gICAgICAgIFtuek1heFRhZ0NvdW50XT1cIm1heFRhZ0NvdW50XCJcbiAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwiXG4gICAgICAgICAgaW52YWxpZCB8fFxuICAgICAgICAgIChuZ0NvbnRyb2w/LmludmFsaWQgJiYgKG5nQ29udHJvbD8udG91Y2hlZCB8fCBmb3JtPy5zdWJtaXR0ZWQpKVxuICAgICAgICBcIlxuICAgICAgICAobnpCbHVyKT1cIm9uVG91Y2goKVwiXG4gICAgICA+PC9uei1zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogU09GX0ZPQ1VTX0NPTVBPTkVOVCwgdXNlRXhpc3Rpbmc6IElucHV0TXVsdGlTZWxlY3RDb21wb25lbnQgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0TXVsdGlTZWxlY3RDb21wb25lbnRcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgT25Tb2ZGb2N1cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBmb3JtOiBGb3JtQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGlmIChuZ0NvbnRyb2wpIHtcbiAgICAgIG5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKSB0Yzogc3RyaW5nO1xuXG4gIC8vIFNpemUgb2YgU2VsZWN0IGlucHV0XG4gIEBJbnB1dCgpIHNpemU6IE56U2VsZWN0U2l6ZVR5cGUgPSAnbGFyZ2UnO1xuXG4gIC8vIFdoZXRoZXIgdG8gc2hvdyB0aGUgc2VhcmNoIGljb25cbiAgQElucHV0KCkgc2hvd1NlYXJjaCA9IHRydWU7XG5cbiAgLy8gV2hldGhlciB0byBzaG93IHRoZSBjbGVhciBidXR0b24gaWNvblxuICBASW5wdXQoKSBjbGVhcmFibGUgPSB0cnVlO1xuXG4gIC8vIFdoZXRoZXIgdGhlIHNlbGVjdCBoYXMgYm9yZGVybGVzcyBzdHlsaW5nXG4gIEBJbnB1dCgpIGJvcmRlcmxlc3MgPSBmYWxzZTtcblxuICAvLyBTcGVjaWZ5IGNvbnRlbnQgdG8gc2hvdyB3aGVuIG5vIHJlc3VsdCBtYXRjaGVzLi5cbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50ID0gJy5OT1QtRk9VTkQnO1xuXG4gIC8vIFRoZSBwbGFjZWhvbGRlciBvZiB0aGUgaW5wdXQuXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgLy8gU2VwYXJhdG9yIHVzZWQgdG8gdG9rZW5pemUgb24gdGFnL211bHRpcGxlIG1vZGVcbiAgQElucHV0KCkgdG9rZW5TZXBhcmF0b3JzID0gWycsJ107XG5cbiAgLy8gVE9ETyByZW1vdmUgb3Iga2VlcCwgaWYga2VlcCB3aGF0IGRlZmF1bHQgdmFsdWUgZG8gd2UgdXNlXG4gIC8vICBNYXggc2VsZWN0ZWQgb3B0aW9uIGNhbiBiZSBzZWxlY3RlZFxuICBASW5wdXQoKSBtYXhNdWx0aXBsZUNvdW50OiBudW1iZXI7XG5cbiAgLy8gTWF4IHRhZyBjb3VudCB0byBzaG93XG4gIEBJbnB1dCgpIG1heFRhZ0NvdW50ID0gNTtcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBpbnB1dCB0byBjb25uZWN0IHRvIGEgbGFiZWwgdGFnLlxuICAgKiBjdXJyZW50bHkgbm90IHN1cHBvcnRlZFxuICAgKi9cbiAgQElucHV0KCkgbGFiZWxGb3JJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAgRGV0ZXJtaW5lcyBpZiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9ucyB0aGF0IHBvcHVsYXRlIHRoZSBsaXN0LlxuICAgKi9cbiAgQElucHV0KCkgb3B0aW9uczogYW55W107XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hpY2ggcHJvcGVydHkgdGhhdCBtdXN0IGJlIHVzZWQgYXMgbGlzdCBsYWJlbC5cbiAgICovXG4gIEBJbnB1dCgpIHNlbGVjdG9yTGFiZWw6ICh4OiBhbnkpID0+IGFueTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGljaCBwcm9wZXJ0eSB0aGF0IG11c3QgYmUgdXNlZCBhcyBsaXN0IHZhbHVlLlxuICAgKi9cbiAgQElucHV0KCkgc2VsZWN0b3JWYWx1ZTogKHg6IGFueSkgPT4gYW55O1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoaWNoIHByb3BlcnR5IHRoYXQgbXVzdCBiZSB1c2VkIGFzIG9wdGlvbiBkaXNhYmxlLlxuICAgKi9cbiAgQElucHV0KCkgc2VsZWN0b3JEaXNhYmxlZDogKHg6IGFueSkgPT4gYW55O1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGluIGEgdmFsaWQgc3RhdGUuXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgdGhhdCB3aWxsIGVtaXQgdGhlIHZhbHVlIHdoZW4gY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2VWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8vIEZvcm0gY29udHJvbCB1c2VkIGluc3RlYWQgaW4gc2ltcGxlIHZhbHVlLCBhcyB0aGUgbmctc2VsZWN0IGNvbXBvbmVudCBoYXMgaW50ZXJuYWwgaW1wbGVtZW50YXRpb24gd2UgY2FuJ3QgcmVhY2guXG4gIC8vIEJ5IG1ha2luZyB1c2Ugb2YgYSBmb3JtIGNvbnRyb2wgaW50ZXJuYWxseSB3ZSBoYXZlIGFsbCB0aGUgZmVhdHVyZXMgYXZhaWxhYmxlLlxuICBpbnRlcm5hbEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFtdKTtcbiAgcHJvcGFnYXRlQ2hhbmdlOiBhbnk7XG4gIHByb3BhZ2F0ZVRvdWNoOiBhbnk7XG5cbiAgLy8gc291cmNlIHN0cmVhbXNcbiAgQENoYW5nZXMoJ29wdGlvbnMnKSBvcHRpb25zJDogT2JzZXJ2YWJsZTxhbnlbXT47XG5cbiAgLy8gcHJlc2VudGF0aW9uIHN0cmVhbXNcbiAgZm9ybWF0dGVkT3B0aW9ucyQ6IE9ic2VydmFibGU8XG4gICAgeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55OyBkaXNhYmxlZDogYm9vbGVhbiB9W11cbiAgPjtcblxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIC8vIERldGVybWluZXMgaG93IHRoZSBzZWFyY2ggaXMgZG9uZS5cbiAgQElucHV0KCkgc2VhcmNoRm46IFNlYXJjaEZuU2VsZWN0ID0gKGlucHV0OiBzdHJpbmcsIHg6IFNlYXJjaE9wdGlvbikgPT5cbiAgICB4Py5sYWJlbD8udG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGlucHV0LnRvTG93ZXJDYXNlKCkpO1xuXG4gIG56U2VhcmNoRm46IE56RmlsdGVyT3B0aW9uVHlwZSA9IChpbnB1dDogc3RyaW5nLCB4OiBOelNlbGVjdEl0ZW1JbnRlcmZhY2UpID0+XG4gICAgdGhpcy5zZWFyY2hGbihpbnB1dCwgeyBsYWJlbDogeC5uekxhYmVsIGFzIHN0cmluZywgdmFsdWU6IHgubnpWYWx1ZSB9KTtcblxuICBzb2ZGb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdLmZvY3VzKCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1hdHRlZE9wdGlvbnMkID0gdGhpcy5vcHRpb25zJC5waXBlKFxuICAgICAgbWFwKG9wdGlvbnMgPT4gb3B0aW9ucyA/PyBbXSksXG4gICAgICBtYXAob3B0aW9ucyA9PlxuICAgICAgICBvcHRpb25zLm1hcChvcHRpb24gPT4gKHtcbiAgICAgICAgICBsYWJlbDogdGhpcy5zZWxlY3RvckxhYmVsKG9wdGlvbiksXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc2VsZWN0b3JWYWx1ZShvcHRpb24pLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnNlbGVjdG9yRGlzYWJsZWQgPyB0aGlzLnNlbGVjdG9yRGlzYWJsZWQob3B0aW9uKSA6IG51bGxcbiAgICAgICAgfSkpXG4gICAgICApXG4gICAgKTtcblxuICAgIC8vIHRoZSByZWFzb24gd2h5IHdlJ3JlIHVzaW5nIHZhbHVlQ2hhbmdlcyBpbnN0ZWFkIG9mIGZuIG5nTW9kZWxDaGFuZ2VcbiAgICAvLyBpcyBiZWNhdXNlOlxuICAgIC8vIFdoZW4gd2Ugd2FudCB0byB1cGRhdGUgdGhlIHNpbmdsZS1zZWxlY3Qgd2l0aG91dCB0aGF0IHRoZSB1c2VyXG4gICAgLy8gZGlkIHNvbWV0aGluZyB3ZSB3aWxsIHRyaWdnZXIgdGhlIGZuIHdyaXRlVmFsdWUuIFRoYXQgZm5cbiAgICAvLyB3aWxsIHVwZGF0ZSB0aGUgZm9ybSB2YWx1ZS5cbiAgICAvLyBXaGVuIHdlIHVwZGF0ZSB0aGUgdmFsdWUgd2UncmUgYXdhcmUgb2YgdGhlIGNoYW5nZSBvZiB0aGUgdmFsdWUuXG4gICAgLy8gU28gc29tZXRpbWVzIHdlIGRvbid0IHdhbnQgdGhhdCB2YWx1ZUNoYW5nZXMgaXNuJ3QgdHJpZ2dlcmVkLlxuICAgIC8vIHRoYXQncyBwb3NzaWJsZSBieSBhZGRpbmcgeyBlbWl0RXZlbnQ6IGZhbHNlIH0gdG8gdGhlIHBhdGNoVmFsdWVcbiAgICAvLyBidXQgd2hlbiB5b3UgdXNlIHRoZSBmbiBuZ01vZGVsQ2hhbmdlIGhlIHdpbGwgaWdub3JlIHRoZVxuICAgIC8vIHsgZW1pdEV2ZW50OiBmYWxzZSB9IG9wdGlvbi4gU28gdG8gdXNlIHRoYXQgd2UgbmVlZCB0b1xuICAgIC8vIGxpc3RlbiBvbiB0aGUgdmFsdWVDaGFuZ2VzIGV2ZW50cyBpbnN0ZWFkLlxuICAgIHRoaXMuaW50ZXJuYWxGb3JtQ29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpXG4gICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlLmVtaXQodGhpcy5pbnRlcm5hbEZvcm1Db250cm9sLnZhbHVlKTtcblxuICAgICAgICAgIGlmICh0aGlzLnByb3BhZ2F0ZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5pbnRlcm5hbEZvcm1Db250cm9sLnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbD8udmFsdWVBY2Nlc3Nvcikge1xuICAgICAgLy8gRXZlcnkgdGltZSBhIGNvbnRyb2wgaXMgcmUtY3JlYXRlZCB0aGUgcHJldmlvdXMgd3JpdGVWYWx1ZSByZWZlcmVuY2UocykgaXMgbm90IGNsZWFuZWQgdXAuXG4gICAgICAvLyBTbywgb3ZlciB0aW1lLCBhIGxvdCBvZiB0aGVzZSByZWZlcmVuY2VzIGNhbiBiZSBidWlsdCB1cC4gVGhpcyBtZW1vcnkgbGVhayBpcyBhIGJ1ZyBpbiBBbmd1bGFyJ3MgaW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAgICAvLyBXZSBoaWRlIHRoYXQgcHJvYmxlbSBieSBhc3NpZ25pbmcgYW4gZW1wdHkgZnVuY3Rpb24gdG8gd3JpdGVWYWx1ZSBldmVyeSB0aW1lIHdlIGRlc3Ryb3kgdGhlIGNvbnRyb2wuXG4gICAgICAvLyBBbiBkZXRhaWxlZCBleHBsYW5hdGlvbiBvZiB0aGUgcHJvYmxlbSBjYW4gYmUgZm91bmQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzI5MzM1XG4gICAgICAvLyBUaGUgYnVnIGlzc3VlIGZvciBpdDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjAwMDdcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSA9ICgpID0+IHt9O1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVUb3VjaCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbEZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlID8/IFtdLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gIH1cblxuICBvblRvdWNoKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmIHRoaXMucHJvcGFnYXRlVG91Y2gpIHtcbiAgICAgIHRoaXMucHJvcGFnYXRlVG91Y2goKTtcbiAgICB9XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gdmFsdWU7XG4gIH1cbn1cbiJdfQ==