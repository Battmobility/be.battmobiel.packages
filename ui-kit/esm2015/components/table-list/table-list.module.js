import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule } from '@sofico-framework/ui-kit/components/loading';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { TableListSearchBarModule } from '@sofico-framework/ui-kit/components/table-list-search-bar';
import { UtilsPipesModule } from '@sofico-framework/utils';
import { TableListItemModule } from '../table-list-item/table-list-item.module';
import { TableListComponent } from './table-list.component';
export class TableListModule {
}
TableListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TableListComponent],
                imports: [
                    CommonModule,
                    TableListSearchBarModule,
                    LoadingModule,
                    TranslateModule,
                    UtilsPipesModule,
                    SvgIconModule,
                    TableListItemModule
                ],
                exports: [TableListComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL3RhYmxlLWxpc3QvdGFibGUtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFlNUQsTUFBTSxPQUFPLGVBQWU7OztZQWIzQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsYUFBYTtvQkFDYixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IExvYWRpbmdNb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9sb2FkaW5nJztcbmltcG9ydCB7IFN2Z0ljb25Nb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9zdmctaWNvbic7XG5pbXBvcnQgeyBUYWJsZUxpc3RTZWFyY2hCYXJNb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy90YWJsZS1saXN0LXNlYXJjaC1iYXInO1xuaW1wb3J0IHsgVXRpbHNQaXBlc01vZHVsZSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcbmltcG9ydCB7IFRhYmxlTGlzdEl0ZW1Nb2R1bGUgfSBmcm9tICcuLi90YWJsZS1saXN0LWl0ZW0vdGFibGUtbGlzdC1pdGVtLm1vZHVsZSc7XG5pbXBvcnQgeyBUYWJsZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLWxpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVGFibGVMaXN0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUYWJsZUxpc3RTZWFyY2hCYXJNb2R1bGUsXG4gICAgTG9hZGluZ01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgVXRpbHNQaXBlc01vZHVsZSxcbiAgICBTdmdJY29uTW9kdWxlLFxuICAgIFRhYmxlTGlzdEl0ZW1Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1RhYmxlTGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVMaXN0TW9kdWxlIHt9XG4iXX0=