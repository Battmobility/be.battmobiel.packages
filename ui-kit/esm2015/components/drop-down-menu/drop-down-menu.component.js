import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class DropDownMenuComponent {
    constructor() {
        this.isWithinNavBar = false;
        this.dropDownConfig = {};
        /**
         * Both routerLink and click are supported for menu items. They should not be combined though.
         */
        this.menuItems = [];
    }
}
DropDownMenuComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: `sof-drop-down-menu`,
                template: `
    <sof-drop-down [config]="dropDownConfig" [isWithinNavBar]="isWithinNavBar">
      <a
        *ngFor="let menuItem of menuItems"
        ngbDropdownItem
        class="dropdown-item drop-down-menu-item"
        [routerLink]="menuItem.routerLink || []"
        (click)="menuItem.click && menuItem.click($event)"
      >
        <sof-svg-icon
          *ngIf="menuItem.itemIcon"
          class="mr-3"
          [ngClass]="menuItem.itemIcon.classes"
          [icon]="menuItem.itemIcon.icon"
          [size]="menuItem.itemIcon.size"
        ></sof-svg-icon>
        <span>
          {{
            menuItem?.label
              ? (tc + '.' + menuItem.label | translate: menuItem.params)
              : menuItem.translation
          }}
        </span>
      </a>
    </sof-drop-down>
  `,
                styles: [":host{display:inline-block}.drop-down-menu-item{display:flex;align-items:center}"]
            },] }
];
DropDownMenuComponent.propDecorators = {
    tc: [{ type: Input }],
    isWithinNavBar: [{ type: Input }],
    dropDownConfig: [{ type: Input }],
    menuItems: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kcm9wLWRvd24tbWVudS9kcm9wLWRvd24tbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFtQzFFLE1BQU0sT0FBTyxxQkFBcUI7SUEvQmxDO1FBaUNXLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztRQUM3Qzs7V0FFRztRQUNNLGNBQVMsR0FBdUIsRUFBRSxDQUFDO0lBQzlDLENBQUM7OztZQXZDQSxTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxvQkFBb0I7Z0JBRTlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCVDs7YUFDRjs7O2lCQUVFLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLO3dCQUlMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJvcERvd25Db25maWcgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kcm9wLWRvd24nO1xuaW1wb3J0IHsgRHJvcERvd25NZW51SXRlbSB9IGZyb20gJy4vdHlwZXMvZHJvcC1kb3duLW1lbnUtaXRlbS50eXBlJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogYHNvZi1kcm9wLWRvd24tbWVudWAsXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi1tZW51LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNvZi1kcm9wLWRvd24gW2NvbmZpZ109XCJkcm9wRG93bkNvbmZpZ1wiIFtpc1dpdGhpbk5hdkJhcl09XCJpc1dpdGhpbk5hdkJhclwiPlxuICAgICAgPGFcbiAgICAgICAgKm5nRm9yPVwibGV0IG1lbnVJdGVtIG9mIG1lbnVJdGVtc1wiXG4gICAgICAgIG5nYkRyb3Bkb3duSXRlbVxuICAgICAgICBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gZHJvcC1kb3duLW1lbnUtaXRlbVwiXG4gICAgICAgIFtyb3V0ZXJMaW5rXT1cIm1lbnVJdGVtLnJvdXRlckxpbmsgfHwgW11cIlxuICAgICAgICAoY2xpY2spPVwibWVudUl0ZW0uY2xpY2sgJiYgbWVudUl0ZW0uY2xpY2soJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICAgIDxzb2Ytc3ZnLWljb25cbiAgICAgICAgICAqbmdJZj1cIm1lbnVJdGVtLml0ZW1JY29uXCJcbiAgICAgICAgICBjbGFzcz1cIm1yLTNcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIm1lbnVJdGVtLml0ZW1JY29uLmNsYXNzZXNcIlxuICAgICAgICAgIFtpY29uXT1cIm1lbnVJdGVtLml0ZW1JY29uLmljb25cIlxuICAgICAgICAgIFtzaXplXT1cIm1lbnVJdGVtLml0ZW1JY29uLnNpemVcIlxuICAgICAgICA+PC9zb2Ytc3ZnLWljb24+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHt7XG4gICAgICAgICAgICBtZW51SXRlbT8ubGFiZWxcbiAgICAgICAgICAgICAgPyAodGMgKyAnLicgKyBtZW51SXRlbS5sYWJlbCB8IHRyYW5zbGF0ZTogbWVudUl0ZW0ucGFyYW1zKVxuICAgICAgICAgICAgICA6IG1lbnVJdGVtLnRyYW5zbGF0aW9uXG4gICAgICAgICAgfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvc29mLWRyb3AtZG93bj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bk1lbnVDb21wb25lbnQge1xuICBASW5wdXQoKSB0Yzogc3RyaW5nO1xuICBASW5wdXQoKSBpc1dpdGhpbk5hdkJhciA9IGZhbHNlO1xuICBASW5wdXQoKSBkcm9wRG93bkNvbmZpZzogRHJvcERvd25Db25maWcgPSB7fTtcbiAgLyoqXG4gICAqIEJvdGggcm91dGVyTGluayBhbmQgY2xpY2sgYXJlIHN1cHBvcnRlZCBmb3IgbWVudSBpdGVtcy4gVGhleSBzaG91bGQgbm90IGJlIGNvbWJpbmVkIHRob3VnaC5cbiAgICovXG4gIEBJbnB1dCgpIG1lbnVJdGVtczogRHJvcERvd25NZW51SXRlbVtdID0gW107XG59XG4iXX0=