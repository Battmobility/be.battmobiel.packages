import { Injectable } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzNotificationService } from 'ng-zorro-antd/notification';
export class ToastService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvdG9hc3QtaG9vay9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR25FLE1BQU0sT0FBTyxZQUFZO0lBR3ZCLFlBQ1UsZUFBZ0MsRUFDaEMsbUJBQTBDO1FBRDFDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXVCO1FBRWxELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTtZQUN2QyxVQUFVLEVBQUUsSUFBSTtZQUNoQixXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLFFBQTBCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBZSxFQUFFLFlBQXFCLEtBQUs7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBZSxFQUFFLFlBQXFCLEtBQUs7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBZSxFQUFFLFlBQXFCLEtBQUs7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU8sV0FBVyxDQUNqQixPQUFlLEVBQ2YsU0FBa0IsRUFDbEIsSUFBWSxFQUNaLElBQXFDO1FBRXJDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMvQyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRTtZQUNwQyxPQUFPLEVBQUUsYUFBYSxJQUFJLEVBQUU7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBeENGLFVBQVU7OztZQUhGLGVBQWU7WUFDZixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xuICBwcml2YXRlIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOek5vdGlmaWNhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2Uuc2V0KCdub3RpZmljYXRpb24nLCB7XG4gICAgICBuekR1cmF0aW9uOiA1MDAwLFxuICAgICAgbnpQbGFjZW1lbnQ6ICdib3R0b21SaWdodCdcbiAgICB9KTtcbiAgfVxuXG4gIGNvbm5lY3QodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gIH1cblxuICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywgdHJhbnNsYXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVRvYXN0KG1lc3NhZ2UsIHRyYW5zbGF0ZSwgJ2ljb24tY2hlY2ttYXJrLWNpcmNsZScsICdzdWNjZXNzJyk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRyYW5zbGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVUb2FzdChtZXNzYWdlLCB0cmFuc2xhdGUsICdpY29uLWNyb3NzLWNpcmNsZScsICdlcnJvcicpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIHRyYW5zbGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVUb2FzdChtZXNzYWdlLCB0cmFuc2xhdGUsICdpY29uLXdhcm5pbmcnLCAnd2FybmluZycpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVUb2FzdChcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgdHJhbnNsYXRlOiBib29sZWFuLFxuICAgIGljb246IHN0cmluZyxcbiAgICB0eXBlOiAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ3dhcm5pbmcnXG4gICk6IHZvaWQge1xuICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS50ZW1wbGF0ZSh0aGlzLnRlbXBsYXRlLCB7XG4gICAgICBuekRhdGE6IHsgbWVzc2FnZSwgdHJhbnNsYXRlLCBpY29uIH0sXG4gICAgICBuekNsYXNzOiBgc29mLXRvYXN0LSR7dHlwZX1gXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==