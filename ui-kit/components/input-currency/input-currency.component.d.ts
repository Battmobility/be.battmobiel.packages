import { OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { InputNumberBaseDirective } from '@sofico-framework/ui-kit/components/number-base';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import * as ɵngcc0 from '@angular/core';
export declare class InputCurrencyComponent extends InputNumberBaseDirective implements OnDestroy, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    currencyCode: string;
    constructor(form: FormComponent, ngControl: NgControl);
    sofFocus(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputCurrencyComponent, [{ optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputCurrencyComponent, "sof-input-currency", never, { "currencyCode": "currencyCode"; }, {}, never, never>;
}

//# sourceMappingURL=input-currency.component.d.ts.map