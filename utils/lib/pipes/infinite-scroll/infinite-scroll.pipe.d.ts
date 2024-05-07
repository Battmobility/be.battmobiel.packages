import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { DocumentRefService } from '../../services/document-ref.service';
import { WindowRefService } from '../../services/window-ref.service';
import * as ɵngcc0 from '@angular/core';
export declare class InfiniteScrollPipe implements PipeTransform, OnDestroy {
    private windowRefService;
    private documentRefService;
    private changeDetectorRef;
    private auditTime;
    private preloadHeight;
    private scheduler;
    private elementRef;
    private thresholdNumberOfItems;
    private limitedDataSet;
    private dataSet;
    private subscription;
    private scrollOrResize$;
    private pageByScrollOrResize$;
    private numberOfItems$;
    private dataSet$;
    constructor(windowRefService: WindowRefService, documentRefService: DocumentRefService, changeDetectorRef: ChangeDetectorRef);
    transform(value: any[], thresholdNumberOfItems?: number, preloadHeight?: number, auditTimeValue?: number, elementRef?: HTMLElement): any;
    ngOnDestroy(): void;
    private getScrollOrResize$;
    private getPageByScrollOrResize$;
    private getNumberOfItems$;
    private getLimitedDataSet$;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InfiniteScrollPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<InfiniteScrollPipe, "sofInfiniteScroll">;
}

//# sourceMappingURL=infinite-scroll.pipe.d.ts.map