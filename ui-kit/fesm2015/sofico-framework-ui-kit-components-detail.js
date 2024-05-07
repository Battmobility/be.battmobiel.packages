import { Component, ComponentFactoryResolver, ViewContainerRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class DetailComponent {
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

class DetailModule {
}
DetailModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DetailComponent],
                exports: [DetailComponent],
                imports: [CommonModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DetailComponent, DetailModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-detail.js.map
