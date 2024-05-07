import { ComponentFactoryResolver, OnInit, Type, ViewContainerRef } from '@angular/core';
export declare class TableListItemComponent<T> implements OnInit {
    private componentFactoryResolver;
    private viewContainerRef;
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
    dynamicRowComponent: Type<TableListItemComponent<T>>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
}
