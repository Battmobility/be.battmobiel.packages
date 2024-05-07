import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChildren } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
export class InputCheckboxListComponent {
    constructor() {
        this.options$ = new BehaviorSubject([]);
        this.values$ = new BehaviorSubject([]);
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        this.enhancedOptions$ = combineLatest([
            this.options$.pipe(filter(v => !!v)),
            this.values$
        ]).pipe(map(([options, values]) => {
            return options.map(option => {
                return {
                    id: option.id,
                    label: option.label,
                    selected: (values === null || values === void 0 ? void 0 : values.indexOf(option.id)) > -1
                };
            });
        }));
        this.trackByFn = i => i;
    }
    /**
     *  Sets the the available options (checkboxes).
     */
    set options(v) {
        this.options$.next(v);
    }
    /**
     * Determines if the input is checked or not.
     */
    set value(value) {
        this.writeValue(value);
    }
    sofFocus() {
        var _a;
        (_a = this.checkboxes.first) === null || _a === void 0 ? void 0 : _a.sofFocus();
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    writeValue(list) {
        this.values$.next(list);
    }
    onChange(option, selected) {
        var _a;
        if (!this.isDisabled) {
            const oldValues = (_a = this.values$.getValue()) !== null && _a !== void 0 ? _a : [];
            const newValues = selected
                ? oldValues.filter(value => value !== option.id)
                : [...oldValues, option.id];
            this.values$.next(newValues);
            if (this.propagateChange) {
                this.propagateChange(newValues);
            }
        }
    }
}
InputCheckboxListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-checkbox-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-input-checkbox
      #checkboxes
      *ngFor="let option of enhancedOptions$ | async; trackBy: trackByFn"
      [label]="option.label"
      [selected]="option.selected"
      [isDisabled]="isDisabled"
      (changeValue)="onChange(option, option.selected)"
    ></sof-input-checkbox>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: InputCheckboxListComponent,
                        multi: true
                    },
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputCheckboxListComponent }
                ],
                styles: [".icon-toggle{cursor:pointer}sof-input-checkbox{display:block;margin-bottom:.5rem}sof-input-checkbox:last-of-type{margin-bottom:0}"]
            },] }
];
InputCheckboxListComponent.propDecorators = {
    isDisabled: [{ type: Input }],
    options: [{ type: Input }],
    invalid: [{ type: Input }],
    value: [{ type: Input }],
    changeValue: [{ type: Output }],
    checkboxes: [{ type: ViewChildren, args: ['checkboxes',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3gtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2lucHV0LWNoZWNrYm94LWxpc3QvaW5wdXQtY2hlY2tib3gtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQStCN0MsTUFBTSxPQUFPLDBCQUEwQjtJQXZCdkM7UUE4QlUsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBU25DLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBVyxFQUFFLENBQUMsQ0FBQztRQWNwRDs7V0FFRztRQUNPLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUlyRCxxQkFBZ0IsR0FBaUMsYUFBYSxDQUFDO1lBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTztTQUNiLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUN4QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU87b0JBQ0wsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO29CQUNiLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztvQkFDbkIsUUFBUSxFQUFFLENBQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFJLENBQUMsQ0FBQztpQkFDMUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUtGLGNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQWtDckIsQ0FBQztJQWhGQzs7T0FFRztJQUNILElBQWEsT0FBTyxDQUFDLENBQWtDO1FBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFTRDs7T0FFRztJQUNILElBQWEsS0FBSyxDQUFDLEtBQWU7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBNkJELFFBQVE7O1FBQ04sTUFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssMENBQUUsUUFBUSxHQUFHO0lBQ3BDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUQsVUFBVSxDQUFDLElBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFxQyxFQUFFLFFBQWlCOztRQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixNQUFNLFNBQVMsU0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxtQ0FBSSxFQUFFLENBQUM7WUFDaEQsTUFBTSxTQUFTLEdBQUcsUUFBUTtnQkFDeEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQzs7O1lBL0dGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFFL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLDBCQUEwQjt3QkFDdkMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLDBCQUEwQixFQUFFO2lCQUMxRTs7YUFDRjs7O3lCQU1FLEtBQUs7c0JBT0wsS0FBSztzQkFTTCxLQUFLO29CQUtMLEtBQUs7MEJBT0wsTUFBTTt5QkFFTixZQUFZLFNBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJbnB1dENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtY2hlY2tib3gnO1xuaW1wb3J0IHtcbiAgT25Tb2ZGb2N1cyxcbiAgU09GX0ZPQ1VTX0NPTVBPTkVOVFxufSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvZGlyZWN0aXZlcy9mb2N1cyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbnRlcmZhY2UgRW5oYW5jZWRPcHRpb24ge1xuICBpZDogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1pbnB1dC1jaGVja2JveC1saXN0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWNoZWNrYm94LWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c29mLWlucHV0LWNoZWNrYm94XG4gICAgICAjY2hlY2tib3hlc1xuICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBlbmhhbmNlZE9wdGlvbnMkIHwgYXN5bmM7IHRyYWNrQnk6IHRyYWNrQnlGblwiXG4gICAgICBbbGFiZWxdPVwib3B0aW9uLmxhYmVsXCJcbiAgICAgIFtzZWxlY3RlZF09XCJvcHRpb24uc2VsZWN0ZWRcIlxuICAgICAgW2lzRGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICAoY2hhbmdlVmFsdWUpPVwib25DaGFuZ2Uob3B0aW9uLCBvcHRpb24uc2VsZWN0ZWQpXCJcbiAgICA+PC9zb2YtaW5wdXQtY2hlY2tib3g+XG4gIGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IElucHV0Q2hlY2tib3hMaXN0Q29tcG9uZW50LFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogU09GX0ZPQ1VTX0NPTVBPTkVOVCwgdXNlRXhpc3Rpbmc6IElucHV0Q2hlY2tib3hMaXN0Q29tcG9uZW50IH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENoZWNrYm94TGlzdENvbXBvbmVudFxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPblNvZkZvY3VzIHtcbiAgLyoqXG4gICAqICBEZXRlcm1pbmVzIGlmIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBvcHRpb25zJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG4gIC8qKlxuICAgKiAgU2V0cyB0aGUgdGhlIGF2YWlsYWJsZSBvcHRpb25zIChjaGVja2JveGVzKS5cbiAgICovXG4gIEBJbnB1dCgpIHNldCBvcHRpb25zKHY6IHsgbGFiZWw6IHN0cmluZzsgaWQ6IHN0cmluZyB9W10pIHtcbiAgICB0aGlzLm9wdGlvbnMkLm5leHQodik7XG4gIH1cblxuICBwcml2YXRlIHZhbHVlcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZ1tdPihbXSk7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgaXMgaW4gYSB2YWxpZCBzdGF0ZS5cbiAgICovXG4gIEBJbnB1dCgpIGludmFsaWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhlIGlucHV0IGlzIGNoZWNrZWQgb3Igbm90LlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHRoZSB2YWx1ZSB3aGVuIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuXG4gIEBWaWV3Q2hpbGRyZW4oJ2NoZWNrYm94ZXMnKSBjaGVja2JveGVzOiBRdWVyeUxpc3Q8SW5wdXRDaGVja2JveENvbXBvbmVudD47XG5cbiAgZW5oYW5jZWRPcHRpb25zJDogT2JzZXJ2YWJsZTxFbmhhbmNlZE9wdGlvbltdPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMub3B0aW9ucyQucGlwZShmaWx0ZXIodiA9PiAhIXYpKSxcbiAgICB0aGlzLnZhbHVlcyRcbiAgXSkucGlwZShcbiAgICBtYXAoKFtvcHRpb25zLCB2YWx1ZXNdKSA9PiB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogb3B0aW9uLmlkLFxuICAgICAgICAgIGxhYmVsOiBvcHRpb24ubGFiZWwsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHZhbHVlcz8uaW5kZXhPZihvcHRpb24uaWQpID4gLTFcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICk7XG5cbiAgcHJvcGFnYXRlQ2hhbmdlOiBhbnk7XG4gIHByb3BhZ2F0ZVRvdWNoOiBhbnk7XG5cbiAgdHJhY2tCeUZuID0gaSA9PiBpO1xuXG4gIHNvZkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tib3hlcy5maXJzdD8uc29mRm9jdXMoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVUb3VjaCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobGlzdDogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlcyQubmV4dChsaXN0KTtcbiAgfVxuXG4gIG9uQ2hhbmdlKG9wdGlvbjogeyBsYWJlbDogc3RyaW5nOyBpZDogc3RyaW5nIH0sIHNlbGVjdGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IG9sZFZhbHVlcyA9IHRoaXMudmFsdWVzJC5nZXRWYWx1ZSgpID8/IFtdO1xuICAgICAgY29uc3QgbmV3VmFsdWVzID0gc2VsZWN0ZWRcbiAgICAgICAgPyBvbGRWYWx1ZXMuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBvcHRpb24uaWQpXG4gICAgICAgIDogWy4uLm9sZFZhbHVlcywgb3B0aW9uLmlkXTtcbiAgICAgIHRoaXMudmFsdWVzJC5uZXh0KG5ld1ZhbHVlcyk7XG4gICAgICBpZiAodGhpcy5wcm9wYWdhdGVDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UobmV3VmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==