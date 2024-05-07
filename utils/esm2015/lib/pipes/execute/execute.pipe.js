import { Pipe } from '@angular/core';
export class ExecutePipe {
    transform(value, func) {
        if (!value) {
            return undefined;
        }
        return func(value);
    }
}
ExecutePipe.decorators = [
    { type: Pipe, args: [{ name: 'sofExecute' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91dGlscy9zcmMvbGliL3BpcGVzL2V4ZWN1dGUvZXhlY3V0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxLQUFRLEVBQUUsSUFBaUI7UUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnc29mRXhlY3V0ZScgfSlcbmV4cG9ydCBjbGFzcyBFeGVjdXRlUGlwZTxULCBSPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IFQsIGZ1bmM6ICh4OiBUKSA9PiBSKTogUiB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9XG59XG4iXX0=