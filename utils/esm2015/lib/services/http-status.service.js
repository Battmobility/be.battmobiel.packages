import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class HttpStatusService {
    constructor() {
        this.loadingSub$ = new ReplaySubject(1);
        /**
         * When navigating to a page it can be possible that the last value of the loading is false
         * When the user navigates to that page and that page starts loading the new value of the loading is true
         * Because of that we get the ExpressionChangedAfterItHasBeenCheckedError and we get a flickr in some cases
         * For that reason we are using a debounceTime of 0 to ensure a fluent loading experience
         */
        this.loading$ = this.loadingSub$.pipe(distinctUntilChanged(), debounceTime(0));
        this.actingSub$ = new ReplaySubject(1);
        this.acting$ = this.actingSub$.pipe(distinctUntilChanged(), debounceTime(0));
        this.getErrorSub$ = new Subject();
        this.getError$ = this.getErrorSub$.pipe(distinctUntilChanged());
        this.actingErrorsSub$ = new Subject();
        this.actingErrors$ = this.actingErrorsSub$.pipe(distinctUntilChanged());
        this.attached = true;
    }
    set loading(val) {
        if (this.attached) {
            this.loadingSub$.next(val);
        }
    }
    set acting(val) {
        this.actingSub$.next(val);
    }
    set getError(val) {
        this.getErrorSub$.next(val);
    }
    set actingErrors(val) {
        this.actingErrorsSub$.next(val);
    }
    /**
     * Detaches the interceptor from the loading status.
     * This is used when we don't want to show loading spinners for
     * some actions of the page (like polling)
     * Don't forget to use the reattach function afterwards
     */
    detach() {
        this.attached = false;
        this.loadingSub$.next(false);
    }
    /**
     * Reattaches the interceptor to the loading status
     * Has to be called on every page that uses the detach functionality
     */
    reattach() {
        this.attached = true;
    }
}
HttpStatusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HttpStatusService_Factory() { return new HttpStatusService(); }, token: HttpStatusService, providedIn: "root" });
HttpStatusService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zdGF0dXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdXRpbHMvc3JjL2xpYi9zZXJ2aWNlcy9odHRwLXN0YXR1cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQU1wRSxNQUFNLE9BQU8saUJBQWlCO0lBSDlCO1FBSVUsZ0JBQVcsR0FBRyxJQUFJLGFBQWEsQ0FBVSxDQUFDLENBQUMsQ0FBQztRQUNwRDs7Ozs7V0FLRztRQUNILGFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLGVBQVUsR0FBRyxJQUFJLGFBQWEsQ0FBVSxDQUFDLENBQUMsQ0FBQztRQUNuRCxZQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDN0MsY0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUNuRCxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBd0IsQ0FBQztRQUMvRCxrQkFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQzNELGFBQVEsR0FBRyxJQUFJLENBQUM7S0FzQ3pCO0lBcENDLElBQUksT0FBTyxDQUFDLEdBQVk7UUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLEdBQVk7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksUUFBUSxDQUFDLEdBQVc7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksWUFBWSxDQUFDLEdBQXlCO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7OztZQXZERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWN0aW5nRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMvYWN0aW5nLWVycm9yLW1lc3NhZ2UudHlwZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBTdGF0dXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsb2FkaW5nU3ViJCA9IG5ldyBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+KDEpO1xuICAvKipcbiAgICogV2hlbiBuYXZpZ2F0aW5nIHRvIGEgcGFnZSBpdCBjYW4gYmUgcG9zc2libGUgdGhhdCB0aGUgbGFzdCB2YWx1ZSBvZiB0aGUgbG9hZGluZyBpcyBmYWxzZVxuICAgKiBXaGVuIHRoZSB1c2VyIG5hdmlnYXRlcyB0byB0aGF0IHBhZ2UgYW5kIHRoYXQgcGFnZSBzdGFydHMgbG9hZGluZyB0aGUgbmV3IHZhbHVlIG9mIHRoZSBsb2FkaW5nIGlzIHRydWVcbiAgICogQmVjYXVzZSBvZiB0aGF0IHdlIGdldCB0aGUgRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvciBhbmQgd2UgZ2V0IGEgZmxpY2tyIGluIHNvbWUgY2FzZXNcbiAgICogRm9yIHRoYXQgcmVhc29uIHdlIGFyZSB1c2luZyBhIGRlYm91bmNlVGltZSBvZiAwIHRvIGVuc3VyZSBhIGZsdWVudCBsb2FkaW5nIGV4cGVyaWVuY2VcbiAgICovXG4gIGxvYWRpbmckID0gdGhpcy5sb2FkaW5nU3ViJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksIGRlYm91bmNlVGltZSgwKSk7XG4gIHByaXZhdGUgYWN0aW5nU3ViJCA9IG5ldyBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+KDEpO1xuICBhY3RpbmckID0gdGhpcy5hY3RpbmdTdWIkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSwgZGVib3VuY2VUaW1lKDApKTtcbiAgcHJpdmF0ZSBnZXRFcnJvclN1YiQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIGdldEVycm9yJCA9IHRoaXMuZ2V0RXJyb3JTdWIkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gIHByaXZhdGUgYWN0aW5nRXJyb3JzU3ViJCA9IG5ldyBTdWJqZWN0PEFjdGluZ0Vycm9yTWVzc2FnZVtdPigpO1xuICBhY3RpbmdFcnJvcnMkID0gdGhpcy5hY3RpbmdFcnJvcnNTdWIkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gIHByaXZhdGUgYXR0YWNoZWQgPSB0cnVlO1xuXG4gIHNldCBsb2FkaW5nKHZhbDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmF0dGFjaGVkKSB7XG4gICAgICB0aGlzLmxvYWRpbmdTdWIkLm5leHQodmFsKTtcbiAgICB9XG4gIH1cblxuICBzZXQgYWN0aW5nKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuYWN0aW5nU3ViJC5uZXh0KHZhbCk7XG4gIH1cblxuICBzZXQgZ2V0RXJyb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmdldEVycm9yU3ViJC5uZXh0KHZhbCk7XG4gIH1cblxuICBzZXQgYWN0aW5nRXJyb3JzKHZhbDogQWN0aW5nRXJyb3JNZXNzYWdlW10pIHtcbiAgICB0aGlzLmFjdGluZ0Vycm9yc1N1YiQubmV4dCh2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIHRoZSBpbnRlcmNlcHRvciBmcm9tIHRoZSBsb2FkaW5nIHN0YXR1cy5cbiAgICogVGhpcyBpcyB1c2VkIHdoZW4gd2UgZG9uJ3Qgd2FudCB0byBzaG93IGxvYWRpbmcgc3Bpbm5lcnMgZm9yXG4gICAqIHNvbWUgYWN0aW9ucyBvZiB0aGUgcGFnZSAobGlrZSBwb2xsaW5nKVxuICAgKiBEb24ndCBmb3JnZXQgdG8gdXNlIHRoZSByZWF0dGFjaCBmdW5jdGlvbiBhZnRlcndhcmRzXG4gICAqL1xuICBkZXRhY2goKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xuICAgIHRoaXMubG9hZGluZ1N1YiQubmV4dChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogUmVhdHRhY2hlcyB0aGUgaW50ZXJjZXB0b3IgdG8gdGhlIGxvYWRpbmcgc3RhdHVzXG4gICAqIEhhcyB0byBiZSBjYWxsZWQgb24gZXZlcnkgcGFnZSB0aGF0IHVzZXMgdGhlIGRldGFjaCBmdW5jdGlvbmFsaXR5XG4gICAqL1xuICByZWF0dGFjaCgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaGVkID0gdHJ1ZTtcbiAgfVxufVxuIl19