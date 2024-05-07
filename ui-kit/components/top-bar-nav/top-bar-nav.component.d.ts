import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { WindowRefService } from '@sofico-framework/utils';
import { BehaviorSubject } from 'rxjs';
import { NavItem } from './types/nav-item.type';
import * as ɵngcc0 from '@angular/core';
export declare class TopBarNavComponent implements OnInit, OnDestroy, AfterViewInit {
    private elRef;
    private windowRefService;
    /**
     * The translation context
     */
    tc: string;
    /**
     * MenuItems - The menu only support one level down (children). NavItem with children itself will to trigger navigate.
     */
    menuItems: NavItem[];
    showMobile: boolean;
    toggle$: BehaviorSubject<NavItem>;
    private clickedOutside$;
    trackByFn: (i: any) => any;
    constructor(elRef: ElementRef, windowRefService: WindowRefService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    toggleMobileMenu(): void;
    toggleMenuItem(menuItem: NavItem): void;
    /**
     * Emits undefined if click on window was not this component
     */
    private getClickedOutside$;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TopBarNavComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TopBarNavComponent, "sof-top-bar-nav", never, { "tc": "tc"; "menuItems": "menuItems"; }, {}, never, never>;
}

//# sourceMappingURL=top-bar-nav.component.d.ts.map