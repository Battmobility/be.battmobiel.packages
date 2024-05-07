import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
export class DropDownComponent {
    constructor() {
        this.config = {};
        this.isWithinNavBar = false;
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (((_a = changes.isDisabled) === null || _a === void 0 ? void 0 : _a.currentValue) && ((_b = this.dropDownVC) === null || _b === void 0 ? void 0 : _b.isOpen())) {
            this.dropDownVC.close();
        }
    }
}
DropDownComponent.decorators = [
    { type: Component, args: [{
                selector: `sof-drop-down`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="config !== null">
      <div
        ngbDropdown
        #dropDown="ngbDropdown"
        [placement]="
          config.dropDownPlacement ? config.dropDownPlacement : 'bottom-left'
        "
        class="d-inline-block"
      >
        <ng-container *ngIf="isWithinNavBar; else alternative">
          <a
            [class.d-none]="isDisabled"
            ngbDropdownToggle
            [routerLink]="null"
            class="nav-link"
            [attr.id]="config.toggleButtonId"
            [ngClass]="config.toggleButtonClasses"
          >
            <ng-container *ngTemplateOutlet="buttonRef"></ng-container>
          </a>
          <a
            [class.d-none]="!isDisabled"
            class="nav-link"
            [ngClass]="config.toggleButtonClasses"
          >
            <ng-container *ngTemplateOutlet="buttonRef"></ng-container>
          </a>
        </ng-container>
        <ng-template #alternative>
          <button
            ngbDropdownToggle
            class="drop-down-button"
            type="button"
            [disabled]="isDisabled"
            [attr.id]="config.toggleButtonId"
            [ngClass]="config.toggleButtonClasses"
          >
            <ng-container *ngTemplateOutlet="buttonRef"></ng-container>
          </button>
        </ng-template>

        <div ngbDropdownMenu [attr.aria-labelledby]="config.toggleButtonId">
          <ng-content></ng-content>
        </div>
      </div>
    </ng-container>

    <ng-template #buttonRef>
      <ng-container *ngIf="badge">
        <span class="badge badge-primary">{{ badge }}</span>
      </ng-container>
      <sof-svg-icon
        *ngIf="config.toggleButtonIcon"
        [class.mr-3]="config.toggleButtonText"
        [ngClass]="config.toggleButtonIconClasses"
        [icon]="config.toggleButtonIcon"
        [size]="config.toggleButtonIconSize"
      ></sof-svg-icon>
      <span>{{ config.toggleButtonText }}</span>
    </ng-template>
  `,
                styles: [":host{display:inline-block}.nav-link{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:2px}.drop-down-button,.nav-link{display:flex;align-items:center}.drop-down-button:after,.nav-link:after{margin-left:.5rem}"]
            },] }
];
DropDownComponent.propDecorators = {
    config: [{ type: Input }],
    isDisabled: [{ type: Input }],
    badge: [{ type: Input }],
    isWithinNavBar: [{ type: Input }],
    dropDownVC: [{ type: ViewChild, args: ['dropDown',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZHJvcC1kb3duL2Ryb3AtZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUdMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQXVFdkIsTUFBTSxPQUFPLGlCQUFpQjtJQW5FOUI7UUFvRVcsV0FBTSxHQUFtQixFQUFFLENBQUM7UUFHNUIsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFRbEMsQ0FBQztJQUxDLFdBQVcsQ0FBQyxPQUFzQjs7UUFDaEMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxVQUFVLDBDQUFFLFlBQVksWUFBSSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxNQUFNLEdBQUUsRUFBRTtZQUNqRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7O1lBOUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBRS9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZEVDs7YUFDRjs7O3FCQUVFLEtBQUs7eUJBQ0wsS0FBSztvQkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsU0FBUyxTQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JEcm9wZG93biB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwL2Ryb3Bkb3duL2Ryb3Bkb3duJztcbmltcG9ydCB7IERyb3BEb3duQ29uZmlnIH0gZnJvbSAnLi90eXBlcy9kcm9wLWRvd24tY29uZmlnLnR5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBzb2YtZHJvcC1kb3duYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgIT09IG51bGxcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgbmdiRHJvcGRvd25cbiAgICAgICAgI2Ryb3BEb3duPVwibmdiRHJvcGRvd25cIlxuICAgICAgICBbcGxhY2VtZW50XT1cIlxuICAgICAgICAgIGNvbmZpZy5kcm9wRG93blBsYWNlbWVudCA/IGNvbmZpZy5kcm9wRG93blBsYWNlbWVudCA6ICdib3R0b20tbGVmdCdcbiAgICAgICAgXCJcbiAgICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9ja1wiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1dpdGhpbk5hdkJhcjsgZWxzZSBhbHRlcm5hdGl2ZVwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBbY2xhc3MuZC1ub25lXT1cImlzRGlzYWJsZWRcIlxuICAgICAgICAgICAgbmdiRHJvcGRvd25Ub2dnbGVcbiAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIm51bGxcIlxuICAgICAgICAgICAgY2xhc3M9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICBbYXR0ci5pZF09XCJjb25maWcudG9nZ2xlQnV0dG9uSWRcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiY29uZmlnLnRvZ2dsZUJ1dHRvbkNsYXNzZXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJidXR0b25SZWZcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIFtjbGFzcy5kLW5vbmVdPVwiIWlzRGlzYWJsZWRcIlxuICAgICAgICAgICAgY2xhc3M9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJjb25maWcudG9nZ2xlQnV0dG9uQ2xhc3Nlc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ1dHRvblJlZlwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjYWx0ZXJuYXRpdmU+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbmdiRHJvcGRvd25Ub2dnbGVcbiAgICAgICAgICAgIGNsYXNzPVwiZHJvcC1kb3duLWJ1dHRvblwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgICAgICAgIFthdHRyLmlkXT1cImNvbmZpZy50b2dnbGVCdXR0b25JZFwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJjb25maWcudG9nZ2xlQnV0dG9uQ2xhc3Nlc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ1dHRvblJlZlwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDxkaXYgbmdiRHJvcGRvd25NZW51IFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJjb25maWcudG9nZ2xlQnV0dG9uSWRcIj5cbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctdGVtcGxhdGUgI2J1dHRvblJlZj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJiYWRnZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57eyBiYWRnZSB9fTwvc3Bhbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPHNvZi1zdmctaWNvblxuICAgICAgICAqbmdJZj1cImNvbmZpZy50b2dnbGVCdXR0b25JY29uXCJcbiAgICAgICAgW2NsYXNzLm1yLTNdPVwiY29uZmlnLnRvZ2dsZUJ1dHRvblRleHRcIlxuICAgICAgICBbbmdDbGFzc109XCJjb25maWcudG9nZ2xlQnV0dG9uSWNvbkNsYXNzZXNcIlxuICAgICAgICBbaWNvbl09XCJjb25maWcudG9nZ2xlQnV0dG9uSWNvblwiXG4gICAgICAgIFtzaXplXT1cImNvbmZpZy50b2dnbGVCdXR0b25JY29uU2l6ZVwiXG4gICAgICA+PC9zb2Ytc3ZnLWljb24+XG4gICAgICA8c3Bhbj57eyBjb25maWcudG9nZ2xlQnV0dG9uVGV4dCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY29uZmlnOiBEcm9wRG93bkNvbmZpZyA9IHt9O1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBiYWRnZTogc3RyaW5nO1xuICBASW5wdXQoKSBpc1dpdGhpbk5hdkJhciA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdkcm9wRG93bicpIGRyb3BEb3duVkM6IE5nYkRyb3Bkb3duO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5pc0Rpc2FibGVkPy5jdXJyZW50VmFsdWUgJiYgdGhpcy5kcm9wRG93blZDPy5pc09wZW4oKSkge1xuICAgICAgdGhpcy5kcm9wRG93blZDLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=