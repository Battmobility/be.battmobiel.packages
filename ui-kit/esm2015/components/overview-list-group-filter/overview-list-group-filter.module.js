import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputSingleSelectModule } from '@sofico-framework/ui-kit/components/input-single-select';
import { TabsModule } from '@sofico-framework/ui-kit/components/tabs';
import { OverviewListGroupFilterComponent } from './overview-list-group-filter.component';
export class OverviewListGroupFilterModule {
}
OverviewListGroupFilterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [OverviewListGroupFilterComponent],
                exports: [OverviewListGroupFilterComponent],
                imports: [
                    CommonModule,
                    TranslateModule.forChild(),
                    InputSingleSelectModule,
                    ReactiveFormsModule,
                    TabsModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctbGlzdC1ncm91cC1maWx0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9vdmVydmlldy1saXN0LWdyb3VwLWZpbHRlci9vdmVydmlldy1saXN0LWdyb3VwLWZpbHRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQWExRixNQUFNLE9BQU8sNkJBQTZCOzs7WUFYekMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2dCQUNoRCxPQUFPLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDM0MsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZUFBZSxDQUFDLFFBQVEsRUFBRTtvQkFDMUIsdUJBQXVCO29CQUN2QixtQkFBbUI7b0JBQ25CLFVBQVU7aUJBQ1g7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRTaW5nbGVTZWxlY3RNb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9pbnB1dC1zaW5nbGUtc2VsZWN0JztcbmltcG9ydCB7IFRhYnNNb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy90YWJzJztcbmltcG9ydCB7IE92ZXJ2aWV3TGlzdEdyb3VwRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9vdmVydmlldy1saXN0LWdyb3VwLWZpbHRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtPdmVydmlld0xpc3RHcm91cEZpbHRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPdmVydmlld0xpc3RHcm91cEZpbHRlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvckNoaWxkKCksXG4gICAgSW5wdXRTaW5nbGVTZWxlY3RNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBUYWJzTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXdMaXN0R3JvdXBGaWx0ZXJNb2R1bGUge31cbiJdfQ==