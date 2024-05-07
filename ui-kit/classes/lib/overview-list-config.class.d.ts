import { Type } from '@angular/core';
import { ListItemComponent } from '@sofico-framework/ui-kit/types';
import { SortingOrderConfig } from '@sofico-framework/utils';
/**
 * Configuration/builder to build an overviewList config
 * This object contains all the configuration regarding searching and
 * sorting of an object
 */
export declare class OverviewListConfig<T> {
    functionalProps: {
        selector: (entity: T) => any;
        label: string;
        searchable: boolean;
        sortable: boolean;
        plainSort: boolean;
    }[];
    initialSorting: SortingOrderConfig<T>;
    dynamicRowComponent: Type<ListItemComponent<T>>;
    private initialSortingFuncPropRef;
    addFunctionalProp(selector: (entity: T) => any): OverviewListConfig<T>;
    withSearch(): OverviewListConfig<T>;
    /** @deprecated use {@link withNaturalSorting}  */
    withSorting(label: string): OverviewListConfig<T>;
    withNaturalSorting(label: string): OverviewListConfig<T>;
    withPlainSorting(label: string): OverviewListConfig<T>;
    asInitialSorting(order: 'asc' | 'desc'): OverviewListConfig<T>;
    setDynamicRowComponent(component: Type<ListItemComponent<T>>): OverviewListConfig<T>;
}
