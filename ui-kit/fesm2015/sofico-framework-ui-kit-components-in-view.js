import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChild, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class InViewComponent {
    constructor() {
        this.scrollableRef = null;
        this.preloadHeight = 0;
        this.inView = new EventEmitter();
    }
    ngOnInit() {
        // We should only emit the most recent event
        const fn = (entries) => {
            var _a, _b;
            return this.inView.emit((_b = (_a = entries.sort((a, b) => (a.time > b.time ? -1 : 1))) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.isIntersecting);
        };
        this.intersectionObserver = new IntersectionObserver(fn, {
            root: this.scrollableRef,
            rootMargin: `0px 0px ${this.preloadHeight}px 0px`
        });
        this.intersectionObserver.observe(this.targetRef.nativeElement);
    }
    ngOnDestroy() {
        this.intersectionObserver.disconnect();
    }
}
InViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-in-view',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-content></ng-content>
    <div class="in-slice">
      <div #targetRef></div>
    </div>
  `,
                styles: [":host .in-slice{display:flex;flex-wrap:nowrap}:host .in-slice div{width:1px}:host .in-slice:after,:host .in-slice:before{content:\"\";width:100%}"]
            },] }
];
InViewComponent.propDecorators = {
    scrollableRef: [{ type: Input }],
    preloadHeight: [{ type: Input }],
    inView: [{ type: Output }],
    targetRef: [{ type: ViewChild, args: ['targetRef', { read: ElementRef, static: true },] }]
};

class InViewModule {
}
InViewModule.decorators = [
    { type: NgModule, args: [{
                declarations: [InViewComponent],
                exports: [InViewComponent],
                imports: [CommonModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InViewComponent, InViewModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-in-view.js.map
