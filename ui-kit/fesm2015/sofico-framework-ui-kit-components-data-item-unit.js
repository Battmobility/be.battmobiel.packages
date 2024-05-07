import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataItemComponentModule } from '@sofico-framework/ui-kit/components/data-item';
import { UnitComponentModule } from '@sofico-framework/ui-kit/components/unit';

class DataItemUnitComponent {
    constructor() {
        this.minFraction = 0;
        this.maxFraction = 2;
    }
}
DataItemUnitComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-data-item-unit',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-data-item>
      <ng-container data-item-label>
        {{ label }}
      </ng-container>
      <ng-container data-item-value>
        <sof-unit
          [value]="value"
          [minFraction]="minFraction"
          [maxFraction]="maxFraction"
          [valueSigned]="valueSigned"
          [unit]="unit"
        ></sof-unit>
      </ng-container>
    </sof-data-item>
  `
            },] }
];
DataItemUnitComponent.propDecorators = {
    label: [{ type: Input }],
    value: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }],
    valueSigned: [{ type: Input }],
    unit: [{ type: Input }]
};

class DataItemUnitModule {
}
DataItemUnitModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DataItemUnitComponent],
                imports: [CommonModule, DataItemComponentModule, UnitComponentModule],
                exports: [DataItemUnitComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DataItemUnitComponent, DataItemUnitModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item-unit.js.map
