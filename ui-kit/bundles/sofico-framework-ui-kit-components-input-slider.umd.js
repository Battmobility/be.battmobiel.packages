(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@sofico-framework/ui-kit/directives/focus'), require('@sofico-framework/utils'), require('ngx-reactivetoolkit'), require('@angular/common'), require('@sofico-framework/ui-kit/components/input-currency'), require('@sofico-framework/ui-kit/components/input-number'), require('ng-zorro-antd/slider')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/input-slider', ['exports', '@angular/core', '@angular/forms', '@sofico-framework/ui-kit/directives/focus', '@sofico-framework/utils', 'ngx-reactivetoolkit', '@angular/common', '@sofico-framework/ui-kit/components/input-currency', '@sofico-framework/ui-kit/components/input-number', 'ng-zorro-antd/slider'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['input-slider'] = {}), global.ng.core, global.ng.forms, global['sofico-framework']['ui-kit'].directives.focus, global.utils, global.ngxReactivetoolkit, global.ng.common, global['sofico-framework']['ui-kit'].components['input-currency'], global['sofico-framework']['ui-kit'].components['input-number'], global.slider));
}(this, (function (exports, core, forms, focus, utils, ngxReactivetoolkit, common, inputCurrency, inputNumber, slider) { 'use strict';

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

    var InputSliderComponent_1;
    exports.InputSliderComponent = InputSliderComponent_1 = /** @class */ (function () {
        function InputSliderComponent(ngControl, changeDetectorRef, fb) {
            this.ngControl = ngControl;
            this.changeDetectorRef = changeDetectorRef;
            this.fb = fb;
            this.localReversed = false;
            this.localRange = false;
            /**
             *  Visibility of marks
             */
            this.marks = 'both';
            /**
             * The maximum amount of decimals allowed in the input fields
             */
            this.maxFraction = 0;
            /**
             * EventEmitter that will emit the value when changed.
             */
            this.changeValue = new core.EventEmitter();
            /**
             * EventEmitter that will emit the value after release.
             */
            this.valueAfterRelease = new core.EventEmitter();
            this.localValueForm = this.fb.group({
                minValue: [],
                maxValue: []
            });
            this.localLabelFormatFn = function (value) { return "" + value; };
            if (ngControl) {
                ngControl.valueAccessor = this;
            }
        }
        Object.defineProperty(InputSliderComponent.prototype, "range", {
            /**
             *  Determines if the input will allow two boundary values to be picked.
             */
            set: function (isRange) {
                this.localRange = isRange;
                this.updateLocalValueForm();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputSliderComponent.prototype, "reversed", {
            /**
             * Determines if the selected part of the slider is to the left
             * or to the right of the selected value
             * false => |=====O-----|   [default]
             * true =>  |-----O=====|
             */
            set: function (isReversed) {
                this.localReversed = isReversed;
                this.calculateValue(this.calculatedValue);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputSliderComponent.prototype, "value", {
            /**
             * Determines the value of the control.
             */
            set: function (value) {
                this.writeValue(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputSliderComponent.prototype, "minValue", {
            /**
             * Determines the min value of the slider.
             */
            set: function (value) {
                this.localMinValue = value;
                this.calculateValue(this.calculatedValue);
                this.nzMarks = this.calculateMarks(this.localMinValue, this.localMaxValue);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputSliderComponent.prototype, "maxValue", {
            /**
             * Determines the max value of the slider.
             */
            set: function (value) {
                this.localMaxValue = value;
                this.calculateValue(this.calculatedValue);
                this.nzMarks = this.calculateMarks(this.localMinValue, this.localMaxValue);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputSliderComponent.prototype, "labelFormatFn", {
            /**
             * Determines the display format of the values.
             */
            set: function (fn) {
                this.localLabelFormatFn = fn;
                this.nzMarks = this.calculateMarks(this.localMinValue, this.localMaxValue);
            },
            enumerable: false,
            configurable: true
        });
        InputSliderComponent.prototype.ngOnInit = function () {
            var _this = this;
            // This logic interprets the values in the localValueForm and uses some
            // logic to get the correct values sent to the onChange method
            this.localValueForm.valueChanges
                .pipe(ngxReactivetoolkit.takeUntilDestroy(this))
                .subscribe(function (values) {
                var localValue;
                if (_this.localRange) {
                    localValue = [values.minValue, values.maxValue];
                }
                else {
                    localValue = values.maxValue;
                }
                if (_this.localRange) {
                    if (!(utils.isNullOrUndefined(localValue[0]) ||
                        utils.isNullOrUndefined(localValue[1])) &&
                        localValue[0] > localValue[1]) {
                        localValue.reverse();
                    }
                    // If the value is null we will take the localMinValue or
                    // localMaxValue instead. Same goes for if the value exceeds the
                    // minValue or maxValue.
                    if (utils.isNullOrUndefined(localValue[0]) ||
                        localValue[0] < _this.localMinValue) {
                        localValue[0] = _this.localMinValue;
                    }
                    else if (utils.isNullOrUndefined(localValue[1]) ||
                        localValue[1] > _this.localMaxValue) {
                        localValue[1] = _this.localMaxValue;
                    }
                    // If the value didn't change, don't trigger the onChange
                    if (localValue[0] === _this.internalValue[0] &&
                        localValue[1] === _this.internalValue[1]) {
                        return;
                    }
                }
                else {
                    if (utils.isNullOrUndefined(localValue)) {
                        localValue = _this.localReversed
                            ? _this.localMinValue
                            : _this.localMaxValue;
                    }
                    else if (localValue < _this.localMinValue) {
                        localValue = _this.localMinValue;
                    }
                    else if (localValue > _this.localMaxValue) {
                        localValue = _this.localMaxValue;
                    }
                    if (_this.localReversed) {
                        localValue = _this.calculateReversedValue(localValue);
                    }
                    // If the value didn't change, don't trigger the onChange
                    if (localValue === _this.internalValue) {
                        return;
                    }
                }
                _this.onChange(localValue);
            });
        };
        InputSliderComponent.prototype.onLoseFocus = function () {
            // Syncing the localValueForm with the actual values
            this.updateLocalValueForm(true);
        };
        InputSliderComponent.prototype.sofFocus = function () {
            var handles = this.inputElement.nativeElement.getElementsByClassName('ant-slider-handle');
            var handle = handles[handles.length - 1];
            handle.focus();
            this.changeDetectorRef.detectChanges();
        };
        InputSliderComponent.prototype.ngOnDestroy = function () {
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
        InputSliderComponent.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        InputSliderComponent.prototype.registerOnTouched = function (fn) {
            this.propagateTouch = fn;
        };
        InputSliderComponent.prototype.writeValue = function (value) {
            this.internalValue = value !== null && value !== void 0 ? value : null;
            this.calculatedValue = this.internalValue;
            this.calculateValue(this.calculatedValue);
            this.updateLocalValueForm();
        };
        InputSliderComponent.prototype.onChange = function (value, isSlider) {
            if (isSlider === void 0) { isSlider = false; }
            if (!this.isDisabled) {
                var newInternalValue = value !== null && value !== void 0 ? value : null;
                if (this.localReversed && !utils.isNullOrUndefined(newInternalValue)) {
                    this.calculatedValue = this.calculateReversedValue(newInternalValue);
                }
                else {
                    this.calculatedValue = newInternalValue;
                }
                if (isSlider) {
                    this.updateLocalValueForm();
                }
                // emit value
                this.changeValue.emit(this.calculatedValue);
                // propagate the change
                if (this.propagateChange) {
                    this.internalValue = newInternalValue;
                    this.propagateChange(this.calculatedValue);
                }
            }
        };
        InputSliderComponent.prototype.onTouch = function (value) {
            this.valueAfterRelease.emit(value);
            if (!this.isDisabled && this.propagateTouch) {
                this.propagateTouch();
            }
        };
        InputSliderComponent.prototype.setDisabledState = function (value) {
            this.isDisabled = value;
        };
        // If the slider needs to be reversed, this will check if all variables needed
        // for the calculation are available. If that is the case, the internal value
        // will be changed to it's correct value.
        InputSliderComponent.prototype.calculateValue = function (value) {
            if (!!value) {
                // it doesn't make sense to reverse a slider if you have a range
                // so this will only support a single value
                if (typeof value === 'number') {
                    if (this.localReversed) {
                        if (!!this.localMaxValue && !!this.localMinValue) {
                            this.internalValue = this.calculateReversedValue(value);
                        }
                    }
                }
            }
        };
        InputSliderComponent.prototype.calculateReversedValue = function (value) {
            return this.localMaxValue + this.localMinValue - value;
        };
        InputSliderComponent.prototype.calculateMarks = function (min, max) {
            var marks = {};
            if (this.marks === 'neither') {
                return marks;
            }
            if (utils.isNumber(min) && (this.marks === 'both' || this.marks === 'min')) {
                // Using nzMarks together with nzMin the mark values are only displayed
                // when the mark matches with the nzMin value as a string.
                // By applying an empty string as mark. They will never match and the mark value is not shown.
                // This is intended as we display the values our self.
                marks[min] = '';
            }
            if (utils.isNumber(max) && (this.marks === 'both' || this.marks === 'max')) {
                // Using nzMarks together with nzMax the mark values are only displayed
                // when the mark matches with the nzMax value as a string.
                // By applying an empty string as mark. They will never match and the mark value is not shown.
                // This is intended as we display the values our self.
                marks[max] = '';
            }
            return marks;
        };
        InputSliderComponent.prototype.updateLocalValueForm = function (emitEvent) {
            if (emitEvent === void 0) { emitEvent = false; }
            var _a, _b;
            if (this.localRange) {
                this.localValueForm.reset({
                    minValue: (_a = this.calculatedValue) === null || _a === void 0 ? void 0 : _a[0],
                    maxValue: (_b = this.calculatedValue) === null || _b === void 0 ? void 0 : _b[1]
                }, { emitEvent: emitEvent });
            }
            else {
                this.localValueForm.reset({
                    maxValue: this.calculatedValue
                }, { emitEvent: emitEvent });
            }
        };
        return InputSliderComponent;
    }());
    exports.InputSliderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sof-input-slider',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "\n    <nz-slider\n      #inputElement\n      [ngModel]=\"internalValue\"\n      [nzRange]=\"localRange\"\n      [nzMin]=\"localMinValue\"\n      [nzMax]=\"localMaxValue\"\n      [nzMarks]=\"nzMarks\"\n      [nzDisabled]=\"isDisabled\"\n      [nzReverse]=\"localReversed\"\n      nzTooltipVisible=\"never\"\n      (ngModelChange)=\"onChange($event, true)\"\n      (nzOnAfterChange)=\"onTouch($event)\"\n    ></nz-slider>\n    <div class=\"marks\">\n      <div>\n        <ng-container *ngIf=\"marks === 'both' || marks === 'min'\">\n          {{ localMinValue | sofLabelFormatFn: localLabelFormatFn }}\n        </ng-container>\n      </div>\n      <div>\n        <ng-container *ngIf=\"marks === 'both' || marks === 'max'\">\n          {{ localMaxValue | sofLabelFormatFn: localLabelFormatFn }}\n        </ng-container>\n      </div>\n    </div>\n    <div\n      class=\"d-flex mt-2\"\n      [class.justify-content-between]=\"localRange\"\n      [class.justify-content-end]=\"!localReversed\"\n    >\n      <sof-input-number\n        *ngIf=\"localRange\"\n        class=\"slider-input\"\n        [formControl]=\"localValueForm.controls.minValue\"\n        [maxFraction]=\"maxFraction\"\n        [isDisabled]=\"isDisabled\"\n        (touch)=\"onLoseFocus()\"\n      ></sof-input-number>\n      <sof-input-number\n        class=\"slider-input\"\n        [formControl]=\"localValueForm.controls.maxValue\"\n        [maxFraction]=\"maxFraction\"\n        [isDisabled]=\"isDisabled\"\n        (touch)=\"onLoseFocus()\"\n      ></sof-input-number>\n    </div>\n  ",
                    providers: [
                        { provide: focus.SOF_FOCUS_COMPONENT, useExisting: InputSliderComponent_1 }
                    ],
                    styles: ["sof-input-slider{display:block}sof-input-slider .current-value-wrapper{display:flex;justify-content:center;align-items:center}sof-input-slider .current-value-wrapper .current-value{padding:.25rem .5rem;border-radius:2px;font-size:.875rem}sof-input-slider .marks{display:flex;justify-content:space-between;font-size:.875rem;color:grey}sof-input-slider nz-slider .ant-slider-with-marks{margin-bottom:10px}sof-input-slider nz-slider .ant-slider-dot,sof-input-slider nz-slider .ant-slider-handle{border-width:1px}sof-input-slider .input-wrapper{width:100%;display:flex;justify-content:space-between;align-items:center}sof-input-slider .slider-input{max-width:40%}sof-input-slider input{text-align:right}"]
                },] }
    ];
    exports.InputSliderComponent.ctorParameters = function () { return [
        { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Host }] },
        { type: core.ChangeDetectorRef },
        { type: forms.FormBuilder }
    ]; };
    exports.InputSliderComponent.propDecorators = {
        isDisabled: [{ type: core.Input }],
        range: [{ type: core.Input }],
        reversed: [{ type: core.Input }],
        marks: [{ type: core.Input }],
        maxFraction: [{ type: core.Input }],
        value: [{ type: core.Input }],
        minValue: [{ type: core.Input }],
        maxValue: [{ type: core.Input }],
        labelFormatFn: [{ type: core.Input }],
        changeValue: [{ type: core.Output }],
        valueAfterRelease: [{ type: core.Output }],
        inputElement: [{ type: core.ViewChild, args: ['inputElement', { read: core.ElementRef },] }]
    };
    exports.InputSliderComponent = InputSliderComponent_1 = __decorate([
        ngxReactivetoolkit.UntilDestroy()
    ], exports.InputSliderComponent);

    var LabelFormatFnPipe = /** @class */ (function () {
        function LabelFormatFnPipe() {
        }
        LabelFormatFnPipe.prototype.transform = function (value, fn) {
            return fn(value);
        };
        return LabelFormatFnPipe;
    }());
    LabelFormatFnPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'sofLabelFormatFn' },] }
    ];

    var InputSliderModule = /** @class */ (function () {
        function InputSliderModule() {
        }
        return InputSliderModule;
    }());
    InputSliderModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        slider.NzSliderModule,
                        forms.ReactiveFormsModule,
                        forms.FormsModule,
                        common.CommonModule,
                        inputNumber.InputNumberModule,
                        inputCurrency.InputCurrencyModule
                    ],
                    declarations: [exports.InputSliderComponent, LabelFormatFnPipe],
                    exports: [exports.InputSliderComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InputSliderModule = InputSliderModule;
    exports.LabelFormatFnPipe = LabelFormatFnPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-input-slider.umd.js.map
