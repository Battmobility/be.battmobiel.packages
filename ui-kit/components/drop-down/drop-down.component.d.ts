import { OnChanges, SimpleChanges } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
import { DropDownConfig } from './types/drop-down-config.type';
import * as ɵngcc0 from '@angular/core';
export declare class DropDownComponent implements OnChanges {
    config: DropDownConfig;
    isDisabled: boolean;
    badge: string;
    isWithinNavBar: boolean;
    dropDownVC: NgbDropdown;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DropDownComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DropDownComponent, "sof-drop-down", never, { "config": "config"; "isWithinNavBar": "isWithinNavBar"; "isDisabled": "isDisabled"; "badge": "badge"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=drop-down.component.d.ts.map