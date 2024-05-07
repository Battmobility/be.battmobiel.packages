import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewChildren } from '@angular/core';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { take } from 'rxjs/operators';
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
export { TabsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL3RhYnMvdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFHTixTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7SUFvRHpCLGFBQWEsU0FBYixhQUFhOztRQUN4QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBSVQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHL0MsY0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBNkMxQixDQUFDO0lBM0NDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYiw4REFBOEQ7UUFDOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPO2FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckMsU0FBUyxDQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXLEtBQVUsQ0FBQztJQUV0Qjs7O09BR0c7SUFDSCxNQUFNLENBQUMsSUFBYTtRQUNsQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMvQyxPQUFPLENBQUMsTUFBTSxDQUNaLElBQUksQ0FBQyxHQUFHLENBQ04sQ0FBQyxFQUNELE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQ3BFLEVBQ0QsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU8sY0FBYzs7UUFDcEIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckMsTUFBTSxJQUFJLGVBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsMENBQzVELFVBQVUsMENBQUUsYUFBYSxDQUFDO1lBQzlCLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxjQUFjLENBQUM7Z0JBQ25CLEtBQUssRUFBRSxTQUFTO2dCQUNoQixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsUUFBUSxFQUFFLFFBQVE7YUFDbkIsRUFBRTtTQUNKO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBdkdBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJDVDs7YUFFRjs7O2lCQUlFLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLO3lCQUNMLE1BQU07MEJBQ04sU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs0QkFDeEQsWUFBWSxTQUFDLFNBQVM7O0FBUlosYUFBYTtJQWxEekIsWUFBWSxFQUFFO0dBa0RGLGFBQWEsQ0FzRHpCO1NBdERZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFiLCBUYWJDb21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy90YWInO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSwgVW50aWxEZXN0cm95IH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi10YWJzJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNuYXAtbGVmdFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBzb2ZCdXR0b25cbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLXBsYWluXCJcbiAgICAgICAgKm5nSWY9XCIhaW5WaWV3TGVmdFwiXG4gICAgICAgIChjbGljayk9XCJzY3JvbGwodHJ1ZSlcIlxuICAgICAgPlxuICAgICAgICA8c29mLXN2Zy1pY29uIGljb249XCJpY29uLWNoZXZyb24tbGVmdFwiPjwvc29mLXN2Zy1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhYnNcIiAjdGFic1ZpZXc+XG4gICAgICA8c29mLWluLXZpZXdcbiAgICAgICAgW3Njcm9sbGFibGVSZWZdPVwidGFic1ZpZXdSZWY/Lm5hdGl2ZUVsZW1lbnRcIlxuICAgICAgICAoaW5WaWV3KT1cImluVmlld0xlZnQgPSAkZXZlbnRcIlxuICAgICAgPjwvc29mLWluLXZpZXc+XG5cbiAgICAgIDxzb2YtdGFiXG4gICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFiczsgdHJhY2tCeTogdHJhY2tCeUZuOyBsZXQgaW5kZXggPSBpbmRleFwiXG4gICAgICAgIFt0Y109XCJ0Y1wiXG4gICAgICAgICN0YWJDbXBzXG4gICAgICAgIGNsYXNzPVwibXItMVwiXG4gICAgICAgIFt0YWJdPVwidGFiXCJcbiAgICAgICAgW2lzU2VsZWN0ZWRdPVwidGFiID09PSBhY3RpdmVcIlxuICAgICAgICAoY2xpY2tUYWIpPVwiY2xpY2tlZFRhYi5lbWl0KHRhYilcIlxuICAgICAgPjwvc29mLXRhYj5cbiAgICAgIDxzb2YtaW4tdmlld1xuICAgICAgICBbc2Nyb2xsYWJsZVJlZl09XCJ0YWJzVmlld1JlZj8ubmF0aXZlRWxlbWVudFwiXG4gICAgICAgIChpblZpZXcpPVwiaW5WaWV3UmlnaHQgPSAkZXZlbnRcIlxuICAgICAgPlxuICAgICAgPC9zb2YtaW4tdmlldz5cbiAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1zcGFjZXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic25hcC1yaWdodFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBzb2ZCdXR0b25cbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLXBsYWluXCJcbiAgICAgICAgKm5nSWY9XCIhaW5WaWV3UmlnaHRcIlxuICAgICAgICAoY2xpY2spPVwic2Nyb2xsKGZhbHNlKVwiXG4gICAgICA+XG4gICAgICAgIDxzb2Ytc3ZnLWljb24gaWNvbj1cImljb24tY2hldnJvbi1yaWdodFwiPjwvc29mLXN2Zy1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3RhYnMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBpblZpZXdMZWZ0ID0gdHJ1ZTtcbiAgaW5WaWV3UmlnaHQgPSB0cnVlO1xuICBASW5wdXQoKSB0Yzogc3RyaW5nO1xuICBASW5wdXQoKSB0YWJzOiBUYWJbXTtcbiAgQElucHV0KCkgYWN0aXZlOiBUYWI7XG4gIEBPdXRwdXQoKSBjbGlja2VkVGFiID0gbmV3IEV2ZW50RW1pdHRlcjxUYWI+KCk7XG4gIEBWaWV3Q2hpbGQoJ3RhYnNWaWV3JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgdGFic1ZpZXdSZWY7XG4gIEBWaWV3Q2hpbGRyZW4oJ3RhYkNtcHMnKSB0YWJDb21wb25lbnRzOiBRdWVyeUxpc3Q8VGFiQ29tcG9uZW50PjtcbiAgdHJhY2tCeUZuID0gKGksIHIpID0+IHI7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zY3JvbGxUb0NlbnRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBPbmNlIGFsbCB0aGUgdGFicyBhcmUgaW5pdGlhbGl6ZWQsIHNjcm9sbCB0byB0aGUgYWN0aXZlIG9uZVxuICAgIHRoaXMudGFiQ29tcG9uZW50cy5jaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95KHRoaXMpLCB0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoY29tcHM6IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+KSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9DZW50ZXIoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgYSBiaXQgdG8gdGhlIHJpZ2h0LCBtYWtlIGZhY3RvciBuZWdhdGl2ZSBmb3IgbGVmdCBzY3JvbGxcbiAgICogQHBhcmFtIGZhY3RvciBzY3JvbGxpbmcgZmFjdG9yLCAxIGZvciBub3JtYWwgcmlnaHQsIC0xIGZvciBub3JtYWwgbGVmdFxuICAgKi9cbiAgc2Nyb2xsKGJhY2s6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy50YWJzVmlld1JlZi5uYXRpdmVFbGVtZW50O1xuICAgIGVsZW1lbnQuc2Nyb2xsKFxuICAgICAgTWF0aC5tYXgoXG4gICAgICAgIDAsXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArIChiYWNrID8gLTEgOiAxKSAqIChlbGVtZW50LmNsaWVudFdpZHRoICogMC4zNSlcbiAgICAgICksXG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsVG9DZW50ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFiQ29tcG9uZW50cyAmJiB0aGlzLmFjdGl2ZSkge1xuICAgICAgY29uc3QgZWxlbSA9IHRoaXMudGFiQ29tcG9uZW50cy5maW5kKHggPT4geC50YWIgPT09IHRoaXMuYWN0aXZlKVxuICAgICAgICA/LmVsZW1lbnRSZWY/Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBlbGVtPy5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgIGJsb2NrOiAnbmVhcmVzdCcsXG4gICAgICAgIGlubGluZTogJ2NlbnRlcicsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=