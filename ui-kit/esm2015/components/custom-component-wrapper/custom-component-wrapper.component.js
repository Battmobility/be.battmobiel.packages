import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
export class CustomComponentWrapperComponent {
    constructor(resolver) {
        this.resolver = resolver;
        this.createComponent(this.component);
    }
    createComponent(component) {
        if (component && this.dynamicComponent) {
            this.dynamicComponent.clear();
            const factory = this.resolver.resolveComponentFactory(component);
            this.componentRef = this.dynamicComponent.createComponent(factory);
            if (this.inputData) {
                Object.entries(this.inputData).forEach(([key, val]) => (this.componentRef.instance[key] = val));
            }
        }
    }
    ngOnChanges(changes) {
        if (changes.inputData && this.componentRef && this.inputData) {
            Object.entries(this.inputData).forEach(([key, val]) => (this.componentRef.instance[key] = val));
        }
        if (changes.component) {
            if (this.componentRef) {
                this.componentRef.destroy();
            }
            this.createComponent(this.component);
        }
    }
}
CustomComponentWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-custom-component-wrapper',
                template: ` <template #dynamicComponent></template> `
            },] }
];
CustomComponentWrapperComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
CustomComponentWrapperComponent.propDecorators = {
    component: [{ type: Input }],
    inputData: [{ type: Input }],
    dynamicComponent: [{ type: ViewChild, args: ['dynamicComponent', { static: true, read: ViewContainerRef },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNvbXBvbmVudC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvY3VzdG9tLWNvbXBvbmVudC13cmFwcGVyL2N1c3RvbS1jb21wb25lbnQtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCx3QkFBd0IsRUFFeEIsS0FBSyxFQUlMLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFNdkIsTUFBTSxPQUFPLCtCQUErQjtJQWMxQyxZQUFvQixRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZUFBZSxDQUFDLFNBQVM7UUFDdkIsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5QixNQUFNLE9BQU8sR0FBd0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FDeEUsU0FBUyxDQUNWLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQ3BDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQ3hELENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzVELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FDcEMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FDeEQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM3QjtZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUUsMkNBQTJDO2FBQ3REOzs7WUFiQyx3QkFBd0I7Ozt3QkFrQnZCLEtBQUs7d0JBS0wsS0FBSzsrQkFDTCxTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFR5cGUsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWN1c3RvbS1jb21wb25lbnQtd3JhcHBlcicsXG4gIHRlbXBsYXRlOiBgIDx0ZW1wbGF0ZSAjZHluYW1pY0NvbXBvbmVudD48L3RlbXBsYXRlPiBgXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUNvbXBvbmVudFdyYXBwZXJDb21wb25lbnQ8Qz4gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB3ZSB3YW50IHRvIHJlbmRlclxuICAgKi9cbiAgQElucHV0KCkgY29tcG9uZW50OiBUeXBlPEM+O1xuXG4gIC8qKlxuICAgKiB0aGUgaW5wdXQgZGF0YVxuICAgKi9cbiAgQElucHV0KCkgaW5wdXREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBAVmlld0NoaWxkKCdkeW5hbWljQ29tcG9uZW50JywgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgZHluYW1pY0NvbXBvbmVudDtcbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Qz47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gICAgdGhpcy5jcmVhdGVDb21wb25lbnQodGhpcy5jb21wb25lbnQpO1xuICB9XG5cbiAgY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmIChjb21wb25lbnQgJiYgdGhpcy5keW5hbWljQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmR5bmFtaWNDb21wb25lbnQuY2xlYXIoKTtcbiAgICAgIGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8Qz4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb21wb25lbnRcbiAgICAgICk7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuZHluYW1pY0NvbXBvbmVudC5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgICBpZiAodGhpcy5pbnB1dERhdGEpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5pbnB1dERhdGEpLmZvckVhY2goXG4gICAgICAgICAgKFtrZXksIHZhbF0pID0+ICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gdmFsKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5pbnB1dERhdGEgJiYgdGhpcy5jb21wb25lbnRSZWYgJiYgdGhpcy5pbnB1dERhdGEpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuaW5wdXREYXRhKS5mb3JFYWNoKFxuICAgICAgICAoW2tleSwgdmFsXSkgPT4gKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW2tleV0gPSB2YWwpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5jb21wb25lbnQpIHtcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=