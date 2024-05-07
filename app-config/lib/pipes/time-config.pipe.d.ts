import { DatePipe } from '@angular/common';
import { PipeTransform } from '@angular/core';
import { ConfigService } from '../services/config.service';
import * as ɵngcc0 from '@angular/core';
export declare class TimeConfigPipe implements PipeTransform {
    private configService;
    private datePipe;
    constructor(configService: ConfigService, datePipe: DatePipe);
    transform(value: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TimeConfigPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<TimeConfigPipe, "sofTimeConfig">;
}

//# sourceMappingURL=time-config.pipe.d.ts.map