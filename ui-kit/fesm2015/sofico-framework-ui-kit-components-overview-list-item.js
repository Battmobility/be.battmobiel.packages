import { InteractivityChecker } from '@angular/cdk/a11y';
import { Component, ChangeDetectionStrategy, ComponentFactoryResolver, ViewContainerRef, Input, NgModule } from '@angular/core';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { CommonModule } from '@angular/common';

class OverviewListItemComponent {
    constructor(componentFactoryResolver, viewContainerRef, interactivityChecker) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.interactivityChecker = interactivityChecker;
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
    sofFocus() {
        var _a;
        if (this.componentRef.instance &&
            typeof this.componentRef.instance.sofFocus ===
                'function') {
            this.componentRef.instance.sofFocus();
        }
        else if (this.interactivityChecker.isFocusable(this.componentRef.location.nativeElement)) {
            this.componentRef.location.nativeElement.focus();
        }
        else if (this.interactivityChecker.isFocusable((_a = this.componentRef.location.nativeElement) === null || _a === void 0 ? void 0 : _a.firstChild)) {
            this.componentRef.location.nativeElement.firstChild.focus();
        }
        else {
            throw Error('The dynamic row component nor its first child is focusable.');
        }
    }
}
OverviewListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-overview-list-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ``,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: OverviewListItemComponent }
                ],
                styles: [""]
            },] }
];
OverviewListItemComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: InteractivityChecker }
];
OverviewListItemComponent.propDecorators = {
    tc: [{ type: Input }],
    entity: [{ type: Input }],
    dynamicRowComponent: [{ type: Input }]
};

class OverviewListItemModule {
}
OverviewListItemModule.decorators = [
    { type: NgModule, args: [{
                declarations: [OverviewListItemComponent],
                exports: [OverviewListItemComponent],
                imports: [CommonModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { OverviewListItemComponent, OverviewListItemModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-overview-list-item.js.map
