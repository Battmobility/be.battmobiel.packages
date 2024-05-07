import { Component, ComponentFactoryResolver, ViewContainerRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class DynamicFormComponent {
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

class DynamicFormModule {
}
DynamicFormModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DynamicFormComponent],
                exports: [DynamicFormComponent],
                imports: [CommonModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DynamicFormComponent, DynamicFormModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-dynamic-form.js.map
