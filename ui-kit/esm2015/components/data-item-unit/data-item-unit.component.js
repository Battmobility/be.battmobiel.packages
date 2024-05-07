import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class DataItemUnitComponent {
    constructor() {
        this.minFraction = 0;
        this.maxFraction = 2;
    }
}
DataItemUnitComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-data-item-unit',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-data-item>
      <ng-container data-item-label>
        {{ label }}
      </ng-container>
      <ng-container data-item-value>
        <sof-unit
          [value]="value"
          [minFraction]="minFraction"
          [maxFraction]="maxFraction"
          [valueSigned]="valueSigned"
          [unit]="unit"
        ></sof-unit>
      </ng-container>
    </sof-data-item>
  `
            },] }
];
DataItemUnitComponent.propDecorators = {
    label: [{ type: Input }],
    value: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }],
    valueSigned: [{ type: Input }],
    unit: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pdGVtLXVuaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kYXRhLWl0ZW0tdW5pdC9kYXRhLWl0ZW0tdW5pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzQjFFLE1BQU0sT0FBTyxxQkFBcUI7SUFwQmxDO1FBdUJXLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBRzNCLENBQUM7OztZQTNCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7YUFDRjs7O29CQUVFLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWRhdGEtaXRlbS11bml0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNvZi1kYXRhLWl0ZW0+XG4gICAgICA8bmctY29udGFpbmVyIGRhdGEtaXRlbS1sYWJlbD5cbiAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciBkYXRhLWl0ZW0tdmFsdWU+XG4gICAgICAgIDxzb2YtdW5pdFxuICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgW21pbkZyYWN0aW9uXT1cIm1pbkZyYWN0aW9uXCJcbiAgICAgICAgICBbbWF4RnJhY3Rpb25dPVwibWF4RnJhY3Rpb25cIlxuICAgICAgICAgIFt2YWx1ZVNpZ25lZF09XCJ2YWx1ZVNpZ25lZFwiXG4gICAgICAgICAgW3VuaXRdPVwidW5pdFwiXG4gICAgICAgID48L3NvZi11bml0PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9zb2YtZGF0YS1pdGVtPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERhdGFJdGVtVW5pdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1pbkZyYWN0aW9uID0gMDtcbiAgQElucHV0KCkgbWF4RnJhY3Rpb24gPSAyO1xuICBASW5wdXQoKSB2YWx1ZVNpZ25lZDogYm9vbGVhbjtcbiAgQElucHV0KCkgdW5pdDogc3RyaW5nO1xufVxuIl19