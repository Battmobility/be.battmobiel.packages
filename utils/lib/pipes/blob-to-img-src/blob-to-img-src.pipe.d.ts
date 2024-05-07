import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WindowRefService } from '../../services/window-ref.service';
import * as ɵngcc0 from '@angular/core';
export declare class BlobToImgSrcPipe implements PipeTransform {
    private sanitizer;
    private windowRefService;
    constructor(sanitizer: DomSanitizer, windowRefService: WindowRefService);
    transform(blob: Blob): SafeResourceUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BlobToImgSrcPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<BlobToImgSrcPipe, "sofBlobToImgSrc">;
}

//# sourceMappingURL=blob-to-img-src.pipe.d.ts.map