import { Injectable, Component, ViewEncapsulation, ViewChild, TemplateRef, NgModule } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzNotificationService, NzNotificationModule } from 'ng-zorro-antd/notification';
import { TranslateModule } from '@ngx-translate/core';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class ToastService {
    constructor(nzConfigService, notificationService) {
        this.nzConfigService = nzConfigService;
        this.notificationService = notificationService;
        this.nzConfigService.set('notification', {
            nzDuration: 5000,
            nzPlacement: 'bottomRight'
        });
    }
    connect(template) {
        this.template = template;
    }
    success(message, translate = false) {
        this.createToast(message, translate, 'icon-checkmark-circle', 'success');
    }
    error(message, translate = false) {
        this.createToast(message, translate, 'icon-cross-circle', 'error');
    }
    warning(message, translate = false) {
        this.createToast(message, translate, 'icon-warning', 'warning');
    }
    createToast(message, translate, icon, type) {
        this.notificationService.template(this.template, {
            nzData: { message, translate, icon },
            nzClass: `sof-toast-${type}`
        });
    }
}
ToastService.decorators = [
    { type: Injectable }
];
ToastService.ctorParameters = () => [
    { type: NzConfigService },
    { type: NzNotificationService }
];

class ToastHookComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    ngAfterViewInit() {
        this.toastService.connect(this.template);
    }
}
ToastHookComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-toast-hook',
                encapsulation: ViewEncapsulation.None,
                template: `
    <ng-template let-toast="data">
      <div class="content">
        <sof-svg-icon [icon]="toast.icon" size="20"></sof-svg-icon>
        <div class="message">
          {{ toast.translate ? (toast.message | translate) : toast.message }}
        </div>
      </div>
    </ng-template>
  `,
                styles: [".sof-toast-error,.sof-toast-success,.sof-toast-warning{display:flex;align-items:center}.sof-toast-error .content,.sof-toast-success .content,.sof-toast-warning .content{display:flex;align-items:center;padding:4px;width:100%}.sof-toast-error .content sof-svg-icon,.sof-toast-success .content sof-svg-icon,.sof-toast-warning .content sof-svg-icon{flex-shrink:0}.sof-toast-error .content .message,.sof-toast-success .content .message,.sof-toast-warning .content .message{width:100%;margin:0 24px}.sof-toast-error .ant-notification-notice-close,.sof-toast-success .ant-notification-notice-close,.sof-toast-warning .ant-notification-notice-close{position:relative;top:unset;right:unset;color:inherit;flex-shrink:0;margin:0 -4px;padding:4px}.sof-toast-error .ant-notification-notice-close .ant-notification-notice-close-x,.sof-toast-success .ant-notification-notice-close .ant-notification-notice-close-x,.sof-toast-warning .ant-notification-notice-close .ant-notification-notice-close-x{display:flex}.sof-toast-error .ant-notification-notice-close .ant-notification-notice-close-x .anticon,.sof-toast-success .ant-notification-notice-close .ant-notification-notice-close-x .anticon,.sof-toast-warning .ant-notification-notice-close .ant-notification-notice-close-x .anticon{vertical-align:unset}"]
            },] }
];
ToastHookComponent.ctorParameters = () => [
    { type: ToastService }
];
ToastHookComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef,] }]
};

class ToastHookModule {
}
ToastHookModule.decorators = [
    { type: NgModule, args: [{
                imports: [NzNotificationModule, TranslateModule.forChild(), SvgIconModule],
                declarations: [ToastHookComponent],
                exports: [ToastHookComponent],
                providers: [ToastService]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ToastHookComponent, ToastHookModule, ToastService };
//# sourceMappingURL=sofico-framework-ui-kit-components-toast-hook.js.map
