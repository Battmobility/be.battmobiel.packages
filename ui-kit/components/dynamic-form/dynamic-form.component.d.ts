import { ComponentFactoryResolver, OnInit, Type, ViewContainerRef } from '@angular/core';
import { DynamicFormComponentType } from './types/dynamic-form-component.type';
export declare class DynamicFormComponent<T> implements OnInit {
    private componentFactoryResolver;
    private viewContainerRef;
    /**
     * The component that must be dynamically injected into the template
     */
    dynamicFormComponent: Type<DynamicFormComponentType<T>>;
    private componentRef;
    private localTc;
    private localData;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    /**
     * The translation context.
     */
    set tc(tc: string);
    /**
     * The data we want to pass to the dynamic attribute.
     */
    set data(data: T);
    ngOnInit(): void;
}
