import { AfterViewInit, ElementRef, OnChanges, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { OnSofFocus } from './focus.interface';
import * as ɵngcc0 from '@angular/core';
export declare class FocusDirective implements AfterViewInit, OnChanges, OnDestroy {
    private component;
    private elementRef;
    sofFocus: any;
    sofFocus$: Observable<boolean>;
    private combined$;
    private done$;
    constructor(component: OnSofFocus | null, elementRef: ElementRef);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private getCombined$;
    private setFocus;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FocusDirective, [{ optional: true; }, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<FocusDirective, "[sofFocus]", never, { "sofFocus": "sofFocus"; }, {}, never>;
}

//# sourceMappingURL=focus.directive.d.ts.map