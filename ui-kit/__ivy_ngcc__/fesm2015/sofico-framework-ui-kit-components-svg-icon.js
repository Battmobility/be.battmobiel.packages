import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
class SvgIconComponent {
    constructor() {
        this.size = '16';
    }
}
SvgIconComponent.ɵfac = function SvgIconComponent_Factory(t) { return new (t || SvgIconComponent)(); };
SvgIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SvgIconComponent, selectors: [["sof-svg-icon"]], inputs: { size: "size", icon: "icon" }, decls: 3, vars: 5, template: function SvgIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "svg");
        ɵngcc0.ɵɵelement(2, "use");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("svg-icon-wrapper size-", ctx.size, "");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵattributeInterpolate1("href", "#", ctx.icon, "", null, "xlink");
        ɵngcc0.ɵɵattributeInterpolate1("href", "#", ctx.icon, "");
    } }, styles: ["[_nghost-%COMP%]{display:inline-block}.svg-icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:block;width:inherit;height:inherit;border:inherit}.size-8[_ngcontent-%COMP%]{width:8px;height:8px}.size-12[_ngcontent-%COMP%]{width:12px;height:12px}.size-16[_ngcontent-%COMP%]{width:16px;height:16px}.size-20[_ngcontent-%COMP%]{width:20px;height:20px}.size-24[_ngcontent-%COMP%]{width:24px;height:24px}.size-28[_ngcontent-%COMP%]{width:28px;height:28px}.size-32[_ngcontent-%COMP%]{width:32px;height:32px}.size-48[_ngcontent-%COMP%]{width:48px;height:48px}"] });
SvgIconComponent.propDecorators = {
    icon: [{ type: Input }],
    size: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SvgIconComponent, [{
        type: Component,
        args: [{
                selector: 'sof-svg-icon',
                template: `
    <div class="svg-icon-wrapper size-{{ size }}">
      <svg>
        <use attr.xlink:href="#{{ icon }}" attr.href="#{{ icon }}"></use>
      </svg>
    </div>
  `,
                styles: [":host{display:inline-block}.svg-icon-wrapper svg{display:block;width:inherit;height:inherit;border:inherit}.size-8{width:8px;height:8px}.size-12{width:12px;height:12px}.size-16{width:16px;height:16px}.size-20{width:20px;height:20px}.size-24{width:24px;height:24px}.size-28{width:28px;height:28px}.size-32{width:32px;height:32px}.size-48{width:48px;height:48px}"]
            }]
    }], function () { return []; }, { size: [{
            type: Input
        }], icon: [{
            type: Input
        }] }); })();

class SvgIconModule {
}
SvgIconModule.ɵfac = function SvgIconModule_Factory(t) { return new (t || SvgIconModule)(); };
SvgIconModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SvgIconModule });
SvgIconModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SvgIconModule, { declarations: function () { return [SvgIconComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SvgIconComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SvgIconModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [SvgIconComponent],
                exports: [SvgIconComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SvgIconComponent, SvgIconModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-svg-icon.js.map