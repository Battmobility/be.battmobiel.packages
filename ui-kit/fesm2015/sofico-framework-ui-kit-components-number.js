import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { isNumber } from '@sofico-framework/utils';
import { CommonModule } from '@angular/common';

class NumberComponent {
    constructor() {
        this.minFraction = 0;
        this.maxFraction = 17;
    }
    get isNumber() {
        return isNumber(this.value);
    }
    get format() {
        return `1.${this.minFraction}-${this.maxFraction}`;
    }
}
NumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-number',
                template: `
    <ng-container *ngIf="isNumber; else noValue">
      {{ value | number: format }}
    </ng-container>
    <ng-template #noValue>-</ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NumberComponent.propDecorators = {
    value: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }]
};

class NumberComponentModule {
}
NumberComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NumberComponent],
                exports: [NumberComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { NumberComponent, NumberComponentModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-number.js.map
