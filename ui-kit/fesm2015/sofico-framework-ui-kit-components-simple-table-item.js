import { Component, ChangeDetectionStrategy, ComponentFactoryResolver, ViewContainerRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class SimpleTableItemComponent {
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

class SimpleTableItemModule {
}
SimpleTableItemModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SimpleTableItemComponent],
                exports: [SimpleTableItemComponent],
                imports: [CommonModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { SimpleTableItemComponent, SimpleTableItemModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-simple-table-item.js.map
