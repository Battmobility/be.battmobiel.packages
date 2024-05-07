var TableListComponent_1;
import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { search, sortList } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { BehaviorSubject, combineLatest, of, ReplaySubject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
let TableListComponent = TableListComponent_1 = class TableListComponent {
    constructor() {
        this.entities$ = new ReplaySubject(1);
        this.config$ = new ReplaySubject(1);
        /**
         * The amount of items shown in the table.
         */
        this.thresholdNumberOfItems = 15;
        /**
         * Whether the search bar is visible.
         */
        this.enableSearch = true;
        /**
         * Whether the sorting dropdown is visible.
         */
        this.enableSorting = true;
        this.searchedEntities = new EventEmitter();
        // source streams
        this.termSub$ = new BehaviorSubject('');
        this.sortingSub$ = new BehaviorSubject(null);
        this.numberOfItemsToDisplaySub$ = new BehaviorSubject(this.thresholdNumberOfItems);
        this.trackByFn = i => i;
    }
    /**
     * The table list config.
     */
    set config(config) {
        var _a, _b, _c, _d;
        if (config) {
            this.config$.next(config);
            this.sortingSub$.next(config.initialSorting);
            this.searchableSelectors = config.functionalProps
                .filter(prop => prop.searchable)
                .map(prop => prop.selector);
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
    sofFocus() {
        if (this.enableSearch) {
            this.searchBarComponent.sofFocus();
        }
    }
    ngOnInit() {
        this.searchedEntities$ = this.getSearchedEntities$();
        this.searchedEntities$
            .pipe(takeUntilDestroy(this))
            .subscribe(searchedEntities => this.searchedEntities.emit(searchedEntities));
        this.sortedEntities$ = this.getSortedEntities$();
        this.hasSearchedEntities = this.getHasEntities$();
    }
    ngOnDestroy() { }
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
    onChangeTerm(term) {
        this.termSub$.next(term);
        this.numberOfItemsToDisplaySub$.next(this.thresholdNumberOfItems);
        this.getSearchedEntities$();
    }
    getSearchedEntities$() {
        return this.entities$.pipe(switchMap(results => this.enableSearch && this.searchableSelectors.length !== 0
            ? of(results).pipe(search(this.termSub$, this.searchableSelectors))
            : of(results)), shareReplay({ refCount: true, bufferSize: 1 }));
    }
    getSortedEntities$() {
        return combineLatest([this.entities$, this.sortingSub$]).pipe(map(([entities, sorting]) => sortList(entities, sorting)));
    }
    getHasEntities$() {
        return this.searchedEntities$.pipe(map(entities => (entities === null || entities === void 0 ? void 0 : entities.length) > 0), shareReplay({ refCount: true, bufferSize: 1 }));
    }
};
TableListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-table-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="config$ | async as config">
      <div *ngIf="enableSearch" class="w-100">
        <sof-table-list-search-bar
          #searchBarComponent
          [tc]="tc"
          (changeTerm)="onChangeTerm($event)"
        ></sof-table-list-search-bar>
      </div>
      <ng-container *ngIf="hasSearchedEntities | async; else noResults">
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
              <sof-table-list-item
                *ngFor="
                  let entity of searchedEntities$
                    | async
                    | sofSort: (sortingSub$ | async);
                  trackBy: trackByFn
                "
                [entity]="entity"
                [tc]="tc"
                [dynamicRowComponent]="config?.dynamicRowComponent"
              >
              </sof-table-list-item>
            </tbody>
          </table>
        </div>
      </ng-container>
      <ng-template #noResults>
        <ng-container *ngIf="entities$ | async as entities">
          <ng-container *ngIf="entities?.length > 0; else noData">
            {{ tc + '.' + 'SEARCH-NO-RESULTS' | translate }}
          </ng-container>
          <ng-template #noData>
            {{ tc + '.' + 'SEARCH-NO-DATA' | translate }}
          </ng-template>
        </ng-container>
      </ng-template>
    </ng-container>
  `,
                providers: [{ provide: SOF_FOCUS_COMPONENT, useExisting: TableListComponent_1 }],
                styles: [".visibility-hidden{visibility:hidden}thead>tr{cursor:pointer}.table-responsive sof-svg-icon{align-self:center}.no-results{margin-left:.75rem}"]
            },] }
];
TableListComponent.propDecorators = {
    thresholdNumberOfItems: [{ type: Input }],
    tc: [{ type: Input }],
    config: [{ type: Input }],
    entities: [{ type: Input }],
    enableSearch: [{ type: Input }],
    enableSorting: [{ type: Input }],
    searchedEntities: [{ type: Output }],
    searchBarComponent: [{ type: ViewChild, args: ['searchBarComponent',] }]
};
TableListComponent = TableListComponent_1 = __decorate([
    UntilDestroy()
], TableListComponent);
export { TableListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL3RhYmxlLWxpc3QvdGFibGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUVMLG1CQUFtQixFQUNwQixNQUFNLDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQXNCLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGFBQWEsRUFFYixFQUFFLEVBQ0YsYUFBYSxFQUNkLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7SUF5RWhELGtCQUFrQixnQ0FBbEIsa0JBQWtCOztRQUM3QixjQUFTLEdBQUcsSUFBSSxhQUFhLENBQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEMsWUFBTyxHQUFHLElBQUksYUFBYSxDQUFxQixDQUFDLENBQUMsQ0FBQztRQUduRDs7V0FFRztRQUNNLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQXVDckM7O1dBRUc7UUFDTSxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUU3Qjs7V0FFRztRQUNNLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBRXBCLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFVckQsaUJBQWlCO1FBQ2pCLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUMzQyxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUF3QixJQUFJLENBQUMsQ0FBQztRQUN2RCwrQkFBMEIsR0FBRyxJQUFJLGVBQWUsQ0FDdEQsSUFBSSxDQUFDLHNCQUFzQixDQUM1QixDQUFDO1FBT0YsY0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBa0VyQixDQUFDO0lBbElDOztPQUVHO0lBQ0gsSUFBYSxNQUFNLENBQUMsTUFBMEI7O1FBQzVDLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsZUFBZTtpQkFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztpQkFDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLGVBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGVBQWUsMENBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLDJDQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsUUFBUSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsZUFBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsZUFBZSwwQ0FDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsMkNBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxTQUFTLENBQUMsQ0FBQztZQUVqQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUMsRUFBRSxDQUFDO2FBQzdEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFhLFFBQVEsQ0FBQyxRQUFhO1FBQ2pDLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBb0NELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGlCQUFpQjthQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUIsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUM3QyxDQUFDO1FBQ0osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUVqRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxXQUFXLEtBQVUsQ0FBQztJQUV0QixlQUFlLENBQUMsRUFBVSxFQUFFLEtBQWE7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFLLEVBQ0gsRUFBRSxLQUFLLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssS0FBSyxLQUFLO29CQUMzQyxDQUFDLENBQUMsTUFBTTtvQkFDUixDQUFDLENBQUMsS0FBSztnQkFDVCxDQUFDLENBQUMsS0FBSztTQUNaLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN4QixTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDbEIsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDeEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDbkUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FDaEIsRUFDRCxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixPQUFPLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMzRCxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUMxRCxDQUFDO0lBQ0osQ0FBQztJQUVPLGVBQWU7UUFDckIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUNoQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxNQUFNLElBQUcsQ0FBQyxDQUFDLEVBQ3JDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQy9DLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUF0TkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOERUO2dCQUVELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxvQkFBa0IsRUFBRSxDQUFDOzthQUMvRTs7O3FDQVNFLEtBQUs7aUJBS0wsS0FBSztxQkFLTCxLQUFLO3VCQXVCTCxLQUFLOzJCQVNMLEtBQUs7NEJBS0wsS0FBSzsrQkFFTCxNQUFNO2lDQUVOLFNBQVMsU0FBQyxvQkFBb0I7O0FBM0RwQixrQkFBa0I7SUF0RTlCLFlBQVksRUFBRTtHQXNFRixrQkFBa0IsQ0FpSjlCO1NBakpZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlTGlzdFNlYXJjaEJhckNvbXBvbmVudCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL3RhYmxlLWxpc3Qtc2VhcmNoLWJhcic7XG5pbXBvcnQge1xuICBPblNvZkZvY3VzLFxuICBTT0ZfRk9DVVNfQ09NUE9ORU5UXG59IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9kaXJlY3RpdmVzL2ZvY3VzJztcbmltcG9ydCB7IHNlYXJjaCwgU29ydGluZ09yZGVyQ29uZmlnLCBzb3J0TGlzdCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3ksIFVudGlsRGVzdHJveSB9IGZyb20gJ25neC1yZWFjdGl2ZXRvb2xraXQnO1xuaW1wb3J0IHtcbiAgQmVoYXZpb3JTdWJqZWN0LFxuICBjb21iaW5lTGF0ZXN0LFxuICBPYnNlcnZhYmxlLFxuICBvZixcbiAgUmVwbGF5U3ViamVjdFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRhYmxlTGlzdENvbmZpZyB9IGZyb20gJy4vY2xhc3Nlcy90YWJsZS1saXN0LWNvbmZpZy5jbGFzcyc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLXRhYmxlLWxpc3QnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnJCB8IGFzeW5jIGFzIGNvbmZpZ1wiPlxuICAgICAgPGRpdiAqbmdJZj1cImVuYWJsZVNlYXJjaFwiIGNsYXNzPVwidy0xMDBcIj5cbiAgICAgICAgPHNvZi10YWJsZS1saXN0LXNlYXJjaC1iYXJcbiAgICAgICAgICAjc2VhcmNoQmFyQ29tcG9uZW50XG4gICAgICAgICAgW3RjXT1cInRjXCJcbiAgICAgICAgICAoY2hhbmdlVGVybSk9XCJvbkNoYW5nZVRlcm0oJGV2ZW50KVwiXG4gICAgICAgID48L3NvZi10YWJsZS1saXN0LXNlYXJjaC1iYXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNTZWFyY2hlZEVudGl0aWVzIHwgYXN5bmM7IGVsc2Ugbm9SZXN1bHRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVybGVzcyB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBwcm9wIG9mIGNvbmZpZy5mdW5jdGlvbmFsUHJvcHM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hhbmdlU29ydGluZyhwcm9wLmlkLCBpKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt7IHRjICsgJy4nICsgcHJvcC5oZWFkZXIgfCB0cmFuc2xhdGUgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNvZi1zdmctaWNvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWwtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnZpc2liaWxpdHktaGlkZGVuXT1cImFjdGl2ZVNvcnRQcm9wSWQgIT09IHByb3AuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtpY29uXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKHNvcnRpbmdTdWIkIHwgYXN5bmMpPy5vcmRlciA9PT0gJ2FzYydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaWNvbi1zb3J0LWFtb3VudC1hc2MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2ljb24tc29ydC1hbW91bnQtZGVzYydcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgID48L3NvZi1zdmctaWNvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8c29mLXRhYmxlLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgbGV0IGVudGl0eSBvZiBzZWFyY2hlZEVudGl0aWVzJFxuICAgICAgICAgICAgICAgICAgICB8IGFzeW5jXG4gICAgICAgICAgICAgICAgICAgIHwgc29mU29ydDogKHNvcnRpbmdTdWIkIHwgYXN5bmMpO1xuICAgICAgICAgICAgICAgICAgdHJhY2tCeTogdHJhY2tCeUZuXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICBbZW50aXR5XT1cImVudGl0eVwiXG4gICAgICAgICAgICAgICAgW3RjXT1cInRjXCJcbiAgICAgICAgICAgICAgICBbZHluYW1pY1Jvd0NvbXBvbmVudF09XCJjb25maWc/LmR5bmFtaWNSb3dDb21wb25lbnRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvc29mLXRhYmxlLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjbm9SZXN1bHRzPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50aXRpZXMkIHwgYXN5bmMgYXMgZW50aXRpZXNcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50aXRpZXM/Lmxlbmd0aCA+IDA7IGVsc2Ugbm9EYXRhXCI+XG4gICAgICAgICAgICB7eyB0YyArICcuJyArICdTRUFSQ0gtTk8tUkVTVUxUUycgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI25vRGF0YT5cbiAgICAgICAgICAgIHt7IHRjICsgJy4nICsgJ1NFQVJDSC1OTy1EQVRBJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtbGlzdC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBUYWJsZUxpc3RDb21wb25lbnQgfV1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVMaXN0Q29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uU29mRm9jdXMge1xuICBlbnRpdGllcyQgPSBuZXcgUmVwbGF5U3ViamVjdDxUW10+KDEpO1xuICBjb25maWckID0gbmV3IFJlcGxheVN1YmplY3Q8VGFibGVMaXN0Q29uZmlnPFQ+PigxKTtcbiAgc2VhcmNoYWJsZVNlbGVjdG9yczogKChlbnRpdHk6IFQpID0+IGFueSlbXTtcblxuICAvKipcbiAgICogVGhlIGFtb3VudCBvZiBpdGVtcyBzaG93biBpbiB0aGUgdGFibGUuXG4gICAqL1xuICBASW5wdXQoKSB0aHJlc2hvbGROdW1iZXJPZkl0ZW1zID0gMTU7XG5cbiAgLyoqXG4gICAqIFRoZSB0cmFuc2xhdGlvbiBjb250ZXh0LlxuICAgKi9cbiAgQElucHV0KCkgdGM6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHRhYmxlIGxpc3QgY29uZmlnLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IGNvbmZpZyhjb25maWc6IFRhYmxlTGlzdENvbmZpZzxUPikge1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnJC5uZXh0KGNvbmZpZyk7XG4gICAgICB0aGlzLnNvcnRpbmdTdWIkLm5leHQoY29uZmlnLmluaXRpYWxTb3J0aW5nKTtcbiAgICAgIHRoaXMuc2VhcmNoYWJsZVNlbGVjdG9ycyA9IGNvbmZpZy5mdW5jdGlvbmFsUHJvcHNcbiAgICAgICAgLmZpbHRlcihwcm9wID0+IHByb3Auc2VhcmNoYWJsZSlcbiAgICAgICAgLm1hcChwcm9wID0+IHByb3Auc2VsZWN0b3IpO1xuICAgICAgdGhpcy5zZWxlY3RvcnMgPSBjb25maWc/LmZ1bmN0aW9uYWxQcm9wc1xuICAgICAgICA/LmZpbHRlcihwcm9wID0+IHByb3Auc29ydGFibGUpXG4gICAgICAgID8ubWFwKHByb3AgPT4gcHJvcD8uc2VsZWN0b3IpO1xuICAgICAgdGhpcy5wbGFpblNvcnRzID0gY29uZmlnPy5mdW5jdGlvbmFsUHJvcHNcbiAgICAgICAgPy5maWx0ZXIocHJvcCA9PiBwcm9wLnNvcnRhYmxlKVxuICAgICAgICA/Lm1hcChwcm9wID0+IHByb3A/LnBsYWluU29ydCk7XG5cbiAgICAgIGlmIChjb25maWcuaW5pdGlhbFNvcnRpbmcpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTb3J0UHJvcElkID0gY29uZmlnLmluaXRpYWxTb3J0aW5nRnVuY1Byb3BSZWYuaWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBlbnRpdGllcyB3ZSB3YW50IHRvIHJlbmRlciBpbiB0aGlzIHRhYmxlLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IGVudGl0aWVzKGVudGl0aWVzOiBUW10pIHtcbiAgICBpZiAoZW50aXRpZXMpIHtcbiAgICAgIHRoaXMuZW50aXRpZXMkLm5leHQoZW50aXRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBzZWFyY2ggYmFyIGlzIHZpc2libGUuXG4gICAqL1xuICBASW5wdXQoKSBlbmFibGVTZWFyY2ggPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBzb3J0aW5nIGRyb3Bkb3duIGlzIHZpc2libGUuXG4gICAqL1xuICBASW5wdXQoKSBlbmFibGVTb3J0aW5nID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgc2VhcmNoZWRFbnRpdGllcyA9IG5ldyBFdmVudEVtaXR0ZXI8VFtdPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaEJhckNvbXBvbmVudCcpXG4gIHNlYXJjaEJhckNvbXBvbmVudDogVGFibGVMaXN0U2VhcmNoQmFyQ29tcG9uZW50PFQ+O1xuXG4gIC8vIHByZXNlbnRhdGlvbiBzdHJlYW1zXG4gIHNlYXJjaGVkRW50aXRpZXMkOiBPYnNlcnZhYmxlPFRbXT47XG4gIHNvcnRlZEVudGl0aWVzJDogT2JzZXJ2YWJsZTxUW10+O1xuICBoYXNTZWFyY2hlZEVudGl0aWVzOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIC8vIHNvdXJjZSBzdHJlYW1zXG4gIHRlcm1TdWIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgc29ydGluZ1N1YiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNvcnRpbmdPcmRlckNvbmZpZzxUPj4obnVsbCk7XG4gIHByaXZhdGUgbnVtYmVyT2ZJdGVtc1RvRGlzcGxheVN1YiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oXG4gICAgdGhpcy50aHJlc2hvbGROdW1iZXJPZkl0ZW1zXG4gICk7XG5cbiAgc2VsZWN0b3JzOiAoKGVudGl0eTogVCkgPT4gYW55KVtdO1xuICBwbGFpblNvcnRzOiBib29sZWFuW107XG5cbiAgYWN0aXZlU29ydFByb3BJZDogbnVtYmVyO1xuXG4gIHRyYWNrQnlGbiA9IGkgPT4gaTtcblxuICBzb2ZGb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbmFibGVTZWFyY2gpIHtcbiAgICAgIHRoaXMuc2VhcmNoQmFyQ29tcG9uZW50LnNvZkZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hlZEVudGl0aWVzJCA9IHRoaXMuZ2V0U2VhcmNoZWRFbnRpdGllcyQoKTtcbiAgICB0aGlzLnNlYXJjaGVkRW50aXRpZXMkXG4gICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95KHRoaXMpKVxuICAgICAgLnN1YnNjcmliZShzZWFyY2hlZEVudGl0aWVzID0+XG4gICAgICAgIHRoaXMuc2VhcmNoZWRFbnRpdGllcy5lbWl0KHNlYXJjaGVkRW50aXRpZXMpXG4gICAgICApO1xuICAgIHRoaXMuc29ydGVkRW50aXRpZXMkID0gdGhpcy5nZXRTb3J0ZWRFbnRpdGllcyQoKTtcblxuICAgIHRoaXMuaGFzU2VhcmNoZWRFbnRpdGllcyA9IHRoaXMuZ2V0SGFzRW50aXRpZXMkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25DaGFuZ2VTb3J0aW5nKGlkOiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnRpbmdTdWIkLm5leHQoe1xuICAgICAgcHJvcDogdGhpcy5zZWxlY3RvcnNbaW5kZXhdLFxuICAgICAgcGxhaW5Tb3J0OiB0aGlzLnBsYWluU29ydHNbaW5kZXhdLFxuICAgICAgb3JkZXI6XG4gICAgICAgIGlkID09PSB0aGlzLmFjdGl2ZVNvcnRQcm9wSWRcbiAgICAgICAgICA/IHRoaXMuc29ydGluZ1N1YiQuZ2V0VmFsdWUoKS5vcmRlciA9PT0gJ2FzYydcbiAgICAgICAgICAgID8gJ2Rlc2MnXG4gICAgICAgICAgICA6ICdhc2MnXG4gICAgICAgICAgOiAnYXNjJ1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmVTb3J0UHJvcElkID0gaWQ7XG4gIH1cblxuICBvbkNoYW5nZVRlcm0odGVybTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50ZXJtU3ViJC5uZXh0KHRlcm0pO1xuICAgIHRoaXMubnVtYmVyT2ZJdGVtc1RvRGlzcGxheVN1YiQubmV4dCh0aGlzLnRocmVzaG9sZE51bWJlck9mSXRlbXMpO1xuICAgIHRoaXMuZ2V0U2VhcmNoZWRFbnRpdGllcyQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VhcmNoZWRFbnRpdGllcyQoKTogT2JzZXJ2YWJsZTxUW10+IHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdGllcyQucGlwZShcbiAgICAgIHN3aXRjaE1hcChyZXN1bHRzID0+XG4gICAgICAgIHRoaXMuZW5hYmxlU2VhcmNoICYmIHRoaXMuc2VhcmNoYWJsZVNlbGVjdG9ycy5sZW5ndGggIT09IDBcbiAgICAgICAgICA/IG9mKHJlc3VsdHMpLnBpcGUoc2VhcmNoKHRoaXMudGVybVN1YiQsIHRoaXMuc2VhcmNoYWJsZVNlbGVjdG9ycykpXG4gICAgICAgICAgOiBvZihyZXN1bHRzKVxuICAgICAgKSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgcmVmQ291bnQ6IHRydWUsIGJ1ZmZlclNpemU6IDEgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3J0ZWRFbnRpdGllcyQoKTogT2JzZXJ2YWJsZTxUW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbdGhpcy5lbnRpdGllcyQsIHRoaXMuc29ydGluZ1N1YiRdKS5waXBlKFxuICAgICAgbWFwKChbZW50aXRpZXMsIHNvcnRpbmddKSA9PiBzb3J0TGlzdChlbnRpdGllcywgc29ydGluZykpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGFzRW50aXRpZXMkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaGVkRW50aXRpZXMkLnBpcGUoXG4gICAgICBtYXAoZW50aXRpZXMgPT4gZW50aXRpZXM/Lmxlbmd0aCA+IDApLFxuICAgICAgc2hhcmVSZXBsYXkoeyByZWZDb3VudDogdHJ1ZSwgYnVmZmVyU2l6ZTogMSB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==