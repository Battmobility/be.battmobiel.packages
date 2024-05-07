import { Component, ChangeDetectionStrategy, Input, NgModule, ɵɵdefineInjectable, Injectable } from '@angular/core';
import { sortList, UtilsPipesModule } from '@sofico-framework/utils';
import { ReplaySubject, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule } from '@sofico-framework/ui-kit/components/loading';
import { SimpleTableItemModule } from '@sofico-framework/ui-kit/components/simple-table-item';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class SimpleTableComponent {
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

class SimpleTableModule {
}
SimpleTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SimpleTableComponent],
                exports: [SimpleTableComponent],
                imports: [
                    CommonModule,
                    SimpleTableItemModule,
                    LoadingModule,
                    TranslateModule,
                    UtilsPipesModule,
                    SvgIconModule
                ]
            },] }
];

/**
 * Configuration/builder to build an table config
 * This object contains configuration regarding initial sorting of an object
 */
class SimpleTableConfig {
    constructor() {
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
}

/**
 * We use this builder to create an tableConfig
 * ```typescript
 *
 * builder.createConfig().withFunctionalProp(...)
 *
 * ```
 */
class SimpleTableConfigBuilder {
    createConfig() {
        return new SimpleTableConfig();
    }
}
SimpleTableConfigBuilder.ɵprov = ɵɵdefineInjectable({ factory: function SimpleTableConfigBuilder_Factory() { return new SimpleTableConfigBuilder(); }, token: SimpleTableConfigBuilder, providedIn: "root" });
SimpleTableConfigBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { SimpleTableComponent, SimpleTableConfig, SimpleTableConfigBuilder, SimpleTableModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-simple-table.js.map
