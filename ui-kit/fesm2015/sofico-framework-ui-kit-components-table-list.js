import { __decorate } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChild, ComponentFactoryResolver, ViewContainerRef, NgModule, ɵɵdefineInjectable, Injectable } from '@angular/core';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { search, sortList, UtilsPipesModule } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { ReplaySubject, BehaviorSubject, of, combineLatest } from 'rxjs';
import { switchMap, shareReplay, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule } from '@sofico-framework/ui-kit/components/loading';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { TableListSearchBarModule } from '@sofico-framework/ui-kit/components/table-list-search-bar';

var TableListComponent_1;
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

class TableListItemComponent {
    constructor(componentFactoryResolver, viewContainerRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
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
}
TableListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-table-list-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ``,
                styles: [""]
            },] }
];
TableListItemComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
TableListItemComponent.propDecorators = {
    tc: [{ type: Input }],
    entity: [{ type: Input }],
    dynamicRowComponent: [{ type: Input }]
};

class TableListItemModule {
}
TableListItemModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TableListItemComponent],
                exports: [TableListItemComponent],
                imports: [CommonModule]
            },] }
];

class TableListModule {
}
TableListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TableListComponent],
                imports: [
                    CommonModule,
                    TableListSearchBarModule,
                    LoadingModule,
                    TranslateModule,
                    UtilsPipesModule,
                    SvgIconModule,
                    TableListItemModule
                ],
                exports: [TableListComponent]
            },] }
];

class TableListConfig {
    constructor() {
        /**
         * FunctionalProps:
         * id: Used as a unique identifier for sorting as we can't assume the translations in column headers are uniaue.
         */
        this.functionalProps = [];
        this.initialSorting = {
            prop: null
        };
        this.dynamicRowComponent = null;
        this.initialSortingFuncPropRef = null;
        this.functionalPropCount = 0;
    }
    setDynamicRowComponent(component) {
        this.dynamicRowComponent = component;
        return this;
    }
    withNaturalSorting() {
        const propToUpdate = this.functionalProps[this.functionalProps.length - 1];
        propToUpdate.sortable = true;
        propToUpdate.plainSort = false;
        if (this.initialSortingFuncPropRef) {
            this.initialSortingFuncPropRef.plainSort = propToUpdate.plainSort;
        }
        return this;
    }
    withPlainSorting(label) {
        const propToUpdate = this.functionalProps[this.functionalProps.length - 1];
        propToUpdate.sortable = true;
        propToUpdate.plainSort = true;
        if (this.initialSortingFuncPropRef) {
            this.initialSortingFuncPropRef.plainSort = propToUpdate.plainSort;
        }
        return this;
    }
    asInitialSorting(order) {
        const propToUpdate = this.functionalProps[this.functionalProps.length - 1];
        this.initialSorting = {
            prop: propToUpdate.selector,
            order,
            plainSort: propToUpdate.plainSort
        };
        this.initialSortingFuncPropRef = propToUpdate;
        return this;
    }
    addFunctionalProp(selector) {
        this.functionalProps.push({
            id: this.functionalPropCount,
            header: '',
            selector,
            searchable: false,
            sortable: false,
            plainSort: false
        });
        this.functionalPropCount++;
        return this;
    }
    setHeader(header) {
        const propToUpdate = this.functionalProps[this.functionalProps.length - 1];
        propToUpdate.header = header;
        return this;
    }
    withSearch() {
        const propToUpdate = this.functionalProps[this.functionalProps.length - 1];
        propToUpdate.searchable = true;
        return this;
    }
}

/**
 * We use this builder to create an tableConfig
 * ```typescript
 *
 * builder.createConfig().withFunctionalProp(...)
 *
 * ```
 */
class TableListConfigBuilder {
    createConfig() {
        return new TableListConfig();
    }
}
TableListConfigBuilder.ɵprov = ɵɵdefineInjectable({ factory: function TableListConfigBuilder_Factory() { return new TableListConfigBuilder(); }, token: TableListConfigBuilder, providedIn: "root" });
TableListConfigBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { TableListComponent, TableListConfig, TableListConfigBuilder, TableListModule, TableListItemModule as ɵa, TableListItemComponent as ɵb };
//# sourceMappingURL=sofico-framework-ui-kit-components-table-list.js.map
