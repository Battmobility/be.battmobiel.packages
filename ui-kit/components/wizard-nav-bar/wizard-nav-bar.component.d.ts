import { OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FlowStep } from './types/flow-step.type';
import * as ɵngcc0 from '@angular/core';
export declare class WizardNavBarComponent implements OnChanges, OnInit {
    private router;
    tc: string;
    steps: FlowStep[];
    enableFutureSteps: boolean;
    steps$: Observable<FlowStep[]>;
    indexActiveStep$: Observable<number>;
    private triggerCalc$;
    constructor(router: Router);
    ngOnInit(): void;
    ngOnChanges(): void;
    blur(event: any): void;
    private getIndexActiveStep;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WizardNavBarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<WizardNavBarComponent, "sof-wizard-nav-bar", never, { "enableFutureSteps": "enableFutureSteps"; "tc": "tc"; "steps": "steps"; }, {}, never, never>;
}

//# sourceMappingURL=wizard-nav-bar.component.d.ts.map