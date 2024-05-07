import { Component, ChangeDetectionStrategy, Input, NgModule, ɵɵdefineInjectable, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule } from '@sofico-framework/ui-kit/components/loading';
import { OverviewListItemModule } from '@sofico-framework/ui-kit/components/overview-list-item';
import { UtilsPipesModule } from '@sofico-framework/utils';

class SimpleListComponent {
    constructor() {
        // input streams
        this.entities$ = new ReplaySubject(1);
        this.config$ = new ReplaySubject(1);
        this.sorting$ = new ReplaySubject(1);
        this.trackByFn = i => i;
    }
    /**
     * The simple list config.
     */
    set config(config) {
        if (config) {
            this.config$.next(config);
            this.sorting$.next(config.initialSorting);
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
}
SimpleListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-simple-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="config$ | async as config">
      <ng-container *ngIf="entities$ | async as entities">
        <ng-container *ngIf="entities && entities.length > 0; else noResults">
          <sof-overview-list-item
            *ngFor="
              let entity of entities | sofSort: (sorting$ | async);
              trackBy: trackByFn
            "
            [entity]="entity"
            [tc]="tc"
            [dynamicRowComponent]="config?.dynamicRowComponent"
          >
          </sof-overview-list-item>
        </ng-container>
      </ng-container>
      <ng-template #noResults>
        {{ tc + '.' + 'NO-RESULTS' | translate }}
      </ng-template>
    </ng-container>
  `
            },] }
];
SimpleListComponent.propDecorators = {
    tc: [{ type: Input }],
    config: [{ type: Input }],
    entities: [{ type: Input }]
};

class SimpleListModule {
}
SimpleListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SimpleListComponent],
                exports: [SimpleListComponent],
                imports: [
                    CommonModule,
                    OverviewListItemModule,
                    LoadingModule,
                    TranslateModule,
                    UtilsPipesModule
                ]
            },] }
];

/**
 * Configuration/builder to build an simplelist config
 * This object contains configuration regarding initial sorting of an object
 */
class SimpleListConfig {
    constructor() {
        this.initialSorting = {
            prop: null
        };
        this.dynamicRowComponent = null;
    }
    setSorting(selector, order) {
        this.initialSorting = {
            prop: selector,
            order
        };
        return this;
    }
    setDynamicRowComponent(component) {
        this.dynamicRowComponent = component;
        return this;
    }
}

/**
 * We use this builder to create an simpleListConfig
 * ```typescript
 *
 * builder.createConfig().withFunctionalProp(...)
 *
 * ```
 */
class SimpleListConfigBuilder {
    createConfig() {
        return new SimpleListConfig();
    }
}
SimpleListConfigBuilder.ɵprov = ɵɵdefineInjectable({ factory: function SimpleListConfigBuilder_Factory() { return new SimpleListConfigBuilder(); }, token: SimpleListConfigBuilder, providedIn: "root" });
SimpleListConfigBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { SimpleListComponent, SimpleListConfig, SimpleListConfigBuilder, SimpleListModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-simple-list.js.map
