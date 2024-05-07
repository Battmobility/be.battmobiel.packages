import { Component, ComponentFactoryResolver, Input, ViewContainerRef } from '@angular/core';
export class DynamicFormComponent {
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
     * The data we want to pass to the dynamic attribute.
     */
    set data(data) {
        this.localData = data;
        if (this.componentRef) {
            this.componentRef.instance.data = this.localData;
        }
    }
    ngOnInit() {
        const factory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicFormComponent);
        this.componentRef = this.viewContainerRef.createComponent(factory);
        this.componentRef.instance.tc = this.localTc;
        this.componentRef.instance.data = this.localData;
    }
}
DynamicFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-dynamic-form',
                template: ``
            },] }
];
DynamicFormComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DynamicFormComponent.propDecorators = {
    dynamicFormComponent: [{ type: Input }],
    tc: [{ type: Input }],
    data: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsS0FBSyxFQUdMLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQU92QixNQUFNLE9BQU8sb0JBQW9CO0lBUy9CLFlBQ1Usd0JBQWtELEVBQ2xELGdCQUFrQztRQURsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDekMsQ0FBQztJQUVKOztPQUVHO0lBQ0gsSUFBYSxFQUFFLENBQUMsRUFBVTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFnQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYSxJQUFJLENBQUMsSUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFnQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ25FLElBQUksQ0FBQyxvQkFBb0IsQ0FDMUIsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQWdCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFnQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzVELENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLEVBQUU7YUFDYjs7O1lBWkMsd0JBQXdCO1lBS3hCLGdCQUFnQjs7O21DQVlmLEtBQUs7aUJBYUwsS0FBSzttQkFXTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVHlwZSxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29tcG9uZW50VHlwZSB9IGZyb20gJy4vdHlwZXMvZHluYW1pYy1mb3JtLWNvbXBvbmVudC50eXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWR5bmFtaWMtZm9ybScsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHRoYXQgbXVzdCBiZSBkeW5hbWljYWxseSBpbmplY3RlZCBpbnRvIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgQElucHV0KCkgZHluYW1pY0Zvcm1Db21wb25lbnQ6IFR5cGU8RHluYW1pY0Zvcm1Db21wb25lbnRUeXBlPFQ+PjtcbiAgcHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxEeW5hbWljRm9ybUNvbXBvbmVudFR5cGU8VD4+O1xuICBwcml2YXRlIGxvY2FsVGM6IHN0cmluZztcbiAgcHJpdmF0ZSBsb2NhbERhdGE6IFQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgdHJhbnNsYXRpb24gY29udGV4dC5cbiAgICovXG4gIEBJbnB1dCgpIHNldCB0Yyh0Yzogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2NhbFRjID0gdGM7XG5cbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcbiAgICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBhbnkpLnRjID0gdGhpcy5sb2NhbFRjO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGF0YSB3ZSB3YW50IHRvIHBhc3MgdG8gdGhlIGR5bmFtaWMgYXR0cmlidXRlLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IGRhdGEoZGF0YTogVCkge1xuICAgIHRoaXMubG9jYWxEYXRhID0gZGF0YTtcblxuICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIGFueSkuZGF0YSA9IHRoaXMubG9jYWxEYXRhO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIHRoaXMuZHluYW1pY0Zvcm1Db21wb25lbnRcbiAgICApO1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgYW55KS50YyA9IHRoaXMubG9jYWxUYztcbiAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgYW55KS5kYXRhID0gdGhpcy5sb2NhbERhdGE7XG4gIH1cbn1cbiJdfQ==