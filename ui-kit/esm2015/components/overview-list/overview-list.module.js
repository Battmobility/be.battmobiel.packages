import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { InViewModule } from '@sofico-framework/ui-kit/components/in-view';
import { LoadingModule } from '@sofico-framework/ui-kit/components/loading';
import { OverviewListGroupFilterModule } from '@sofico-framework/ui-kit/components/overview-list-group-filter';
import { OverviewListSearchBarModule } from '@sofico-framework/ui-kit/components/overview-list-search-bar';
import { OverviewListSortDropdownModule } from '@sofico-framework/ui-kit/components/overview-list-sort-dropdown';
import { OverviewListItemModule } from '../overview-list-item/overview-list-item.module';
import { OverviewListComponent } from './overview-list.component';
export class OverviewListModule {
}
OverviewListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [OverviewListComponent],
                exports: [OverviewListComponent],
                imports: [
                    CommonModule,
                    OverviewListItemModule,
                    LoadingModule,
                    OverviewListSearchBarModule,
                    OverviewListGroupFilterModule,
                    TranslateModule,
                    OverviewListSortDropdownModule,
                    InViewModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL292ZXJ2aWV3LWxpc3Qvb3ZlcnZpZXctbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDL0csT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDM0csT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDakgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFnQmxFLE1BQU0sT0FBTyxrQkFBa0I7OztZQWQ5QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNoQyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixzQkFBc0I7b0JBQ3RCLGFBQWE7b0JBQ2IsMkJBQTJCO29CQUMzQiw2QkFBNkI7b0JBQzdCLGVBQWU7b0JBQ2YsOEJBQThCO29CQUM5QixZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgSW5WaWV3TW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW4tdmlldyc7XG5pbXBvcnQgeyBMb2FkaW5nTW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvbG9hZGluZyc7XG5pbXBvcnQgeyBPdmVydmlld0xpc3RHcm91cEZpbHRlck1vZHVsZSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL292ZXJ2aWV3LWxpc3QtZ3JvdXAtZmlsdGVyJztcbmltcG9ydCB7IE92ZXJ2aWV3TGlzdFNlYXJjaEJhck1vZHVsZSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL292ZXJ2aWV3LWxpc3Qtc2VhcmNoLWJhcic7XG5pbXBvcnQgeyBPdmVydmlld0xpc3RTb3J0RHJvcGRvd25Nb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9vdmVydmlldy1saXN0LXNvcnQtZHJvcGRvd24nO1xuaW1wb3J0IHsgT3ZlcnZpZXdMaXN0SXRlbU1vZHVsZSB9IGZyb20gJy4uL292ZXJ2aWV3LWxpc3QtaXRlbS9vdmVydmlldy1saXN0LWl0ZW0ubW9kdWxlJztcbmltcG9ydCB7IE92ZXJ2aWV3TGlzdENvbXBvbmVudCB9IGZyb20gJy4vb3ZlcnZpZXctbGlzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtPdmVydmlld0xpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbT3ZlcnZpZXdMaXN0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPdmVydmlld0xpc3RJdGVtTW9kdWxlLFxuICAgIExvYWRpbmdNb2R1bGUsXG4gICAgT3ZlcnZpZXdMaXN0U2VhcmNoQmFyTW9kdWxlLFxuICAgIE92ZXJ2aWV3TGlzdEdyb3VwRmlsdGVyTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBPdmVydmlld0xpc3RTb3J0RHJvcGRvd25Nb2R1bGUsXG4gICAgSW5WaWV3TW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXdMaXN0TW9kdWxlIHt9XG4iXX0=