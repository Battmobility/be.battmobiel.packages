import { ElementRef, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { InputNumberBaseDirective } from '@sofico-framework/ui-kit/components/number-base';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
import * as ɵngcc0 from '@angular/core';
export declare class InputNumberComponent extends InputNumberBaseDirective implements OnDestroy, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    inputElement: ElementRef;
    constructor(form: FormComponent, ngControl: NgControl);
    sofFocus(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputNumberComponent, [{ optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputNumberComponent, "sof-input-number", never, {}, {}, never, never>;
}

//# sourceMappingURL=input-number.component.d.ts.map