import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class DataItemNumberComponent {
    constructor() {
        this.minFraction = 0;
        this.maxFraction = 17;
    }
}
DataItemNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-data-item-number',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-data-item>
      <ng-container data-item-label>
        {{ label }}
      </ng-container>
      <ng-container data-item-value>
        <sof-number
          [value]="value"
          [minFraction]="minFraction"
          [maxFraction]="maxFraction"
        >
        </sof-number>
      </ng-container>
    </sof-data-item>
  `
            },] }
];
DataItemNumberComponent.propDecorators = {
    label: [{ type: Input }],
    value: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pdGVtLW51bWJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2RhdGEtaXRlbS1udW1iZXIvZGF0YS1pdGVtLW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQjFFLE1BQU0sT0FBTyx1QkFBdUI7SUFuQnBDO1FBc0JXLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQXhCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7R0FjVDthQUNGOzs7b0JBRUUsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1kYXRhLWl0ZW0tbnVtYmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNvZi1kYXRhLWl0ZW0+XG4gICAgICA8bmctY29udGFpbmVyIGRhdGEtaXRlbS1sYWJlbD5cbiAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciBkYXRhLWl0ZW0tdmFsdWU+XG4gICAgICAgIDxzb2YtbnVtYmVyXG4gICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICBbbWluRnJhY3Rpb25dPVwibWluRnJhY3Rpb25cIlxuICAgICAgICAgIFttYXhGcmFjdGlvbl09XCJtYXhGcmFjdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgPC9zb2YtbnVtYmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9zb2YtZGF0YS1pdGVtPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERhdGFJdGVtTnVtYmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IG51bWJlcjtcbiAgQElucHV0KCkgbWluRnJhY3Rpb24gPSAwO1xuICBASW5wdXQoKSBtYXhGcmFjdGlvbiA9IDE3O1xufVxuIl19