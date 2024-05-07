import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class DataItemComponent {
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

class DataItemComponentModule {
}
DataItemComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [DataItemComponent],
                exports: [DataItemComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DataItemComponent, DataItemComponentModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item.js.map
