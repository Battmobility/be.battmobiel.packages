import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
export class CollapsableSectionComponent {
    constructor() {
        this.active = false;
        this.stateChange = new EventEmitter();
        this.internalCollapsed = true;
    }
    set collapsed(value) {
        this.internalCollapsed = value;
    }
    toggle() {
        this.internalCollapsed = !this.internalCollapsed;
        this.stateChange.emit(this.internalCollapsed);
    }
}
CollapsableSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-collapsable-section',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <button
      type="button"
      class="btn btn-plain d-flex justify-content-between align-items-center w-100 title"
      (click)="toggle()"
    >
      <div class="d-flex align-items-center">
        <div>{{ tc + '.' + label | translate }}</div>
        <div *ngIf="active" class="text-primary font-weight-bolder pl-2">
          &bull;
        </div>
      </div>

      <sof-svg-icon
        class="sof-icon-12 icon-toggle"
        [icon]="'icon-chevron-' + (internalCollapsed ? 'down' : 'up')"
      ></sof-svg-icon>
    </button>
    <div *ngIf="!internalCollapsed" class="mt-2">
      <ng-content></ng-content>
    </div>
  `,
                styles: [":host{display:flex;flex-direction:column}.title{cursor:pointer;font-weight:500}"]
            },] }
];
CollapsableSectionComponent.propDecorators = {
    tc: [{ type: Input }],
    label: [{ type: Input }],
    active: [{ type: Input }],
    collapsed: [{ type: Input }],
    stateChange: [{ type: Output }],
    internalCollapsed: [{ type: HostBinding, args: ['class.collapsed',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2FibGUtc2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2NvbGxhcHNhYmxlLXNlY3Rpb24vY29sbGFwc2FibGUtc2VjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBNkJ2QixNQUFNLE9BQU8sMkJBQTJCO0lBM0J4QztRQThCVyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBSWQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRXBCLHNCQUFpQixHQUFHLElBQUksQ0FBQztJQU0zRCxDQUFDO0lBWEMsSUFBYSxTQUFTLENBQUMsS0FBSztRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFLRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFFbkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJUOzthQUNGOzs7aUJBRUUsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFHTCxNQUFNO2dDQUVOLFdBQVcsU0FBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtY29sbGFwc2FibGUtc2VjdGlvbicsXG4gIHN0eWxlVXJsczogWycuL2NvbGxhcHNhYmxlLXNlY3Rpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzcz1cImJ0biBidG4tcGxhaW4gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCB0aXRsZVwiXG4gICAgICAoY2xpY2spPVwidG9nZ2xlKClcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXY+e3sgdGMgKyAnLicgKyBsYWJlbCB8IHRyYW5zbGF0ZSB9fTwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiYWN0aXZlXCIgY2xhc3M9XCJ0ZXh0LXByaW1hcnkgZm9udC13ZWlnaHQtYm9sZGVyIHBsLTJcIj5cbiAgICAgICAgICAmYnVsbDtcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHNvZi1zdmctaWNvblxuICAgICAgICBjbGFzcz1cInNvZi1pY29uLTEyIGljb24tdG9nZ2xlXCJcbiAgICAgICAgW2ljb25dPVwiJ2ljb24tY2hldnJvbi0nICsgKGludGVybmFsQ29sbGFwc2VkID8gJ2Rvd24nIDogJ3VwJylcIlxuICAgICAgPjwvc29mLXN2Zy1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgKm5nSWY9XCIhaW50ZXJuYWxDb2xsYXBzZWRcIiBjbGFzcz1cIm10LTJcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzYWJsZVNlY3Rpb25Db21wb25lbnQge1xuICBASW5wdXQoKSB0Yzogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgc2V0IGNvbGxhcHNlZCh2YWx1ZSkge1xuICAgIHRoaXMuaW50ZXJuYWxDb2xsYXBzZWQgPSB2YWx1ZTtcbiAgfVxuICBAT3V0cHV0KCkgc3RhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzZWQnKSBpbnRlcm5hbENvbGxhcHNlZCA9IHRydWU7XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJuYWxDb2xsYXBzZWQgPSAhdGhpcy5pbnRlcm5hbENvbGxhcHNlZDtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlLmVtaXQodGhpcy5pbnRlcm5hbENvbGxhcHNlZCk7XG4gIH1cbn1cbiJdfQ==