import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { hotSafe, WindowRefService } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { BehaviorSubject, fromEvent, merge } from 'rxjs';
import { filter, map, mapTo } from 'rxjs/operators';
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
export { TopBarNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLWJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy90b3AtYmFyLW5hdi90b3AtYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7SUEwRnZDLGtCQUFrQixTQUFsQixrQkFBa0I7SUFvQjdCLFlBQ1UsS0FBaUIsRUFDakIsZ0JBQWtDO1FBRGxDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVo1QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGVBQWU7UUFDZixZQUFPLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFLN0MsY0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBS2hCLENBQUM7SUFFSixRQUFRO1FBQ04sZUFBZTtRQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELGVBQWU7UUFDYixxREFBcUQ7UUFDckQsSUFBSSxDQUFDLGVBQWU7YUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxXQUFXLEtBQVUsQ0FBQztJQUV0QixnQkFBZ0I7UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQWlCO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ssa0JBQWtCO1FBQ3hCLE9BQU8sS0FBSyxDQUNWLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxFQUN0RCxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FDNUQsQ0FBQyxJQUFJLENBQ0osR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDYixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNsQixPQUFPLENBQUMsS0FBSyxJQUFJLFdBQVcsRUFBRTtnQkFDNUIsS0FBSyxHQUFHLFdBQVcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztnQkFDakQsV0FBVyxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7YUFDekM7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixPQUFPLEVBQUUsQ0FDVixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBL0pBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUUzQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdGVDs7YUFDRjs7O1lBakdDLFVBQVU7WUFLTSxnQkFBZ0I7OztpQkFpRy9CLEtBQUs7d0JBSUwsS0FBSzs7QUFSSyxrQkFBa0I7SUF2RjlCLFlBQVksRUFBRTtHQXVGRixrQkFBa0IsQ0F5RTlCO1NBekVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGhvdFNhZmUsIFdpbmRvd1JlZlNlcnZpY2UgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91dGlscyc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95LCBVbnRpbERlc3Ryb3kgfSBmcm9tICduZ3gtcmVhY3RpdmV0b29sa2l0JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmF2SXRlbSB9IGZyb20gJy4vdHlwZXMvbmF2LWl0ZW0udHlwZSc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLXRvcC1iYXItbmF2JyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9wLWJhci1uYXYuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kIHNvZi1uYXZiYXItbGlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiB3LTEwMFwiPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93blwiXG4gICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgbGV0IG1lbnVJdGVtIG9mIG1lbnVJdGVtcztcbiAgICAgICAgICAgICAgdHJhY2tCeTogdHJhY2tCeUZuO1xuICAgICAgICAgICAgICBsZXQgbGFzdCA9IGxhc3RcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCJcbiAgICAgICAgICAgIFtjbGFzcy5hY3RpdmUtbWVudS1pdGVtXT1cIlxuICAgICAgICAgICAgICBtZW51SXRlbT8uY2hpbGRyZW4gJiYgKHRvZ2dsZSQgfCBhc3luYykgPT09IG1lbnVJdGVtXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgc29mLW5hdi1saW5rIG5hdi1saW5rXCJcbiAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwibWVudUl0ZW0ucm91dGVyTGlua1wiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUkLm5leHQobnVsbClcIlxuICAgICAgICAgICAgICAqbmdJZj1cIiFtZW51SXRlbT8uY2hpbGRyZW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpbm5lclRleHQ7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBtZW51SXRlbSB9XCJcbiAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHNvZi1uYXYtbGluayBuYXYtbGluayBjbGlja2FibGVcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlTWVudUl0ZW0obWVudUl0ZW0pXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJtZW51SXRlbT8uY2hpbGRyZW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpbm5lclRleHQ7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBtZW51SXRlbSB9XCJcbiAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiXG4gICAgICAgICAgICAgIFtjbGFzcy5kcm9wZG93bi1tZW51LXJpZ2h0XT1cImxhc3RcIlxuICAgICAgICAgICAgICBbY2xhc3Mub3Blbi1kcm9wZG93bl09XCIodG9nZ2xlJCB8IGFzeW5jKSA9PT0gbWVudUl0ZW1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICBsZXQgc3ViTWVudUl0ZW0gb2YgbWVudUl0ZW0/LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgICAgdHJhY2tCeTogdHJhY2tCeUZuXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJzdWJNZW51SXRlbS5yb3V0ZXJMaW5rXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUkLm5leHQobnVsbClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcbiAgICAgICAgICAgICAgICAgICAgICBpbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogeyAkaW1wbGljaXQ6IHN1Yk1lbnVJdGVtIH1cbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuXG4gICAgPG5nLXRlbXBsYXRlICNpbm5lclRleHQgbGV0LWl0ZW0+XG4gICAgICA8c29mLXN2Zy1pY29uXG4gICAgICAgICpuZ0lmPVwiaXRlbS5pY29uXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiaXRlbS5pY29uQ2xhc3Nlc1wiXG4gICAgICAgIFtpY29uXT1cIml0ZW0uaWNvblwiXG4gICAgICA+PC9zb2Ytc3ZnLWljb24+XG4gICAgICA8c3Bhbj5cbiAgICAgICAge3tcbiAgICAgICAgICBpdGVtPy5sYWJlbFxuICAgICAgICAgICAgPyAodGMgKyAnLicgKyBpdGVtLmxhYmVsIHwgdHJhbnNsYXRlOiBpdGVtLnBhcmFtcylcbiAgICAgICAgICAgIDogaXRlbS50cmFuc2xhdGlvblxuICAgICAgICB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVG9wQmFyTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogVGhlIHRyYW5zbGF0aW9uIGNvbnRleHRcbiAgICovXG4gIEBJbnB1dCgpIHRjOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBNZW51SXRlbXMgLSBUaGUgbWVudSBvbmx5IHN1cHBvcnQgb25lIGxldmVsIGRvd24gKGNoaWxkcmVuKS4gTmF2SXRlbSB3aXRoIGNoaWxkcmVuIGl0c2VsZiB3aWxsIHRvIHRyaWdnZXIgbmF2aWdhdGUuXG4gICAqL1xuICBASW5wdXQoKSBtZW51SXRlbXM6IE5hdkl0ZW1bXTtcblxuICBzaG93TW9iaWxlID0gZmFsc2U7XG5cbiAgLy8gUHJlc2VudGF0aW9uXG4gIHRvZ2dsZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE5hdkl0ZW0+KG51bGwpO1xuXG4gIC8vIEludGVybWVkaWF0ZVxuICBwcml2YXRlIGNsaWNrZWRPdXRzaWRlJDogT2JzZXJ2YWJsZTx1bmRlZmluZWQ+O1xuXG4gIHRyYWNrQnlGbiA9IGkgPT4gaTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgd2luZG93UmVmU2VydmljZTogV2luZG93UmVmU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gSW50ZXJtZWRpYXRlXG4gICAgdGhpcy5jbGlja2VkT3V0c2lkZSQgPSB0aGlzLmdldENsaWNrZWRPdXRzaWRlJCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIHdpbmRvd1JlZlNlcnZpY2UgaXMgb25seSBhdmFpbGFibGUgYWZ0ZXIgdmlldyBpbml0XG4gICAgdGhpcy5jbGlja2VkT3V0c2lkZSRcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudG9nZ2xlJC5uZXh0KG51bGwpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICB0b2dnbGVNb2JpbGVNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd01vYmlsZSA9ICF0aGlzLnNob3dNb2JpbGU7XG4gIH1cblxuICB0b2dnbGVNZW51SXRlbShtZW51SXRlbTogTmF2SXRlbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvZ2dsZSQuZ2V0VmFsdWUoKSAhPT0gbWVudUl0ZW0pIHtcbiAgICAgIHRoaXMudG9nZ2xlJC5uZXh0KG1lbnVJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGUkLm5leHQobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIHVuZGVmaW5lZCBpZiBjbGljayBvbiB3aW5kb3cgd2FzIG5vdCB0aGlzIGNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDbGlja2VkT3V0c2lkZSQoKTogT2JzZXJ2YWJsZTx1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQodGhpcy53aW5kb3dSZWZTZXJ2aWNlLm5hdGl2ZVdpbmRvdywgJ2NsaWNrJyksXG4gICAgICBmcm9tRXZlbnQodGhpcy53aW5kb3dSZWZTZXJ2aWNlLm5hdGl2ZVdpbmRvdywgJ3RvdWNoc3RhcnQnKVxuICAgICkucGlwZShcbiAgICAgIG1hcCgoeDogYW55KSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50RWxlbSA9IHgudGFyZ2V0O1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFmb3VuZCAmJiBjdXJyZW50RWxlbSkge1xuICAgICAgICAgIGZvdW5kID0gY3VycmVudEVsZW0gPT09IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICBjdXJyZW50RWxlbSA9IGN1cnJlbnRFbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoeCA9PiAheCksXG4gICAgICBtYXBUbyh1bmRlZmluZWQpLFxuICAgICAgaG90U2FmZSgpXG4gICAgKTtcbiAgfVxufVxuIl19