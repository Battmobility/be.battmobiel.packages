import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class AlertComponent {
    constructor() {
        /**
         * Type of alert that must be displayed. This has an impact on icons and colors.
         * Options: info, success, warning and danger.
         */
        this.type = 'info';
        /**
         * Whether or not the alert can be closed.
         */
        this.isDismissible = false;
        /**
         * Event that will inform when the alert is closed.
         */
        this.dismiss = new EventEmitter();
        this.alertIcons = {
            ['info']: 'icon-info-circle',
            ['success']: 'icon-checkmark-circle',
            ['warning']: 'icon-warning',
            ['danger']: 'icon-cross-circle'
        };
    }
    onClose() {
        this.display = 'none';
        this.dismiss.emit();
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-alert',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="alert alert-{{ type }}" role="alert">
      <sof-svg-icon
        class="alert-icon-type"
        [icon]="alertIcons[type]"
        size="20"
      ></sof-svg-icon>
      <div class="alert-content">
        <ng-content></ng-content>
      </div>
      <button class="btn btn-plain" (click)="onClose()">
        <sof-svg-icon
          *ngIf="isDismissible"
          class="alert-icon-dismiss"
          icon="icon-cross"
          size="12"
        ></sof-svg-icon>
      </button>
    </div>
  `,
                styles: [":host{display:block}.alert{display:flex;align-items:center;margin:0}.alert .alert-icon-type{flex-shrink:0;margin-right:1rem}.alert .alert-content{width:100%}.alert .alert-icon-dismiss{flex-shrink:0;margin-left:1rem;cursor:pointer}"]
            },] }
];
AlertComponent.propDecorators = {
    type: [{ type: Input }],
    isDismissible: [{ type: Input }],
    dismiss: [{ type: Output }],
    display: [{ type: HostBinding, args: ['style.display',] }]
};

class AlertModule {
}
AlertModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SvgIconModule],
                declarations: [AlertComponent],
                exports: [AlertComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { AlertComponent, AlertModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-alert.js.map
