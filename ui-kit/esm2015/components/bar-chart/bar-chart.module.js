import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart.component';
export class BarChartModule {
}
BarChartModule.decorators = [
    { type: NgModule, args: [{
                exports: [BarChartComponent],
                declarations: [BarChartComponent],
                imports: [CommonModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvYmFyLWNoYXJ0L2Jhci1jaGFydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFPMUQsTUFBTSxPQUFPLGNBQWM7OztZQUwxQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhckNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9iYXItY2hhcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0JhckNoYXJ0Q29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbQmFyQ2hhcnRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBCYXJDaGFydE1vZHVsZSB7fVxuIl19