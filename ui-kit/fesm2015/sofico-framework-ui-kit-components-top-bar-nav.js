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
TopBarNavComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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

class TopBarNavModule {
}
TopBarNavModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { TopBarNavComponent, TopBarNavModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-top-bar-nav.js.map
