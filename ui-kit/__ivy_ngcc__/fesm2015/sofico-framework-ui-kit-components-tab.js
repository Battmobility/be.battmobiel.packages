import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@sofico-framework/ui-kit/components/button';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { UtilsPipesModule } from '@sofico-framework/utils';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@sofico-framework/ui-kit/components/button';
import * as ɵngcc3 from '@angular/router';
import * as ɵngcc4 from '@sofico-framework/utils';
import * as ɵngcc5 from '@ngx-translate/core';

function TabComponent_button_0_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵpipe(1, "sofIsNullOrUndefined");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("pl-2", !ɵngcc0.ɵɵpipeBind1(1, 3, ctx_r3.tab.icon));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.tab.count);
} }
function TabComponent_button_0_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "translate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(2, 1, ctx_r4.tc + "." + ctx_r4.tab.label));
} }
function TabComponent_button_0_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.tab.translation);
} }
function TabComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 2);
    ɵngcc0.ɵɵlistener("click", function TabComponent_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.clickTab.emit(); });
    ɵngcc0.ɵɵtemplate(1, TabComponent_button_0_span_1_Template, 3, 5, "span", 3);
    ɵngcc0.ɵɵpipe(2, "sofIsNullOrUndefined");
    ɵngcc0.ɵɵtemplate(3, TabComponent_button_0_span_3_Template, 3, 3, "span", 4);
    ɵngcc0.ɵɵpipe(4, "sofIsNullOrUndefined");
    ɵngcc0.ɵɵtemplate(5, TabComponent_button_0_span_5_Template, 2, 1, "span", 4);
    ɵngcc0.ɵɵpipe(6, "sofIsNullOrUndefined");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("selected", ctx_r0.isSelected);
    ɵngcc0.ɵɵproperty("icon", ctx_r0.tab.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ɵngcc0.ɵɵpipeBind1(2, 6, ctx_r0.tab.count));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ɵngcc0.ɵɵpipeBind1(4, 8, ctx_r0.tab.label));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ɵngcc0.ɵɵpipeBind1(6, 10, ctx_r0.tab.translation));
} }
function TabComponent_ng_template_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 10);
    ɵngcc0.ɵɵpipe(1, "sofIsNullOrUndefined");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("pl-2", !ɵngcc0.ɵɵpipeBind1(1, 3, ctx_r8.tab.icon));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.tab.count);
} }
function TabComponent_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "translate");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(2, 1, ctx_r9.tc + "." + ctx_r9.tab.label), " ");
} }
function TabComponent_ng_template_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r10.tab.translation, " ");
} }
function TabComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 7);
    ɵngcc0.ɵɵlistener("click", function TabComponent_ng_template_2_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.clickTab.emit(); });
    ɵngcc0.ɵɵtemplate(1, TabComponent_ng_template_2_span_1_Template, 3, 5, "span", 8);
    ɵngcc0.ɵɵpipe(2, "sofIsNullOrUndefined");
    ɵngcc0.ɵɵtemplate(3, TabComponent_ng_template_2_ng_container_3_Template, 3, 3, "ng-container", 9);
    ɵngcc0.ɵɵpipe(4, "sofIsNullOrUndefined");
    ɵngcc0.ɵɵtemplate(5, TabComponent_ng_template_2_ng_container_5_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵpipe(6, "sofIsNullOrUndefined");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r2.tab.icon)("routerLink", ctx_r2.tab.routerLink)("queryParams", ctx_r2.tab.queryParams);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ɵngcc0.ɵɵpipeBind1(2, 6, ctx_r2.tab.count));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ɵngcc0.ɵɵpipeBind1(4, 8, ctx_r2.tab.label));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ɵngcc0.ɵɵpipeBind1(6, 10, ctx_r2.tab.translation));
} }
class TabComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.clickTab = new EventEmitter();
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TabComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabComponent, selectors: [["sof-tab"]], inputs: { tc: "tc", tab: "tab", isSelected: "isSelected" }, outputs: { clickTab: "clickTab" }, decls: 4, vars: 4, consts: [["sofButton", "", "type", "button", 3, "icon", "selected", "click", 4, "ngIf", "ngIfElse"], ["withLink", ""], ["sofButton", "", "type", "button", 3, "icon", "click"], ["class", "pr-2", 3, "pl-2", 4, "ngIf"], ["class", "title", 4, "ngIf"], [1, "pr-2"], [1, "title"], ["sofButton", "", "type", "button", "routerLinkActive", "selected", 3, "icon", "routerLink", "queryParams", "click"], ["class", "counter pr-2", 3, "pl-2", 4, "ngIf"], [4, "ngIf"], [1, "counter", "pr-2"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TabComponent_button_0_Template, 7, 12, "button", 0);
        ɵngcc0.ɵɵpipe(1, "sofIsNullOrUndefined");
        ɵngcc0.ɵɵtemplate(2, TabComponent_ng_template_2_Template, 7, 12, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(1, 2, ctx.tab == null ? null : ctx.tab.routerLink))("ngIfElse", _r1);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.ButtonDirectiveComponent, ɵngcc3.RouterLinkWithHref, ɵngcc3.RouterLinkActive], pipes: [ɵngcc4.IsNullOrUndefinedPipe, ɵngcc5.TranslatePipe], styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   a[_ngcontent-%COMP%], [_nghost-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.375rem 1.5rem;border-width:1px 1px 2px;border-style:solid}[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover{text-decoration:none}[_nghost-%COMP%]   a[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none;box-shadow:none}[_nghost-%COMP%]   a.selected[_ngcontent-%COMP%], [_nghost-%COMP%]   button.selected[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem;cursor:default;font-weight:700;border-bottom-width:4px}"], changeDetection: 0 });
TabComponent.ctorParameters = () => [
    { type: ElementRef }
];
TabComponent.propDecorators = {
    tc: [{ type: Input }],
    tab: [{ type: Input }],
    isSelected: [{ type: Input }],
    clickTab: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabComponent, [{
        type: Component,
        args: [{
                selector: 'sof-tab',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <button
      *ngIf="tab?.routerLink | sofIsNullOrUndefined; else withLink"
      sofButton
      type="button"
      [icon]="tab.icon"
      [class.selected]="isSelected"
      (click)="clickTab.emit()"
    >
      <span
        class="pr-2"
        *ngIf="!(tab.count | sofIsNullOrUndefined)"
        [class.pl-2]="!(tab.icon | sofIsNullOrUndefined)"
        >{{ tab.count }}</span
      >
      <span class="title" *ngIf="!(tab.label | sofIsNullOrUndefined)">{{
        tc + '.' + tab.label | translate
      }}</span>
      <span class="title" *ngIf="!(tab.translation | sofIsNullOrUndefined)">{{
        tab.translation
      }}</span>
    </button>
    <ng-template #withLink>
      <a
        sofButton
        type="button"
        [icon]="tab.icon"
        [routerLink]="tab.routerLink"
        [queryParams]="tab.queryParams"
        routerLinkActive="selected"
        (click)="clickTab.emit()"
      >
        <span
          class="counter pr-2"
          *ngIf="!(tab.count | sofIsNullOrUndefined)"
          [class.pl-2]="!(tab.icon | sofIsNullOrUndefined)"
          >{{ tab.count }}</span
        >
        <ng-container *ngIf="!(tab.label | sofIsNullOrUndefined)">
          {{ tc + '.' + tab.label | translate }}
        </ng-container>
        <ng-container *ngIf="!(tab.translation | sofIsNullOrUndefined)">
          {{ tab.translation }}
        </ng-container>
      </a>
    </ng-template>
  `,
                styles: [":host{display:block}:host a,:host button{display:flex;align-items:center;padding:.375rem 1.5rem;border-width:1px 1px 2px;border-style:solid}:host a:hover,:host button:hover{text-decoration:none}:host a:focus,:host button:focus{outline:none;box-shadow:none}:host a.selected,:host button.selected{padding-top:.5rem;padding-bottom:.5rem;cursor:default;font-weight:700;border-bottom-width:4px}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { clickTab: [{
            type: Output
        }], tc: [{
            type: Input
        }], tab: [{
            type: Input
        }], isSelected: [{
            type: Input
        }] }); })();

class TabModule {
}
TabModule.ɵfac = function TabModule_Factory(t) { return new (t || TabModule)(); };
TabModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabModule });
TabModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            SvgIconModule,
            ButtonModule,
            UtilsPipesModule,
            RouterModule,
            TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabModule, { declarations: function () { return [TabComponent]; }, imports: function () { return [CommonModule,
        SvgIconModule,
        ButtonModule,
        UtilsPipesModule,
        RouterModule,
        TranslateModule]; }, exports: function () { return [TabComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SvgIconModule,
                    ButtonModule,
                    UtilsPipesModule,
                    RouterModule,
                    TranslateModule
                ],
                declarations: [TabComponent],
                exports: [TabComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { TabComponent, TabModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-tab.js.map