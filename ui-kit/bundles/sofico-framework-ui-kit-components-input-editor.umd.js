(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@sofico-framework/ui-kit/components/form'), require('@sofico-framework/ui-kit/directives/focus'), require('@sofico-framework/utils'), require('ngx-reactivetoolkit'), require('quill'), require('rxjs'), require('rxjs/operators'), require('showdown'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/input-editor', ['exports', '@angular/core', '@angular/forms', '@sofico-framework/ui-kit/components/form', '@sofico-framework/ui-kit/directives/focus', '@sofico-framework/utils', 'ngx-reactivetoolkit', 'quill', 'rxjs', 'rxjs/operators', 'showdown', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['input-editor'] = {}), global.ng.core, global.ng.forms, global['sofico-framework']['ui-kit'].components.form, global['sofico-framework']['ui-kit'].directives.focus, global.utils, global.ngxReactivetoolkit, global.Quill, global.rxjs, global.rxjs.operators, global.showdown, global.ng.common));
}(this, (function (exports, core, forms, form, focus, utils, ngxReactivetoolkit, Quill, rxjs, operators, showdown, common) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Quill__default = /*#__PURE__*/_interopDefaultLegacy(Quill);

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

    var InputEditorComponent_1;
    exports.InputEditorComponent = InputEditorComponent_1 = /** @class */ (function () {
        function InputEditorComponent(form, ngControl) {
            this.form = form;
            this.ngControl = ngControl;
            this.quillAvailableSub$ = new rxjs.ReplaySubject(1);
            this.writeValueSub$ = new rxjs.ReplaySubject(1);
            // Determine when a change must be sent to the consumer.
            // See onChange() for more information.
            this.skipChange = false;
            /**
             * Determines the height of the control.
             */
            this.height = '150px';
            /**
             * Determines if the in- and output of this formcontrol should be markdown
             */
            this.markdown = false;
            /**
             * EventEmitter that will emit the value when changed.
             */
            this.changeValue = new core.EventEmitter();
            this.markdownConverter = new showdown.Converter();
            if (ngControl) {
                ngControl.valueAccessor = this;
            }
        }
        Object.defineProperty(InputEditorComponent.prototype, "value", {
            /**
             * Determines the value of the control.
             */
            set: function (value) {
                // Known issue: when setting the value manually the cursor of the editor starts at the front again.
                this.writeValue(value);
            },
            enumerable: false,
            configurable: true
        });
        InputEditorComponent.prototype.sofFocus = function () {
            this.editorContainerViewChild.nativeElement
                .getElementsByClassName('ql-editor')[0]
                .focus();
        };
        InputEditorComponent.prototype.ngOnDestroy = function () {
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
        InputEditorComponent.prototype.ngOnInit = function () {
            var _this = this;
            // Only allow writing of values when quill is defined.
            // As it's created in ngAfterViewInit it could be that we write the value to early.
            this.quillAvailableSub$
                .pipe(operators.take(1), operators.mergeMap(function () { return _this.writeValueSub$.pipe(operators.distinctUntilChanged()); }), ngxReactivetoolkit.takeUntilDestroy(this))
                .subscribe(function (value) {
                var _a, _b;
                // We don't want to skip a value when there isn't an initial value set
                // through writevalue. If we don't do this, the first change in the
                // editor will be ignored.
                if (!utils.isNullOrUndefined(value) && value.trim() !== '') {
                    _this.skipChange = true;
                }
                if (_this.markdown) {
                    _this.quill.root.innerHTML = (_b = (_a = _this.markdownConverter
                        .makeHtml(value)) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, '').replace(/<!-- -->/g, '')) !== null && _b !== void 0 ? _b : '';
                }
                else {
                    _this.quill.root.innerHTML = value !== null && value !== void 0 ? value : '';
                }
            });
        };
        InputEditorComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            var toolbar;
            if (this.markdown) {
                toolbar = [
                    [{ header: [1, 2, 3, false] }],
                    ['bold', 'italic'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link'],
                    ['clean']
                ];
            }
            else {
                toolbar = [
                    [{ header: [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ color: [] }, { background: [] }, { align: [] }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link'],
                    ['clean']
                ];
            }
            this.quill = new Quill__default['default'](this.editorContainerViewChild.nativeElement, {
                modules: {
                    toolbar: toolbar
                },
                theme: 'snow',
                readOnly: this.isDisabled // Same as disable or enable.
            });
            // Required for applications with Ivy enabled, and depending on uikit
            // https://stackoverflow.com/a/66712723
            var quillImportAttributorsClassBackground = 'attributors/class/background';
            var quillImportAttributorsClassColor = 'attributors/class/color';
            var BackgroundClass = Quill__default['default'].import(quillImportAttributorsClassBackground);
            var ColorClass = Quill__default['default'].import(quillImportAttributorsClassColor);
            Quill__default['default'].register(BackgroundClass, true);
            Quill__default['default'].register(ColorClass, true);
            this.quill.on('text-change', function () {
                var _a, _b;
                // When writeValue() is called the text-change is triggered.
                // We don't want to inform the consumer about a change they made them self.
                if (!_this.skipChange) {
                    // Quill editor always has a "\n" when there is no value.
                    // Multiple line breaks can be active, even though there isn't any text.
                    // Therefore replace them all.
                    var text = (_b = (_a = _this.quill.getText()) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, '')) !== null && _b !== void 0 ? _b : '';
                    /**
                     * Quill would sometimes create an empty span element with the class
                     * 'ql-cursor'. This is an quill specific thing that it uses internally.
                     * This span has no use to be saved. It also gave problems when
                     * converting to markdown. This piece of code removes these spans.
                     * Found this solution on: https://github.com/quilljs/quill/issues/903
                     */
                    var tempCont = document.createElement('div');
                    var tempEditor = new Quill__default['default'](tempCont);
                    tempEditor.setContents(_this.quill.getContents());
                    var newHtml = tempEditor.root.innerHTML;
                    _this.onChange(text !== '' ? newHtml : '');
                }
                else {
                    _this.skipChange = false;
                }
            });
            // Quill doesn't have a blur event,
            // so we listen on the internal html tag where the user enters his value.
            // It's not possible to listen on "selection-change" as it triggers not only after the user leaves the control.
            // https://github.com/quilljs/quill/issues/1680
            this.quill.root.addEventListener('blur', function () {
                _this.onTouch();
            });
            this.quillAvailableSub$.next(true);
        };
        InputEditorComponent.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        InputEditorComponent.prototype.registerOnTouched = function (fn) {
            this.propagateTouch = fn;
        };
        InputEditorComponent.prototype.writeValue = function (value) {
            this.writeValueSub$.next(value);
        };
        InputEditorComponent.prototype.onChange = function (value) {
            if (!this.isDisabled) {
                var newInternalValue = void 0;
                if (this.markdown && !utils.isNullOrUndefined(value)) {
                    /**
                     * When translating to markdown the <br> tags don't get translated so
                     * they need to be removed.
                     */
                    newInternalValue = this.markdownConverter
                        .makeMarkdown(value)
                        .replace(/<br>\n\n/g, '');
                }
                else {
                    newInternalValue = value !== null && value !== void 0 ? value : null;
                }
                // emit value
                this.changeValue.emit(newInternalValue);
                // propagate the change
                if (this.propagateChange) {
                    this.propagateChange(newInternalValue);
                }
            }
        };
        InputEditorComponent.prototype.onTouch = function () {
            if (!this.isDisabled && this.propagateTouch) {
                this.propagateTouch();
            }
        };
        InputEditorComponent.prototype.setDisabledState = function (value) {
            // Quill is set after view init, it's possible it doesnt exist yet.
            if (this.quill) {
                this.quill.enable(!value);
            }
            this.isDisabled = value;
        };
        return InputEditorComponent;
    }());
    exports.InputEditorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sof-input-editor',
                    template: "\n    <div\n      class=\"editor-wrapper\"\n      [class.is-invalid]=\"\n        invalid ||\n        (ngControl?.invalid && (ngControl?.touched || form?.submitted))\n      \"\n    >\n      <div #editorContainer [style.height]=\"height\"></div>\n    </div>\n  ",
                    providers: [
                        { provide: focus.SOF_FOCUS_COMPONENT, useExisting: InputEditorComponent_1 }
                    ],
                    styles: [":host{display:block}"]
                },] }
    ];
    exports.InputEditorComponent.ctorParameters = function () { return [
        { type: form.FormComponent, decorators: [{ type: core.Optional }] },
        { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Host }] }
    ]; };
    exports.InputEditorComponent.propDecorators = {
        value: [{ type: core.Input }],
        isDisabled: [{ type: core.Input }],
        invalid: [{ type: core.Input }],
        height: [{ type: core.Input }],
        markdown: [{ type: core.Input }],
        changeValue: [{ type: core.Output }],
        editorContainerViewChild: [{ type: core.ViewChild, args: ['editorContainer', { read: core.ElementRef, static: true },] }]
    };
    exports.InputEditorComponent = InputEditorComponent_1 = __decorate([
        ngxReactivetoolkit.UntilDestroy()
    ], exports.InputEditorComponent);

    var InputEditorModule = /** @class */ (function () {
        function InputEditorModule() {
        }
        return InputEditorModule;
    }());
    InputEditorModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [exports.InputEditorComponent],
                    exports: [exports.InputEditorComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InputEditorModule = InputEditorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-input-editor.umd.js.map
