import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@sofico-framework/ui-kit/components/svg-icon';
import * as ɵngcc3 from '@ngx-translate/core';

function CollapsableSectionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtext(1, " \u2022 ");
    ɵngcc0.ɵɵelementEnd();
} }
function CollapsableSectionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} }
const _c0 = ["*"];
class CollapsableSectionComponent {
    constructor() {
        this.active = false;
        this.stateChange = new EventEmitter();
        this.internalCollapsed = true;
    }
    set collapsed(value) {
        this.internalCollapsed = value;
    }
    toggle() {
        this.internalCollapsed = !this.internalCollapsed;
        this.stateChange.emit(this.internalCollapsed);
    }
}
CollapsableSectionComponent.ɵfac = function CollapsableSectionComponent_Factory(t) { return new (t || CollapsableSectionComponent)(); };
CollapsableSectionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CollapsableSectionComponent, selectors: [["sof-collapsable-section"]], hostVars: 2, hostBindings: function CollapsableSectionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("collapsed", ctx.internalCollapsed);
    } }, inputs: { active: "active", collapsed: "collapsed", tc: "tc", label: "label" }, outputs: { stateChange: "stateChange" }, ngContentSelectors: _c0, decls: 8, vars: 6, consts: [["type", "button", 1, "btn", "btn-plain", "d-flex", "justify-content-between", "align-items-center", "w-100", "title", 3, "click"], [1, "d-flex", "align-items-center"], ["class", "text-primary font-weight-bolder pl-2", 4, "ngIf"], [1, "sof-icon-12", "icon-toggle", 3, "icon"], ["class", "mt-2", 4, "ngIf"], [1, "text-primary", "font-weight-bolder", "pl-2"], [1, "mt-2"]], template: function CollapsableSectionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function CollapsableSectionComponent_Template_button_click_0_listener() { return ctx.toggle(); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div");
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵpipe(4, "translate");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, CollapsableSectionComponent_div_5_Template, 2, 0, "div", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(6, "sof-svg-icon", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, CollapsableSectionComponent_div_7_Template, 2, 0, "div", 4);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(4, 4, ctx.tc + "." + ctx.label));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.active);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("icon", "icon-chevron-" + (ctx.internalCollapsed ? "down" : "up"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.internalCollapsed);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.SvgIconComponent], pipes: [ɵngcc3.TranslatePipe], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}.title[_ngcontent-%COMP%]{cursor:pointer;font-weight:500}"], changeDetection: 0 });
CollapsableSectionComponent.propDecorators = {
    tc: [{ type: Input }],
    label: [{ type: Input }],
    active: [{ type: Input }],
    collapsed: [{ type: Input }],
    stateChange: [{ type: Output }],
    internalCollapsed: [{ type: HostBinding, args: ['class.collapsed',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CollapsableSectionComponent, [{
        type: Component,
        args: [{
                selector: 'sof-collapsable-section',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <button
      type="button"
      class="btn btn-plain d-flex justify-content-between align-items-center w-100 title"
      (click)="toggle()"
    >
      <div class="d-flex align-items-center">
        <div>{{ tc + '.' + label | translate }}</div>
        <div *ngIf="active" class="text-primary font-weight-bolder pl-2">
          &bull;
        </div>
      </div>

      <sof-svg-icon
        class="sof-icon-12 icon-toggle"
        [icon]="'icon-chevron-' + (internalCollapsed ? 'down' : 'up')"
      ></sof-svg-icon>
    </button>
    <div *ngIf="!internalCollapsed" class="mt-2">
      <ng-content></ng-content>
    </div>
  `,
                styles: [":host{display:flex;flex-direction:column}.title{cursor:pointer;font-weight:500}"]
            }]
    }], function () { return []; }, { active: [{
            type: Input
        }], stateChange: [{
            type: Output
        }], internalCollapsed: [{
            type: HostBinding,
            args: ['class.collapsed']
        }], collapsed: [{
            type: Input
        }], tc: [{
            type: Input
        }], label: [{
            type: Input
        }] }); })();

class CollapsableSectionModule {
}
CollapsableSectionModule.ɵfac = function CollapsableSectionModule_Factory(t) { return new (t || CollapsableSectionModule)(); };
CollapsableSectionModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CollapsableSectionModule });
CollapsableSectionModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[TranslateModule, CommonModule, SvgIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CollapsableSectionModule, { declarations: function () { return [CollapsableSectionComponent]; }, imports: function () { return [TranslateModule, CommonModule, SvgIconModule]; }, exports: function () { return [CollapsableSectionComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CollapsableSectionModule, [{
        type: NgModule,
        args: [{
                declarations: [CollapsableSectionComponent],
                exports: [CollapsableSectionComponent],
                imports: [TranslateModule, CommonModule, SvgIconModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CollapsableSectionComponent, CollapsableSectionModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-collapsable-section.js.map