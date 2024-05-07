import { Pipe } from '@angular/core';
export class ReplaceAllPipe {
    constructor() { }
    transform(text, toReplace, replaceWith) {
        if (text) {
            return text.split(toReplace).join(replaceWith);
        }
        else {
            return text;
        }
    }
}
ReplaceAllPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofReplaceAll' },] }
];
ReplaceAllPipe.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZS1hbGwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdXRpbHMvc3JjL2xpYi9waXBlcy9yZXBsYWNlLWFsbC9yZXBsYWNlLWFsbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxjQUFjO0lBQ3pCLGdCQUFlLENBQUM7SUFFaEIsU0FBUyxDQUFJLElBQVksRUFBRSxTQUFpQixFQUFFLFdBQW1CO1FBQy9ELElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7OztZQVZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ3NvZlJlcGxhY2VBbGwnIH0pXG5leHBvcnQgY2xhc3MgUmVwbGFjZUFsbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHRyYW5zZm9ybTxUPih0ZXh0OiBzdHJpbmcsIHRvUmVwbGFjZTogc3RyaW5nLCByZXBsYWNlV2l0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGV4dCkge1xuICAgICAgcmV0dXJuIHRleHQuc3BsaXQodG9SZXBsYWNlKS5qb2luKHJlcGxhY2VXaXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICB9XG59XG4iXX0=