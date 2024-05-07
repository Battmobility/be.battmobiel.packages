import { Type } from '@angular/core';
import { DetailComponentType } from './detail-component.type';
export interface EntityDetailConfig extends Readonly<{
    dynamicDetailComponent: Type<DetailComponentType<any>>;
}> {
}
