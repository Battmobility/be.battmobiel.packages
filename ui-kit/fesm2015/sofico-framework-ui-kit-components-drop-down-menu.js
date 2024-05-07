import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DropDownModule } from '@sofico-framework/ui-kit/components/drop-down';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class DropDownMenuComponent {
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

class DropDownMenuModule {
}
DropDownMenuModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DropDownMenuComponent],
                exports: [DropDownMenuComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    DropDownModule,
                    SvgIconModule,
                    TranslateModule
                ]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DropDownMenuComponent, DropDownMenuModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-drop-down-menu.js.map
