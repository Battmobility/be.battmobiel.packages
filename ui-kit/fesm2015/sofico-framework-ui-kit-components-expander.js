import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class ExpanderComponent {
    constructor() {
        /**
         * Manually set whether the expander is open or closed.
         * Useful when you want to reset the expansion state.
         */
        this.isExpanded = false;
        /**
         * Output that will emit if the toggle is expanded or not.
         */
        this.expanded = new EventEmitter();
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
        this.expanded.emit(this.isExpanded);
    }
}
ExpanderComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-expander',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div [class.expanded]="!isExpanded">
      <ng-content></ng-content>
    </div>
    <div class="expander">
      <button (click)="toggle()">
        <span class="label">{{ isExpanded ? lessLabel : moreLabel }}</span>
        <sof-svg-icon
          [icon]="isExpanded ? 'icon-chevron-up' : 'icon-chevron-down'"
          size="8"
          class="ml-1"
        ></sof-svg-icon>
      </button>
    </div>
  `,
                styles: [".expanded{display:none}.expander{display:flex;flex-direction:row;justify-content:center}.expander .label{margin-right:.25rem;font-size:.8rem}.expander button{display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:center;height:auto;border:none;cursor:pointer;background:none}@media print{.expanded{display:block}.expander{display:none}}"]
            },] }
];
ExpanderComponent.ctorParameters = () => [];
ExpanderComponent.propDecorators = {
    moreLabel: [{ type: Input }],
    lessLabel: [{ type: Input }],
    isExpanded: [{ type: Input }],
    expanded: [{ type: Output }]
};

class ExpanderComponentModule {
}
ExpanderComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SvgIconModule],
                declarations: [ExpanderComponent],
                exports: [ExpanderComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ExpanderComponent, ExpanderComponentModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-expander.js.map
