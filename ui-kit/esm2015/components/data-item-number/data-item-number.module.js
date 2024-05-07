import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataItemComponentModule } from '@sofico-framework/ui-kit/components/data-item';
import { NumberComponentModule } from '@sofico-framework/ui-kit/components/number';
import { DataItemNumberComponent } from './data-item-number.component';
export class DataItemNumberModule {
}
DataItemNumberModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DataItemNumberComponent],
                imports: [CommonModule, DataItemComponentModule, NumberComponentModule],
                exports: [DataItemNumberComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pdGVtLW51bWJlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2RhdGEtaXRlbS1udW1iZXIvZGF0YS1pdGVtLW51bWJlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPdkUsTUFBTSxPQUFPLG9CQUFvQjs7O1lBTGhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixDQUFDO2dCQUN2RSxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUl0ZW1Db21wb25lbnRNb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kYXRhLWl0ZW0nO1xuaW1wb3J0IHsgTnVtYmVyQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvbnVtYmVyJztcbmltcG9ydCB7IERhdGFJdGVtTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLWl0ZW0tbnVtYmVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0RhdGFJdGVtTnVtYmVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGF0YUl0ZW1Db21wb25lbnRNb2R1bGUsIE51bWJlckNvbXBvbmVudE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtEYXRhSXRlbU51bWJlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YUl0ZW1OdW1iZXJNb2R1bGUge31cbiJdfQ==