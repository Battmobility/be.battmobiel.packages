import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { Subject } from 'rxjs';
import { distinctUntilChanged, startWith } from 'rxjs/operators';
let FormComponent = class FormComponent {
    constructor() {
        /**
         * EventEmitter that will emit when the form is submitted.
         */
        this.formSubmit = new EventEmitter();
        /**
         * EventEmitter that will emit when the form is dirty. This means that
         * the user has changed the form's value.
         */
        this.formDirty = new EventEmitter();
        this.submitted = false;
        this.actualErrorMap = {
            required: 'VALIDATION_REQUIRED',
            email: 'VALIDATION_EMAIL',
            maxLength: 'VALIDATION_MAX-LENGTH',
            inRange: 'VALIDATION_NOT-IN-RANGE',
            phoneNumber: 'VALIDATION_PHONE-NUMBER',
            isInteger: 'VALIDATION_NOT-IS-INTEGER'
        };
        this.formDirty$ = new Subject();
    }
    /**
     * Contains a map of error translation keys that match the validators identifier.
     * The validators that are supported by default are:
     * - required
     * - email
     * - maxLength
     * - inRange
     * - phoneNumber
     * - isInteger
     */
    set errorMap(map) {
        this.actualErrorMap = Object.assign(Object.assign({}, this.actualErrorMap), map);
    }
    ngOnInit() {
        this.formDirty$
            .pipe(distinctUntilChanged(), takeUntilDestroy(this))
            .subscribe(dirty => this.formDirty.emit(dirty));
        this.formGroup.valueChanges
            .pipe(startWith(null), takeUntilDestroy(this))
            .subscribe(() => {
            if (this.submitted && !this.formGroup.dirty) {
                this.submitted = false;
            }
            this.formDirty$.next(this.formGroup.dirty);
        });
    }
    ngOnDestroy() { }
    onSubmit() {
        this.submitted = true;
        this.formSubmit.emit(this.formGroup.value);
    }
};
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-form',
                template: `
    <form [formGroup]="formGroup" (submit)="onSubmit()">
      <ng-content></ng-content>
    </form>
  `,
                styles: [""]
            },] }
];
FormComponent.propDecorators = {
    tc: [{ type: Input }],
    formGroup: [{ type: Input }],
    formSubmit: [{ type: Output }],
    formDirty: [{ type: Output }],
    errorMap: [{ type: Input }]
};
FormComponent = __decorate([
    UntilDestroy()
], FormComponent);
export { FormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0lBWXBELGFBQWEsU0FBYixhQUFhOztRQVN4Qjs7V0FFRztRQUNPLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9DOzs7V0FHRztRQUNPLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ2xELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsbUJBQWMsR0FBOEI7WUFDMUMsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLFNBQVMsRUFBRSx1QkFBdUI7WUFDbEMsT0FBTyxFQUFFLHlCQUF5QjtZQUNsQyxXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSwyQkFBMkI7U0FDdkMsQ0FBQztRQUNNLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO0lBeUM5QyxDQUFDO0lBdkNDOzs7Ozs7Ozs7T0FTRztJQUNILElBQWEsUUFBUSxDQUFDLEdBQThCO1FBQ2xELElBQUksQ0FBQyxjQUFjLG1DQUNkLElBQUksQ0FBQyxjQUFjLEdBQ25CLEdBQUcsQ0FDUCxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVTthQUNaLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BELFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0MsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4QjtZQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVyxLQUFVLENBQUM7SUFFdEIsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGLENBQUE7O1lBN0VBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFFcEIsUUFBUSxFQUFFOzs7O0dBSVQ7O2FBQ0Y7OztpQkFLRSxLQUFLO3dCQUlMLEtBQUs7eUJBSUwsTUFBTTt3QkFLTixNQUFNO3VCQXNCTixLQUFLOztBQXZDSyxhQUFhO0lBVnpCLFlBQVksRUFBRTtHQVVGLGFBQWEsQ0FvRXpCO1NBcEVZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95LCBVbnRpbERlc3Ryb3kgfSBmcm9tICduZ3gtcmVhY3RpdmV0b29sa2l0JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWZvcm0nLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAoc3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Zvcm0+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSB0cmFuc2xhdGlvbiBjb250ZXh0LlxuICAgKi9cbiAgQElucHV0KCkgdGM6IHN0cmluZztcbiAgLyoqXG4gICAqIENvbnRhaW5zIHRoZSBmb3JtIHRoYXQgdGhlIHdyYXBwZWQgZm9ybSBjb250cm9scyB1c2UuXG4gICAqL1xuICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgLyoqXG4gICAqIEV2ZW50RW1pdHRlciB0aGF0IHdpbGwgZW1pdCB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgdGhhdCB3aWxsIGVtaXQgd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eS4gVGhpcyBtZWFucyB0aGF0XG4gICAqIHRoZSB1c2VyIGhhcyBjaGFuZ2VkIHRoZSBmb3JtJ3MgdmFsdWUuXG4gICAqL1xuICBAT3V0cHV0KCkgZm9ybURpcnR5ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBzdWJtaXR0ZWQgPSBmYWxzZTtcbiAgYWN0dWFsRXJyb3JNYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgcmVxdWlyZWQ6ICdWQUxJREFUSU9OX1JFUVVJUkVEJyxcbiAgICBlbWFpbDogJ1ZBTElEQVRJT05fRU1BSUwnLFxuICAgIG1heExlbmd0aDogJ1ZBTElEQVRJT05fTUFYLUxFTkdUSCcsXG4gICAgaW5SYW5nZTogJ1ZBTElEQVRJT05fTk9ULUlOLVJBTkdFJyxcbiAgICBwaG9uZU51bWJlcjogJ1ZBTElEQVRJT05fUEhPTkUtTlVNQkVSJyxcbiAgICBpc0ludGVnZXI6ICdWQUxJREFUSU9OX05PVC1JUy1JTlRFR0VSJ1xuICB9O1xuICBwcml2YXRlIGZvcm1EaXJ0eSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBDb250YWlucyBhIG1hcCBvZiBlcnJvciB0cmFuc2xhdGlvbiBrZXlzIHRoYXQgbWF0Y2ggdGhlIHZhbGlkYXRvcnMgaWRlbnRpZmllci5cbiAgICogVGhlIHZhbGlkYXRvcnMgdGhhdCBhcmUgc3VwcG9ydGVkIGJ5IGRlZmF1bHQgYXJlOlxuICAgKiAtIHJlcXVpcmVkXG4gICAqIC0gZW1haWxcbiAgICogLSBtYXhMZW5ndGhcbiAgICogLSBpblJhbmdlXG4gICAqIC0gcGhvbmVOdW1iZXJcbiAgICogLSBpc0ludGVnZXJcbiAgICovXG4gIEBJbnB1dCgpIHNldCBlcnJvck1hcChtYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLmFjdHVhbEVycm9yTWFwID0ge1xuICAgICAgLi4udGhpcy5hY3R1YWxFcnJvck1hcCxcbiAgICAgIC4uLm1hcFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1EaXJ0eSRcbiAgICAgIC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksIHRha2VVbnRpbERlc3Ryb3kodGhpcykpXG4gICAgICAuc3Vic2NyaWJlKGRpcnR5ID0+IHRoaXMuZm9ybURpcnR5LmVtaXQoZGlydHkpKTtcblxuICAgIHRoaXMuZm9ybUdyb3VwLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoc3RhcnRXaXRoKG51bGwpLCB0YWtlVW50aWxEZXN0cm95KHRoaXMpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN1Ym1pdHRlZCAmJiAhdGhpcy5mb3JtR3JvdXAuZGlydHkpIHtcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtRGlydHkkLm5leHQodGhpcy5mb3JtR3JvdXAuZGlydHkpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcbiAgfVxufVxuIl19