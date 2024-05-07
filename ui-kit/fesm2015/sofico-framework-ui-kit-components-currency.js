import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { isNumber } from '@sofico-framework/utils';
import { CommonModule } from '@angular/common';

class CurrencyComponent {
    constructor() {
        /**
         * The minimal fraction
         */
        this.minFraction = 2;
        /**
         * The maximal fraction
         */
        this.maxFraction = 17;
    }
    get isNumber() {
        return isNumber(this.value);
    }
    get format() {
        return `1.${this.minFraction}-${this.maxFraction}`;
    }
}
CurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-currency',
                template: `
    <ng-container *ngIf="isNumber; else noValue">
      {{ value | currency: currencyCode:'symbol-narrow':format }}
    </ng-container>
    <ng-template #noValue>-</ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
CurrencyComponent.propDecorators = {
    value: [{ type: Input }],
    currencyCode: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }]
};

class CurrencyComponentModule {
}
CurrencyComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [CurrencyComponent],
                exports: [CurrencyComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { CurrencyComponent, CurrencyComponentModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-currency.js.map
