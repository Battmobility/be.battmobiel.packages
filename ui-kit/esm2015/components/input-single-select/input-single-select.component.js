var InputSingleSelectComponent_1;
import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { Changes, takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { map } from 'rxjs/operators';
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
export { InputSingleSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2luZ2xlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2lucHV0LXNpbmdsZS1zZWxlY3QvaW5wdXQtc2luZ2xlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFPbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU5RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7SUErQ3hCLDBCQUEwQix3Q0FBMUIsMEJBQTBCO0lBNkdyQyxZQUNxQixJQUFtQixFQUNYLFNBQW9CLEVBQ3ZDLGlCQUFvQztRQUZ6QixTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ1gsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUN2QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBNUc5Qyx1QkFBdUI7UUFDZCxTQUFJLEdBQXFCLE9BQU8sQ0FBQztRQUUxQyxrQ0FBa0M7UUFDekIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUUzQix3Q0FBd0M7UUFDL0IsY0FBUyxHQUFHLElBQUksQ0FBQztRQUUxQiw0Q0FBNEM7UUFD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ImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCB7XG4gIE9uU29mRm9jdXMsXG4gIFNPRl9GT0NVU19DT01QT05FTlRcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2RpcmVjdGl2ZXMvZm9jdXMnO1xuaW1wb3J0IHsgU2VhcmNoRm5TZWxlY3QsIFNlYXJjaE9wdGlvbiB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC90eXBlcyc7XG5pbXBvcnQge1xuICBOekZpbHRlck9wdGlvblR5cGUsXG4gIE56U2VsZWN0SXRlbUludGVyZmFjZSxcbiAgTnpTZWxlY3RTaXplVHlwZVxufSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XG5pbXBvcnQgeyBDaGFuZ2VzLCB0YWtlVW50aWxEZXN0cm95LCBVbnRpbERlc3Ryb3kgfSBmcm9tICduZ3gtcmVhY3RpdmV0b29sa2l0JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQFVudGlsRGVzdHJveSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtaW5wdXQtc2luZ2xlLXNlbGVjdCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LXNpbmdsZS1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXNlbGVjdFwiPlxuICAgICAgPG56LXNlbGVjdFxuICAgICAgICAjaW5wdXRFbGVtZW50XG4gICAgICAgIFtALmRpc2FibGVkXT1cInRydWVcIlxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiaW50ZXJuYWxGb3JtQ29udHJvbFwiXG4gICAgICAgIFtuelNpemVdPVwic2l6ZVwiXG4gICAgICAgIFtuelNob3dTZWFyY2hdPVwic2hvd1NlYXJjaFwiXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiY2xlYXJhYmxlXCJcbiAgICAgICAgW256Qm9yZGVybGVzc109XCJib3JkZXJsZXNzXCJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICAgIFtuekZpbHRlck9wdGlvbl09XCJuelNlYXJjaEZuXCJcbiAgICAgICAgW256U2VydmVyU2VhcmNoXT1cInNlcnZlclNlYXJjaFwiXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cInRjICsgbm90Rm91bmRDb250ZW50IHwgdHJhbnNsYXRlXCJcbiAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwiXG4gICAgICAgICAgaW52YWxpZCB8fFxuICAgICAgICAgIChuZ0NvbnRyb2w/LmludmFsaWQgJiYgKG5nQ29udHJvbD8udG91Y2hlZCB8fCBmb3JtPy5zdWJtaXR0ZWQpKVxuICAgICAgICBcIlxuICAgICAgICAobnpCbHVyKT1cIm9uVG91Y2goKVwiXG4gICAgICAgIChuek9uU2VhcmNoKT1cImNoYW5nZVNlYXJjaC5lbWl0KCRldmVudClcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvIG9mIGZvcm1hdHRlZE9wdGlvbnMkIHwgYXN5bmNcIj5cbiAgICAgICAgICA8bnotb3B0aW9uXG4gICAgICAgICAgICAqbmdJZj1cIiFzZWFyY2hMb2FkaW5nXCJcbiAgICAgICAgICAgIFtuelZhbHVlXT1cIm8udmFsdWVcIlxuICAgICAgICAgICAgW256TGFiZWxdPVwiby5sYWJlbFwiXG4gICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvLmRpc2FibGVkXCJcbiAgICAgICAgICA+PC9uei1vcHRpb24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bnotb3B0aW9uICpuZ0lmPVwic2VhcmNoTG9hZGluZ1wiIG56RGlzYWJsZWQgbnpDdXN0b21Db250ZW50PlxuICAgICAgICAgIDxzb2YtbG9hZGluZyBzaXplPVwic21cIj48L3NvZi1sb2FkaW5nPlxuICAgICAgICA8L256LW9wdGlvbj5cbiAgICAgIDwvbnotc2VsZWN0PlxuICAgIDwvZGl2PlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBJbnB1dFNpbmdsZVNlbGVjdENvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRTaW5nbGVTZWxlY3RDb21wb25lbnRcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgT25Tb2ZGb2N1cyB7XG4gIEBJbnB1dCgpIHRjOiBzdHJpbmc7XG5cbiAgLy8gU2l6ZSBvZiBTZWxlY3QgaW5wdXRcbiAgQElucHV0KCkgc2l6ZTogTnpTZWxlY3RTaXplVHlwZSA9ICdsYXJnZSc7XG5cbiAgLy8gV2hldGhlciB0byBzaG93IHRoZSBzZWFyY2ggaWNvblxuICBASW5wdXQoKSBzaG93U2VhcmNoID0gdHJ1ZTtcblxuICAvLyBXaGV0aGVyIHRvIHNob3cgdGhlIGNsZWFyIGJ1dHRvbiBpY29uXG4gIEBJbnB1dCgpIGNsZWFyYWJsZSA9IHRydWU7XG5cbiAgLy8gV2hldGhlciB0aGUgc2VsZWN0IGhhcyBib3JkZXJsZXNzIHN0eWxpbmdcbiAgQElucHV0KCkgYm9yZGVybGVzcyA9IGZhbHNlO1xuXG4gIC8vIFdoZXRoZXIgdGhlIHNlYXJjaCBpcyBsb2FkaW5nIGluIGNhc2Ugb2YgYSBzZXJ2ZXIgYmFzZWQgc2VhcmNoXG4gIEBJbnB1dCgpIHNlYXJjaExvYWRpbmcgPSBmYWxzZTtcblxuICAvLyBXaGV0aGVyIHRoZSBzZWFyY2ggd2lsbCBiZSBkb25lIHNlcnZlciBzaWRlLlxuICAvLyBUaGlzIHdpbGwgZGlzYWJsZSB0aGUgZmlsdGVyaW5nIGRvbmUgb24gdGhlIG9wdGlvbnMgc2luY2Ugd2Ugd291bGQgZXhwZWN0XG4gIC8vIHRoZSBvcHRpb25zIHRvIGJlIGZpbHRlcmVkIGFscmVhZHkgb24gc2VydmVyIHNpZGUuXG4gIEBJbnB1dCgpIHNlcnZlclNlYXJjaCA9IGZhbHNlO1xuXG4gIC8vIFNwZWNpZnkgY29udGVudCB0byBzaG93IHdoZW4gbm8gcmVzdWx0IG1hdGNoZXMuLlxuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnQgPSAnLk5PVC1GT1VORCc7XG5cbiAgLy8gVGhlIHBsYWNlaG9sZGVyIG9mIHRoZSBpbnB1dC5cbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBpbnB1dCB0byBjb25uZWN0IHRvIGEgbGFiZWwgdGFnLlxuICAgKiBjdXJyZW50bHkgbm90IHN1cHBvcnRlZFxuICAgKi9cbiAgQElucHV0KCkgbGFiZWxGb3JJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAgRGV0ZXJtaW5lcyBpZiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoaWNoIHByb3BlcnR5IHRoYXQgbXVzdCBiZSB1c2VkIGFzIGxpc3QgbGFiZWwuXG4gICAqL1xuICBASW5wdXQoKSBzZWxlY3RvckxhYmVsOiAoeDogYW55KSA9PiBhbnk7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hpY2ggcHJvcGVydHkgdGhhdCBtdXN0IGJlIHVzZWQgYXMgbGlzdCB2YWx1ZS5cbiAgICovXG4gIEBJbnB1dCgpIHNlbGVjdG9yVmFsdWU6ICh4OiBhbnkpID0+IGFueTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGljaCBwcm9wZXJ0eSB0aGF0IG11c3QgYmUgdXNlZCBhcyBvcHRpb24gZGlzYWJsZS5cbiAgICovXG4gIEBJbnB1dCgpIHNlbGVjdG9yRGlzYWJsZWQ6ICh4OiBhbnkpID0+IGFueTtcblxuICAvKipcbiAgICogVGhlIG9wdGlvbnMgdGhhdCBwb3B1bGF0ZSB0aGUgbGlzdC5cbiAgICovXG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueVtdO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGluIGEgdmFsaWQgc3RhdGUuXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEV2ZW50RW1pdHRlciB0aGF0IHdpbGwgZW1pdCB0aGUgdmFsdWUgd2hlbiBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZVZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50RW1pdHRlciB0aGF0IHdpbGwgZW1pdCB0aGUgZnVsbCBvYmplY3QgdmFsdWUgd2hlbiBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlT2JqZWN0VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHRoZSBjdXJyZW50IHNlYXJjaCB0ZXJtXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50RW1pdHRlciB0aGF0IHdpbGwgZW1pdCB3aGVuIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICovXG4gIEBPdXRwdXQoKSB0b3VjaCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8vIEZvcm0gY29udHJvbCB1c2VkIGluc3RlYWQgaW4gc2ltcGxlIHZhbHVlLCBhcyB0aGUgbmctc2VsZWN0IGNvbXBvbmVudCBoYXMgaW50ZXJuYWwgaW1wbGVtZW50YXRpb24gd2UgY2FuJ3QgcmVhY2guXG4gIC8vIEJ5IG1ha2luZyB1c2Ugb2YgYSBmb3JtIGNvbnRyb2wgaW50ZXJuYWxseSB3ZSBoYXZlIGFsbCB0aGUgZmVhdHVyZXMgYXZhaWxhYmxlLlxuICBpbnRlcm5hbEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKG51bGwpO1xuICBwcm9wYWdhdGVDaGFuZ2U6IGFueTtcbiAgcHJvcGFnYXRlVG91Y2g6IGFueTtcblxuICAvLyBzb3VyY2Ugc3RyZWFtc1xuICBAQ2hhbmdlcygnb3B0aW9ucycpIG9wdGlvbnMkOiBPYnNlcnZhYmxlPGFueVtdPjtcblxuICAvLyBwcmVzZW50YXRpb24gc3RyZWFtc1xuICBmb3JtYXR0ZWRPcHRpb25zJDogT2JzZXJ2YWJsZTxcbiAgICB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBhbnk7IGRpc2FibGVkOiBib29sZWFuIH1bXVxuICA+O1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgLy8gRGV0ZXJtaW5lcyBob3cgdGhlIHNlYXJjaCBpcyBkb25lLlxuICBASW5wdXQoKSBzZWFyY2hGbjogU2VhcmNoRm5TZWxlY3QgPSAoaW5wdXQ6IHN0cmluZywgeDogU2VhcmNoT3B0aW9uKSA9PlxuICAgIHg/LmxhYmVsPy50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoaW5wdXQudG9Mb3dlckNhc2UoKSk7XG5cbiAgbnpTZWFyY2hGbjogTnpGaWx0ZXJPcHRpb25UeXBlID0gKGlucHV0OiBzdHJpbmcsIHg6IE56U2VsZWN0SXRlbUludGVyZmFjZSkgPT5cbiAgICB0aGlzLnNlYXJjaEZuKGlucHV0LCB7IGxhYmVsOiB4Lm56TGFiZWwgYXMgc3RyaW5nLCB2YWx1ZTogeC5uelZhbHVlIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBmb3JtOiBGb3JtQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGlmIChuZ0NvbnRyb2wpIHtcbiAgICAgIG5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBzb2ZGb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdLmZvY3VzKCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1hdHRlZE9wdGlvbnMkID0gdGhpcy5vcHRpb25zJC5waXBlKFxuICAgICAgbWFwKG9wdGlvbnMgPT4gb3B0aW9ucyA/PyBbXSksXG4gICAgICBtYXAob3B0aW9ucyA9PlxuICAgICAgICBvcHRpb25zLm1hcChvcHRpb24gPT4gKHtcbiAgICAgICAgICBsYWJlbDogdGhpcy5zZWxlY3RvckxhYmVsKG9wdGlvbiksXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc2VsZWN0b3JWYWx1ZShvcHRpb24pLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnNlbGVjdG9yRGlzYWJsZWQgPyB0aGlzLnNlbGVjdG9yRGlzYWJsZWQob3B0aW9uKSA6IG51bGxcbiAgICAgICAgfSkpXG4gICAgICApXG4gICAgKTtcblxuICAgIC8vIHRoZSByZWFzb24gd2h5IHdlJ3JlIHVzaW5nIHZhbHVlQ2hhbmdlcyBpbnN0ZWFkIG9mIGZuIG5nTW9kZWxDaGFuZ2VcbiAgICAvLyBpcyBiZWNhdXNlOlxuICAgIC8vIFdoZW4gd2Ugd2FudCB0byB1cGRhdGUgdGhlIHNpbmdsZS1zZWxlY3Qgd2l0aG91dCB0aGF0IHRoZSB1c2VyXG4gICAgLy8gZGlkIHNvbWV0aGluZyB3ZSB3aWxsIHRyaWdnZXIgdGhlIGZuIHdyaXRlVmFsdWUuIFRoYXQgZm5cbiAgICAvLyB3aWxsIHVwZGF0ZSB0aGUgZm9ybSB2YWx1ZS5cbiAgICAvLyBXaGVuIHdlIHVwZGF0ZSB0aGUgdmFsdWUgd2UncmUgYXdhcmUgb2YgdGhlIGNoYW5nZSBvZiB0aGUgdmFsdWUuXG4gICAgLy8gU28gc29tZXRpbWVzIHdlIGRvbid0IHdhbnQgdGhhdCB2YWx1ZUNoYW5nZXMgaXNuJ3QgdHJpZ2dlcmVkLlxuICAgIC8vIHRoYXQncyBwb3NzaWJsZSBieSBhZGRpbmcgeyBlbWl0RXZlbnQ6IGZhbHNlIH0gdG8gdGhlIHBhdGNoVmFsdWVcbiAgICAvLyBidXQgd2hlbiB5b3UgdXNlIHRoZSBmbiBuZ01vZGVsQ2hhbmdlIGhlIHdpbGwgaWdub3JlIHRoZVxuICAgIC8vIHsgZW1pdEV2ZW50OiBmYWxzZSB9IG9wdGlvbi4gU28gdG8gdXNlIHRoYXQgd2UgbmVlZCB0b1xuICAgIC8vIGxpc3RlbiBvbiB0aGUgdmFsdWVDaGFuZ2VzIGV2ZW50cyBpbnN0ZWFkLlxuICAgIHRoaXMuaW50ZXJuYWxGb3JtQ29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpXG4gICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLnNvZkZvY3VzKCk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZS5lbWl0KHZhbHVlKTtcbiAgICAgICAgICBjb25zdCBmdWxsT2JqZWN0ID0gdGhpcy5vcHRpb25zLmZpbmQoXG4gICAgICAgICAgICBvcHRpb24gPT4gdGhpcy5zZWxlY3RvclZhbHVlKG9wdGlvbikgPT09IHZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZU9iamVjdFZhbHVlLmVtaXQoZnVsbE9iamVjdCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5wcm9wYWdhdGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbD8udmFsdWVBY2Nlc3Nvcikge1xuICAgICAgLy8gRXZlcnkgdGltZSBhIGNvbnRyb2wgaXMgcmUtY3JlYXRlZCB0aGUgcHJldmlvdXMgd3JpdGVWYWx1ZSByZWZlcmVuY2UocykgaXMgbm90IGNsZWFuZWQgdXAuXG4gICAgICAvLyBTbywgb3ZlciB0aW1lLCBhIGxvdCBvZiB0aGVzZSByZWZlcmVuY2VzIGNhbiBiZSBidWlsdCB1cC4gVGhpcyBtZW1vcnkgbGVhayBpcyBhIGJ1ZyBpbiBBbmd1bGFyJ3MgaW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAgICAvLyBXZSBoaWRlIHRoYXQgcHJvYmxlbSBieSBhc3NpZ25pbmcgYW4gZW1wdHkgZnVuY3Rpb24gdG8gd3JpdGVWYWx1ZSBldmVyeSB0aW1lIHdlIGRlc3Ryb3kgdGhlIGNvbnRyb2wuXG4gICAgICAvLyBBbiBkZXRhaWxlZCBleHBsYW5hdGlvbiBvZiB0aGUgcHJvYmxlbSBjYW4gYmUgZm91bmQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzI5MzM1XG4gICAgICAvLyBUaGUgYnVnIGlzc3VlIGZvciBpdDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjAwMDdcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSA9ICgpID0+IHt9O1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVUb3VjaCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbEZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlID8/IG51bGwsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgfVxuXG4gIG9uVG91Y2goKTogdm9pZCB7XG4gICAgdGhpcy50b3VjaC5lbWl0KCk7XG5cbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCAmJiB0aGlzLnByb3BhZ2F0ZVRvdWNoKSB7XG4gICAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IHZhbHVlO1xuICB9XG59XG4iXX0=