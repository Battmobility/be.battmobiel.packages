import { Component, ChangeDetectionStrategy, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class DropDownComponent {
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

class DropDownModule {
}
DropDownModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DropDownComponent],
                exports: [DropDownComponent],
                imports: [CommonModule, NgbDropdownModule, SvgIconModule, RouterModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DropDownComponent, DropDownModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-drop-down.js.map
