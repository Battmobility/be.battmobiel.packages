import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class DataItemPercentageComponent {
    constructor() {
        this.minFraction = 2;
        this.maxFraction = 17;
    }
}
DataItemPercentageComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-data-item-percentage',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-data-item>
      <ng-container data-item-label>
        {{ label }}
      </ng-container>
      <ng-container data-item-value>
        <sof-percentage
          [value]="value"
          [valueSigned]="valueSigned"
          [minFraction]="minFraction"
          [maxFraction]="maxFraction"
        ></sof-percentage>
      </ng-container>
    </sof-data-item>
  `
            },] }
];
DataItemPercentageComponent.propDecorators = {
    label: [{ type: Input }],
    value: [{ type: Input }],
    valueSigned: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pdGVtLXBlcmNlbnRhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kYXRhLWl0ZW0tcGVyY2VudGFnZS9kYXRhLWl0ZW0tcGVyY2VudGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQjFFLE1BQU0sT0FBTywyQkFBMkI7SUFuQnhDO1FBdUJXLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQXpCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7R0FjVDthQUNGOzs7b0JBRUUsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWRhdGEtaXRlbS1wZXJjZW50YWdlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNvZi1kYXRhLWl0ZW0+XG4gICAgICA8bmctY29udGFpbmVyIGRhdGEtaXRlbS1sYWJlbD5cbiAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciBkYXRhLWl0ZW0tdmFsdWU+XG4gICAgICAgIDxzb2YtcGVyY2VudGFnZVxuICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgW3ZhbHVlU2lnbmVkXT1cInZhbHVlU2lnbmVkXCJcbiAgICAgICAgICBbbWluRnJhY3Rpb25dPVwibWluRnJhY3Rpb25cIlxuICAgICAgICAgIFttYXhGcmFjdGlvbl09XCJtYXhGcmFjdGlvblwiXG4gICAgICAgID48L3NvZi1wZXJjZW50YWdlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9zb2YtZGF0YS1pdGVtPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERhdGFJdGVtUGVyY2VudGFnZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XG4gIEBJbnB1dCgpIHZhbHVlU2lnbmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBtaW5GcmFjdGlvbiA9IDI7XG4gIEBJbnB1dCgpIG1heEZyYWN0aW9uID0gMTc7XG59XG4iXX0=