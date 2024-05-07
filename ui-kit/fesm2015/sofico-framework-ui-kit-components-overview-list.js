import { __decorate } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChild, ViewChildren, ComponentFactoryResolver, ViewContainerRef, NgModule, ɵɵdefineInjectable, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { search, sortList } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { ReplaySubject, BehaviorSubject, of, combineLatest } from 'rxjs';
import { switchMap, shareReplay, map, skip, filter, distinctUntilChanged } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InViewModule } from '@sofico-framework/ui-kit/components/in-view';
import { LoadingModule } from '@sofico-framework/ui-kit/components/loading';
import { OverviewListGroupFilterModule } from '@sofico-framework/ui-kit/components/overview-list-group-filter';
import { OverviewListSearchBarModule } from '@sofico-framework/ui-kit/components/overview-list-search-bar';
import { OverviewListSortDropdownModule } from '@sofico-framework/ui-kit/components/overview-list-sort-dropdown';
import { InteractivityChecker } from '@angular/cdk/a11y';
import { OverviewListConfig } from '@sofico-framework/ui-kit/classes';

var OverviewListComponent_1;
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

class OverviewListItemComponent {
    constructor(componentFactoryResolver, viewContainerRef, interactivityChecker) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.interactivityChecker = interactivityChecker;
    }
    /**
     * The translation context.
     */
    set tc(tc) {
        this.localTc = tc;
        if (this.componentRef) {
            this.componentRef.instance.tc = this.localTc;
        }
    }
    /**
     * The entity we want to set.
     */
    set entity(entity) {
        this.localEntity = entity;
        if (this.componentRef) {
            this.componentRef.instance.entity = this.localEntity;
        }
    }
    ngOnInit() {
        const factory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicRowComponent);
        this.componentRef = this.viewContainerRef.createComponent(factory);
        this.componentRef.instance.tc = this.localTc;
        this.componentRef.instance.entity = this.localEntity;
    }
    sofFocus() {
        var _a;
        if (this.componentRef.instance &&
            typeof this.componentRef.instance.sofFocus ===
                'function') {
            this.componentRef.instance.sofFocus();
        }
        else if (this.interactivityChecker.isFocusable(this.componentRef.location.nativeElement)) {
            this.componentRef.location.nativeElement.focus();
        }
        else if (this.interactivityChecker.isFocusable((_a = this.componentRef.location.nativeElement) === null || _a === void 0 ? void 0 : _a.firstChild)) {
            this.componentRef.location.nativeElement.firstChild.focus();
        }
        else {
            throw Error('The dynamic row component nor its first child is focusable.');
        }
    }
}
OverviewListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-overview-list-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ``,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: OverviewListItemComponent }
                ],
                styles: [""]
            },] }
];
OverviewListItemComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: InteractivityChecker }
];
OverviewListItemComponent.propDecorators = {
    tc: [{ type: Input }],
    entity: [{ type: Input }],
    dynamicRowComponent: [{ type: Input }]
};

class OverviewListItemModule {
}
OverviewListItemModule.decorators = [
    { type: NgModule, args: [{
                declarations: [OverviewListItemComponent],
                exports: [OverviewListItemComponent],
                imports: [CommonModule]
            },] }
];

class OverviewListModule {
}
OverviewListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [OverviewListComponent],
                exports: [OverviewListComponent],
                imports: [
                    CommonModule,
                    OverviewListItemModule,
                    LoadingModule,
                    OverviewListSearchBarModule,
                    OverviewListGroupFilterModule,
                    TranslateModule,
                    OverviewListSortDropdownModule,
                    InViewModule
                ]
            },] }
];

/**
 * We use this builder to create an overviewListConfig
 * ```typescript
 *
 * builder.createConfig().withFunctionalProp(...)
 *
 * ```
 */
class OverviewListConfigBuilder {
    createConfig() {
        return new OverviewListConfig();
    }
}
OverviewListConfigBuilder.ɵprov = ɵɵdefineInjectable({ factory: function OverviewListConfigBuilder_Factory() { return new OverviewListConfigBuilder(); }, token: OverviewListConfigBuilder, providedIn: "root" });
OverviewListConfigBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { OverviewListComponent, OverviewListConfigBuilder, OverviewListModule, OverviewListItemModule as ɵa, OverviewListItemComponent as ɵb };
//# sourceMappingURL=sofico-framework-ui-kit-components-overview-list.js.map
