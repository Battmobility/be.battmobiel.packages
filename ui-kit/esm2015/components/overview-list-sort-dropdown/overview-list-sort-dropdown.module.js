import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@sofico-framework/ui-kit/components/button';
import { InputSingleSelectModule } from '@sofico-framework/ui-kit/components/input-single-select';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { OverviewListSortDropdownComponent } from './overview-list-sort-dropdown.component';
export class OverviewListSortDropdownModule {
}
OverviewListSortDropdownModule.decorators = [
    { type: NgModule, args: [{
                declarations: [OverviewListSortDropdownComponent],
                exports: [OverviewListSortDropdownComponent],
                imports: [
                    CommonModule,
                    SvgIconModule,
                    TranslateModule,
                    InputSingleSelectModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ButtonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctbGlzdC1zb3J0LWRyb3Bkb3duLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvb3ZlcnZpZXctbGlzdC1zb3J0LWRyb3Bkb3duL292ZXJ2aWV3LWxpc3Qtc29ydC1kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBZTVGLE1BQU0sT0FBTyw4QkFBOEI7OztZQWIxQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUNBQWlDLENBQUM7Z0JBQ2pELE9BQU8sRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2dCQUM1QyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsdUJBQXVCO29CQUN2QixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB7IElucHV0U2luZ2xlU2VsZWN0TW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtc2luZ2xlLXNlbGVjdCc7XG5pbXBvcnQgeyBTdmdJY29uTW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvc3ZnLWljb24nO1xuaW1wb3J0IHsgT3ZlcnZpZXdMaXN0U29ydERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9vdmVydmlldy1saXN0LXNvcnQtZHJvcGRvd24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbT3ZlcnZpZXdMaXN0U29ydERyb3Bkb3duQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW092ZXJ2aWV3TGlzdFNvcnREcm9wZG93bkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU3ZnSWNvbk1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgSW5wdXRTaW5nbGVTZWxlY3RNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBCdXR0b25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBPdmVydmlld0xpc3RTb3J0RHJvcGRvd25Nb2R1bGUge31cbiJdfQ==