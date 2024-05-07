import { __decorate } from 'tslib';
import { Component, ChangeDetectionStrategy, ElementRef, Input, NgModule } from '@angular/core';
import { hotSafe, WindowRefService, UtilsPipesModule } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { BehaviorSubject, merge, fromEvent } from 'rxjs';
import { map, filter, mapTo } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@sofico-framework/utils';
import * as ɵngcc2 from '@ng-bootstrap/ng-bootstrap';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@angular/router';
import * as ɵngcc5 from '@sofico-framework/ui-kit/components/svg-icon';
import * as ɵngcc6 from '@ngx-translate/core';

function TopBarNavComponent_li_3_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function TopBarNavComponent_li_3_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 10);
    ɵngcc0.ɵɵlistener("click", function TopBarNavComponent_li_3_a_2_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.toggle$.next(null); });
    ɵngcc0.ɵɵtemplate(1, TopBarNavComponent_li_3_a_2_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵnextContext();
    const _r1 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵproperty("routerLink", menuItem_r3.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(3, _c0, menuItem_r3));
} }
function TopBarNavComponent_li_3_button_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TopBarNavComponent_li_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 12);
    ɵngcc0.ɵɵlistener("click", function TopBarNavComponent_li_3_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); const menuItem_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.toggleMenuItem(menuItem_r3); });
    ɵngcc0.ɵɵtemplate(1, TopBarNavComponent_li_3_button_3_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵnextContext();
    const _r1 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, menuItem_r3));
} }
function TopBarNavComponent_li_3_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TopBarNavComponent_li_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "a", 13);
    ɵngcc0.ɵɵlistener("click", function TopBarNavComponent_li_3_ng_container_6_Template_a_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(2); return ctx_r19.toggle$.next(null); });
    ɵngcc0.ɵɵtemplate(2, TopBarNavComponent_li_3_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const subMenuItem_r17 = ctx.$implicit;
    ɵngcc0.ɵɵnextContext(2);
    const _r1 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("routerLink", subMenuItem_r17.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(3, _c0, subMenuItem_r17));
} }
function TopBarNavComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 5);
    ɵngcc0.ɵɵpipe(1, "async");
    ɵngcc0.ɵɵtemplate(2, TopBarNavComponent_li_3_a_2_Template, 2, 5, "a", 6);
    ɵngcc0.ɵɵtemplate(3, TopBarNavComponent_li_3_button_3_Template, 2, 4, "button", 7);
    ɵngcc0.ɵɵelementStart(4, "div", 8);
    ɵngcc0.ɵɵpipe(5, "async");
    ɵngcc0.ɵɵtemplate(6, TopBarNavComponent_li_3_ng_container_6_Template, 3, 5, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = ctx.$implicit;
    const last_r4 = ctx.last;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("active-menu-item", (menuItem_r3 == null ? null : menuItem_r3.children) && ɵngcc0.ɵɵpipeBind1(1, 10, ctx_r0.toggle$) === menuItem_r3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !(menuItem_r3 == null ? null : menuItem_r3.children));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", menuItem_r3 == null ? null : menuItem_r3.children);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("dropdown-menu-right", last_r4)("open-dropdown", ɵngcc0.ɵɵpipeBind1(5, 12, ctx_r0.toggle$) === menuItem_r3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", menuItem_r3 == null ? null : menuItem_r3.children)("ngForTrackBy", ctx_r0.trackByFn);
} }
function TopBarNavComponent_ng_template_4_sof_svg_icon_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sof-svg-icon", 15);
} if (rf & 2) {
    const item_r21 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r21.iconClasses)("icon", item_r21.icon);
} }
function TopBarNavComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TopBarNavComponent_ng_template_4_sof_svg_icon_0_Template, 1, 2, "sof-svg-icon", 14);
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "translate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", item_r21.icon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", (item_r21 == null ? null : item_r21.label) ? ɵngcc0.ɵɵpipeBind2(3, 2, ctx_r2.tc + "." + item_r21.label, item_r21.params) : item_r21.translation, " ");
} }
let TopBarNavComponent = class TopBarNavComponent {
    constructor(elRef, windowRefService) {
        this.elRef = elRef;
        this.windowRefService = windowRefService;
        this.showMobile = false;
        // Presentation
        this.toggle$ = new BehaviorSubject(null);
        this.trackByFn = i => i;
    }
    ngOnInit() {
        // Intermediate
        this.clickedOutside$ = this.getClickedOutside$();
    }
    ngAfterViewInit() {
        // windowRefService is only available after view init
        this.clickedOutside$
            .pipe(takeUntilDestroy(this))
            .subscribe(() => this.toggle$.next(null));
    }
    ngOnDestroy() { }
    toggleMobileMenu() {
        this.showMobile = !this.showMobile;
    }
    toggleMenuItem(menuItem) {
        if (this.toggle$.getValue() !== menuItem) {
            this.toggle$.next(menuItem);
        }
        else {
            this.toggle$.next(null);
        }
    }
    /**
     * Emits undefined if click on window was not this component
     */
    getClickedOutside$() {
        return merge(fromEvent(this.windowRefService.nativeWindow, 'click'), fromEvent(this.windowRefService.nativeWindow, 'touchstart')).pipe(map((x) => {
            let currentElem = x.target;
            let found = false;
            while (!found && currentElem) {
                found = currentElem === this.elRef.nativeElement;
                currentElem = currentElem.parentElement;
            }
            return found;
        }), filter(x => !x), mapTo(undefined), hotSafe());
    }
};
TopBarNavComponent.ɵfac = function TopBarNavComponent_Factory(t) { return new (t || TopBarNavComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.WindowRefService)); };
TopBarNavComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TopBarNavComponent, selectors: [["sof-top-bar-nav"]], inputs: { tc: "tc", menuItems: "menuItems" }, decls: 6, vars: 2, consts: [[1, "navbar", "navbar-expand", "sof-navbar-light"], [1, "container"], [1, "navbar-nav", "w-100"], ["class", "nav-item dropdown", "routerLinkActive", "active", 3, "active-menu-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["innerText", ""], ["routerLinkActive", "active", 1, "nav-item", "dropdown"], ["class", "d-flex justify-content-center sof-nav-link nav-link", 3, "routerLink", "click", 4, "ngIf"], ["class", "d-flex justify-content-center sof-nav-link nav-link clickable", 3, "click", 4, "ngIf"], [1, "dropdown-menu"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "d-flex", "justify-content-center", "sof-nav-link", "nav-link", 3, "routerLink", "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "d-flex", "justify-content-center", "sof-nav-link", "nav-link", "clickable", 3, "click"], ["routerLinkActive", "active", 1, "dropdown-item", 3, "routerLink", "click"], [3, "ngClass", "icon", 4, "ngIf"], [3, "ngClass", "icon"]], template: function TopBarNavComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nav", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "ul", 2);
        ɵngcc0.ɵɵtemplate(3, TopBarNavComponent_li_3_Template, 7, 14, "li", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, TopBarNavComponent_ng_template_4_Template, 4, 5, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.menuItems)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [ɵngcc2.NgbNavbar, ɵngcc3.NgForOf, ɵngcc4.RouterLinkActive, ɵngcc3.NgIf, ɵngcc4.RouterLinkWithHref, ɵngcc3.NgTemplateOutlet, ɵngcc5.SvgIconComponent, ɵngcc3.NgClass], pipes: [ɵngcc3.AsyncPipe, ɵngcc6.TranslatePipe], styles: ["@media screen and (min-width:576px){.navbar[_ngcontent-%COMP%]{padding-left:0}}.clickable[_ngcontent-%COMP%]{cursor:pointer}.navbar[_ngcontent-%COMP%]{min-height:1rem;padding:0}.navbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.dropdown.active-menu-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.dropdown.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-weight:500}.navbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.dropdown[_ngcontent-%COMP%]{width:16.6666666667%}.navbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent;cursor:pointer;width:100%;border:none}.navbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem;text-decoration:none}.navbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.navbar[_ngcontent-%COMP%]   .dropdown-menu.open-dropdown[_ngcontent-%COMP%]{display:block;min-width:max(10em,100%);border:none;padding:.25rem;box-shadow:0 3px 5px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.navbar[_ngcontent-%COMP%]   .dropdown-menu.open-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:.25rem}"], changeDetection: 0 });
TopBarNavComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: WindowRefService }
];
TopBarNavComponent.propDecorators = {
    tc: [{ type: Input }],
    menuItems: [{ type: Input }]
};
TopBarNavComponent = __decorate([
    UntilDestroy()
], TopBarNavComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TopBarNavComponent, [{
        type: Component,
        args: [{
                selector: 'sof-top-bar-nav',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <nav class="navbar navbar-expand sof-navbar-light">
      <div class="container">
        <ul class="navbar-nav w-100">
          <li
            class="nav-item dropdown"
            *ngFor="
              let menuItem of menuItems;
              trackBy: trackByFn;
              let last = last
            "
            routerLinkActive="active"
            [class.active-menu-item]="
              menuItem?.children && (toggle$ | async) === menuItem
            "
          >
            <a
              class="d-flex justify-content-center sof-nav-link nav-link"
              [routerLink]="menuItem.routerLink"
              (click)="toggle$.next(null)"
              *ngIf="!menuItem?.children"
            >
              <ng-container
                *ngTemplateOutlet="innerText; context: { $implicit: menuItem }"
              ></ng-container>
            </a>
            <button
              class="d-flex justify-content-center sof-nav-link nav-link clickable"
              (click)="toggleMenuItem(menuItem)"
              *ngIf="menuItem?.children"
            >
              <ng-container
                *ngTemplateOutlet="innerText; context: { $implicit: menuItem }"
              ></ng-container>
            </button>
            <div
              class="dropdown-menu"
              [class.dropdown-menu-right]="last"
              [class.open-dropdown]="(toggle$ | async) === menuItem"
            >
              <ng-container
                *ngFor="
                  let subMenuItem of menuItem?.children;
                  trackBy: trackByFn
                "
              >
                <a
                  routerLinkActive="active"
                  class="dropdown-item"
                  [routerLink]="subMenuItem.routerLink"
                  (click)="toggle$.next(null)"
                >
                  <ng-container
                    *ngTemplateOutlet="
                      innerText;
                      context: { $implicit: subMenuItem }
                    "
                  ></ng-container>
                </a>
              </ng-container>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <ng-template #innerText let-item>
      <sof-svg-icon
        *ngIf="item.icon"
        [ngClass]="item.iconClasses"
        [icon]="item.icon"
      ></sof-svg-icon>
      <span>
        {{
          item?.label
            ? (tc + '.' + item.label | translate: item.params)
            : item.translation
        }}
      </span>
    </ng-template>
  `,
                styles: ["@media screen and (min-width:576px){.navbar{padding-left:0}}.clickable{cursor:pointer}.navbar{min-height:1rem;padding:0}.navbar div .navbar-nav .nav-item.dropdown.active-menu-item .nav-link,.navbar div .navbar-nav .nav-item.dropdown.active .nav-link{font-weight:500}.navbar div .navbar-nav .nav-item.dropdown{width:16.6666666667%}.navbar div .navbar-nav .nav-item button{background-color:transparent;cursor:pointer;width:100%;border:none}.navbar div .navbar-nav .nav-item .nav-link{padding-left:1rem;padding-right:1rem;text-decoration:none}.navbar div .navbar-nav .nav-item .nav-link span{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.navbar .dropdown-menu.open-dropdown{display:block;min-width:max(10em,100%);border:none;padding:.25rem;box-shadow:0 3px 5px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.navbar .dropdown-menu.open-dropdown .dropdown-item{padding:.25rem}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.WindowRefService }]; }, { tc: [{
            type: Input
        }], menuItems: [{
            type: Input
        }] }); })();

class TopBarNavModule {
}
TopBarNavModule.ɵfac = function TopBarNavModule_Factory(t) { return new (t || TopBarNavModule)(); };
TopBarNavModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TopBarNavModule });
TopBarNavModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[
            SvgIconModule,
            CommonModule,
            RouterModule,
            TranslateModule,
            UtilsPipesModule,
            NgbDropdownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TopBarNavModule, { declarations: function () { return [TopBarNavComponent]; }, imports: function () { return [SvgIconModule,
        CommonModule,
        RouterModule,
        TranslateModule,
        UtilsPipesModule,
        NgbDropdownModule]; }, exports: function () { return [TopBarNavComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TopBarNavModule, [{
        type: NgModule,
        args: [{
                imports: [
                    SvgIconModule,
                    CommonModule,
                    RouterModule,
                    TranslateModule,
                    UtilsPipesModule,
                    NgbDropdownModule
                ],
                declarations: [TopBarNavComponent],
                exports: [TopBarNavComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { TopBarNavComponent, TopBarNavModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-top-bar-nav.js.map