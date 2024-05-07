import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '@sofico-framework/app-config';
import { map } from 'rxjs/operators';
import { AuthenticatedResultService } from '../services/authenticated-result.service';
import { AuthenticationService } from '../services/authentication.service';
export class GuestGuard {
    constructor(authenticationService, authenticatedResultService, configService, router) {
        this.authenticationService = authenticationService;
        this.authenticatedResultService = authenticatedResultService;
        this.configService = configService;
        this.router = router;
    }
    canActivate() {
        return this.authenticatedResultService.authenticatedResult$.pipe(map((authenticated) => {
            if (authenticated) {
                this.router.navigate(['/']);
                return false;
            }
            else {
                if (this.configService.config.auth.grant === 'implicit') {
                    this.authenticationService.loginWithSingleSignOn();
                    return false;
                }
            }
            return !authenticated;
        }));
    }
}
GuestGuard.decorators = [
    { type: Injectable }
];
GuestGuard.ctorParameters = () => [
    { type: AuthenticationService },
    { type: AuthenticatedResultService },
    { type: ConfigService },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3QuZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL2F1dGhlbnRpY2F0aW9uL3NyYy9saWIvZ3VhcmRzL2d1ZXN0Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHM0UsTUFBTSxPQUFPLFVBQVU7SUFDckIsWUFDVSxxQkFBNEMsRUFDNUMsMEJBQXNELEVBQ3RELGFBQTRCLEVBQzVCLE1BQWM7UUFIZCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDO0lBRUosV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FDOUQsR0FBRyxDQUFDLENBQUMsYUFBc0IsRUFBRSxFQUFFO1lBQzdCLElBQUksYUFBYSxFQUFFO2dCQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTtvQkFDdkQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQ25ELE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7WUFDRCxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUF4QkYsVUFBVTs7O1lBRkYscUJBQXFCO1lBRHJCLDBCQUEwQjtZQUgxQixhQUFhO1lBREEsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL2FwcC1jb25maWcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRlZFJlc3VsdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGVkLXJlc3VsdC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3Vlc3RHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0ZWRSZXN1bHRTZXJ2aWNlOiBBdXRoZW50aWNhdGVkUmVzdWx0U2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZFJlc3VsdFNlcnZpY2UuYXV0aGVudGljYXRlZFJlc3VsdCQucGlwZShcbiAgICAgIG1hcCgoYXV0aGVudGljYXRlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnU2VydmljZS5jb25maWcuYXV0aC5ncmFudCA9PT0gJ2ltcGxpY2l0Jykge1xuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW5XaXRoU2luZ2xlU2lnbk9uKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhYXV0aGVudGljYXRlZDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19