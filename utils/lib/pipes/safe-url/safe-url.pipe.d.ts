import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
export declare class SafeUrlPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(url: any): SafeResourceUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SafeUrlPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<SafeUrlPipe, "sofSafeUrl">;
}

//# sourceMappingURL=safe-url.pipe.d.ts.map