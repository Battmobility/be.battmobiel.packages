import { __decorate } from 'tslib';
import { InjectionToken, Directive, Optional, Inject, ElementRef, Input, NgModule } from '@angular/core';
import { takeUntilDestroy, Changes, UntilDestroy } from 'ngx-reactivetoolkit';
import { Subject } from 'rxjs';
import { startWith, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
const SOF_FOCUS_COMPONENT = new InjectionToken('SOF_FOCUS_COMPONENT');

let FocusDirective = class FocusDirective {
    constructor(component, elementRef) {
        this.component = component;
        this.elementRef = elementRef;
        this.done$ = new Subject();
    }
    ngOnChanges() { }
    ngOnDestroy() { }
    ngAfterViewInit() {
        this.combined$ = this.getCombined$();
        this.combined$.pipe(takeUntilDestroy(this)).subscribe(sofFocus => {
            this.setFocus(sofFocus);
        });
    }
    getCombined$() {
        return this.sofFocus$.pipe(startWith(this.sofFocus), distinctUntilChanged(), takeUntil(this.done$));
    }
    setFocus(sofFocus) {
        if (['', true].includes(sofFocus)) {
            this.done$.next();
            setTimeout(() => {
                if (this.component) {
                    this.component.sofFocus();
                }
                else {
                    this.elementRef.nativeElement.focus();
                }
            }, 0);
        }
    }
};
FocusDirective.ɵfac = function FocusDirective_Factory(t) { return new (t || FocusDirective)(ɵngcc0.ɵɵdirectiveInject(SOF_FOCUS_COMPONENT, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FocusDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FocusDirective, selectors: [["", "sofFocus", ""]], inputs: { sofFocus: "sofFocus" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
FocusDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SOF_FOCUS_COMPONENT,] }] },
    { type: ElementRef }
];
FocusDirective.propDecorators = {
    sofFocus: [{ type: Input }]
};
__decorate([
    Changes('sofFocus')
], FocusDirective.prototype, "sofFocus$", void 0);
FocusDirective = __decorate([
    UntilDestroy()
], FocusDirective);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FocusDirective, [{
        type: Directive,
        args: [{
                selector: '[sofFocus]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SOF_FOCUS_COMPONENT]
            }] }, { type: ɵngcc0.ElementRef }]; }, { sofFocus: [{
            type: Input
        }] }); })();

class FocusModule {
}
FocusModule.ɵfac = function FocusModule_Factory(t) { return new (t || FocusModule)(); };
FocusModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FocusModule });
FocusModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FocusModule, { declarations: function () { return [FocusDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [FocusDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FocusModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [FocusDirective],
                exports: [FocusDirective]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { FocusDirective, FocusModule, SOF_FOCUS_COMPONENT };

//# sourceMappingURL=sofico-framework-ui-kit-directives-focus.js.map