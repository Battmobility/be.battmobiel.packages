import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputSingleSelectModule } from '@sofico-framework/ui-kit/components/input-single-select';
import { InputPhoneNumberComponent } from './input-phone-number.component';
export class InputPhoneNumberModule {
}
InputPhoneNumberModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, InputSingleSelectModule, ReactiveFormsModule],
                declarations: [InputPhoneNumberComponent],
                exports: [InputPhoneNumberComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGhvbmUtbnVtYmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtcGhvbmUtbnVtYmVyL2lucHV0LXBob25lLW51bWJlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFPM0UsTUFBTSxPQUFPLHNCQUFzQjs7O1lBTGxDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3JFLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0U2luZ2xlU2VsZWN0TW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtc2luZ2xlLXNlbGVjdCc7XG5pbXBvcnQgeyBJbnB1dFBob25lTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1waG9uZS1udW1iZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSW5wdXRTaW5nbGVTZWxlY3RNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtJbnB1dFBob25lTnVtYmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0lucHV0UGhvbmVOdW1iZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0UGhvbmVOdW1iZXJNb2R1bGUge31cbiJdfQ==