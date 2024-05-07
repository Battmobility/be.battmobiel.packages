import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PageTitleService } from './page-title.service';
import { PAGE_TITLE_TOKEN } from './page-title.token';
export class PageTitleModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('PageTitleModule is already loaded. Import in your base AppModule only.');
        }
    }
    /**
     * Optional configuration
     * @param pageTitleConfig some basic settings used by PageTitleService
     */
    static forRoot(pageTitleConfig) {
        return {
            ngModule: PageTitleModule,
            providers: [
                {
                    provide: PAGE_TITLE_TOKEN,
                    useValue: pageTitleConfig
                }
            ]
        };
    }
}
PageTitleModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TranslateModule],
                providers: [PageTitleService]
            },] }
];
PageTitleModule.ctorParameters = () => [
    { type: PageTitleModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10aXRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvcGFnZS10aXRsZS9wYWdlLXRpdGxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU10RCxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUFvQyxZQUE2QjtRQUMvRCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLHdFQUF3RSxDQUN6RSxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FDWixlQUFnQztRQUVoQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxlQUFlO2lCQUMxQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTdCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztnQkFDeEMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDOUI7OztZQUVtRCxlQUFlLHVCQUFwRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBQYWdlVGl0bGVDb25maWcgfSBmcm9tICcuL3BhZ2UtdGl0bGUuY29uZmlnJztcbmltcG9ydCB7IFBhZ2VUaXRsZVNlcnZpY2UgfSBmcm9tICcuL3BhZ2UtdGl0bGUuc2VydmljZSc7XG5pbXBvcnQgeyBQQUdFX1RJVExFX1RPS0VOIH0gZnJvbSAnLi9wYWdlLXRpdGxlLnRva2VuJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVHJhbnNsYXRlTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbUGFnZVRpdGxlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZVRpdGxlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBQYWdlVGl0bGVNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdQYWdlVGl0bGVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpbiB5b3VyIGJhc2UgQXBwTW9kdWxlIG9ubHkuJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3B0aW9uYWwgY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0gcGFnZVRpdGxlQ29uZmlnIHNvbWUgYmFzaWMgc2V0dGluZ3MgdXNlZCBieSBQYWdlVGl0bGVTZXJ2aWNlXG4gICAqL1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBwYWdlVGl0bGVDb25maWc6IFBhZ2VUaXRsZUNvbmZpZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFBhZ2VUaXRsZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUGFnZVRpdGxlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBQQUdFX1RJVExFX1RPS0VOLFxuICAgICAgICAgIHVzZVZhbHVlOiBwYWdlVGl0bGVDb25maWdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==