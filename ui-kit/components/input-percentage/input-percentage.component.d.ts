import { ElementRef, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { InputNumberBaseDirective } from '@sofico-framework/ui-kit/components/number-base';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
export declare class InputPercentageComponent extends InputNumberBaseDirective implements OnDestroy, OnSofFocus {
    form: FormComponent;
    ngControl: NgControl;
    inputElement: ElementRef;
    constructor(form: FormComponent, ngControl: NgControl);
    sofFocus(): void;
    ngOnDestroy(): void;
    writeValue(obj: any): void;
    onChange(value: string): void;
}
