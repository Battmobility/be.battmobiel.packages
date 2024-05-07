import { __decorate } from "tslib";
import { Component, HostBinding } from '@angular/core';
import { Loading } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
let CenteredSpinnerComponent = class CenteredSpinnerComponent {
    constructor() {
        this.show = false;
    }
    get showBinding() {
        return this.show;
    }
    ngOnInit() {
        this.loading$
            .pipe(takeUntilDestroy(this))
            .subscribe(loading => (this.show = loading));
    }
    ngOnDestroy() { }
};
CenteredSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-centered-spinner',
                template: `
    <div class="overlay"></div>
    <sof-loading></sof-loading>
  `,
                styles: [":host{display:none;z-index:999}:host.show{position:fixed;width:100px;height:100px;margin:auto;justify-content:center;align-items:center;display:flex;top:0;left:0;bottom:0;right:0}:host.show .overlay{position:absolute;background-color:#fff;width:100px;border-radius:.25rem;opacity:.7;height:100px}"]
            },] }
];
CenteredSpinnerComponent.ctorParameters = () => [];
CenteredSpinnerComponent.propDecorators = {
    showBinding: [{ type: HostBinding, args: ['class.show',] }]
};
__decorate([
    Loading()
], CenteredSpinnerComponent.prototype, "loading$", void 0);
CenteredSpinnerComponent = __decorate([
    UntilDestroy()
], CenteredSpinnerComponent);
export { CenteredSpinnerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VudGVyZWQtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2NlbnRlcmVkLXNwaW5uZXIvY2VudGVyZWQtc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0lBV3hELHdCQUF3QixTQUF4Qix3QkFBd0I7SUFTbkM7UUFOUSxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBTU4sQ0FBQztJQUpoQixJQUErQixXQUFXO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRO2FBQ1YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXLEtBQVUsQ0FBQztDQUN2QixDQUFBOztZQTFCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7R0FHVDs7YUFFRjs7OzswQkFNRSxXQUFXLFNBQUMsWUFBWTs7QUFKZDtJQUFWLE9BQU8sRUFBRTswREFBVTtBQURULHdCQUF3QjtJQVRwQyxZQUFZLEVBQUU7R0FTRix3QkFBd0IsQ0FrQnBDO1NBbEJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSwgVW50aWxEZXN0cm95IH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWNlbnRlcmVkLXNwaW5uZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgPHNvZi1sb2FkaW5nPjwvc29mLWxvYWRpbmc+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2NlbnRlcmVkLXNwaW5uZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDZW50ZXJlZFNwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBMb2FkaW5nKCkgbG9hZGluZyQ7XG5cbiAgcHJpdmF0ZSBzaG93ID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaG93JykgZ2V0IHNob3dCaW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3c7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nJFxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSlcbiAgICAgIC5zdWJzY3JpYmUobG9hZGluZyA9PiAodGhpcy5zaG93ID0gbG9hZGluZykpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxufVxuIl19