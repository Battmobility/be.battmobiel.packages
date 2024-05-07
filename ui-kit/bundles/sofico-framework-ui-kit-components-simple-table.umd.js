(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@sofico-framework/utils'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@ngx-translate/core'), require('@sofico-framework/ui-kit/components/loading'), require('@sofico-framework/ui-kit/components/simple-table-item'), require('@sofico-framework/ui-kit/components/svg-icon')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/simple-table', ['exports', '@angular/core', '@sofico-framework/utils', 'rxjs', 'rxjs/operators', '@angular/common', '@ngx-translate/core', '@sofico-framework/ui-kit/components/loading', '@sofico-framework/ui-kit/components/simple-table-item', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['simple-table'] = {}), global.ng.core, global.utils, global.rxjs, global.rxjs.operators, global.ng.common, global.core, global['sofico-framework']['ui-kit'].components.loading, global['sofico-framework']['ui-kit'].components['simple-table-item'], global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, i0, utils, rxjs, operators, common, core, loading, simpleTableItem, svgIcon) { 'use strict';

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

    var SimpleTableComponent = /** @class */ (function () {
        function SimpleTableComponent() {
            // source streams
            this.entities$ = new rxjs.ReplaySubject(1);
            this.config$ = new rxjs.ReplaySubject(1);
            // intermediate streams
            this.sortingSub$ = new rxjs.BehaviorSubject(null);
            this.trackByFn = function (i) { return i; };
        }
        Object.defineProperty(SimpleTableComponent.prototype, "config", {
            /**
             * The simple table config.
             */
            set: function (config) {
                var _a, _b, _c, _d;
                if (config) {
                    this.config$.next(config);
                    this.sortingSub$.next(config.initialSorting);
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
        Object.defineProperty(SimpleTableComponent.prototype, "entities", {
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
        SimpleTableComponent.prototype.ngOnInit = function () {
            // presentation streams
            this.sortedEntities$ = this.getSortedEntities$();
        };
        SimpleTableComponent.prototype.onChangeSorting = function (id, index) {
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
        SimpleTableComponent.prototype.getSortedEntities$ = function () {
            return rxjs.combineLatest([this.entities$, this.sortingSub$]).pipe(operators.map(function (_e) {
                var _f = __read(_e, 2), entities = _f[0], sorting = _f[1];
                return utils.sortList(entities, sorting);
            }));
        };
        return SimpleTableComponent;
    }());
    SimpleTableComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'sof-simple-table',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    template: "\n    <ng-container *ngIf=\"config$ | async as config\">\n      <ng-container *ngIf=\"sortedEntities$ | async as sortedEntities\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-borderless table-striped\">\n            <thead>\n              <tr>\n                <th\n                  *ngFor=\"let prop of config.functionalProps; let i = index\"\n                  (click)=\"onChangeSorting(prop.id, i)\"\n                >\n                  <div class=\"d-flex\">\n                    <div>{{ tc + '.' + prop.header | translate }}</div>\n                    <sof-svg-icon\n                      class=\"ml-1\"\n                      [class.visibility-hidden]=\"activeSortPropId !== prop.id\"\n                      [icon]=\"\n                        (sortingSub$ | async)?.order === 'asc'\n                          ? 'icon-sort-amount-asc'\n                          : 'icon-sort-amount-desc'\n                      \"\n                      size=\"12\"\n                    ></sof-svg-icon>\n                  </div>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <sof-simple-table-item\n                *ngFor=\"\n                  let entity of sortedEntities | sofSort: (sortingSub$ | async);\n                  trackBy: trackByFn\n                \"\n                [entity]=\"entity\"\n                [tc]=\"tc\"\n                [dynamicRowComponent]=\"config?.dynamicRowComponent\"\n              >\n              </sof-simple-table-item>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"no-results\" *ngIf=\"sortedEntities?.length === 0\">\n          {{ tc + '.' + 'SEARCH-NO-RESULTS' | translate }}\n        </div>\n      </ng-container>\n    </ng-container>\n  ",
                    styles: [".visibility-hidden{visibility:hidden}thead>tr{cursor:pointer}.table-responsive sof-svg-icon{align-self:center}.no-results{margin-left:.75rem}"]
                },] }
    ];
    SimpleTableComponent.propDecorators = {
        tc: [{ type: i0.Input }],
        config: [{ type: i0.Input }],
        entities: [{ type: i0.Input }]
    };

    var SimpleTableModule = /** @class */ (function () {
        function SimpleTableModule() {
        }
        return SimpleTableModule;
    }());
    SimpleTableModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SimpleTableComponent],
                    exports: [SimpleTableComponent],
                    imports: [
                        common.CommonModule,
                        simpleTableItem.SimpleTableItemModule,
                        loading.LoadingModule,
                        core.TranslateModule,
                        utils.UtilsPipesModule,
                        svgIcon.SvgIconModule
                    ]
                },] }
    ];

    /**
     * Configuration/builder to build an table config
     * This object contains configuration regarding initial sorting of an object
     */
    var SimpleTableConfig = /** @class */ (function () {
        function SimpleTableConfig() {
            this.functionalProps = [];
            this.initialSorting = {
                prop: null
            };
            this.dynamicRowComponent = null;
            this.initialSortingFuncPropRef = null;
            this.functionalPropCount = 0;
        }
        SimpleTableConfig.prototype.setDynamicRowComponent = function (component) {
            this.dynamicRowComponent = component;
            return this;
        };
        SimpleTableConfig.prototype.withNaturalSorting = function () {
            var propToUpdate = this.functionalProps[this.functionalProps.length - 1];
            propToUpdate.sortable = true;
            propToUpdate.plainSort = false;
            if (this.initialSortingFuncPropRef) {
                this.initialSortingFuncPropRef.plainSort = propToUpdate.plainSort;
            }
            return this;
        };
        SimpleTableConfig.prototype.withPlainSorting = function (label) {
            var propToUpdate = this.functionalProps[this.functionalProps.length - 1];
            propToUpdate.sortable = true;
            propToUpdate.plainSort = true;
            if (this.initialSortingFuncPropRef) {
                this.initialSortingFuncPropRef.plainSort = propToUpdate.plainSort;
            }
            return this;
        };
        SimpleTableConfig.prototype.asInitialSorting = function (order) {
            var propToUpdate = this.functionalProps[this.functionalProps.length - 1];
            this.initialSorting = {
                prop: propToUpdate.selector,
                order: order,
                plainSort: propToUpdate.plainSort
            };
            this.initialSortingFuncPropRef = propToUpdate;
            return this;
        };
        SimpleTableConfig.prototype.addFunctionalProp = function (selector) {
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
        SimpleTableConfig.prototype.setHeader = function (header) {
            var propToUpdate = this.functionalProps[this.functionalProps.length - 1];
            propToUpdate.header = header;
            return this;
        };
        return SimpleTableConfig;
    }());

    /**
     * We use this builder to create an tableConfig
     * ```typescript
     *
     * builder.createConfig().withFunctionalProp(...)
     *
     * ```
     */
    var SimpleTableConfigBuilder = /** @class */ (function () {
        function SimpleTableConfigBuilder() {
        }
        SimpleTableConfigBuilder.prototype.createConfig = function () {
            return new SimpleTableConfig();
        };
        return SimpleTableConfigBuilder;
    }());
    SimpleTableConfigBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function SimpleTableConfigBuilder_Factory() { return new SimpleTableConfigBuilder(); }, token: SimpleTableConfigBuilder, providedIn: "root" });
    SimpleTableConfigBuilder.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SimpleTableComponent = SimpleTableComponent;
    exports.SimpleTableConfig = SimpleTableConfig;
    exports.SimpleTableConfigBuilder = SimpleTableConfigBuilder;
    exports.SimpleTableModule = SimpleTableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-simple-table.umd.js.map
