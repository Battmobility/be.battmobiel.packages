import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class InViewComponent implements OnInit, OnDestroy {
    scrollableRef: any;
    preloadHeight: number;
    inView: EventEmitter<boolean>;
    targetRef: ElementRef;
    private intersectionObserver;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InViewComponent, "sof-in-view", never, { "scrollableRef": "scrollableRef"; "preloadHeight": "preloadHeight"; }, { "inView": "inView"; }, never, ["*"]>;
}

//# sourceMappingURL=in-view.component.d.ts.map