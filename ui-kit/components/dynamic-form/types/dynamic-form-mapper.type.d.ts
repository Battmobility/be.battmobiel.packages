export interface DynamicFormMapperType<T> extends Readonly<{
    mapFormValueToEntity: (formData: any) => T;
    mapEntityToFormValue: (entity: T) => any;
}> {
}
