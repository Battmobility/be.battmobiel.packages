import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponentModule } from '@sofico-framework/ui-kit/components/currency';
import { DataItemComponentModule } from '@sofico-framework/ui-kit/components/data-item';

class DataItemCurrencyComponent {
    constructor() {
        this.minFraction = 2;
        this.maxFraction = 17;
    }
}
DataItemCurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-data-item-currency',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-data-item>
      <ng-container data-item-label>
        {{ label }}
      </ng-container>
      <ng-container data-item-value>
        <sof-currency
          [value]="value"
          [currencyCode]="currencyCode"
          [minFraction]="minFraction"
          [maxFraction]="maxFraction"
        ></sof-currency>
      </ng-container>
    </sof-data-item>
  `
            },] }
];
DataItemCurrencyComponent.propDecorators = {
    label: [{ type: Input }],
    value: [{ type: Input }],
    currencyCode: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }]
};

class DataItemCurrencyModule {
}
DataItemCurrencyModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DataItemCurrencyComponent],
                imports: [CommonModule, DataItemComponentModule, CurrencyComponentModule],
                exports: [DataItemCurrencyComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DataItemCurrencyComponent, DataItemCurrencyModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-data-item-currency.js.map
