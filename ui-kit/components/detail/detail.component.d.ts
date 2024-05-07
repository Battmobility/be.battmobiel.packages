import { ComponentFactoryResolver, OnInit, Type, ViewContainerRef } from '@angular/core';
import { DetailComponentType } from './types/detail-component.type';
export declare class DetailComponent<T> implements OnInit {
    private componentFactoryResolver;
    private viewContainerRef;
    /**
     * The component that must be dynamically injected into the template.
     */
    dynamicDetailComponent: Type<DetailComponentType<T>>;
    private componentRef;
    private localTc;
    private localEntity;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    /**
     * The translation context.
     */
    set tc(tc: string);
    /**
     * The entity we want to set.
     */
    set entity(entity: T);
    ngOnInit(): void;
}
