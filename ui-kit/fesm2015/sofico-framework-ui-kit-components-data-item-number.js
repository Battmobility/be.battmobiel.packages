import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataItemComponentModule } from '@sofico-framework/ui-kit/components/data-item';
import { NumberComponentModule } from '@sofico-framework/ui-kit/components/number';

class DataItemNumberComponent {
    constructor() {
        this.minFraction = 0;
        this.maxFraction = 17;
    }
}
DataItemNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-data-item-number',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-data-item>
      <ng-container data-item-label>
        {{ label }}
      </ng-container>
      <ng-container data-item-value>
        <sof-number
          [value]="value"
          [minFraction]="minFraction"
          [maxFraction]="maxFraction"
        >
        </sof-number>
      </ng-container>
    </sof-data-item>
  `
            },] }
];
DataItemNumberComponent.propDecorators = {
    label: [{ type: Input }],
    value: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }]
};

class DataItemNumberModule {
}
DataItemNumberModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DataItemNumberComponent],
                imports: [CommonModule, DataItemComponentModule, NumberComponentModule],
                exports: [DataItemNumberComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DataItemNumberComponent, DataItemNumberModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item-number.js.map
