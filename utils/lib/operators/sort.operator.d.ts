import { MonoTypeOperatorFunction } from 'rxjs';
import { SortingOrderConfig } from '../types/sorting-order-config.type';
export declare function sort<T>(sortingOrderConfig: SortingOrderConfig<T>): MonoTypeOperatorFunction<T[]>;
