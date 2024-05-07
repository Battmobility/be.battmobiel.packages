import { ElementRef, EventEmitter } from '@angular/core';
import { Tab } from './types/tab.type';
import * as ɵngcc0 from '@angular/core';
export declare class TabComponent {
    elementRef: ElementRef;
    tc: string;
    tab: Tab;
    isSelected: boolean;
    clickTab: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TabComponent, "sof-tab", never, { "tc": "tc"; "tab": "tab"; "isSelected": "isSelected"; }, { "clickTab": "clickTab"; }, never, never>;
}

//# sourceMappingURL=tab.component.d.ts.map