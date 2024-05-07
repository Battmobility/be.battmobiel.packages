export interface DynamicFormComponentType<T = {}> extends Readonly<{
    tc: string;
    data?: T;
}> {
}
