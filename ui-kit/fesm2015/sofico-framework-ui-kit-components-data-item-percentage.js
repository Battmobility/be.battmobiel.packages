import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataItemComponentModule } from '@sofico-framework/ui-kit/components/data-item';
import { PercentageComponentModule } from '@sofico-framework/ui-kit/components/percentage';

class DataItemPercentageComponent {
    constructor() {
        this.minFraction = 2;
        this.maxFraction = 17;
    }
}
DataItemPercentageComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-data-item-percentage',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-data-item>
      <ng-container data-item-label>
        {{ label }}
      </ng-container>
      <ng-container data-item-value>
        <sof-percentage
          [value]="value"
          [valueSigned]="valueSigned"
          [minFraction]="minFraction"
          [maxFraction]="maxFraction"
        ></sof-percentage>
      </ng-container>
    </sof-data-item>
  `
            },] }
];
DataItemPercentageComponent.propDecorators = {
    label: [{ type: Input }],
    value: [{ type: Input }],
    valueSigned: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }]
};

class DataItemPercentageModule {
}
DataItemPercentageModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DataItemPercentageComponent],
                imports: [CommonModule, DataItemComponentModule, PercentageComponentModule],
                exports: [DataItemPercentageComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DataItemPercentageComponent, DataItemPercentageModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item-percentage.js.map
