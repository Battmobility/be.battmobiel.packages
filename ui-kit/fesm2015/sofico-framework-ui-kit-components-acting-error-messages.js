import { __decorate } from 'tslib';
import { Component, Input, NgModule } from '@angular/core';
import { ActingErrorMessages } from '@sofico-framework/utils';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AlertModule } from '@sofico-framework/ui-kit/components/alert';

class ActingErrorMessagesComponent {
}
ActingErrorMessagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-acting-error-messages',
                template: `
    <sof-alert type="danger" *ngFor="let err of actingErrorMessages$ | async">
      {{
        err?.translation
          ? err?.translation
          : (tc + '.' + err?.message | translate: err.messageParams)
      }}
    </sof-alert>
  `,
                styles: ["sof-alert{margin-bottom:1rem}sof-alert:last-of-type{margin-bottom:0}"]
            },] }
];
ActingErrorMessagesComponent.propDecorators = {
    tc: [{ type: Input }]
};
__decorate([
    ActingErrorMessages()
], ActingErrorMessagesComponent.prototype, "actingErrorMessages$", void 0);

class ActingErrorMessagesModule {
}
ActingErrorMessagesModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TranslateModule, AlertModule],
                declarations: [ActingErrorMessagesComponent],
                exports: [ActingErrorMessagesComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ActingErrorMessagesComponent, ActingErrorMessagesModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-acting-error-messages.js.map
