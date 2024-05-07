import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCurrencyModule } from '@sofico-framework/ui-kit/components/input-currency';
import { InputNumberModule } from '@sofico-framework/ui-kit/components/input-number';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { InputSliderComponent } from './input-slider.component';
import { LabelFormatFnPipe } from './pipes/label-format-fn.pipe';
export class InputSliderModule {
}
InputSliderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NzSliderModule,
                    ReactiveFormsModule,
                    FormsModule,
                    CommonModule,
                    InputNumberModule,
                    InputCurrencyModule
                ],
                declarations: [InputSliderComponent, LabelFormatFnPipe],
                exports: [InputSliderComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtc2xpZGVyL2lucHV0LXNsaWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQWNqRSxNQUFNLE9BQU8saUJBQWlCOzs7WUFaN0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsV0FBVztvQkFDWCxZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxpQkFBaUIsQ0FBQztnQkFDdkQsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRDdXJyZW5jeU1vZHVsZSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2lucHV0LWN1cnJlbmN5JztcbmltcG9ydCB7IElucHV0TnVtYmVyTW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtbnVtYmVyJztcbmltcG9ydCB7IE56U2xpZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zbGlkZXInO1xuaW1wb3J0IHsgSW5wdXRTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LXNsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFiZWxGb3JtYXRGblBpcGUgfSBmcm9tICcuL3BpcGVzL2xhYmVsLWZvcm1hdC1mbi5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE56U2xpZGVyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElucHV0TnVtYmVyTW9kdWxlLFxuICAgIElucHV0Q3VycmVuY3lNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSW5wdXRTbGlkZXJDb21wb25lbnQsIExhYmVsRm9ybWF0Rm5QaXBlXSxcbiAgZXhwb3J0czogW0lucHV0U2xpZGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFNsaWRlck1vZHVsZSB7fVxuIl19