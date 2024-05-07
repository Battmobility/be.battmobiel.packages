import { EventEmitter } from '@angular/core';
import { ActingErrorMessage } from '@sofico-framework/utils';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class ConfirmDialogComponent {
    headerLabel: string;
    cancelLabel: string;
    confirmLabel: string;
    disableActing: boolean;
    tc: string;
    bodyLabel: string;
    primaryAction: 'confirm' | 'cancel';
    labelParams: {
        [key: string]: string;
    };
    decline: EventEmitter<any>;
    confirm: EventEmitter<any>;
    acting$: Observable<boolean>;
    actingErrorMessages$: Observable<ActingErrorMessage[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfirmDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ConfirmDialogComponent, "sof-confirm-dialog", never, { "headerLabel": "headerLabel"; "cancelLabel": "cancelLabel"; "confirmLabel": "confirmLabel"; "disableActing": "disableActing"; "tc": "tc"; "bodyLabel": "bodyLabel"; "primaryAction": "primaryAction"; "labelParams": "labelParams"; }, { "decline": "decline"; "confirm": "confirm"; }, never, never>;
}

//# sourceMappingURL=confirm-dialog.component.d.ts.map