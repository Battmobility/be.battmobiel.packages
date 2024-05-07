import * as ɵngcc0 from '@angular/core';
export declare class LicensePlateComponent {
    localCountryCode: string;
    /**
     * Country code is specified in ISO Alpha 2 format.
     * ex: BE, NL, DE, etc
     */
    set countryCode(value: string);
    value: string;
    licensePlateCountryCodes: {
        be: string;
        de: string;
        fr: string;
        lu: string;
        nl: string;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LicensePlateComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LicensePlateComponent, "sof-license-plate", never, { "countryCode": "countryCode"; "value": "value"; }, {}, never, never>;
}

//# sourceMappingURL=license-plate.component.d.ts.map