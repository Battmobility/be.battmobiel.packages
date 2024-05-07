import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RoutingAllowedGuard } from './routing-allowed.guard';
export class UtilGuardsModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('UtilGuardsModule is already loaded. Import in your base AppModule only.');
        }
    }
}
UtilGuardsModule.decorators = [
    { type: NgModule, args: [{
                providers: [RoutingAllowedGuard]
            },] }
];
UtilGuardsModule.ctorParameters = () => [
    { type: UtilGuardsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC1ndWFyZHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91dGlscy9zcmMvbGliL2d1YXJkcy91dGlsLWd1YXJkcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSzlELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFBb0MsWUFBOEI7UUFDaEUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYix5RUFBeUUsQ0FDMUUsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7O1lBVkYsUUFBUSxTQUFDO2dCQUNSLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDOzs7WUFFbUQsZ0JBQWdCLHVCQUFyRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdBbGxvd2VkR3VhcmQgfSBmcm9tICcuL3JvdXRpbmctYWxsb3dlZC5ndWFyZCc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1JvdXRpbmdBbGxvd2VkR3VhcmRdXG59KVxuZXhwb3J0IGNsYXNzIFV0aWxHdWFyZHNNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFV0aWxHdWFyZHNNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdVdGlsR3VhcmRzTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaW4geW91ciBiYXNlIEFwcE1vZHVsZSBvbmx5LidcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=