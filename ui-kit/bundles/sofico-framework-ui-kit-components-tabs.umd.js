(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-reactivetoolkit'), require('rxjs/operators'), require('@angular/common'), require('@sofico-framework/ui-kit/components/button'), require('@sofico-framework/ui-kit/components/in-view'), require('@sofico-framework/ui-kit/components/svg-icon'), require('@sofico-framework/ui-kit/components/tab')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/tabs', ['exports', '@angular/core', 'ngx-reactivetoolkit', 'rxjs/operators', '@angular/common', '@sofico-framework/ui-kit/components/button', '@sofico-framework/ui-kit/components/in-view', '@sofico-framework/ui-kit/components/svg-icon', '@sofico-framework/ui-kit/components/tab'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.tabs = {}), global.ng.core, global.ngxReactivetoolkit, global.rxjs.operators, global.ng.common, global['sofico-framework']['ui-kit'].components.button, global['sofico-framework']['ui-kit'].components['in-view'], global['sofico-framework']['ui-kit'].components['svg-icon'], global['sofico-framework']['ui-kit'].components.tab));
}(this, (function (exports, core, ngxReactivetoolkit, operators, common, button, inView, svgIcon, tab) { 'use strict';

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

    exports.TabsComponent = /** @class */ (function () {
        function TabsComponent() {
            this.inViewLeft = true;
            this.inViewRight = true;
            this.clickedTab = new core.EventEmitter();
            this.trackByFn = function (i, r) { return r; };
        }
        TabsComponent.prototype.ngOnChanges = function (changes) {
            if (changes.active) {
                this.scrollToCenter();
            }
        };
        TabsComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            // Once all the tabs are initialized, scroll to the active one
            this.tabComponents.changes
                .pipe(ngxReactivetoolkit.takeUntilDestroy(this), operators.take(1))
                .subscribe(function (comps) {
                _this.scrollToCenter();
            });
        };
        TabsComponent.prototype.ngOnDestroy = function () { };
        /**
         * Scroll a bit to the right, make factor negative for left scroll
         * @param factor scrolling factor, 1 for normal right, -1 for normal left
         */
        TabsComponent.prototype.scroll = function (back) {
            var element = this.tabsViewRef.nativeElement;
            element.scroll(Math.max(0, element.scrollLeft + (back ? -1 : 1) * (element.clientWidth * 0.35)), 0);
        };
        TabsComponent.prototype.scrollToCenter = function () {
            var _this = this;
            var _a, _b;
            if (this.tabComponents && this.active) {
                var elem = (_b = (_a = this.tabComponents.find(function (x) { return x.tab === _this.active; })) === null || _a === void 0 ? void 0 : _a.elementRef) === null || _b === void 0 ? void 0 : _b.nativeElement;
                elem === null || elem === void 0 ? void 0 : elem.scrollIntoView({
                    block: 'nearest',
                    inline: 'center',
                    behavior: 'smooth'
                });
            }
        };
        return TabsComponent;
    }());
    exports.TabsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sof-tabs',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n    <div class=\"snap-left\">\n      <button\n        sofButton\n        class=\"btn btn-plain\"\n        *ngIf=\"!inViewLeft\"\n        (click)=\"scroll(true)\"\n      >\n        <sof-svg-icon icon=\"icon-chevron-left\"></sof-svg-icon>\n      </button>\n    </div>\n    <div class=\"tabs\" #tabsView>\n      <sof-in-view\n        [scrollableRef]=\"tabsViewRef?.nativeElement\"\n        (inView)=\"inViewLeft = $event\"\n      ></sof-in-view>\n\n      <sof-tab\n        *ngFor=\"let tab of tabs; trackBy: trackByFn; let index = index\"\n        [tc]=\"tc\"\n        #tabCmps\n        class=\"mr-1\"\n        [tab]=\"tab\"\n        [isSelected]=\"tab === active\"\n        (clickTab)=\"clickedTab.emit(tab)\"\n      ></sof-tab>\n      <sof-in-view\n        [scrollableRef]=\"tabsViewRef?.nativeElement\"\n        (inView)=\"inViewRight = $event\"\n      >\n      </sof-in-view>\n      <div class=\"right-spacer\"></div>\n    </div>\n    <div class=\"snap-right\">\n      <button\n        sofButton\n        class=\"btn btn-plain\"\n        *ngIf=\"!inViewRight\"\n        (click)=\"scroll(false)\"\n      >\n        <sof-svg-icon icon=\"icon-chevron-right\"></sof-svg-icon>\n      </button>\n    </div>\n  ",
                    styles: [":host{max-width:100%;display:flex;align-items:stretch;margin:-5px}:host .tabs{padding:5px 10px 5px 5px;display:flex;flex-wrap:nowrap;align-items:flex-end;overflow-x:auto;scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none}:host .tabs::-webkit-scrollbar{display:none}:host .tabs sof-tab{flex-shrink:0}:host .tabs .spacer{width:1px}:host .snap-left,:host .snap-right{position:relative;background-color:inherit}:host .snap-left button,:host .snap-right button{z-index:2;position:absolute;padding:.5rem;top:-1px;bottom:-1px}:host .snap-right button{right:-1px;box-shadow:-4px 0 6px -4px #9e9e9e}:host .snap-left button{left:-1px;box-shadow:4px 0 6px -4px #9e9e9e}:host .right-spacer{flex-shrink:0;height:1px;width:10px}"]
                },] }
    ];
    exports.TabsComponent.propDecorators = {
        tc: [{ type: core.Input }],
        tabs: [{ type: core.Input }],
        active: [{ type: core.Input }],
        clickedTab: [{ type: core.Output }],
        tabsViewRef: [{ type: core.ViewChild, args: ['tabsView', { read: core.ElementRef, static: true },] }],
        tabComponents: [{ type: core.ViewChildren, args: ['tabCmps',] }]
    };
    exports.TabsComponent = __decorate([
        ngxReactivetoolkit.UntilDestroy()
    ], exports.TabsComponent);

    var TabsModule = /** @class */ (function () {
        function TabsModule() {
        }
        return TabsModule;
    }());
    TabsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, svgIcon.SvgIconModule, button.ButtonModule, tab.TabModule, inView.InViewModule],
                    declarations: [exports.TabsComponent],
                    exports: [exports.TabsComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TabsModule = TabsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-tabs.umd.js.map
