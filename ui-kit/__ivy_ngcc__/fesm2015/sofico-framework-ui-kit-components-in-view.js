import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChild, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';

const _c0 = ["targetRef"];
const _c1 = ["*"];
class InViewComponent {
    constructor() {
        this.scrollableRef = null;
        this.preloadHeight = 0;
        this.inView = new EventEmitter();
    }
    ngOnInit() {
        // We should only emit the most recent event
        const fn = (entries) => {
            var _a, _b;
            return this.inView.emit((_b = (_a = entries.sort((a, b) => (a.time > b.time ? -1 : 1))) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.isIntersecting);
        };
        this.intersectionObserver = new IntersectionObserver(fn, {
            root: this.scrollableRef,
            rootMargin: `0px 0px ${this.preloadHeight}px 0px`
        });
        this.intersectionObserver.observe(this.targetRef.nativeElement);
    }
    ngOnDestroy() {
        this.intersectionObserver.disconnect();
    }
}
InViewComponent.ɵfac = function InViewComponent_Factory(t) { return new (t || InViewComponent)(); };
InViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InViewComponent, selectors: [["sof-in-view"]], viewQuery: function InViewComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 3, ElementRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.targetRef = _t.first);
    } }, inputs: { scrollableRef: "scrollableRef", preloadHeight: "preloadHeight" }, outputs: { inView: "inView" }, ngContentSelectors: _c1, decls: 4, vars: 0, consts: [[1, "in-slice"], ["targetRef", ""]], template: function InViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵelement(2, "div", null, 1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%]   .in-slice[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap}[_nghost-%COMP%]   .in-slice[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:1px}[_nghost-%COMP%]   .in-slice[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .in-slice[_ngcontent-%COMP%]:before{content:\"\";width:100%}"], changeDetection: 0 });
InViewComponent.propDecorators = {
    scrollableRef: [{ type: Input }],
    preloadHeight: [{ type: Input }],
    inView: [{ type: Output }],
    targetRef: [{ type: ViewChild, args: ['targetRef', { read: ElementRef, static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InViewComponent, [{
        type: Component,
        args: [{
                selector: 'sof-in-view',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-content></ng-content>
    <div class="in-slice">
      <div #targetRef></div>
    </div>
  `,
                styles: [":host .in-slice{display:flex;flex-wrap:nowrap}:host .in-slice div{width:1px}:host .in-slice:after,:host .in-slice:before{content:\"\";width:100%}"]
            }]
    }], function () { return []; }, { scrollableRef: [{
            type: Input
        }], preloadHeight: [{
            type: Input
        }], inView: [{
            type: Output
        }], targetRef: [{
            type: ViewChild,
            args: ['targetRef', { read: ElementRef, static: true }]
        }] }); })();

class InViewModule {
}
InViewModule.ɵfac = function InViewModule_Factory(t) { return new (t || InViewModule)(); };
InViewModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InViewModule });
InViewModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InViewModule, { declarations: function () { return [InViewComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [InViewComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InViewModule, [{
        type: NgModule,
        args: [{
                declarations: [InViewComponent],
                exports: [InViewComponent],
                imports: [CommonModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { InViewComponent, InViewModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-in-view.js.map