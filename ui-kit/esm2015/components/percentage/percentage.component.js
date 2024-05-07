import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class PercentageComponent {
    constructor() {
        this.minFraction = 2;
        this.maxFraction = 17;
    }
    get format() {
        return `1.${this.minFraction}-${this.maxFraction}`;
    }
}
PercentageComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-percentage',
                template: `
    <ng-container *ngIf="value | sofIsNumber; else noValue">
      <span *ngIf="valueSigned && value > 0">+</span
      >{{ value | percent: format }}
    </ng-container>
    <ng-template #noValue>-</ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
PercentageComponent.propDecorators = {
    value: [{ type: Input }],
    valueSigned: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyY2VudGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL3BlcmNlbnRhZ2UvcGVyY2VudGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFhMUUsTUFBTSxPQUFPLG1CQUFtQjtJQVhoQztRQWNXLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBSzVCLENBQUM7SUFIQyxJQUFJLE1BQU07UUFDUixPQUFPLEtBQUssSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckQsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7OztHQU1UO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7b0JBRUUsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1wZXJjZW50YWdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsdWUgfCBzb2ZJc051bWJlcjsgZWxzZSBub1ZhbHVlXCI+XG4gICAgICA8c3BhbiAqbmdJZj1cInZhbHVlU2lnbmVkICYmIHZhbHVlID4gMFwiPis8L3NwYW5cbiAgICAgID57eyB2YWx1ZSB8IHBlcmNlbnQ6IGZvcm1hdCB9fVxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjbm9WYWx1ZT4tPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUGVyY2VudGFnZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XG4gIEBJbnB1dCgpIHZhbHVlU2lnbmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBtaW5GcmFjdGlvbiA9IDI7XG4gIEBJbnB1dCgpIG1heEZyYWN0aW9uID0gMTc7XG5cbiAgZ2V0IGZvcm1hdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgMS4ke3RoaXMubWluRnJhY3Rpb259LSR7dGhpcy5tYXhGcmFjdGlvbn1gO1xuICB9XG59XG4iXX0=