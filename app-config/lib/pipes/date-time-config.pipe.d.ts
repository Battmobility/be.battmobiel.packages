import { DatePipe } from '@angular/common';
import { PipeTransform } from '@angular/core';
import { ConfigService } from '../services/config.service';
import * as ɵngcc0 from '@angular/core';
export declare class DateTimeConfigPipe implements PipeTransform {
    private configService;
    private datePipe;
    constructor(configService: ConfigService, datePipe: DatePipe);
    transform(value: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DateTimeConfigPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<DateTimeConfigPipe, "sofDateTimeConfig">;
}

//# sourceMappingURL=date-time-config.pipe.d.ts.map