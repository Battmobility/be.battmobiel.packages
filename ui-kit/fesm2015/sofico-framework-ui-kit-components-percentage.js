import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsPipesModule } from '@sofico-framework/utils';

class PercentageComponent {
    constructor() {
        this.minFraction = 2;
        this.maxFraction = 17;
    }
    get format() {
        return `1.${this.minFraction}-${this.maxFraction}`;
    }
}
PercentageComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-percentage',
                template: `
    <ng-container *ngIf="value | sofIsNumber; else noValue">
      <span *ngIf="valueSigned && value > 0">+</span
      >{{ value | percent: format }}
    </ng-container>
    <ng-template #noValue>-</ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
PercentageComponent.propDecorators = {
    value: [{ type: Input }],
    valueSigned: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }]
};

class PercentageComponentModule {
}
PercentageComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, UtilsPipesModule],
                declarations: [PercentageComponent],
                exports: [PercentageComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { PercentageComponent, PercentageComponentModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-percentage.js.map
