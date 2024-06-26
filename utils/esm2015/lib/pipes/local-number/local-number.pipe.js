import { Pipe } from '@angular/core';
export class LocalNumberPipe {
    constructor() { }
    transform(num, fractionDigits = 2) {
        return num.toLocaleString(undefined, {
            minimumFractionDigits: fractionDigits,
            maximumFractionDigits: fractionDigits
        });
    }
}
LocalNumberPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofLocalNumber' },] }
];
LocalNumberPipe.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtbnVtYmVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvcGlwZXMvbG9jYWwtbnVtYmVyL2xvY2FsLW51bWJlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBSXBELE1BQU0sT0FBTyxlQUFlO0lBQzFCLGdCQUFlLENBQUM7SUFFaEIsU0FBUyxDQUFDLEdBQVcsRUFBRSxjQUFjLEdBQUcsQ0FBQztRQUN2QyxPQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFO1lBQ25DLHFCQUFxQixFQUFFLGNBQWM7WUFDckMscUJBQXFCLEVBQUUsY0FBYztTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFURixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQFBpcGUoeyBuYW1lOiAnc29mTG9jYWxOdW1iZXInIH0pXG5leHBvcnQgY2xhc3MgTG9jYWxOdW1iZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICB0cmFuc2Zvcm0obnVtOiBudW1iZXIsIGZyYWN0aW9uRGlnaXRzID0gMik6IFNhZmVSZXNvdXJjZVVybCB7XG4gICAgcmV0dXJuIG51bS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZnJhY3Rpb25EaWdpdHMsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGZyYWN0aW9uRGlnaXRzXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==