import { FormBuilder, FormGroup } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class FormGroupService {
    private fb;
    constructor(fb: FormBuilder);
    createPhoneGroup(defaultCountry?: {
        countryId: string;
    }): FormGroup;
    createAddressGroup(defaultCountry?: {
        countryId: string;
    }): FormGroup;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormGroupService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<FormGroupService>;
}

//# sourceMappingURL=form-group.service.d.ts.map