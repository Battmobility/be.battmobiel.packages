(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@sofico-framework/ui-kit/directives/focus'), require('@sofico-framework/utils'), require('ngx-reactivetoolkit'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@ngx-translate/core'), require('@sofico-framework/ui-kit/components/loading'), require('@sofico-framework/ui-kit/components/svg-icon'), require('@sofico-framework/ui-kit/components/table-list-search-bar')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/table-list', ['exports', '@angular/core', '@sofico-framework/ui-kit/directives/focus', '@sofico-framework/utils', 'ngx-reactivetoolkit', 'rxjs', 'rxjs/operators', '@angular/common', '@ngx-translate/core', '@sofico-framework/ui-kit/components/loading', '@sofico-framework/ui-kit/components/svg-icon', '@sofico-framework/ui-kit/components/table-list-search-bar'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['table-list'] = {}), global.ng.core, global['sofico-framework']['ui-kit'].directives.focus, global.utils, global.ngxReactivetoolkit, global.rxjs, global.rxjs.operators, global.ng.common, global.core, global['sofico-framework']['ui-kit'].components.loading, global['sofico-framework']['ui-kit'].components['svg-icon'], global['sofico-framework']['ui-kit'].components['table-list-search-bar']));
}(this, (function (exports, i0, focus, utils, ngxReactivetoolkit, rxjs, operators, common, core, loading, svgIcon, tableListSearchBar) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var TableListComponent_1;
    exports.TableListComponent = TableListComponent_1 = /** @class */ (function () {
        function TableListComponent() {
            this.entities$ = new rxjs.ReplaySubject(1);
            this.config$ = new rxjs.ReplaySubject(1);
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
            this.searchedEntities = new i0.EventEmitter();
            // source streams
            this.termSub$ = new rxjs.BehaviorSubject('');
            this.sortingSub$ = new rxjs.BehaviorSubject(null);
            this.numberOfItemsToDisplaySub$ = new rxjs.BehaviorSubject(this.thresholdNumberOfItems);
            this.trackByFn = function (i) { return i; };
        }
        Object.defineProperty(TableListComponent.prototype, "config", {
            /**
             * The table list config.
             */
            set: function (config) {
                var _a, _b, _c, _d;
                if (config) {
                    this.config$.next(config);
                    this.sortingSub$.next(config.initialSorting);
                    this.searchableSelectors = config.functionalProps
                        .filter(function (prop) { return prop.searchable; })
                        .map(function (prop) { return prop.selector; });
                    this.selectors = (_b = (_a = config === null || config === void 0 ? void 0 : config.functionalProps) === null || _a === void 0 ? void 0 : _a.filter(function (prop) { return prop.sortable; })) === null || _b === void 0 ? void 0 : _b.map(function (prop) { return prop === null || prop === void 0 ? void 0 : prop.selector; });
                    this.plainSorts = (_d = (_c = config === null || config === void 0 ? void 0 : config.functionalProps) === null || _c === void 0 ? void 0 : _c.filter(function (prop) { return prop.sortable; })) === null || _d === void 0 ? void 0 : _d.map(function (prop) { return prop === null || prop === void 0 ? void 0 : prop.plainSort; });
                    if (config.initialSorting) {
                        this.activeSortPropId = config.initialSortingFuncPropRef.id;
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TableListComponent.prototype, "entities", {
            /**
             * The entities we want to render in this table.
             */
            set: function (entities) {
                if (entities) {
                    this.entities$.next(entities);
                }
            },
            enumerable: false,
            configurable: true
        });
        TableListComponent.prototype.sofFocus = function () {
            if (this.enableSearch) {
                this.searchBarComponent.sofFocus();
            }
        };
        TableListComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.searchedEntities$ = this.getSearchedEntities$();
            this.searchedEntities$
                .pipe(ngxReactivetoolkit.takeUntilDestroy(this))
                .subscribe(function (searchedEntities) { return _this.searchedEntities.emit(searchedEntities); });
            this.sortedEntities$ = this.getSortedEntities$();
            this.hasSearchedEntities = this.getHasEntities$();
        };
        TableListComponent.prototype.ngOnDestroy = function () { };
        TableListComponent.prototype.onChangeSorting = function (id, index) {
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
        };
        TableListComponent.prototype.onChangeTerm = function (term) {
            this.termSub$.next(term);
            this.numberOfItemsToDisplaySub$.next(this.thresholdNumberOfItems);
            this.getSearchedEntities$();
        };
        TableListComponent.prototype.getSearchedEntities$ = function () {
            var _this = this;
            return this.entities$.pipe(operators.switchMap(function (results) { return _this.enableSearch && _this.searchableSelectors.length !== 0
                ? rxjs.of(results).pipe(utils.search(_this.termSub$, _this.searchableSelectors))
                : rxjs.of(results); }), operators.shareReplay({ refCount: true, bufferSize: 1 }));
        };
        TableListComponent.prototype.getSortedEntities$ = function () {
            return rxjs.combineLatest([this.entities$, this.sortingSub$]).pipe(operators.map(function (_e) {
                var _f = __read(_e, 2), entities = _f[0], sorting = _f[1];
                return utils.sortList(entities, sorting);
            }));
        };
        TableListComponent.prototype.getHasEntities$ = function () {
            return this.searchedEntities$.pipe(operators.map(function (entities) { return (entities === null || entities === void 0 ? void 0 : entities.length) > 0; }), operators.shareReplay({ refCount: true, bufferSize: 1 }));
        };
        return TableListComponent;
    }());
    exports.TableListComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'sof-table-list',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    template: "\n    <ng-container *ngIf=\"config$ | async as config\">\n      <div *ngIf=\"enableSearch\" class=\"w-100\">\n        <sof-table-list-search-bar\n          #searchBarComponent\n          [tc]=\"tc\"\n          (changeTerm)=\"onChangeTerm($event)\"\n        ></sof-table-list-search-bar>\n      </div>\n      <ng-container *ngIf=\"hasSearchedEntities | async; else noResults\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-borderless table-striped\">\n            <thead>\n              <tr>\n                <th\n                  *ngFor=\"let prop of config.functionalProps; let i = index\"\n                  (click)=\"onChangeSorting(prop.id, i)\"\n                >\n                  <div class=\"d-flex\">\n                    <div>{{ tc + '.' + prop.header | translate }}</div>\n                    <sof-svg-icon\n                      class=\"ml-1\"\n                      [class.visibility-hidden]=\"activeSortPropId !== prop.id\"\n                      [icon]=\"\n                        (sortingSub$ | async)?.order === 'asc'\n                          ? 'icon-sort-amount-asc'\n                          : 'icon-sort-amount-desc'\n                      \"\n                      size=\"12\"\n                    ></sof-svg-icon>\n                  </div>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <sof-table-list-item\n                *ngFor=\"\n                  let entity of searchedEntities$\n                    | async\n                    | sofSort: (sortingSub$ | async);\n                  trackBy: trackByFn\n                \"\n                [entity]=\"entity\"\n                [tc]=\"tc\"\n                [dynamicRowComponent]=\"config?.dynamicRowComponent\"\n              >\n              </sof-table-list-item>\n            </tbody>\n          </table>\n        </div>\n      </ng-container>\n      <ng-template #noResults>\n        <ng-container *ngIf=\"entities$ | async as entities\">\n          <ng-container *ngIf=\"entities?.length > 0; else noData\">\n            {{ tc + '.' + 'SEARCH-NO-RESULTS' | translate }}\n          </ng-container>\n          <ng-template #noData>\n            {{ tc + '.' + 'SEARCH-NO-DATA' | translate }}\n          </ng-template>\n        </ng-container>\n      </ng-template>\n    </ng-container>\n  ",
                    providers: [{ provide: focus.SOF_FOCUS_COMPONENT, useExisting: TableListComponent_1 }],
                    styles: [".visibility-hidden{visibility:hidden}thead>tr{cursor:pointer}.table-responsive sof-svg-icon{align-self:center}.no-results{margin-left:.75rem}"]
                },] }
    ];
    exports.TableListComponent.propDecorators = {
        thresholdNumberOfItems: [{ type: i0.Input }],
        tc: [{ type: i0.Input }],
        config: [{ type: i0.Input }],
        entities: [{ type: i0.Input }],
        enableSearch: [{ type: i0.Input }],
        enableSorting: [{ type: i0.Input }],
        searchedEntities: [{ type: i0.Output }],
        searchBarComponent: [{ type: i0.ViewChild, args: ['searchBarComponent',] }]
    };
    exports.TableListComponent = TableListComponent_1 = __decorate([
        ngxReactivetoolkit.UntilDestroy()
    ], exports.TableListComponent);

    var TableListItemComponent = /** @class */ (function () {
        function TableListItemComponent(componentFactoryResolver, viewContainerRef) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.viewContainerRef = viewContainerRef;
        }
        Object.defineProperty(TableListItemComponent.prototype, "tc", {
            /**
             * The translation context.
             */
            set: function (tc) {
                this.localTc = tc;
                if (this.componentRef) {
                    this.componentRef.instance.tc = this.localTc;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TableListItemComponent.prototype, "entity", {
            /**
             * The entity we want to set.
             */
            set: function (entity) {
                this.localEntity = entity;
                if (this.componentRef) {
                    this.componentRef.instance.entity = this.localEntity;
                }
            },
            enumerable: false,
            configurable: true
        });
        TableListItemComponent.prototype.ngOnInit = function () {
            var factory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicRowComponent);
            this.componentRef = this.viewContainerRef.createComponent(factory);
            this.componentRef.instance.tc = this.localTc;
            this.componentRef.instance.entity = this.localEntity;
        };
        return TableListItemComponent;
    }());
    TableListItemComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'sof-table-list-item',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    template: "",
                    styles: [""]
                },] }
    ];
    TableListItemComponent.ctorParameters = function () { return [
        { type: i0.ComponentFactoryResolver },
        { type: i0.ViewContainerRef }
    ]; };
    TableListItemComponent.propDecorators = {
        tc: [{ type: i0.Input }],
        entity: [{ type: i0.Input }],
        dynamicRowComponent: [{ type: i0.Input }]
    };

    var TableListItemModule = /** @class */ (function () {
        function TableListItemModule() {
        }
        return TableListItemModule;
    }());
    TableListItemModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [TableListItemComponent],
                    exports: [TableListItemComponent],
                    imports: [common.CommonModule]
                },] }
    ];

    var TableListModule = /** @class */ (function () {
        function TableListModule() {
        }
        return TableListModule;
    }());
    TableListModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [exports.TableListComponent],
                    imports: [
                        common.CommonModule,
                        tableListSearchBar.TableListSearchBarModule,
                        loading.LoadingModule,
                        core.TranslateModule,
                        utils.UtilsPipesModule,
                        svgIcon.SvgIconModule,
                        TableListItemModule
                    ],
                    exports: [exports.TableListComponent]
                },] }
    ];

    var TableListConfig = /** @class */ (function () {
        function TableListConfig() {
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
        TableListConfig.prototype.setDynamicRowComponent = function (component) {
            this.dynamicRowComponent = component;
            return this;
        };
        TableListConfig.prototype.withNaturalSorting = function () {
            var propToUpdate = this.functionalProps[this.functionalProps.length - 1];
            propToUpdate.sortable = true;
            propToUpdate.plainSort = false;
            if (this.initialSortingFuncPropRef) {
                this.initialSortingFuncPropRef.plainSort = propToUpdate.plainSort;
            }
            return this;
        };
        TableListConfig.prototype.withPlainSorting = function (label) {
            var propToUpdate = this.functionalProps[this.functionalProps.length - 1];
            propToUpdate.sortable = true;
            propToUpdate.plainSort = true;
            if (this.initialSortingFuncPropRef) {
                this.initialSortingFuncPropRef.plainSort = propToUpdate.plainSort;
            }
            return this;
        };
        TableListConfig.prototype.asInitialSorting = function (order) {
            var propToUpdate = this.functionalProps[this.functionalProps.length - 1];
            this.initialSorting = {
                prop: propToUpdate.selector,
                order: order,
                plainSort: propToUpdate.plainSort
            };
            this.initialSortingFuncPropRef = propToUpdate;
            return this;
        };
        TableListConfig.prototype.addFunctionalProp = function (selector) {
            this.functionalProps.push({
                id: this.functionalPropCount,
                header: '',
                selector: selector,
                searchable: false,
                sortable: false,
                plainSort: false
            });
            this.functionalPropCount++;
            return this;
        };
        TableListConfig.prototype.setHeader = function (header) {
            var propToUpdate = this.functionalProps[this.functionalProps.length - 1];
            propToUpdate.header = header;
            return this;
        };
        TableListConfig.prototype.withSearch = function () {
            var propToUpdate = this.functionalProps[this.functionalProps.length - 1];
            propToUpdate.searchable = true;
            return this;
        };
        return TableListConfig;
    }());

    /**
     * We use this builder to create an tableConfig
     * ```typescript
     *
     * builder.createConfig().withFunctionalProp(...)
     *
     * ```
     */
    var TableListConfigBuilder = /** @class */ (function () {
        function TableListConfigBuilder() {
        }
        TableListConfigBuilder.prototype.createConfig = function () {
            return new TableListConfig();
        };
        return TableListConfigBuilder;
    }());
    TableListConfigBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function TableListConfigBuilder_Factory() { return new TableListConfigBuilder(); }, token: TableListConfigBuilder, providedIn: "root" });
    TableListConfigBuilder.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TableListConfig = TableListConfig;
    exports.TableListConfigBuilder = TableListConfigBuilder;
    exports.TableListModule = TableListModule;
    exports.ɵa = TableListItemModule;
    exports.ɵb = TableListItemComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-table-list.umd.js.map
