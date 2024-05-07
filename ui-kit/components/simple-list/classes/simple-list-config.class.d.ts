import { Type } from '@angular/core';
import { ListItemComponent } from '@sofico-framework/ui-kit/types';
import { SortingOrderConfig } from '@sofico-framework/utils';
/**
 * Configuration/builder to build an simplelist config
 * This object contains configuration regarding initial sorting of an object
 */
export declare class SimpleListConfig<T> {
    initialSorting: SortingOrderConfig<T>;
    dynamicRowComponent: Type<ListItemComponent<T>>;
    setSorting(selector: (entity: T) => any, order: 'asc' | 'desc'): SimpleListConfig<T>;
    setDynamicRowComponent(component: Type<ListItemComponent<T>>): SimpleListConfig<T>;
}
