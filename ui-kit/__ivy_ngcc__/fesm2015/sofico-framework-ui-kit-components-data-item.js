import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';

const _c0 = [[["", "data-item-label", ""]], [["", "data-item-value", ""]]];
const _c1 = ["[data-item-label]", "[data-item-value]"];
class DataItemComponent {
}
DataItemComponent.ɵfac = function DataItemComponent_Factory(t) { return new (t || DataItemComponent)(); };
DataItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataItemComponent, selectors: [["sof-data-item"]], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [[1, "label"], [1, "value"]], template: function DataItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵprojection(3, 1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%]{display:block}.label[_ngcontent-%COMP%]{color:#adb5bd;font-size:.75rem}.value[_ngcontent-%COMP%]{font-size:.875rem;color:#000;overflow-wrap:break-word}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DataItemComponent, [{
        type: Component,
        args: [{
                selector: 'sof-data-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="label">
      <ng-content select="[data-item-label]"></ng-content>
    </div>
    <div class="value">
      <ng-content select="[data-item-value]"></ng-content>
    </div>
  `,
                styles: [":host{display:block}.label{color:#adb5bd;font-size:.75rem}.value{font-size:.875rem;color:#000;overflow-wrap:break-word}"]
            }]
    }], null, null); })();

class DataItemComponentModule {
}
DataItemComponentModule.ɵfac = function DataItemComponentModule_Factory(t) { return new (t || DataItemComponentModule)(); };
DataItemComponentModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DataItemComponentModule });
DataItemComponentModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DataItemComponentModule, { declarations: function () { return [DataItemComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [DataItemComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DataItemComponentModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [DataItemComponent],
                exports: [DataItemComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { DataItemComponent, DataItemComponentModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-data-item.js.map