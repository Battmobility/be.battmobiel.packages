import { OnChanges, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Step } from './types/step.type';
export declare class VerticalStepsComponent implements OnChanges {
    internalSteps: Step<any>[];
    activeIndex: number;
    /**
     * The size of the bullets.
     * Can be 8 - 12 - 16.
     * 12 by default
     */
    sizeBullets: '8' | '12' | '16';
    /**
     * Input to reverse the direction of the steppers.
     * Meaning that the stepper will start at the bottom, and not at the top (default).
     */
    reverse: boolean;
    set steps(items: Step<any>[]);
    steps$: Observable<Step<any>[]>;
    headerTemplateRef: TemplateRef<any>;
    ngOnChanges(): void;
}
