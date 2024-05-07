(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common'), require('@ngx-translate/core'), require('@sofico-framework/ui-kit/components/loading'), require('@sofico-framework/ui-kit/components/overview-list-item'), require('@sofico-framework/utils')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/simple-list', ['exports', '@angular/core', 'rxjs', '@angular/common', '@ngx-translate/core', '@sofico-framework/ui-kit/components/loading', '@sofico-framework/ui-kit/components/overview-list-item', '@sofico-framework/utils'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['simple-list'] = {}), global.ng.core, global.rxjs, global.ng.common, global.core, global['sofico-framework']['ui-kit'].components.loading, global['sofico-framework']['ui-kit'].components['overview-list-item'], global.utils));
}(this, (function (exports, i0, rxjs, common, core, loading, overviewListItem, utils) { 'use strict';

  var SimpleListComponent = /** @class */ (function () {
      function SimpleListComponent() {
          // input streams
          this.entities$ = new rxjs.ReplaySubject(1);
          this.config$ = new rxjs.ReplaySubject(1);
          this.sorting$ = new rxjs.ReplaySubject(1);
          this.trackByFn = function (i) { return i; };
      }
      Object.defineProperty(SimpleListComponent.prototype, "config", {
          /**
           * The simple list config.
           */
          set: function (config) {
              if (config) {
                  this.config$.next(config);
                  this.sorting$.next(config.initialSorting);
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(SimpleListComponent.prototype, "entities", {
          /**
           * The entities we want to render in this list.
           */
          set: function (entities) {
              if (entities) {
                  this.entities$.next(entities);
              }
          },
          enumerable: false,
          configurable: true
      });
      return SimpleListComponent;
  }());
  SimpleListComponent.decorators = [
      { type: i0.Component, args: [{
                  selector: 'sof-simple-list',
                  changeDetection: i0.ChangeDetectionStrategy.OnPush,
                  template: "\n    <ng-container *ngIf=\"config$ | async as config\">\n      <ng-container *ngIf=\"entities$ | async as entities\">\n        <ng-container *ngIf=\"entities && entities.length > 0; else noResults\">\n          <sof-overview-list-item\n            *ngFor=\"\n              let entity of entities | sofSort: (sorting$ | async);\n              trackBy: trackByFn\n            \"\n            [entity]=\"entity\"\n            [tc]=\"tc\"\n            [dynamicRowComponent]=\"config?.dynamicRowComponent\"\n          >\n          </sof-overview-list-item>\n        </ng-container>\n      </ng-container>\n      <ng-template #noResults>\n        {{ tc + '.' + 'NO-RESULTS' | translate }}\n      </ng-template>\n    </ng-container>\n  "
              },] }
  ];
  SimpleListComponent.propDecorators = {
      tc: [{ type: i0.Input }],
      config: [{ type: i0.Input }],
      entities: [{ type: i0.Input }]
  };

  var SimpleListModule = /** @class */ (function () {
      function SimpleListModule() {
      }
      return SimpleListModule;
  }());
  SimpleListModule.decorators = [
      { type: i0.NgModule, args: [{
                  declarations: [SimpleListComponent],
                  exports: [SimpleListComponent],
                  imports: [
                      common.CommonModule,
                      overviewListItem.OverviewListItemModule,
                      loading.LoadingModule,
                      core.TranslateModule,
                      utils.UtilsPipesModule
                  ]
              },] }
  ];

  /**
   * Configuration/builder to build an simplelist config
   * This object contains configuration regarding initial sorting of an object
   */
  var SimpleListConfig = /** @class */ (function () {
      function SimpleListConfig() {
          this.initialSorting = {
              prop: null
          };
          this.dynamicRowComponent = null;
      }
      SimpleListConfig.prototype.setSorting = function (selector, order) {
          this.initialSorting = {
              prop: selector,
              order: order
          };
          return this;
      };
      SimpleListConfig.prototype.setDynamicRowComponent = function (component) {
          this.dynamicRowComponent = component;
          return this;
      };
      return SimpleListConfig;
  }());

  /**
   * We use this builder to create an simpleListConfig
   * ```typescript
   *
   * builder.createConfig().withFunctionalProp(...)
   *
   * ```
   */
  var SimpleListConfigBuilder = /** @class */ (function () {
      function SimpleListConfigBuilder() {
      }
      SimpleListConfigBuilder.prototype.createConfig = function () {
          return new SimpleListConfig();
      };
      return SimpleListConfigBuilder;
  }());
  SimpleListConfigBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function SimpleListConfigBuilder_Factory() { return new SimpleListConfigBuilder(); }, token: SimpleListConfigBuilder, providedIn: "root" });
  SimpleListConfigBuilder.decorators = [
      { type: i0.Injectable, args: [{
                  providedIn: 'root'
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.SimpleListComponent = SimpleListComponent;
  exports.SimpleListConfig = SimpleListConfig;
  exports.SimpleListConfigBuilder = SimpleListConfigBuilder;
  exports.SimpleListModule = SimpleListModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-simple-list.umd.js.map
