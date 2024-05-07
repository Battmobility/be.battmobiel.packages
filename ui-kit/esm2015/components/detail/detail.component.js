import { Component, ComponentFactoryResolver, Input, ViewContainerRef } from '@angular/core';
export class DetailComponent {
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
        const factory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicDetailComponent);
        this.componentRef = this.viewContainerRef.createComponent(factory);
        this.componentRef.instance.tc = this.localTc;
        this.componentRef.instance.entity = this.localEntity;
    }
}
DetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-detail',
                template: ''
            },] }
];
DetailComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DetailComponent.propDecorators = {
    dynamicDetailComponent: [{ type: Input }],
    tc: [{ type: Input }],
    entity: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZGV0YWlsL2RldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsS0FBSyxFQUdMLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQU92QixNQUFNLE9BQU8sZUFBZTtJQVMxQixZQUNVLHdCQUFrRCxFQUNsRCxnQkFBa0M7UUFEbEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3pDLENBQUM7SUFFSjs7T0FFRztJQUNILElBQWEsRUFBRSxDQUFDLEVBQVU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBZ0IsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2RDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILElBQWEsTUFBTSxDQUFDLE1BQVM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMvRDtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUNuRSxJQUFJLENBQUMsc0JBQXNCLENBQzVCLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFnQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNoRSxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsRUFBRTthQUNiOzs7WUFaQyx3QkFBd0I7WUFLeEIsZ0JBQWdCOzs7cUNBWWYsS0FBSztpQkFhTCxLQUFLO3FCQVdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBUeXBlLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGV0YWlsQ29tcG9uZW50VHlwZSB9IGZyb20gJy4vdHlwZXMvZGV0YWlsLWNvbXBvbmVudC50eXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWRldGFpbCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB0aGF0IG11c3QgYmUgZHluYW1pY2FsbHkgaW5qZWN0ZWQgaW50byB0aGUgdGVtcGxhdGUuXG4gICAqL1xuICBASW5wdXQoKSBkeW5hbWljRGV0YWlsQ29tcG9uZW50OiBUeXBlPERldGFpbENvbXBvbmVudFR5cGU8VD4+O1xuICBwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPERldGFpbENvbXBvbmVudFR5cGU8VD4+O1xuICBwcml2YXRlIGxvY2FsVGM6IHN0cmluZztcbiAgcHJpdmF0ZSBsb2NhbEVudGl0eTogVDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxuICApIHt9XG5cbiAgLyoqXG4gICAqIFRoZSB0cmFuc2xhdGlvbiBjb250ZXh0LlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHRjKHRjOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvY2FsVGMgPSB0YztcblxuICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIGFueSkudGMgPSB0aGlzLmxvY2FsVGM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBlbnRpdHkgd2Ugd2FudCB0byBzZXQuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgZW50aXR5KGVudGl0eTogVCkge1xuICAgIHRoaXMubG9jYWxFbnRpdHkgPSBlbnRpdHk7XG5cbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcbiAgICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBhbnkpLmVudGl0eSA9IHRoaXMubG9jYWxFbnRpdHk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgdGhpcy5keW5hbWljRGV0YWlsQ29tcG9uZW50XG4gICAgKTtcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIGFueSkudGMgPSB0aGlzLmxvY2FsVGM7XG4gICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIGFueSkuZW50aXR5ID0gdGhpcy5sb2NhbEVudGl0eTtcbiAgfVxufVxuIl19