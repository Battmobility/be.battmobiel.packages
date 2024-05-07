(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ngx-translate/core'), require('@sofico-framework/utils'), require('ngx-reactivetoolkit'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@sofico-framework/ui-kit/components/input-single-select'), require('@sofico-framework/ui-kit/components/tabs')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/overview-list-group-filter', ['exports', '@angular/core', '@angular/forms', '@ngx-translate/core', '@sofico-framework/utils', 'ngx-reactivetoolkit', 'rxjs', 'rxjs/operators', '@angular/common', '@sofico-framework/ui-kit/components/input-single-select', '@sofico-framework/ui-kit/components/tabs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['overview-list-group-filter'] = {}), global.ng.core, global.ng.forms, global.core$1, global.utils, global.ngxReactivetoolkit, global.rxjs, global.rxjs.operators, global.ng.common, global['sofico-framework']['ui-kit'].components['input-single-select'], global['sofico-framework']['ui-kit'].components.tabs));
}(this, (function (exports, core, forms, core$1, utils, ngxReactivetoolkit, rxjs, operators, common, inputSingleSelect, tabs) { 'use strict';

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

    var OverviewListGroupFilterComponent = /** @class */ (function () {
        function OverviewListGroupFilterComponent(translateService, fb) {
            this.translateService = translateService;
            this.fb = fb;
            this.formControl = this.fb.control(null);
            this.selectedGroup$ = new rxjs.ReplaySubject();
            this.groupDefinitions = [];
            this.selectGroup = new core.EventEmitter();
            this.labelFn = function (x) { return x.label + " (" + x.count + ")"; };
            this.valueFn = function (x) { return x.id; };
        }
        Object.defineProperty(OverviewListGroupFilterComponent.prototype, "selectedGroup", {
            set: function (value) {
                this.selectedGroup$.next(value);
                this.formControl.setValue(value === null || value === void 0 ? void 0 : value.id);
            },
            enumerable: false,
            configurable: true
        });
        OverviewListGroupFilterComponent.prototype.ngOnInit = function () {
            // presentation streams
            this.tabs$ = this.getTabs$();
            this.activeTab$ = this.getActiveTab$();
            this.options$ = this.getOptions$();
        };
        OverviewListGroupFilterComponent.prototype.ngOnChanges = function () { };
        OverviewListGroupFilterComponent.prototype.onChangeValueList = function (groupDefinitionId) {
            this.selectGroup.emit(this.groupDefinitions.find(function (x) { return x.id === groupDefinitionId; }));
        };
        OverviewListGroupFilterComponent.prototype.onClickedTab = function (tab) {
            this.selectGroup.emit(this.groupDefinitions.find(function (x) { return x.id === tab.id; }));
            this.selectedGroup$.next(this.groupDefinitions.find(function (x) { return x.id === tab.id; }));
        };
        OverviewListGroupFilterComponent.prototype.getTabs$ = function () {
            var _this = this;
            return rxjs.combineLatest([
                this.entities$.pipe(operators.filter(function (v) { return !!v; })),
                this.groupDefinitions$.pipe(operators.filter(function (v) { return !!v; }))
            ]).pipe(operators.map(function (_c) {
                var _d = __read(_c, 2), entities = _d[0], groupDefinitions = _d[1];
                return groupDefinitions.map(function (groupDefinition) { return ({
                    label: groupDefinition.label,
                    translation: groupDefinition.translation,
                    icon: groupDefinition.icon,
                    id: groupDefinition.id,
                    count: 
                    // todo: Remove 'groupIdentifiers' in next major release.
                    groupDefinition.hasOwnProperty('groupIdentifiers') ||
                        groupDefinition.hasOwnProperty('groupIdentifiersIncl') ||
                        groupDefinition.hasOwnProperty('groupIdentifiersExcl')
                        ? entities === null || entities === void 0 ? void 0 : entities.filter(function (item) {
                            var _a;
                            var selector = _this.groupSelector(item);
                            var groupDefinitionTmp = groupDefinition;
                            var groupIdentifiersIncluded;
                            var groupIdentifiersExcluded;
                            // todo: Remove 'groupIdentifiers' in next major release.
                            if (groupDefinitionTmp.hasOwnProperty('groupIdentifiers')) {
                                groupIdentifiersIncluded =
                                    groupDefinitionTmp.groupIdentifiers;
                            }
                            else {
                                groupIdentifiersIncluded =
                                    groupDefinitionTmp.groupIdentifiersIncl;
                                groupIdentifiersExcluded =
                                    groupDefinitionTmp.groupIdentifiersExcl;
                            }
                            if (Array.isArray(selector)) {
                                var groupIdentifiersInclStrategy = groupDefinitionTmp.groupIdentifiersInclStrategy, groupIdentifiersExclStrategy = groupDefinitionTmp.groupIdentifiersExclStrategy;
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
                        }).length : entities.length
                }); });
            }), utils.hotSafe());
        };
        OverviewListGroupFilterComponent.prototype.getActiveTab$ = function () {
            return rxjs.combineLatest([this.selectedGroup$, this.tabs$]).pipe(operators.map(function (_c) {
                var _d = __read(_c, 2), selectedGroup = _d[0], tabs = _d[1];
                return tabs.find(function (x) { return x.id === (selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id); }) || tabs[0];
            }));
        };
        OverviewListGroupFilterComponent.prototype.getOptions$ = function () {
            var _this = this;
            return rxjs.combineLatest([
                this.entities$.pipe(operators.filter(function (v) { return !!v; })),
                this.groupDefinitions$.pipe(operators.filter(function (v) { return !!v; }))
            ]).pipe(operators.switchMap(function (_c) {
                var _d = __read(_c, 2), entities = _d[0], groupDefinitions = _d[1];
                var keys = groupDefinitions.map(function (groupDefinition) { return groupDefinition.label
                    ? _this.tc + "." + groupDefinition.label
                    : undefined; });
                return rxjs.combineLatest(keys.map(function (x, i) {
                    var _a;
                    return x
                        ? _this.translateService.stream(x)
                        : rxjs.of((_a = groupDefinitions[i]) === null || _a === void 0 ? void 0 : _a.translation);
                })).pipe(operators.map(function (translations) { return translations
                    // add translation
                    .map(function (translation, index) { return (Object.assign(Object.assign({}, groupDefinitions[index]), { label: translation })); })
                    // add count (not part of the group identifier type)
                    .map(function (groupDefinition) { return (Object.assign(Object.assign({}, groupDefinition), { count: groupDefinition.hasOwnProperty('groupIdentifiers')
                        ? entities === null || entities === void 0 ? void 0 : entities.filter(function (item) { var _a, _b; return (_b = (_a = groupDefinition) === null || _a === void 0 ? void 0 : _a.groupIdentifiers) === null || _b === void 0 ? void 0 : _b.includes(_this.groupSelector(item)); }).length : entities.length })); }); }));
            }));
        };
        return OverviewListGroupFilterComponent;
    }());
    OverviewListGroupFilterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sof-overview-list-group-tabs',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n    <div class=\"group-tabs\">\n      <sof-tabs\n        [tc]=\"tc\"\n        [tabs]=\"tabs$ | async\"\n        [active]=\"activeTab$ | async\"\n        (clickedTab)=\"onClickedTab($event)\"\n      ></sof-tabs>\n    </div>\n    <div class=\"group-list\">\n      <sof-input-single-select\n        [tc]=\"tc\"\n        [formControl]=\"formControl\"\n        [options]=\"options$ | async\"\n        [selectorLabel]=\"labelFn\"\n        [selectorValue]=\"valueFn\"\n        [clearable]=\"false\"\n        (changeValue)=\"onChangeValueList($event)\"\n      ></sof-input-single-select>\n    </div>\n  ",
                    styles: [".group-tabs{display:flex}.group-tabs sof-overview-list-group-tab{margin-right:1.5rem}.group-tabs sof-overview-list-group-tab:last-of-type{margin-right:0}.group-list{display:none}@media screen and (max-width:991px){.group-tabs{display:none}.group-list{display:block}}"]
                },] }
    ];
    OverviewListGroupFilterComponent.ctorParameters = function () { return [
        { type: core$1.TranslateService },
        { type: forms.FormBuilder }
    ]; };
    OverviewListGroupFilterComponent.propDecorators = {
        tc: [{ type: core.Input }],
        groupSelector: [{ type: core.Input }],
        selectedGroup: [{ type: core.Input }],
        entities: [{ type: core.Input }],
        groupDefinitions: [{ type: core.Input }],
        selectGroup: [{ type: core.Output }]
    };
    __decorate([
        ngxReactivetoolkit.Changes('entities')
    ], OverviewListGroupFilterComponent.prototype, "entities$", void 0);
    __decorate([
        ngxReactivetoolkit.Changes('groupDefinitions')
    ], OverviewListGroupFilterComponent.prototype, "groupDefinitions$", void 0);

    var OverviewListGroupFilterModule = /** @class */ (function () {
        function OverviewListGroupFilterModule() {
        }
        return OverviewListGroupFilterModule;
    }());
    OverviewListGroupFilterModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [OverviewListGroupFilterComponent],
                    exports: [OverviewListGroupFilterComponent],
                    imports: [
                        common.CommonModule,
                        core$1.TranslateModule.forChild(),
                        inputSingleSelect.InputSingleSelectModule,
                        forms.ReactiveFormsModule,
                        tabs.TabsModule
                    ]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OverviewListGroupFilterComponent = OverviewListGroupFilterComponent;
    exports.OverviewListGroupFilterModule = OverviewListGroupFilterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-overview-list-group-filter.umd.js.map
