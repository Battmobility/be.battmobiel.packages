import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class CollapsableSectionComponent {
    constructor() {
        this.active = false;
        this.stateChange = new EventEmitter();
        this.internalCollapsed = true;
    }
    set collapsed(value) {
        this.internalCollapsed = value;
    }
    toggle() {
        this.internalCollapsed = !this.internalCollapsed;
        this.stateChange.emit(this.internalCollapsed);
    }
}
CollapsableSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-collapsable-section',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <button
      type="button"
      class="btn btn-plain d-flex justify-content-between align-items-center w-100 title"
      (click)="toggle()"
    >
      <div class="d-flex align-items-center">
        <div>{{ tc + '.' + label | translate }}</div>
        <div *ngIf="active" class="text-primary font-weight-bolder pl-2">
          &bull;
        </div>
      </div>

      <sof-svg-icon
        class="sof-icon-12 icon-toggle"
        [icon]="'icon-chevron-' + (internalCollapsed ? 'down' : 'up')"
      ></sof-svg-icon>
    </button>
    <div *ngIf="!internalCollapsed" class="mt-2">
      <ng-content></ng-content>
    </div>
  `,
                styles: [":host{display:flex;flex-direction:column}.title{cursor:pointer;font-weight:500}"]
            },] }
];
CollapsableSectionComponent.propDecorators = {
    tc: [{ type: Input }],
    label: [{ type: Input }],
    active: [{ type: Input }],
    collapsed: [{ type: Input }],
    stateChange: [{ type: Output }],
    internalCollapsed: [{ type: HostBinding, args: ['class.collapsed',] }]
};

class CollapsableSectionModule {
}
CollapsableSectionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CollapsableSectionComponent],
                exports: [CollapsableSectionComponent],
                imports: [TranslateModule, CommonModule, SvgIconModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { CollapsableSectionComponent, CollapsableSectionModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-collapsable-section.js.map
