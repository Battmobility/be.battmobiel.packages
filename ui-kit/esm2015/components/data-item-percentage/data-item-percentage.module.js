import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataItemComponentModule } from '@sofico-framework/ui-kit/components/data-item';
import { PercentageComponentModule } from '@sofico-framework/ui-kit/components/percentage';
import { DataItemPercentageComponent } from './data-item-percentage.component';
export class DataItemPercentageModule {
}
DataItemPercentageModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DataItemPercentageComponent],
                imports: [CommonModule, DataItemComponentModule, PercentageComponentModule],
                exports: [DataItemPercentageComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pdGVtLXBlcmNlbnRhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kYXRhLWl0ZW0tcGVyY2VudGFnZS9kYXRhLWl0ZW0tcGVyY2VudGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDM0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFPL0UsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBTHBDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDM0MsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLHVCQUF1QixFQUFFLHlCQUF5QixDQUFDO2dCQUMzRSxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUl0ZW1Db21wb25lbnRNb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kYXRhLWl0ZW0nO1xuaW1wb3J0IHsgUGVyY2VudGFnZUNvbXBvbmVudE1vZHVsZSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL3BlcmNlbnRhZ2UnO1xuaW1wb3J0IHsgRGF0YUl0ZW1QZXJjZW50YWdlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLWl0ZW0tcGVyY2VudGFnZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEYXRhSXRlbVBlcmNlbnRhZ2VDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEYXRhSXRlbUNvbXBvbmVudE1vZHVsZSwgUGVyY2VudGFnZUNvbXBvbmVudE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtEYXRhSXRlbVBlcmNlbnRhZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFJdGVtUGVyY2VudGFnZU1vZHVsZSB7fVxuIl19