export interface Step<T> extends Readonly<{
    data: T;
    active?: boolean;
    index?: number;
}> {
}
