import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
export class OverviewListSortDropdownComponent {
    constructor(translateService, fb) {
        this.translateService = translateService;
        this.fb = fb;
        this.form = this.fb.control(0);
        this.changeSorting = new EventEmitter();
        this.selectorLabel = x => x === null || x === void 0 ? void 0 : x.translation;
        this.selectorValue = x => x === null || x === void 0 ? void 0 : x.index;
    }
    set overviewListConfig(config) {
        var _a, _b, _c, _d, _e, _f;
        this.selectors = (_b = (_a = config === null || config === void 0 ? void 0 : config.functionalProps) === null || _a === void 0 ? void 0 : _a.filter(prop => prop.sortable)) === null || _b === void 0 ? void 0 : _b.map(prop => prop === null || prop === void 0 ? void 0 : prop.selector);
        this.plainSorts = (_d = (_c = config === null || config === void 0 ? void 0 : config.functionalProps) === null || _c === void 0 ? void 0 : _c.filter(prop => prop.sortable)) === null || _d === void 0 ? void 0 : _d.map(prop => prop === null || prop === void 0 ? void 0 : prop.plainSort);
        this.labels = (_f = (_e = config === null || config === void 0 ? void 0 : config.functionalProps) === null || _e === void 0 ? void 0 : _e.filter(prop => prop.sortable)) === null || _f === void 0 ? void 0 : _f.map(prop => prop === null || prop === void 0 ? void 0 : prop.label);
        this.dropDownChoices$ = this.mapToTranslatedDropDownChoices();
    }
    changeDirection() {
        var _a, _b, _c;
        this.changeSorting.emit({
            prop: (_a = this.sorting) === null || _a === void 0 ? void 0 : _a.prop,
            plainSort: (_b = this.sorting) === null || _b === void 0 ? void 0 : _b.plainSort,
            order: ((_c = this.sorting) === null || _c === void 0 ? void 0 : _c.order) === 'asc' ? 'desc' : 'asc'
        });
    }
    onChange(obj) {
        var _a;
        this.changeSorting.emit({
            prop: this.selectors[obj.index],
            plainSort: this.plainSorts[obj.index],
            order: (_a = this.sorting) === null || _a === void 0 ? void 0 : _a.order
        });
    }
    mapToTranslatedDropDownChoices() {
        const arrayReadyTranslate = this.labels.map(label => this.tc + '.' + label);
        return this.translateService.stream(arrayReadyTranslate).pipe(map(obj => Object.keys(obj).map((key, index) => {
            return {
                translation: obj[key],
                index
            };
        })));
    }
}
OverviewListSortDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-overview-list-sort-dropdown',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button
          sofButton
          [icon]="
            sorting?.order === 'asc'
              ? 'icon-sort-amount-asc'
              : 'icon-sort-amount-desc'
          "
          class="btn"
          type="button"
          (click)="changeDirection()"
        ></button>
      </div>
      <sof-input-single-select
        [tc]="tc"
        class="form-control"
        [formControl]="form"
        [options]="dropDownChoices$ | async"
        [selectorLabel]="selectorLabel"
        [selectorValue]="selectorValue"
        [clearable]="false"
        [showSearch]="false"
        (changeObjectValue)="onChange($event)"
      ></sof-input-single-select>
    </div>
  `,
                styles: [".input-group{background-color:#fff;border-radius:.25rem}.input-group .btn{display:flex;align-items:center;border:1px solid #ced4da;border-right:0}.input-group sof-input-single-select.form-control{padding:0;border:0}"]
            },] }
];
OverviewListSortDropdownComponent.ctorParameters = () => [
    { type: TranslateService },
    { type: FormBuilder }
];
OverviewListSortDropdownComponent.propDecorators = {
    tc: [{ type: Input }],
    sorting: [{ type: Input }],
    overviewListConfig: [{ type: Input }],
    changeSorting: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctbGlzdC1zb3J0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvb3ZlcnZpZXctbGlzdC1zb3J0LWRyb3Bkb3duL292ZXJ2aWV3LWxpc3Qtc29ydC1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXZELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW1DckMsTUFBTSxPQUFPLGlDQUFpQztJQThCNUMsWUFDVSxnQkFBa0MsRUFDbEMsRUFBZTtRQURmLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQTFCekIsU0FBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBbUIxQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBRTFELGtCQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsV0FBVyxDQUFDO1FBQ3BDLGtCQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsS0FBSyxDQUFDO0lBSzNCLENBQUM7SUF0QkosSUFBYSxrQkFBa0IsQ0FBQyxNQUE2Qjs7UUFDM0QsSUFBSSxDQUFDLFNBQVMsZUFBRyxNQUFN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cG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE92ZXJ2aWV3TGlzdENvbmZpZyB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jbGFzc2VzJztcbmltcG9ydCB7IFNvcnRpbmdPcmRlckNvbmZpZyB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLW92ZXJ2aWV3LWxpc3Qtc29ydC1kcm9wZG93bicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgc29mQnV0dG9uXG4gICAgICAgICAgW2ljb25dPVwiXG4gICAgICAgICAgICBzb3J0aW5nPy5vcmRlciA9PT0gJ2FzYydcbiAgICAgICAgICAgICAgPyAnaWNvbi1zb3J0LWFtb3VudC1hc2MnXG4gICAgICAgICAgICAgIDogJ2ljb24tc29ydC1hbW91bnQtZGVzYydcbiAgICAgICAgICBcIlxuICAgICAgICAgIGNsYXNzPVwiYnRuXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlRGlyZWN0aW9uKClcIlxuICAgICAgICA+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzb2YtaW5wdXQtc2luZ2xlLXNlbGVjdFxuICAgICAgICBbdGNdPVwidGNcIlxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtXCJcbiAgICAgICAgW29wdGlvbnNdPVwiZHJvcERvd25DaG9pY2VzJCB8IGFzeW5jXCJcbiAgICAgICAgW3NlbGVjdG9yTGFiZWxdPVwic2VsZWN0b3JMYWJlbFwiXG4gICAgICAgIFtzZWxlY3RvclZhbHVlXT1cInNlbGVjdG9yVmFsdWVcIlxuICAgICAgICBbY2xlYXJhYmxlXT1cImZhbHNlXCJcbiAgICAgICAgW3Nob3dTZWFyY2hdPVwiZmFsc2VcIlxuICAgICAgICAoY2hhbmdlT2JqZWN0VmFsdWUpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICA+PC9zb2YtaW5wdXQtc2luZ2xlLXNlbGVjdD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vb3ZlcnZpZXctbGlzdC1zb3J0LWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXdMaXN0U29ydERyb3Bkb3duQ29tcG9uZW50PFQ+IHtcbiAgbGFiZWxzOiBzdHJpbmdbXTtcbiAgcGxhaW5Tb3J0czogYm9vbGVhbltdO1xuICBzZWxlY3RvcnM6ICgoZW50aXR5OiBUKSA9PiBhbnkpW107XG4gIGRyb3BEb3duQ2hvaWNlcyQ6IE9ic2VydmFibGU8eyB0cmFuc2xhdGlvbjogc3RyaW5nOyBpbmRleDogbnVtYmVyIH1bXT47XG5cbiAgZm9ybSA9IHRoaXMuZmIuY29udHJvbCgwKTtcblxuICBASW5wdXQoKSB0Yzogc3RyaW5nO1xuICBASW5wdXQoKSBzb3J0aW5nOiBTb3J0aW5nT3JkZXJDb25maWc8VD47XG5cbiAgQElucHV0KCkgc2V0IG92ZXJ2aWV3TGlzdENvbmZpZyhjb25maWc6IE92ZXJ2aWV3TGlzdENvbmZpZzxUPikge1xuICAgIHRoaXMuc2VsZWN0b3JzID0gY29uZmlnPy5mdW5jdGlvbmFsUHJvcHNcbiAgICAgID8uZmlsdGVyKHByb3AgPT4gcHJvcC5zb3J0YWJsZSlcbiAgICAgID8ubWFwKHByb3AgPT4gcHJvcD8uc2VsZWN0b3IpO1xuICAgIHRoaXMucGxhaW5Tb3J0cyA9IGNvbmZpZz8uZnVuY3Rpb25hbFByb3BzXG4gICAgICA/LmZpbHRlcihwcm9wID0+IHByb3Auc29ydGFibGUpXG4gICAgICA/Lm1hcChwcm9wID0+IHByb3A/LnBsYWluU29ydCk7XG4gICAgdGhpcy5sYWJlbHMgPSBjb25maWc/LmZ1bmN0aW9uYWxQcm9wc1xuICAgICAgPy5maWx0ZXIocHJvcCA9PiBwcm9wLnNvcnRhYmxlKVxuICAgICAgPy5tYXAocHJvcCA9PiBwcm9wPy5sYWJlbCk7XG4gICAgdGhpcy5kcm9wRG93bkNob2ljZXMkID0gdGhpcy5tYXBUb1RyYW5zbGF0ZWREcm9wRG93bkNob2ljZXMoKTtcbiAgfVxuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VTb3J0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0aW5nT3JkZXJDb25maWc8VD4+KCk7XG5cbiAgc2VsZWN0b3JMYWJlbCA9IHggPT4geD8udHJhbnNsYXRpb247XG4gIHNlbGVjdG9yVmFsdWUgPSB4ID0+IHg/LmluZGV4O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlU29ydGluZy5lbWl0KHtcbiAgICAgIHByb3A6IHRoaXMuc29ydGluZz8ucHJvcCxcbiAgICAgIHBsYWluU29ydDogdGhpcy5zb3J0aW5nPy5wbGFpblNvcnQsXG4gICAgICBvcmRlcjogdGhpcy5zb3J0aW5nPy5vcmRlciA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJ1xuICAgIH0pO1xuICB9XG5cbiAgb25DaGFuZ2Uob2JqOiB7IHRyYW5zbGF0aW9uOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlU29ydGluZy5lbWl0KHtcbiAgICAgIHByb3A6IHRoaXMuc2VsZWN0b3JzW29iai5pbmRleF0sXG4gICAgICBwbGFpblNvcnQ6IHRoaXMucGxhaW5Tb3J0c1tvYmouaW5kZXhdLFxuICAgICAgb3JkZXI6IHRoaXMuc29ydGluZz8ub3JkZXJcbiAgICB9KTtcbiAgfVxuXG4gIG1hcFRvVHJhbnNsYXRlZERyb3BEb3duQ2hvaWNlcygpOiBPYnNlcnZhYmxlPFxuICAgIHsgdHJhbnNsYXRpb246IHN0cmluZzsgaW5kZXg6IG51bWJlciB9W11cbiAgPiB7XG4gICAgY29uc3QgYXJyYXlSZWFkeVRyYW5zbGF0ZSA9IHRoaXMubGFiZWxzLm1hcChsYWJlbCA9PiB0aGlzLnRjICsgJy4nICsgbGFiZWwpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc3RyZWFtKGFycmF5UmVhZHlUcmFuc2xhdGUpLnBpcGUoXG4gICAgICBtYXAob2JqID0+XG4gICAgICAgIE9iamVjdC5rZXlzKG9iaikubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uOiBvYmpba2V5XSxcbiAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=