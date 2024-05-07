import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Input, ViewContainerRef } from '@angular/core';
export class SimpleTableItemComponent {
    constructor(componentFactoryResolver, viewContainerRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
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
}
SimpleTableItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-simple-table-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ``,
                styles: [""]
            },] }
];
SimpleTableItemComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
SimpleTableItemComponent.propDecorators = {
    tc: [{ type: Input }],
    entity: [{ type: Input }],
    dynamicRowComponent: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9zaW1wbGUtdGFibGUtaXRlbS9zaW1wbGUtdGFibGUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1Qsd0JBQXdCLEVBRXhCLEtBQUssRUFHTCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFTdkIsTUFBTSxPQUFPLHdCQUF3QjtJQWdDbkMsWUFDVSx3QkFBa0QsRUFDbEQsZ0JBQWtDO1FBRGxDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN6QyxDQUFDO0lBOUJKOztPQUVHO0lBQ0gsSUFBYSxFQUFFLENBQUMsRUFBVTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFnQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYSxNQUFNLENBQUMsTUFBUztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQztJQVlELFFBQVE7UUFDTixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ25FLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQWdCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ2hFLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxFQUFFOzthQUViOzs7WUFkQyx3QkFBd0I7WUFLeEIsZ0JBQWdCOzs7aUJBa0JmLEtBQUs7cUJBV0wsS0FBSztrQ0FXTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFR5cGUsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZUl0ZW1Db21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy90YWJsZS1saXN0LWl0ZW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2Ytc2ltcGxlLXRhYmxlLWl0ZW0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBgLFxuICBzdHlsZVVybHM6IFsnLi9zaW1wbGUtdGFibGUtaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZVRhYmxlSXRlbUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VGFibGVJdGVtQ29tcG9uZW50PFQ+PjtcbiAgcHJpdmF0ZSBsb2NhbFRjOiBzdHJpbmc7XG4gIHByaXZhdGUgbG9jYWxFbnRpdHk6IFQ7XG5cbiAgLyoqXG4gICAqIFRoZSB0cmFuc2xhdGlvbiBjb250ZXh0LlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHRjKHRjOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvY2FsVGMgPSB0YztcblxuICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIGFueSkudGMgPSB0aGlzLmxvY2FsVGM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBlbnRpdHkgd2Ugd2FudCB0byBzZXQuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgZW50aXR5KGVudGl0eTogVCkge1xuICAgIHRoaXMubG9jYWxFbnRpdHkgPSBlbnRpdHk7XG5cbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcbiAgICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBhbnkpLmVudGl0eSA9IHRoaXMubG9jYWxFbnRpdHk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdGhhdCBtdXN0IGJlIGR5bmFtaWNhbGx5IGluamVjdGVkIGludG8gdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgQElucHV0KCkgZHluYW1pY1Jvd0NvbXBvbmVudDogVHlwZTxTaW1wbGVUYWJsZUl0ZW1Db21wb25lbnQ8VD4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICB0aGlzLmR5bmFtaWNSb3dDb21wb25lbnRcbiAgICApO1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgYW55KS50YyA9IHRoaXMubG9jYWxUYztcbiAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgYW55KS5lbnRpdHkgPSB0aGlzLmxvY2FsRW50aXR5O1xuICB9XG59XG4iXX0=