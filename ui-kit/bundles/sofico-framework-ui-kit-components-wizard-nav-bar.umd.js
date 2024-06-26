(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('ngx-reactivetoolkit'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/wizard-nav-bar', ['exports', '@angular/core', '@angular/router', 'ngx-reactivetoolkit', 'rxjs', 'rxjs/operators', '@angular/common', '@ngx-translate/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['wizard-nav-bar'] = {}), global.ng.core, global.ng.router, global.ngxReactivetoolkit, global.rxjs, global.rxjs.operators, global.ng.common, global.core$1));
}(this, (function (exports, core, router, ngxReactivetoolkit, rxjs, operators, common, core$1) { 'use strict';

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

    var WizardNavBarComponent = /** @class */ (function () {
        function WizardNavBarComponent(router$1) {
            this.router = router$1;
            this.enableFutureSteps = false;
            this.triggerCalc$ = this.router.events.pipe(operators.filter(function (event) { return event instanceof router.NavigationEnd; }), operators.startWith({}));
        }
        WizardNavBarComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.indexActiveStep$ = rxjs.combineLatest([
                this.triggerCalc$,
                this.steps$
            ]).pipe(operators.map(function (_a) {
                var _b = __read(_a, 2), triggerCalc = _b[0], steps = _b[1];
                return _this.getIndexActiveStep(steps);
            }));
        };
        WizardNavBarComponent.prototype.ngOnChanges = function () { };
        WizardNavBarComponent.prototype.blur = function (event) {
            var path = event.path || (event.composedPath && event.composedPath());
            path[0].blur();
        };
        WizardNavBarComponent.prototype.getIndexActiveStep = function (flowSteps) {
            var _loop_1 = function (i) {
                var flowStep = flowSteps[i];
                var params = void 0;
                if (flowStep.queryParams) {
                    params = Object.keys(flowStep.queryParams).reduce(function (concat, key) { return concat + "&" + encodeURIComponent(key) + "=" + encodeURIComponent(flowStep.queryParams[key]); }, '?');
                }
                // The route is active if the router returns isActive as true.
                if (this_1.router.isActive("" + flowStep.routePath + (params ? params : ''), false // exact route path match
                )) {
                    return { value: i };
                }
            };
            var this_1 = this;
            for (var i = flowSteps.length; i--;) {
                var state_1 = _loop_1(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            return undefined;
        };
        return WizardNavBarComponent;
    }());
    WizardNavBarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sof-wizard-nav-bar',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n    <div class=\"col\">\n      <div class=\"row\">\n        <a\n          *ngFor=\"let step of steps; let i = index\"\n          class=\"col step-wrapper\"\n          [class.enable-future-steps]=\"enableFutureSteps\"\n          [routerLink]=\"[step.routePath]\"\n          queryParamsHandling=\"preserve\"\n          [class.before-active]=\"i < (indexActiveStep$ | async)\"\n          [class.after-active]=\"i > (indexActiveStep$ | async)\"\n          [class.active]=\"i === (indexActiveStep$ | async)\"\n          [class.step-disabled]=\"step.disabled\"\n          [tabindex]=\"\n            i > (indexActiveStep$ | async) && !enableFutureSteps ? -1 : 0\n          \"\n          (click)=\"blur($event)\"\n        >\n          <div class=\"row justify-content-center label\">\n            {{ tc + '.' + step.label | translate }}\n          </div>\n          <div class=\"row justify-content-center circle-wrapper\">\n            <div class=\"circle\"></div>\n          </div>\n          <div class=\"row line-wrapper\">\n            <span class=\"line\"></span>\n          </div>\n        </a>\n      </div>\n    </div>\n  ",
                    styles: [".step-wrapper{min-height:50px}.step-wrapper:first-of-type .line-wrapper,.step-wrapper:first-of-type .line-wrapper .line{display:none;visibility:hidden}.step-disabled{pointer-events:none;cursor:default}.circle{position:absolute;width:16px;height:16px;border-radius:50%;z-index:1}.line-wrapper{position:relative}.line-wrapper .line{position:absolute;width:100%;height:2px;top:7px;left:-50%}.before-active:hover{cursor:pointer}.after-active{color:#ced4da}.after-active .circle,.after-active .line{background-color:#ced4da}.active,.after-active:not(.enable-future-steps){pointer-events:none}a,a:hover{text-decoration:inherit}"]
                },] }
    ];
    WizardNavBarComponent.ctorParameters = function () { return [
        { type: router.Router }
    ]; };
    WizardNavBarComponent.propDecorators = {
        tc: [{ type: core.Input }],
        steps: [{ type: core.Input }],
        enableFutureSteps: [{ type: core.Input }]
    };
    __decorate([
        ngxReactivetoolkit.Changes('steps')
    ], WizardNavBarComponent.prototype, "steps$", void 0);

    var WizardNavBarModule = /** @class */ (function () {
        function WizardNavBarModule() {
        }
        return WizardNavBarModule;
    }());
    WizardNavBarModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, router.RouterModule, core$1.TranslateModule],
                    declarations: [WizardNavBarComponent],
                    exports: [WizardNavBarComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.WizardNavBarComponent = WizardNavBarComponent;
    exports.WizardNavBarModule = WizardNavBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-wizard-nav-bar.umd.js.map
