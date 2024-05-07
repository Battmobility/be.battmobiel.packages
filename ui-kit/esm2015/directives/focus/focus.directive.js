import { __decorate } from "tslib";
import { Directive, ElementRef, Inject, Input, Optional } from '@angular/core';
import { Changes, takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { Subject } from 'rxjs';
import { distinctUntilChanged, startWith, takeUntil } from 'rxjs/operators';
import { SOF_FOCUS_COMPONENT } from './focus.token';
let FocusDirective = class FocusDirective {
    constructor(component, elementRef) {
        this.component = component;
        this.elementRef = elementRef;
        this.done$ = new Subject();
    }
    ngOnChanges() { }
    ngOnDestroy() { }
    ngAfterViewInit() {
        this.combined$ = this.getCombined$();
        this.combined$.pipe(takeUntilDestroy(this)).subscribe(sofFocus => {
            this.setFocus(sofFocus);
        });
    }
    getCombined$() {
        return this.sofFocus$.pipe(startWith(this.sofFocus), distinctUntilChanged(), takeUntil(this.done$));
    }
    setFocus(sofFocus) {
        if (['', true].includes(sofFocus)) {
            this.done$.next();
            setTimeout(() => {
                if (this.component) {
                    this.component.sofFocus();
                }
                else {
                    this.elementRef.nativeElement.focus();
                }
            }, 0);
        }
    }
};
FocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sofFocus]'
            },] }
];
FocusDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SOF_FOCUS_COMPONENT,] }] },
    { type: ElementRef }
];
FocusDirective.propDecorators = {
    sofFocus: [{ type: Input }]
};
__decorate([
    Changes('sofFocus')
], FocusDirective.prototype, "sofFocus$", void 0);
FocusDirective = __decorate([
    UntilDestroy()
], FocusDirective);
export { FocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvZGlyZWN0aXZlcy9mb2N1cy9mb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztJQU12QyxjQUFjLFNBQWQsY0FBYztJQU16QixZQUdVLFNBQTRCLEVBQzVCLFVBQXNCO1FBRHRCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFOeEIsVUFBSyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFPM0IsQ0FBQztJQUVKLFdBQVcsS0FBVSxDQUFDO0lBRXRCLFdBQVcsS0FBVSxDQUFDO0lBRXRCLGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFlBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDeEIsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsb0JBQW9CLEVBQUUsRUFDdEIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDdEIsQ0FBQztJQUNKLENBQUM7SUFFTyxRQUFRLENBQUMsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDM0I7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3ZDO1lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUEvQ0EsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7NENBUUksUUFBUSxZQUNSLE1BQU0sU0FBQyxtQkFBbUI7WUF6QjdCLFVBQVU7Ozt1QkFrQlQsS0FBSzs7QUFDZTtJQUFwQixPQUFPLENBQUMsVUFBVSxDQUFDO2lEQUFnQztBQUZ6QyxjQUFjO0lBSjFCLFlBQVksRUFBRTtHQUlGLGNBQWMsQ0E0QzFCO1NBNUNZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYW5nZXMsIHRha2VVbnRpbERlc3Ryb3ksIFVudGlsRGVzdHJveSB9IGZyb20gJ25neC1yZWFjdGl2ZXRvb2xraXQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT25Tb2ZGb2N1cyB9IGZyb20gJy4vZm9jdXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNPRl9GT0NVU19DT01QT05FTlQgfSBmcm9tICcuL2ZvY3VzLnRva2VuJztcblxuQFVudGlsRGVzdHJveSgpXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc29mRm9jdXNdJ1xufSlcbmV4cG9ydCBjbGFzcyBGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc29mRm9jdXM7XG4gIEBDaGFuZ2VzKCdzb2ZGb2N1cycpIHNvZkZvY3VzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJpdmF0ZSBjb21iaW5lZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHByaXZhdGUgZG9uZSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChTT0ZfRk9DVVNfQ09NUE9ORU5UKVxuICAgIHByaXZhdGUgY29tcG9uZW50OiBPblNvZkZvY3VzIHwgbnVsbCxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29tYmluZWQkID0gdGhpcy5nZXRDb21iaW5lZCQoKTtcbiAgICB0aGlzLmNvbWJpbmVkJC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpLnN1YnNjcmliZShzb2ZGb2N1cyA9PiB7XG4gICAgICB0aGlzLnNldEZvY3VzKHNvZkZvY3VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tYmluZWQkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnNvZkZvY3VzJC5waXBlKFxuICAgICAgc3RhcnRXaXRoKHRoaXMuc29mRm9jdXMpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRvbmUkKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldEZvY3VzKHNvZkZvY3VzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKFsnJywgdHJ1ZV0uaW5jbHVkZXMoc29mRm9jdXMpKSB7XG4gICAgICB0aGlzLmRvbmUkLm5leHQoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudC5zb2ZGb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxufVxuIl19