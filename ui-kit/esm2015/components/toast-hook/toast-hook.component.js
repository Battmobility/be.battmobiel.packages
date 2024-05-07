import { Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ToastService } from './services/toast.service';
export class ToastHookComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaG9vay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL3RvYXN0LWhvb2svdG9hc3QtaG9vay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFpQnhELE1BQU0sT0FBTyxrQkFBa0I7SUFHN0IsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDO0lBRWxELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUUxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDs7YUFDRjs7O1lBaEJRLFlBQVk7Ozt1QkFrQmxCLFNBQVMsU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdG9hc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi10b2FzdC1ob29rJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QtaG9vay5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLCAvLyBzbyBhbGwgY3NzIGNhbiBzdGF5IHdpdGggdGhlIGNvbXBvbmVudFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSBsZXQtdG9hc3Q9XCJkYXRhXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8c29mLXN2Zy1pY29uIFtpY29uXT1cInRvYXN0Lmljb25cIiBzaXplPVwiMjBcIj48L3NvZi1zdmctaWNvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICB7eyB0b2FzdC50cmFuc2xhdGUgPyAodG9hc3QubWVzc2FnZSB8IHRyYW5zbGF0ZSkgOiB0b2FzdC5tZXNzYWdlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdEhvb2tDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljZSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy50b2FzdFNlcnZpY2UuY29ubmVjdCh0aGlzLnRlbXBsYXRlKTtcbiAgfVxufVxuIl19