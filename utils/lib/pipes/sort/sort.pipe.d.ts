import { PipeTransform } from '@angular/core';
import { SortingOrderConfig } from '../../types/sorting-order-config.type';
import * as ɵngcc0 from '@angular/core';
export declare class SortPipe implements PipeTransform {
    transform<T>(list: T[], sortingOrderConfig: SortingOrderConfig<T>): T[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SortPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<SortPipe, "sofSort">;
}

//# sourceMappingURL=sort.pipe.d.ts.map