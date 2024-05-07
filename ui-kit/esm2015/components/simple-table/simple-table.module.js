import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule } from '@sofico-framework/ui-kit/components/loading';
import { SimpleTableItemModule } from '@sofico-framework/ui-kit/components/simple-table-item';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { UtilsPipesModule } from '@sofico-framework/utils';
import { SimpleTableComponent } from './simple-table.component';
export class SimpleTableModule {
}
SimpleTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SimpleTableComponent],
                exports: [SimpleTableComponent],
                imports: [
                    CommonModule,
                    SimpleTableItemModule,
                    LoadingModule,
                    TranslateModule,
                    UtilsPipesModule,
                    SvgIconModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvc2ltcGxlLXRhYmxlL3NpbXBsZS10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFjaEUsTUFBTSxPQUFPLGlCQUFpQjs7O1lBWjdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHFCQUFxQjtvQkFDckIsYUFBYTtvQkFDYixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsYUFBYTtpQkFDZDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IExvYWRpbmdNb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9sb2FkaW5nJztcbmltcG9ydCB7IFNpbXBsZVRhYmxlSXRlbU1vZHVsZSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL3NpbXBsZS10YWJsZS1pdGVtJztcbmltcG9ydCB7IFN2Z0ljb25Nb2R1bGUgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9zdmctaWNvbic7XG5pbXBvcnQgeyBVdGlsc1BpcGVzTW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuaW1wb3J0IHsgU2ltcGxlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZS10YWJsZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTaW1wbGVUYWJsZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTaW1wbGVUYWJsZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU2ltcGxlVGFibGVJdGVtTW9kdWxlLFxuICAgIExvYWRpbmdNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIFV0aWxzUGlwZXNNb2R1bGUsXG4gICAgU3ZnSWNvbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZVRhYmxlTW9kdWxlIHt9XG4iXX0=