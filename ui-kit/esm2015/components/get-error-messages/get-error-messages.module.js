import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AlertModule } from '@sofico-framework/ui-kit/components/alert';
import { GetErrorMessagesComponent } from './get-error-messages.component';
export class GetErrorMessagesModule {
}
GetErrorMessagesModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TranslateModule, AlertModule],
                declarations: [GetErrorMessagesComponent],
                exports: [GetErrorMessagesComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVycm9yLW1lc3NhZ2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZ2V0LWVycm9yLW1lc3NhZ2VzL2dldC1lcnJvci1tZXNzYWdlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU8zRSxNQUFNLE9BQU8sc0JBQXNCOzs7WUFMbEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDO2dCQUNyRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9hbGVydCc7XG5pbXBvcnQgeyBHZXRFcnJvck1lc3NhZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9nZXQtZXJyb3ItbWVzc2FnZXMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVHJhbnNsYXRlTW9kdWxlLCBBbGVydE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0dldEVycm9yTWVzc2FnZXNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbR2V0RXJyb3JNZXNzYWdlc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgR2V0RXJyb3JNZXNzYWdlc01vZHVsZSB7fVxuIl19