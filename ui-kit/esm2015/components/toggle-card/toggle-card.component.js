import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
export class ToggleCardComponent {
    constructor() {
        this.selectedIcon = 'icon-trash';
        this.toggle = new EventEmitter();
    }
    open() {
        if (!(this.selected || this.isDisabled)) {
            this.toggle.emit();
        }
    }
    close(event) {
        event.stopPropagation();
        if (!this.isDisabled) {
            this.toggle.emit();
        }
    }
}
ToggleCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-toggle-card',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div
      [class.sof-card-selected]="!invalid && selected"
      [class.sof-card]="!invalid && !selected"
      [class.sof-card-invalid]="invalid"
      class="card"
    >
      <button
        *ngIf="!selected || isDisabled"
        type="button"
        (click)="open()"
        [disabled]="isDisabled"
        [class.show-pointer]="!isDisabled"
        class="body-button card-body px-3 py-2"
      >
        <ng-container *ngTemplateOutlet="cardContent"></ng-container>
      </button>
      <div *ngIf="selected && !isDisabled" class="card-body px-3 py-2">
        <ng-container *ngTemplateOutlet="cardContent"></ng-container>
      </div>
    </div>

    <!-- CARD-CONTENT -->
    <ng-template #cardContent>
      <div class="d-flex flex-row align-items-center">
        <sof-svg-icon
          *ngIf="icon"
          [icon]="icon"
          class="sof-icon-primary mr-3 my-auto"
          size="32"
        ></sof-svg-icon>
        <h5 class="flex-grow-1 m-auto title">{{ title }}</h5>
        <button
          class="close-button"
          [disabled]="isDisabled"
          (click)="close($event)"
          type="button"
        >
          <sof-svg-icon
            class="my-auto"
            [icon]="selected ? selectedIcon : 'icon-plus'"
            [class.show-pointer]="selected && !isDisabled"
            [class.disabled-icon]="isDisabled"
          ></sof-svg-icon>
        </button>
      </div>
      <ng-content></ng-content>
    </ng-template>
  `,
                styles: [".show-pointer{cursor:pointer}.disabled-icon{fill:#adb5bd}.body-button{text-align:left}.body-button,.close-button{border:none;background:none}.close-button{display:flex;flex-direction:row;align-items:center;text-align:center;height:auto}"]
            },] }
];
ToggleCardComponent.propDecorators = {
    icon: [{ type: Input }],
    title: [{ type: Input }],
    selected: [{ type: Input }],
    selectedIcon: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    toggle: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy90b2dnbGUtY2FyZC90b2dnbGUtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUF3RHZCLE1BQU0sT0FBTyxtQkFBbUI7SUF0RGhDO1FBMERXLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBRzNCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBYzdDLENBQUM7SUFaQyxJQUFJO1FBQ0YsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsS0FBWTtRQUNoQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7OztZQTFFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFFM0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0RUOzthQUNGOzs7bUJBRUUsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLXRvZ2dsZS1jYXJkJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9nZ2xlLWNhcmQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgW2NsYXNzLnNvZi1jYXJkLXNlbGVjdGVkXT1cIiFpbnZhbGlkICYmIHNlbGVjdGVkXCJcbiAgICAgIFtjbGFzcy5zb2YtY2FyZF09XCIhaW52YWxpZCAmJiAhc2VsZWN0ZWRcIlxuICAgICAgW2NsYXNzLnNvZi1jYXJkLWludmFsaWRdPVwiaW52YWxpZFwiXG4gICAgICBjbGFzcz1cImNhcmRcIlxuICAgID5cbiAgICAgIDxidXR0b25cbiAgICAgICAgKm5nSWY9XCIhc2VsZWN0ZWQgfHwgaXNEaXNhYmxlZFwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAoY2xpY2spPVwib3BlbigpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgICAgICBbY2xhc3Muc2hvdy1wb2ludGVyXT1cIiFpc0Rpc2FibGVkXCJcbiAgICAgICAgY2xhc3M9XCJib2R5LWJ1dHRvbiBjYXJkLWJvZHkgcHgtMyBweS0yXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNhcmRDb250ZW50XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgKm5nSWY9XCJzZWxlY3RlZCAmJiAhaXNEaXNhYmxlZFwiIGNsYXNzPVwiY2FyZC1ib2R5IHB4LTMgcHktMlwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2FyZENvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBDQVJELUNPTlRFTlQgLS0+XG4gICAgPG5nLXRlbXBsYXRlICNjYXJkQ29udGVudD5cbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxzb2Ytc3ZnLWljb25cbiAgICAgICAgICAqbmdJZj1cImljb25cIlxuICAgICAgICAgIFtpY29uXT1cImljb25cIlxuICAgICAgICAgIGNsYXNzPVwic29mLWljb24tcHJpbWFyeSBtci0zIG15LWF1dG9cIlxuICAgICAgICAgIHNpemU9XCIzMlwiXG4gICAgICAgID48L3NvZi1zdmctaWNvbj5cbiAgICAgICAgPGg1IGNsYXNzPVwiZmxleC1ncm93LTEgbS1hdXRvIHRpdGxlXCI+e3sgdGl0bGUgfX08L2g1PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJjbG9zZS1idXR0b25cIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8c29mLXN2Zy1pY29uXG4gICAgICAgICAgICBjbGFzcz1cIm15LWF1dG9cIlxuICAgICAgICAgICAgW2ljb25dPVwic2VsZWN0ZWQgPyBzZWxlY3RlZEljb24gOiAnaWNvbi1wbHVzJ1wiXG4gICAgICAgICAgICBbY2xhc3Muc2hvdy1wb2ludGVyXT1cInNlbGVjdGVkICYmICFpc0Rpc2FibGVkXCJcbiAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZC1pY29uXT1cImlzRGlzYWJsZWRcIlxuICAgICAgICAgID48L3NvZi1zdmctaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRvZ2dsZUNhcmRDb21wb25lbnQge1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RlZEljb24gPSAnaWNvbi10cmFzaCc7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGludmFsaWQ6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICghKHRoaXMuc2VsZWN0ZWQgfHwgdGhpcy5pc0Rpc2FibGVkKSkge1xuICAgICAgdGhpcy50b2dnbGUuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZS5lbWl0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=