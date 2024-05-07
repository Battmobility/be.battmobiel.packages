import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';
export class ScrollService {
    constructor(windowRefService) {
        this.windowRefService = windowRefService;
    }
    scrollToTop() {
        this.windowRefService.nativeWindow.scrollTo(0, 0);
    }
}
ScrollService.decorators = [
    { type: Injectable }
];
ScrollService.ctorParameters = () => [
    { type: WindowRefService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvc2VydmljZXMvc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd4RCxNQUFNLE9BQU8sYUFBYTtJQUN4QixZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFMUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7WUFORixVQUFVOzs7WUFGRixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWZTZXJ2aWNlIH0gZnJvbSAnLi93aW5kb3ctcmVmLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Nyb2xsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luZG93UmVmU2VydmljZTogV2luZG93UmVmU2VydmljZSkge31cblxuICBzY3JvbGxUb1RvcCgpOiB2b2lkIHtcbiAgICB0aGlzLndpbmRvd1JlZlNlcnZpY2UubmF0aXZlV2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9XG59XG4iXX0=