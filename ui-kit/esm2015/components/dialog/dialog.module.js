import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AlertModule } from '@sofico-framework/ui-kit/components/alert';
import { ButtonModule } from '@sofico-framework/ui-kit/components/button';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { FocusModule } from '@sofico-framework/ui-kit/directives/focus';
import { AcknowledgeDialogComponent } from './acknowledge-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DialogInnerComponent } from './dialog-inner.component';
import { DialogComponent } from './dialog.component';
import { InteractiveWarningDialogComponent } from './interactive-warning-dialog.component';
import { DialogService } from './services/dialog.service';
export class DialogModule {
}
DialogModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DialogComponent,
                    DialogInnerComponent,
                    ConfirmDialogComponent,
                    AcknowledgeDialogComponent,
                    InteractiveWarningDialogComponent
                ],
                exports: [
                    DialogComponent,
                    DialogInnerComponent,
                    ConfirmDialogComponent,
                    AcknowledgeDialogComponent,
                    InteractiveWarningDialogComponent
                ],
                imports: [
                    CommonModule,
                    PortalModule,
                    OverlayModule,
                    SvgIconModule,
                    TranslateModule,
                    ButtonModule,
                    AlertModule,
                    A11yModule,
                    FocusModule
                ],
                providers: [DialogService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBOEIxRCxNQUFNLE9BQU8sWUFBWTs7O1lBNUJ4QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixzQkFBc0I7b0JBQ3RCLDBCQUEwQjtvQkFDMUIsaUNBQWlDO2lCQUNsQztnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIsMEJBQTBCO29CQUMxQixpQ0FBaUM7aUJBQ2xDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixXQUFXO29CQUNYLFVBQVU7b0JBQ1YsV0FBVztpQkFDWjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvYWxlcnQnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB7IFN2Z0ljb25Nb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9zdmctaWNvbic7XG5pbXBvcnQgeyBGb2N1c01vZHVsZSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9kaXJlY3RpdmVzL2ZvY3VzJztcbmltcG9ydCB7IEFja25vd2xlZGdlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9hY2tub3dsZWRnZS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW50ZXJhY3RpdmVXYXJuaW5nRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS13YXJuaW5nLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEaWFsb2dDb21wb25lbnQsXG4gICAgRGlhbG9nSW5uZXJDb21wb25lbnQsXG4gICAgQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcbiAgICBBY2tub3dsZWRnZURpYWxvZ0NvbXBvbmVudCxcbiAgICBJbnRlcmFjdGl2ZVdhcm5pbmdEaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIERpYWxvZ0NvbXBvbmVudCxcbiAgICBEaWFsb2dJbm5lckNvbXBvbmVudCxcbiAgICBDb25maXJtRGlhbG9nQ29tcG9uZW50LFxuICAgIEFja25vd2xlZGdlRGlhbG9nQ29tcG9uZW50LFxuICAgIEludGVyYWN0aXZlV2FybmluZ0RpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIFN2Z0ljb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBBbGVydE1vZHVsZSxcbiAgICBBMTF5TW9kdWxlLFxuICAgIEZvY3VzTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW0RpYWxvZ1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ01vZHVsZSB7fVxuIl19