import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { VerticalStepsComponent } from './vertical-steps.component';
export class VerticalStepsModule {
}
VerticalStepsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [VerticalStepsComponent],
                imports: [CommonModule, SvgIconModule],
                exports: [VerticalStepsComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtc3RlcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy92ZXJ0aWNhbC1zdGVwcy92ZXJ0aWNhbC1zdGVwcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBT3BFLE1BQU0sT0FBTyxtQkFBbUI7OztZQUwvQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdmdJY29uTW9kdWxlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvc3ZnLWljb24nO1xuaW1wb3J0IHsgVmVydGljYWxTdGVwc0NvbXBvbmVudCB9IGZyb20gJy4vdmVydGljYWwtc3RlcHMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVmVydGljYWxTdGVwc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFN2Z0ljb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbVmVydGljYWxTdGVwc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVmVydGljYWxTdGVwc01vZHVsZSB7fVxuIl19