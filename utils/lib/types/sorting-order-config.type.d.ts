export interface SortingOrderConfig<T> {
    order?: 'asc' | 'desc';
    readonly plainSort?: boolean;
    readonly prop: string | ((entity: T) => any) | (string | ((entity: T) => any))[];
}
