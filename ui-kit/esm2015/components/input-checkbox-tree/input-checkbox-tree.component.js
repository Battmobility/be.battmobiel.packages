import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
export class InputCheckboxTreeComponent {
    constructor() {
        this.options$ = new BehaviorSubject([]);
        this.values$ = new BehaviorSubject([]);
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        /**
         * EventEmitter that will emit the options who have expanded and who not.
         */
        this.changeOptionExpanded = new EventEmitter();
        this.enhancedOptions$ = combineLatest([
            this.options$.pipe(filter(v => !!v)),
            this.values$
        ]).pipe(map(([options, values]) => {
            return options.map(option => {
                var _a, _b;
                const hasSelectedChildren = (_a = option.children) === null || _a === void 0 ? void 0 : _a.some(childOption => {
                    var _a, _b, _c;
                    return !!((_c = (_b = (_a = values === null || values === void 0 ? void 0 : values.find(v => v.id === option.id)) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.find(childValue => childValue.id === childOption.id)) === null || _c === void 0 ? void 0 : _c.selected);
                });
                return {
                    id: option.id,
                    expanded: option.expanded,
                    indeterminate: hasSelectedChildren,
                    label: option.label,
                    selected: !!(values === null || values === void 0 ? void 0 : values.find(v => v.id === option.id && v.selected)),
                    children: (_b = option.children) === null || _b === void 0 ? void 0 : _b.map(childOption => {
                        var _a, _b, _c;
                        return {
                            id: childOption.id,
                            label: childOption.label,
                            selected: !!((_c = (_b = (_a = values === null || values === void 0 ? void 0 : values.find(v => v.id === option.id)) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.find(childValue => childValue.id === childOption.id)) === null || _c === void 0 ? void 0 : _c.selected)
                        };
                    })
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
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    writeValue(tree) {
        this.values$.next(tree);
    }
    onChange(parent, current) {
        var _a;
        if (!this.isDisabled) {
            const oldValues = this.values$.getValue();
            let updatedParent;
            if (parent === null) {
                // update parent
                updatedParent = {
                    id: current.id,
                    selected: !(current === null || current === void 0 ? void 0 : current.selected),
                    children: current.children.map(child => ({
                        id: child.id,
                        selected: false
                    }))
                };
            }
            else {
                updatedParent = {
                    id: parent.id,
                    selected: false,
                    children: (_a = parent.children) === null || _a === void 0 ? void 0 : _a.map(child => (child === null || child === void 0 ? void 0 : child.id) === (current === null || current === void 0 ? void 0 : current.id)
                        ? { id: current.id, selected: !(current === null || current === void 0 ? void 0 : current.selected) }
                        : { id: child.id, selected: child.selected })
                };
            }
            const newValues = oldValues.map(value => (value === null || value === void 0 ? void 0 : value.id) === updatedParent.id ? updatedParent : value);
            this.values$.next(newValues);
            if (this.propagateChange) {
                this.propagateChange(newValues);
            }
        }
    }
    toggleCollapseState(option) {
        const options = this.options$
            .getValue()
            .map(o => o.id === option.id ? Object.assign(Object.assign({}, option), { expanded: !o.expanded }) : o);
        this.options$.next(options);
        this.changeOptionExpanded.emit(options);
    }
}
InputCheckboxTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-checkbox-tree',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div
      *ngFor="let parent of enhancedOptions$ | async; trackBy: trackByFn"
      class="mb-2"
    >
      <div class="d-flex align-items-center">
        <sof-input-checkbox
          [label]="parent.label"
          [selected]="parent?.selected"
          [indeterminate]="parent?.indeterminate"
          [isDisabled]="isDisabled"
          class="d-block mr-2"
          (changeValue)="onChange(null, parent)"
        ></sof-input-checkbox>
        <button
          class="btn btn-plain ml-1"
          *ngIf="parent?.children?.length > 0"
          (click)="toggleCollapseState(parent)"
          type="button"
        >
          <sof-svg-icon
            class="icon-toggle"
            size="12"
            [icon]="'icon-chevron-' + (parent.expanded ? 'up' : 'down')"
          ></sof-svg-icon>
        </button>
      </div>
      <div *ngIf="parent?.expanded" class="pl-4">
        <ng-container *ngFor="let child of parent.children; trackBy: trackByFn">
          <sof-input-checkbox
            class="d-block mt-1"
            [label]="child.label"
            [selected]="child.selected"
            [isDisabled]="isDisabled"
            (changeValue)="onChange(parent, child)"
          ></sof-input-checkbox>
        </ng-container>
      </div>
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: InputCheckboxTreeComponent,
                        multi: true
                    }
                ],
                styles: [".icon-toggle{cursor:pointer}"]
            },] }
];
InputCheckboxTreeComponent.propDecorators = {
    isDisabled: [{ type: Input }],
    options: [{ type: Input }],
    invalid: [{ type: Input }],
    value: [{ type: Input }],
    changeValue: [{ type: Output }],
    changeOptionExpanded: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3gtdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2lucHV0LWNoZWNrYm94LXRyZWUvaW5wdXQtY2hlY2tib3gtdHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFpRTdDLE1BQU0sT0FBTywwQkFBMEI7SUFwRHZDO1FBMERFLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBMkIsRUFBRSxDQUFDLENBQUM7UUFTN0QsWUFBTyxHQUFHLElBQUksZUFBZSxDQUEyQixFQUFFLENBQUMsQ0FBQztRQWM1RDs7V0FFRztRQUNPLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQTRCLENBQUM7UUFFckU7O1dBRUc7UUFDTyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBNEIsQ0FBQztRQUU5RSxxQkFBZ0IsR0FBaUMsYUFBYSxDQUFDO1lBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTztTQUNiLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUN4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Q0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsTUFBOEI7UUFDaEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDMUIsUUFBUSxFQUFFO2FBQ1YsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ1AsQ0FBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsaUNBQU0sTUFBTSxLQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDOUQsQ0FBQztRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBNUxGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFFL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Q1Q7Z0JBQ0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSwwQkFBMEI7d0JBQ3ZDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOzthQUNGOzs7eUJBS0UsS0FBSztzQkFPTCxLQUFLO3NCQVNMLEtBQUs7b0JBS0wsS0FBSzswQkFPTCxNQUFNO21DQUtOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hlY2tib3hUcmVlT3B0aW9uSXRlbSB9IGZyb20gJy4vdHlwZXMvY2hlY2tib3gtdHJlZS1vcHRpb24taXRlbS50eXBlJztcbmltcG9ydCB7IENoZWNrYm94VHJlZVJlc3VsdEl0ZW0gfSBmcm9tICcuL3R5cGVzL2NoZWNrYm94LXRyZWUtcmVzdWx0LWl0ZW0udHlwZSc7XG5cbmludGVyZmFjZSBFbmhhbmNlZE9wdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogRW5oYW5jZWRPcHRpb25bXTtcbiAgZXhwYW5kZWQ/OiBib29sZWFuO1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIGluZGV0ZXJtaW5hdGU/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtaW5wdXQtY2hlY2tib3gtdHJlZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1jaGVja2JveC10cmVlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgKm5nRm9yPVwibGV0IHBhcmVudCBvZiBlbmhhbmNlZE9wdGlvbnMkIHwgYXN5bmM7IHRyYWNrQnk6IHRyYWNrQnlGblwiXG4gICAgICBjbGFzcz1cIm1iLTJcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxzb2YtaW5wdXQtY2hlY2tib3hcbiAgICAgICAgICBbbGFiZWxdPVwicGFyZW50LmxhYmVsXCJcbiAgICAgICAgICBbc2VsZWN0ZWRdPVwicGFyZW50Py5zZWxlY3RlZFwiXG4gICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwicGFyZW50Py5pbmRldGVybWluYXRlXCJcbiAgICAgICAgICBbaXNEaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgICAgICBjbGFzcz1cImQtYmxvY2sgbXItMlwiXG4gICAgICAgICAgKGNoYW5nZVZhbHVlKT1cIm9uQ2hhbmdlKG51bGwsIHBhcmVudClcIlxuICAgICAgICA+PC9zb2YtaW5wdXQtY2hlY2tib3g+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcGxhaW4gbWwtMVwiXG4gICAgICAgICAgKm5nSWY9XCJwYXJlbnQ/LmNoaWxkcmVuPy5sZW5ndGggPiAwXCJcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlQ29sbGFwc2VTdGF0ZShwYXJlbnQpXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzb2Ytc3ZnLWljb25cbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi10b2dnbGVcIlxuICAgICAgICAgICAgc2l6ZT1cIjEyXCJcbiAgICAgICAgICAgIFtpY29uXT1cIidpY29uLWNoZXZyb24tJyArIChwYXJlbnQuZXhwYW5kZWQgPyAndXAnIDogJ2Rvd24nKVwiXG4gICAgICAgICAgPjwvc29mLXN2Zy1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cInBhcmVudD8uZXhwYW5kZWRcIiBjbGFzcz1cInBsLTRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgcGFyZW50LmNoaWxkcmVuOyB0cmFja0J5OiB0cmFja0J5Rm5cIj5cbiAgICAgICAgICA8c29mLWlucHV0LWNoZWNrYm94XG4gICAgICAgICAgICBjbGFzcz1cImQtYmxvY2sgbXQtMVwiXG4gICAgICAgICAgICBbbGFiZWxdPVwiY2hpbGQubGFiZWxcIlxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cImNoaWxkLnNlbGVjdGVkXCJcbiAgICAgICAgICAgIFtpc0Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgICAgICAgICAgKGNoYW5nZVZhbHVlKT1cIm9uQ2hhbmdlKHBhcmVudCwgY2hpbGQpXCJcbiAgICAgICAgICA+PC9zb2YtaW5wdXQtY2hlY2tib3g+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IElucHV0Q2hlY2tib3hUcmVlQ29tcG9uZW50LFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDaGVja2JveFRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIC8qKlxuICAgKiAgRGV0ZXJtaW5lcyBpZiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIG9wdGlvbnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDaGVja2JveFRyZWVPcHRpb25JdGVtW10+KFtdKTtcblxuICAvKipcbiAgICogIFNldHMgdGhlIHRoZSBhdmFpbGFibGUgb3B0aW9ucyAoY2hlY2tib3hlcykuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgb3B0aW9ucyh2OiBDaGVja2JveFRyZWVPcHRpb25JdGVtW10pIHtcbiAgICB0aGlzLm9wdGlvbnMkLm5leHQodik7XG4gIH1cblxuICB2YWx1ZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDaGVja2JveFRyZWVSZXN1bHRJdGVtW10+KFtdKTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBpbnB1dCBpcyBpbiBhIHZhbGlkIHN0YXRlLlxuICAgKi9cbiAgQElucHV0KCkgaW52YWxpZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgaW5wdXQgaXMgY2hlY2tlZCBvciBub3QuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgdmFsdWUodmFsdWU6IENoZWNrYm94VHJlZVJlc3VsdEl0ZW1bXSkge1xuICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHRoZSB2YWx1ZSB3aGVuIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPENoZWNrYm94VHJlZVJlc3VsdEl0ZW1bXT4oKTtcblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHRoZSBvcHRpb25zIHdobyBoYXZlIGV4cGFuZGVkIGFuZCB3aG8gbm90LlxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZU9wdGlvbkV4cGFuZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxDaGVja2JveFRyZWVPcHRpb25JdGVtW10+KCk7XG5cbiAgZW5oYW5jZWRPcHRpb25zJDogT2JzZXJ2YWJsZTxFbmhhbmNlZE9wdGlvbltdPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMub3B0aW9ucyQucGlwZShmaWx0ZXIodiA9PiAhIXYpKSxcbiAgICB0aGlzLnZhbHVlcyRcbiAgXSkucGlwZShcbiAgICBtYXAoKFtvcHRpb25zLCB2YWx1ZXNdKSA9PiB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgaGFzU2VsZWN0ZWRDaGlsZHJlbiA9IG9wdGlvbi5jaGlsZHJlbj8uc29tZShjaGlsZE9wdGlvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuICEhdmFsdWVzXG4gICAgICAgICAgICA/LmZpbmQodiA9PiB2LmlkID09PSBvcHRpb24uaWQpXG4gICAgICAgICAgICA/LmNoaWxkcmVuPy5maW5kKGNoaWxkVmFsdWUgPT4gY2hpbGRWYWx1ZS5pZCA9PT0gY2hpbGRPcHRpb24uaWQpXG4gICAgICAgICAgICA/LnNlbGVjdGVkO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogb3B0aW9uLmlkLFxuICAgICAgICAgIGV4cGFuZGVkOiBvcHRpb24uZXhwYW5kZWQsXG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZTogaGFzU2VsZWN0ZWRDaGlsZHJlbixcbiAgICAgICAgICBsYWJlbDogb3B0aW9uLmxhYmVsLFxuICAgICAgICAgIHNlbGVjdGVkOiAhIXZhbHVlcz8uZmluZCh2ID0+IHYuaWQgPT09IG9wdGlvbi5pZCAmJiB2LnNlbGVjdGVkKSxcbiAgICAgICAgICBjaGlsZHJlbjogb3B0aW9uLmNoaWxkcmVuPy5tYXAoY2hpbGRPcHRpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaWQ6IGNoaWxkT3B0aW9uLmlkLFxuICAgICAgICAgICAgICBsYWJlbDogY2hpbGRPcHRpb24ubGFiZWwsXG4gICAgICAgICAgICAgIHNlbGVjdGVkOiAhIXZhbHVlc1xuICAgICAgICAgICAgICAgID8uZmluZCh2ID0+IHYuaWQgPT09IG9wdGlvbi5pZClcbiAgICAgICAgICAgICAgICA/LmNoaWxkcmVuPy5maW5kKGNoaWxkVmFsdWUgPT4gY2hpbGRWYWx1ZS5pZCA9PT0gY2hpbGRPcHRpb24uaWQpXG4gICAgICAgICAgICAgICAgPy5zZWxlY3RlZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSlcbiAgKTtcblxuICBwcm9wYWdhdGVDaGFuZ2U6IGFueTtcbiAgcHJvcGFnYXRlVG91Y2g6IGFueTtcblxuICB0cmFja0J5Rm4gPSBpID0+IGk7XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh0cmVlOiBDaGVja2JveFRyZWVSZXN1bHRJdGVtW10pOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlcyQubmV4dCh0cmVlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKHBhcmVudDogRW5oYW5jZWRPcHRpb24sIGN1cnJlbnQ6IEVuaGFuY2VkT3B0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IG9sZFZhbHVlcyA9IHRoaXMudmFsdWVzJC5nZXRWYWx1ZSgpO1xuICAgICAgbGV0IHVwZGF0ZWRQYXJlbnQ7XG4gICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgIC8vIHVwZGF0ZSBwYXJlbnRcbiAgICAgICAgdXBkYXRlZFBhcmVudCA9IHtcbiAgICAgICAgICBpZDogY3VycmVudC5pZCxcbiAgICAgICAgICBzZWxlY3RlZDogIWN1cnJlbnQ/LnNlbGVjdGVkLFxuICAgICAgICAgIGNoaWxkcmVuOiBjdXJyZW50LmNoaWxkcmVuLm1hcChjaGlsZCA9PiAoe1xuICAgICAgICAgICAgaWQ6IGNoaWxkLmlkLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICAgICAgfSkpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVkUGFyZW50ID0ge1xuICAgICAgICAgIGlkOiBwYXJlbnQuaWQsXG4gICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGNoaWxkcmVuOiBwYXJlbnQuY2hpbGRyZW4/Lm1hcChjaGlsZCA9PlxuICAgICAgICAgICAgY2hpbGQ/LmlkID09PSBjdXJyZW50Py5pZFxuICAgICAgICAgICAgICA/IHsgaWQ6IGN1cnJlbnQuaWQsIHNlbGVjdGVkOiAhY3VycmVudD8uc2VsZWN0ZWQgfVxuICAgICAgICAgICAgICA6IHsgaWQ6IGNoaWxkLmlkLCBzZWxlY3RlZDogY2hpbGQuc2VsZWN0ZWQgfVxuICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IG9sZFZhbHVlcy5tYXAodmFsdWUgPT5cbiAgICAgICAgdmFsdWU/LmlkID09PSB1cGRhdGVkUGFyZW50LmlkID8gdXBkYXRlZFBhcmVudCA6IHZhbHVlXG4gICAgICApO1xuICAgICAgdGhpcy52YWx1ZXMkLm5leHQobmV3VmFsdWVzKTtcbiAgICAgIGlmICh0aGlzLnByb3BhZ2F0ZUNoYW5nZSkge1xuICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZShuZXdWYWx1ZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlU3RhdGUob3B0aW9uOiBDaGVja2JveFRyZWVPcHRpb25JdGVtKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyRcbiAgICAgIC5nZXRWYWx1ZSgpXG4gICAgICAubWFwKG8gPT5cbiAgICAgICAgby5pZCA9PT0gb3B0aW9uLmlkID8geyAuLi5vcHRpb24sIGV4cGFuZGVkOiAhby5leHBhbmRlZCB9IDogb1xuICAgICAgKTtcbiAgICB0aGlzLm9wdGlvbnMkLm5leHQob3B0aW9ucyk7XG4gICAgdGhpcy5jaGFuZ2VPcHRpb25FeHBhbmRlZC5lbWl0KG9wdGlvbnMpO1xuICB9XG59XG4iXX0=