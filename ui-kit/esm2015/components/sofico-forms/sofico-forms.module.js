import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '@sofico-framework/ui-kit/components/form';
import { InputModule } from '@sofico-framework/ui-kit/components/input';
import { InputWrapperModule } from '@sofico-framework/ui-kit/components/input-wrapper';
export class SoficoFormsModule {
}
SoficoFormsModule.decorators = [
    { type: NgModule, args: [{
                exports: [ReactiveFormsModule, InputWrapperModule, FormModule, InputModule],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    InputWrapperModule,
                    FormModule,
                    InputModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29maWNvLWZvcm1zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvc29maWNvLWZvcm1zL3NvZmljby1mb3Jtcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQVl2RixNQUFNLE9BQU8saUJBQWlCOzs7WUFWN0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUM7Z0JBQzNFLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixVQUFVO29CQUNWLFdBQVc7aUJBQ1o7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Nb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCB7IElucHV0TW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQnO1xuaW1wb3J0IHsgSW5wdXRXcmFwcGVyTW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtd3JhcHBlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtSZWFjdGl2ZUZvcm1zTW9kdWxlLCBJbnB1dFdyYXBwZXJNb2R1bGUsIEZvcm1Nb2R1bGUsIElucHV0TW9kdWxlXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIElucHV0V3JhcHBlck1vZHVsZSxcbiAgICBGb3JtTW9kdWxlLFxuICAgIElucHV0TW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU29maWNvRm9ybXNNb2R1bGUge31cbiJdfQ==