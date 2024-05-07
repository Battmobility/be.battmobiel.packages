import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
class LoadingComponent {
    constructor() {
        this.size = 'md';
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LoadingComponent, selectors: [["sof-loading"]], inputs: { size: "size" }, decls: 2, vars: 3, consts: [[1, "text-center"], ["role", "status"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("spinner-border spinner-border-", ctx.size, "");
    } }, styles: [""] });
LoadingComponent.propDecorators = {
    size: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LoadingComponent, [{
        type: Component,
        args: [{
                selector: 'sof-loading',
                template: `
    <div class="text-center">
      <div class="spinner-border spinner-border-{{ size }}" role="status"></div>
    </div>
  `,
                styles: [""]
            }]
    }], function () { return []; }, { size: [{
            type: Input
        }] }); })();

class LoadingModule {
}
LoadingModule.ɵfac = function LoadingModule_Factory(t) { return new (t || LoadingModule)(); };
LoadingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LoadingModule });
LoadingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LoadingModule, { declarations: function () { return [LoadingComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [LoadingComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LoadingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [LoadingComponent],
                exports: [LoadingComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { LoadingComponent, LoadingModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-loading.js.map