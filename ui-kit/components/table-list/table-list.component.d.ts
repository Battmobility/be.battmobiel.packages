import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { TableListSearchBarComponent } from '@sofico-framework/ui-kit/components/table-list-search-bar';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import { SortingOrderConfig } from '@sofico-framework/utils';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { TableListConfig } from './classes/table-list-config.class';
export declare class TableListComponent<T> implements OnInit, OnDestroy, OnSofFocus {
    entities$: ReplaySubject<T[]>;
    config$: ReplaySubject<TableListConfig<T>>;
    searchableSelectors: ((entity: T) => any)[];
    /**
     * The amount of items shown in the table.
     */
    thresholdNumberOfItems: number;
    /**
     * The translation context.
     */
    tc: string;
    /**
     * The table list config.
     */
    set config(config: TableListConfig<T>);
    /**
     * The entities we want to render in this table.
     */
    set entities(entities: T[]);
    /**
     * Whether the search bar is visible.
     */
    enableSearch: boolean;
    /**
     * Whether the sorting dropdown is visible.
     */
    enableSorting: boolean;
    searchedEntities: EventEmitter<T[]>;
    searchBarComponent: TableListSearchBarComponent<T>;
    searchedEntities$: Observable<T[]>;
    sortedEntities$: Observable<T[]>;
    hasSearchedEntities: Observable<boolean>;
    termSub$: BehaviorSubject<string>;
    sortingSub$: BehaviorSubject<SortingOrderConfig<T>>;
    private numberOfItemsToDisplaySub$;
    selectors: ((entity: T) => any)[];
    plainSorts: boolean[];
    activeSortPropId: number;
    trackByFn: (i: any) => any;
    sofFocus(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onChangeSorting(id: number, index: number): void;
    onChangeTerm(term: string): void;
    private getSearchedEntities$;
    private getSortedEntities$;
    private getHasEntities$;
}
