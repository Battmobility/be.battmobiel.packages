import { DocumentRefService } from './document-ref.service';
import { WindowRefService } from './window-ref.service';
import * as ɵngcc0 from '@angular/core';
export declare class DocumentDownloadService {
    private documentRefService;
    private windowRefService;
    constructor(documentRefService: DocumentRefService, windowRefService: WindowRefService);
    downloadDocument(blob: any, documentName: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DocumentDownloadService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DocumentDownloadService>;
}

//# sourceMappingURL=document-download.service.d.ts.map