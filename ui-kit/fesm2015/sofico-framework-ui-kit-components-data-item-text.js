import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataItemComponentModule } from '@sofico-framework/ui-kit/components/data-item';
import { UtilsPipesModule } from '@sofico-framework/utils';

class DataItemTextComponent {
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

class DataItemTextModule {
}
DataItemTextModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DataItemTextComponent],
                imports: [CommonModule, DataItemComponentModule, UtilsPipesModule],
                exports: [DataItemTextComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DataItemTextComponent, DataItemTextModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item-text.js.map
