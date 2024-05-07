import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { EditableChipComponent } from './editable-chip.component';
export class EditableChipModule {
}
EditableChipModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EditableChipComponent],
                imports: [CommonModule, SvgIconModule],
                exports: [EditableChipComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtY2hpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2VkaXRhYmxlLWNoaXAvZWRpdGFibGUtY2hpcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBT2xFLE1BQU0sT0FBTyxrQkFBa0I7OztZQUw5QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdmdJY29uTW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvc3ZnLWljb24nO1xuaW1wb3J0IHsgRWRpdGFibGVDaGlwQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0YWJsZS1jaGlwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0VkaXRhYmxlQ2hpcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFN2Z0ljb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbRWRpdGFibGVDaGlwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBFZGl0YWJsZUNoaXBNb2R1bGUge31cbiJdfQ==