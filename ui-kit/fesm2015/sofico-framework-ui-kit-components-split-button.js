import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from '@sofico-framework/ui-kit/components/button';

class SplitButtonComponent {
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

class SplitButtonModule {
}
SplitButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ButtonModule, NgbDropdownModule],
                declarations: [SplitButtonComponent],
                exports: [SplitButtonComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { SplitButtonComponent, SplitButtonModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-split-button.js.map
