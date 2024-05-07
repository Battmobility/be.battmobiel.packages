import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class DataItemBooleanComponent {
}
DataItemBooleanComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-data-item-boolean',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-data-item>
      <ng-container data-item-label>
        {{ label }}
      </ng-container>
      <ng-container data-item-value>
        {{ value ? labelTrue : labelFalse }}
      </ng-container>
    </sof-data-item>
  `
            },] }
];
DataItemBooleanComponent.propDecorators = {
    label: [{ type: Input }],
    value: [{ type: Input }],
    labelTrue: [{ type: Input }],
    labelFalse: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pdGVtLWJvb2xlYW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kYXRhLWl0ZW0tYm9vbGVhbi9kYXRhLWl0ZW0tYm9vbGVhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFnQjFFLE1BQU0sT0FBTyx3QkFBd0I7OztZQWRwQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7YUFDRjs7O29CQUVFLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtZGF0YS1pdGVtLWJvb2xlYW4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c29mLWRhdGEtaXRlbT5cbiAgICAgIDxuZy1jb250YWluZXIgZGF0YS1pdGVtLWxhYmVsPlxuICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyIGRhdGEtaXRlbS12YWx1ZT5cbiAgICAgICAge3sgdmFsdWUgPyBsYWJlbFRydWUgOiBsYWJlbEZhbHNlIH19XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3NvZi1kYXRhLWl0ZW0+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUl0ZW1Cb29sZWFuQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxhYmVsVHJ1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbEZhbHNlOiBzdHJpbmc7XG59XG4iXX0=