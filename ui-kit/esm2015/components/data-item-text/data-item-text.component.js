import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class DataItemTextComponent {
}
DataItemTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-data-item-text',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-data-item>
      <ng-container data-item-label>
        {{ label }}
      </ng-container>
      <ng-container data-item-value>
        {{ !(value | sofIsNullOrUndefined) ? value : '-' }}
      </ng-container>
    </sof-data-item>
  `
            },] }
];
DataItemTextComponent.propDecorators = {
    label: [{ type: Input }],
    value: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pdGVtLXRleHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kYXRhLWl0ZW0tdGV4dC9kYXRhLWl0ZW0tdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFnQjFFLE1BQU0sT0FBTyxxQkFBcUI7OztZQWRqQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7YUFDRjs7O29CQUVFLEtBQUs7b0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1kYXRhLWl0ZW0tdGV4dCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzb2YtZGF0YS1pdGVtPlxuICAgICAgPG5nLWNvbnRhaW5lciBkYXRhLWl0ZW0tbGFiZWw+XG4gICAgICAgIHt7IGxhYmVsIH19XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgZGF0YS1pdGVtLXZhbHVlPlxuICAgICAgICB7eyAhKHZhbHVlIHwgc29mSXNOdWxsT3JVbmRlZmluZWQpID8gdmFsdWUgOiAnLScgfX1cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvc29mLWRhdGEtaXRlbT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhSXRlbVRleHRDb21wb25lbnQge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xufVxuIl19