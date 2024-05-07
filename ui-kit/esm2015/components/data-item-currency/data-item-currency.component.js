import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class DataItemCurrencyComponent {
    constructor() {
        this.minFraction = 2;
        this.maxFraction = 17;
    }
}
DataItemCurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-data-item-currency',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-data-item>
      <ng-container data-item-label>
        {{ label }}
      </ng-container>
      <ng-container data-item-value>
        <sof-currency
          [value]="value"
          [currencyCode]="currencyCode"
          [minFraction]="minFraction"
          [maxFraction]="maxFraction"
        ></sof-currency>
      </ng-container>
    </sof-data-item>
  `
            },] }
];
DataItemCurrencyComponent.propDecorators = {
    label: [{ type: Input }],
    value: [{ type: Input }],
    currencyCode: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pdGVtLWN1cnJlbmN5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZGF0YS1pdGVtLWN1cnJlbmN5L2RhdGEtaXRlbS1jdXJyZW5jeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQjFFLE1BQU0sT0FBTyx5QkFBeUI7SUFuQnRDO1FBdUJXLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQXpCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7R0FjVDthQUNGOzs7b0JBRUUsS0FBSztvQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWRhdGEtaXRlbS1jdXJyZW5jeScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzb2YtZGF0YS1pdGVtPlxuICAgICAgPG5nLWNvbnRhaW5lciBkYXRhLWl0ZW0tbGFiZWw+XG4gICAgICAgIHt7IGxhYmVsIH19XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgZGF0YS1pdGVtLXZhbHVlPlxuICAgICAgICA8c29mLWN1cnJlbmN5XG4gICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICBbY3VycmVuY3lDb2RlXT1cImN1cnJlbmN5Q29kZVwiXG4gICAgICAgICAgW21pbkZyYWN0aW9uXT1cIm1pbkZyYWN0aW9uXCJcbiAgICAgICAgICBbbWF4RnJhY3Rpb25dPVwibWF4RnJhY3Rpb25cIlxuICAgICAgICA+PC9zb2YtY3VycmVuY3k+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3NvZi1kYXRhLWl0ZW0+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUl0ZW1DdXJyZW5jeUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XG4gIEBJbnB1dCgpIGN1cnJlbmN5Q29kZTogc3RyaW5nO1xuICBASW5wdXQoKSBtaW5GcmFjdGlvbiA9IDI7XG4gIEBJbnB1dCgpIG1heEZyYWN0aW9uID0gMTc7XG59XG4iXX0=