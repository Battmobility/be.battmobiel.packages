import { __decorate } from 'tslib';
import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Changes } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
import { filter, startWith, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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
WizardNavBarComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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

class WizardNavBarModule {
}
WizardNavBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, TranslateModule],
                declarations: [WizardNavBarComponent],
                exports: [WizardNavBarComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { WizardNavBarComponent, WizardNavBarModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-wizard-nav-bar.js.map
