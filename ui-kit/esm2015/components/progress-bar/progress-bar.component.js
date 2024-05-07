import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class ProgressBarComponent {
    constructor() {
        this.color = 'primary';
    }
    set percentage(value) {
        this.progressBarWidth = value + '%';
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-progress-bar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        [ngClass]="color"
        [style.width]="progressBarWidth"
      ></div>
    </div>
  `,
                styles: [".progress{border-radius:0;height:10px}.progress .progress-bar{transition:none}"]
            },] }
];
ProgressBarComponent.propDecorators = {
    color: [{ type: Input }],
    percentage: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFpQjFFLE1BQU0sT0FBTyxvQkFBb0I7SUFmakM7UUFrQlcsVUFBSyxHQUFxQyxTQUFTLENBQUM7SUFLL0QsQ0FBQztJQUhDLElBQWEsVUFBVSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDdEMsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUU1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDs7YUFDRjs7O29CQUlFLEtBQUs7eUJBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1wcm9ncmVzcy1iYXInLFxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiY29sb3JcIlxuICAgICAgICBbc3R5bGUud2lkdGhdPVwicHJvZ3Jlc3NCYXJXaWR0aFwiXG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJDb21wb25lbnQge1xuICBwcm9ncmVzc0JhcldpZHRoOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY29sb3I6ICdwcmltYXJ5JyB8ICdkYW5nZXInIHwgJ3dhcm5pbmcnID0gJ3ByaW1hcnknO1xuXG4gIEBJbnB1dCgpIHNldCBwZXJjZW50YWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnByb2dyZXNzQmFyV2lkdGggPSB2YWx1ZSArICclJztcbiAgfVxufVxuIl19