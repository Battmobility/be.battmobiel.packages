(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@sofico-framework/ui-kit/directives/focus'), require('@sofico-framework/utils'), require('ngx-reactivetoolkit'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@ngx-translate/core'), require('@sofico-framework/ui-kit/components/in-view'), require('@sofico-framework/ui-kit/components/loading'), require('@sofico-framework/ui-kit/components/overview-list-group-filter'), require('@sofico-framework/ui-kit/components/overview-list-search-bar'), require('@sofico-framework/ui-kit/components/overview-list-sort-dropdown'), require('@angular/cdk/a11y'), require('@sofico-framework/ui-kit/classes')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/overview-list', ['exports', '@angular/core', '@angular/router', '@sofico-framework/ui-kit/directives/focus', '@sofico-framework/utils', 'ngx-reactivetoolkit', 'rxjs', 'rxjs/operators', '@angular/common', '@ngx-translate/core', '@sofico-framework/ui-kit/components/in-view', '@sofico-framework/ui-kit/components/loading', '@sofico-framework/ui-kit/components/overview-list-group-filter', '@sofico-framework/ui-kit/components/overview-list-search-bar', '@sofico-framework/ui-kit/components/overview-list-sort-dropdown', '@angular/cdk/a11y', '@sofico-framework/ui-kit/classes'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['overview-list'] = {}), global.ng.core, global.ng.router, global['sofico-framework']['ui-kit'].directives.focus, global.utils, global.ngxReactivetoolkit, global.rxjs, global.rxjs.operators, global.ng.common, global.core, global['sofico-framework']['ui-kit'].components['in-view'], global['sofico-framework']['ui-kit'].components.loading, global['sofico-framework']['ui-kit'].components['overview-list-group-filter'], global['sofico-framework']['ui-kit'].components['overview-list-search-bar'], global['sofico-framework']['ui-kit'].components['overview-list-sort-dropdown'], global.ng.cdk.a11y, global['sofico-framework']['ui-kit'].classes));
}(this, (function (exports, i0, router, focus, utils, ngxReactivetoolkit, rxjs, operators, common, core, inView, loading, overviewListGroupFilter, overviewListSearchBar, overviewListSortDropdown, a11y, classes) { 'use strict';

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

    var OverviewListComponent_1;
    exports.OverviewListComponent = OverviewListComponent_1 = /** @class */ (function () {
        function OverviewListComponent(router, activatedRoute) {
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
            this.searchedEntities = new i0.EventEmitter();
            // source streams
            this.entities$ = new rxjs.ReplaySubject(1);
            this.config$ = new rxjs.ReplaySubject(1);
            this.sortingSub$ = new rxjs.ReplaySubject(1);
            this.termSub$ = new rxjs.BehaviorSubject('');
            this.numberOfItemsToDisplaySub$ = new rxjs.BehaviorSubject(this.thresholdNumberOfItems);
            this.selectedGroupSub$ = new rxjs.BehaviorSubject(null);
            this.trackByFn = function (i) { return i; };
        }
        Object.defineProperty(OverviewListComponent.prototype, "config", {
            /**
             * The overview list config.
             */
            set: function (config) {
                if (config) {
                    this.config$.next(config);
                    this.sortingSub$.next(config.initialSorting);
                    this.searchableSelectors = config.functionalProps
                        .filter(function (prop) { return prop.searchable; })
                        .map(function (prop) { return prop.selector; });
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OverviewListComponent.prototype, "entities", {
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
        OverviewListComponent.prototype.sofFocus = function () {
            var _a;
            if (this.enableSearch) {
                this.searchBarComponent.sofFocus();
            }
            else {
                (_a = this.listComponents.first) === null || _a === void 0 ? void 0 : _a.sofFocus();
            }
        };
        OverviewListComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            // intermediate streams
            this.searchedEntities$ = this.getSearchedEntities$();
            this.groupedEntities$ = this.getGroupedEntities$();
            this.sortedEntities$ = this.getSortedEntities$();
            this.searchedEntities$
                .pipe(ngxReactivetoolkit.takeUntilDestroy(this))
                .subscribe(function (searchedEntities) { return _this.searchedEntities.emit(searchedEntities); });
            // presentation streams
            this.filteredEntities$ = this.sortedEntities$;
            this.hasFilteredEntities$ = this.getHasFilteredEntities$();
            if (((_a = this.groupDefinitions) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                var tab_1 = this.activatedRoute.snapshot.queryParamMap.get('tab');
                if (tab_1) {
                    this.selectedGroupSub$.next(this.groupDefinitions.find(function (x) { return x.id === tab_1; }));
                }
                else {
                    this.selectedGroupSub$.next(this.groupDefinitions[0]);
                }
            }
            else {
                this.selectedGroupSub$.next(null);
            }
            this.setupQueryParamSubscription();
        };
        OverviewListComponent.prototype.ngOnDestroy = function () { };
        OverviewListComponent.prototype.onChangeSorting = function (sorting) {
            this.sortingSub$.next(sorting);
            this.numberOfItemsToDisplaySub$.next(this.thresholdNumberOfItems);
        };
        OverviewListComponent.prototype.onChangeTerm = function (term) {
            this.termSub$.next(term);
            this.numberOfItemsToDisplaySub$.next(this.thresholdNumberOfItems);
        };
        OverviewListComponent.prototype.onChangeGroup = function (group) {
            this.selectedGroupSub$.next(group);
            this.numberOfItemsToDisplaySub$.next(this.thresholdNumberOfItems);
        };
        OverviewListComponent.prototype.onInView = function (value) {
            if (value) {
                this.numberOfItemsToDisplaySub$.next(this.numberOfItemsToDisplaySub$.getValue() + this.thresholdNumberOfItems);
            }
        };
        OverviewListComponent.prototype.getSearchedEntities$ = function () {
            var _this = this;
            return this.entities$.pipe(
            // we need switchMap and of because the search takes a term observable instead of a term
            operators.switchMap(function (results) { return _this.enableSearch && _this.searchableSelectors.length !== 0
                ? rxjs.of(results).pipe(utils.search(_this.termSub$, _this.searchableSelectors))
                : rxjs.of(results); }), operators.shareReplay({ refCount: true, bufferSize: 1 }));
        };
        OverviewListComponent.prototype.getGroupedEntities$ = function () {
            var _this = this;
            return rxjs.combineLatest([this.searchedEntities$, this.selectedGroupSub$]).pipe(operators.map(function (_b) {
                var _c = __read(_b, 2), items = _c[0], selectedGroup = _c[1];
                if (!selectedGroup) {
                    return items;
                }
                // todo: Remove 'groupIdentifiers' in next major release.
                return selectedGroup.hasOwnProperty('groupIdentifiers') ||
                    selectedGroup.hasOwnProperty('groupIdentifiersIncl') ||
                    selectedGroup.hasOwnProperty('groupIdentifiersExcl')
                    ? items === null || items === void 0 ? void 0 : items.filter(function (item) {
                        var _a;
                        var selector = _this.groupSelector(item);
                        var groupDefinition = selectedGroup;
                        var groupIdentifiersIncluded;
                        var groupIdentifiersExcluded;
                        // todo: Remove 'groupIdentifiers' in next major release.
                        if (selectedGroup.hasOwnProperty('groupIdentifiers')) {
                            groupIdentifiersIncluded = groupDefinition.groupIdentifiers;
                        }
                        else {
                            groupIdentifiersIncluded = groupDefinition.groupIdentifiersIncl;
                            groupIdentifiersExcluded = groupDefinition.groupIdentifiersExcl;
                        }
                        if (Array.isArray(selector)) {
                            var groupIdentifiersInclStrategy = groupDefinition.groupIdentifiersInclStrategy, groupIdentifiersExclStrategy = groupDefinition.groupIdentifiersExclStrategy;
                            var includesFn = function (v) { return selector.includes(v); };
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
        };
        OverviewListComponent.prototype.getSortedEntities$ = function () {
            return rxjs.combineLatest([
                this.groupedEntities$,
                this.sortingSub$,
                this.numberOfItemsToDisplaySub$
            ]).pipe(operators.map(function (_b) {
                var _c = __read(_b, 3), entities = _c[0], sorting = _c[1], numberOfItemsToDisplay = _c[2];
                return utils.sortList(entities, sorting).slice(0, numberOfItemsToDisplay);
            }));
        };
        OverviewListComponent.prototype.getHasFilteredEntities$ = function () {
            return this.filteredEntities$.pipe(operators.map(function (entities) { return (entities === null || entities === void 0 ? void 0 : entities.length) > 0; }), operators.shareReplay({ refCount: true, bufferSize: 1 }));
        };
        OverviewListComponent.prototype.setupQueryParamSubscription = function () {
            var _this = this;
            this.selectedGroupSub$
                .pipe(operators.skip(1), operators.map(function (selectedGroup) { return selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id; }), operators.filter(function (selectedGroupId) { return !!selectedGroupId; }), operators.distinctUntilChanged(), ngxReactivetoolkit.takeUntilDestroy(this))
                .subscribe(function (tab) {
                if (_this.retainGroupSelection) {
                    _this.router.navigate([], {
                        relativeTo: _this.activatedRoute,
                        queryParams: { tab: tab },
                        queryParamsHandling: 'merge',
                        replaceUrl: true
                    });
                }
            });
        };
        return OverviewListComponent;
    }());
    exports.OverviewListComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'sof-overview-list',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    template: "\n    <ng-container *ngIf=\"config$ | async as config\">\n      <div *ngIf=\"enableSearch || enableSorting\" class=\"row\">\n        <div\n          *ngIf=\"enableSearch\"\n          [ngClass]=\"enableSorting ? 'col-lg-8 col-md-6 col-sm-12' : 'col-12'\"\n        >\n          <sof-overview-list-search-bar\n            #searchBarComponent\n            [tc]=\"tc\"\n            (changeTerm)=\"onChangeTerm($event)\"\n          ></sof-overview-list-search-bar>\n        </div>\n        <div\n          *ngIf=\"enableSorting\"\n          [ngClass]=\"\n            enableSearch\n              ? 'col-lg-4 col-md-6 col-sm-12'\n              : 'col-lg-4 offset-lg-8  col-md-12 col-sm-12'\n          \"\n        >\n          <sof-overview-list-sort-dropdown\n            [tc]=\"tc\"\n            [sorting]=\"sortingSub$ | async\"\n            [overviewListConfig]=\"config\"\n            (changeSorting)=\"onChangeSorting($event)\"\n          ></sof-overview-list-sort-dropdown>\n        </div>\n      </div>\n      <div *ngIf=\"groupDefinitions\" class=\"row\">\n        <sof-overview-list-group-tabs\n          [tc]=\"tc\"\n          class=\"col-lg-12 col-md-12 col-sm-12 mb-3\"\n          [entities]=\"searchedEntities$ | async\"\n          [selectedGroup]=\"selectedGroupSub$ | async\"\n          [groupDefinitions]=\"groupDefinitions\"\n          [groupSelector]=\"groupSelector\"\n          (selectGroup)=\"onChangeGroup($event)\"\n        ></sof-overview-list-group-tabs>\n      </div>\n      <ng-container *ngIf=\"hasFilteredEntities$ | async; else noResults\">\n        <sof-in-view [preloadHeight]=\"500\" (inView)=\"onInView($event)\">\n          <sof-overview-list-item\n            #listComponent\n            *ngFor=\"let entity of filteredEntities$ | async; trackBy: trackByFn\"\n            [entity]=\"entity\"\n            [tc]=\"tc\"\n            [dynamicRowComponent]=\"config?.dynamicRowComponent\"\n          >\n          </sof-overview-list-item>\n        </sof-in-view>\n      </ng-container>\n      <ng-template #noResults>\n        <ng-container *ngIf=\"entities$ | async as entities\">\n          <ng-container *ngIf=\"entities?.length > 0; else noData\">\n            {{ tc + '.' + 'SEARCH-NO-RESULTS' | translate }}\n          </ng-container>\n          <ng-template #noData>\n            {{ tc + '.' + 'SEARCH-NO-DATA' | translate }}\n          </ng-template>\n        </ng-container>\n      </ng-template>\n    </ng-container>\n  ",
                    providers: [
                        { provide: focus.SOF_FOCUS_COMPONENT, useExisting: OverviewListComponent_1 }
                    ]
                },] }
    ];
    exports.OverviewListComponent.ctorParameters = function () { return [
        { type: router.Router },
        { type: router.ActivatedRoute }
    ]; };
    exports.OverviewListComponent.propDecorators = {
        tc: [{ type: i0.Input }],
        config: [{ type: i0.Input }],
        entities: [{ type: i0.Input }],
        groupDefinitions: [{ type: i0.Input }],
        thresholdNumberOfItems: [{ type: i0.Input }],
        groupSelector: [{ type: i0.Input }],
        enableSearch: [{ type: i0.Input }],
        enableSorting: [{ type: i0.Input }],
        retainGroupSelection: [{ type: i0.Input }],
        searchedEntities: [{ type: i0.Output }],
        searchBarComponent: [{ type: i0.ViewChild, args: ['searchBarComponent',] }],
        listComponents: [{ type: i0.ViewChildren, args: ['listComponent',] }]
    };
    exports.OverviewListComponent = OverviewListComponent_1 = __decorate([
        ngxReactivetoolkit.UntilDestroy()
    ], exports.OverviewListComponent);

    var OverviewListItemComponent = /** @class */ (function () {
        function OverviewListItemComponent(componentFactoryResolver, viewContainerRef, interactivityChecker) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.viewContainerRef = viewContainerRef;
            this.interactivityChecker = interactivityChecker;
        }
        Object.defineProperty(OverviewListItemComponent.prototype, "tc", {
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
        Object.defineProperty(OverviewListItemComponent.prototype, "entity", {
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
        OverviewListItemComponent.prototype.ngOnInit = function () {
            var factory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicRowComponent);
            this.componentRef = this.viewContainerRef.createComponent(factory);
            this.componentRef.instance.tc = this.localTc;
            this.componentRef.instance.entity = this.localEntity;
        };
        OverviewListItemComponent.prototype.sofFocus = function () {
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
        };
        return OverviewListItemComponent;
    }());
    OverviewListItemComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'sof-overview-list-item',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    template: "",
                    providers: [
                        { provide: focus.SOF_FOCUS_COMPONENT, useExisting: OverviewListItemComponent }
                    ],
                    styles: [""]
                },] }
    ];
    OverviewListItemComponent.ctorParameters = function () { return [
        { type: i0.ComponentFactoryResolver },
        { type: i0.ViewContainerRef },
        { type: a11y.InteractivityChecker }
    ]; };
    OverviewListItemComponent.propDecorators = {
        tc: [{ type: i0.Input }],
        entity: [{ type: i0.Input }],
        dynamicRowComponent: [{ type: i0.Input }]
    };

    var OverviewListItemModule = /** @class */ (function () {
        function OverviewListItemModule() {
        }
        return OverviewListItemModule;
    }());
    OverviewListItemModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [OverviewListItemComponent],
                    exports: [OverviewListItemComponent],
                    imports: [common.CommonModule]
                },] }
    ];

    var OverviewListModule = /** @class */ (function () {
        function OverviewListModule() {
        }
        return OverviewListModule;
    }());
    OverviewListModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [exports.OverviewListComponent],
                    exports: [exports.OverviewListComponent],
                    imports: [
                        common.CommonModule,
                        OverviewListItemModule,
                        loading.LoadingModule,
                        overviewListSearchBar.OverviewListSearchBarModule,
                        overviewListGroupFilter.OverviewListGroupFilterModule,
                        core.TranslateModule,
                        overviewListSortDropdown.OverviewListSortDropdownModule,
                        inView.InViewModule
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
    var OverviewListConfigBuilder = /** @class */ (function () {
        function OverviewListConfigBuilder() {
        }
        OverviewListConfigBuilder.prototype.createConfig = function () {
            return new classes.OverviewListConfig();
        };
        return OverviewListConfigBuilder;
    }());
    OverviewListConfigBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function OverviewListConfigBuilder_Factory() { return new OverviewListConfigBuilder(); }, token: OverviewListConfigBuilder, providedIn: "root" });
    OverviewListConfigBuilder.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OverviewListConfigBuilder = OverviewListConfigBuilder;
    exports.OverviewListModule = OverviewListModule;
    exports.ɵa = OverviewListItemModule;
    exports.ɵb = OverviewListItemComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-overview-list.umd.js.map
