import { Overlay } from '@angular/cdk/overlay';
import { HttpErrorResponse } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogConfigService } from './dialog-config.service';
import * as ɵngcc0 from '@angular/core';
export declare class DialogService {
    private injector;
    private overlay;
    private dialogConfigService;
    constructor(injector: Injector, overlay: Overlay, dialogConfigService: DialogConfigService);
    handleInteractiveFlow<T>(initial$: Observable<T>, postApproval$: Observable<T>, tc: string): Observable<T>;
    openInteractiveWarning(tc: string, error: HttpErrorResponse): {
        confirm$: Observable<any>;
        decline$: Observable<any>;
        destroy: () => any;
    };
    openConfirmModal(tc: string, headerLabel: string, bodyLabel: string, cancelLabel: string, confirmLabel: string, primaryAction?: 'confirm' | 'cancel', labelParams?: {
        [key: string]: string;
    }, disableActing?: boolean): {
        confirm$: Observable<any>;
        decline$: Observable<any>;
        destroy: () => any;
    };
    openAcknowledgeModal(tc: string, headerLabel: string, bodyLabel: string, acknowledgeLabel: string, disableHeaderLabelTranslation?: boolean, disableBodyLabelTranslation?: boolean): {
        acknowledge$: Observable<any>;
        destroy: () => any;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DialogService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DialogService>;
}

//# sourceMappingURL=dialog.service.d.ts.map