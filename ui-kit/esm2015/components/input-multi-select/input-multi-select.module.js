import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { InputMultiSelectComponent } from './input-multi-select.component';
export class InputMultiSelectModule {
}
InputMultiSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    NzSelectModule,
                    FormsModule,
                    TranslateModule
                ],
                declarations: [InputMultiSelectComponent],
                exports: [InputMultiSelectComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbXVsdGktc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtbXVsdGktc2VsZWN0L2lucHV0LW11bHRpLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFhM0UsTUFBTSxPQUFPLHNCQUFzQjs7O1lBWGxDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2QsV0FBVztvQkFDWCxlQUFlO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBOelNlbGVjdE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2VsZWN0JztcbmltcG9ydCB7IElucHV0TXVsdGlTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LW11bHRpLXNlbGVjdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTnpTZWxlY3RNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0lucHV0TXVsdGlTZWxlY3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSW5wdXRNdWx0aVNlbGVjdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRNdWx0aVNlbGVjdE1vZHVsZSB7fVxuIl19