import { __decorate } from "tslib";
import { Component, HostBinding, Input } from '@angular/core';
import { Acting } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
let CenteredSpinnerOnActingComponent = class CenteredSpinnerOnActingComponent {
    constructor() {
        this.noClickThrough = false;
        this.show = false;
    }
    get showBinding() {
        return this.show && this.noClickThrough;
    }
    ngOnInit() {
        this.acting$
            .pipe(takeUntilDestroy(this))
            .subscribe(acting => (this.show = acting));
    }
    ngOnDestroy() { }
    onClick(event) {
        event.stopPropagation();
    }
};
CenteredSpinnerOnActingComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-centered-spinner-on-acting',
                template: `
    <div class="base" [class.show]="show">
      <div class="overlay" (click)="onClick($event)"></div>
      <sof-loading></sof-loading>
    </div>
  `,
                styles: [":host.block{position:fixed;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:999}:host .base{display:none;z-index:999}:host .show{position:fixed;width:100px;height:100px;margin:auto;justify-content:center;align-items:center;display:flex;top:0;left:0;bottom:0;right:0}:host .show .overlay{position:absolute;background-color:#fff;width:100px;border-radius:.25rem;opacity:.7;height:100px}"]
            },] }
];
CenteredSpinnerOnActingComponent.propDecorators = {
    noClickThrough: [{ type: Input }],
    showBinding: [{ type: HostBinding, args: ['class.block',] }]
};
__decorate([
    Acting()
], CenteredSpinnerOnActingComponent.prototype, "acting$", void 0);
CenteredSpinnerOnActingComponent = __decorate([
    UntilDestroy()
], CenteredSpinnerOnActingComponent);
export { CenteredSpinnerOnActingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VudGVyZWQtc3Bpbm5lci1vbi1hY3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9jZW50ZXJlZC1zcGlubmVyLW9uLWFjdGluZy9jZW50ZXJlZC1zcGlubmVyLW9uLWFjdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFHTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0lBYXhELGdDQUFnQyxTQUFoQyxnQ0FBZ0M7O1FBRWxDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBS2hDLFNBQUksR0FBRyxLQUFLLENBQUM7SUFhZixDQUFDO0lBakJDLElBQWdDLFdBQVc7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDMUMsQ0FBQztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTzthQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QixTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsV0FBVyxLQUFVLENBQUM7SUFFdEIsT0FBTyxDQUFDLEtBQWlCO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0YsQ0FBQTs7WUE5QkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFFBQVEsRUFBRTs7Ozs7R0FLVDs7YUFFRjs7OzZCQUdFLEtBQUs7MEJBQ0wsV0FBVyxTQUFDLGFBQWE7O0FBRmhCO0lBQVQsTUFBTSxFQUFFO2lFQUFTO0FBRFAsZ0NBQWdDO0lBWDVDLFlBQVksRUFBRTtHQVdGLGdDQUFnQyxDQW9CNUM7U0FwQlksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW5nIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSwgVW50aWxEZXN0cm95IH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWNlbnRlcmVkLXNwaW5uZXItb24tYWN0aW5nJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYmFzZVwiIFtjbGFzcy5zaG93XT1cInNob3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPjwvZGl2PlxuICAgICAgPHNvZi1sb2FkaW5nPjwvc29mLWxvYWRpbmc+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2NlbnRlcmVkLXNwaW5uZXItb24tYWN0aW5nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2VudGVyZWRTcGlubmVyT25BY3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBBY3RpbmcoKSBhY3RpbmckO1xuICBASW5wdXQoKSBub0NsaWNrVGhyb3VnaCA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmJsb2NrJykgZ2V0IHNob3dCaW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3cgJiYgdGhpcy5ub0NsaWNrVGhyb3VnaDtcbiAgfVxuXG4gIHNob3cgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGluZyRcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpXG4gICAgICAuc3Vic2NyaWJlKGFjdGluZyA9PiAodGhpcy5zaG93ID0gYWN0aW5nKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=