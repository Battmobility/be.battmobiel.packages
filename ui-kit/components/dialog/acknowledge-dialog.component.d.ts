import { EventEmitter } from '@angular/core';
import { ActingErrorMessage } from '@sofico-framework/utils';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class AcknowledgeDialogComponent {
    headerLabel: string;
    acknowledgeLabel: string;
    tc: string;
    bodyLabel: string;
    disableHeaderLabelTranslation: boolean;
    disableBodyLabelTranslation: boolean;
    acknowledge: EventEmitter<any>;
    acting$: Observable<boolean>;
    actingErrorMessages$: Observable<ActingErrorMessage[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AcknowledgeDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AcknowledgeDialogComponent, "sof-acknowledge-dialog", never, { "headerLabel": "headerLabel"; "acknowledgeLabel": "acknowledgeLabel"; "tc": "tc"; "bodyLabel": "bodyLabel"; "disableHeaderLabelTranslation": "disableHeaderLabelTranslation"; "disableBodyLabelTranslation": "disableBodyLabelTranslation"; }, { "acknowledge": "acknowledge"; }, never, never>;
}

//# sourceMappingURL=acknowledge-dialog.component.d.ts.map