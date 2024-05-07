import { Pipe } from '@angular/core';
export class IncludesPipe {
    constructor() { }
    transform(array, valueToFind, fromIndex) {
        if (array && Array.isArray(array)) {
            return array.includes(valueToFind, fromIndex);
        }
        else {
            return false;
        }
    }
}
IncludesPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofIncludes' },] }
];
IncludesPipe.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZXMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdXRpbHMvc3JjL2xpYi9waXBlcy9pbmNsdWRlcy9pbmNsdWRlcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLGdCQUFlLENBQUM7SUFFaEIsU0FBUyxDQUFJLEtBQVUsRUFBRSxXQUFjLEVBQUUsU0FBa0I7UUFDekQsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7O1lBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnc29mSW5jbHVkZXMnIH0pXG5leHBvcnQgY2xhc3MgSW5jbHVkZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICB0cmFuc2Zvcm08VD4oYXJyYXk6IFRbXSwgdmFsdWVUb0ZpbmQ6IFQsIGZyb21JbmRleD86IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmIChhcnJheSAmJiBBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgcmV0dXJuIGFycmF5LmluY2x1ZGVzKHZhbHVlVG9GaW5kLCBmcm9tSW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=