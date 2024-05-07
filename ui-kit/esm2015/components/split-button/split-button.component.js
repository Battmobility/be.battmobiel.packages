import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class SplitButtonComponent {
}
SplitButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-split-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div ngbDropdown placement="bottom-right">
      <div class="btn-group">
        <ng-content select="[split-button-primary]"></ng-content>
        <button
          sofButton
          ngbDropdownToggle
          [ngClass]="classDropdownBtn"
          icon="icon-chevron-down"
          iconSize="12"
          type="button"
        ></button>
      </div>
      <div ngbDropdownMenu class="dropdown-menu">
        <ng-content select="[split-button-content]"></ng-content>
      </div>
    </div>
  `,
                styles: [":host{display:inline-block}button:after{display:none}"]
            },] }
];
SplitButtonComponent.propDecorators = {
    classDropdownBtn: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvc3BsaXQtYnV0dG9uL3NwbGl0LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUF5QjFFLE1BQU0sT0FBTyxvQkFBb0I7OztZQXZCaEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUOzthQUVGOzs7K0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1zcGxpdC1idXR0b24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IG5nYkRyb3Bkb3duIHBsYWNlbWVudD1cImJvdHRvbS1yaWdodFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc3BsaXQtYnV0dG9uLXByaW1hcnldXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgc29mQnV0dG9uXG4gICAgICAgICAgbmdiRHJvcGRvd25Ub2dnbGVcbiAgICAgICAgICBbbmdDbGFzc109XCJjbGFzc0Ryb3Bkb3duQnRuXCJcbiAgICAgICAgICBpY29uPVwiaWNvbi1jaGV2cm9uLWRvd25cIlxuICAgICAgICAgIGljb25TaXplPVwiMTJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICA+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgbmdiRHJvcGRvd25NZW51IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc3BsaXQtYnV0dG9uLWNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3NwbGl0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNwbGl0QnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2xhc3NEcm9wZG93bkJ0bjogc3RyaW5nO1xufVxuIl19