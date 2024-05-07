import { Component, ChangeDetectionStrategy, ComponentFactoryResolver, ViewContainerRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class TableListItemComponent {
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

class TableListItemModule {
}
TableListItemModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TableListItemComponent],
                exports: [TableListItemComponent],
                imports: [CommonModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { TableListItemComponent, TableListItemModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-table-list-item.js.map
