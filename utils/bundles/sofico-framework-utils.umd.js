(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('lodash'), require('@angular/platform-browser'), require('@ngx-translate/core'), require('ngx-reactivetoolkit'), require('@angular/common'), require('rxjs/internal/scheduler/async'), require('@angular/forms'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/utils', ['exports', 'rxjs', 'rxjs/operators', '@angular/core', 'lodash', '@angular/platform-browser', '@ngx-translate/core', 'ngx-reactivetoolkit', '@angular/common', 'rxjs/internal/scheduler/async', '@angular/forms', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework'].utils = {}), global.rxjs, global.rxjs.operators, global.ng.core, global.lodash, global.ng.platformBrowser, global.core, global.ngxReactivetoolkit, global.ng.common, global.rxjs['internal/scheduler/async'], global.ng.forms, global.ng.router));
}(this, (function (exports, rxjs, operators, i0, lodash, platformBrowser, core, ngxReactivetoolkit, common, async, forms, router) { 'use strict';

    var CustomTranslationHandler = /** @class */ (function () {
        function CustomTranslationHandler() {
        }
        CustomTranslationHandler.prototype.handle = function (params) {
            var defaultContext = '@COMMON';
            var missingContext = 'TRANSLATE:';
            var parts = 2;
            var translationKeyArray = params.key.split('.');
            if (translationKeyArray.length !== parts) {
                var error = missingContext + " invalid key. It's made of " + translationKeyArray.length + " part(s) should be " + parts + " [" + params.key + "]";
                console.error(error);
                return rxjs.of(error);
            }
            if (['', 'undefined', 'null'].includes(translationKeyArray[0].trim())) {
                var error = missingContext + " tc seems to be " + translationKeyArray[0] + ". [" + params.key + "]";
                console.error(error);
                return rxjs.of(error);
            }
            if (translationKeyArray[0] === defaultContext) {
                return params.key;
            }
            translationKeyArray[0] = defaultContext;
            var newTranslationKey = translationKeyArray.join('.');
            return (params.translateService
                // when get doesn't find a translation, the handler is called again
                // the if statement above is then executed
                .get(newTranslationKey, params.interpolateParams)
                .pipe(operators.map(function (v) { return (v === newTranslationKey ? missingContext + params.key : v); })));
        };
        return CustomTranslationHandler;
    }());

    exports.rootInjector = void 0;
    function setRootInjector(injector) {
        exports.rootInjector = injector;
    }

    var HttpStatusService = /** @class */ (function () {
        function HttpStatusService() {
            this.loadingSub$ = new rxjs.ReplaySubject(1);
            /**
             * When navigating to a page it can be possible that the last value of the loading is false
             * When the user navigates to that page and that page starts loading the new value of the loading is true
             * Because of that we get the ExpressionChangedAfterItHasBeenCheckedError and we get a flickr in some cases
             * For that reason we are using a debounceTime of 0 to ensure a fluent loading experience
             */
            this.loading$ = this.loadingSub$.pipe(operators.distinctUntilChanged(), operators.debounceTime(0));
            this.actingSub$ = new rxjs.ReplaySubject(1);
            this.acting$ = this.actingSub$.pipe(operators.distinctUntilChanged(), operators.debounceTime(0));
            this.getErrorSub$ = new rxjs.Subject();
            this.getError$ = this.getErrorSub$.pipe(operators.distinctUntilChanged());
            this.actingErrorsSub$ = new rxjs.Subject();
            this.actingErrors$ = this.actingErrorsSub$.pipe(operators.distinctUntilChanged());
            this.attached = true;
        }
        Object.defineProperty(HttpStatusService.prototype, "loading", {
            set: function (val) {
                if (this.attached) {
                    this.loadingSub$.next(val);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpStatusService.prototype, "acting", {
            set: function (val) {
                this.actingSub$.next(val);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpStatusService.prototype, "getError", {
            set: function (val) {
                this.getErrorSub$.next(val);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HttpStatusService.prototype, "actingErrors", {
            set: function (val) {
                this.actingErrorsSub$.next(val);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Detaches the interceptor from the loading status.
         * This is used when we don't want to show loading spinners for
         * some actions of the page (like polling)
         * Don't forget to use the reattach function afterwards
         */
        HttpStatusService.prototype.detach = function () {
            this.attached = false;
            this.loadingSub$.next(false);
        };
        /**
         * Reattaches the interceptor to the loading status
         * Has to be called on every page that uses the detach functionality
         */
        HttpStatusService.prototype.reattach = function () {
            this.attached = true;
        };
        return HttpStatusService;
    }());
    HttpStatusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HttpStatusService_Factory() { return new HttpStatusService(); }, token: HttpStatusService, providedIn: "root" });
    HttpStatusService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    function Acting() {
        return function (target, key) {
            target[key] = rxjs.Observable.create(function (observer) {
                var service = exports.rootInjector.get(HttpStatusService);
                var sub = service.acting$.subscribe(function (v) {
                    observer.next(v);
                });
                return function () { return sub.unsubscribe(); };
            });
        };
    }

    function ActingErrorMessages() {
        return function (target, key) {
            target[key] = rxjs.Observable.create(function (observer) {
                var service = exports.rootInjector.get(HttpStatusService);
                var sub = service.actingErrors$.subscribe(function (v) {
                    observer.next(v);
                });
                return function () { return sub.unsubscribe(); };
            });
        };
    }

    function GetErrorMessage() {
        return function (target, key) {
            target[key] = rxjs.Observable.create(function (observer) {
                var service = exports.rootInjector.get(HttpStatusService);
                var sub = service.getError$.subscribe(function (v) {
                    observer.next(v);
                });
                return function () { return sub.unsubscribe(); };
            });
        };
    }

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

    function getWindow() {
        return window;
    }
    var WindowRefService = /** @class */ (function () {
        function WindowRefService() {
        }
        Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
            get: function () {
                return getWindow();
            },
            enumerable: false,
            configurable: true
        });
        return WindowRefService;
    }());
    WindowRefService.decorators = [
        { type: i0.Injectable }
    ];

    function GetRouterState() {
        return function (target, key) {
            var secretSub = "_" + key + "$Sub";
            var secretObs = "_" + key + "$Obs";
            var accessorSub = key + "$Sub";
            var accessorObs = key + "$Obs";
            Object.defineProperty(target, accessorSub, {
                get: function () {
                    var _a;
                    if (this[secretSub]) {
                        return this[secretSub];
                    }
                    this[secretSub] = new rxjs.ReplaySubject(1);
                    var nativeWindow = exports.rootInjector.get(WindowRefService).nativeWindow;
                    if (((_a = nativeWindow.history.state) === null || _a === void 0 ? void 0 : _a.data) !== undefined) {
                        var _b = nativeWindow.history.state, data = _b.data, rest = __rest(_b, ["data"]);
                        this[secretSub].next(data);
                        nativeWindow.history.replaceState(rest, null);
                    }
                    else {
                        this[secretSub].next(undefined);
                    }
                    return this[secretSub];
                }
            });
            Object.defineProperty(target, accessorObs, {
                get: function () {
                    if (this[secretObs]) {
                        return this[secretObs];
                    }
                    this[secretObs] = this[accessorSub].asObservable();
                    return this[secretObs];
                }
            });
            Object.defineProperty(target, key, {
                get: function () {
                    return this[accessorObs];
                },
                set: function () {
                    throw new Error('You cannot set this property in the Component if you use @GetRouterState');
                }
            });
        };
    }

    function Loading() {
        return function (target, key) {
            target[key] = rxjs.Observable.create(function (observer) {
                var service = exports.rootInjector.get(HttpStatusService);
                var sub = service.loading$.subscribe(function (v) {
                    observer.next(v);
                });
                return function () { return sub.unsubscribe(); };
            });
        };
    }

    exports.CountryEnum = void 0;
    (function (CountryEnum) {
        CountryEnum["AFGHANISTAN"] = "AF";
        CountryEnum["ALAND_ISLANDS"] = "AX";
        CountryEnum["ALBANIA"] = "AL";
        CountryEnum["ALGERIA"] = "DZ";
        CountryEnum["AMERICAN_SAMOA"] = "AS";
        CountryEnum["ANDORRA"] = "AD";
        CountryEnum["ANGOLA"] = "AO";
        CountryEnum["ANGUILLA"] = "AI";
        CountryEnum["ANTARCTICA"] = "AQ";
        CountryEnum["ANTIGUA_AND_BARBUDA"] = "AG";
        CountryEnum["ARGENTINA"] = "AR";
        CountryEnum["ARMENIA"] = "AM";
        CountryEnum["ARUBA"] = "AW";
        CountryEnum["AUSTRALIA"] = "AU";
        CountryEnum["AUSTRIA"] = "AT";
        CountryEnum["AZERBAIJAN"] = "AZ";
        CountryEnum["BAHAMAS_THE"] = "BS";
        CountryEnum["BAHRAIN"] = "BH";
        CountryEnum["BANGLADESH"] = "BD";
        CountryEnum["BARBADOS"] = "BB";
        CountryEnum["BELARUS"] = "BY";
        CountryEnum["BELGIUM"] = "BE";
        CountryEnum["BELIZE"] = "BZ";
        CountryEnum["BENIN"] = "BJ";
        CountryEnum["BERMUDA"] = "BM";
        CountryEnum["BHUTAN"] = "BT";
        CountryEnum["BOLIVIA_PLURINATIONAL_STATE_OF"] = "BO";
        CountryEnum["BONAIRE_SINT_EUSTATIUS_AND_SABA"] = "BQ";
        CountryEnum["BOSNIA_AND_HERZEGOVINA"] = "BA";
        CountryEnum["BOTSWANA"] = "BW";
        CountryEnum["BOUVET_ISLAND"] = "BV";
        CountryEnum["BRAZIL"] = "BR";
        CountryEnum["BRITISH_INDIAN_OCEAN_TERRITORY_THE"] = "IO";
        CountryEnum["BRUNEI_DARUSSALAM"] = "BN";
        CountryEnum["BULGARIA"] = "BG";
        CountryEnum["BURKINA_FASO"] = "BF";
        CountryEnum["BURUNDI"] = "BI";
        CountryEnum["CABO_VERDE"] = "CV";
        CountryEnum["CAMBODIA"] = "KH";
        CountryEnum["CAMEROON"] = "CM";
        CountryEnum["CANADA"] = "CA";
        CountryEnum["CAYMAN_ISLANDS_THE"] = "KY";
        CountryEnum["CENTRAL_AFRICAN_REPUBLIC_THE"] = "CF";
        CountryEnum["CHAD"] = "TD";
        CountryEnum["CHILE"] = "CL";
        CountryEnum["CHINA"] = "CN";
        CountryEnum["CHRISTMAS_ISLAND"] = "CX";
        CountryEnum["COCOS_KEELING_ISLANDS_THE"] = "CC";
        CountryEnum["COLOMBIA"] = "CO";
        CountryEnum["COMOROS_THE"] = "KM";
        CountryEnum["CONGO_THE_DEMOCRATIC_REPUBLIC_OF_THE"] = "CD";
        CountryEnum["CONGO_THE"] = "CG";
        CountryEnum["COOK_ISLANDS_THE"] = "CK";
        CountryEnum["COSTA_RICA"] = "CR";
        CountryEnum["CROATIA"] = "HR";
        CountryEnum["CUBA"] = "CU";
        CountryEnum["CURACAO"] = "CW";
        CountryEnum["CYPRUS"] = "CY";
        CountryEnum["CZECHIA"] = "CZ";
        CountryEnum["COTE_D_IVOIRE"] = "CI";
        CountryEnum["DENMARK"] = "DK";
        CountryEnum["DJIBOUTI"] = "DJ";
        CountryEnum["DOMINICA"] = "DM";
        CountryEnum["DOMINICAN_REPUBLIC_THE"] = "DO";
        CountryEnum["ECUADOR"] = "EC";
        CountryEnum["EGYPT"] = "EG";
        CountryEnum["EL_SALVADOR"] = "SV";
        CountryEnum["EQUATORIAL_GUINEA"] = "GQ";
        CountryEnum["ERITREA"] = "ER";
        CountryEnum["ESTONIA"] = "EE";
        CountryEnum["ESWATINI"] = "SZ";
        CountryEnum["ETHIOPIA"] = "ET";
        CountryEnum["FALKLAND_ISLANDS_THE_MALVINAS"] = "FK";
        CountryEnum["FAROE_ISLANDS_THE"] = "FO";
        CountryEnum["FIJI"] = "FJ";
        CountryEnum["FINLAND"] = "FI";
        CountryEnum["FRANCE"] = "FR";
        CountryEnum["FRENCH_GUIANA"] = "GF";
        CountryEnum["FRENCH_POLYNESIA"] = "PF";
        CountryEnum["FRENCH_SOUTHERN_TERRITORIES_THE"] = "TF";
        CountryEnum["GABON"] = "GA";
        CountryEnum["GAMBIA_THE"] = "GM";
        CountryEnum["GEORGIA"] = "GE";
        CountryEnum["GERMANY"] = "DE";
        CountryEnum["GHANA"] = "GH";
        CountryEnum["GIBRALTAR"] = "GI";
        CountryEnum["GREECE"] = "GR";
        CountryEnum["GREENLAND"] = "GL";
        CountryEnum["GRENADA"] = "GD";
        CountryEnum["GUADELOUPE"] = "GP";
        CountryEnum["GUAM"] = "GU";
        CountryEnum["GUATEMALA"] = "GT";
        CountryEnum["GUERNSEY"] = "GG";
        CountryEnum["GUINEA"] = "GN";
        CountryEnum["GUINEA_BISSAU"] = "GW";
        CountryEnum["GUYANA"] = "GY";
        CountryEnum["HAITI"] = "HT";
        CountryEnum["HEARD_ISLAND_AND_MCDONALD_ISLANDS"] = "HM";
        CountryEnum["HOLY_SEE_THE"] = "VA";
        CountryEnum["HONDURAS"] = "HN";
        CountryEnum["HONG_KONG"] = "HK";
        CountryEnum["HUNGARY"] = "HU";
        CountryEnum["ICELAND"] = "IS";
        CountryEnum["INDIA"] = "IN";
        CountryEnum["INDONESIA"] = "ID";
        CountryEnum["IRAN_ISLAMIC_REPUBLIC_OF"] = "IR";
        CountryEnum["IRAQ"] = "IQ";
        CountryEnum["IRELAND"] = "IE";
        CountryEnum["ISLE_OF_MAN"] = "IM";
        CountryEnum["ISRAEL"] = "IL";
        CountryEnum["ITALY"] = "IT";
        CountryEnum["JAMAICA"] = "JM";
        CountryEnum["JAPAN"] = "JP";
        CountryEnum["JERSEY"] = "JE";
        CountryEnum["JORDAN"] = "JO";
        CountryEnum["KAZAKHSTAN"] = "KZ";
        CountryEnum["KENYA"] = "KE";
        CountryEnum["KIRIBATI"] = "KI";
        CountryEnum["KOREA_THE_DEMOCRATIC_PEOPLES_REPUBLIC_OF"] = "KP";
        CountryEnum["KOREA_THE_REPUBLIC_OF"] = "KR";
        CountryEnum["KUWAIT"] = "KW";
        CountryEnum["KYRGYZSTAN"] = "KG";
        CountryEnum["LAO_PEOPLES_DEMOCRATIC_REPUBLIC_THE"] = "LA";
        CountryEnum["LATVIA"] = "LV";
        CountryEnum["LEBANON"] = "LB";
        CountryEnum["LESOTHO"] = "LS";
        CountryEnum["LIBERIA"] = "LR";
        CountryEnum["LIBYA"] = "LY";
        CountryEnum["LIECHTENSTEIN"] = "LI";
        CountryEnum["LITHUANIA"] = "LT";
        CountryEnum["LUXEMBOURG"] = "LU";
        CountryEnum["MACAO"] = "MO";
        CountryEnum["MADAGASCAR"] = "MG";
        CountryEnum["MALAWI"] = "MW";
        CountryEnum["MALAYSIA"] = "MY";
        CountryEnum["MALDIVES"] = "MV";
        CountryEnum["MALI"] = "ML";
        CountryEnum["MALTA"] = "MT";
        CountryEnum["MARSHALL_ISLANDS_THE"] = "MH";
        CountryEnum["MARTINIQUE"] = "MQ";
        CountryEnum["MAURITANIA"] = "MR";
        CountryEnum["MAURITIUS"] = "MU";
        CountryEnum["MAYOTTE"] = "YT";
        CountryEnum["MEXICO"] = "MX";
        CountryEnum["MICRONESIA_FEDERATED_STATES_OF"] = "FM";
        CountryEnum["MOLDOVA_THE_REPUBLIC_OF"] = "MD";
        CountryEnum["MONACO"] = "MC";
        CountryEnum["MONGOLIA"] = "MN";
        CountryEnum["MONTENEGRO"] = "ME";
        CountryEnum["MONTSERRAT"] = "MS";
        CountryEnum["MOROCCO"] = "MA";
        CountryEnum["MOZAMBIQUE"] = "MZ";
        CountryEnum["MYANMAR"] = "MM";
        CountryEnum["NAMIBIA"] = "NA";
        CountryEnum["NAURU"] = "NR";
        CountryEnum["NEPAL"] = "NP";
        CountryEnum["NETHERLANDS_THE"] = "NL";
        CountryEnum["NEW_CALEDONIA"] = "NC";
        CountryEnum["NEW_ZEALAND"] = "NZ";
        CountryEnum["NICARAGUA"] = "NI";
        CountryEnum["NIGER_THE"] = "NE";
        CountryEnum["NIGERIA"] = "NG";
        CountryEnum["NIUE"] = "NU";
        CountryEnum["NORFOLK_ISLAND"] = "NF";
        CountryEnum["NORTHERN_MARIANA_ISLANDS_THE"] = "MP";
        CountryEnum["NORWAY"] = "NO";
        CountryEnum["OMAN"] = "OM";
        CountryEnum["PAKISTAN"] = "PK";
        CountryEnum["PALAU"] = "PW";
        CountryEnum["PALESTINE_STATE_OF"] = "PS";
        CountryEnum["PANAMA"] = "PA";
        CountryEnum["PAPUA_NEW_GUINEA"] = "PG";
        CountryEnum["PARAGUAY"] = "PY";
        CountryEnum["PERU"] = "PE";
        CountryEnum["PHILIPPINES_THE"] = "PH";
        CountryEnum["PITCAIRN"] = "PN";
        CountryEnum["POLAND"] = "PL";
        CountryEnum["PORTUGAL"] = "PT";
        CountryEnum["PUERTO_RICO"] = "PR";
        CountryEnum["QATAR"] = "QA";
        CountryEnum["REPUBLIC_OF_NORTH_MACEDONIA"] = "MK";
        CountryEnum["ROMANIA"] = "RO";
        CountryEnum["RUSSIAN_FEDERATION_THE"] = "RU";
        CountryEnum["RWANDA"] = "RW";
        CountryEnum["REUNION"] = "RE";
        CountryEnum["SAINT_BARTHELEMY"] = "BL";
        CountryEnum["SAINT_HELENA_ASCENSION_AND_TRISTAN_DA_CUNHA"] = "SH";
        CountryEnum["SAINT_KITTS_AND_NEVIS"] = "KN";
        CountryEnum["SAINT_LUCIA"] = "LC";
        CountryEnum["SAINT_MARTIN_FRENCH_PART"] = "MF";
        CountryEnum["SAINT_PIERRE_AND_MIQUELON"] = "PM";
        CountryEnum["SAINT_VINCENT_AND_THE_GRENADINES"] = "VC";
        CountryEnum["SAMOA"] = "WS";
        CountryEnum["SAN_MARINO"] = "SM";
        CountryEnum["SAO_TOME_AND_PRINCIPE"] = "ST";
        CountryEnum["SAUDI_ARABIA"] = "SA";
        CountryEnum["SENEGAL"] = "SN";
        CountryEnum["SERBIA"] = "RS";
        CountryEnum["SEYCHELLES"] = "SC";
        CountryEnum["SIERRA_LEONE"] = "SL";
        CountryEnum["SINGAPORE"] = "SG";
        CountryEnum["SINT_MAARTEN_DUTCH_PART"] = "SX";
        CountryEnum["SLOVAKIA"] = "SK";
        CountryEnum["SLOVENIA"] = "SI";
        CountryEnum["SOLOMON_ISLANDS"] = "SB";
        CountryEnum["SOMALIA"] = "SO";
        CountryEnum["SOUTH_AFRICA"] = "ZA";
        CountryEnum["SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"] = "GS";
        CountryEnum["SOUTH_SUDAN"] = "SS";
        CountryEnum["SPAIN"] = "ES";
        CountryEnum["SRI_LANKA"] = "LK";
        CountryEnum["SUDAN_THE"] = "SD";
        CountryEnum["SURINAME"] = "SR";
        CountryEnum["SVALBARD_AND_JAN_MAYEN"] = "SJ";
        CountryEnum["SWEDEN"] = "SE";
        CountryEnum["SWITZERLAND"] = "CH";
        CountryEnum["SYRIAN_ARAB_REPUBLIC"] = "SY";
        CountryEnum["TAIWAN_PROVINCE_OF_CHINA"] = "TW";
        CountryEnum["TAJIKISTAN"] = "TJ";
        CountryEnum["TANZANIA_UNITED_REPUBLIC_OF"] = "TZ";
        CountryEnum["THAILAND"] = "TH";
        CountryEnum["TIMOR_LESTE"] = "TL";
        CountryEnum["TOGO"] = "TG";
        CountryEnum["TOKELAU"] = "TK";
        CountryEnum["TONGA"] = "TO";
        CountryEnum["TRINIDAD_AND_TOBAGO"] = "TT";
        CountryEnum["TUNISIA"] = "TN";
        CountryEnum["TURKEY"] = "TR";
        CountryEnum["TURKMENISTAN"] = "TM";
        CountryEnum["TURKS_AND_CAICOS_ISLANDS_THE"] = "TC";
        CountryEnum["TUVALU"] = "TV";
        CountryEnum["UGANDA"] = "UG";
        CountryEnum["UKRAINE"] = "UA";
        CountryEnum["UNITED_ARAB_EMIRATES_THE"] = "AE";
        CountryEnum["UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND_THE"] = "GB";
        CountryEnum["UNITED_STATES_MINOR_OUTLYING_ISLANDS_THE"] = "UM";
        CountryEnum["UNITED_STATES_OF_AMERICA_THE"] = "US";
        CountryEnum["URUGUAY"] = "UY";
        CountryEnum["UZBEKISTAN"] = "UZ";
        CountryEnum["VANUATU"] = "VU";
        CountryEnum["VENEZUELA_BOLIVARIAN_REPUBLIC_OF"] = "VE";
        CountryEnum["VIETNAM"] = "VN";
        CountryEnum["VIRGIN_ISLANDS_BRITISH"] = "VG";
        CountryEnum["VIRGIN_ISLANDS_US"] = "VI";
        CountryEnum["WALLIS_AND_FUTUNA"] = "WF";
        CountryEnum["WESTERN_SAHARA"] = "EH";
        CountryEnum["YEMEN"] = "YE";
        CountryEnum["ZAMBIA"] = "ZM";
        CountryEnum["ZIMBABWE"] = "ZW";
    })(exports.CountryEnum || (exports.CountryEnum = {}));

    exports.CurrencyEnum = void 0;
    (function (CurrencyEnum) {
        CurrencyEnum["AFGHANI"] = "AFN";
        CurrencyEnum["ALGERIAN_DINAR"] = "DZD";
        CurrencyEnum["ARGENTINE_PESO"] = "ARS";
        CurrencyEnum["ARMENIAN_DRAM"] = "AMD";
        CurrencyEnum["ARUBAN_FLORIN"] = "AWG";
        CurrencyEnum["AUSTRALIAN_DOLLAR"] = "AUD";
        CurrencyEnum["AZERBAIJAN_MANAT"] = "AZN";
        CurrencyEnum["BAHAMIAN_DOLLAR"] = "BSD";
        CurrencyEnum["BAHRAINI_DINAR"] = "BHD";
        CurrencyEnum["BAHT"] = "THB";
        CurrencyEnum["BALBOA"] = "PAB";
        CurrencyEnum["BARBADOS_DOLLAR"] = "BBD";
        CurrencyEnum["BELARUSIAN_RUBLE"] = "BYN";
        CurrencyEnum["BELIZE_DOLLAR"] = "BZD";
        CurrencyEnum["BERMUDIAN_DOLLAR"] = "BMD";
        CurrencyEnum["BOLIVAR_SOBERANO"] = "VES";
        CurrencyEnum["BOLIVIANO"] = "BOB";
        CurrencyEnum["BRAZILIAN_REAL"] = "BRL";
        CurrencyEnum["BRUNEI_DOLLAR"] = "BND";
        CurrencyEnum["BULGARIAN_LEV"] = "BGN";
        CurrencyEnum["BURUNDI_FRANC"] = "BIF";
        CurrencyEnum["CABO_VERDE_ESCUDO"] = "CVE";
        CurrencyEnum["CANADIAN_DOLLAR"] = "CAD";
        CurrencyEnum["CAYMAN_ISLANDS_DOLLAR"] = "KYD";
        CurrencyEnum["CFA_FRANC_BCEAO"] = "XOF";
        CurrencyEnum["CFA_FRANC_BEAC"] = "XAF";
        CurrencyEnum["CFP_FRANC"] = "XPF";
        CurrencyEnum["CHILEAN_PESO"] = "CLP";
        CurrencyEnum["COLOMBIAN_PESO"] = "COP";
        CurrencyEnum["COMORIAN_FRANC"] = "KMF";
        CurrencyEnum["CONGOLESE_FRANC"] = "CDF";
        CurrencyEnum["CONVERTIBLE_MARK"] = "BAM";
        CurrencyEnum["CORDOBA_ORO"] = "NIO";
        CurrencyEnum["COSTA_RICAN_COLON"] = "CRC";
        CurrencyEnum["CUBAN_PESO"] = "CUP";
        CurrencyEnum["CZECH_KORUNA"] = "CZK";
        CurrencyEnum["DALASI"] = "GMD";
        CurrencyEnum["DANISH_KRONE"] = "DKK";
        CurrencyEnum["DENAR"] = "MKD";
        CurrencyEnum["DJIBOUTI_FRANC"] = "DJF";
        CurrencyEnum["DOBRA"] = "STN";
        CurrencyEnum["DOMINICAN_PESO"] = "DOP";
        CurrencyEnum["DONG"] = "VND";
        CurrencyEnum["EAST_CARIBBEAN_DOLLAR"] = "XCD";
        CurrencyEnum["EGYPTIAN_POUND"] = "EGP";
        CurrencyEnum["EL_SALVADOR_COLON"] = "SVC";
        CurrencyEnum["ETHIOPIAN_BIRR"] = "ETB";
        CurrencyEnum["EURO"] = "EUR";
        CurrencyEnum["FALKLAND_ISLANDS_POUND"] = "FKP";
        CurrencyEnum["FIJI_DOLLAR"] = "FJD";
        CurrencyEnum["FORINT"] = "HUF";
        CurrencyEnum["GHANA_CEDI"] = "GHS";
        CurrencyEnum["GIBRALTAR_POUND"] = "GIP";
        CurrencyEnum["GOURDE"] = "HTG";
        CurrencyEnum["GUARANI"] = "PYG";
        CurrencyEnum["GUINEAN_FRANC"] = "GNF";
        CurrencyEnum["GUYANA_DOLLAR"] = "GYD";
        CurrencyEnum["HONG_KONG_DOLLAR"] = "HKD";
        CurrencyEnum["HRYVNIA"] = "UAH";
        CurrencyEnum["ICELAND_KRONA"] = "ISK";
        CurrencyEnum["INDIAN_RUPEE"] = "INR";
        CurrencyEnum["IRANIAN_RIAL"] = "IRR";
        CurrencyEnum["IRAQI_DINAR"] = "IQD";
        CurrencyEnum["JAMAICAN_DOLLAR"] = "JMD";
        CurrencyEnum["JORDANIAN_DINAR"] = "JOD";
        CurrencyEnum["KENYAN_SHILLING"] = "KES";
        CurrencyEnum["KINA"] = "PGK";
        CurrencyEnum["KUNA"] = "HRK";
        CurrencyEnum["KUWAITI_DINAR"] = "KWD";
        CurrencyEnum["KWANZA"] = "AOA";
        CurrencyEnum["KYAT"] = "MMK";
        CurrencyEnum["LAO_KIP"] = "LAK";
        CurrencyEnum["LARI"] = "GEL";
        CurrencyEnum["LEBANESE_POUND"] = "LBP";
        CurrencyEnum["LEK"] = "ALL";
        CurrencyEnum["LEMPIRA"] = "HNL";
        CurrencyEnum["LEONE"] = "SLL";
        CurrencyEnum["LIBERIAN_DOLLAR"] = "LRD";
        CurrencyEnum["LIBYAN_DINAR"] = "LYD";
        CurrencyEnum["LILANGENI"] = "SZL";
        CurrencyEnum["LOTI"] = "LSL";
        CurrencyEnum["MALAGASY_ARIARY"] = "MGA";
        CurrencyEnum["MALAWI_KWACHA"] = "MWK";
        CurrencyEnum["MALAYSIAN_RINGGIT"] = "MYR";
        CurrencyEnum["MAURITIUS_RUPEE"] = "MUR";
        CurrencyEnum["MEXICAN_PESO"] = "MXN";
        CurrencyEnum["MOLDOVAN_LEU"] = "MDL";
        CurrencyEnum["MOROCCAN_DIRHAM"] = "MAD";
        CurrencyEnum["MOZAMBIQUE_METICAL"] = "MZN";
        CurrencyEnum["MVDOL"] = "BOV";
        CurrencyEnum["NAIRA"] = "NGN";
        CurrencyEnum["NAKFA"] = "ERN";
        CurrencyEnum["NAMIBIA_DOLLAR"] = "NAD";
        CurrencyEnum["NEPALESE_RUPEE"] = "NPR";
        CurrencyEnum["NETHERLANDS_ANTILLEAN_GUILDER"] = "ANG";
        CurrencyEnum["NEW_ISRAELI_SHEQEL"] = "ILS";
        CurrencyEnum["NEW_TAIWAN_DOLLAR"] = "TWD";
        CurrencyEnum["NEW_ZEALAND_DOLLAR"] = "NZD";
        CurrencyEnum["NGULTRUM"] = "BTN";
        CurrencyEnum["NORTH_KOREAN_WON"] = "KPW";
        CurrencyEnum["NORWEGIAN_KRONE"] = "NOK";
        CurrencyEnum["OUGUIYA"] = "MRU";
        CurrencyEnum["PA_ANGA"] = "TOP";
        CurrencyEnum["PAKISTAN_RUPEE"] = "PKR";
        CurrencyEnum["PATACA"] = "MOP";
        CurrencyEnum["PESO_CONVERTIBLE"] = "CUC";
        CurrencyEnum["PESO_URUGUAYO"] = "UYU";
        CurrencyEnum["PHILIPPINE_PESO"] = "PHP";
        CurrencyEnum["POUND_STERLING"] = "GBP";
        CurrencyEnum["PULA"] = "BWP";
        CurrencyEnum["QATARI_RIAL"] = "QAR";
        CurrencyEnum["QUETZAL"] = "GTQ";
        CurrencyEnum["RAND"] = "ZAR";
        CurrencyEnum["RIAL_OMANI"] = "OMR";
        CurrencyEnum["RIEL"] = "KHR";
        CurrencyEnum["ROMANIAN_LEU"] = "RON";
        CurrencyEnum["RUFIYAA"] = "MVR";
        CurrencyEnum["RUPIAH"] = "IDR";
        CurrencyEnum["RUSSIAN_RUBLE"] = "RUB";
        CurrencyEnum["RWANDA_FRANC"] = "RWF";
        CurrencyEnum["SAINT_HELENA_POUND"] = "SHP";
        CurrencyEnum["SAUDI_RIYAL"] = "SAR";
        CurrencyEnum["SERBIAN_DINAR"] = "RSD";
        CurrencyEnum["SEYCHELLES_RUPEE"] = "SCR";
        CurrencyEnum["SINGAPORE_DOLLAR"] = "SGD";
        CurrencyEnum["SOL"] = "PEN";
        CurrencyEnum["SOLOMON_ISLANDS_DOLLAR"] = "SBD";
        CurrencyEnum["SOM"] = "KGS";
        CurrencyEnum["SOMALI_SHILLING"] = "SOS";
        CurrencyEnum["SOMONI"] = "TJS";
        CurrencyEnum["SOUTH_SUDANESE_POUND"] = "SSP";
        CurrencyEnum["SRI_LANKA_RUPEE"] = "LKR";
        CurrencyEnum["SUCRE"] = "XSU";
        CurrencyEnum["SUDANESE_POUND"] = "SDG";
        CurrencyEnum["SURINAM_DOLLAR"] = "SRD";
        CurrencyEnum["SWEDISH_KRONA"] = "SEK";
        CurrencyEnum["SWISS_FRANC"] = "CHF";
        CurrencyEnum["SYRIAN_POUND"] = "SYP";
        CurrencyEnum["TAKA"] = "BDT";
        CurrencyEnum["TALA"] = "WST";
        CurrencyEnum["TANZANIAN_SHILLING"] = "TZS";
        CurrencyEnum["TENGE"] = "KZT";
        CurrencyEnum["TRINIDAD_AND_TOBAGO_DOLLAR"] = "TTD";
        CurrencyEnum["TUGRIK"] = "MNT";
        CurrencyEnum["TUNISIAN_DINAR"] = "TND";
        CurrencyEnum["TURKISH_LIRA"] = "TRY";
        CurrencyEnum["TURKMENISTAN_NEW_MANAT"] = "TMT";
        CurrencyEnum["UAE_DIRHAM"] = "AED";
        CurrencyEnum["UGANDA_SHILLING"] = "UGX";
        CurrencyEnum["US_DOLLAR"] = "USD";
        CurrencyEnum["UZBEKISTAN_SUM"] = "UZS";
        CurrencyEnum["VATU"] = "VUV";
        CurrencyEnum["WON"] = "KRW";
        CurrencyEnum["YEMENI_RIAL"] = "YER";
        CurrencyEnum["YEN"] = "JPY";
        CurrencyEnum["YUAN_RENMINBI"] = "CNY";
        CurrencyEnum["ZAMBIAN_KWACHA"] = "ZMW";
        CurrencyEnum["ZIMBABWE_DOLLAR"] = "ZWL";
        CurrencyEnum["ZLOTY"] = "PLN";
    })(exports.CurrencyEnum || (exports.CurrencyEnum = {}));

    exports.DataTypeEnum = void 0;
    (function (DataTypeEnum) {
        DataTypeEnum["CUSTOM"] = "Custom";
        DataTypeEnum["STRING"] = "String";
        DataTypeEnum["BOOLEAN"] = "Boolean";
        DataTypeEnum["NUMBER"] = "Number";
        DataTypeEnum["LOCAL_DATE"] = "LocalDate";
        DataTypeEnum["LOCAL_DATE_TIME"] = "LocalDateTime";
        DataTypeEnum["DATE_TIME"] = "DateTime";
        DataTypeEnum["MULTI_CURRENCY_VALUE"] = "MultiCurrencyValue";
        DataTypeEnum["MULTI_LANGUAGE_VALUE"] = "MultiLanguageValue";
        DataTypeEnum["UNIT_VALUE"] = "UnitValue";
        DataTypeEnum["DOUBLE_UNIT_VALUE"] = "DoubleUnitValue";
        DataTypeEnum["ENUM_VALUE"] = "EnumValue";
    })(exports.DataTypeEnum || (exports.DataTypeEnum = {}));

    exports.DateFormatEnum = void 0;
    (function (DateFormatEnum) {
        DateFormatEnum["BIG_ENDIAN_DASH"] = "yyyy-MM-dd";
        DateFormatEnum["BIG_ENDIAN_SLASH"] = "yyyy/MM/dd";
        DateFormatEnum["BIG_ENDIAN_DOT"] = "yyyy.MM.dd";
        DateFormatEnum["BIG_ENDIAN_FULL"] = "yyyy MMMM dd";
        DateFormatEnum["LITTLE_ENDIAN_DASH"] = "dd-MM-yyyy";
        DateFormatEnum["LITTLE_ENDIAN_SLASH"] = "dd/MM/yyyy";
        DateFormatEnum["LITTLE_ENDIAN_DOT"] = "dd.MM.yyyy";
        DateFormatEnum["LITTLE_ENDIAN_FULL"] = "d MMMM yyyy";
        DateFormatEnum["MIDDLE_ENDIAN_SLASH"] = "MM/dd/yyyy";
        DateFormatEnum["MIDDLE_ENDIAN_FULL"] = "MMMM d, yyyy";
    })(exports.DateFormatEnum || (exports.DateFormatEnum = {}));

    exports.TimeFormatEnum = void 0;
    (function (TimeFormatEnum) {
        TimeFormatEnum["HH_TIME_M"] = "HH:mm";
        TimeFormatEnum["HH_TIME_M_S"] = "HH:mm:ss";
        TimeFormatEnum["H_TIME_M"] = "h:mm a";
        TimeFormatEnum["H_TIME_M_S"] = "h:mm:ss a";
    })(exports.TimeFormatEnum || (exports.TimeFormatEnum = {}));

    function getConfigurationParameters(environment, apiPath) {
        var _a, _b, _c, _d, _e;
        var baseUrl = window.config
            ? ((_b = (_a = window.config.api) === null || _a === void 0 ? void 0 : _a.baseUrl) !== null && _b !== void 0 ? _b : "https://" + window.config.base.domain + "/api")
            : ((_d = (_c = environment.config.api) === null || _c === void 0 ? void 0 : _c.baseUrl) !== null && _d !== void 0 ? _d : "https://" + ((_e = environment.config.base) === null || _e === void 0 ? void 0 : _e.domain) + "/api");
        var addTrailingFlash = baseUrl.substr(-1) === '/' ? '' : '/';
        return {
            basePath: "" + baseUrl + addTrailingFlash + apiPath
        };
    }

    /**
     * Sorts an object and all its sub-objects based on the key-value
     */
    function sortObject(o) {
        return Object.keys(o)
            .sort()
            .reduce(function (acc, curr, i) {
            var _a;
            return Object.assign(Object.assign({}, acc), (_a = {}, _a[curr] = typeof o[curr] === 'object' && o[curr] !== null ? sortObject(o[curr]) : o[curr], _a));
        }, {});
    }

    /**
     * Stringifies the object after sorting on key
     * currently only used for testing purposes
     */
    function sortedStringify(obj) {
        return JSON.stringify(sortObject(obj));
    }

    var RoutingAllowedGuard = /** @class */ (function () {
        function RoutingAllowedGuard() {
        }
        RoutingAllowedGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
            return component.routingAllowed(currentState, nextState);
        };
        return RoutingAllowedGuard;
    }());
    RoutingAllowedGuard.decorators = [
        { type: i0.Injectable }
    ];

    var UtilGuardsModule = /** @class */ (function () {
        function UtilGuardsModule(parentModule) {
            if (parentModule) {
                throw new Error('UtilGuardsModule is already loaded. Import in your base AppModule only.');
            }
        }
        return UtilGuardsModule;
    }());
    UtilGuardsModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [RoutingAllowedGuard]
                },] }
    ];
    UtilGuardsModule.ctorParameters = function () { return [
        { type: UtilGuardsModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
    ]; };

    var CacheOverrideConfigAbstract = /** @class */ (function () {
        function CacheOverrideConfigAbstract() {
        }
        return CacheOverrideConfigAbstract;
    }());

    var CacheOverrideInterceptor = /** @class */ (function () {
        function CacheOverrideInterceptor(windowRefService, configService) {
            this.windowRefService = windowRefService;
            this.configService = configService;
            // If we are in IE, or we do requests for JSON files (i18n) we do not want cache to be used.
            this.isIE = this.windowRefService.nativeWindow.navigator.userAgent
                .toUpperCase()
                .indexOf('TRIDENT') >= 0;
            this.blacklistedUrls = this.configService.getBlacklistedUrls();
        }
        CacheOverrideInterceptor.prototype.intercept = function (req, next) {
            if (!this.isIE) {
                return next.handle(req);
            }
            var blacklisted = !!this.blacklistedUrls.filter(function (url) { return req.url.startsWith(url); }).length;
            if (blacklisted) {
                return next.handle(req);
            }
            var headers = req.headers
                .append('Cache-Control', 'no-cache')
                .append('Pragma', 'no-cache')
                .append('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT');
            return next.handle(req.clone({ headers: headers }));
        };
        return CacheOverrideInterceptor;
    }());
    CacheOverrideInterceptor.decorators = [
        { type: i0.Injectable }
    ];
    CacheOverrideInterceptor.ctorParameters = function () { return [
        { type: WindowRefService },
        { type: CacheOverrideConfigAbstract }
    ]; };

    var CacheOverrideModule = /** @class */ (function () {
        function CacheOverrideModule(parentModule, windowRefService, cacheOverrideConfig) {
            if (parentModule) {
                throw new Error('CacheOverrideModule is already loaded. Import in your base AppModule only with .forRoot(cacheOverrideConfig: Type<CacheOverrideConfigAbstract>).');
            }
            if (!cacheOverrideConfig) {
                throw new Error('CacheOverrideModule could not be loaded. You need to use the .forRoot(cacheOverrideConfig: Type<CacheOverrideConfigAbstract>) method and provide an implementation of CacheOverrideConfigAbstract');
            }
            if (!windowRefService) {
                throw new Error('You need to import the UtilServicesModule in your AppModule!');
            }
        }
        CacheOverrideModule.forRoot = function (cacheOverrideConfig) {
            return {
                ngModule: CacheOverrideModule,
                providers: [
                    CacheOverrideInterceptor,
                    {
                        provide: CacheOverrideConfigAbstract,
                        useClass: cacheOverrideConfig
                    }
                ]
            };
        };
        return CacheOverrideModule;
    }());
    CacheOverrideModule.decorators = [
        { type: i0.NgModule }
    ];
    CacheOverrideModule.ctorParameters = function () { return [
        { type: CacheOverrideModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] },
        { type: WindowRefService, decorators: [{ type: i0.Optional }] },
        { type: CacheOverrideConfigAbstract, decorators: [{ type: i0.Optional }] }
    ]; };

    var HttpStatusInterceptor = /** @class */ (function () {
        function HttpStatusInterceptor(httpStatusService) {
            this.httpStatusService = httpStatusService;
            this.loadingCalls = 0;
            this.actingCalls = 0;
            this.showToastsOn = [500, 404, 0];
        }
        HttpStatusInterceptor.prototype.intercept = function (req, next) {
            var _this = this;
            var actingMethods = ['PUT', 'POST', 'DELETE'];
            // ignore images
            if (req.responseType === 'blob') {
                return next.handle(req.clone());
            }
            this.changeStatus(true, req.method);
            return next.handle(req.clone()).pipe(operators.catchError(function (e) {
                var _a, _b, _c, _d;
                if (req.method === 'GET' && _this.showToastsOn.indexOf(e.status) > -1) {
                    _this.httpStatusService.getError = 'SOMETHING-WENT-WRONG-GET';
                }
                else if (actingMethods.indexOf(req.method) > -1) {
                    if ((_a = e === null || e === void 0 ? void 0 : e.error) === null || _a === void 0 ? void 0 : _a.isInteractiveWarning) {
                        return rxjs.throwError(e);
                    }
                    var errors = void 0;
                    if ((_b = e === null || e === void 0 ? void 0 : e.error) === null || _b === void 0 ? void 0 : _b.message) {
                        errors = [
                            {
                                translation: e === null || e === void 0 ? void 0 : e.error.message.translation
                            }
                        ];
                    }
                    else if (((_c = e === null || e === void 0 ? void 0 : e.error) === null || _c === void 0 ? void 0 : _c.messages) && Array.isArray((_d = e === null || e === void 0 ? void 0 : e.error) === null || _d === void 0 ? void 0 : _d.messages)) {
                        errors = e === null || e === void 0 ? void 0 : e.error.messages.map(function (x) { return ({
                            translation: x.translation
                        }); });
                    }
                    else {
                        errors = [
                            {
                                message: "ERROR_SOMETHING-WENT-WRONG-" + (req === null || req === void 0 ? void 0 : req.method)
                            }
                        ];
                    }
                    _this.httpStatusService.actingErrors = errors;
                }
                return rxjs.throwError(e);
            }), operators.finalize(function () {
                _this.changeStatus(false, req.method);
            }));
        };
        HttpStatusInterceptor.prototype.changeStatus = function (v, method) {
            if (['POST', 'PUT', 'DELETE', 'PATCH'].indexOf(method) > -1) {
                v
                    ? this.actingCalls++
                    : this.actingCalls > 0
                        ? this.actingCalls--
                        : (this.actingCalls = 0);
                this.httpStatusService.acting = this.actingCalls > 0;
            }
            else if (method === 'GET') {
                v
                    ? this.loadingCalls++
                    : this.loadingCalls > 0
                        ? this.loadingCalls--
                        : (this.loadingCalls = 0);
                this.httpStatusService.loading = this.loadingCalls > 0;
            }
        };
        return HttpStatusInterceptor;
    }());
    HttpStatusInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function HttpStatusInterceptor_Factory() { return new HttpStatusInterceptor(i0.ɵɵinject(HttpStatusService)); }, token: HttpStatusInterceptor, providedIn: "root" });
    HttpStatusInterceptor.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    HttpStatusInterceptor.ctorParameters = function () { return [
        { type: HttpStatusService }
    ]; };

    // COMPLEX ARRAYS WILL SUFFER PERFORMANCE LOSS
    var distinctUntilChangedArray = function () {
        return function (source$) { return source$.pipe(operators.distinctUntilChanged(function (x, y) { return JSON.stringify(x) === JSON.stringify(y); })); };
    };

    /**
     * Share source and replay specified number of emissions on subscription.
     *
     * This operator connects to a source observable and multicasts through
     * a `ReplaySubject` constructed with the specified arguments.
     * When there are no subscribers (refCount = 0) left the source stream will complete.
     *
     * ## Why use hotSafe?
     * You generally want to use `hotSafe` when you have
     * computations (ex. http calls, calculations, algorithms, ...)
     * that you do not wish to be executed amongst multiple subscribers.
     * It may also be valuable in situations where you know you will have late subscribers to
     * a stream that need access to previously emitted values.
     *
     * @param [bufferSize=Number.POSITIVE_INFINITY] Maximum element count of the replay buffer.
     */
    function hotSafe(bufferSize) {
        if (bufferSize === void 0) { bufferSize = 1; }
        return function (source) { return source.pipe(operators.publishReplay(bufferSize), operators.refCount()); };
    }

    var latestSourceWithoutCancellationMap = function (project) {
        var count = 0;
        return function (source) { return source.pipe(operators.tap(function () { return count++; }), operators.concatMap(function (e, i) { return rxjs.concat(rxjs.defer(function () { return count === 1 ? project(e, i).pipe(operators.skipWhile(function () { return count > 1; })) : rxjs.EMPTY; }), rxjs.of(0).pipe(operators.tap(function () { return count--; }), operators.ignoreElements())); })); };
    };

    // creating a custom operator
    // declarative way of programming, it's easy to read the flow of this
    // function
    /**
     * Search for objects in an array - caches, so if destroyed, cache is lost
     * The source stream is the list of objects
     * @param term$ a stream of string(s), each string is a search action. If a new string is sent before the last one was resolved, the old one will be skiped
     * @param props an array of strings and/or functions that point to properties with the values to be searched. Be aware, the functions may not error, or it will break the search.
     */
    function search(term$, props) {
        return function (source) { return source.pipe(
        // create indexMap for all items in the source stream
        operators.map(function (results) { return results && Array.isArray(results)
            ? results.map(function (original) { return ({
                original: original,
                terms: getTermsFromObject(original, props)
            }); })
            : results; }), operators.switchMap(function (indexMap) {
            // indexMap is cached in the closure of this function
            return term$.pipe(
            // call filterResults on every term change
            operators.map(function (term) { return indexMap && Array.isArray(indexMap)
                ? filterResults(indexMap, term)
                : indexMap; }));
        })); };
    }
    // it's important that the following functions are private
    // we don't want to use them anywhere else then here
    // we can also see that the functions are written in a more functional manner
    // .map.filter.map makes it declarative instead of imperative
    // this makes the code more readable
    function getTermsFromObject(obj, props) {
        var terms = [];
        props.forEach(function (prop) { return typeof prop === 'string' || prop instanceof String
            ? getValues([obj], prop.split('.')).forEach(function (val) { return terms.push(val); })
            : terms.push(prop(obj)); });
        return terms
            .filter(function (value) { return typeof value === 'string' || typeof value === 'number'; })
            .map(function (value) { return normalizeToken(value.toString()); });
    }
    function getValues(obj, path) {
        var e_1, _a;
        // filter out null and undefined
        obj = obj.filter(function (v) { return !!v; });
        // if path has the length of 0, the obj is the value
        if (path.length === 0) {
            return obj;
        }
        var children = [];
        try {
            for (var obj_1 = __values(obj), obj_1_1 = obj_1.next(); !obj_1_1.done; obj_1_1 = obj_1.next()) {
                var item = obj_1_1.value;
                var child = item[path[0]];
                // if it is an array, we consider all its items as child
                if (Array.isArray(child)) {
                    children = __spread(children, child);
                }
                else {
                    // if that's an object / primitive, add it as child
                    children = __spread(children, [child]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (obj_1_1 && !obj_1_1.done && (_a = obj_1.return)) _a.call(obj_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        path.shift();
        return getValues(children, path);
    }
    function filterResults(indexMap, searchTerm) {
        var terms = searchTerm.split(RegExp(" +")).map(normalizeToken);
        return indexMap
            .filter(function (row) { return rowMatchesTerms(row, terms); })
            .map(function (v) { return v.original; });
    }
    function normalizeToken(token) {
        return token.toLowerCase().replace(/[-_'",;.!? ]/g, '');
    }
    function rowMatchesTerms(row, searchTerms) {
        var e_2, _a;
        var _loop_1 = function (term) {
            if (row.terms.find(function (documentTerm) { return termsMatch(term, documentTerm); }) ===
                undefined) {
                return { value: false };
            }
        };
        try {
            for (var searchTerms_1 = __values(searchTerms), searchTerms_1_1 = searchTerms_1.next(); !searchTerms_1_1.done; searchTerms_1_1 = searchTerms_1.next()) {
                var term = searchTerms_1_1.value;
                var state_1 = _loop_1(term);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (searchTerms_1_1 && !searchTerms_1_1.done && (_a = searchTerms_1.return)) _a.call(searchTerms_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return true;
    }
    function termsMatch(requestTerm, documentTerm) {
        return documentTerm.includes(requestTerm);
    }

    /* Seek convention for naming this */
    function sortList(list, sortingOrderConfig) {
        if (!list) {
            return list;
        }
        if (!sortingOrderConfig.order) {
            sortingOrderConfig.order = 'asc';
        }
        var copyList = __spread(list);
        var sortingPropArray;
        if (Array.isArray(sortingOrderConfig.prop)) {
            sortingPropArray = sortingOrderConfig.prop;
        }
        else {
            sortingPropArray = [sortingOrderConfig.prop];
        }
        if (sortingOrderConfig.plainSort && sortingPropArray.length === 1) {
            // Currently only works with 1 single sorting property defined
            var isFunc_1 = lodash.isFunction(sortingPropArray[0]);
            var copyListWithoutUndefineds = copyList.filter(function (d) { return (isFunc_1
                ? sortingPropArray[0](d)
                : lodash.get(d, sortingPropArray[0])) !== undefined; });
            var copyListUndefinedsOnly = copyList.filter(function (d) { return (isFunc_1
                ? sortingPropArray[0](d)
                : lodash.get(d, sortingPropArray[0])) === undefined; });
            return sortingOrderConfig.order === 'asc'
                ? __spread(copyListUndefinedsOnly, lodash.orderBy(copyListWithoutUndefineds, sortingPropArray, sortingOrderConfig.order)) : __spread(lodash.orderBy(copyListWithoutUndefineds, sortingPropArray, sortingOrderConfig.order), copyListUndefinedsOnly);
        }
        if (sortingOrderConfig.order === 'asc') {
            return copyList.sort(function (a, b) {
                return compareForDeeperComparison(sortingPropArray, a, b);
            });
        }
        return copyList.sort(function (a, b) {
            return compareForDeeperComparison(sortingPropArray, b, a);
        });
    }
    function compareForDeeperComparison(sortingPropArray, a, b) {
        var _a, _b;
        var collator = new Intl.Collator(undefined, {
            numeric: true,
            sensitivity: 'base'
        });
        var index = 0;
        while (index < sortingPropArray.length) {
            var isFunc = lodash.isFunction(sortingPropArray[index]);
            var compareItem = collator.compare(isFunc
                ? (_a = sortingPropArray[index](a)) !== null && _a !== void 0 ? _a : '' : lodash.get(a, sortingPropArray[index], ''), isFunc
                ? (_b = sortingPropArray[index](b)) !== null && _b !== void 0 ? _b : '' : lodash.get(b, sortingPropArray[index], ''));
            if (compareItem === 0 && index < sortingPropArray.length) {
                index++;
            }
            else {
                return compareItem;
            }
        }
    }

    function sort(sortingOrderConfig) {
        return function (list) { return list.pipe(operators.map(function (item) {
            return sortList(item, sortingOrderConfig);
        })); };
    }

    /**
     * Stringifies the value of the source observable
     */
    var stringify = function () { return function (source$) { return source$.pipe(operators.map(function (v) { return sortedStringify(v); })); }; };

    var ObjectService = /** @class */ (function () {
        function ObjectService() {
        }
        ObjectService.prototype.mergeDeep = function (target) {
            var _a, _b;
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sources[_i - 1] = arguments[_i];
            }
            if (!sources.length) {
                return target;
            }
            var source = sources.shift();
            if (this.isObject(target) && this.isObject(source)) {
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        if (this.isObject(source[key])) {
                            if (!target[key]) {
                                Object.assign(target, (_a = {}, _a[key] = {}, _a));
                            }
                            this.mergeDeep(target[key], source[key]);
                        }
                        else {
                            Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                        }
                    }
                }
            }
            return this.mergeDeep.apply(this, __spread([target], sources));
        };
        ObjectService.prototype.isObject = function (item) {
            return item && typeof item === 'object' && !Array.isArray(item);
        };
        return ObjectService;
    }());
    ObjectService.decorators = [
        { type: i0.Injectable }
    ];

    function isNullOrUndefined(value) {
        return value === null || value === undefined;
    }

    var PAGE_TITLE_TOKEN = new i0.InjectionToken('page-title-token');

    var singletonLock = false;
    exports.PageTitleService = /** @class */ (function () {
        function PageTitleService(title, translateService, objectService, pageTitleConfig) {
            var _this = this;
            this.title = title;
            this.translateService = translateService;
            this.objectService = objectService;
            this.pageTitleConfig = pageTitleConfig;
            this.defaultPageTitleConfig = {
                separator: '-',
                reverseOrder: false
            };
            this.config = this.objectService.mergeDeep(this.defaultPageTitleConfig, this.pageTitleConfig || {});
            this.labelsAndParams = new rxjs.BehaviorSubject(null);
            if (singletonLock) {
                throw Error('You can only have one PageTitleService.');
            }
            singletonLock = true;
            // We need to update the title when/if the language changes after setting a title.
            this.labelsAndParams
                .pipe(operators.filter(function (x) { return !!x; }), operators.switchMap(function (_b) {
                var tc = _b.tc, labels = _b.labels, params = _b.params;
                return _this.translateService
                    .stream(__spread([tc + '.APP_NAME'], labels.map(function (l) { return tc + '.' + l; })), params)
                    .pipe(operators.map(function (translations) { return (_this.config.reverseOrder
                    ? translations[tc + '.APP_NAME']
                    : '') +
                    _this.getTextFromLabels(labels, translations, tc) +
                    (!_this.config.reverseOrder
                        ? translations[tc + '.APP_NAME']
                        : ''); }));
            }), ngxReactivetoolkit.takeUntilDestroy(this))
                .subscribe(function (t) { return _this.title.setTitle(t); });
        }
        /**
         * Set the title on the document. (<title>...</title>)
         * Combination of provided label(s) and tc + '.APP_NAME'
         * If no label(s) are provided, the label TITLE will be used
         * @param tc Translation context
         * @param label label or labels
         * @param params params for translation
         */
        PageTitleService.prototype.setTitle = function (tc, label, params) {
            var labels;
            try {
                // We assume multiple labels, so if a string is given we normalize it to an array of strings
                labels = isNullOrUndefined(label)
                    ? ['TITLE']
                    : this.stringArrayNormalize(label);
            }
            catch (_a) {
                throw Error('PageTitleService - Invalid label, could not translate.');
            }
            this.labelsAndParams.next({ tc: tc, labels: labels, params: params });
        };
        PageTitleService.prototype.ngOnDestroy = function () {
            singletonLock = false;
        };
        PageTitleService.prototype.getTextFromLabels = function (labels, translations, tc) {
            var _this = this;
            var result = labels.map(function (l, i) { return (_this.config.reverseOrder ? " " + _this.config.separator + " " : '') +
                translations[tc + '.' + l] +
                (!_this.config.reverseOrder ? " " + _this.config.separator + " " : ''); });
            if (this.config.reverseOrder) {
                return result.reverse().join('');
            }
            else {
                return result.join('');
            }
        };
        PageTitleService.prototype.stringArrayNormalize = function (o) {
            if (typeof o === 'string') {
                return [o];
            }
            else if (Array.isArray(o) && o.every(function (x) { return typeof x === 'string'; })) {
                return o;
            }
            else {
                throw Error('Invalid object - only string or array of string allowed');
            }
        };
        return PageTitleService;
    }());
    exports.PageTitleService.decorators = [
        { type: i0.Injectable }
    ];
    exports.PageTitleService.ctorParameters = function () { return [
        { type: platformBrowser.Title },
        { type: core.TranslateService },
        { type: ObjectService },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [PAGE_TITLE_TOKEN,] }] }
    ]; };
    exports.PageTitleService = __decorate([
        ngxReactivetoolkit.UntilDestroy()
    ], exports.PageTitleService);

    var PageTitleModule = /** @class */ (function () {
        function PageTitleModule(parentModule) {
            if (parentModule) {
                throw new Error('PageTitleModule is already loaded. Import in your base AppModule only.');
            }
        }
        /**
         * Optional configuration
         * @param pageTitleConfig some basic settings used by PageTitleService
         */
        PageTitleModule.forRoot = function (pageTitleConfig) {
            return {
                ngModule: PageTitleModule,
                providers: [
                    {
                        provide: PAGE_TITLE_TOKEN,
                        useValue: pageTitleConfig
                    }
                ]
            };
        };
        return PageTitleModule;
    }());
    PageTitleModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, core.TranslateModule],
                    providers: [exports.PageTitleService]
                },] }
    ];
    PageTitleModule.ctorParameters = function () { return [
        { type: PageTitleModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
    ]; };

    var BlobToImgSrcPipe = /** @class */ (function () {
        function BlobToImgSrcPipe(sanitizer, windowRefService) {
            this.sanitizer = sanitizer;
            this.windowRefService = windowRefService;
        }
        BlobToImgSrcPipe.prototype.transform = function (blob) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(this.windowRefService.nativeWindow.URL.createObjectURL(blob));
        };
        return BlobToImgSrcPipe;
    }());
    BlobToImgSrcPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofBlobToImgSrc' },] }
    ];
    BlobToImgSrcPipe.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer },
        { type: WindowRefService }
    ]; };

    var ConcatPipe = /** @class */ (function () {
        function ConcatPipe() {
        }
        ConcatPipe.prototype.transform = function (value) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return value.concat.apply(value, __spread(args));
        };
        return ConcatPipe;
    }());
    ConcatPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofConcat' },] }
    ];

    /**
     * @deprecated Use lodash function use : https://lodash.com/docs/4.17.15#get
     */
    function deepFetchProperty(item, propertyPath) {
        return lodash.get(item, propertyPath, null);
    }

    var DeepFetchPropertyPipe = /** @class */ (function () {
        function DeepFetchPropertyPipe() {
        }
        DeepFetchPropertyPipe.prototype.transform = function (item, propertyPath) {
            return deepFetchProperty(item, propertyPath);
        };
        return DeepFetchPropertyPipe;
    }());
    DeepFetchPropertyPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofDeepFetchProperty' },] }
    ];

    var ExecutePipe = /** @class */ (function () {
        function ExecutePipe() {
        }
        ExecutePipe.prototype.transform = function (value, func) {
            if (!value) {
                return undefined;
            }
            return func(value);
        };
        return ExecutePipe;
    }());
    ExecutePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofExecute' },] }
    ];

    var FindPipe = /** @class */ (function () {
        function FindPipe() {
        }
        FindPipe.prototype.transform = function (items, propertyPath, toFind) {
            return items.find(function (item) { return deepFetchProperty(item, propertyPath) === toFind; });
        };
        return FindPipe;
    }());
    FindPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofFind' },] }
    ];

    var IncludesPipe = /** @class */ (function () {
        function IncludesPipe() {
        }
        IncludesPipe.prototype.transform = function (array, valueToFind, fromIndex) {
            if (array && Array.isArray(array)) {
                return array.includes(valueToFind, fromIndex);
            }
            else {
                return false;
            }
        };
        return IncludesPipe;
    }());
    IncludesPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofIncludes' },] }
    ];
    IncludesPipe.ctorParameters = function () { return []; };

    function getDocument() {
        return document;
    }
    var DocumentRefService = /** @class */ (function () {
        function DocumentRefService() {
        }
        Object.defineProperty(DocumentRefService.prototype, "nativeDocument", {
            get: function () {
                return getDocument();
            },
            enumerable: false,
            configurable: true
        });
        return DocumentRefService;
    }());
    DocumentRefService.decorators = [
        { type: i0.Injectable }
    ];

    exports.InfiniteScrollPipe = /** @class */ (function () {
        function InfiniteScrollPipe(windowRefService, documentRefService, changeDetectorRef) {
            this.windowRefService = windowRefService;
            this.documentRefService = documentRefService;
            this.changeDetectorRef = changeDetectorRef;
            this.auditTime = 500;
            this.preloadHeight = 500;
            this.scheduler = async.async;
            this.thresholdNumberOfItems = 35;
            this.dataSet$ = new rxjs.Subject();
        }
        InfiniteScrollPipe.prototype.transform = function (value, thresholdNumberOfItems, preloadHeight, auditTimeValue, elementRef) {
            var _this = this;
            if (value === null || value === undefined) {
                return value;
            }
            if (!Array.isArray(value)) {
                throw new Error('sofInfiniteScroll only accepts: null, undefined or any[]');
            }
            if (thresholdNumberOfItems &&
                this.thresholdNumberOfItems !== thresholdNumberOfItems) {
                this.thresholdNumberOfItems = thresholdNumberOfItems;
            }
            if (elementRef && this.elementRef !== elementRef) {
                this.elementRef = elementRef;
            }
            // makes it hard to test when defined in the constructor
            if (!this.subscription) {
                this.scrollOrResize$ = this.getScrollOrResize$();
                this.pageByScrollOrResize$ = this.getPageByScrollOrResize$();
                this.numberOfItems$ = this.getNumberOfItems$();
                this.subscription = this.getLimitedDataSet$()
                    .pipe(ngxReactivetoolkit.takeUntilDestroy(this))
                    .subscribe(function (v) {
                    _this.limitedDataSet = v;
                    _this.changeDetectorRef.markForCheck();
                });
            }
            // only when the data set changes in an immutable way reset the data set
            // this is important because otherwise numberOfItems will be reset change after change
            // which results in the same limited data set when scrolling
            if (this.dataSet !== value) {
                this.dataSet = value;
                this.dataSet$.next(value);
            }
            if (preloadHeight && this.preloadHeight !== preloadHeight) {
                this.preloadHeight = preloadHeight;
            }
            if (auditTimeValue && this.auditTime !== auditTimeValue) {
                this.auditTime = auditTimeValue;
            }
            if (elementRef && this.elementRef !== elementRef) {
                this.elementRef = elementRef;
            }
            return this.limitedDataSet;
        };
        InfiniteScrollPipe.prototype.ngOnDestroy = function () { };
        InfiniteScrollPipe.prototype.getScrollOrResize$ = function () {
            return rxjs.merge(rxjs.fromEvent(this.elementRef || this.windowRefService.nativeWindow, 'scroll'), rxjs.fromEvent(this.windowRefService.nativeWindow, 'resize')).pipe(operators.auditTime(this.auditTime, this.scheduler));
        };
        InfiniteScrollPipe.prototype.getPageByScrollOrResize$ = function () {
            var _this = this;
            return this.scrollOrResize$.pipe(operators.map(function () {
                var scrollTop = (_this.elementRef && _this.elementRef.scrollTop) ||
                    (_this.documentRefService.nativeDocument.documentElement &&
                        _this.documentRefService.nativeDocument.documentElement.scrollTop) ||
                    _this.documentRefService.nativeDocument.body.scrollTop;
                var scrollHeight = (_this.elementRef && _this.elementRef.scrollHeight) ||
                    (_this.documentRefService.nativeDocument.documentElement &&
                        _this.documentRefService.nativeDocument.documentElement
                            .scrollHeight) ||
                    _this.documentRefService.nativeDocument.body.scrollHeight;
                return (scrollTop + _this.windowRefService.nativeWindow.innerHeight >=
                    scrollHeight - _this.preloadHeight);
            }), operators.filter(function (b) { return !!b; }));
        };
        InfiniteScrollPipe.prototype.getNumberOfItems$ = function () {
            var _this = this;
            return this.pageByScrollOrResize$.pipe(operators.startWith(null), operators.mapTo(this.thresholdNumberOfItems), // make sure scan doesn't get a boolean
            operators.scan(function (acc) { return acc + _this.thresholdNumberOfItems; }, 0));
        };
        InfiniteScrollPipe.prototype.getLimitedDataSet$ = function () {
            var _this = this;
            return this.dataSet$.pipe(operators.switchMap(function (dataSet) { return _this.numberOfItems$.pipe(operators.map(function (count) { return lodash.slice(dataSet, 0, count); })); }));
        };
        return InfiniteScrollPipe;
    }());
    exports.InfiniteScrollPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofInfiniteScroll', pure: false },] }
    ];
    exports.InfiniteScrollPipe.ctorParameters = function () { return [
        { type: WindowRefService },
        { type: DocumentRefService },
        { type: i0.ChangeDetectorRef }
    ]; };
    exports.InfiniteScrollPipe = __decorate([
        ngxReactivetoolkit.UntilDestroy()
    ], exports.InfiniteScrollPipe);

    var IsArrayPipe = /** @class */ (function () {
        function IsArrayPipe() {
        }
        IsArrayPipe.prototype.transform = function (value) {
            return !!value && Array.isArray(value);
        };
        return IsArrayPipe;
    }());
    IsArrayPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofIsArray' },] }
    ];
    IsArrayPipe.ctorParameters = function () { return []; };

    var IsNullOrUndefinedPipe = /** @class */ (function () {
        function IsNullOrUndefinedPipe() {
        }
        IsNullOrUndefinedPipe.prototype.transform = function (value) {
            return isNullOrUndefined(value);
        };
        return IsNullOrUndefinedPipe;
    }());
    IsNullOrUndefinedPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofIsNullOrUndefined' },] }
    ];

    function isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    var IsNumberPipe = /** @class */ (function () {
        function IsNumberPipe() {
        }
        IsNumberPipe.prototype.transform = function (value) {
            return isNumber(value);
        };
        return IsNumberPipe;
    }());
    IsNumberPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'sofIsNumber'
                },] }
    ];

    var KeysPipe = /** @class */ (function () {
        function KeysPipe() {
        }
        KeysPipe.prototype.transform = function (obj) {
            return Object.keys(obj);
        };
        return KeysPipe;
    }());
    KeysPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofKeys' },] }
    ];

    var LocalNumberPipe = /** @class */ (function () {
        function LocalNumberPipe() {
        }
        LocalNumberPipe.prototype.transform = function (num, fractionDigits) {
            if (fractionDigits === void 0) { fractionDigits = 2; }
            return num.toLocaleString(undefined, {
                minimumFractionDigits: fractionDigits,
                maximumFractionDigits: fractionDigits
            });
        };
        return LocalNumberPipe;
    }());
    LocalNumberPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofLocalNumber' },] }
    ];
    LocalNumberPipe.ctorParameters = function () { return []; };

    var MaxPipe = /** @class */ (function () {
        function MaxPipe() {
        }
        MaxPipe.prototype.transform = function (list) {
            if (list && Array.isArray(list)) {
                return Math.max.apply(Math, __spread(list));
            }
            else {
                return undefined;
            }
        };
        return MaxPipe;
    }());
    MaxPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofMax' },] }
    ];

    var MaxStringLengthPipe = /** @class */ (function () {
        function MaxStringLengthPipe() {
        }
        // we use word.normalize('NFC') instead of Array.form because of other characters
        // wouldn't be sliced correctly. See test for examples of characters
        MaxStringLengthPipe.prototype.transform = function (word, maxLength) {
            if (maxLength === void 0) { maxLength = 50; }
            if (!!word) {
                var normalizedWord = word.normalize('NFC');
                return normalizedWord.length >= maxLength
                    ? normalizedWord.slice(0, maxLength) + '…'
                    : word;
            }
            return word;
        };
        return MaxStringLengthPipe;
    }());
    MaxStringLengthPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'sofMaxStringLength'
                },] }
    ];

    var ReplaceAllPipe = /** @class */ (function () {
        function ReplaceAllPipe() {
        }
        ReplaceAllPipe.prototype.transform = function (text, toReplace, replaceWith) {
            if (text) {
                return text.split(toReplace).join(replaceWith);
            }
            else {
                return text;
            }
        };
        return ReplaceAllPipe;
    }());
    ReplaceAllPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofReplaceAll' },] }
    ];
    ReplaceAllPipe.ctorParameters = function () { return []; };

    var SafeUrlPipe = /** @class */ (function () {
        function SafeUrlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeUrlPipe.prototype.transform = function (url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        };
        return SafeUrlPipe;
    }());
    SafeUrlPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofSafeUrl' },] }
    ];
    SafeUrlPipe.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer }
    ]; };

    var SortPipe = /** @class */ (function () {
        function SortPipe() {
        }
        SortPipe.prototype.transform = function (list, sortingOrderConfig) {
            return sortList(list, sortingOrderConfig);
        };
        return SortPipe;
    }());
    SortPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'sofSort' },] }
    ];

    var CurrencySymbolPipe = /** @class */ (function () {
        function CurrencySymbolPipe(locale) {
            this.locale = locale;
        }
        CurrencySymbolPipe.prototype.transform = function (code, format) {
            if (format === void 0) { format = 'narrow'; }
            return common.getCurrencySymbol(code, format, this.locale);
        };
        return CurrencySymbolPipe;
    }());
    CurrencySymbolPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'sofCurrencySymbol'
                },] }
    ];
    CurrencySymbolPipe.ctorParameters = function () { return [
        { type: String, decorators: [{ type: i0.Inject, args: [i0.LOCALE_ID,] }] }
    ]; };

    var pipes = [
        SortPipe,
        SafeUrlPipe,
        ReplaceAllPipe,
        MaxPipe,
        LocalNumberPipe,
        KeysPipe,
        IsNullOrUndefinedPipe,
        IsArrayPipe,
        IsNumberPipe,
        exports.InfiniteScrollPipe,
        IncludesPipe,
        FindPipe,
        ExecutePipe,
        DeepFetchPropertyPipe,
        ConcatPipe,
        BlobToImgSrcPipe,
        MaxStringLengthPipe,
        CurrencySymbolPipe
    ];
    var UtilsPipesModule = /** @class */ (function () {
        function UtilsPipesModule() {
        }
        return UtilsPipesModule;
    }());
    UtilsPipesModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: __spread(pipes),
                    exports: __spread(pipes)
                },] }
    ];

    var DocumentDownloadService = /** @class */ (function () {
        function DocumentDownloadService(documentRefService, windowRefService) {
            this.documentRefService = documentRefService;
            this.windowRefService = windowRefService;
        }
        DocumentDownloadService.prototype.downloadDocument = function (blob, documentName) {
            var download = this.documentRefService.nativeDocument.createElement('a');
            this.documentRefService.nativeDocument.body.appendChild(download);
            if (this.windowRefService.nativeWindow.navigator.appVersion
                .toString()
                .includes('Trident')) {
                this.windowRefService.nativeWindow.navigator.msSaveBlob(blob, documentName);
            }
            else {
                // for other browsers
                var fileURL = this.windowRefService.nativeWindow.URL.createObjectURL(blob);
                download.href = fileURL;
                download.download = documentName;
                download.click();
                download.remove();
            }
        };
        return DocumentDownloadService;
    }());
    DocumentDownloadService.decorators = [
        { type: i0.Injectable }
    ];
    DocumentDownloadService.ctorParameters = function () { return [
        { type: DocumentRefService },
        { type: WindowRefService }
    ]; };

    var FileSelectionService = /** @class */ (function () {
        function FileSelectionService(documentRefService) {
            this.documentRefService = documentRefService;
        }
        /**
         * @param acceptedMimeTypes example: [ 'application/pdf', 'image/jpeg', 'image/x-png' ]
         * @param multiple allow selection of multiple files
         */
        FileSelectionService.prototype.getFileSelector = function (acceptedMimeTypes, multiple) {
            if (multiple === void 0) { multiple = false; }
            var form = this.documentRefService.nativeDocument.createElement('form');
            var fileSelector = this.documentRefService.nativeDocument.createElement('input');
            fileSelector.setAttribute('type', 'file');
            if (multiple) {
                fileSelector.setAttribute('multiple', '');
            }
            if (Array.isArray(acceptedMimeTypes)) {
                fileSelector.setAttribute('accept', acceptedMimeTypes.join(', '));
            }
            form.appendChild(fileSelector);
            form.reset();
            fileSelector.click();
            return rxjs.fromEvent(fileSelector, 'change').pipe(operators.take(1), operators.map(function (e) { return e.target.files; }));
        };
        return FileSelectionService;
    }());
    FileSelectionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FileSelectionService_Factory() { return new FileSelectionService(i0.ɵɵinject(DocumentRefService)); }, token: FileSelectionService, providedIn: "root" });
    FileSelectionService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    FileSelectionService.ctorParameters = function () { return [
        { type: DocumentRefService }
    ]; };

    // tslint:disable-next-line:no-namespace
    exports.FilterSet = void 0;
    (function (FilterSet) {
        var FilterType;
        (function (FilterType) {
            FilterType["MultiSelect"] = "multi-select";
        })(FilterType = FilterSet.FilterType || (FilterSet.FilterType = {}));
    })(exports.FilterSet || (exports.FilterSet = {}));

    var FilterService = /** @class */ (function () {
        function FilterService() {
        }
        FilterService.prototype.filterList = function (items, activeFilterSet) {
            var _this = this;
            return items.filter(function (item) { return activeFilterSet.every(function (x) { return _this.checkIfIncluded(x, item); }); });
        };
        FilterService.prototype.checkIfIncluded = function (filterSet, item) {
            switch (filterSet.filterType) {
                case exports.FilterSet.FilterType.MultiSelect:
                    return filterSet.data.includes(deepFetchProperty(item, filterSet.path));
                default:
                    throw Error('FilterType not implemented');
            }
        };
        return FilterService;
    }());
    FilterService.decorators = [
        { type: i0.Injectable }
    ];

    function validatorPhone(validationMessage) {
        if (validationMessage === void 0) { validationMessage = 'ERROR_PHONE'; }
        return function (c) {
            var _a = c.value, country = _a.country, zonalPhoneNumber = _a.zonalPhoneNumber, localPhoneNumber = _a.localPhoneNumber;
            if ((zonalPhoneNumber && (!country || !localPhoneNumber)) ||
                (localPhoneNumber && (!country || !zonalPhoneNumber))) {
                return {
                    phone: {
                        validationMessage: validationMessage
                    }
                };
            }
            return null;
        };
    }
    function validatorAddress(validationMessage) {
        if (validationMessage === void 0) { validationMessage = 'ERROR_ADDRESS'; }
        return function (c) {
            var _a = c.value, country = _a.country, postalCodeAndCity = _a.postalCodeAndCity, addressLineOne = _a.addressLineOne, addressLineTwo = _a.addressLineTwo;
            if ((postalCodeAndCity &&
                postalCodeAndCity.postalCode &&
                (!country || !postalCodeAndCity.city || !addressLineOne)) ||
                (postalCodeAndCity &&
                    postalCodeAndCity.city &&
                    (!country || !postalCodeAndCity.postalCode || !addressLineOne)) ||
                (addressLineOne &&
                    (!country ||
                        !postalCodeAndCity ||
                        !postalCodeAndCity.postalCode ||
                        !postalCodeAndCity.city))) {
                return {
                    address: {
                        validationMessage: validationMessage
                    }
                };
            }
            return null;
        };
    }

    var FormGroupService = /** @class */ (function () {
        function FormGroupService(fb) {
            this.fb = fb;
        }
        FormGroupService.prototype.createPhoneGroup = function (defaultCountry) {
            if (defaultCountry === void 0) { defaultCountry = null; }
            return this.fb.group({
                country: [defaultCountry],
                zonalPhoneNumber: [''],
                localPhoneNumber: ['']
            }, {
                validator: [validatorPhone()]
            });
        };
        FormGroupService.prototype.createAddressGroup = function (defaultCountry) {
            if (defaultCountry === void 0) { defaultCountry = null; }
            return this.fb.group({
                country: [defaultCountry],
                postalCodeAndCity: [null],
                addressLineOne: [''],
                addressLineTwo: ['']
            }, {
                validator: [validatorAddress()]
            });
        };
        return FormGroupService;
    }());
    FormGroupService.decorators = [
        { type: i0.Injectable }
    ];
    FormGroupService.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };

    var RouterToolsService = /** @class */ (function () {
        function RouterToolsService(router, viewportScroller) {
            this.router = router;
            this.viewportScroller = viewportScroller;
            this.position = [0, 0];
        }
        RouterToolsService.prototype.navigateWithPositionRestore = function (commands, extras) {
            this.position = this.viewportScroller.getScrollPosition();
            return this.internalNavigateWithPositionRestore(commands, extras);
        };
        RouterToolsService.prototype.navigateWithPreviousPositionRestore = function (commands, extras) {
            return this.internalNavigateWithPositionRestore(commands, extras);
        };
        RouterToolsService.prototype.internalNavigateWithPositionRestore = function (commands, extras) {
            var _this = this;
            return this.router.navigate(commands, extras).then(function () {
                _this.viewportScroller.scrollToPosition(_this.position);
            });
        };
        return RouterToolsService;
    }());
    RouterToolsService.decorators = [
        { type: i0.Injectable }
    ];
    RouterToolsService.ctorParameters = function () { return [
        { type: router.Router },
        { type: common.ViewportScroller }
    ]; };

    var ScrollService = /** @class */ (function () {
        function ScrollService(windowRefService) {
            this.windowRefService = windowRefService;
        }
        ScrollService.prototype.scrollToTop = function () {
            this.windowRefService.nativeWindow.scrollTo(0, 0);
        };
        return ScrollService;
    }());
    ScrollService.decorators = [
        { type: i0.Injectable }
    ];
    ScrollService.ctorParameters = function () { return [
        { type: WindowRefService }
    ]; };

    var UtilServicesModule = /** @class */ (function () {
        function UtilServicesModule(parentModule, router, reactiveForms, translate) {
            if (parentModule) {
                throw new Error('UtilServicesModule is already loaded. Import in your base AppModule only.');
            }
            if (!router) {
                throw new Error('You need to import the RouterModule in your AppModule!');
            }
            if (!reactiveForms) {
                throw new Error('You need to import the ReactiveFormsModule in your AppModule!');
            }
            if (!translate) {
                throw new Error('You need to import the TranslateModule in your AppModule!');
            }
        }
        return UtilServicesModule;
    }());
    UtilServicesModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [
                        WindowRefService,
                        DocumentRefService,
                        DocumentDownloadService,
                        FileSelectionService,
                        FormGroupService,
                        ObjectService,
                        RouterToolsService,
                        ScrollService
                    ]
                },] }
    ];
    UtilServicesModule.ctorParameters = function () { return [
        { type: UtilServicesModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] },
        { type: router.Router, decorators: [{ type: i0.Optional }] },
        { type: forms.FormBuilder, decorators: [{ type: i0.Optional }] },
        { type: core.TranslateService, decorators: [{ type: i0.Optional }] }
    ]; };

    function dateWithoutTimeEquals(date1, date2) {
        if (isNullOrUndefined(date1) && isNullOrUndefined(date2)) {
            return true;
        }
        if (!isNullOrUndefined(date1) && !isNullOrUndefined(date2)) {
            var cleanDate1 = getCleanDate(date1);
            var cleanDate2 = getCleanDate(date2);
            return cleanDate1.getTime() === cleanDate2.getTime();
        }
        return false;
    }
    function dateWithoutTimeBefore(date1, date2) {
        if (!isNullOrUndefined(date1) && !isNullOrUndefined(date2)) {
            var cleanDate1 = getCleanDate(date1);
            var cleanDate2 = getCleanDate(date2);
            return cleanDate1.getTime() < cleanDate2.getTime();
        }
        return false;
    }
    function dateWithoutTimeAfter(date1, date2) {
        if (!isNullOrUndefined(date1) && !isNullOrUndefined(date2)) {
            var cleanDate1 = getCleanDate(date1);
            var cleanDate2 = getCleanDate(date2);
            return cleanDate1.getTime() > cleanDate2.getTime();
        }
        return false;
    }
    function timeWithoutDateEquals(time1, time2) {
        if (isNullOrUndefined(time1) && isNullOrUndefined(time2)) {
            return true;
        }
        if (!isNullOrUndefined(time1) && !isNullOrUndefined(time2)) {
            var cleanTime1 = getCleanTime(time1);
            var cleanTime2 = getCleanTime(time2);
            return cleanTime1.getTime() === cleanTime2.getTime();
        }
        return false;
    }
    function timeWithoutDateBefore(time1, time2) {
        if (!isNullOrUndefined(time1) && !isNullOrUndefined(time2)) {
            var cleanTime1 = getCleanTime(time1);
            var cleanTime2 = getCleanTime(time2);
            return cleanTime1.getTime() < cleanTime2.getTime();
        }
    }
    function timeWithoutDateAfter(time1, time2) {
        if (!isNullOrUndefined(time1) && !isNullOrUndefined(time2)) {
            var cleanTime1 = getCleanTime(time1);
            var cleanTime2 = getCleanTime(time2);
            return cleanTime1.getTime() > cleanTime2.getTime();
        }
    }
    function getCleanTime(time) {
        var cleanTime = new Date(time.getTime());
        cleanTime.setFullYear(2020, 0, 1);
        cleanTime.setMilliseconds(0);
        return cleanTime;
    }
    function getCleanDate(date) {
        var cleanDate = new Date(date.getTime());
        cleanDate.setHours(0, 0, 0, 0);
        return cleanDate;
    }

    function isObject(value) {
        return !!value && typeof value === 'object' && value.constructor === Object;
    }

    function inRangeValidator(min, max) {
        return function (control) {
            var duration = control.value;
            if (isNullOrUndefined(duration)) {
                return null;
            }
            return duration >= min && duration <= max
                ? null
                : { inRange: { min: min, max: max } };
        };
    }

    var isIntegerValidator = function (control) {
        var duration = control.value;
        if (isNullOrUndefined(duration)) {
            return null;
        }
        return Number.isInteger(duration) ? null : { isInteger: true };
    };

    function maxLengthNumberValidator(max) {
        return function (control) {
            var number = control.value;
            if (isNullOrUndefined(number) || !isNumber(number)) {
                return null;
            }
            return number.toString().length > max ? { maxLengthNumber: max } : null;
        };
    }

    var DateMapper = /** @class */ (function () {
        function DateMapper() {
        }
        // The default behavior of the Date constructor with a string of the
        // format YYYY-MM-DD is to interpret this as a UTC date. To keep the same
        // behavior as before with the dateStruct we want this kind of format to be
        // interpreted as a local date. For that we need to use the
        // Date(yearNumber, monthNumber, dateNumber) constructor.
        DateMapper.prototype.stringToDate = function (date) {
            if (date && lodash.isString(date) && date.match('^[0-9]{4}-[0-9]{2}-[0-9]{2}')) {
                var _a = __read(date.split('-'), 3), year = _a[0], month = _a[1], day = _a[2];
                var numberYear = parseInt(year, 10);
                var numberMonth = parseInt(month, 10);
                var numberDay = parseInt(day, 10);
                return new Date(numberYear, numberMonth - 1, numberDay);
            }
            return null;
        };
        // When you have a full string the default Date constructor will see
        // this as a local dateTime. This can also be used with localized
        // dateTime strings.
        DateMapper.prototype.fullStringToDate = function (date) {
            if (date &&
                lodash.isString(date) &&
                date.match('^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}')) {
                return new Date(date);
            }
            return null;
        };
        // This will transform the local date to a string in the format YYYY-MM-DD
        DateMapper.prototype.dateToString = function (date) {
            if (!isNullOrUndefined(date)) {
                return date.getFullYear() + "-" + this.getFullNumber(date.getMonth() + 1) + "-" + this.getFullNumber(date.getDate());
            }
            return null;
        };
        // This will return the local datetime to a string in the format HH:MM:SS
        DateMapper.prototype.dateToTimeString = function (date) {
            if (!isNullOrUndefined(date)) {
                return date.toTimeString().split(' ')[0];
            }
            return null;
        };
        // This transforms single character numbers to double character numbers
        // Used for getting correct formats
        DateMapper.prototype.getFullNumber = function (number) {
            if (!isNullOrUndefined(number)) {
                return ('0' + number).slice(-2);
            }
        };
        return DateMapper;
    }());
    DateMapper.ɵprov = i0.ɵɵdefineInjectable({ factory: function DateMapper_Factory() { return new DateMapper(); }, token: DateMapper, providedIn: "root" });
    DateMapper.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];

    /*
     * Public API Surface of utils
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Acting = Acting;
    exports.ActingErrorMessages = ActingErrorMessages;
    exports.BlobToImgSrcPipe = BlobToImgSrcPipe;
    exports.CacheOverrideConfigAbstract = CacheOverrideConfigAbstract;
    exports.CacheOverrideInterceptor = CacheOverrideInterceptor;
    exports.CacheOverrideModule = CacheOverrideModule;
    exports.ConcatPipe = ConcatPipe;
    exports.CurrencySymbolPipe = CurrencySymbolPipe;
    exports.CustomTranslationHandler = CustomTranslationHandler;
    exports.DateMapper = DateMapper;
    exports.DeepFetchPropertyPipe = DeepFetchPropertyPipe;
    exports.DocumentDownloadService = DocumentDownloadService;
    exports.DocumentRefService = DocumentRefService;
    exports.ExecutePipe = ExecutePipe;
    exports.FileSelectionService = FileSelectionService;
    exports.FilterService = FilterService;
    exports.FindPipe = FindPipe;
    exports.FormGroupService = FormGroupService;
    exports.GetErrorMessage = GetErrorMessage;
    exports.GetRouterState = GetRouterState;
    exports.HttpStatusInterceptor = HttpStatusInterceptor;
    exports.HttpStatusService = HttpStatusService;
    exports.IncludesPipe = IncludesPipe;
    exports.IsArrayPipe = IsArrayPipe;
    exports.IsNullOrUndefinedPipe = IsNullOrUndefinedPipe;
    exports.IsNumberPipe = IsNumberPipe;
    exports.KeysPipe = KeysPipe;
    exports.Loading = Loading;
    exports.LocalNumberPipe = LocalNumberPipe;
    exports.MaxPipe = MaxPipe;
    exports.MaxStringLengthPipe = MaxStringLengthPipe;
    exports.ObjectService = ObjectService;
    exports.PAGE_TITLE_TOKEN = PAGE_TITLE_TOKEN;
    exports.PageTitleModule = PageTitleModule;
    exports.ReplaceAllPipe = ReplaceAllPipe;
    exports.RouterToolsService = RouterToolsService;
    exports.RoutingAllowedGuard = RoutingAllowedGuard;
    exports.SafeUrlPipe = SafeUrlPipe;
    exports.ScrollService = ScrollService;
    exports.SortPipe = SortPipe;
    exports.UtilGuardsModule = UtilGuardsModule;
    exports.UtilServicesModule = UtilServicesModule;
    exports.UtilsPipesModule = UtilsPipesModule;
    exports.WindowRefService = WindowRefService;
    exports.dateWithoutTimeAfter = dateWithoutTimeAfter;
    exports.dateWithoutTimeBefore = dateWithoutTimeBefore;
    exports.dateWithoutTimeEquals = dateWithoutTimeEquals;
    exports.deepFetchProperty = deepFetchProperty;
    exports.distinctUntilChangedArray = distinctUntilChangedArray;
    exports.getConfigurationParameters = getConfigurationParameters;
    exports.hotSafe = hotSafe;
    exports.inRangeValidator = inRangeValidator;
    exports.isIntegerValidator = isIntegerValidator;
    exports.isNullOrUndefined = isNullOrUndefined;
    exports.isNumber = isNumber;
    exports.isObject = isObject;
    exports.latestSourceWithoutCancellationMap = latestSourceWithoutCancellationMap;
    exports.maxLengthNumberValidator = maxLengthNumberValidator;
    exports.search = search;
    exports.setRootInjector = setRootInjector;
    exports.sort = sort;
    exports.sortList = sortList;
    exports.sortObject = sortObject;
    exports.sortedStringify = sortedStringify;
    exports.stringify = stringify;
    exports.timeWithoutDateAfter = timeWithoutDateAfter;
    exports.timeWithoutDateBefore = timeWithoutDateBefore;
    exports.timeWithoutDateEquals = timeWithoutDateEquals;
    exports.validatorAddress = validatorAddress;
    exports.validatorPhone = validatorPhone;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-utils.umd.js.map
