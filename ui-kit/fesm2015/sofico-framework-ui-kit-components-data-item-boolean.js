import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataItemComponentModule } from '@sofico-framework/ui-kit/components/data-item';
import { UtilsPipesModule } from '@sofico-framework/utils';

class DataItemBooleanComponent {
}
DataItemBooleanComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-data-item-boolean',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-data-item>
      <ng-container data-item-label>
        {{ label }}
      </ng-container>
      <ng-container data-item-value>
        {{ value ? labelTrue : labelFalse }}
      </ng-container>
    </sof-data-item>
  `
            },] }
];
DataItemBooleanComponent.propDecorators = {
    label: [{ type: Input }],
    value: [{ type: Input }],
    labelTrue: [{ type: Input }],
    labelFalse: [{ type: Input }]
};

class DataItemBooleanModule {
}
DataItemBooleanModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DataItemBooleanComponent],
                imports: [CommonModule, DataItemComponentModule, UtilsPipesModule],
                exports: [DataItemBooleanComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DataItemBooleanComponent, DataItemBooleanModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item-boolean.js.map
