import { EventEmitter } from '@angular/core';
import { ActingErrorMessage } from '@sofico-framework/utils';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class InteractiveWarningDialogComponent {
    errors: string[];
    tc: string;
    bodyLabel: string;
    decline: EventEmitter<any>;
    confirm: EventEmitter<any>;
    acting$: Observable<boolean>;
    actingErrorMessages$: Observable<ActingErrorMessage[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InteractiveWarningDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InteractiveWarningDialogComponent, "sof-interactive-warning-dialog", never, { "errors": "errors"; "tc": "tc"; "bodyLabel": "bodyLabel"; }, { "decline": "decline"; "confirm": "confirm"; }, never, never>;
}

//# sourceMappingURL=interactive-warning-dialog.component.d.ts.map