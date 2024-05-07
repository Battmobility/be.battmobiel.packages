import { __decorate } from 'tslib';
import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Changes } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
import { filter, startWith, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '@ngx-translate/core';

const _c0 = function (a0) { return [a0]; };
function WizardNavBarComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 3);
    ɵngcc0.ɵɵlistener("click", function WizardNavBarComponent_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.blur($event); });
    ɵngcc0.ɵɵpipe(1, "async");
    ɵngcc0.ɵɵpipe(2, "async");
    ɵngcc0.ɵɵpipe(3, "async");
    ɵngcc0.ɵɵpipe(4, "async");
    ɵngcc0.ɵɵelementStart(5, "div", 4);
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵpipe(7, "translate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "div", 5);
    ɵngcc0.ɵɵelement(9, "div", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "div", 7);
    ɵngcc0.ɵɵelement(11, "span", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("enable-future-steps", ctx_r0.enableFutureSteps)("before-active", i_r2 < ɵngcc0.ɵɵpipeBind1(1, 13, ctx_r0.indexActiveStep$))("after-active", i_r2 > ɵngcc0.ɵɵpipeBind1(2, 15, ctx_r0.indexActiveStep$))("active", i_r2 === ɵngcc0.ɵɵpipeBind1(3, 17, ctx_r0.indexActiveStep$))("step-disabled", step_r1.disabled);
    ɵngcc0.ɵɵproperty("routerLink", ɵngcc0.ɵɵpureFunction1(23, _c0, step_r1.routePath))("tabindex", i_r2 > ɵngcc0.ɵɵpipeBind1(4, 19, ctx_r0.indexActiveStep$) && !ctx_r0.enableFutureSteps ? -1 : 0);
    ɵngcc0.ɵɵadvance(6);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(7, 21, ctx_r0.tc + "." + step_r1.label), " ");
} }
class WizardNavBarComponent {
    constructor(router) {
        this.router = router;
        this.enableFutureSteps = false;
        this.triggerCalc$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd), startWith({}));
    }
    ngOnInit() {
        this.indexActiveStep$ = combineLatest([
            this.triggerCalc$,
            this.steps$
        ]).pipe(map(([triggerCalc, steps]) => this.getIndexActiveStep(steps)));
    }
    ngOnChanges() { }
    blur(event) {
        const path = event.path || (event.composedPath && event.composedPath());
        path[0].blur();
    }
    getIndexActiveStep(flowSteps) {
        for (let i = flowSteps.length; i--;) {
            const flowStep = flowSteps[i];
            let params;
            if (flowStep.queryParams) {
                params = Object.keys(flowStep.queryParams).reduce((concat, key) => `${concat}&${encodeURIComponent(key)}=${encodeURIComponent(flowStep.queryParams[key])}`, '?');
            }
            // The route is active if the router returns isActive as true.
            if (this.router.isActive(`${flowStep.routePath}${params ? params : ''}`, false // exact route path match
            )) {
                return i;
            }
        }
        return undefined;
    }
}
WizardNavBarComponent.ɵfac = function WizardNavBarComponent_Factory(t) { return new (t || WizardNavBarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router)); };
WizardNavBarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: WizardNavBarComponent, selectors: [["sof-wizard-nav-bar"]], inputs: { enableFutureSteps: "enableFutureSteps", tc: "tc", steps: "steps" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 1, consts: [[1, "col"], [1, "row"], ["class", "col step-wrapper", "queryParamsHandling", "preserve", 3, "enable-future-steps", "routerLink", "before-active", "after-active", "active", "step-disabled", "tabindex", "click", 4, "ngFor", "ngForOf"], ["queryParamsHandling", "preserve", 1, "col", "step-wrapper", 3, "routerLink", "tabindex", "click"], [1, "row", "justify-content-center", "label"], [1, "row", "justify-content-center", "circle-wrapper"], [1, "circle"], [1, "row", "line-wrapper"], [1, "line"]], template: function WizardNavBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, WizardNavBarComponent_a_2_Template, 12, 25, "a", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.steps);
    } }, directives: [ɵngcc2.NgForOf, ɵngcc1.RouterLinkWithHref], pipes: [ɵngcc2.AsyncPipe, ɵngcc3.TranslatePipe], styles: [".step-wrapper[_ngcontent-%COMP%]{min-height:50px}.step-wrapper[_ngcontent-%COMP%]:first-of-type   .line-wrapper[_ngcontent-%COMP%], .step-wrapper[_ngcontent-%COMP%]:first-of-type   .line-wrapper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:none;visibility:hidden}.step-disabled[_ngcontent-%COMP%]{pointer-events:none;cursor:default}.circle[_ngcontent-%COMP%]{position:absolute;width:16px;height:16px;border-radius:50%;z-index:1}.line-wrapper[_ngcontent-%COMP%]{position:relative}.line-wrapper[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{position:absolute;width:100%;height:2px;top:7px;left:-50%}.before-active[_ngcontent-%COMP%]:hover{cursor:pointer}.after-active[_ngcontent-%COMP%]{color:#ced4da}.after-active[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .after-active[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{background-color:#ced4da}.active[_ngcontent-%COMP%], .after-active[_ngcontent-%COMP%]:not(.enable-future-steps){pointer-events:none}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover{text-decoration:inherit}"], changeDetection: 0 });
