import { __decorate } from 'tslib';
import { InjectionToken, Directive, Optional, Inject, ElementRef, Input, NgModule } from '@angular/core';
import { takeUntilDestroy, Changes, UntilDestroy } from 'ngx-reactivetoolkit';
import { Subject } from 'rxjs';
import { startWith, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

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
FocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sofFocus]'
            },] }
];
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

class FocusModule {
}
FocusModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [FocusDirective],
                exports: [FocusDirective]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { FocusDirective, FocusModule, SOF_FOCUS_COMPONENT };
//# sourceMappingURL=sofico-framework-ui-kit-directives-focus.js.map
