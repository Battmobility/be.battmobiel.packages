import { MonoTypeOperatorFunction, Observable } from 'rxjs';
/**
 * Search for objects in an array - caches, so if destroyed, cache is lost
 * The source stream is the list of objects
 * @param term$ a stream of string(s), each string is a search action. If a new string is sent before the last one was resolved, the old one will be skiped
 * @param props an array of strings and/or functions that point to properties with the values to be searched. Be aware, the functions may not error, or it will break the search.
 */
export declare function search<T>(term$: Observable<string>, props: (((any: any) => string) | string)[]): MonoTypeOperatorFunction<T[]>;