WizardNavBarComponent.ctorParameters = () => [
    { type: Router }
];
WizardNavBarComponent.propDecorators = {
    tc: [{ type: Input }],
    steps: [{ type: Input }],
    enableFutureSteps: [{ type: Input }]
};
__decorate([
    Changes('steps')
], WizardNavBarComponent.prototype, "steps$", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WizardNavBarComponent, [{
        type: Component,
        args: [{
                selector: 'sof-wizard-nav-bar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="col">
      <div class="row">
        <a
          *ngFor="let step of steps; let i = index"
          class="col step-wrapper"
          [class.enable-future-steps]="enableFutureSteps"
          [routerLink]="[step.routePath]"
          queryParamsHandling="preserve"
          [class.before-active]="i < (indexActiveStep$ | async)"
          [class.after-active]="i > (indexActiveStep$ | async)"
          [class.active]="i === (indexActiveStep$ | async)"
          [class.step-disabled]="step.disabled"
          [tabindex]="
            i > (indexActiveStep$ | async) && !enableFutureSteps ? -1 : 0
          "
          (click)="blur($event)"
        >
          <div class="row justify-content-center label">
            {{ tc + '.' + step.label | translate }}
          </div>
          <div class="row justify-content-center circle-wrapper">
            <div class="circle"></div>
          </div>
          <div class="row line-wrapper">
            <span class="line"></span>
          </div>
        </a>
      </div>
    </div>
  `,
                styles: [".step-wrapper{min-height:50px}.step-wrapper:first-of-type .line-wrapper,.step-wrapper:first-of-type .line-wrapper .line{display:none;visibility:hidden}.step-disabled{pointer-events:none;cursor:default}.circle{position:absolute;width:16px;height:16px;border-radius:50%;z-index:1}.line-wrapper{position:relative}.line-wrapper .line{position:absolute;width:100%;height:2px;top:7px;left:-50%}.before-active:hover{cursor:pointer}.after-active{color:#ced4da}.after-active .circle,.after-active .line{background-color:#ced4da}.active,.after-active:not(.enable-future-steps){pointer-events:none}a,a:hover{text-decoration:inherit}"]
            }]
    }], function () { return [{ type: ɵngcc1.Router }]; }, { enableFutureSteps: [{
            type: Input
        }], tc: [{
            type: Input
        }], steps: [{
            type: Input
        }] }); })();

class WizardNavBarModule {
}
WizardNavBarModule.ɵfac = function WizardNavBarModule_Factory(t) { return new (t || WizardNavBarModule)(); };
WizardNavBarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: WizardNavBarModule });
WizardNavBarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, RouterModule, TranslateModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(WizardNavBarModule, { declarations: function () { return [WizardNavBarComponent]; }, imports: function () { return [CommonModule, RouterModule, TranslateModule]; }, exports: function () { return [WizardNavBarComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(WizardNavBarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, TranslateModule],
                declarations: [WizardNavBarComponent],
                exports: [WizardNavBarComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { WizardNavBarComponent, WizardNavBarModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-wizard-nav-bar.js.map