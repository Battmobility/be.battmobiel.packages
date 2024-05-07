import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule } from '@sofico-framework/ui-kit/components/loading';
import { OverviewListItemModule } from '@sofico-framework/ui-kit/components/overview-list-item';
import { UtilsPipesModule } from '@sofico-framework/utils';
import { SimpleListComponent } from './simple-list.component';
export class SimpleListModule {
}
SimpleListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SimpleListComponent],
                exports: [SimpleListComponent],
                imports: [
                    CommonModule,
                    OverviewListItemModule,
                    LoadingModule,
                    TranslateModule,
                    UtilsPipesModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9zaW1wbGUtbGlzdC9zaW1wbGUtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQWE5RCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFYNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDOUIsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osc0JBQXNCO29CQUN0QixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsZ0JBQWdCO2lCQUNqQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IExvYWRpbmdNb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9sb2FkaW5nJztcbmltcG9ydCB7IE92ZXJ2aWV3TGlzdEl0ZW1Nb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9vdmVydmlldy1saXN0LWl0ZW0nO1xuaW1wb3J0IHsgVXRpbHNQaXBlc01vZHVsZSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcbmltcG9ydCB7IFNpbXBsZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZS1saXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NpbXBsZUxpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2ltcGxlTGlzdENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgT3ZlcnZpZXdMaXN0SXRlbU1vZHVsZSxcbiAgICBMb2FkaW5nTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBVdGlsc1BpcGVzTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlTGlzdE1vZHVsZSB7fVxuIl19