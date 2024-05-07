import { __decorate } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChild, ElementRef, ViewChildren, NgModule } from '@angular/core';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { take } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@sofico-framework/ui-kit/components/button';
import { InViewModule } from '@sofico-framework/ui-kit/components/in-view';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { TabModule } from '@sofico-framework/ui-kit/components/tab';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@sofico-framework/ui-kit/components/in-view';
import * as ɵngcc3 from '@sofico-framework/ui-kit/components/button';
import * as ɵngcc4 from '@sofico-framework/ui-kit/components/svg-icon';
import * as ɵngcc5 from '@sofico-framework/ui-kit/components/tab';

const _c0 = ["tabsView"];
const _c1 = ["tabCmps"];
function TabsComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 8);
    ɵngcc0.ɵɵlistener("click", function TabsComponent_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.scroll(true); });
    ɵngcc0.ɵɵelement(1, "sof-svg-icon", 9);
    ɵngcc0.ɵɵelementEnd();
} }
function TabsComponent_sof_tab_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "sof-tab", 10, 11);
    ɵngcc0.ɵɵlistener("clickTab", function TabsComponent_sof_tab_5_Template_sof_tab_clickTab_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const tab_r6 = ctx.$implicit; const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.clickedTab.emit(tab_r6); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("tc", ctx_r2.tc)("tab", tab_r6)("isSelected", tab_r6 === ctx_r2.active);
} }
function TabsComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 8);
    ɵngcc0.ɵɵlistener("click", function TabsComponent_button_9_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.scroll(false); });
    ɵngcc0.ɵɵelement(1, "sof-svg-icon", 12);
    ɵngcc0.ɵɵelementEnd();
} }
let TabsComponent = class TabsComponent {
    constructor() {
        this.inViewLeft = true;
        this.inViewRight = true;
        this.clickedTab = new EventEmitter();
        this.trackByFn = (i, r) => r;
    }
    ngOnChanges(changes) {
        if (changes.active) {
            this.scrollToCenter();
        }
    }
    ngAfterViewInit() {
        // Once all the tabs are initialized, scroll to the active one
        this.tabComponents.changes
            .pipe(takeUntilDestroy(this), take(1))
            .subscribe((comps) => {
            this.scrollToCenter();
        });
    }
    ngOnDestroy() { }
    /**
     * Scroll a bit to the right, make factor negative for left scroll
     * @param factor scrolling factor, 1 for normal right, -1 for normal left
     */
    scroll(back) {
        const element = this.tabsViewRef.nativeElement;
        element.scroll(Math.max(0, element.scrollLeft + (back ? -1 : 1) * (element.clientWidth * 0.35)), 0);
    }
    scrollToCenter() {
        var _a, _b;
        if (this.tabComponents && this.active) {
            const elem = (_b = (_a = this.tabComponents.find(x => x.tab === this.active)) === null || _a === void 0 ? void 0 : _a.elementRef) === null || _b === void 0 ? void 0 : _b.nativeElement;
            elem === null || elem === void 0 ? void 0 : elem.scrollIntoView({
                block: 'nearest',
                inline: 'center',
                behavior: 'smooth'
            });
        }
    }
};
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabsComponent, selectors: [["sof-tabs"]], viewQuery: function TabsComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 3, ElementRef);
        ɵngcc0.ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabsViewRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabComponents = _t);
    } }, inputs: { tc: "tc", tabs: "tabs", active: "active" }, outputs: { clickedTab: "clickedTab" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 10, vars: 6, consts: [[1, "snap-left"], ["sofButton", "", "class", "btn btn-plain", 3, "click", 4, "ngIf"], [1, "tabs"], ["tabsView", ""], [3, "scrollableRef", "inView"], ["class", "mr-1", 3, "tc", "tab", "isSelected", "clickTab", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "right-spacer"], [1, "snap-right"], ["sofButton", "", 1, "btn", "btn-plain", 3, "click"], ["icon", "icon-chevron-left"], [1, "mr-1", 3, "tc", "tab", "isSelected", "clickTab"], ["tabCmps", ""], ["icon", "icon-chevron-right"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, TabsComponent_button_1_Template, 2, 0, "button", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵelementStart(4, "sof-in-view", 4);
        ɵngcc0.ɵɵlistener("inView", function TabsComponent_Template_sof_in_view_inView_4_listener($event) { return ctx.inViewLeft = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, TabsComponent_sof_tab_5_Template, 2, 3, "sof-tab", 5);
        ɵngcc0.ɵɵelementStart(6, "sof-in-view", 4);
        ɵngcc0.ɵɵlistener("inView", function TabsComponent_Template_sof_in_view_inView_6_listener($event) { return ctx.inViewRight = $event; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(7, "div", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "div", 7);
        ɵngcc0.ɵɵtemplate(9, TabsComponent_button_9_Template, 2, 0, "button", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.inViewLeft);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("scrollableRef", ctx.tabsViewRef == null ? null : ctx.tabsViewRef.nativeElement);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.tabs)("ngForTrackBy", ctx.trackByFn);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("scrollableRef", ctx.tabsViewRef == null ? null : ctx.tabsViewRef.nativeElement);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.inViewRight);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.InViewComponent, ɵngcc1.NgForOf, ɵngcc3.ButtonDirectiveComponent, ɵngcc4.SvgIconComponent, ɵngcc5.TabComponent], styles: ["[_nghost-%COMP%]{max-width:100%;display:flex;align-items:stretch;margin:-5px}[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%]{padding:5px 10px 5px 5px;display:flex;flex-wrap:nowrap;align-items:flex-end;overflow-x:auto;scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none}[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%]   sof-tab[_ngcontent-%COMP%]{flex-shrink:0}[_nghost-%COMP%]   .tabs[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{width:1px}[_nghost-%COMP%]   .snap-left[_ngcontent-%COMP%], [_nghost-%COMP%]   .snap-right[_ngcontent-%COMP%]{position:relative;background-color:inherit}[_nghost-%COMP%]   .snap-left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   .snap-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:2;position:absolute;padding:.5rem;top:-1px;bottom:-1px}[_nghost-%COMP%]   .snap-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{right:-1px;box-shadow:-4px 0 6px -4px #9e9e9e}[_nghost-%COMP%]   .snap-left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{left:-1px;box-shadow:4px 0 6px -4px #9e9e9e}[_nghost-%COMP%]   .right-spacer[_ngcontent-%COMP%]{flex-shrink:0;height:1px;width:10px}"], changeDetection: 0 });
TabsComponent.propDecorators = {
    tc: [{ type: Input }],
    tabs: [{ type: Input }],
    active: [{ type: Input }],
    clickedTab: [{ type: Output }],
    tabsViewRef: [{ type: ViewChild, args: ['tabsView', { read: ElementRef, static: true },] }],
    tabComponents: [{ type: ViewChildren, args: ['tabCmps',] }]
};
TabsComponent = __decorate([
    UntilDestroy()
], TabsComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabsComponent, [{
        type: Component,
        args: [{
                selector: 'sof-tabs',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="snap-left">
      <button
        sofButton
        class="btn btn-plain"
        *ngIf="!inViewLeft"
        (click)="scroll(true)"
      >
        <sof-svg-icon icon="icon-chevron-left"></sof-svg-icon>
      </button>
    </div>
    <div class="tabs" #tabsView>
      <sof-in-view
        [scrollableRef]="tabsViewRef?.nativeElement"
        (inView)="inViewLeft = $event"
      ></sof-in-view>

      <sof-tab
        *ngFor="let tab of tabs; trackBy: trackByFn; let index = index"
        [tc]="tc"
        #tabCmps
        class="mr-1"
        [tab]="tab"
        [isSelected]="tab === active"
        (clickTab)="clickedTab.emit(tab)"
      ></sof-tab>
      <sof-in-view
        [scrollableRef]="tabsViewRef?.nativeElement"
        (inView)="inViewRight = $event"
      >
      </sof-in-view>
      <div class="right-spacer"></div>
    </div>
    <div class="snap-right">
      <button
        sofButton
        class="btn btn-plain"
        *ngIf="!inViewRight"
        (click)="scroll(false)"
      >
        <sof-svg-icon icon="icon-chevron-right"></sof-svg-icon>
      </button>
    </div>
  `,
                styles: [":host{max-width:100%;display:flex;align-items:stretch;margin:-5px}:host .tabs{padding:5px 10px 5px 5px;display:flex;flex-wrap:nowrap;align-items:flex-end;overflow-x:auto;scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none}:host .tabs::-webkit-scrollbar{display:none}:host .tabs sof-tab{flex-shrink:0}:host .tabs .spacer{width:1px}:host .snap-left,:host .snap-right{position:relative;background-color:inherit}:host .snap-left button,:host .snap-right button{z-index:2;position:absolute;padding:.5rem;top:-1px;bottom:-1px}:host .snap-right button{right:-1px;box-shadow:-4px 0 6px -4px #9e9e9e}:host .snap-left button{left:-1px;box-shadow:4px 0 6px -4px #9e9e9e}:host .right-spacer{flex-shrink:0;height:1px;width:10px}"]
            }]
    }], function () { return []; }, { clickedTab: [{
            type: Output
        }], tc: [{
            type: Input
        }], tabs: [{
            type: Input
        }], active: [{
            type: Input
        }], tabsViewRef: [{
            type: ViewChild,
            args: ['tabsView', { read: ElementRef, static: true }]
        }], tabComponents: [{
            type: ViewChildren,
            args: ['tabCmps']
        }] }); })();

class TabsModule {
}
TabsModule.ɵfac = function TabsModule_Factory(t) { return new (t || TabsModule)(); };
TabsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabsModule });
TabsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, SvgIconModule, ButtonModule, TabModule, InViewModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabsModule, { declarations: function () { return [TabsComponent]; }, imports: function () { return [CommonModule, SvgIconModule, ButtonModule, TabModule, InViewModule]; }, exports: function () { return [TabsComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SvgIconModule, ButtonModule, TabModule, InViewModule],
                declarations: [TabsComponent],
                exports: [TabsComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { TabsComponent, TabsModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-tabs.js.map