import { __decorate } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChild, ElementRef, ViewChildren, NgModule } from '@angular/core';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { take } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@sofico-framework/ui-kit/components/button';
import { InViewModule } from '@sofico-framework/ui-kit/components/in-view';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { TabModule } from '@sofico-framework/ui-kit/components/tab';

let TabsComponent = class TabsComponent {
    constructor() {
        this.inViewLeft = true;
        this.inViewRight = true;
        this.clickedTab = new EventEmitter();
        this.trackByFn = (i, r) => r;
    }
    ngOnChanges(changes) {
        if (changes.active) {
            this.scrollToCenter();
        }
    }
    ngAfterViewInit() {
        // Once all the tabs are initialized, scroll to the active one
        this.tabComponents.changes
            .pipe(takeUntilDestroy(this), take(1))
            .subscribe((comps) => {
            this.scrollToCenter();
        });
    }
    ngOnDestroy() { }
    /**
     * Scroll a bit to the right, make factor negative for left scroll
     * @param factor scrolling factor, 1 for normal right, -1 for normal left
     */
    scroll(back) {
        const element = this.tabsViewRef.nativeElement;
        element.scroll(Math.max(0, element.scrollLeft + (back ? -1 : 1) * (element.clientWidth * 0.35)), 0);
    }
    scrollToCenter() {
        var _a, _b;
        if (this.tabComponents && this.active) {
            const elem = (_b = (_a = this.tabComponents.find(x => x.tab === this.active)) === null || _a === void 0 ? void 0 : _a.elementRef) === null || _b === void 0 ? void 0 : _b.nativeElement;
            elem === null || elem === void 0 ? void 0 : elem.scrollIntoView({
                block: 'nearest',
                inline: 'center',
                behavior: 'smooth'
            });
        }
    }
};
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-tabs',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="snap-left">
      <button
        sofButton
        class="btn btn-plain"
        *ngIf="!inViewLeft"
        (click)="scroll(true)"
      >
        <sof-svg-icon icon="icon-chevron-left"></sof-svg-icon>
      </button>
    </div>
    <div class="tabs" #tabsView>
      <sof-in-view
        [scrollableRef]="tabsViewRef?.nativeElement"
        (inView)="inViewLeft = $event"
      ></sof-in-view>

      <sof-tab
        *ngFor="let tab of tabs; trackBy: trackByFn; let index = index"
        [tc]="tc"
        #tabCmps
        class="mr-1"
        [tab]="tab"
        [isSelected]="tab === active"
        (clickTab)="clickedTab.emit(tab)"
      ></sof-tab>
      <sof-in-view
        [scrollableRef]="tabsViewRef?.nativeElement"
        (inView)="inViewRight = $event"
      >
      </sof-in-view>
      <div class="right-spacer"></div>
    </div>
    <div class="snap-right">
      <button
        sofButton
        class="btn btn-plain"
        *ngIf="!inViewRight"
        (click)="scroll(false)"
      >
        <sof-svg-icon icon="icon-chevron-right"></sof-svg-icon>
      </button>
    </div>
  `,
                styles: [":host{max-width:100%;display:flex;align-items:stretch;margin:-5px}:host .tabs{padding:5px 10px 5px 5px;display:flex;flex-wrap:nowrap;align-items:flex-end;overflow-x:auto;scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none}:host .tabs::-webkit-scrollbar{display:none}:host .tabs sof-tab{flex-shrink:0}:host .tabs .spacer{width:1px}:host .snap-left,:host .snap-right{position:relative;background-color:inherit}:host .snap-left button,:host .snap-right button{z-index:2;position:absolute;padding:.5rem;top:-1px;bottom:-1px}:host .snap-right button{right:-1px;box-shadow:-4px 0 6px -4px #9e9e9e}:host .snap-left button{left:-1px;box-shadow:4px 0 6px -4px #9e9e9e}:host .right-spacer{flex-shrink:0;height:1px;width:10px}"]
            },] }
];
TabsComponent.propDecorators = {
    tc: [{ type: Input }],
    tabs: [{ type: Input }],
    active: [{ type: Input }],
    clickedTab: [{ type: Output }],
    tabsViewRef: [{ type: ViewChild, args: ['tabsView', { read: ElementRef, static: true },] }],
    tabComponents: [{ type: ViewChildren, args: ['tabCmps',] }]
};
TabsComponent = __decorate([
    UntilDestroy()
], TabsComponent);

class TabsModule {
}
TabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SvgIconModule, ButtonModule, TabModule, InViewModule],
                declarations: [TabsComponent],
                exports: [TabsComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { TabsComponent, TabsModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-tabs.js.map
