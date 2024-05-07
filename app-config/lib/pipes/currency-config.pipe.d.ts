import { CurrencyPipe } from '@angular/common';
import { PipeTransform } from '@angular/core';
import { ConfigService } from '../services/config.service';
import * as ɵngcc0 from '@angular/core';
export declare class CurrencyConfigPipe implements PipeTransform {
    private currencyPipe;
    private configService;
    constructor(currencyPipe: CurrencyPipe, configService: ConfigService);
    transform(value: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CurrencyConfigPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<CurrencyConfigPipe, "sofCurrencyConfig">;
}

//# sourceMappingURL=currency-config.pipe.d.ts.map