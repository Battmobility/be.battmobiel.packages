import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@sofico-framework/ui-kit/components/button';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class ChipComponent {
    constructor() {
        this.isSelected = true;
        this.removed = new EventEmitter();
        this.selected = new EventEmitter();
    }
    onRemove(event) {
        this.removed.emit();
        event.stopPropagation();
    }
    onSelected(event) {
        if (!this.isDisabled && this.selectable) {
            this.selected.emit();
        }
        event.stopPropagation();
    }
}
ChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-chip',
                template: `
    <div
      class="chip"
      [class.small-chip]="smallChip"
      [class.disabled]="isDisabled"
      [class.unselected]="!isSelected"
      [class.selectable]="selectable"
      (click)="onSelected($event)"
    >
      <sof-svg-icon
        *ngIf="!!icon"
        class="mr-2"
        [size]="'12'"
        [icon]="icon"
      ></sof-svg-icon>
      <ng-content></ng-content>
      <button
        sofButton
        *ngIf="removable && !isDisabled"
        class="btn btn-plain ml-2 d-flex"
        icon="icon-cross"
        [iconSize]="'12'"
        [disabled]="isDisabled"
        (click)="onRemove($event)"
      ></button>
    </div>
  `,
                styles: [".chip{display:flex;align-items:center;white-space:nowrap;margin-bottom:.25rem;margin-right:.25rem;padding:.5rem;border-radius:20px;border-style:solid;border-width:1px}.selectable{cursor:pointer}.disabled{cursor:default}.small-chip{padding:.25rem .5rem}"]
            },] }
];
ChipComponent.propDecorators = {
    removable: [{ type: Input }],
    smallChip: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isSelected: [{ type: Input }],
    selectable: [{ type: Input }],
    icon: [{ type: Input }],
    removed: [{ type: Output }],
    selected: [{ type: Output }]
};

class ChipModule {
}
ChipModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ChipComponent],
                exports: [ChipComponent],
                imports: [CommonModule, SvgIconModule, ButtonModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ChipComponent, ChipModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-chip.js.map
