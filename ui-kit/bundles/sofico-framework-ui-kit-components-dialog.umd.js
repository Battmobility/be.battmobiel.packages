(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/core'), require('@angular/cdk/a11y'), require('@angular/common'), require('@ngx-translate/core'), require('@sofico-framework/ui-kit/components/alert'), require('@sofico-framework/ui-kit/components/button'), require('@sofico-framework/ui-kit/components/svg-icon'), require('@sofico-framework/ui-kit/directives/focus'), require('@sofico-framework/utils'), require('ngx-reactivetoolkit'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/dialog', ['exports', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/core', '@angular/cdk/a11y', '@angular/common', '@ngx-translate/core', '@sofico-framework/ui-kit/components/alert', '@sofico-framework/ui-kit/components/button', '@sofico-framework/ui-kit/components/svg-icon', '@sofico-framework/ui-kit/directives/focus', '@sofico-framework/utils', 'ngx-reactivetoolkit', 'rxjs', 'rxjs/operators', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.dialog = {}), global.ng.cdk.overlay, global.ng.cdk.portal, global.ng.core, global.ng.cdk.a11y, global.ng.common, global.core, global['sofico-framework']['ui-kit'].components.alert, global['sofico-framework']['ui-kit'].components.button, global['sofico-framework']['ui-kit'].components['svg-icon'], global['sofico-framework']['ui-kit'].directives.focus, global.utils, global.ngxReactivetoolkit, global.rxjs, global.rxjs.operators, global.ng.common.http));
}(this, (function (exports, i1, portal, i0, a11y, common, core, alert, button, svgIcon, focus, utils, ngxReactivetoolkit, rxjs, operators, http) { 'use strict';

    var DialogConfigService = /** @class */ (function () {
        function DialogConfigService(overlay) {
            this.overlay = overlay;
            this.positionStrategy = this.overlay
                .position()
                .global()
                .centerHorizontally()
                .centerVertically();
            this.overlayConfig = {
                maxHeight: 'auto',
                height: 'auto',
                width: '600px',
                hasBackdrop: true,
                scrollStrategy: this.overlay.scrollStrategies.block(),
                positionStrategy: this.positionStrategy
            };
        }
        return DialogConfigService;
    }());
    DialogConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DialogConfigService_Factory() { return new DialogConfigService(i0.ɵɵinject(i1.Overlay)); }, token: DialogConfigService, providedIn: "root" });
    DialogConfigService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    DialogConfigService.ctorParameters = function () { return [
        { type: i1.Overlay }
    ]; };

    /**
     * This component is the inline template way of working with dialogs. This means it can be
     * consumed by the `sof-dialog` selector.
     * It has a placeholder for the body called `sof-dialog-body` and a placeholder
     * for the footer called `sof-dialog-footer`
     */
    var DialogComponent = /** @class */ (function () {
        function DialogComponent(overlay, dialogConfigService) {
            this.overlay = overlay;
            this.dialogConfigService = dialogConfigService;
            /**
             * The size of the dialog.
             * Can be sm - md - lg - xl.
             * sm by default
             */
            this.size = 'sm';
            /**
             * The size of the dialog header icon.
             * 16 by default
             */
            this.sizeHeaderIcon = '16';
            /**
             * Output that is triggered when the close icon is clicked
             */
            this.destroy = new i0.EventEmitter();
        }
        DialogComponent.prototype.ngOnInit = function () {
            switch (this.size) {
                case 'sm':
                    this.dialogConfigService.overlayConfig.width = '600px';
                    break;
                case 'md':
                    this.dialogConfigService.overlayConfig.width = '800px';
                    break;
                case 'lg':
                    this.dialogConfigService.overlayConfig.width = '1000px';
                    break;
                case 'xl':
                    this.dialogConfigService.overlayConfig.width = '1200px';
                    break;
                default:
                    this.dialogConfigService.overlayConfig.width = '600px';
            }
            this.overlayRef = this.overlay.create(this.dialogConfigService.overlayConfig);
        };
        DialogComponent.prototype.ngAfterViewInit = function () {
            this.overlayRef.attach(this.portal);
        };
        DialogComponent.prototype.ngOnDestroy = function () {
            this.overlayRef.detach();
            this.overlayRef.dispose();
        };
        return DialogComponent;
    }());
    DialogComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'sof-dialog',
                    template: "\n    <ng-template cdkPortal>\n      <sof-dialog-inner\n        [icon]=\"icon\"\n        [sizeHeaderIcon]=\"sizeHeaderIcon\"\n        (destroy)=\"destroy.emit()\"\n        [headerLabel]=\"headerLabel\"\n        [hideDestroy]=\"hideDestroy\"\n      >\n        <ng-content sof-dialog-body select=\"[sof-dialog-body]\"></ng-content>\n        <ng-content sof-dialog-footer select=\"[sof-dialog-footer]\"></ng-content>\n      </sof-dialog-inner>\n    </ng-template>\n  ",
                    styles: [""]
                },] }
    ];
    DialogComponent.ctorParameters = function () { return [
        { type: i1.Overlay },
        { type: DialogConfigService }
    ]; };
    DialogComponent.propDecorators = {
        portal: [{ type: i0.ViewChild, args: [portal.CdkPortal,] }],
        headerLabel: [{ type: i0.Input }],
        size: [{ type: i0.Input }],
        sizeHeaderIcon: [{ type: i0.Input }],
        icon: [{ type: i0.Input }],
        hideDestroy: [{ type: i0.Input }],
        destroy: [{ type: i0.Output }]
    };

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

    var AcknowledgeDialogComponent = /** @class */ (function () {
        function AcknowledgeDialogComponent() {
            this.acknowledge = new i0.EventEmitter();
        }
        return AcknowledgeDialogComponent;
    }());
    AcknowledgeDialogComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'sof-acknowledge-dialog',
                    template: "\n    <sof-dialog-inner\n      (destroy)=\"acknowledge.emit()\"\n      [headerLabel]=\"\n        disableHeaderLabelTranslation\n          ? headerLabel\n          : (tc + '.' + headerLabel | translate)\n      \"\n    >\n      <div sof-dialog-body>\n        <div *ngFor=\"let error of actingErrorMessages$ | async\" class=\"mb-3\">\n          <sof-alert type=\"danger\">\n            {{\n              error?.translation\n                ? error?.translation\n                : (tc + '.' + error?.message | translate: error?.messageParams)\n            }}\n          </sof-alert>\n        </div>\n        {{\n          disableBodyLabelTranslation\n            ? bodyLabel\n            : (tc + '.' + bodyLabel | translate)\n        }}\n      </div>\n      <div sof-dialog-footer class=\"button-wrapper\">\n        <button\n          sofButton\n          sofFocus\n          class=\"btn btn-primary btn-min-width order-1\"\n          [loading]=\"acting$ | async\"\n          [disabled]=\"acting$ | async\"\n          (click)=\"acknowledge.emit()\"\n        >\n          {{ tc + '.' + acknowledgeLabel | translate }}\n        </button>\n      </div>\n    </sof-dialog-inner>\n  ",
                    styles: [":host{display:flex;width:100%}.button-wrapper{display:flex;justify-content:flex-end;align-items:center;margin-top:1rem;margin-bottom:1rem}.button-wrapper button{margin-right:.25rem}.button-wrapper button:first-of-type{margin-right:0}@media (max-width:575px){.button-wrapper{flex-direction:column;width:100%}.button-wrapper button{width:100%;margin-bottom:.5rem}.button-wrapper button:first-of-type{margin-bottom:0}}"]
                },] }
    ];
    AcknowledgeDialogComponent.propDecorators = {
        headerLabel: [{ type: i0.Input }],
        acknowledgeLabel: [{ type: i0.Input }],
        tc: [{ type: i0.Input }],
        bodyLabel: [{ type: i0.Input }],
        disableHeaderLabelTranslation: [{ type: i0.Input }],
        disableBodyLabelTranslation: [{ type: i0.Input }],
        acknowledge: [{ type: i0.Output }]
    };
    __decorate([
        utils.Acting()
    ], AcknowledgeDialogComponent.prototype, "acting$", void 0);
    __decorate([
        utils.ActingErrorMessages()
    ], AcknowledgeDialogComponent.prototype, "actingErrorMessages$", void 0);

    var ConfirmDialogComponent = /** @class */ (function () {
        function ConfirmDialogComponent() {
            this.decline = new i0.EventEmitter();
            this.confirm = new i0.EventEmitter();
        }
        return ConfirmDialogComponent;
    }());
    ConfirmDialogComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'sof-confirm-dialog',
                    template: "\n    <sof-dialog-inner\n      (destroy)=\"decline.emit()\"\n      [headerLabel]=\"tc + '.' + headerLabel | translate: labelParams\"\n    >\n      <div sof-dialog-body>\n        <div *ngFor=\"let error of actingErrorMessages$ | async\" class=\"mb-3\">\n          <sof-alert type=\"danger\">\n            {{\n              error?.translation\n                ? error?.translation\n                : (tc + '.' + error?.message | translate: error?.messageParams)\n            }}\n          </sof-alert>\n        </div>\n        {{ tc + '.' + bodyLabel | translate: labelParams }}\n      </div>\n      <div sof-dialog-footer class=\"button-wrapper\">\n        <ng-container *ngIf=\"primaryAction === 'confirm'; else otherAction\">\n          <button\n            sofButton\n            sofFocus\n            class=\"btn btn-primary btn-min-width order-1\"\n            (click)=\"confirm.emit()\"\n            [loading]=\"!disableActing && (acting$ | async)\"\n            [disabled]=\"!disableActing && (acting$ | async)\"\n          >\n            {{ tc + '.' + confirmLabel | translate }}\n          </button>\n          <button\n            sofButton\n            class=\"btn btn-outline-primary btn-min-width mr-2 order-0\"\n            (click)=\"decline.emit()\"\n            [disabled]=\"!disableActing && (acting$ | async)\"\n          >\n            {{ tc + '.' + cancelLabel | translate }}\n          </button>\n        </ng-container>\n        <ng-template #otherAction>\n          <button\n            sofButton\n            sofFocus\n            class=\"btn btn-primary btn-min-width order-1\"\n            (click)=\"decline.emit()\"\n            [disabled]=\"acting$ | async\"\n          >\n            {{ tc + '.' + cancelLabel | translate }}\n          </button>\n          <button\n            sofButton\n            class=\"btn btn-outline-primary btn-min-width mr-2 order-0\"\n            (click)=\"confirm.emit()\"\n            [loading]=\"!disableActing && (acting$ | async)\"\n            [disabled]=\"!disableActing && (acting$ | async)\"\n          >\n            {{ tc + '.' + confirmLabel | translate }}\n          </button>\n        </ng-template>\n      </div>\n    </sof-dialog-inner>\n  ",
                    styles: [":host{display:flex;width:100%}.button-wrapper{display:flex;justify-content:flex-end;align-items:center}.button-wrapper button{margin-right:.25rem}.button-wrapper button:first-of-type{margin-right:0}@media (max-width:575px){.button-wrapper{flex-direction:column;width:100%}.button-wrapper button{width:100%;margin-right:0;margin-bottom:.5rem}.button-wrapper button:first-of-type{margin-bottom:0}}"]
                },] }
    ];
    ConfirmDialogComponent.propDecorators = {
        headerLabel: [{ type: i0.Input }],
        cancelLabel: [{ type: i0.Input }],
        confirmLabel: [{ type: i0.Input }],
        disableActing: [{ type: i0.Input }],
        tc: [{ type: i0.Input }],
        bodyLabel: [{ type: i0.Input }],
        primaryAction: [{ type: i0.Input }],
        labelParams: [{ type: i0.Input }],
        decline: [{ type: i0.Output }],
        confirm: [{ type: i0.Output }]
    };
    __decorate([
        utils.Acting()
    ], ConfirmDialogComponent.prototype, "acting$", void 0);
    __decorate([
        utils.ActingErrorMessages()
    ], ConfirmDialogComponent.prototype, "actingErrorMessages$", void 0);

    exports.DialogInnerComponent = /** @class */ (function () {
        function DialogInnerComponent(documentRefService) {
            this.documentRefService = documentRefService;
            this.sizeHeaderIcon = '16';
            this.destroy = new i0.EventEmitter();
        }
        DialogInnerComponent.prototype.ngOnInit = function () {
            var _this = this;
            rxjs.fromEvent(this.documentRefService.nativeDocument, 'keydown')
                .pipe(operators.filter(function (event) { return event.key === 'Escape'; }), ngxReactivetoolkit.takeUntilDestroy(this))
                .subscribe(function () {
                if (!_this.hideDestroy) {
                    _this.destroy.emit();
                }
            });
        };
        DialogInnerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            // We don't want the close button focused when opening a dialog.
            // So we remove the focus from the close button after it was been focused by the cdkTrapFocusAutoCapture directive.
            // In order to guarantee the order in which these are executed the setTimeout is added.
            setTimeout(function () { var _a, _b; return (_b = (_a = _this.closeButtonRef) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.blur(); }, 0);
        };
        DialogInnerComponent.prototype.ngOnDestroy = function () { };
        return DialogInnerComponent;
    }());
    exports.DialogInnerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'sof-dialog-inner',
                    template: "\n    <div class=\"sof-dialog-inner-wrapper\" cdkTrapFocus cdkTrapFocusAutoCapture>\n      <div\n        class=\"sof-dialog-inner-wrapper-header\"\n        *ngIf=\"headerLabel || !hideDestroy\"\n      >\n        <div class=\"d-flex flex-row\">\n          <sof-svg-icon\n            [icon]=\"icon\"\n            [size]=\"sizeHeaderIcon\"\n            *ngIf=\"icon\"\n            class=\"d-flex mr-3 my-auto\"\n          ></sof-svg-icon>\n          <h1>{{ headerLabel }}</h1>\n        </div>\n        <button class=\"btn btn-plain\" (click)=\"destroy.emit()\" #closeButton>\n          <sof-svg-icon *ngIf=\"!hideDestroy\" icon=\"icon-cross\"></sof-svg-icon>\n        </button>\n      </div>\n      <div\n        class=\"sof-dialog-inner-wrapper-body\"\n        [class.padding-top]=\"!(headerLabel || !hideDestroy)\"\n        [class.padding-bottom]=\"footer?.childNodes?.length === 0\"\n      >\n        <ng-content select=\"[sof-dialog-body]\"></ng-content>\n      </div>\n      <div\n        [class.sof-dialog-inner-wrapper-footer]=\"footer?.childNodes?.length > 0\"\n        #footer\n      >\n        <ng-content select=\"[sof-dialog-footer]\"></ng-content>\n      </div>\n    </div>\n  ",
                    styles: [":host{display:flex;width:100%}.sof-dialog-inner-wrapper{flex-direction:column;display:flex;width:100%;background:#fff;box-shadow:0 4px 4px hsla(0,0%,76.9%,.6)}.sof-dialog-inner-wrapper-header{padding:20px 20px 1rem;display:flex;justify-content:space-between;align-items:flex-start}.sof-dialog-inner-wrapper-header h2{margin:0}.sof-dialog-inner-wrapper-body{overflow-y:auto;flex:1;width:100%;padding:0 20px}.sof-dialog-inner-wrapper-body.padding-top{padding-top:20px}.sof-dialog-inner-wrapper-body.padding-bottom{padding-bottom:20px}.sof-dialog-inner-wrapper-footer{padding:1rem 20px 20px;display:flex;justify-content:flex-end;align-items:center}"]
                },] }
    ];
    exports.DialogInnerComponent.ctorParameters = function () { return [
        { type: utils.DocumentRefService }
    ]; };
    exports.DialogInnerComponent.propDecorators = {
        headerLabel: [{ type: i0.Input }],
        hideDestroy: [{ type: i0.Input }],
        icon: [{ type: i0.Input }],
        sizeHeaderIcon: [{ type: i0.Input }],
        destroy: [{ type: i0.Output }],
        closeButtonRef: [{ type: i0.ViewChild, args: ['closeButton',] }]
    };
    exports.DialogInnerComponent = __decorate([
        ngxReactivetoolkit.UntilDestroy()
    ], exports.DialogInnerComponent);

    var InteractiveWarningDialogComponent = /** @class */ (function () {
        function InteractiveWarningDialogComponent() {
            this.decline = new i0.EventEmitter();
            this.confirm = new i0.EventEmitter();
        }
        return InteractiveWarningDialogComponent;
    }());
    InteractiveWarningDialogComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'sof-interactive-warning-dialog',
                    template: "\n    <sof-dialog-inner\n      (destroy)=\"decline.emit()\"\n      [headerLabel]=\"tc + '.INTERACTIVE-WARNING-HEADER' | translate\"\n    >\n      <div sof-dialog-body>\n        <div class=\"mb-3\" *ngFor=\"let error of actingErrorMessages$ | async\">\n          <sof-alert type=\"danger\">\n            {{\n              error?.translation\n                ? error?.translation\n                : (tc + '.' + error?.message | translate: error?.messageParams)\n            }}\n          </sof-alert>\n        </div>\n        {{ tc + '.INTERACTIVE-WARNING-BODY' | translate }}\n        <ul>\n          <li *ngFor=\"let error of errors\">{{ error }}</li>\n        </ul>\n      </div>\n      <div\n        sof-dialog-footer\n        class=\"d-flex justify-content-end align-items-center\"\n      >\n        <button\n          sofButton\n          sofFocus\n          class=\"btn btn-primary btn-min-width order-1\"\n          (click)=\"confirm.emit()\"\n          [loading]=\"acting$ | async\"\n          [disabled]=\"acting$ | async\"\n        >\n          {{ tc + '.CONTINUE' | translate }}\n        </button>\n        <button\n          sofButton\n          class=\"btn btn-outline-primary btn-min-width mr-2 order-0\"\n          (click)=\"decline.emit()\"\n          [disabled]=\"acting$ | async\"\n        >\n          {{ tc + '.CANCEL' | translate }}\n        </button>\n      </div>\n    </sof-dialog-inner>\n  ",
                    styles: [":host{display:flex;width:100%}.button-wrapper{display:flex;justify-content:flex-end;align-items:center}.button-wrapper button{margin-right:.25rem}.button-wrapper button:first-of-type{margin-right:0}@media (max-width:575px){.button-wrapper{flex-direction:column;width:100%}.button-wrapper button{width:100%;margin-right:0;margin-bottom:.5rem}.button-wrapper button:first-of-type{margin-bottom:0}}"]
                },] }
    ];
    InteractiveWarningDialogComponent.propDecorators = {
        errors: [{ type: i0.Input }],
        tc: [{ type: i0.Input }],
        bodyLabel: [{ type: i0.Input }],
        decline: [{ type: i0.Output }],
        confirm: [{ type: i0.Output }]
    };
    __decorate([
        utils.Acting()
    ], InteractiveWarningDialogComponent.prototype, "acting$", void 0);
    __decorate([
        utils.ActingErrorMessages()
    ], InteractiveWarningDialogComponent.prototype, "actingErrorMessages$", void 0);

    // providedIn: root, can't be used as the entryComponents registered inside the dialogService might be inside a lazy loaded module
    // this has consequence that the DialogService will never be able to find a ConfirmDialogComponent as they live in a different injector,
    // the solution is to provide the service inside the DialogService
    // NOTE: When you make use of DialogService don't forget to import DialogModule in your *.module.ts file
    var DialogService = /** @class */ (function () {
        function DialogService(injector, overlay, dialogConfigService) {
            this.injector = injector;
            this.overlay = overlay;
            this.dialogConfigService = dialogConfigService;
        }
        DialogService.prototype.handleInteractiveFlow = function (initial$, postApproval$, tc) {
            var _this = this;
            var initialRequest$ = initial$.pipe(operators.catchError(function (error) { return rxjs.of(error); }), operators.share());
            var intialResponse$ = initialRequest$.pipe(operators.filter(function (v) { return !(v instanceof http.HttpErrorResponse); }));
            var interactiveApprovalResponse$ = initialRequest$.pipe(operators.filter(function (error) {
                var _a;
                return error instanceof http.HttpErrorResponse && ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.isInteractiveWarning);
            }), operators.switchMap(function (error) {
                var modal = _this.openInteractiveWarning(tc, error);
                return modal.confirm$.pipe(operators.switchMap(function () { return postApproval$; }), operators.finalize(function () { return modal.destroy(); }));
            }));
            return rxjs.merge(intialResponse$, interactiveApprovalResponse$);
        };
        DialogService.prototype.openInteractiveWarning = function (tc, error) {
            var _a, _b, _c, _d;
            var containerPortal = new portal.ComponentPortal(InteractiveWarningDialogComponent, null, this.injector);
            var overlayRef = this.overlay.create(this.dialogConfigService.overlayConfig);
            var componentRef = overlayRef.attach(containerPortal);
            componentRef.instance.tc = tc;
            componentRef.instance.errors = ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) ? [(_c = (_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.translation]
                : (_d = error === null || error === void 0 ? void 0 : error.error) === null || _d === void 0 ? void 0 : _d.messages.map(function (v) { return v === null || v === void 0 ? void 0 : v.translation; });
            componentRef.instance.decline.subscribe(function () {
                overlayRef.detach();
                overlayRef.dispose();
            });
            return {
                confirm$: componentRef.instance.confirm.asObservable(),
                decline$: componentRef.instance.decline.asObservable(),
                destroy: function () {
                    overlayRef.detach();
                    overlayRef.dispose();
                }
            };
        };
        DialogService.prototype.openConfirmModal = function (tc, headerLabel, bodyLabel, cancelLabel, confirmLabel, primaryAction, labelParams, disableActing) {
            if (primaryAction === void 0) { primaryAction = 'confirm'; }
            if (labelParams === void 0) { labelParams = {}; }
            if (disableActing === void 0) { disableActing = false; }
            var containerPortal = new portal.ComponentPortal(ConfirmDialogComponent, null, this.injector);
            var overlayRef = this.overlay.create(this.dialogConfigService.overlayConfig);
            var componentRef = overlayRef.attach(containerPortal);
            componentRef.instance.tc = tc;
            componentRef.instance.headerLabel = headerLabel;
            componentRef.instance.bodyLabel = bodyLabel;
            componentRef.instance.cancelLabel = cancelLabel;
            componentRef.instance.confirmLabel = confirmLabel;
            componentRef.instance.primaryAction = primaryAction;
            componentRef.instance.labelParams = labelParams;
            componentRef.instance.disableActing = disableActing;
            componentRef.instance.decline.subscribe(function () {
                overlayRef.detach();
                overlayRef.dispose();
            });
            return {
                confirm$: componentRef.instance.confirm.asObservable(),
                decline$: componentRef.instance.decline.asObservable(),
                destroy: function () {
                    overlayRef.detach();
                    overlayRef.dispose();
                }
            };
        };
        DialogService.prototype.openAcknowledgeModal = function (tc, headerLabel, bodyLabel, acknowledgeLabel, disableHeaderLabelTranslation, disableBodyLabelTranslation) {
            if (disableHeaderLabelTranslation === void 0) { disableHeaderLabelTranslation = false; }
            if (disableBodyLabelTranslation === void 0) { disableBodyLabelTranslation = false; }
            var containerPortal = new portal.ComponentPortal(AcknowledgeDialogComponent, null, this.injector);
            var overlayRef = this.overlay.create(this.dialogConfigService.overlayConfig);
            var componentRef = overlayRef.attach(containerPortal);
            componentRef.instance.tc = tc;
            componentRef.instance.headerLabel = headerLabel;
            componentRef.instance.bodyLabel = bodyLabel;
            componentRef.instance.disableHeaderLabelTranslation = disableHeaderLabelTranslation;
            componentRef.instance.disableBodyLabelTranslation = disableBodyLabelTranslation;
            componentRef.instance.acknowledgeLabel = acknowledgeLabel;
            componentRef.instance.acknowledge.subscribe(function () {
                overlayRef.detach();
                overlayRef.dispose();
            });
            return {
                acknowledge$: componentRef.instance.acknowledge.asObservable(),
                destroy: function () {
                    overlayRef.detach();
                    overlayRef.dispose();
                }
            };
        };
        return DialogService;
    }());
    DialogService.decorators = [
        { type: i0.Injectable }
    ];
    DialogService.ctorParameters = function () { return [
        { type: i0.Injector },
        { type: i1.Overlay },
        { type: DialogConfigService }
    ]; };

    var DialogModule = /** @class */ (function () {
        function DialogModule() {
        }
        return DialogModule;
    }());
    DialogModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [
                        DialogComponent,
                        exports.DialogInnerComponent,
                        ConfirmDialogComponent,
                        AcknowledgeDialogComponent,
                        InteractiveWarningDialogComponent
                    ],
                    exports: [
                        DialogComponent,
                        exports.DialogInnerComponent,
                        ConfirmDialogComponent,
                        AcknowledgeDialogComponent,
                        InteractiveWarningDialogComponent
                    ],
                    imports: [
                        common.CommonModule,
                        portal.PortalModule,
                        i1.OverlayModule,
                        svgIcon.SvgIconModule,
                        core.TranslateModule,
                        button.ButtonModule,
                        alert.AlertModule,
                        a11y.A11yModule,
                        focus.FocusModule
                    ],
                    providers: [DialogService]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AcknowledgeDialogComponent = AcknowledgeDialogComponent;
    exports.ConfirmDialogComponent = ConfirmDialogComponent;
    exports.DialogComponent = DialogComponent;
    exports.DialogConfigService = DialogConfigService;
    exports.DialogModule = DialogModule;
    exports.DialogService = DialogService;
    exports.InteractiveWarningDialogComponent = InteractiveWarningDialogComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-dialog.umd.js.map
