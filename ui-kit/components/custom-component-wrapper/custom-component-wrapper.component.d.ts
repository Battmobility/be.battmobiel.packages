import { ComponentFactoryResolver, ComponentRef, OnChanges, SimpleChanges, Type } from '@angular/core';
export declare class CustomComponentWrapperComponent<C> implements OnChanges {
    private resolver;
    /**
     * The component we want to render
     */
    component: Type<C>;
    /**
     * the input data
     */
    inputData: {
        [key: string]: any;
    };
    dynamicComponent: any;
    componentRef: ComponentRef<C>;
    constructor(resolver: ComponentFactoryResolver);
    createComponent(component: any): void;
    ngOnChanges(changes: SimpleChanges): void;
}
