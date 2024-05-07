export interface TableItemComponent<T> extends Readonly<{
    entity: T;
    tc: string;
}> {
}
