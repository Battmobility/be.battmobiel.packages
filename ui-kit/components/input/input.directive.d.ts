import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import * as ɵngcc0 from '@angular/core';
export declare class InputDirective implements OnInit {
    form: FormComponent;
    sofInput: any;
    formControl: FormControl;
    set formControlName(name: string);
    errorMap: {
        [key: string]: string;
    };
    constructor(form: FormComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<InputDirective, "[sofInput]", never, { "formControlName": "formControlName"; "sofInput": "sofInput"; "formControl": "formControl"; "errorMap": "errorMap"; }, {}, never>;
}

//# sourceMappingURL=input.directive.d.ts.map