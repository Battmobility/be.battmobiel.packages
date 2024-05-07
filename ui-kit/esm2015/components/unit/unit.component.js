import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { isNumber } from '@sofico-framework/utils';
export class UnitComponent {
    constructor() {
        this.minFraction = 0;
        this.maxFraction = 2;
    }
    get isNumber() {
        return isNumber(this.value);
    }
    get format() {
        return `1.${this.minFraction}-${this.maxFraction}`;
    }
}
UnitComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-unit',
                template: `
    <ng-container *ngIf="isNumber; else noValue">
      <span *ngIf="valueSigned && value > 0">+</span
      >{{ value | number: format }} {{ unit }}
    </ng-container>
    <ng-template #noValue>-</ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
UnitComponent.propDecorators = {
    value: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }],
    valueSigned: [{ type: Input }],
    unit: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL3VuaXQvdW5pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBYW5ELE1BQU0sT0FBTyxhQUFhO0lBWDFCO1FBYVcsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7SUFXM0IsQ0FBQztJQVBDLElBQUksUUFBUTtRQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxLQUFLLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JELENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztvQkFFRSxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO21CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi11bml0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNOdW1iZXI7IGVsc2Ugbm9WYWx1ZVwiPlxuICAgICAgPHNwYW4gKm5nSWY9XCJ2YWx1ZVNpZ25lZCAmJiB2YWx1ZSA+IDBcIj4rPC9zcGFuXG4gICAgICA+e3sgdmFsdWUgfCBudW1iZXI6IGZvcm1hdCB9fSB7eyB1bml0IH19XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNub1ZhbHVlPi08L25nLXRlbXBsYXRlPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVbml0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgdmFsdWU6IG51bWJlcjtcbiAgQElucHV0KCkgbWluRnJhY3Rpb24gPSAwO1xuICBASW5wdXQoKSBtYXhGcmFjdGlvbiA9IDI7XG4gIEBJbnB1dCgpIHZhbHVlU2lnbmVkOiBib29sZWFuO1xuICBASW5wdXQoKSB1bml0OiBzdHJpbmc7XG5cbiAgZ2V0IGlzTnVtYmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc051bWJlcih0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGdldCBmb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDEuJHt0aGlzLm1pbkZyYWN0aW9ufS0ke3RoaXMubWF4RnJhY3Rpb259YDtcbiAgfVxufVxuIl19