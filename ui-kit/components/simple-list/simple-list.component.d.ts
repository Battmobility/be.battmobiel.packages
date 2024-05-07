import { SortingOrderConfig } from '@sofico-framework/utils';
import { ReplaySubject } from 'rxjs';
import { SimpleListConfig } from './classes/simple-list-config.class';
export declare class SimpleListComponent<T> {
    /**
     * The translation context.
     */
    tc: string;
    /**
     * The simple list config.
     */
    set config(config: SimpleListConfig<T>);
    /**
     * The entities we want to render in this list.
     */
    set entities(entities: T[]);
    entities$: ReplaySubject<T[]>;
    config$: ReplaySubject<SimpleListConfig<T>>;
    sorting$: ReplaySubject<SortingOrderConfig<T>>;
    trackByFn: (i: any) => any;
}
