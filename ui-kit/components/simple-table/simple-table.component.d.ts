import { OnInit } from '@angular/core';
import { SortingOrderConfig } from '@sofico-framework/utils';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { SimpleTableConfig } from './classes/simple-table-config.class';
export declare class SimpleTableComponent<T> implements OnInit {
    /**
     * The translation context.
     */
    tc: string;
    /**
     * The simple table config.
     */
    set config(config: SimpleTableConfig<T>);
    /**
     * The entities we want to render in this table.
     */
    set entities(entities: T[]);
    selectors: ((entity: T) => any)[];
    plainSorts: boolean[];
    activeSortPropId: number;
    entities$: ReplaySubject<T[]>;
    config$: ReplaySubject<SimpleTableConfig<T>>;
    sortingSub$: BehaviorSubject<SortingOrderConfig<T>>;
    sortedEntities$: Observable<T[]>;
    trackByFn: (i: any) => any;
    ngOnInit(): void;
    onChangeSorting(id: number, index: number): void;
    private getSortedEntities$;
}
