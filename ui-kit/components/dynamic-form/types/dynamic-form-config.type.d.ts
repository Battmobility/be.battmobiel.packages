import { Type } from '@angular/core';
import { DynamicFormComponentType } from './dynamic-form-component.type';
export interface DynamicFormConfig<T = {}> extends Readonly<{
    dynamicFormComponent: Type<DynamicFormComponentType<T>>;
}> {
}
