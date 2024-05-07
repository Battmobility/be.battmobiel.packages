import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DropDownModule } from '@sofico-framework/ui-kit/components/drop-down';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { DropDownMenuComponent } from './drop-down-menu.component';
export class DropDownMenuModule {
}
DropDownMenuModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DropDownMenuComponent],
                exports: [DropDownMenuComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    DropDownModule,
                    SvgIconModule,
                    TranslateModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLW1lbnUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kcm9wLWRvd24tbWVudS9kcm9wLWRvd24tbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBYW5FLE1BQU0sT0FBTyxrQkFBa0I7OztZQVg5QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNoQyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixlQUFlO2lCQUNoQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBEcm9wRG93bk1vZHVsZSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2Ryb3AtZG93bic7XG5pbXBvcnQgeyBTdmdJY29uTW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvc3ZnLWljb24nO1xuaW1wb3J0IHsgRHJvcERvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnLi9kcm9wLWRvd24tbWVudS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEcm9wRG93bk1lbnVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbRHJvcERvd25NZW51Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRHJvcERvd25Nb2R1bGUsXG4gICAgU3ZnSWNvbk1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bk1lbnVNb2R1bGUge31cbiJdfQ==