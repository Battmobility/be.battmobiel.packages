var OverviewListComponent_1;
import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { search, sortList } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { BehaviorSubject, combineLatest, of, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, skip, switchMap } from 'rxjs/operators';
let OverviewListComponent = OverviewListComponent_1 = class OverviewListComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        /**
         * The amount of items shown in the list.
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
        /**
         * Whether we define the last tab state through queryParam.
         */
        this.retainGroupSelection = true;
        this.searchedEntities = new EventEmitter();
        // source streams
        this.entities$ = new ReplaySubject(1);
        this.config$ = new ReplaySubject(1);
        this.sortingSub$ = new ReplaySubject(1);
        this.termSub$ = new BehaviorSubject('');
        this.numberOfItemsToDisplaySub$ = new BehaviorSubject(this.thresholdNumberOfItems);
        this.selectedGroupSub$ = new BehaviorSubject(null);
        this.trackByFn = i => i;
    }
    /**
     * The overview list config.
     */
    set config(config) {
        if (config) {
            this.config$.next(config);
            this.sortingSub$.next(config.initialSorting);
            this.searchableSelectors = config.functionalProps
                .filter(prop => prop.searchable)
                .map(prop => prop.selector);
        }
    }
    /**
     * The entities we want to render in this list.
     */
    set entities(entities) {
        if (entities) {
            this.entities$.next(entities);
        }
    }
    sofFocus() {
        var _a;
        if (this.enableSearch) {
            this.searchBarComponent.sofFocus();
        }
        else {
            (_a = this.listComponents.first) === null || _a === void 0 ? void 0 : _a.sofFocus();
        }
    }
    ngOnInit() {
        var _a;
        // intermediate streams
        this.searchedEntities$ = this.getSearchedEntities$();
        this.groupedEntities$ = this.getGroupedEntities$();
        this.sortedEntities$ = this.getSortedEntities$();
        this.searchedEntities$
            .pipe(takeUntilDestroy(this))
            .subscribe(searchedEntities => this.searchedEntities.emit(searchedEntities));
        // presentation streams
        this.filteredEntities$ = this.sortedEntities$;
        this.hasFilteredEntities$ = this.getHasFilteredEntities$();
        if (((_a = this.groupDefinitions) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            const tab = this.activatedRoute.snapshot.queryParamMap.get('tab');
            if (tab) {
                this.selectedGroupSub$.next(this.groupDefinitions.find(x => x.id === tab));
            }
            else {
                this.selectedGroupSub$.next(this.groupDefinitions[0]);
            }
        }
        else {
            this.selectedGroupSub$.next(null);
        }
        this.setupQueryParamSubscription();
    }
    ngOnDestroy() { }
    onChangeSorting(sorting) {
        this.sortingSub$.next(sorting);
        this.numberOfItemsToDisplaySub$.next(this.thresholdNumberOfItems);
    }
    onChangeTerm(term) {
        this.termSub$.next(term);
        this.numberOfItemsToDisplaySub$.next(this.thresholdNumberOfItems);
    }
    onChangeGroup(group) {
        this.selectedGroupSub$.next(group);
        this.numberOfItemsToDisplaySub$.next(this.thresholdNumberOfItems);
    }
    onInView(value) {
        if (value) {
            this.numberOfItemsToDisplaySub$.next(this.numberOfItemsToDisplaySub$.getValue() + this.thresholdNumberOfItems);
        }
    }
    getSearchedEntities$() {
        return this.entities$.pipe(
        // we need switchMap and of because the search takes a term observable instead of a term
        switchMap(results => this.enableSearch && this.searchableSelectors.length !== 0
            ? of(results).pipe(search(this.termSub$, this.searchableSelectors))
            : of(results)), shareReplay({ refCount: true, bufferSize: 1 }));
    }
    getGroupedEntities$() {
        return combineLatest([this.searchedEntities$, this.selectedGroupSub$]).pipe(map(([items, selectedGroup]) => {
            if (!selectedGroup) {
                return items;
            }
            // todo: Remove 'groupIdentifiers' in next major release.
            return selectedGroup.hasOwnProperty('groupIdentifiers') ||
                selectedGroup.hasOwnProperty('groupIdentifiersIncl') ||
                selectedGroup.hasOwnProperty('groupIdentifiersExcl')
                ? items === null || items === void 0 ? void 0 : items.filter(item => {
                    var _a;
                    const selector = this.groupSelector(item);
                    const groupDefinition = selectedGroup;
                    let groupIdentifiersIncluded;
                    let groupIdentifiersExcluded;
                    // todo: Remove 'groupIdentifiers' in next major release.
                    if (selectedGroup.hasOwnProperty('groupIdentifiers')) {
                        groupIdentifiersIncluded = groupDefinition.groupIdentifiers;
                    }
                    else {
                        groupIdentifiersIncluded = groupDefinition.groupIdentifiersIncl;
                        groupIdentifiersExcluded = groupDefinition.groupIdentifiersExcl;
                    }
                    if (Array.isArray(selector)) {
                        const { groupIdentifiersInclStrategy, groupIdentifiersExclStrategy } = groupDefinition;
                        const includesFn = (v) => selector.includes(v);
                        // If either incl. or excl. is undefined we want to ignore said filter and return true (see: ?? true).
                        // It's only needed for the incl. filters as for excl. !undefined = true.
                        return (((_a = (groupIdentifiersInclStrategy === undefined ||
                            groupIdentifiersInclStrategy === 'or'
                            ? groupIdentifiersIncluded === null || groupIdentifiersIncluded === void 0 ? void 0 : groupIdentifiersIncluded.some(includesFn) : groupIdentifiersIncluded === null || groupIdentifiersIncluded === void 0 ? void 0 : groupIdentifiersIncluded.every(includesFn))) !== null && _a !== void 0 ? _a : true) &&
                            (groupIdentifiersExclStrategy === undefined ||
                                groupIdentifiersExclStrategy === 'or'
                                ? !(groupIdentifiersExcluded === null || groupIdentifiersExcluded === void 0 ? void 0 : groupIdentifiersExcluded.some(includesFn))
                                : !(groupIdentifiersExcluded === null || groupIdentifiersExcluded === void 0 ? void 0 : groupIdentifiersExcluded.every(includesFn))));
                    }
                    return ((groupIdentifiersIncluded === null || groupIdentifiersIncluded === void 0 ? void 0 : groupIdentifiersIncluded.includes(selector)) &&
                        !(groupIdentifiersExcluded === null || groupIdentifiersExcluded === void 0 ? void 0 : groupIdentifiersExcluded.includes(selector)));
                }) : items;
        }));
    }
    getSortedEntities$() {
        return combineLatest([
            this.groupedEntities$,
            this.sortingSub$,
            this.numberOfItemsToDisplaySub$
        ]).pipe(map(([entities, sorting, numberOfItemsToDisplay]) => sortList(entities, sorting).slice(0, numberOfItemsToDisplay)));
    }
    getHasFilteredEntities$() {
        return this.filteredEntities$.pipe(map(entities => (entities === null || entities === void 0 ? void 0 : entities.length) > 0), shareReplay({ refCount: true, bufferSize: 1 }));
    }
    setupQueryParamSubscription() {
        this.selectedGroupSub$
            .pipe(skip(1), map(selectedGroup => selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id), filter(selectedGroupId => !!selectedGroupId), distinctUntilChanged(), takeUntilDestroy(this))
            .subscribe(tab => {
            if (this.retainGroupSelection) {
                this.router.navigate([], {
                    relativeTo: this.activatedRoute,
                    queryParams: { tab },
                    queryParamsHandling: 'merge',
                    replaceUrl: true
                });
            }
        });
    }
};
OverviewListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-overview-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="config$ | async as config">
      <div *ngIf="enableSearch || enableSorting" class="row">
        <div
          *ngIf="enableSearch"
          [ngClass]="enableSorting ? 'col-lg-8 col-md-6 col-sm-12' : 'col-12'"
        >
          <sof-overview-list-search-bar
            #searchBarComponent
            [tc]="tc"
            (changeTerm)="onChangeTerm($event)"
          ></sof-overview-list-search-bar>
        </div>
        <div
          *ngIf="enableSorting"
          [ngClass]="
            enableSearch
              ? 'col-lg-4 col-md-6 col-sm-12'
              : 'col-lg-4 offset-lg-8  col-md-12 col-sm-12'
          "
        >
          <sof-overview-list-sort-dropdown
            [tc]="tc"
            [sorting]="sortingSub$ | async"
            [overviewListConfig]="config"
            (changeSorting)="onChangeSorting($event)"
          ></sof-overview-list-sort-dropdown>
        </div>
      </div>
      <div *ngIf="groupDefinitions" class="row">
        <sof-overview-list-group-tabs
          [tc]="tc"
          class="col-lg-12 col-md-12 col-sm-12 mb-3"
          [entities]="searchedEntities$ | async"
          [selectedGroup]="selectedGroupSub$ | async"
          [groupDefinitions]="groupDefinitions"
          [groupSelector]="groupSelector"
          (selectGroup)="onChangeGroup($event)"
        ></sof-overview-list-group-tabs>
      </div>
      <ng-container *ngIf="hasFilteredEntities$ | async; else noResults">
        <sof-in-view [preloadHeight]="500" (inView)="onInView($event)">
          <sof-overview-list-item
            #listComponent
            *ngFor="let entity of filteredEntities$ | async; trackBy: trackByFn"
            [entity]="entity"
            [tc]="tc"
            [dynamicRowComponent]="config?.dynamicRowComponent"
          >
          </sof-overview-list-item>
        </sof-in-view>
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
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: OverviewListComponent_1 }
                ]
            },] }
];
OverviewListComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
OverviewListComponent.propDecorators = {
    tc: [{ type: Input }],
    config: [{ type: Input }],
    entities: [{ type: Input }],
    groupDefinitions: [{ type: Input }],
    thresholdNumberOfItems: [{ type: Input }],
    groupSelector: [{ type: Input }],
    enableSearch: [{ type: Input }],
    enableSorting: [{ type: Input }],
    retainGroupSelection: [{ type: Input }],
    searchedEntities: [{ type: Output }],
    searchBarComponent: [{ type: ViewChild, args: ['searchBarComponent',] }],
    listComponents: [{ type: ViewChildren, args: ['listComponent',] }]
};
OverviewListComponent = OverviewListComponent_1 = __decorate([
    UntilDestroy()
], OverviewListComponent);
export { OverviewListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL292ZXJ2aWV3LWxpc3Qvb3ZlcnZpZXctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekQsT0FBTyxFQUVMLG1CQUFtQixFQUNwQixNQUFNLDJDQUEyQyxDQUFDO0FBS25ELE9BQU8sRUFBRSxNQUFNLEVBQXNCLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGFBQWEsRUFFYixFQUFFLEVBQ0YsYUFBYSxFQUNkLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFdBQVcsRUFDWCxJQUFJLEVBQ0osU0FBUyxFQUNWLE1BQU0sZ0JBQWdCLENBQUM7SUEyRVgscUJBQXFCLG1DQUFyQixxQkFBcUI7SUF5RmhDLFlBQW9CLE1BQWMsRUFBVSxjQUE4QjtRQUF0RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBeEQxRTs7V0FFRztRQUNNLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQU9yQzs7V0FFRztRQUNNLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBRTdCOztXQUVHO1FBQ00sa0JBQWEsR0FBRyxJ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OlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3ZlcnZpZXdMaXN0Q29uZmlnIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NsYXNzZXMnO1xuaW1wb3J0IHsgT3ZlcnZpZXdMaXN0U2VhcmNoQmFyQ29tcG9uZW50IH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvb3ZlcnZpZXctbGlzdC1zZWFyY2gtYmFyJztcbmltcG9ydCB7XG4gIE9uU29mRm9jdXMsXG4gIFNPRl9GT0NVU19DT01QT05FTlRcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2RpcmVjdGl2ZXMvZm9jdXMnO1xuaW1wb3J0IHtcbiAgR3JvdXBEZWZpbml0aW9uLFxuICBHcm91cERlZmluaXRpb25XaXRoSWRlbnRpZmllcnNcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L3R5cGVzJztcbmltcG9ydCB7IHNlYXJjaCwgU29ydGluZ09yZGVyQ29uZmlnLCBzb3J0TGlzdCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3ksIFVudGlsRGVzdHJveSB9IGZyb20gJ25neC1yZWFjdGl2ZXRvb2xraXQnO1xuaW1wb3J0IHtcbiAgQmVoYXZpb3JTdWJqZWN0LFxuICBjb21iaW5lTGF0ZXN0LFxuICBPYnNlcnZhYmxlLFxuICBvZixcbiAgUmVwbGF5U3ViamVjdFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc2hhcmVSZXBsYXksXG4gIHNraXAsXG4gIHN3aXRjaE1hcFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPdmVydmlld0xpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vb3ZlcnZpZXctbGlzdC1pdGVtL292ZXJ2aWV3LWxpc3QtaXRlbS5jb21wb25lbnQnO1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1vdmVydmlldy1saXN0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyQgfCBhc3luYyBhcyBjb25maWdcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJlbmFibGVTZWFyY2ggfHwgZW5hYmxlU29ydGluZ1wiIGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAqbmdJZj1cImVuYWJsZVNlYXJjaFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiZW5hYmxlU29ydGluZyA/ICdjb2wtbGctOCBjb2wtbWQtNiBjb2wtc20tMTInIDogJ2NvbC0xMidcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNvZi1vdmVydmlldy1saXN0LXNlYXJjaC1iYXJcbiAgICAgICAgICAgICNzZWFyY2hCYXJDb21wb25lbnRcbiAgICAgICAgICAgIFt0Y109XCJ0Y1wiXG4gICAgICAgICAgICAoY2hhbmdlVGVybSk9XCJvbkNoYW5nZVRlcm0oJGV2ZW50KVwiXG4gICAgICAgICAgPjwvc29mLW92ZXJ2aWV3LWxpc3Qtc2VhcmNoLWJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAqbmdJZj1cImVuYWJsZVNvcnRpbmdcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICAgICAgZW5hYmxlU2VhcmNoXG4gICAgICAgICAgICAgID8gJ2NvbC1sZy00IGNvbC1tZC02IGNvbC1zbS0xMidcbiAgICAgICAgICAgICAgOiAnY29sLWxnLTQgb2Zmc2V0LWxnLTggIGNvbC1tZC0xMiBjb2wtc20tMTInXG4gICAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzb2Ytb3ZlcnZpZXctbGlzdC1zb3J0LWRyb3Bkb3duXG4gICAgICAgICAgICBbdGNdPVwidGNcIlxuICAgICAgICAgICAgW3NvcnRpbmddPVwic29ydGluZ1N1YiQgfCBhc3luY1wiXG4gICAgICAgICAgICBbb3ZlcnZpZXdMaXN0Q29uZmlnXT1cImNvbmZpZ1wiXG4gICAgICAgICAgICAoY2hhbmdlU29ydGluZyk9XCJvbkNoYW5nZVNvcnRpbmcoJGV2ZW50KVwiXG4gICAgICAgICAgPjwvc29mLW92ZXJ2aWV3LWxpc3Qtc29ydC1kcm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJncm91cERlZmluaXRpb25zXCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPHNvZi1vdmVydmlldy1saXN0LWdyb3VwLXRhYnNcbiAgICAgICAgICBbdGNdPVwidGNcIlxuICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgbWItM1wiXG4gICAgICAgICAgW2VudGl0aWVzXT1cInNlYXJjaGVkRW50aXRpZXMkIHwgYXN5bmNcIlxuICAgICAgICAgIFtzZWxlY3RlZEdyb3VwXT1cInNlbGVjdGVkR3JvdXBTdWIkIHwgYXN5bmNcIlxuICAgICAgICAgIFtncm91cERlZmluaXRpb25zXT1cImdyb3VwRGVmaW5pdGlvbnNcIlxuICAgICAgICAgIFtncm91cFNlbGVjdG9yXT1cImdyb3VwU2VsZWN0b3JcIlxuICAgICAgICAgIChzZWxlY3RHcm91cCk9XCJvbkNoYW5nZUdyb3VwKCRldmVudClcIlxuICAgICAgICA+PC9zb2Ytb3ZlcnZpZXctbGlzdC1ncm91cC10YWJzPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRmlsdGVyZWRFbnRpdGllcyQgfCBhc3luYzsgZWxzZSBub1Jlc3VsdHNcIj5cbiAgICAgICAgPHNvZi1pbi12aWV3IFtwcmVsb2FkSGVpZ2h0XT1cIjUwMFwiIChpblZpZXcpPVwib25JblZpZXcoJGV2ZW50KVwiPlxuICAgICAgICAgIDxzb2Ytb3ZlcnZpZXctbGlzdC1pdGVtXG4gICAgICAgICAgICAjbGlzdENvbXBvbmVudFxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGVudGl0eSBvZiBmaWx0ZXJlZEVudGl0aWVzJCB8IGFzeW5jOyB0cmFja0J5OiB0cmFja0J5Rm5cIlxuICAgICAgICAgICAgW2VudGl0eV09XCJlbnRpdHlcIlxuICAgICAgICAgICAgW3RjXT1cInRjXCJcbiAgICAgICAgICAgIFtkeW5hbWljUm93Q29tcG9uZW50XT1cImNvbmZpZz8uZHluYW1pY1Jvd0NvbXBvbmVudFwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvc29mLW92ZXJ2aWV3LWxpc3QtaXRlbT5cbiAgICAgICAgPC9zb2YtaW4tdmlldz5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLXRlbXBsYXRlICNub1Jlc3VsdHM+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbnRpdGllcyQgfCBhc3luYyBhcyBlbnRpdGllc1wiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbnRpdGllcz8ubGVuZ3RoID4gMDsgZWxzZSBub0RhdGFcIj5cbiAgICAgICAgICAgIHt7IHRjICsgJy4nICsgJ1NFQVJDSC1OTy1SRVNVTFRTJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm9EYXRhPlxuICAgICAgICAgICAge3sgdGMgKyAnLicgKyAnU0VBUkNILU5PLURBVEEnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBPdmVydmlld0xpc3RDb21wb25lbnQgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJ2aWV3TGlzdENvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPblNvZkZvY3VzIHtcbiAgLyoqXG4gICAqIFRoZSB0cmFuc2xhdGlvbiBjb250ZXh0LlxuICAgKi9cbiAgQElucHV0KCkgdGM6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG92ZXJ2aWV3IGxpc3QgY29uZmlnLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IGNvbmZpZyhjb25maWc6IE92ZXJ2aWV3TGlzdENvbmZpZzxUPikge1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnJC5uZXh0KGNvbmZpZyk7XG4gICAgICB0aGlzLnNvcnRpbmdTdWIkLm5leHQoY29uZmlnLmluaXRpYWxTb3J0aW5nKTtcbiAgICAgIHRoaXMuc2VhcmNoYWJsZVNlbGVjdG9ycyA9IGNvbmZpZy5mdW5jdGlvbmFsUHJvcHNcbiAgICAgICAgLmZpbHRlcihwcm9wID0+IHByb3Auc2VhcmNoYWJsZSlcbiAgICAgICAgLm1hcChwcm9wID0+IHByb3Auc2VsZWN0b3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZW50aXRpZXMgd2Ugd2FudCB0byByZW5kZXIgaW4gdGhpcyBsaXN0LlxuICAgKi9cbiAgQElucHV0KCkgc2V0IGVudGl0aWVzKGVudGl0aWVzOiBUW10pIHtcbiAgICBpZiAoZW50aXRpZXMpIHtcbiAgICAgIHRoaXMuZW50aXRpZXMkLm5leHQoZW50aXRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjYW4gcGFzcyBncm91cCBkZWZpbml0aW9ucyB0byBkaXZpZGUgdGhlIGVudGl0aWVzIGludG8gZGlmZmVyZW50IGdyb3Vwcy5cbiAgICovXG4gIEBJbnB1dCgpIGdyb3VwRGVmaW5pdGlvbnM6IEdyb3VwRGVmaW5pdGlvbltdO1xuXG4gIC8qKlxuICAgKiBUaGUgYW1vdW50IG9mIGl0ZW1zIHNob3duIGluIHRoZSBsaXN0LlxuICAgKi9cbiAgQElucHV0KCkgdGhyZXNob2xkTnVtYmVyT2ZJdGVtcyA9IDE1O1xuXG4gIC8qKlxuICAgKiBUaGUgc2VsZWN0b3IgdG8gZGV0ZXJtaW5lIHdoaWNoIGVudGl0eSBiZWxvbmdzIGluIHdoaWNoIGdyb3VwLlxuICAgKi9cbiAgQElucHV0KCkgZ3JvdXBTZWxlY3RvcjogKFQpID0+IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgc2VhcmNoIGJhciBpcyB2aXNpYmxlLlxuICAgKi9cbiAgQElucHV0KCkgZW5hYmxlU2VhcmNoID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgc29ydGluZyBkcm9wZG93biBpcyB2aXNpYmxlLlxuICAgKi9cbiAgQElucHV0KCkgZW5hYmxlU29ydGluZyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgd2UgZGVmaW5lIHRoZSBsYXN0IHRhYiBzdGF0ZSB0aHJvdWdoIHF1ZXJ5UGFyYW0uXG4gICAqL1xuICBASW5wdXQoKSByZXRhaW5Hcm91cFNlbGVjdGlvbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHNlYXJjaGVkRW50aXRpZXMgPSBuZXcgRXZlbnRFbWl0dGVyPFRbXT4oKTtcblxuICBAVmlld0NoaWxkKCdzZWFyY2hCYXJDb21wb25lbnQnKVxuICBzZWFyY2hCYXJDb21wb25lbnQ6IE92ZXJ2aWV3TGlzdFNlYXJjaEJhckNvbXBvbmVudDxUPjtcbiAgQFZpZXdDaGlsZHJlbignbGlzdENvbXBvbmVudCcpIGxpc3RDb21wb25lbnRzOiBRdWVyeUxpc3Q8XG4gICAgT3ZlcnZpZXdMaXN0SXRlbUNvbXBvbmVudDxUPlxuICA+O1xuXG4gIHNlYXJjaGFibGVTZWxlY3RvcnM6ICgoZW50aXR5OiBUKSA9PiBhbnkpW107XG5cbiAgLy8gc291cmNlIHN0cmVhbXNcbiAgZW50aXRpZXMkID0gbmV3IFJlcGxheVN1YmplY3Q8VFtdPigxKTtcbiAgY29uZmlnJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE92ZXJ2aWV3TGlzdENvbmZpZzxUPj4oMSk7XG4gIHNvcnRpbmdTdWIkID0gbmV3IFJlcGxheVN1YmplY3Q8U29ydGluZ09yZGVyQ29uZmlnPFQ+PigxKTtcbiAgdGVybVN1YiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICBwcml2YXRlIG51bWJlck9mSXRlbXNUb0Rpc3BsYXlTdWIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KFxuICAgIHRoaXMudGhyZXNob2xkTnVtYmVyT2ZJdGVtc1xuICApO1xuXG4gIC8vIGludGVybWVkaWF0ZSBzdHJlYW1zXG4gIHNlYXJjaGVkRW50aXRpZXMkOiBPYnNlcnZhYmxlPFRbXT47XG4gIHNlbGVjdGVkR3JvdXBTdWIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHcm91cERlZmluaXRpb24+KG51bGwpO1xuICBwcml2YXRlIGdyb3VwZWRFbnRpdGllcyQ6IE9ic2VydmFibGU8VFtdPjtcbiAgcHJpdmF0ZSBzb3J0ZWRFbnRpdGllcyQ6IE9ic2VydmFibGU8VFtdPjtcblxuICAvLyBwcmVzZW50YXRpb25zIHN0cmVhbXNcbiAgZmlsdGVyZWRFbnRpdGllcyQ6IE9ic2VydmFibGU8VFtdPjtcbiAgaGFzRmlsdGVyZWRFbnRpdGllcyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgdHJhY2tCeUZuID0gaSA9PiBpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxuXG4gIHNvZkZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVuYWJsZVNlYXJjaCkge1xuICAgICAgdGhpcy5zZWFyY2hCYXJDb21wb25lbnQuc29mRm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0Q29tcG9uZW50cy5maXJzdD8uc29mRm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBpbnRlcm1lZGlhdGUgc3RyZWFtc1xuICAgIHRoaXMuc2VhcmNoZWRFbnRpdGllcyQgPSB0aGlzLmdldFNlYXJjaGVkRW50aXRpZXMkKCk7XG4gICAgdGhpcy5ncm91cGVkRW50aXRpZXMkID0gdGhpcy5nZXRHcm91cGVkRW50aXRpZXMkKCk7XG4gICAgdGhpcy5zb3J0ZWRFbnRpdGllcyQgPSB0aGlzLmdldFNvcnRlZEVudGl0aWVzJCgpO1xuXG4gICAgdGhpcy5zZWFyY2hlZEVudGl0aWVzJFxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSlcbiAgICAgIC5zdWJzY3JpYmUoc2VhcmNoZWRFbnRpdGllcyA9PlxuICAgICAgICB0aGlzLnNlYXJjaGVkRW50aXRpZXMuZW1pdChzZWFyY2hlZEVudGl0aWVzKVxuICAgICAgKTtcblxuICAgIC8vIHByZXNlbnRhdGlvbiBzdHJlYW1zXG4gICAgdGhpcy5maWx0ZXJlZEVudGl0aWVzJCA9IHRoaXMuc29ydGVkRW50aXRpZXMkO1xuICAgIHRoaXMuaGFzRmlsdGVyZWRFbnRpdGllcyQgPSB0aGlzLmdldEhhc0ZpbHRlcmVkRW50aXRpZXMkKCk7XG5cbiAgICBpZiAodGhpcy5ncm91cERlZmluaXRpb25zPy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0YWIgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1NYXAuZ2V0KCd0YWInKTtcbiAgICAgIGlmICh0YWIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEdyb3VwU3ViJC5uZXh0KFxuICAgICAgICAgIHRoaXMuZ3JvdXBEZWZpbml0aW9ucy5maW5kKHggPT4geC5pZCA9PT0gdGFiKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEdyb3VwU3ViJC5uZXh0KHRoaXMuZ3JvdXBEZWZpbml0aW9uc1swXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRHcm91cFN1YiQubmV4dChudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldHVwUXVlcnlQYXJhbVN1YnNjcmlwdGlvbigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIG9uQ2hhbmdlU29ydGluZyhzb3J0aW5nOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnRpbmdTdWIkLm5leHQoc29ydGluZyk7XG4gICAgdGhpcy5udW1iZXJPZkl0ZW1zVG9EaXNwbGF5U3ViJC5uZXh0KHRoaXMudGhyZXNob2xkTnVtYmVyT2ZJdGVtcyk7XG4gIH1cblxuICBvbkNoYW5nZVRlcm0odGVybTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50ZXJtU3ViJC5uZXh0KHRlcm0pO1xuICAgIHRoaXMubnVtYmVyT2ZJdGVtc1RvRGlzcGxheVN1YiQubmV4dCh0aGlzLnRocmVzaG9sZE51bWJlck9mSXRlbXMpO1xuICB9XG5cbiAgb25DaGFuZ2VHcm91cChncm91cDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEdyb3VwU3ViJC5uZXh0KGdyb3VwKTtcbiAgICB0aGlzLm51bWJlck9mSXRlbXNUb0Rpc3BsYXlTdWIkLm5leHQodGhpcy50aHJlc2hvbGROdW1iZXJPZkl0ZW1zKTtcbiAgfVxuXG4gIG9uSW5WaWV3KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLm51bWJlck9mSXRlbXNUb0Rpc3BsYXlTdWIkLm5leHQoXG4gICAgICAgIHRoaXMubnVtYmVyT2ZJdGVtc1RvRGlzcGxheVN1YiQuZ2V0VmFsdWUoKSArIHRoaXMudGhyZXNob2xkTnVtYmVyT2ZJdGVtc1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFNlYXJjaGVkRW50aXRpZXMkKCk6IE9ic2VydmFibGU8VFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXRpZXMkLnBpcGUoXG4gICAgICAvLyB3ZSBuZWVkIHN3aXRjaE1hcCBhbmQgb2YgYmVjYXVzZSB0aGUgc2VhcmNoIHRha2VzIGEgdGVybSBvYnNlcnZhYmxlIGluc3RlYWQgb2YgYSB0ZXJtXG4gICAgICBzd2l0Y2hNYXAocmVzdWx0cyA9PlxuICAgICAgICB0aGlzLmVuYWJsZVNlYXJjaCAmJiB0aGlzLnNlYXJjaGFibGVTZWxlY3RvcnMubGVuZ3RoICE9PSAwXG4gICAgICAgICAgPyBvZihyZXN1bHRzKS5waXBlKHNlYXJjaCh0aGlzLnRlcm1TdWIkLCB0aGlzLnNlYXJjaGFibGVTZWxlY3RvcnMpKVxuICAgICAgICAgIDogb2YocmVzdWx0cylcbiAgICAgICksXG4gICAgICBzaGFyZVJlcGxheSh7IHJlZkNvdW50OiB0cnVlLCBidWZmZXJTaXplOiAxIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0R3JvdXBlZEVudGl0aWVzJCgpOiBPYnNlcnZhYmxlPFRbXT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFt0aGlzLnNlYXJjaGVkRW50aXRpZXMkLCB0aGlzLnNlbGVjdGVkR3JvdXBTdWIkXSkucGlwZShcbiAgICAgIG1hcCgoW2l0ZW1zLCBzZWxlY3RlZEdyb3VwXSkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkR3JvdXApIHtcbiAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b2RvOiBSZW1vdmUgJ2dyb3VwSWRlbnRpZmllcnMnIGluIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkR3JvdXAuaGFzT3duUHJvcGVydHkoJ2dyb3VwSWRlbnRpZmllcnMnKSB8fFxuICAgICAgICAgIHNlbGVjdGVkR3JvdXAuaGFzT3duUHJvcGVydHkoJ2dyb3VwSWRlbnRpZmllcnNJbmNsJykgfHxcbiAgICAgICAgICBzZWxlY3RlZEdyb3VwLmhhc093blByb3BlcnR5KCdncm91cElkZW50aWZpZXJzRXhjbCcpXG4gICAgICAgICAgPyBpdGVtcz8uZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuZ3JvdXBTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgICAgY29uc3QgZ3JvdXBEZWZpbml0aW9uID0gc2VsZWN0ZWRHcm91cCBhcyBHcm91cERlZmluaXRpb25XaXRoSWRlbnRpZmllcnM7XG4gICAgICAgICAgICAgIGxldCBncm91cElkZW50aWZpZXJzSW5jbHVkZWQ6IChzdHJpbmcgfCBudW1iZXIpW107XG4gICAgICAgICAgICAgIGxldCBncm91cElkZW50aWZpZXJzRXhjbHVkZWQ6IChzdHJpbmcgfCBudW1iZXIpW107XG5cbiAgICAgICAgICAgICAgLy8gdG9kbzogUmVtb3ZlICdncm91cElkZW50aWZpZXJzJyBpbiBuZXh0IG1ham9yIHJlbGVhc2UuXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZEdyb3VwLmhhc093blByb3BlcnR5KCdncm91cElkZW50aWZpZXJzJykpIHtcbiAgICAgICAgICAgICAgICBncm91cElkZW50aWZpZXJzSW5jbHVkZWQgPSBncm91cERlZmluaXRpb24uZ3JvdXBJZGVudGlmaWVycztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncm91cElkZW50aWZpZXJzSW5jbHVkZWQgPSBncm91cERlZmluaXRpb24uZ3JvdXBJZGVudGlmaWVyc0luY2w7XG4gICAgICAgICAgICAgICAgZ3JvdXBJZGVudGlmaWVyc0V4Y2x1ZGVkID0gZ3JvdXBEZWZpbml0aW9uLmdyb3VwSWRlbnRpZmllcnNFeGNsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgZ3JvdXBJZGVudGlmaWVyc0luY2xTdHJhdGVneSxcbiAgICAgICAgICAgICAgICAgIGdyb3VwSWRlbnRpZmllcnNFeGNsU3RyYXRlZ3lcbiAgICAgICAgICAgICAgICB9ID0gZ3JvdXBEZWZpbml0aW9uO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluY2x1ZGVzRm4gPSAodjogc3RyaW5nIHwgbnVtYmVyKSA9PiBzZWxlY3Rvci5pbmNsdWRlcyh2KTtcblxuICAgICAgICAgICAgICAgIC8vIElmIGVpdGhlciBpbmNsLiBvciBleGNsLiBpcyB1bmRlZmluZWQgd2Ugd2FudCB0byBpZ25vcmUgc2FpZCBmaWx0ZXIgYW5kIHJldHVybiB0cnVlIChzZWU6ID8/IHRydWUpLlxuICAgICAgICAgICAgICAgIC8vIEl0J3Mgb25seSBuZWVkZWQgZm9yIHRoZSBpbmNsLiBmaWx0ZXJzIGFzIGZvciBleGNsLiAhdW5kZWZpbmVkID0gdHJ1ZS5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgKChncm91cElkZW50aWZpZXJzSW5jbFN0cmF0ZWd5ID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICAgIGdyb3VwSWRlbnRpZmllcnNJbmNsU3RyYXRlZ3kgPT09ICdvcidcbiAgICAgICAgICAgICAgICAgICAgPyBncm91cElkZW50aWZpZXJzSW5jbHVkZWQ/LnNvbWUoaW5jbHVkZXNGbilcbiAgICAgICAgICAgICAgICAgICAgOiBncm91cElkZW50aWZpZXJzSW5jbHVkZWQ/LmV2ZXJ5KGluY2x1ZGVzRm4pKSA/P1xuICAgICAgICAgICAgICAgICAgICB0cnVlKSAmJlxuICAgICAgICAgICAgICAgICAgKGdyb3VwSWRlbnRpZmllcnNFeGNsU3RyYXRlZ3kgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgZ3JvdXBJZGVudGlmaWVyc0V4Y2xTdHJhdGVneSA9PT0gJ29yJ1xuICAgICAgICAgICAgICAgICAgICA/ICFncm91cElkZW50aWZpZXJzRXhjbHVkZWQ/LnNvbWUoaW5jbHVkZXNGbilcbiAgICAgICAgICAgICAgICAgICAgOiAhZ3JvdXBJZGVudGlmaWVyc0V4Y2x1ZGVkPy5ldmVyeShpbmNsdWRlc0ZuKSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBncm91cElkZW50aWZpZXJzSW5jbHVkZWQ/LmluY2x1ZGVzKHNlbGVjdG9yKSAmJlxuICAgICAgICAgICAgICAgICFncm91cElkZW50aWZpZXJzRXhjbHVkZWQ/LmluY2x1ZGVzKHNlbGVjdG9yKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IGl0ZW1zO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3J0ZWRFbnRpdGllcyQoKTogT2JzZXJ2YWJsZTxUW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmdyb3VwZWRFbnRpdGllcyQsXG4gICAgICB0aGlzLnNvcnRpbmdTdWIkLFxuICAgICAgdGhpcy5udW1iZXJPZkl0ZW1zVG9EaXNwbGF5U3ViJFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFtlbnRpdGllcywgc29ydGluZywgbnVtYmVyT2ZJdGVtc1RvRGlzcGxheV0pID0+XG4gICAgICAgIHNvcnRMaXN0KGVudGl0aWVzLCBzb3J0aW5nKS5zbGljZSgwLCBudW1iZXJPZkl0ZW1zVG9EaXNwbGF5KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldEhhc0ZpbHRlcmVkRW50aXRpZXMkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkRW50aXRpZXMkLnBpcGUoXG4gICAgICBtYXAoZW50aXRpZXMgPT4gZW50aXRpZXM/Lmxlbmd0aCA+IDApLFxuICAgICAgc2hhcmVSZXBsYXkoeyByZWZDb3VudDogdHJ1ZSwgYnVmZmVyU2l6ZTogMSB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwUXVlcnlQYXJhbVN1YnNjcmlwdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkR3JvdXBTdWIkXG4gICAgICAucGlwZShcbiAgICAgICAgc2tpcCgxKSxcbiAgICAgICAgbWFwKHNlbGVjdGVkR3JvdXAgPT4gc2VsZWN0ZWRHcm91cD8uaWQpLFxuICAgICAgICBmaWx0ZXIoc2VsZWN0ZWRHcm91cElkID0+ICEhc2VsZWN0ZWRHcm91cElkKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveSh0aGlzKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh0YWIgPT4ge1xuICAgICAgICBpZiAodGhpcy5yZXRhaW5Hcm91cFNlbGVjdGlvbikge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgdGFiIH0sXG4gICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLFxuICAgICAgICAgICAgcmVwbGFjZVVybDogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufVxuIl19