import { CommonModule } from '@angular/common';
import { Inject, NgModule, Optional, SkipSelf } from '@angular/core';
import { WindowRefService } from '@sofico-framework/utils';
import { APP_CONFIG_TOKEN } from './app-config.token';
import { ConfigService } from './services/config.service';
export class AppConfigModule {
    constructor(parentModule, appConfig, windowRefService) {
        this.appConfig = appConfig;
        if (parentModule) {
            throw new Error('AppConfigModule is already loaded. Import in your base AppModule only.');
        }
        if (!appConfig) {
            throw Error(`${AppConfigModule.name} should be imported using forRoot static method!`);
        }
        if (!windowRefService) {
            throw new Error('You need to import the UtilServicesModule in your AppModule!');
        }
    }
    static forRoot(config) {
        return {
            ngModule: AppConfigModule,
            providers: [
                {
                    provide: APP_CONFIG_TOKEN,
                    useValue: config
                }
            ]
        };
    }
}
AppConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [ConfigService]
            },] }
];
AppConfigModule.ctorParameters = () => [
    { type: AppConfigModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [APP_CONFIG_TOKEN,] }] },
    { type: WindowRefService, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL2FwcC1jb25maWcvc3JjL2xpYi9hcHAtY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPMUQsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFDMEIsWUFBNkIsRUFDUCxTQUFvQixFQUN0RCxnQkFBa0M7UUFEQSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBR2xFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2Isd0VBQXdFLENBQ3pFLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxNQUFNLEtBQUssQ0FDVCxHQUFHLGVBQWUsQ0FBQyxJQUFJLGtEQUFrRCxDQUMxRSxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FDYiw4REFBOEQsQ0FDL0QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBaUI7UUFDOUIsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFyQ0YsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQzNCOzs7WUFHeUMsZUFBZSx1QkFBcEQsUUFBUSxZQUFJLFFBQVE7NENBQ3BCLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO1lBWi9CLGdCQUFnQix1QkFhcEIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBJbmplY3QsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFdpbmRvd1JlZlNlcnZpY2UgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91dGlscyc7XG5pbXBvcnQgeyBBUFBfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9hcHAtY29uZmlnLnRva2VuJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4vdHlwZXMvYXBwLWNvbmZpZy50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW0NvbmZpZ1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbmZpZ01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQXBwQ29uZmlnTW9kdWxlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQVBQX0NPTkZJR19UT0tFTikgcHJpdmF0ZSBhcHBDb25maWc6IEFwcENvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSB3aW5kb3dSZWZTZXJ2aWNlOiBXaW5kb3dSZWZTZXJ2aWNlXG4gICkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0FwcENvbmZpZ01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGluIHlvdXIgYmFzZSBBcHBNb2R1bGUgb25seS4nXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWFwcENvbmZpZykge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIGAke0FwcENvbmZpZ01vZHVsZS5uYW1lfSBzaG91bGQgYmUgaW1wb3J0ZWQgdXNpbmcgZm9yUm9vdCBzdGF0aWMgbWV0aG9kIWBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghd2luZG93UmVmU2VydmljZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnWW91IG5lZWQgdG8gaW1wb3J0IHRoZSBVdGlsU2VydmljZXNNb2R1bGUgaW4geW91ciBBcHBNb2R1bGUhJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IEFwcENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QXBwQ29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBcHBDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9DT05GSUdfVE9LRU4sXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19