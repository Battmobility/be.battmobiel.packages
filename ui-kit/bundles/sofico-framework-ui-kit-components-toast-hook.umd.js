(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/notification'), require('@ngx-translate/core'), require('@sofico-framework/ui-kit/components/svg-icon')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/toast-hook', ['exports', '@angular/core', 'ng-zorro-antd/core/config', 'ng-zorro-antd/notification', '@ngx-translate/core', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['toast-hook'] = {}), global.ng.core, global.config, global.notification, global.core$1, global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, core, config, notification, core$1, svgIcon) { 'use strict';

    var ToastService = /** @class */ (function () {
        function ToastService(nzConfigService, notificationService) {
            this.nzConfigService = nzConfigService;
            this.notificationService = notificationService;
            this.nzConfigService.set('notification', {
                nzDuration: 5000,
                nzPlacement: 'bottomRight'
            });
        }
        ToastService.prototype.connect = function (template) {
            this.template = template;
        };
        ToastService.prototype.success = function (message, translate) {
            if (translate === void 0) { translate = false; }
            this.createToast(message, translate, 'icon-checkmark-circle', 'success');
        };
        ToastService.prototype.error = function (message, translate) {
            if (translate === void 0) { translate = false; }
            this.createToast(message, translate, 'icon-cross-circle', 'error');
        };
        ToastService.prototype.warning = function (message, translate) {
            if (translate === void 0) { translate = false; }
            this.createToast(message, translate, 'icon-warning', 'warning');
        };
        ToastService.prototype.createToast = function (message, translate, icon, type) {
            this.notificationService.template(this.template, {
                nzData: { message: message, translate: translate, icon: icon },
                nzClass: "sof-toast-" + type
            });
        };
        return ToastService;
    }());
    ToastService.decorators = [
        { type: core.Injectable }
    ];
    ToastService.ctorParameters = function () { return [
        { type: config.NzConfigService },
        { type: notification.NzNotificationService }
    ]; };

    var ToastHookComponent = /** @class */ (function () {
        function ToastHookComponent(toastService) {
            this.toastService = toastService;
        }
        ToastHookComponent.prototype.ngAfterViewInit = function () {
            this.toastService.connect(this.template);
        };
        return ToastHookComponent;
    }());
    ToastHookComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sof-toast-hook',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "\n    <ng-template let-toast=\"data\">\n      <div class=\"content\">\n        <sof-svg-icon [icon]=\"toast.icon\" size=\"20\"></sof-svg-icon>\n        <div class=\"message\">\n          {{ toast.translate ? (toast.message | translate) : toast.message }}\n        </div>\n      </div>\n    </ng-template>\n  ",
                    styles: [".sof-toast-error,.sof-toast-success,.sof-toast-warning{display:flex;align-items:center}.sof-toast-error .content,.sof-toast-success .content,.sof-toast-warning .content{display:flex;align-items:center;padding:4px;width:100%}.sof-toast-error .content sof-svg-icon,.sof-toast-success .content sof-svg-icon,.sof-toast-warning .content sof-svg-icon{flex-shrink:0}.sof-toast-error .content .message,.sof-toast-success .content .message,.sof-toast-warning .content .message{width:100%;margin:0 24px}.sof-toast-error .ant-notification-notice-close,.sof-toast-success .ant-notification-notice-close,.sof-toast-warning .ant-notification-notice-close{position:relative;top:unset;right:unset;color:inherit;flex-shrink:0;margin:0 -4px;padding:4px}.sof-toast-error .ant-notification-notice-close .ant-notification-notice-close-x,.sof-toast-success .ant-notification-notice-close .ant-notification-notice-close-x,.sof-toast-warning .ant-notification-notice-close .ant-notification-notice-close-x{display:flex}.sof-toast-error .ant-notification-notice-close .ant-notification-notice-close-x .anticon,.sof-toast-success .ant-notification-notice-close .ant-notification-notice-close-x .anticon,.sof-toast-warning .ant-notification-notice-close .ant-notification-notice-close-x .anticon{vertical-align:unset}"]
                },] }
    ];
    ToastHookComponent.ctorParameters = function () { return [
        { type: ToastService }
    ]; };
    ToastHookComponent.propDecorators = {
        template: [{ type: core.ViewChild, args: [core.TemplateRef,] }]
    };

    var ToastHookModule = /** @class */ (function () {
        function ToastHookModule() {
        }
        return ToastHookModule;
    }());
    ToastHookModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [notification.NzNotificationModule, core$1.TranslateModule.forChild(), svgIcon.SvgIconModule],
                    declarations: [ToastHookComponent],
                    exports: [ToastHookComponent],
                    providers: [ToastService]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ToastHookComponent = ToastHookComponent;
    exports.ToastHookModule = ToastHookModule;
    exports.ToastService = ToastService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-toast-hook.umd.js.map
