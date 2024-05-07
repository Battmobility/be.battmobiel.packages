import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Changes } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
export class WizardNavBarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLW5hdi1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy93aXphcmQtbmF2LWJhci93aXphcmQtbmF2LWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFHTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBdUN4RCxNQUFNLE9BQU8scUJBQXFCO0lBYWhDLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVnpCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUszQixpQkFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQyxFQUMvQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQ2QsQ0FBQztJQUVtQyxDQUFDO0lBRXRDLFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZO1lBQ2pCLElBQUksQ0FBQyxNQUFNO1NBQ1osQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsV0FBVyxLQUFVLENBQUM7SUFFdEIsSUFBSSxDQUFDLEtBQVU7UUFDYixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLGtCQUFrQixDQUFDLFNBQXFCO1FBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBSTtZQUNwQyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxNQUFNLENBQUM7WUFDWCxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3hCLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQy9DLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQ2QsR0FBRyxNQUFNLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksa0JBQWtCLENBQ3hELFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQzFCLEVBQUUsRUFDTCxHQUFHLENBQ0osQ0FBQzthQUNIO1lBQ0QsOERBQThEO1lBQzlELElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLEdBQUcsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQzlDLEtBQUssQ0FBQyx5QkFBeUI7YUFDaEMsRUFDRDtnQkFDQSxPQUFPLENBQUMsQ0FBQzthQUNWO1NBQ0Y7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7WUF6RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBRTlCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCVDs7YUFDRjs7O1lBekN1QixNQUFNOzs7aUJBMkMzQixLQUFLO29CQUNMLEtBQUs7Z0NBQ0wsS0FBSzs7QUFFWTtJQUFqQixPQUFPLENBQUMsT0FBTyxDQUFDO3FEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDaGFuZ2VzIH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmxvd1N0ZXAgfSBmcm9tICcuL3R5cGVzL2Zsb3ctc3RlcC50eXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLXdpemFyZC1uYXYtYmFyJyxcbiAgc3R5bGVVcmxzOiBbJy4vd2l6YXJkLW5hdi1iYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8YVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICBjbGFzcz1cImNvbCBzdGVwLXdyYXBwZXJcIlxuICAgICAgICAgIFtjbGFzcy5lbmFibGUtZnV0dXJlLXN0ZXBzXT1cImVuYWJsZUZ1dHVyZVN0ZXBzXCJcbiAgICAgICAgICBbcm91dGVyTGlua109XCJbc3RlcC5yb3V0ZVBhdGhdXCJcbiAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nPVwicHJlc2VydmVcIlxuICAgICAgICAgIFtjbGFzcy5iZWZvcmUtYWN0aXZlXT1cImkgPCAoaW5kZXhBY3RpdmVTdGVwJCB8IGFzeW5jKVwiXG4gICAgICAgICAgW2NsYXNzLmFmdGVyLWFjdGl2ZV09XCJpID4gKGluZGV4QWN0aXZlU3RlcCQgfCBhc3luYylcIlxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiaSA9PT0gKGluZGV4QWN0aXZlU3RlcCQgfCBhc3luYylcIlxuICAgICAgICAgIFtjbGFzcy5zdGVwLWRpc2FibGVkXT1cInN0ZXAuZGlzYWJsZWRcIlxuICAgICAgICAgIFt0YWJpbmRleF09XCJcbiAgICAgICAgICAgIGkgPiAoaW5kZXhBY3RpdmVTdGVwJCB8IGFzeW5jKSAmJiAhZW5hYmxlRnV0dXJlU3RlcHMgPyAtMSA6IDBcbiAgICAgICAgICBcIlxuICAgICAgICAgIChjbGljayk9XCJibHVyKCRldmVudClcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGxhYmVsXCI+XG4gICAgICAgICAgICB7eyB0YyArICcuJyArIHN0ZXAubGFiZWwgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgY2lyY2xlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGxpbmUtd3JhcHBlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmROYXZCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0ZXBzOiBGbG93U3RlcFtdO1xuICBASW5wdXQoKSBlbmFibGVGdXR1cmVTdGVwcyA9IGZhbHNlO1xuXG4gIEBDaGFuZ2VzKCdzdGVwcycpIHN0ZXBzJDogT2JzZXJ2YWJsZTxGbG93U3RlcFtdPjtcblxuICBpbmRleEFjdGl2ZVN0ZXAkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIHByaXZhdGUgdHJpZ2dlckNhbGMkID0gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgc3RhcnRXaXRoKHt9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbmRleEFjdGl2ZVN0ZXAkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyaWdnZXJDYWxjJCxcbiAgICAgIHRoaXMuc3RlcHMkXG4gICAgXSkucGlwZShtYXAoKFt0cmlnZ2VyQ2FsYywgc3RlcHNdKSA9PiB0aGlzLmdldEluZGV4QWN0aXZlU3RlcChzdGVwcykpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge31cblxuICBibHVyKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBwYXRoID0gZXZlbnQucGF0aCB8fCAoZXZlbnQuY29tcG9zZWRQYXRoICYmIGV2ZW50LmNvbXBvc2VkUGF0aCgpKTtcbiAgICBwYXRoWzBdLmJsdXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SW5kZXhBY3RpdmVTdGVwKGZsb3dTdGVwczogRmxvd1N0ZXBbXSk6IG51bWJlciB7XG4gICAgZm9yIChsZXQgaSA9IGZsb3dTdGVwcy5sZW5ndGg7IGktLTsgKSB7XG4gICAgICBjb25zdCBmbG93U3RlcCA9IGZsb3dTdGVwc1tpXTtcbiAgICAgIGxldCBwYXJhbXM7XG4gICAgICBpZiAoZmxvd1N0ZXAucXVlcnlQYXJhbXMpIHtcbiAgICAgICAgcGFyYW1zID0gT2JqZWN0LmtleXMoZmxvd1N0ZXAucXVlcnlQYXJhbXMpLnJlZHVjZShcbiAgICAgICAgICAoY29uY2F0LCBrZXkpID0+XG4gICAgICAgICAgICBgJHtjb25jYXR9JiR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICBmbG93U3RlcC5xdWVyeVBhcmFtc1trZXldXG4gICAgICAgICAgICApfWAsXG4gICAgICAgICAgJz8nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyBUaGUgcm91dGUgaXMgYWN0aXZlIGlmIHRoZSByb3V0ZXIgcmV0dXJucyBpc0FjdGl2ZSBhcyB0cnVlLlxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnJvdXRlci5pc0FjdGl2ZShcbiAgICAgICAgICBgJHtmbG93U3RlcC5yb3V0ZVBhdGh9JHtwYXJhbXMgPyBwYXJhbXMgOiAnJ31gLFxuICAgICAgICAgIGZhbHNlIC8vIGV4YWN0IHJvdXRlIHBhdGggbWF0Y2hcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=