import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { isNumber } from '@sofico-framework/utils';
import { CommonModule } from '@angular/common';

class UnitComponent {
    constructor() {
        this.minFraction = 0;
        this.maxFraction = 2;
    }
    get isNumber() {
        return isNumber(this.value);
    }
    get format() {
        return `1.${this.minFraction}-${this.maxFraction}`;
    }
}
UnitComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-unit',
                template: `
    <ng-container *ngIf="isNumber; else noValue">
      <span *ngIf="valueSigned && value > 0">+</span
      >{{ value | number: format }} {{ unit }}
    </ng-container>
    <ng-template #noValue>-</ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
UnitComponent.propDecorators = {
    value: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }],
    valueSigned: [{ type: Input }],
    unit: [{ type: Input }]
};

class UnitComponentModule {
}
UnitComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [UnitComponent],
                exports: [UnitComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { UnitComponent, UnitComponentModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-unit.js.map
