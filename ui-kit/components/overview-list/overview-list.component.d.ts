import { EventEmitter, OnDestroy, OnInit, QueryList } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OverviewListConfig } from '@sofico-framework/ui-kit/classes';
import { OverviewListSearchBarComponent } from '@sofico-framework/ui-kit/components/overview-list-search-bar';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import { GroupDefinition } from '@sofico-framework/ui-kit/types';
import { SortingOrderConfig } from '@sofico-framework/utils';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { OverviewListItemComponent } from '../overview-list-item/overview-list-item.component';
export declare class OverviewListComponent<T> implements OnInit, OnDestroy, OnSofFocus {
    private router;
    private activatedRoute;
    /**
     * The translation context.
     */
    tc: string;
    /**
     * The overview list config.
     */
    set config(config: OverviewListConfig<T>);
    /**
     * The entities we want to render in this list.
     */
    set entities(entities: T[]);
    /**
     * We can pass group definitions to divide the entities into different groups.
     */
    groupDefinitions: GroupDefinition[];
    /**
     * The amount of items shown in the list.
     */
    thresholdNumberOfItems: number;
    /**
     * The selector to determine which entity belongs in which group.
     */
    groupSelector: (T: any) => string | number;
    /**
     * Whether the search bar is visible.
     */
    enableSearch: boolean;
    /**
     * Whether the sorting dropdown is visible.
     */
    enableSorting: boolean;
    /**
     * Whether we define the last tab state through queryParam.
     */
    retainGroupSelection: boolean;
    searchedEntities: EventEmitter<T[]>;
    searchBarComponent: OverviewListSearchBarComponent<T>;
    listComponents: QueryList<OverviewListItemComponent<T>>;
    searchableSelectors: ((entity: T) => any)[];
    entities$: ReplaySubject<T[]>;
    config$: ReplaySubject<OverviewListConfig<T>>;
    sortingSub$: ReplaySubject<SortingOrderConfig<T>>;
    termSub$: BehaviorSubject<string>;
    private numberOfItemsToDisplaySub$;
    searchedEntities$: Observable<T[]>;
    selectedGroupSub$: BehaviorSubject<GroupDefinition>;
    private groupedEntities$;
    private sortedEntities$;
    filteredEntities$: Observable<T[]>;
    hasFilteredEntities$: Observable<boolean>;
    trackByFn: (i: any) => any;
    constructor(router: Router, activatedRoute: ActivatedRoute);
    sofFocus(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onChangeSorting(sorting: any): void;
    onChangeTerm(term: string): void;
    onChangeGroup(group: any): void;
    onInView(value: boolean): void;
    private getSearchedEntities$;
    private getGroupedEntities$;
    private getSortedEntities$;
    private getHasFilteredEntities$;
    private setupQueryParamSubscription;
}
