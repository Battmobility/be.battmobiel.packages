import { InteractivityChecker } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Input, ViewContainerRef } from '@angular/core';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
export class OverviewListItemComponent {
    constructor(componentFactoryResolver, viewContainerRef, interactivityChecker) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.interactivityChecker = interactivityChecker;
    }
    /**
     * The translation context.
     */
    set tc(tc) {
        this.localTc = tc;
        if (this.componentRef) {
            this.componentRef.instance.tc = this.localTc;
        }
    }
    /**
     * The entity we want to set.
     */
    set entity(entity) {
        this.localEntity = entity;
        if (this.componentRef) {
            this.componentRef.instance.entity = this.localEntity;
        }
    }
    ngOnInit() {
        const factory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicRowComponent);
        this.componentRef = this.viewContainerRef.createComponent(factory);
        this.componentRef.instance.tc = this.localTc;
        this.componentRef.instance.entity = this.localEntity;
    }
    sofFocus() {
        var _a;
        if (this.componentRef.instance &&
            typeof this.componentRef.instance.sofFocus ===
                'function') {
            this.componentRef.instance.sofFocus();
        }
        else if (this.interactivityChecker.isFocusable(this.componentRef.location.nativeElement)) {
            this.componentRef.location.nativeElement.focus();
        }
        else if (this.interactivityChecker.isFocusable((_a = this.componentRef.location.nativeElement) === null || _a === void 0 ? void 0 : _a.firstChild)) {
            this.componentRef.location.nativeElement.firstChild.focus();
        }
        else {
            throw Error('The dynamic row component nor its first child is focusable.');
        }
    }
}
OverviewListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-overview-list-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ``,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: OverviewListItemComponent }
                ],
                styles: [""]
            },] }
];
OverviewListItemComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: InteractivityChecker }
];
OverviewListItemComponent.propDecorators = {
    tc: [{ type: Input }],
    entity: [{ type: Input }],
    dynamicRowComponent: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvb3ZlcnZpZXctbGlzdC1pdGVtL292ZXJ2aWV3LWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1Qsd0JBQXdCLEVBRXhCLEtBQUssRUFHTCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLG1CQUFtQixFQUNwQixNQUFNLDJDQUEyQyxDQUFDO0FBWW5ELE1BQU0sT0FBTyx5QkFBeUI7SUFnQ3BDLFlBQ1Usd0JBQWtELEVBQ2xELGdCQUFrQyxFQUNsQyxvQkFBMEM7UUFGMUMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDakQsQ0FBQztJQS9CSjs7T0FFRztJQUNILElBQWEsRUFBRSxDQUFDLEVBQVU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBZ0IsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2RDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILElBQWEsTUFBTSxDQUFDLE1BQVM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMvRDtJQUNILENBQUM7SUFhRCxRQUFRO1FBQ04sTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUNuRSxJQUFJLENBQUMsbUJBQW1CLENBQ3pCLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFnQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNoRSxDQUFDO0lBRUQsUUFBUTs7UUFDTixJQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUTtZQUMxQixPQUFTLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBK0IsQ0FBQyxRQUFRO2dCQUNqRSxVQUFVLEVBQ1o7WUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQStCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDaEU7YUFBTSxJQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FDekMsRUFDRDtZQUNBLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsRDthQUFNLElBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsT0FDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSwwQ0FBRSxVQUFVLENBQ3JELEVBQ0Q7WUFDQSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzdEO2FBQU07WUFDTCxNQUFNLEtBQUssQ0FDVCw2REFBNkQsQ0FDOUQsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7O1lBaEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLEVBQUU7Z0JBRVosU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSx5QkFBeUIsRUFBRTtpQkFDekU7O2FBQ0Y7OztZQXJCQyx3QkFBd0I7WUFLeEIsZ0JBQWdCO1lBVFQsb0JBQW9COzs7aUJBa0MxQixLQUFLO3FCQVdMLEtBQUs7a0NBV0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGVyYWN0aXZpdHlDaGVja2VyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFR5cGUsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBPblNvZkZvY3VzLFxuICBTT0ZfRk9DVVNfQ09NUE9ORU5UXG59IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9kaXJlY3RpdmVzL2ZvY3VzJztcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLW92ZXJ2aWV3LWxpc3QtaXRlbScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHN0eWxlVXJsczogWycuL292ZXJ2aWV3LWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBPdmVydmlld0xpc3RJdGVtQ29tcG9uZW50IH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBPdmVydmlld0xpc3RJdGVtQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBPblNvZkZvY3VzIHtcbiAgcHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxMaXN0SXRlbUNvbXBvbmVudDxUPj47XG4gIHByaXZhdGUgbG9jYWxUYzogc3RyaW5nO1xuICBwcml2YXRlIGxvY2FsRW50aXR5OiBUO1xuXG4gIC8qKlxuICAgKiBUaGUgdHJhbnNsYXRpb24gY29udGV4dC5cbiAgICovXG4gIEBJbnB1dCgpIHNldCB0Yyh0Yzogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2NhbFRjID0gdGM7XG5cbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcbiAgICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBhbnkpLnRjID0gdGhpcy5sb2NhbFRjO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZW50aXR5IHdlIHdhbnQgdG8gc2V0LlxuICAgKi9cbiAgQElucHV0KCkgc2V0IGVudGl0eShlbnRpdHk6IFQpIHtcbiAgICB0aGlzLmxvY2FsRW50aXR5ID0gZW50aXR5O1xuXG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG4gICAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgYW55KS5lbnRpdHkgPSB0aGlzLmxvY2FsRW50aXR5O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHRoYXQgbXVzdCBiZSBkeW5hbWljYWxseSBpbmplY3RlZCBpbnRvIHRoZSB0ZW1wbGF0ZS5cbiAgICovXG4gIEBJbnB1dCgpIGR5bmFtaWNSb3dDb21wb25lbnQ6IFR5cGU8TGlzdEl0ZW1Db21wb25lbnQ8VD4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgaW50ZXJhY3Rpdml0eUNoZWNrZXI6IEludGVyYWN0aXZpdHlDaGVja2VyXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICB0aGlzLmR5bmFtaWNSb3dDb21wb25lbnRcbiAgICApO1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgYW55KS50YyA9IHRoaXMubG9jYWxUYztcbiAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgYW55KS5lbnRpdHkgPSB0aGlzLmxvY2FsRW50aXR5O1xuICB9XG5cbiAgc29mRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgJiZcbiAgICAgIHR5cGVvZiAoKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIGFueSkgYXMgT25Tb2ZGb2N1cykuc29mRm9jdXMgPT09XG4gICAgICAgICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgICgodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgYW55KSBhcyBPblNvZkZvY3VzKS5zb2ZGb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLmludGVyYWN0aXZpdHlDaGVja2VyLmlzRm9jdXNhYmxlKFxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMuaW50ZXJhY3Rpdml0eUNoZWNrZXIuaXNGb2N1c2FibGUoXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ/LmZpcnN0Q2hpbGRcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgJ1RoZSBkeW5hbWljIHJvdyBjb21wb25lbnQgbm9yIGl0cyBmaXJzdCBjaGlsZCBpcyBmb2N1c2FibGUuJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==