/**
 * Configuration/builder to build an table config
 * This object contains configuration regarding initial sorting of an object
 */
import { Type } from '@angular/core';
import { TableItemComponent } from '@sofico-framework/ui-kit/components/table-list-item';
import { SortingOrderConfig } from '@sofico-framework/utils';
export declare class TableListConfig<T> {
    /**
     * FunctionalProps:
     * id: Used as a unique identifier for sorting as we can't assume the translations in column headers are uniaue.
     */
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
    setDynamicRowComponent(component: Type<TableItemComponent<T>>): TableListConfig<T>;
    withNaturalSorting(): TableListConfig<T>;
    withPlainSorting(label: string): TableListConfig<T>;
    asInitialSorting(order: 'asc' | 'desc'): TableListConfig<T>;
    addFunctionalProp(selector: (entity: T) => any): TableListConfig<T>;
    setHeader(header: string): TableListConfig<T>;
    withSearch(): TableListConfig<T>;
}
