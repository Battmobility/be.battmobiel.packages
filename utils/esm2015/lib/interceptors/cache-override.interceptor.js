import { Injectable } from '@angular/core';
import { WindowRefService } from '../services/window-ref.service';
import { CacheOverrideConfigAbstract } from './cache-override-config.abstract';
export class CacheOverrideInterceptor {
    constructor(windowRefService, configService) {
        this.windowRefService = windowRefService;
        this.configService = configService;
        // If we are in IE, or we do requests for JSON files (i18n) we do not want cache to be used.
        this.isIE = this.windowRefService.nativeWindow.navigator.userAgent
            .toUpperCase()
            .indexOf('TRIDENT') >= 0;
        this.blacklistedUrls = this.configService.getBlacklistedUrls();
    }
    intercept(req, next) {
        if (!this.isIE) {
            return next.handle(req);
        }
        const blacklisted = !!this.blacklistedUrls.filter(url => req.url.startsWith(url)).length;
        if (blacklisted) {
            return next.handle(req);
        }
        const headers = req.headers
            .append('Cache-Control', 'no-cache')
            .append('Pragma', 'no-cache')
            .append('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT');
        return next.handle(req.clone({ headers }));
    }
}
CacheOverrideInterceptor.decorators = [
    { type: Injectable }
];
CacheOverrideInterceptor.ctorParameters = () => [
    { type: WindowRefService },
    { type: CacheOverrideConfigAbstract }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUtb3ZlcnJpZGUuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvaW50ZXJjZXB0b3JzL2NhY2hlLW92ZXJyaWRlLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHL0UsTUFBTSxPQUFPLHdCQUF3QjtJQVNuQyxZQUNVLGdCQUFrQyxFQUNsQyxhQUEwQztRQUQxQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUE2QjtRQVZwRCw0RkFBNEY7UUFFcEYsU0FBSSxHQUNWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVM7YUFDbkQsV0FBVyxFQUFFO2FBQ2IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixvQkFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUsvRCxDQUFDO0lBRUosU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7UUFFRCxNQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDdEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQ3hCLENBQUMsTUFBTSxDQUFDO1FBRVQsSUFBSSxXQUFXLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7UUFFRCxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTzthQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQzthQUNuQyxNQUFNLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQzthQUM1QixNQUFNLENBQUMsU0FBUyxFQUFFLCtCQUErQixDQUFDLENBQUM7UUFFdEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7O1lBbENGLFVBQVU7OztZQUhGLGdCQUFnQjtZQUNoQiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWZTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvd2luZG93LXJlZi5zZXJ2aWNlJztcbmltcG9ydCB7IENhY2hlT3ZlcnJpZGVDb25maWdBYnN0cmFjdCB9IGZyb20gJy4vY2FjaGUtb3ZlcnJpZGUtY29uZmlnLmFic3RyYWN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhY2hlT3ZlcnJpZGVJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIC8vIElmIHdlIGFyZSBpbiBJRSwgb3Igd2UgZG8gcmVxdWVzdHMgZm9yIEpTT04gZmlsZXMgKGkxOG4pIHdlIGRvIG5vdCB3YW50IGNhY2hlIHRvIGJlIHVzZWQuXG5cbiAgcHJpdmF0ZSBpc0lFOiBib29sZWFuID1cbiAgICB0aGlzLndpbmRvd1JlZlNlcnZpY2UubmF0aXZlV2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgICAuaW5kZXhPZignVFJJREVOVCcpID49IDA7XG4gIHByaXZhdGUgYmxhY2tsaXN0ZWRVcmxzID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldEJsYWNrbGlzdGVkVXJscygpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgd2luZG93UmVmU2VydmljZTogV2luZG93UmVmU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENhY2hlT3ZlcnJpZGVDb25maWdBYnN0cmFjdFxuICApIHt9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBhbnkge1xuICAgIGlmICghdGhpcy5pc0lFKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBjb25zdCBibGFja2xpc3RlZCA9ICEhdGhpcy5ibGFja2xpc3RlZFVybHMuZmlsdGVyKHVybCA9PlxuICAgICAgcmVxLnVybC5zdGFydHNXaXRoKHVybClcbiAgICApLmxlbmd0aDtcblxuICAgIGlmIChibGFja2xpc3RlZCkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVycyA9IHJlcS5oZWFkZXJzXG4gICAgICAuYXBwZW5kKCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlJylcbiAgICAgIC5hcHBlbmQoJ1ByYWdtYScsICduby1jYWNoZScpXG4gICAgICAuYXBwZW5kKCdFeHBpcmVzJywgJ1NhdCwgMDEgSmFuIDIwMDAgMDA6MDA6MDAgR01UJyk7XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxLmNsb25lKHsgaGVhZGVycyB9KSk7XG4gIH1cbn1cbiJdfQ==