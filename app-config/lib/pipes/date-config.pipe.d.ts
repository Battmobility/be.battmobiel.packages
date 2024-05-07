import { DatePipe } from '@angular/common';
import { PipeTransform } from '@angular/core';
import { ConfigService } from '../services/config.service';
import * as ɵngcc0 from '@angular/core';
export declare class DateConfigPipe implements PipeTransform {
    private datePipe;
    private configService;
    constructor(datePipe: DatePipe, configService: ConfigService);
    transform(value: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DateConfigPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<DateConfigPipe, "sofDateConfig">;
}

//# sourceMappingURL=date-config.pipe.d.ts.map