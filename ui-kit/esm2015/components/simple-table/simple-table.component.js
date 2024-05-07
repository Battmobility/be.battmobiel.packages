import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { sortList } from '@sofico-framework/utils';
import { BehaviorSubject, combineLatest, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
export class SimpleTableComponent {
    constructor() {
        // source streams
        this.entities$ = new ReplaySubject(1);
        this.config$ = new ReplaySubject(1);
        // intermediate streams
        this.sortingSub$ = new BehaviorSubject(null);
        this.trackByFn = i => i;
    }
    /**
     * The simple table config.
     */
    set config(config) {
        var _a, _b, _c, _d;
        if (config) {
            this.config$.next(config);
            this.sortingSub$.next(config.initialSorting);
            this.selectors = (_b = (_a = config === null || config === void 0 ? void 0 : config.functionalProps) === null || _a === void 0 ? void 0 : _a.filter(prop => prop.sortable)) === null || _b === void 0 ? void 0 : _b.map(prop => prop === null || prop === void 0 ? void 0 : prop.selector);
            this.plainSorts = (_d = (_c = config === null || config === void 0 ? void 0 : config.functionalProps) === null || _c === void 0 ? void 0 : _c.filter(prop => prop.sortable)) === null || _d === void 0 ? void 0 : _d.map(prop => prop === null || prop === void 0 ? void 0 : prop.plainSort);
            if (config.initialSorting) {
                this.activeSortPropId = config.initialSortingFuncPropRef.id;
            }
        }
    }
    /**
     * The entities we want to render in this table.
     */
    set entities(entities) {
        if (entities) {
            this.entities$.next(entities);
        }
    }
    ngOnInit() {
        // presentation streams
        this.sortedEntities$ = this.getSortedEntities$();
    }
    onChangeSorting(id, index) {
        this.sortingSub$.next({
            prop: this.selectors[index],
            plainSort: this.plainSorts[index],
            order: id === this.activeSortPropId
                ? this.sortingSub$.getValue().order === 'asc'
                    ? 'desc'
                    : 'asc'
                : 'asc'
        });
        this.activeSortPropId = id;
    }
    getSortedEntities$() {
        return combineLatest([this.entities$, this.sortingSub$]).pipe(map(([entities, sorting]) => sortList(entities, sorting)));
    }
}
SimpleTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-simple-table',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="config$ | async as config">
      <ng-container *ngIf="sortedEntities$ | async as sortedEntities">
        <div class="table-responsive">
          <table class="table table-borderless table-striped">
            <thead>
              <tr>
                <th
                  *ngFor="let prop of config.functionalProps; let i = index"
                  (click)="onChangeSorting(prop.id, i)"
                >
                  <div class="d-flex">
                    <div>{{ tc + '.' + prop.header | translate }}</div>
                    <sof-svg-icon
                      class="ml-1"
                      [class.visibility-hidden]="activeSortPropId !== prop.id"
                      [icon]="
                        (sortingSub$ | async)?.order === 'asc'
                          ? 'icon-sort-amount-asc'
                          : 'icon-sort-amount-desc'
                      "
                      size="12"
                    ></sof-svg-icon>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <sof-simple-table-item
                *ngFor="
                  let entity of sortedEntities | sofSort: (sortingSub$ | async);
                  trackBy: trackByFn
                "
                [entity]="entity"
                [tc]="tc"
                [dynamicRowComponent]="config?.dynamicRowComponent"
              >
              </sof-simple-table-item>
            </tbody>
          </table>
        </div>
        <div class="no-results" *ngIf="sortedEntities?.length === 0">
          {{ tc + '.' + 'SEARCH-NO-RESULTS' | translate }}
        </div>
      </ng-container>
    </ng-container>
  `,
                styles: [".visibility-hidden{visibility:hidden}thead>tr{cursor:pointer}.table-responsive sof-svg-icon{align-self:center}.no-results{margin-left:.75rem}"]
            },] }
];
SimpleTableComponent.propDecorators = {
    tc: [{ type: Input }],
    config: [{ type: Input }],
    entities: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvc2ltcGxlLXRhYmxlL3NpbXBsZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBc0IsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUNMLGVBQWUsRUFDZixhQUFhLEVBRWIsYUFBYSxFQUNkLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBdURyQyxNQUFNLE9BQU8sb0JBQW9CO0lBcERqQztRQTRGRSxpQkFBaUI7UUFDakIsY0FBUyxHQUFHLElBQUksYUFBYSxDQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLFlBQU8sR0FBRyxJQUFJLGFBQWEsQ0FBdUIsQ0FBQyxDQUFDLENBQUM7UUFFckQsdUJBQXVCO1FBQ3ZCLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQXdCLElBQUksQ0FBQyxDQUFDO1FBSy9ELGNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQTJCckIsQ0FBQztJQXZFQzs7T0FFRztJQUNILElBQWEsTUFBTSxDQUFDLE1BQTRCOztRQUM5QyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUyxlQUFHLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxlQUFlLDBDQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSwyQ0FDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLGVBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGVBQWUsMENBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLDJDQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsU0FBUyxDQUFDLENBQUM7WUFFakMsSUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO2dCQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsQ0FBQzthQUM3RDtTQUNGO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYSxRQUFRLENBQUMsUUFBYTtRQUNqQyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQW1CRCxRQUFRO1FBQ04sdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELGVBQWUsQ0FBQyxFQUFVLEVBQUUsS0FBYTtRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2pDLEtBQUssRUFDSCxFQUFFLEtBQUssSUFBSSxDQUFDLGdCQUFnQjtnQkFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxLQUFLLEtBQUs7b0JBQzNDLENBQUMsQ0FBQyxNQUFNO29CQUNSLENBQUMsQ0FBQyxLQUFLO2dCQUNULENBQUMsQ0FBQyxLQUFLO1NBQ1osQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLE9BQU8sYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzNELEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQzFELENBQUM7SUFDSixDQUFDOzs7WUFoSUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q1Q7O2FBRUY7OztpQkFLRSxLQUFLO3FCQUtMLEtBQUs7dUJBb0JMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU29ydGluZ09yZGVyQ29uZmlnLCBzb3J0TGlzdCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcbmltcG9ydCB7XG4gIEJlaGF2aW9yU3ViamVjdCxcbiAgY29tYmluZUxhdGVzdCxcbiAgT2JzZXJ2YWJsZSxcbiAgUmVwbGF5U3ViamVjdFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNpbXBsZVRhYmxlQ29uZmlnIH0gZnJvbSAnLi9jbGFzc2VzL3NpbXBsZS10YWJsZS1jb25maWcuY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2Ytc2ltcGxlLXRhYmxlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyQgfCBhc3luYyBhcyBjb25maWdcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzb3J0ZWRFbnRpdGllcyQgfCBhc3luYyBhcyBzb3J0ZWRFbnRpdGllc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmxlc3MgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgcHJvcCBvZiBjb25maWcuZnVuY3Rpb25hbFByb3BzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNoYW5nZVNvcnRpbmcocHJvcC5pZCwgaSlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57eyB0YyArICcuJyArIHByb3AuaGVhZGVyIHwgdHJhbnNsYXRlIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzb2Ytc3ZnLWljb25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1sLTFcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy52aXNpYmlsaXR5LWhpZGRlbl09XCJhY3RpdmVTb3J0UHJvcElkICE9PSBwcm9wLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbaWNvbl09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzb3J0aW5nU3ViJCB8IGFzeW5jKT8ub3JkZXIgPT09ICdhc2MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2ljb24tc29ydC1hbW91bnQtYXNjJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdpY29uLXNvcnQtYW1vdW50LWRlc2MnXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICA+PC9zb2Ytc3ZnLWljb24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgPHNvZi1zaW1wbGUtdGFibGUtaXRlbVxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgbGV0IGVudGl0eSBvZiBzb3J0ZWRFbnRpdGllcyB8IHNvZlNvcnQ6IChzb3J0aW5nU3ViJCB8IGFzeW5jKTtcbiAgICAgICAgICAgICAgICAgIHRyYWNrQnk6IHRyYWNrQnlGblxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgW2VudGl0eV09XCJlbnRpdHlcIlxuICAgICAgICAgICAgICAgIFt0Y109XCJ0Y1wiXG4gICAgICAgICAgICAgICAgW2R5bmFtaWNSb3dDb21wb25lbnRdPVwiY29uZmlnPy5keW5hbWljUm93Q29tcG9uZW50XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3NvZi1zaW1wbGUtdGFibGUtaXRlbT5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzXCIgKm5nSWY9XCJzb3J0ZWRFbnRpdGllcz8ubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAge3sgdGMgKyAnLicgKyAnU0VBUkNILU5PLVJFU1VMVFMnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3NpbXBsZS10YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZVRhYmxlQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoZSB0cmFuc2xhdGlvbiBjb250ZXh0LlxuICAgKi9cbiAgQElucHV0KCkgdGM6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHNpbXBsZSB0YWJsZSBjb25maWcuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgY29uZmlnKGNvbmZpZzogU2ltcGxlVGFibGVDb25maWc8VD4pIHtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyQubmV4dChjb25maWcpO1xuICAgICAgdGhpcy5zb3J0aW5nU3ViJC5uZXh0KGNvbmZpZy5pbml0aWFsU29ydGluZyk7XG4gICAgICB0aGlzLnNlbGVjdG9ycyA9IGNvbmZpZz8uZnVuY3Rpb25hbFByb3BzXG4gICAgICAgID8uZmlsdGVyKHByb3AgPT4gcHJvcC5zb3J0YWJsZSlcbiAgICAgICAgPy5tYXAocHJvcCA9PiBwcm9wPy5zZWxlY3Rvcik7XG4gICAgICB0aGlzLnBsYWluU29ydHMgPSBjb25maWc/LmZ1bmN0aW9uYWxQcm9wc1xuICAgICAgICA/LmZpbHRlcihwcm9wID0+IHByb3Auc29ydGFibGUpXG4gICAgICAgID8ubWFwKHByb3AgPT4gcHJvcD8ucGxhaW5Tb3J0KTtcblxuICAgICAgaWYgKGNvbmZpZy5pbml0aWFsU29ydGluZykge1xuICAgICAgICB0aGlzLmFjdGl2ZVNvcnRQcm9wSWQgPSBjb25maWcuaW5pdGlhbFNvcnRpbmdGdW5jUHJvcFJlZi5pZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIGVudGl0aWVzIHdlIHdhbnQgdG8gcmVuZGVyIGluIHRoaXMgdGFibGUuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgZW50aXRpZXMoZW50aXRpZXM6IFRbXSkge1xuICAgIGlmIChlbnRpdGllcykge1xuICAgICAgdGhpcy5lbnRpdGllcyQubmV4dChlbnRpdGllcyk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0b3JzOiAoKGVudGl0eTogVCkgPT4gYW55KVtdO1xuICBwbGFpblNvcnRzOiBib29sZWFuW107XG5cbiAgYWN0aXZlU29ydFByb3BJZDogbnVtYmVyO1xuXG4gIC8vIHNvdXJjZSBzdHJlYW1zXG4gIGVudGl0aWVzJCA9IG5ldyBSZXBsYXlTdWJqZWN0PFRbXT4oMSk7XG4gIGNvbmZpZyQgPSBuZXcgUmVwbGF5U3ViamVjdDxTaW1wbGVUYWJsZUNvbmZpZzxUPj4oMSk7XG5cbiAgLy8gaW50ZXJtZWRpYXRlIHN0cmVhbXNcbiAgc29ydGluZ1N1YiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNvcnRpbmdPcmRlckNvbmZpZzxUPj4obnVsbCk7XG5cbiAgLy8gcHJlc2VudGF0aW9uIHN0cmVhbXNcbiAgc29ydGVkRW50aXRpZXMkOiBPYnNlcnZhYmxlPFRbXT47XG5cbiAgdHJhY2tCeUZuID0gaSA9PiBpO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIHByZXNlbnRhdGlvbiBzdHJlYW1zXG4gICAgdGhpcy5zb3J0ZWRFbnRpdGllcyQgPSB0aGlzLmdldFNvcnRlZEVudGl0aWVzJCgpO1xuICB9XG5cbiAgb25DaGFuZ2VTb3J0aW5nKGlkOiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnRpbmdTdWIkLm5leHQoe1xuICAgICAgcHJvcDogdGhpcy5zZWxlY3RvcnNbaW5kZXhdLFxuICAgICAgcGxhaW5Tb3J0OiB0aGlzLnBsYWluU29ydHNbaW5kZXhdLFxuICAgICAgb3JkZXI6XG4gICAgICAgIGlkID09PSB0aGlzLmFjdGl2ZVNvcnRQcm9wSWRcbiAgICAgICAgICA/IHRoaXMuc29ydGluZ1N1YiQuZ2V0VmFsdWUoKS5vcmRlciA9PT0gJ2FzYydcbiAgICAgICAgICAgID8gJ2Rlc2MnXG4gICAgICAgICAgICA6ICdhc2MnXG4gICAgICAgICAgOiAnYXNjJ1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmVTb3J0UHJvcElkID0gaWQ7XG4gIH1cblxuICBwcml2YXRlIGdldFNvcnRlZEVudGl0aWVzJCgpOiBPYnNlcnZhYmxlPFRbXT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFt0aGlzLmVudGl0aWVzJCwgdGhpcy5zb3J0aW5nU3ViJF0pLnBpcGUoXG4gICAgICBtYXAoKFtlbnRpdGllcywgc29ydGluZ10pID0+IHNvcnRMaXN0KGVudGl0aWVzLCBzb3J0aW5nKSlcbiAgICApO1xuICB9XG59XG4iXX0=