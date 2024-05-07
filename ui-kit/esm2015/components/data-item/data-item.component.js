import { ChangeDetectionStrategy, Component } from '@angular/core';
export class DataItemComponent {
}
DataItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-data-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="label">
      <ng-content select="[data-item-label]"></ng-content>
    </div>
    <div class="value">
      <ng-content select="[data-item-value]"></ng-content>
    </div>
  `,
                styles: [":host{display:block}.label{color:#adb5bd;font-size:.75rem}.value{font-size:.875rem;color:#000;overflow-wrap:break-word}"]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZGF0YS1pdGVtL2RhdGEtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWVuRSxNQUFNLE9BQU8saUJBQWlCOzs7WUFiN0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUV6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7O2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1kYXRhLWl0ZW0nLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbZGF0YS1pdGVtLWxhYmVsXVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltkYXRhLWl0ZW0tdmFsdWVdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERhdGFJdGVtQ29tcG9uZW50IHt9XG4iXX0=