import { AfterViewInit, EventEmitter, OnChanges, OnDestroy, QueryList, SimpleChanges } from '@angular/core';
import { Tab, TabComponent } from '@sofico-framework/ui-kit/components/tab';
import * as ɵngcc0 from '@angular/core';
export declare class TabsComponent implements OnChanges, AfterViewInit, OnDestroy {
    inViewLeft: boolean;
    inViewRight: boolean;
    tc: string;
    tabs: Tab[];
    active: Tab;
    clickedTab: EventEmitter<Tab>;
    tabsViewRef: any;
    tabComponents: QueryList<TabComponent>;
    trackByFn: (i: any, r: any) => any;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Scroll a bit to the right, make factor negative for left scroll
     * @param factor scrolling factor, 1 for normal right, -1 for normal left
     */
    scroll(back: boolean): void;
    private scrollToCenter;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TabsComponent, "sof-tabs", never, { "tc": "tc"; "tabs": "tabs"; "active": "active"; }, { "clickedTab": "clickedTab"; }, never, never>;
}

//# sourceMappingURL=tabs.component.d.ts.map