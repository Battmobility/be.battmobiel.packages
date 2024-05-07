import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { isNumber } from '@sofico-framework/utils';
export class CurrencyComponent {
    constructor() {
        /**
         * The minimal fraction
         */
        this.minFraction = 2;
        /**
         * The maximal fraction
         */
        this.maxFraction = 17;
    }
    get isNumber() {
        return isNumber(this.value);
    }
    get format() {
        return `1.${this.minFraction}-${this.maxFraction}`;
    }
}
CurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-currency',
                template: `
    <ng-container *ngIf="isNumber; else noValue">
      {{ value | currency: currencyCode:'symbol-narrow':format }}
    </ng-container>
    <ng-template #noValue>-</ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
CurrencyComponent.propDecorators = {
    value: [{ type: Input }],
    currencyCode: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9jdXJyZW5jeS9jdXJyZW5jeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBWW5ELE1BQU0sT0FBTyxpQkFBaUI7SUFWOUI7UUFxQkU7O1dBRUc7UUFDTSxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUV6Qjs7V0FFRztRQUNNLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBUzVCLENBQUM7SUFQQyxJQUFJLFFBQVE7UUFDVixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sS0FBSyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7O0dBS1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztvQkFLRSxLQUFLOzJCQUtMLEtBQUs7MEJBS0wsS0FBSzswQkFLTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtY3VycmVuY3knLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc051bWJlcjsgZWxzZSBub1ZhbHVlXCI+XG4gICAgICB7eyB2YWx1ZSB8IGN1cnJlbmN5OiBjdXJyZW5jeUNvZGU6J3N5bWJvbC1uYXJyb3cnOmZvcm1hdCB9fVxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjbm9WYWx1ZT4tPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lDb21wb25lbnQge1xuICAvKipcbiAgICogVGhlIHZhbHVlIHdlIHdhbnQgdG8gc2hvd1xuICAgKi9cbiAgQElucHV0KCkgdmFsdWU6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGN1cnJlbmN5IGNvZGVcbiAgICovXG4gIEBJbnB1dCgpIGN1cnJlbmN5Q29kZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbWluaW1hbCBmcmFjdGlvblxuICAgKi9cbiAgQElucHV0KCkgbWluRnJhY3Rpb24gPSAyO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW1hbCBmcmFjdGlvblxuICAgKi9cbiAgQElucHV0KCkgbWF4RnJhY3Rpb24gPSAxNztcblxuICBnZXQgaXNOdW1iZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgZ2V0IGZvcm1hdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgMS4ke3RoaXMubWluRnJhY3Rpb259LSR7dGhpcy5tYXhGcmFjdGlvbn1gO1xuICB9XG59XG4iXX0=