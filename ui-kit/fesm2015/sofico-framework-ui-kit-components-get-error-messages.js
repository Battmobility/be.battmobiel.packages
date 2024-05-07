import { __decorate } from 'tslib';
import { Component, Input, NgModule } from '@angular/core';
import { GetErrorMessage } from '@sofico-framework/utils';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AlertModule } from '@sofico-framework/ui-kit/components/alert';

class GetErrorMessagesComponent {
    ngOnInit() {
        this.errorMessage$ = this.error$.pipe(map(error => `${this.tc}.${error}`));
    }
}
GetErrorMessagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-get-error-messages',
                template: `
    <sof-alert
      type="danger"
      *ngIf="errorMessage$ | async as msg"
      [isDismissible]="false"
    >
      {{ msg | translate }}
    </sof-alert>
  `,
                styles: [""]
            },] }
];
GetErrorMessagesComponent.propDecorators = {
    tc: [{ type: Input }]
};
__decorate([
    GetErrorMessage()
], GetErrorMessagesComponent.prototype, "error$", void 0);

class GetErrorMessagesModule {
}
GetErrorMessagesModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TranslateModule, AlertModule],
                declarations: [GetErrorMessagesComponent],
                exports: [GetErrorMessagesComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { GetErrorMessagesComponent, GetErrorMessagesModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-get-error-messages.js.map
