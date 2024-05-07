import { InteractivityChecker } from '@angular/cdk/a11y';
import { ComponentFactoryResolver, OnInit, Type, ViewContainerRef } from '@angular/core';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import { ListItemComponent } from '@sofico-framework/ui-kit/types';
export declare class OverviewListItemComponent<T> implements OnInit, OnSofFocus {
    private componentFactoryResolver;
    private viewContainerRef;
    private interactivityChecker;
    private componentRef;
    private localTc;
    private localEntity;
    /**
     * The translation context.
     */
    set tc(tc: string);
    /**
     * The entity we want to set.
     */
    set entity(entity: T);
    /**
     * The component that must be dynamically injected into the template.
     */
    dynamicRowComponent: Type<ListItemComponent<T>>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, interactivityChecker: InteractivityChecker);
    ngOnInit(): void;
    sofFocus(): void;
}
