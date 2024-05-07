import { Injectable, Component, ViewEncapsulation, ViewChild, TemplateRef, NgModule } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzNotificationService, NzNotificationModule } from 'ng-zorro-antd/notification';
import { TranslateModule } from '@ngx-translate/core';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from 'ng-zorro-antd/notification';
import * as ɵngcc3 from '@sofico-framework/ui-kit/components/svg-icon';
import * as ɵngcc4 from '@ngx-translate/core';

function ToastHookComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 0);
    ɵngcc0.ɵɵelement(1, "sof-svg-icon", 1);
    ɵngcc0.ɵɵelementStart(2, "div", 2);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵpipe(4, "translate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const toast_r1 = ctx.data;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("icon", toast_r1.icon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", toast_r1.translate ? ɵngcc0.ɵɵpipeBind1(4, 2, toast_r1.message) : toast_r1.message, " ");
} }
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
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(ɵngcc0.ɵɵinject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵinject(ɵngcc2.NzNotificationService)); };
ToastService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ToastService, factory: ToastService.ɵfac });
ToastService.ctorParameters = () => [
    { type: NzConfigService },
    { type: NzNotificationService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ToastService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc2.NzNotificationService }]; }, null); })();

class ToastHookComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    ngAfterViewInit() {
        this.toastService.connect(this.template);
    }
}
ToastHookComponent.ɵfac = function ToastHookComponent_Factory(t) { return new (t || ToastHookComponent)(ɵngcc0.ɵɵdirectiveInject(ToastService)); };
ToastHookComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToastHookComponent, selectors: [["sof-toast-hook"]], viewQuery: function ToastHookComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(TemplateRef, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, decls: 1, vars: 0, consts: [[1, "content"], ["size", "20", 3, "icon"], [1, "message"]], template: function ToastHookComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ToastHookComponent_ng_template_0_Template, 5, 4, "ng-template");
    } }, directives: [ɵngcc3.SvgIconComponent], pipes: [ɵngcc4.TranslatePipe], styles: [".sof-toast-error,.sof-toast-success,.sof-toast-warning{display:flex;align-items:center}.sof-toast-error .content,.sof-toast-success .content,.sof-toast-warning .content{display:flex;align-items:center;padding:4px;width:100%}.sof-toast-error .content sof-svg-icon,.sof-toast-success .content sof-svg-icon,.sof-toast-warning .content sof-svg-icon{flex-shrink:0}.sof-toast-error .content .message,.sof-toast-success .content .message,.sof-toast-warning .content .message{width:100%;margin:0 24px}.sof-toast-error .ant-notification-notice-close,.sof-toast-success .ant-notification-notice-close,.sof-toast-warning .ant-notification-notice-close{position:relative;top:unset;right:unset;color:inherit;flex-shrink:0;margin:0 -4px;padding:4px}.sof-toast-error .ant-notification-notice-close .ant-notification-notice-close-x,.sof-toast-success .ant-notification-notice-close .ant-notification-notice-close-x,.sof-toast-warning .ant-notification-notice-close .ant-notification-notice-close-x{display:flex}.sof-toast-error .ant-notification-notice-close .ant-notification-notice-close-x .anticon,.sof-toast-success .ant-notification-notice-close .ant-notification-notice-close-x .anticon,.sof-toast-warning .ant-notification-notice-close .ant-notification-notice-close-x .anticon{vertical-align:unset}"], encapsulation: 2 });
ToastHookComponent.ctorParameters = () => [
    { type: ToastService }
];
ToastHookComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ToastHookComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ToastService }]; }, { template: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();

class ToastHookModule {
}
ToastHookModule.ɵfac = function ToastHookModule_Factory(t) { return new (t || ToastHookModule)(); };
ToastHookModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToastHookModule });
ToastHookModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ providers: [ToastService], imports: [[NzNotificationModule, TranslateModule.forChild(), SvgIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToastHookModule, { declarations: function () { return [ToastHookComponent]; }, imports: function () { return [NzNotificationModule, ɵngcc4.TranslateModule, SvgIconModule]; }, exports: function () { return [ToastHookComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ToastHookModule, [{
        type: NgModule,
        args: [{
                imports: [NzNotificationModule, TranslateModule.forChild(), SvgIconModule],
                declarations: [ToastHookComponent],
                exports: [ToastHookComponent],
                providers: [ToastService]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ToastHookComponent, ToastHookModule, ToastService };

//# sourceMappingURL=sofico-framework-ui-kit-components-toast-hook.js.map