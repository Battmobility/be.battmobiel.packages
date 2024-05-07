export interface ListItemComponent<T> extends Readonly<{
    entity: T;
    tc: string;
}> {
}
