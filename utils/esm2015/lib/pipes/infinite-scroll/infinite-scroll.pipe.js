import { __decorate } from "tslib";
import { ChangeDetectorRef, Pipe } from '@angular/core';
import { slice } from 'lodash';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { fromEvent, merge, Subject } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import { auditTime, filter, map, mapTo, scan, startWith, switchMap } from 'rxjs/operators';
import { DocumentRefService } from '../../services/document-ref.service';
import { WindowRefService } from '../../services/window-ref.service';
let InfiniteScrollPipe = class InfiniteScrollPipe {
    constructor(windowRefService, documentRefService, changeDetectorRef) {
        this.windowRefService = windowRefService;
        this.documentRefService = documentRefService;
        this.changeDetectorRef = changeDetectorRef;
        this.auditTime = 500;
        this.preloadHeight = 500;
        this.scheduler = async;
        this.thresholdNumberOfItems = 35;
        this.dataSet$ = new Subject();
    }
    transform(value, thresholdNumberOfItems, preloadHeight, auditTimeValue, elementRef) {
        if (value === null || value === undefined) {
            return value;
        }
        if (!Array.isArray(value)) {
            throw new Error('sofInfiniteScroll only accepts: null, undefined or any[]');
        }
        if (thresholdNumberOfItems &&
            this.thresholdNumberOfItems !== thresholdNumberOfItems) {
            this.thresholdNumberOfItems = thresholdNumberOfItems;
        }
        if (elementRef && this.elementRef !== elementRef) {
            this.elementRef = elementRef;
        }
        // makes it hard to test when defined in the constructor
        if (!this.subscription) {
            this.scrollOrResize$ = this.getScrollOrResize$();
            this.pageByScrollOrResize$ = this.getPageByScrollOrResize$();
            this.numberOfItems$ = this.getNumberOfItems$();
            this.subscription = this.getLimitedDataSet$()
                .pipe(takeUntilDestroy(this))
                .subscribe(v => {
                this.limitedDataSet = v;
                this.changeDetectorRef.markForCheck();
            });
        }
        // only when the data set changes in an immutable way reset the data set
        // this is important because otherwise numberOfItems will be reset change after change
        // which results in the same limited data set when scrolling
        if (this.dataSet !== value) {
            this.dataSet = value;
            this.dataSet$.next(value);
        }
        if (preloadHeight && this.preloadHeight !== preloadHeight) {
            this.preloadHeight = preloadHeight;
        }
        if (auditTimeValue && this.auditTime !== auditTimeValue) {
            this.auditTime = auditTimeValue;
        }
        if (elementRef && this.elementRef !== elementRef) {
            this.elementRef = elementRef;
        }
        return this.limitedDataSet;
    }
    ngOnDestroy() { }
    getScrollOrResize$() {
        return merge(fromEvent(this.elementRef || this.windowRefService.nativeWindow, 'scroll'), fromEvent(this.windowRefService.nativeWindow, 'resize')).pipe(auditTime(this.auditTime, this.scheduler));
    }
    getPageByScrollOrResize$() {
        return this.scrollOrResize$.pipe(map(() => {
            const scrollTop = (this.elementRef && this.elementRef.scrollTop) ||
                (this.documentRefService.nativeDocument.documentElement &&
                    this.documentRefService.nativeDocument.documentElement.scrollTop) ||
                this.documentRefService.nativeDocument.body.scrollTop;
            const scrollHeight = (this.elementRef && this.elementRef.scrollHeight) ||
                (this.documentRefService.nativeDocument.documentElement &&
                    this.documentRefService.nativeDocument.documentElement
                        .scrollHeight) ||
                this.documentRefService.nativeDocument.body.scrollHeight;
            return (scrollTop + this.windowRefService.nativeWindow.innerHeight >=
                scrollHeight - this.preloadHeight);
        }), filter(b => !!b));
    }
    getNumberOfItems$() {
        return this.pageByScrollOrResize$.pipe(startWith(null), mapTo(this.thresholdNumberOfItems), // make sure scan doesn't get a boolean
        scan(acc => acc + this.thresholdNumberOfItems, 0));
    }
    getLimitedDataSet$() {
        return this.dataSet$.pipe(switchMap(dataSet => this.numberOfItems$.pipe(map(count => slice(dataSet, 0, count)))));
    }
};
InfiniteScrollPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofInfiniteScroll', pure: false },] }
];
InfiniteScrollPipe.ctorParameters = () => [
    { type: WindowRefService },
    { type: DocumentRefService },
    { type: ChangeDetectorRef }
];
InfiniteScrollPipe = __decorate([
    UntilDestroy()
], InfiniteScrollPipe);
export { InfiniteScrollPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvcGlwZXMvaW5maW5pdGUtc2Nyb2xsL2luZmluaXRlLXNjcm9sbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLElBQUksRUFFTCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixHQUFHLEVBQ0gsS0FBSyxFQUNMLElBQUksRUFDSixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7SUFJeEQsa0JBQWtCLFNBQWxCLGtCQUFrQjtJQWU3QixZQUNVLGdCQUFrQyxFQUNsQyxrQkFBc0MsRUFDdEMsaUJBQW9DO1FBRnBDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBakJ0QyxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBUTVCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO0lBTXJDLENBQUM7SUFFSixTQUFTLENBQ1AsS0FBWSxFQUNaLHNCQUErQixFQUMvQixhQUFzQixFQUN0QixjQUF1QixFQUN2QixVQUF3QjtRQUV4QixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN6QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsTUFBTSxJQUFJLEtBQUssQ0FDYiwwREFBMEQsQ0FDM0QsQ0FBQztTQUNIO1FBRUQsSUFDRSxzQkFBc0I7WUFDdEIsSUFBSSxDQUFDLHNCQUFzQixLQUFLLHNCQUFzQixFQUN0RDtZQUNBLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztTQUN0RDtRQUNELElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO1lBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzlCO1FBQ0Qsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQzdELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFFL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7aUJBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNiLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELHdFQUF3RTtRQUN4RSxzRkFBc0Y7UUFDdEYsNERBQTREO1FBQzVELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLGFBQWEsRUFBRTtZQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUNwQztRQUVELElBQUksY0FBYyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssY0FBYyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDOUI7UUFFRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELFdBQVcsS0FBVSxDQUFDO0lBRWQsa0JBQWtCO1FBQ3hCLE9BQU8sS0FBSyxDQUNWLFNBQVMsQ0FDUCxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQ3JELFFBQVEsQ0FDVCxFQUNELFNBQVMsQ0FBUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUMvRCxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8sd0JBQXdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQzlCLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxNQUFNLFNBQVMsR0FDYixDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7Z0JBQzlDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxlQUFlO29CQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN4RCxNQUFNLFlBQVksR0FDaEIsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO2dCQUNqRCxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsZUFBZTtvQkFDckQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxlQUFlO3lCQUNuRCxZQUFZLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUzRCxPQUFPLENBQ0wsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsV0FBVztnQkFDMUQsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQ2xDLENBQUM7UUFDSixDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2pCLENBQUM7SUFDSixDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FDcEMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSx1Q0FBdUM7UUFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsQ0FDbEQsQ0FBQztJQUNKLENBQUM7SUFFTyxrQkFBa0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdkIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDakUsQ0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBeElBLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7WUFIdkMsZ0JBQWdCO1lBRGhCLGtCQUFrQjtZQW5CekIsaUJBQWlCOztBQXdCTixrQkFBa0I7SUFGOUIsWUFBWSxFQUFFO0dBRUYsa0JBQWtCLENBdUk5QjtTQXZJWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25EZXN0cm95LFxuICBQaXBlLFxuICBQaXBlVHJhbnNmb3JtXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSwgVW50aWxEZXN0cm95IH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICdyeGpzL2ludGVybmFsL3NjaGVkdWxlci9hc3luYyc7XG5pbXBvcnQge1xuICBhdWRpdFRpbWUsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtYXBUbyxcbiAgc2NhbixcbiAgc3RhcnRXaXRoLFxuICBzd2l0Y2hNYXBcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRG9jdW1lbnRSZWZTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZG9jdW1lbnQtcmVmLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2luZG93UmVmU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dpbmRvdy1yZWYuc2VydmljZSc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQFBpcGUoeyBuYW1lOiAnc29mSW5maW5pdGVTY3JvbGwnLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIEluZmluaXRlU2Nyb2xsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgYXVkaXRUaW1lID0gNTAwO1xuICBwcml2YXRlIHByZWxvYWRIZWlnaHQgPSA1MDA7XG4gIHByaXZhdGUgc2NoZWR1bGVyID0gYXN5bmM7XG4gIHByaXZhdGUgZWxlbWVudFJlZjogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgdGhyZXNob2xkTnVtYmVyT2ZJdGVtcyA9IDM1O1xuICBwcml2YXRlIGxpbWl0ZWREYXRhU2V0OiBhbnlbXTtcbiAgcHJpdmF0ZSBkYXRhU2V0OiBhbnlbXTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIHNjcm9sbE9yUmVzaXplJDogT2JzZXJ2YWJsZTxFdmVudD47XG4gIHByaXZhdGUgcGFnZUJ5U2Nyb2xsT3JSZXNpemUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcml2YXRlIG51bWJlck9mSXRlbXMkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIHByaXZhdGUgZGF0YVNldCQgPSBuZXcgU3ViamVjdDxhbnlbXT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHdpbmRvd1JlZlNlcnZpY2U6IFdpbmRvd1JlZlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkb2N1bWVudFJlZlNlcnZpY2U6IERvY3VtZW50UmVmU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBhbnlbXSxcbiAgICB0aHJlc2hvbGROdW1iZXJPZkl0ZW1zPzogbnVtYmVyLFxuICAgIHByZWxvYWRIZWlnaHQ/OiBudW1iZXIsXG4gICAgYXVkaXRUaW1lVmFsdWU/OiBudW1iZXIsXG4gICAgZWxlbWVudFJlZj86IEhUTUxFbGVtZW50XG4gICk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdzb2ZJbmZpbml0ZVNjcm9sbCBvbmx5IGFjY2VwdHM6IG51bGwsIHVuZGVmaW5lZCBvciBhbnlbXSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhyZXNob2xkTnVtYmVyT2ZJdGVtcyAmJlxuICAgICAgdGhpcy50aHJlc2hvbGROdW1iZXJPZkl0ZW1zICE9PSB0aHJlc2hvbGROdW1iZXJPZkl0ZW1zXG4gICAgKSB7XG4gICAgICB0aGlzLnRocmVzaG9sZE51bWJlck9mSXRlbXMgPSB0aHJlc2hvbGROdW1iZXJPZkl0ZW1zO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudFJlZiAmJiB0aGlzLmVsZW1lbnRSZWYgIT09IGVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG4gICAgfVxuICAgIC8vIG1ha2VzIGl0IGhhcmQgdG8gdGVzdCB3aGVuIGRlZmluZWQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgaWYgKCF0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zY3JvbGxPclJlc2l6ZSQgPSB0aGlzLmdldFNjcm9sbE9yUmVzaXplJCgpO1xuICAgICAgdGhpcy5wYWdlQnlTY3JvbGxPclJlc2l6ZSQgPSB0aGlzLmdldFBhZ2VCeVNjcm9sbE9yUmVzaXplJCgpO1xuICAgICAgdGhpcy5udW1iZXJPZkl0ZW1zJCA9IHRoaXMuZ2V0TnVtYmVyT2ZJdGVtcyQoKTtcblxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmdldExpbWl0ZWREYXRhU2V0JCgpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpXG4gICAgICAgIC5zdWJzY3JpYmUodiA9PiB7XG4gICAgICAgICAgdGhpcy5saW1pdGVkRGF0YVNldCA9IHY7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gb25seSB3aGVuIHRoZSBkYXRhIHNldCBjaGFuZ2VzIGluIGFuIGltbXV0YWJsZSB3YXkgcmVzZXQgdGhlIGRhdGEgc2V0XG4gICAgLy8gdGhpcyBpcyBpbXBvcnRhbnQgYmVjYXVzZSBvdGhlcndpc2UgbnVtYmVyT2ZJdGVtcyB3aWxsIGJlIHJlc2V0IGNoYW5nZSBhZnRlciBjaGFuZ2VcbiAgICAvLyB3aGljaCByZXN1bHRzIGluIHRoZSBzYW1lIGxpbWl0ZWQgZGF0YSBzZXQgd2hlbiBzY3JvbGxpbmdcbiAgICBpZiAodGhpcy5kYXRhU2V0ICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5kYXRhU2V0ID0gdmFsdWU7XG4gICAgICB0aGlzLmRhdGFTZXQkLm5leHQodmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChwcmVsb2FkSGVpZ2h0ICYmIHRoaXMucHJlbG9hZEhlaWdodCAhPT0gcHJlbG9hZEhlaWdodCkge1xuICAgICAgdGhpcy5wcmVsb2FkSGVpZ2h0ID0gcHJlbG9hZEhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoYXVkaXRUaW1lVmFsdWUgJiYgdGhpcy5hdWRpdFRpbWUgIT09IGF1ZGl0VGltZVZhbHVlKSB7XG4gICAgICB0aGlzLmF1ZGl0VGltZSA9IGF1ZGl0VGltZVZhbHVlO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50UmVmICYmIHRoaXMuZWxlbWVudFJlZiAhPT0gZWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5saW1pdGVkRGF0YVNldDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBwcml2YXRlIGdldFNjcm9sbE9yUmVzaXplJCgpOiBPYnNlcnZhYmxlPEV2ZW50PiB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgZnJvbUV2ZW50PEV2ZW50PihcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmIHx8IHRoaXMud2luZG93UmVmU2VydmljZS5uYXRpdmVXaW5kb3csXG4gICAgICAgICdzY3JvbGwnXG4gICAgICApLFxuICAgICAgZnJvbUV2ZW50PEV2ZW50Pih0aGlzLndpbmRvd1JlZlNlcnZpY2UubmF0aXZlV2luZG93LCAncmVzaXplJylcbiAgICApLnBpcGUoYXVkaXRUaW1lKHRoaXMuYXVkaXRUaW1lLCB0aGlzLnNjaGVkdWxlcikpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYWdlQnlTY3JvbGxPclJlc2l6ZSQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsT3JSZXNpemUkLnBpcGUoXG4gICAgICBtYXAoKCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPVxuICAgICAgICAgICh0aGlzLmVsZW1lbnRSZWYgJiYgdGhpcy5lbGVtZW50UmVmLnNjcm9sbFRvcCkgfHxcbiAgICAgICAgICAodGhpcy5kb2N1bWVudFJlZlNlcnZpY2UubmF0aXZlRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50UmVmU2VydmljZS5uYXRpdmVEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSB8fFxuICAgICAgICAgIHRoaXMuZG9jdW1lbnRSZWZTZXJ2aWNlLm5hdGl2ZURvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPVxuICAgICAgICAgICh0aGlzLmVsZW1lbnRSZWYgJiYgdGhpcy5lbGVtZW50UmVmLnNjcm9sbEhlaWdodCkgfHxcbiAgICAgICAgICAodGhpcy5kb2N1bWVudFJlZlNlcnZpY2UubmF0aXZlRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50UmVmU2VydmljZS5uYXRpdmVEb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICAgICAgICAgICAgLnNjcm9sbEhlaWdodCkgfHxcbiAgICAgICAgICB0aGlzLmRvY3VtZW50UmVmU2VydmljZS5uYXRpdmVEb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHNjcm9sbFRvcCArIHRoaXMud2luZG93UmVmU2VydmljZS5uYXRpdmVXaW5kb3cuaW5uZXJIZWlnaHQgPj1cbiAgICAgICAgICBzY3JvbGxIZWlnaHQgLSB0aGlzLnByZWxvYWRIZWlnaHRcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGIgPT4gISFiKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldE51bWJlck9mSXRlbXMkKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZUJ5U2Nyb2xsT3JSZXNpemUkLnBpcGUoXG4gICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICBtYXBUbyh0aGlzLnRocmVzaG9sZE51bWJlck9mSXRlbXMpLCAvLyBtYWtlIHN1cmUgc2NhbiBkb2Vzbid0IGdldCBhIGJvb2xlYW5cbiAgICAgIHNjYW4oYWNjID0+IGFjYyArIHRoaXMudGhyZXNob2xkTnVtYmVyT2ZJdGVtcywgMClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMaW1pdGVkRGF0YVNldCQoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFTZXQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoZGF0YVNldCA9PlxuICAgICAgICB0aGlzLm51bWJlck9mSXRlbXMkLnBpcGUobWFwKGNvdW50ID0+IHNsaWNlKGRhdGFTZXQsIDAsIGNvdW50KSkpXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19