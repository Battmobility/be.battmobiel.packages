import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ConfigService } from '@sofico-framework/app-config';
import { WindowRefService } from '@sofico-framework/utils';
import { OAuthModule, OAuthResourceServerErrorHandler, OAuthStorage } from 'angular-oauth2-oidc';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { GuestGuard } from './guards/guest.guard';
import { CustomOAuthInterceptor } from './interceptors/custom-oauth.interceptor';
import { ResourceServerAutoLogoutErrorHandler } from './interceptors/resource-server-auto-logout-error-handler';
import { AuthenticatedResultService } from './services/authenticated-result.service';
import { AuthenticationService } from './services/authentication.service';
import { SessionStorageOAuthStore } from './stores/session-storage-oauth.store';
export class AuthenticationModule {
    constructor(parentModule, windowRefService, httpClient, configService) {
        if (parentModule) {
            throw new Error('AuthenticationModule is already loaded. Import in your base AppModule only.');
        }
        if (!windowRefService) {
            throw new Error('You need to import the UtilServicesModule in your AppModule!');
        }
        if (!httpClient) {
            throw new Error('You need to import the HttpClientModule in your AppModule!');
        }
        if (!configService) {
            throw new Error('You need to import the AppConfigModule in your AppModule!');
        }
    }
}
AuthenticationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OAuthModule.forRoot()],
                declarations: [],
                providers: [
                    AuthenticationService,
                    AuthenticatedResultService,
                    AuthenticatedGuard,
                    GuestGuard,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: CustomOAuthInterceptor,
                        multi: true
                    },
                    {
                        provide: OAuthStorage,
                        useClass: SessionStorageOAuthStore
                    },
                    {
                        provide: OAuthResourceServerErrorHandler,
                        useClass: ResourceServerAutoLogoutErrorHandler
                    }
                ]
            },] }
];
AuthenticationModule.ctorParameters = () => [
    { type: AuthenticationModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: WindowRefService, decorators: [{ type: Optional }] },
    { type: HttpClientModule, decorators: [{ type: Optional }] },
    { type: ConfigService, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay9hdXRoZW50aWNhdGlvbi9zcmMvbGliL2F1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQ0wsV0FBVyxFQUNYLCtCQUErQixFQUMvQixZQUFZLEVBQ2IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDakYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDaEgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUF5QmhGLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFDMEIsWUFBa0MsRUFDOUMsZ0JBQWtDLEVBQ2xDLFVBQTRCLEVBQzVCLGFBQTRCO1FBRXhDLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IsNkVBQTZFLENBQzlFLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQixNQUFNLElBQUksS0FBSyxDQUNiLDhEQUE4RCxDQUMvRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FDYiw0REFBNEQsQ0FDN0QsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUNiLDJEQUEyRCxDQUM1RCxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7WUFsREYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzlDLFlBQVksRUFBRSxFQUFFO2dCQUNoQixTQUFTLEVBQUU7b0JBQ1QscUJBQXFCO29CQUNyQiwwQkFBMEI7b0JBQzFCLGtCQUFrQjtvQkFDbEIsVUFBVTtvQkFDVjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixRQUFRLEVBQUUsc0JBQXNCO3dCQUNoQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsWUFBWTt3QkFDckIsUUFBUSxFQUFFLHdCQUF3QjtxQkFDbkM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLCtCQUErQjt3QkFDeEMsUUFBUSxFQUFFLG9DQUFvQztxQkFDL0M7aUJBQ0Y7YUFDRjs7O1lBR3lDLG9CQUFvQix1QkFBekQsUUFBUSxZQUFJLFFBQVE7WUF4Q2hCLGdCQUFnQix1QkF5Q3BCLFFBQVE7WUE1Q2UsZ0JBQWdCLHVCQTZDdkMsUUFBUTtZQTNDSixhQUFhLHVCQTRDakIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay9hcHAtY29uZmlnJztcbmltcG9ydCB7IFdpbmRvd1JlZlNlcnZpY2UgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91dGlscyc7XG5pbXBvcnQge1xuICBPQXV0aE1vZHVsZSxcbiAgT0F1dGhSZXNvdXJjZVNlcnZlckVycm9ySGFuZGxlcixcbiAgT0F1dGhTdG9yYWdlXG59IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRlZEd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvYXV0aGVudGljYXRlZC5ndWFyZCc7XG5pbXBvcnQgeyBHdWVzdEd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvZ3Vlc3QuZ3VhcmQnO1xuaW1wb3J0IHsgQ3VzdG9tT0F1dGhJbnRlcmNlcHRvciB9IGZyb20gJy4vaW50ZXJjZXB0b3JzL2N1c3RvbS1vYXV0aC5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBSZXNvdXJjZVNlcnZlckF1dG9Mb2dvdXRFcnJvckhhbmRsZXIgfSBmcm9tICcuL2ludGVyY2VwdG9ycy9yZXNvdXJjZS1zZXJ2ZXItYXV0by1sb2dvdXQtZXJyb3ItaGFuZGxlcic7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGVkUmVzdWx0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aGVudGljYXRlZC1yZXN1bHQuc2VydmljZSc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTZXNzaW9uU3RvcmFnZU9BdXRoU3RvcmUgfSBmcm9tICcuL3N0b3Jlcy9zZXNzaW9uLXN0b3JhZ2Utb2F1dGguc3RvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPQXV0aE1vZHVsZS5mb3JSb290KCldLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgQXV0aGVudGljYXRlZFJlc3VsdFNlcnZpY2UsXG4gICAgQXV0aGVudGljYXRlZEd1YXJkLFxuICAgIEd1ZXN0R3VhcmQsXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogQ3VzdG9tT0F1dGhJbnRlcmNlcHRvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBPQXV0aFN0b3JhZ2UsXG4gICAgICB1c2VDbGFzczogU2Vzc2lvblN0b3JhZ2VPQXV0aFN0b3JlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBPQXV0aFJlc291cmNlU2VydmVyRXJyb3JIYW5kbGVyLFxuICAgICAgdXNlQ2xhc3M6IFJlc291cmNlU2VydmVyQXV0b0xvZ291dEVycm9ySGFuZGxlclxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQXV0aGVudGljYXRpb25Nb2R1bGUsXG4gICAgQE9wdGlvbmFsKCkgd2luZG93UmVmU2VydmljZTogV2luZG93UmVmU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEBPcHRpb25hbCgpIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2VcbiAgKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQXV0aGVudGljYXRpb25Nb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpbiB5b3VyIGJhc2UgQXBwTW9kdWxlIG9ubHkuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCF3aW5kb3dSZWZTZXJ2aWNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdZb3UgbmVlZCB0byBpbXBvcnQgdGhlIFV0aWxTZXJ2aWNlc01vZHVsZSBpbiB5b3VyIEFwcE1vZHVsZSEnXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWh0dHBDbGllbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1lvdSBuZWVkIHRvIGltcG9ydCB0aGUgSHR0cENsaWVudE1vZHVsZSBpbiB5b3VyIEFwcE1vZHVsZSEnXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWNvbmZpZ1NlcnZpY2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1lvdSBuZWVkIHRvIGltcG9ydCB0aGUgQXBwQ29uZmlnTW9kdWxlIGluIHlvdXIgQXBwTW9kdWxlISdcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=