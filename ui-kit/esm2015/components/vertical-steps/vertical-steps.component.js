import { __decorate } from "tslib";
import { Component, ContentChild, Input } from '@angular/core';
import { Changes } from 'ngx-reactivetoolkit';
export class VerticalStepsComponent {
    constructor() {
        /**
         * The size of the bullets.
         * Can be 8 - 12 - 16.
         * 12 by default
         */
        this.sizeBullets = '12';
        /**
         * Input to reverse the direction of the steppers.
         * Meaning that the stepper will start at the bottom, and not at the top (default).
         */
        this.reverse = false;
    }
    set steps(items) {
        this.activeIndex = items.indexOf([...items].reverse().find(x => x.active));
        this.internalSteps = items.map((step, index) => (Object.assign(Object.assign({}, step), { active: index === this.activeIndex })));
    }
    ngOnChanges() { }
}
VerticalStepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-vertical-steps',
                template: `
    <ul>
      <li
        *ngFor="let item of internalSteps; let i = index"
        [class.active]="
          (i <= activeIndex && !reverse) || (i >= activeIndex && reverse)
        "
        [class.last-active]="i === activeIndex"
      >
        <span class="bullet bullet-{{ sizeBullets }}">
          <sof-svg-icon
            icon="icon-check"
            [size]="sizeBullets"
            *ngIf="
              (i <= activeIndex && !reverse) || (i >= activeIndex && reverse)
            "
          ></sof-svg-icon>
        </span>
        <div class="content content-{{ sizeBullets }}">
          <ng-container
            *ngIf="headerTemplateRef"
            [ngTemplateOutlet]="headerTemplateRef"
            [ngTemplateOutletContext]="{ $implicit: item }"
          >
          </ng-container>
        </div>
      </li>
    </ul>
  `,
                styles: ["ul{list-style:none;-webkit-padding-start:0;padding-inline-start:0}ul li{padding-bottom:15px;position:relative;display:flex;align-items:flex-start}ul li:last-child{padding-bottom:0}ul li:last-child .bullet:before{content:none}ul li .bullet{border-width:1px;border-style:solid;background-color:#fff;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-top:4px;flex-shrink:0}ul li .bullet-8{height:17px;width:17px}ul li .bullet-12{height:22px;width:22px}ul li .bullet-16{height:28px;width:28px}ul li .bullet-8:before{left:8px;top:21px;height:calc(100% - 17px)}ul li .bullet-12:before{left:11px;top:25px;height:calc(100% - 21px)}ul li .bullet-16:before{left:14px;top:31px;height:calc(100% - 27px)}ul li .bullet sof-svg-icon div svg path{stroke-width:4px}ul li .bullet:before{content:\"\";position:absolute;border-left-width:1px;border-left-style:dashed;bottom:0}ul li .content{margin-left:15px}ul li .content-12{margin-top:2px}ul li .content-16{margin-top:5px}"]
            },] }
];
VerticalStepsComponent.propDecorators = {
    sizeBullets: [{ type: Input }],
    reverse: [{ type: Input }],
    steps: [{ type: Input }],
    headerTemplateRef: [{ type: ContentChild, args: ['step', { static: false },] }]
};
__decorate([
    Changes('steps')
], VerticalStepsComponent.prototype, "steps$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy92ZXJ0aWNhbC1zdGVwcy92ZXJ0aWNhbC1zdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFxQzlDLE1BQU0sT0FBTyxzQkFBc0I7SUFqQ25DO1FBcUNFOzs7O1dBSUc7UUFDTSxnQkFBVyxHQUFzQixJQUFJLENBQUM7UUFFL0M7OztXQUdHO1FBQ00sWUFBTyxHQUFHLEtBQUssQ0FBQztJQWMzQixDQUFDO0lBWkMsSUFBYSxLQUFLLENBQUMsS0FBa0I7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxpQ0FDM0MsSUFBSSxLQUNQLE1BQU0sRUFBRSxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVcsSUFDbEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUtELFdBQVcsS0FBVSxDQUFDOzs7WUE3RHZCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0QlQ7O2FBRUY7OzswQkFVRSxLQUFLO3NCQU1MLEtBQUs7b0JBRUwsS0FBSztnQ0FTTCxZQUFZLFNBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7QUFEckI7SUFBakIsT0FBTyxDQUFDLE9BQU8sQ0FBQztzREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFuZ2VzIH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdGVwIH0gZnJvbSAnLi90eXBlcy9zdGVwLnR5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtdmVydGljYWwtc3RlcHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx1bD5cbiAgICAgIDxsaVxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpbnRlcm5hbFN0ZXBzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJcbiAgICAgICAgICAoaSA8PSBhY3RpdmVJbmRleCAmJiAhcmV2ZXJzZSkgfHwgKGkgPj0gYWN0aXZlSW5kZXggJiYgcmV2ZXJzZSlcbiAgICAgICAgXCJcbiAgICAgICAgW2NsYXNzLmxhc3QtYWN0aXZlXT1cImkgPT09IGFjdGl2ZUluZGV4XCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJidWxsZXQgYnVsbGV0LXt7IHNpemVCdWxsZXRzIH19XCI+XG4gICAgICAgICAgPHNvZi1zdmctaWNvblxuICAgICAgICAgICAgaWNvbj1cImljb24tY2hlY2tcIlxuICAgICAgICAgICAgW3NpemVdPVwic2l6ZUJ1bGxldHNcIlxuICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgKGkgPD0gYWN0aXZlSW5kZXggJiYgIXJldmVyc2UpIHx8IChpID49IGFjdGl2ZUluZGV4ICYmIHJldmVyc2UpXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID48L3NvZi1zdmctaWNvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudCBjb250ZW50LXt7IHNpemVCdWxsZXRzIH19XCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgKm5nSWY9XCJoZWFkZXJUZW1wbGF0ZVJlZlwiXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJoZWFkZXJUZW1wbGF0ZVJlZlwiXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGl0ZW0gfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vdmVydGljYWwtc3RlcHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbFN0ZXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgaW50ZXJuYWxTdGVwczogU3RlcDxhbnk+W107XG4gIGFjdGl2ZUluZGV4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBidWxsZXRzLlxuICAgKiBDYW4gYmUgOCAtIDEyIC0gMTYuXG4gICAqIDEyIGJ5IGRlZmF1bHRcbiAgICovXG4gIEBJbnB1dCgpIHNpemVCdWxsZXRzOiAnOCcgfCAnMTInIHwgJzE2JyA9ICcxMic7XG5cbiAgLyoqXG4gICAqIElucHV0IHRvIHJldmVyc2UgdGhlIGRpcmVjdGlvbiBvZiB0aGUgc3RlcHBlcnMuXG4gICAqIE1lYW5pbmcgdGhhdCB0aGUgc3RlcHBlciB3aWxsIHN0YXJ0IGF0IHRoZSBib3R0b20sIGFuZCBub3QgYXQgdGhlIHRvcCAoZGVmYXVsdCkuXG4gICAqL1xuICBASW5wdXQoKSByZXZlcnNlID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc2V0IHN0ZXBzKGl0ZW1zOiBTdGVwPGFueT5bXSkge1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpdGVtcy5pbmRleE9mKFsuLi5pdGVtc10ucmV2ZXJzZSgpLmZpbmQoeCA9PiB4LmFjdGl2ZSkpO1xuICAgIHRoaXMuaW50ZXJuYWxTdGVwcyA9IGl0ZW1zLm1hcCgoc3RlcCwgaW5kZXgpID0+ICh7XG4gICAgICAuLi5zdGVwLFxuICAgICAgYWN0aXZlOiBpbmRleCA9PT0gdGhpcy5hY3RpdmVJbmRleFxuICAgIH0pKTtcbiAgfVxuXG4gIEBDaGFuZ2VzKCdzdGVwcycpIHN0ZXBzJDogT2JzZXJ2YWJsZTxTdGVwPGFueT5bXT47XG4gIEBDb250ZW50Q2hpbGQoJ3N0ZXAnLCB7IHN0YXRpYzogZmFsc2UgfSkgaGVhZGVyVGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7fVxufVxuIl19