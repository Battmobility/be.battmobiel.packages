import { Observable } from 'rxjs';
import { DocumentRefService } from './document-ref.service';
import * as ɵngcc0 from '@angular/core';
export declare class FileSelectionService {
    private documentRefService;
    constructor(documentRefService: DocumentRefService);
    /**
     * @param acceptedMimeTypes example: [ 'application/pdf', 'image/jpeg', 'image/x-png' ]
     * @param multiple allow selection of multiple files
     */
    getFileSelector(acceptedMimeTypes?: string[], multiple?: boolean): Observable<FileList>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FileSelectionService, never>;
}

//# sourceMappingURL=file-selection.service.d.ts.map