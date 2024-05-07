import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Input, ViewContainerRef } from '@angular/core';
export class TableListItemComponent {
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
TableListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-table-list-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ``,
                styles: [""]
            },] }
];
TableListItemComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
TableListItemComponent.propDecorators = {
    tc: [{ type: Input }],
    entity: [{ type: Input }],
    dynamicRowComponent: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvdGFibGUtbGlzdC1pdGVtL3RhYmxlLWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1Qsd0JBQXdCLEVBRXhCLEtBQUssRUFHTCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFTdkIsTUFBTSxPQUFPLHNCQUFzQjtJQWdDakMsWUFDVSx3QkFBa0QsRUFDbEQsZ0JBQWtDO1FBRGxDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN6QyxDQUFDO0lBOUJKOztPQUVHO0lBQ0gsSUFBYSxFQUFFLENBQUMsRUFBVTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFnQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYSxNQUFNLENBQUMsTUFBUztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQztJQVlELFFBQVE7UUFDTixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ25FLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQWdCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ2hFLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxFQUFFOzthQUViOzs7WUFkQyx3QkFBd0I7WUFLeEIsZ0JBQWdCOzs7aUJBa0JmLEtBQUs7cUJBV0wsS0FBSztrQ0FXTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFR5cGUsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3R5cGVzL3RhYmxlLWl0ZW0tY29tcG9uZW50LnR5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtdGFibGUtbGlzdC1pdGVtJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgYCxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVMaXN0SXRlbUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VGFibGVJdGVtQ29tcG9uZW50PFQ+PjtcbiAgcHJpdmF0ZSBsb2NhbFRjOiBzdHJpbmc7XG4gIHByaXZhdGUgbG9jYWxFbnRpdHk6IFQ7XG5cbiAgLyoqXG4gICAqIFRoZSB0cmFuc2xhdGlvbiBjb250ZXh0LlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHRjKHRjOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvY2FsVGMgPSB0YztcblxuICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIGFueSkudGMgPSB0aGlzLmxvY2FsVGM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBlbnRpdHkgd2Ugd2FudCB0byBzZXQuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgZW50aXR5KGVudGl0eTogVCkge1xuICAgIHRoaXMubG9jYWxFbnRpdHkgPSBlbnRpdHk7XG5cbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcbiAgICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBhbnkpLmVudGl0eSA9IHRoaXMubG9jYWxFbnRpdHk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdGhhdCBtdXN0IGJlIGR5bmFtaWNhbGx5IGluamVjdGVkIGludG8gdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgQElucHV0KCkgZHluYW1pY1Jvd0NvbXBvbmVudDogVHlwZTxUYWJsZUxpc3RJdGVtQ29tcG9uZW50PFQ+PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgdGhpcy5keW5hbWljUm93Q29tcG9uZW50XG4gICAgKTtcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIGFueSkudGMgPSB0aGlzLmxvY2FsVGM7XG4gICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIGFueSkuZW50aXR5ID0gdGhpcy5sb2NhbEVudGl0eTtcbiAgfVxufVxuIl19