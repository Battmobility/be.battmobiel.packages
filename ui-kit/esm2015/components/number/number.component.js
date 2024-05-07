import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { isNumber } from '@sofico-framework/utils';
export class NumberComponent {
    constructor() {
        this.minFraction = 0;
        this.maxFraction = 17;
    }
    get isNumber() {
        return isNumber(this.value);
    }
    get format() {
        return `1.${this.minFraction}-${this.maxFraction}`;
    }
}
NumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-number',
                template: `
    <ng-container *ngIf="isNumber; else noValue">
      {{ value | number: format }}
    </ng-container>
    <ng-template #noValue>-</ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NumberComponent.propDecorators = {
    value: [{ type: Input }],
    minFraction: [{ type: Input }],
    maxFraction: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvbnVtYmVyL251bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBWW5ELE1BQU0sT0FBTyxlQUFlO0lBVjVCO1FBWVcsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7SUFTNUIsQ0FBQztJQVBDLElBQUksUUFBUTtRQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxLQUFLLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JELENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7R0FLVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O29CQUVFLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtbnVtYmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNOdW1iZXI7IGVsc2Ugbm9WYWx1ZVwiPlxuICAgICAge3sgdmFsdWUgfCBudW1iZXI6IGZvcm1hdCB9fVxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjbm9WYWx1ZT4tPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdmFsdWU6IG51bWJlcjtcbiAgQElucHV0KCkgbWluRnJhY3Rpb24gPSAwO1xuICBASW5wdXQoKSBtYXhGcmFjdGlvbiA9IDE3O1xuXG4gIGdldCBpc051bWJlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy52YWx1ZSk7XG4gIH1cblxuICBnZXQgZm9ybWF0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAxLiR7dGhpcy5taW5GcmFjdGlvbn0tJHt0aGlzLm1heEZyYWN0aW9ufWA7XG4gIH1cbn1cbiJdfQ==