import { Type } from '@angular/core';
import { TableItemComponent } from '@sofico-framework/ui-kit/components/table-list-item';
import { SortingOrderConfig } from '@sofico-framework/utils';
/**
 * Configuration/builder to build an table config
 * This object contains configuration regarding initial sorting of an object
 */
export declare class SimpleTableConfig<T> {
    functionalProps: {
        id: number;
        header: string;
        selector: (entity: T) => any;
        searchable: boolean;
        sortable: boolean;
        plainSort: boolean;
    }[];
    initialSorting: SortingOrderConfig<T>;
    dynamicRowComponent: Type<TableItemComponent<T>>;
    initialSortingFuncPropRef: any;
    private functionalPropCount;
    setDynamicRowComponent(component: Type<TableItemComponent<T>>): SimpleTableConfig<T>;
    withNaturalSorting(): SimpleTableConfig<T>;
    withPlainSorting(label: string): SimpleTableConfig<T>;
    asInitialSorting(order: 'asc' | 'desc'): SimpleTableConfig<T>;
    addFunctionalProp(selector: (entity: T) => any): SimpleTableConfig<T>;
    setHeader(header: string): SimpleTableConfig<T>;
}
