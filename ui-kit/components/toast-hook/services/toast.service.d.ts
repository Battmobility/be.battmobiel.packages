import { TemplateRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import * as ɵngcc0 from '@angular/core';
export declare class ToastService {
    private nzConfigService;
    private notificationService;
    private template;
    constructor(nzConfigService: NzConfigService, notificationService: NzNotificationService);
    connect(template: TemplateRef<any>): void;
    success(message: string, translate?: boolean): void;
    error(message: string, translate?: boolean): void;
    warning(message: string, translate?: boolean): void;
    private createToast;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ToastService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ToastService>;
}

//# sourceMappingURL=toast.service.d.ts.map