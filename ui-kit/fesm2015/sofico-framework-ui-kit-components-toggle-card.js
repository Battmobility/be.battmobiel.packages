import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class ToggleCardComponent {
    constructor() {
        this.selectedIcon = 'icon-trash';
        this.toggle = new EventEmitter();
    }
    open() {
        if (!(this.selected || this.isDisabled)) {
            this.toggle.emit();
        }
    }
    close(event) {
        event.stopPropagation();
        if (!this.isDisabled) {
            this.toggle.emit();
        }
    }
}
ToggleCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-toggle-card',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div
      [class.sof-card-selected]="!invalid && selected"
      [class.sof-card]="!invalid && !selected"
      [class.sof-card-invalid]="invalid"
      class="card"
    >
      <button
        *ngIf="!selected || isDisabled"
        type="button"
        (click)="open()"
        [disabled]="isDisabled"
        [class.show-pointer]="!isDisabled"
        class="body-button card-body px-3 py-2"
      >
        <ng-container *ngTemplateOutlet="cardContent"></ng-container>
      </button>
      <div *ngIf="selected && !isDisabled" class="card-body px-3 py-2">
        <ng-container *ngTemplateOutlet="cardContent"></ng-container>
      </div>
    </div>

    <!-- CARD-CONTENT -->
    <ng-template #cardContent>
      <div class="d-flex flex-row align-items-center">
        <sof-svg-icon
          *ngIf="icon"
          [icon]="icon"
          class="sof-icon-primary mr-3 my-auto"
          size="32"
        ></sof-svg-icon>
        <h5 class="flex-grow-1 m-auto title">{{ title }}</h5>
        <button
          class="close-button"
          [disabled]="isDisabled"
          (click)="close($event)"
          type="button"
        >
          <sof-svg-icon
            class="my-auto"
            [icon]="selected ? selectedIcon : 'icon-plus'"
            [class.show-pointer]="selected && !isDisabled"
            [class.disabled-icon]="isDisabled"
          ></sof-svg-icon>
        </button>
      </div>
      <ng-content></ng-content>
    </ng-template>
  `,
                styles: [".show-pointer{cursor:pointer}.disabled-icon{fill:#adb5bd}.body-button{text-align:left}.body-button,.close-button{border:none;background:none}.close-button{display:flex;flex-direction:row;align-items:center;text-align:center;height:auto}"]
            },] }
];
ToggleCardComponent.propDecorators = {
    icon: [{ type: Input }],
    title: [{ type: Input }],
    selected: [{ type: Input }],
    selectedIcon: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    toggle: [{ type: Output }]
};

class ToggleCardModule {
}
ToggleCardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ToggleCardComponent],
                exports: [ToggleCardComponent],
                imports: [CommonModule, SvgIconModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ToggleCardComponent, ToggleCardModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-toggle-card.js.map
