import { Pipe } from '@angular/core';
export class IsArrayPipe {
    constructor() { }
    transform(value) {
        return !!value && Array.isArray(value);
    }
}
IsArrayPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofIsArray' },] }
];
IsArrayPipe.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtYXJyYXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdXRpbHMvc3JjL2xpYi9waXBlcy9pcy1hcnJheS9pcy1hcnJheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLGdCQUFlLENBQUM7SUFFaEIsU0FBUyxDQUFJLEtBQVU7UUFDckIsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBTkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnc29mSXNBcnJheScgfSlcbmV4cG9ydCBjbGFzcyBJc0FycmF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgdHJhbnNmb3JtPFQ+KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF2YWx1ZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgfVxufVxuIl19