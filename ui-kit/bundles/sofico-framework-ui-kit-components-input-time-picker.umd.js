(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@sofico-framework/ui-kit/components/form'), require('@sofico-framework/ui-kit/directives/focus'), require('@sofico-framework/utils'), require('ngx-reactivetoolkit'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/time-picker')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/input-time-picker', ['exports', '@angular/core', '@angular/forms', '@sofico-framework/ui-kit/components/form', '@sofico-framework/ui-kit/directives/focus', '@sofico-framework/utils', 'ngx-reactivetoolkit', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/time-picker'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['input-time-picker'] = {}), global.ng.core, global.ng.forms, global['sofico-framework']['ui-kit'].components.form, global['sofico-framework']['ui-kit'].directives.focus, global.utils, global.ngxReactivetoolkit, global.rxjs, global.rxjs.operators, global.ng.common, global.timePicker));
}(this, (function (exports, core, forms, form, focus, utils, ngxReactivetoolkit, rxjs, operators, common, timePicker) { 'use strict';

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

    var InputTimePickerComponent_1;
    exports.InputTimePickerComponent = InputTimePickerComponent_1 = /** @class */ (function () {
        function InputTimePickerComponent(form, ngControl, changeDetectorRef) {
            this.form = form;
            this.ngControl = ngControl;
            this.changeDetectorRef = changeDetectorRef;
            // Size of Select input
            this.size = 'large';
            // TimeFormat for enum
            this.timeFormat = utils.TimeFormatEnum.HH_TIME_M;
            // Display as 12 hours format and set TimeFormatEnum to H_TIME_M or H_TIME_M_S
            this.use12Hours = false;
            // Allow clearing text
            this.allowEmpty = true;
            // Default value when you open the panel when formControl is nul
            this.defaultOpenValue = new Date();
            /**
             * Determines whether the input is in a valid state.
             */
            this.invalid = false;
            /**
             * EventEmitter that will emit the value when changed.
             */
            this.changeValue = new core.EventEmitter();
            /**
             * EventEmitter that will emit when control is touched.
             */
            this.touch = new core.EventEmitter();
            this.internalFormControl = new forms.FormControl(null);
            if (ngControl) {
                ngControl.valueAccessor = this;
            }
        }
        InputTimePickerComponent.prototype.sofFocus = function () {
            this.inputElement.nativeElement.getElementsByTagName('input')[0].focus();
            this.changeDetectorRef.detectChanges();
        };
        InputTimePickerComponent.prototype.ngOnDestroy = function () {
            var _a;
            if ((_a = this.ngControl) === null || _a === void 0 ? void 0 : _a.valueAccessor) {
                // Every time a control is re-created the previous writeValue reference(s) is not cleaned up.
                // So, over time, a lot of these references can be built up. This memory leak is a bug in Angular's implementation of ControlValueAccessor.
                // We hide that problem by assigning an empty function to writeValue every time we destroy the control.
                // An detailed explanation of the problem can be found here: https://github.com/angular/angular/pull/29335
                // The bug issue for it: https://github.com/angular/angular/issues/20007
                this.ngControl.valueAccessor.writeValue = function () { };
            }
        };
        InputTimePickerComponent.prototype.ngOnChanges = function () { };
        InputTimePickerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.internalFormControl.valueChanges
                .pipe(ngxReactivetoolkit.takeUntilDestroy(this))
                .subscribe(function (value) {
                if (!_this.isDisabled) {
                    _this.changeValue.emit(value);
                    if (_this.propagateChange) {
                        _this.propagateChange(value);
                    }
                }
            });
            this.disabledHours$ = rxjs.combineLatest([
                this.minTime$.pipe(operators.startWith(null)),
                this.maxTime$.pipe(operators.startWith(null))
            ]).pipe(operators.map(function (_b) {
                var _c = __read(_b, 2), minTime = _c[0], maxTime = _c[1];
                return _this.getNgZorroDisabledHours(minTime, maxTime);
            }));
            this.disabledMinutes$ = rxjs.combineLatest([
                this.minTime$.pipe(operators.startWith(null)),
                this.maxTime$.pipe(operators.startWith(null))
            ]).pipe(operators.map(function (_b) {
                var _c = __read(_b, 2), minTime = _c[0], maxTime = _c[1];
                return _this.getNgZorroDisabledMinutes(minTime, maxTime);
            }));
            this.disabledSeconds$ = rxjs.combineLatest([
                this.minTime$.pipe(operators.startWith(null)),
                this.maxTime$.pipe(operators.startWith(null))
            ]).pipe(operators.map(function (_b) {
                var _c = __read(_b, 2), minTime = _c[0], maxTime = _c[1];
                return _this.getNgZorroDisabledSeconds(minTime, maxTime);
            }));
        };
        InputTimePickerComponent.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        InputTimePickerComponent.prototype.registerOnTouched = function (fn) {
            this.propagateTouch = fn;
        };
        InputTimePickerComponent.prototype.writeValue = function (value) {
            this.internalFormControl.setValue(value, { emitEvent: false });
        };
        InputTimePickerComponent.prototype.onTouch = function ($event) {
            if (!$event) {
                this.touch.emit();
                if (!this.isDisabled && this.propagateTouch) {
                    this.propagateTouch();
                }
            }
        };
        InputTimePickerComponent.prototype.getNgZorroDisabledHours = function (minTime, maxTime) {
            var _this = this;
            return function () { return __spread(Array(24).keys()).reduce(function (acc, hour) {
                if (!_this.hourAllowed(minTime, maxTime, hour)) {
                    acc.push(hour);
                }
                return acc;
            }, []); };
        };
        InputTimePickerComponent.prototype.getNgZorroDisabledMinutes = function (minTime, maxTime) {
            var _this = this;
            return function (hour) { return __spread(Array(60).keys()).reduce(function (acc, minute) {
                if (!_this.hourAllowed(minTime, maxTime, hour)) {
                    acc.push(minute);
                }
                else if (!_this.minuteAllowed(minTime, maxTime, hour, minute)) {
                    acc.push(minute);
                }
                return acc;
            }, []); };
        };
        InputTimePickerComponent.prototype.getNgZorroDisabledSeconds = function (minTime, maxTime) {
            var _this = this;
            return function (hour, minute) { return __spread(Array(60).keys()).reduce(function (acc, second) {
                if (!_this.hourAllowed(minTime, maxTime, hour)) {
                    acc.push(second);
                }
                else if (!_this.minuteAllowed(minTime, maxTime, hour, minute)) {
                    acc.push(second);
                }
                else if (!_this.secondAllowed(minTime, maxTime, hour, minute, second)) {
                    acc.push(second);
                }
                return acc;
            }, []); };
        };
        InputTimePickerComponent.prototype.hourAllowed = function (minTime, maxTime, hour) {
            if (minTime || maxTime) {
                if (maxTime && maxTime.getHours() < hour) {
                    return false;
                }
                else if (minTime && minTime.getHours() > hour) {
                    return false;
                }
            }
            return true;
        };
        InputTimePickerComponent.prototype.minuteAllowed = function (minTime, maxTime, hour, minute) {
            if (minTime || maxTime) {
                if (maxTime &&
                    maxTime.getHours() === hour &&
                    maxTime.getMinutes() < minute) {
                    return false;
                }
                else if (minTime &&
                    minTime.getHours() === hour &&
                    minTime.getMinutes() > minute) {
                    return false;
                }
            }
            return true;
        };
        InputTimePickerComponent.prototype.secondAllowed = function (minTime, maxTime, hour, minute, second) {
            if (minTime || maxTime) {
                if (maxTime &&
                    maxTime.getHours() === hour &&
                    maxTime.getMinutes() === minute &&
                    maxTime.getSeconds() < second) {
                    return false;
                }
                else if (minTime &&
                    minTime.getHours() === hour &&
                    minTime.getMinutes() === minute &&
                    minTime.getSeconds() > second) {
                    return false;
                }
            }
            return true;
        };
        return InputTimePickerComponent;
    }());
    exports.InputTimePickerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sof-input-time-picker',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "\n    <nz-time-picker\n      #inputElement\n      [@.disabled]=\"true\"\n      [formControl]=\"internalFormControl\"\n      [nzSize]=\"size\"\n      [nzFormat]=\"timeFormat\"\n      [nzPlaceHolder]=\"placeHolder\"\n      [nzUse12Hours]=\"use12Hours\"\n      [nzHourStep]=\"hourStep\"\n      [nzMinuteStep]=\"minuteStep\"\n      [nzSecondStep]=\"secondStep\"\n      [nzAllowEmpty]=\"allowEmpty\"\n      [nzDefaultOpenValue]=\"defaultOpenValue\"\n      [nzDisabled]=\"isDisabled\"\n      [nzDisabledHours]=\"disabledHours$ | async\"\n      [nzDisabledMinutes]=\"disabledMinutes$ | async\"\n      [nzDisabledSeconds]=\"disabledSeconds$ | async\"\n      [class.is-invalid]=\"\n        invalid ||\n        (ngControl?.invalid && (ngControl?.touched || form?.submitted))\n      \"\n      (nzOpenChange)=\"onTouch($event)\"\n    ></nz-time-picker>\n  ",
                    providers: [
                        { provide: focus.SOF_FOCUS_COMPONENT, useExisting: InputTimePickerComponent_1 }
                    ],
                    styles: ["sof-input-time-picker nz-time-picker{width:100%;height:38px}sof-input-time-picker nz-time-picker .ant-picker-suffix .anticon-clock-circle{display:flex}sof-input-time-picker nz-time-picker.is-invalid .ant-picker-input input{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem);transition:none}"]
                },] }
    ];
    exports.InputTimePickerComponent.ctorParameters = function () { return [
        { type: form.FormComponent, decorators: [{ type: core.Optional }] },
        { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Host }] },
        { type: core.ChangeDetectorRef }
    ]; };
    exports.InputTimePickerComponent.propDecorators = {
        size: [{ type: core.Input }],
        timeFormat: [{ type: core.Input }],
        use12Hours: [{ type: core.Input }],
        placeHolder: [{ type: core.Input }],
        hourStep: [{ type: core.Input }],
        minuteStep: [{ type: core.Input }],
        secondStep: [{ type: core.Input }],
        allowEmpty: [{ type: core.Input }],
        defaultOpenValue: [{ type: core.Input }],
        labelForId: [{ type: core.Input }],
        isDisabled: [{ type: core.Input }],
        invalid: [{ type: core.Input }],
        changeValue: [{ type: core.Output }],
        touch: [{ type: core.Output }],
        minTime: [{ type: core.Input }],
        maxTime: [{ type: core.Input }],
        inputElement: [{ type: core.ViewChild, args: ['inputElement', { read: core.ElementRef },] }]
    };
    __decorate([
        ngxReactivetoolkit.Changes('minTime')
    ], exports.InputTimePickerComponent.prototype, "minTime$", void 0);
    __decorate([
        ngxReactivetoolkit.Changes('maxTime')
    ], exports.InputTimePickerComponent.prototype, "maxTime$", void 0);
    exports.InputTimePickerComponent = InputTimePickerComponent_1 = __decorate([
        ngxReactivetoolkit.UntilDestroy()
    ], exports.InputTimePickerComponent);

    var InputTimePickerModule = /** @class */ (function () {
        function InputTimePickerModule() {
        }
        return InputTimePickerModule;
    }());
    InputTimePickerModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        timePicker.NzTimePickerModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        forms.FormsModule
                    ],
                    declarations: [exports.InputTimePickerComponent],
                    exports: [exports.InputTimePickerComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InputTimePickerModule = InputTimePickerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-input-time-picker.umd.js.map
