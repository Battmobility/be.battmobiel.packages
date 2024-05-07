import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { UtilsPipesModule } from '@sofico-framework/utils';

/**
 * This component resembles a breadcrumb trail
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/router';
import * as ɵngcc3 from '@sofico-framework/ui-kit/components/svg-icon';
import * as ɵngcc4 from '@sofico-framework/utils';
import * as ɵngcc5 from '@ngx-translate/core';

function BreadcrumbComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "a", 5);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "sofMaxStringLength");
    ɵngcc0.ɵɵpipe(4, "translate");
    ɵngcc0.ɵɵpipe(5, "sofMaxStringLength");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(6, "sof-svg-icon", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("queryParamsHandling", breadcrumb_r1.preserveQueryParams ? "preserve" : "")("routerLink", breadcrumb_r1.path);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", breadcrumb_r1.label ? ɵngcc0.ɵɵpipeBind1(3, 3, ɵngcc0.ɵɵpipeBind2(4, 5, ctx_r3.tc + "." + breadcrumb_r1.label, breadcrumb_r1.params)) : ɵngcc0.ɵɵpipeBind1(5, 8, breadcrumb_r1.translation), " ");
} }
function BreadcrumbComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelementStart(1, "p", 8);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "sofMaxStringLength");
    ɵngcc0.ɵɵpipe(4, "translate");
    ɵngcc0.ɵɵpipe(5, "sofMaxStringLength");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", breadcrumb_r1.label ? ɵngcc0.ɵɵpipeBind1(3, 1, ɵngcc0.ɵɵpipeBind2(4, 3, ctx_r4.tc + "." + breadcrumb_r1.label, breadcrumb_r1.params)) : ɵngcc0.ɵɵpipeBind1(5, 6, breadcrumb_r1.translation), " ");
} }
function BreadcrumbComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, BreadcrumbComponent_ng_container_1_div_1_Template, 7, 10, "div", 2);
    ɵngcc0.ɵɵtemplate(2, BreadcrumbComponent_ng_container_1_div_2_Template, 6, 8, "div", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const last_r2 = ctx.last;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !last_r2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", last_r2);
} }
class BreadcrumbComponent {
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["sof-breadcrumb"]], inputs: { tc: "tc", breadcrumbs: "breadcrumbs" }, decls: 2, vars: 1, consts: [[1, "d-flex", "flex-wrap", "justify-content-start", "align-items-center", "sof-breadcrumbs"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-start align-items-center", 4, "ngIf"], ["class", "sof-link", 4, "ngIf"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "sof-link", 3, "queryParamsHandling", "routerLink"], ["icon", "icon-chevron-right", "size", "8", 1, "sof-icon-light", "mx-1"], [1, "sof-link"], [1, "m-0"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, BreadcrumbComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.breadcrumbs);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.RouterLinkWithHref, ɵngcc3.SvgIconComponent], pipes: [ɵngcc4.MaxStringLengthPipe, ɵngcc5.TranslatePipe], styles: ["[_nghost-%COMP%]   a.sof-link[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   .sof-link[_ngcontent-%COMP%]{font-size:.875rem;color:#6c757d}"], changeDetection: 0 });
BreadcrumbComponent.propDecorators = {
    tc: [{ type: Input }],
    breadcrumbs: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{
                selector: 'sof-breadcrumb',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <!--  todo: Check once sof-breadcrumbs class can be removed. Currently it seems to be in use by the promotions project.  -->
    <div
      class="d-flex flex-wrap justify-content-start align-items-center sof-breadcrumbs"
    >
      <ng-container *ngFor="let breadcrumb of breadcrumbs; let last = last">
        <div
          class="d-flex justify-content-start align-items-center"
          *ngIf="!last"
        >
          <a
            class="sof-link"
            [queryParamsHandling]="
              breadcrumb.preserveQueryParams ? 'preserve' : ''
            "
            [routerLink]="breadcrumb.path"
          >
            {{
              breadcrumb.label
                ? (tc + '.' + breadcrumb.label
                  | translate: breadcrumb.params
                  | sofMaxStringLength)
                : (breadcrumb.translation | sofMaxStringLength)
            }}
          </a>
          <sof-svg-icon
            icon="icon-chevron-right"
            class="sof-icon-light mx-1"
            size="8"
          ></sof-svg-icon>
        </div>
        <div *ngIf="last" class="sof-link">
          <p class="m-0">
            {{
              breadcrumb.label
                ? (tc + '.' + breadcrumb.label
                  | translate: breadcrumb.params
                  | sofMaxStringLength)
                : (breadcrumb.translation | sofMaxStringLength)
            }}
          </p>
        </div>
      </ng-container>
    </div>
  `,
                styles: [":host a.sof-link{text-decoration:underline}:host .sof-link{font-size:.875rem;color:#6c757d}"]
            }]
    }], null, { tc: [{
            type: Input
        }], breadcrumbs: [{
            type: Input
        }] }); })();

class BreadcrumbModule {
}
BreadcrumbModule.ɵfac = function BreadcrumbModule_Factory(t) { return new (t || BreadcrumbModule)(); };
BreadcrumbModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BreadcrumbModule });
BreadcrumbModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            RouterModule,
            SvgIconModule,
            TranslateModule,
            UtilsPipesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BreadcrumbModule, { declarations: function () { return [BreadcrumbComponent]; }, imports: function () { return [CommonModule,
        RouterModule,
        SvgIconModule,
        TranslateModule,
        UtilsPipesModule]; }, exports: function () { return [BreadcrumbComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(BreadcrumbModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    SvgIconModule,
                    TranslateModule,
                    UtilsPipesModule
                ],
                declarations: [BreadcrumbComponent],
                exports: [BreadcrumbComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BreadcrumbComponent, BreadcrumbModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-breadcrumb.js.map