import { PipeTransform } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class CurrencySymbolPipe implements PipeTransform {
    protected locale: string;
    constructor(locale: string);
    transform(code: string, format?: 'wide' | 'narrow'): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CurrencySymbolPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<CurrencySymbolPipe, "sofCurrencySymbol">;
}

//# sourceMappingURL=currency-symbol.pipe.d.ts.map