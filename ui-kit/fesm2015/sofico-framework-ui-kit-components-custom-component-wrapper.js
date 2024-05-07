import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class CustomComponentWrapperComponent {
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

class CustomComponentWrapperModule {
}
CustomComponentWrapperModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [CustomComponentWrapperComponent],
                exports: [CustomComponentWrapperComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { CustomComponentWrapperComponent, CustomComponentWrapperModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-custom-component-wrapper.js.map
