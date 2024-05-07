import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class ProgressBarComponent {
    constructor() {
        this.color = 'primary';
    }
    set percentage(value) {
        this.progressBarWidth = value + '%';
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-progress-bar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        [ngClass]="color"
        [style.width]="progressBarWidth"
      ></div>
    </div>
  `,
                styles: [".progress{border-radius:0;height:10px}.progress .progress-bar{transition:none}"]
            },] }
];
ProgressBarComponent.propDecorators = {
    color: [{ type: Input }],
    percentage: [{ type: Input }]
};

class ProgressBarComponentModule {
}
ProgressBarComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ProgressBarComponent],
                exports: [ProgressBarComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ProgressBarComponent, ProgressBarComponentModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-progress-bar.js.map
