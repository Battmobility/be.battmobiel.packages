import { PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '@sofico-framework/app-config';
import { WindowRefService } from '@sofico-framework/utils';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { filter, take } from 'rxjs/operators';
import { AuthenticatedResultService } from './authenticated-result.service';
export class AuthenticationService {
    constructor(httpClient, windowRefService, oauthService, router, configService, authenticatedResultService, platformLocation) {
        this.httpClient = httpClient;
        this.windowRefService = windowRefService;
        this.oauthService = oauthService;
        this.router = router;
        this.configService = configService;
        this.authenticatedResultService = authenticatedResultService;
        this.platformLocation = platformLocation;
        this.location = this.windowRefService.nativeWindow
            .location;
        this.baseHref = this.location.origin + this.platformLocation.getBaseHrefFromDOM();
        if (this.configService.config.auth.grant === 'implicit') {
            this.configureLoginWithSSO();
            this.listenOnErrorReceivedAndLogout();
        }
        else {
            throw new Error('unsupported authentication grant');
        }
    }
    loginWithSingleSignOn() {
        this.oauthService.initImplicitFlow();
    }
    logout(pathBasedRedirectUri = false) {
        this.oauthService.redirectUri = this.calculateRedirectUri(pathBasedRedirectUri);
        this.oauthService.logOut();
    }
    logoutWithoutRedirect() {
        this.oauthService.logOut(true);
    }
    setPostLogoutRedirectUri(uri) {
        this.oauthService.postLogoutRedirectUri = uri;
    }
    configureLoginWithSSO() {
        const languageParam = this.getLanguageParam();
        const authConfig = {
            clientId: this.configService.config.auth.clientId,
            issuer: this.calculateIssuer(this.configService.config),
            redirectUri: this.calculateRedirectUri(true),
            silentRefreshRedirectUri: this.baseHref + 'silent-refresh.html',
            postLogoutRedirectUri: this.baseHref
        };
        this.oauthService.configure(authConfig);
        if (languageParam) {
            this.oauthService.customQueryParams = {
                // kc_locale because it set a cookie automatically
                // that contains the language parameter so it's saved
                // when you refresh and wait to long before you take an action
                kc_locale: languageParam
            };
        }
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService
            .loadDiscoveryDocumentAndTryLogin()
            .then(() => this.authenticatedResultService.setAuthenticatedResult(this.oauthService.hasValidIdToken()))
            .catch(() => this.authenticatedResultService.setAuthenticatedResult(false));
        this.oauthService.setupAutomaticSilentRefresh();
    }
    calculateRedirectUri(pathBasedRedirectUri) {
        const { protocol, host, pathname, search } = this.location;
        return `${protocol}//${host}${pathBasedRedirectUri ? pathname + search : ''}`;
    }
    calculateIssuer(config) {
        return config.auth.baseUrl + config.auth.realm;
    }
    listenOnErrorReceivedAndLogout() {
        this.oauthService.events
            .pipe(filter(event => event.type === 'silent_refresh_error' ||
            event.type === 'token_error'), take(1))
            .subscribe(() => this.logout(true));
    }
    getLanguageParam() {
        // the reason why we're using windowRefService instead of activatedRouter
        // to get the router params is because activatedRouter params has no value.
        // This is because there is no NavigationEnd event on Router
        const queryString = this.windowRefService.nativeWindow.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get('ui_locales');
    }
}
AuthenticationService.decorators = [
    { type: Injectable }
];
AuthenticationService.ctorParameters = () => [
    { type: HttpClient },
    { type: WindowRefService },
    { type: OAuthService },
    { type: Router },
    { type: ConfigService },
    { type: AuthenticatedResultService },
    { type: PlatformLocation }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvYXV0aGVudGljYXRpb24vc3JjL2xpYi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQVUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHNUUsTUFBTSxPQUFPLHFCQUFxQjtJQU1oQyxZQUNVLFVBQXNCLEVBQ3RCLGdCQUFrQyxFQUNsQyxZQUEwQixFQUMxQixNQUFjLEVBQ2QsYUFBNEIsRUFDNUIsMEJBQXNELEVBQ3RELGdCQUFrQztRQU5sQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FB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R0FDekIsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQzdDLEVBQUUsQ0FBQztJQUNMLENBQUM7SUFFTyxlQUFlLENBQUMsTUFBYztRQUNwQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ2pELENBQUM7SUFFTyw4QkFBOEI7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO2FBQ3JCLElBQUksQ0FDSCxNQUFNLENBQ0osS0FBSyxDQUFDLEVBQUUsQ0FDTixLQUFLLENBQUMsSUFBSSxLQUFLLHNCQUFzQjtZQUNyQyxLQUFLLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FDL0IsRUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7YUFDQSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIseUVBQXlFO1FBQ3pFLDJFQUEyRTtRQUMzRSw0REFBNEQ7UUFDNUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3ZFLE1BQU0sU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUE5R0YsVUFBVTs7O1lBVkYsVUFBVTtZQUlWLGdCQUFnQjtZQUNoQixZQUFZO1lBSFosTUFBTTtZQUNFLGFBQWE7WUFLckIsMEJBQTBCO1lBVDFCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb25maWcsIENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay9hcHAtY29uZmlnJztcbmltcG9ydCB7IFdpbmRvd1JlZlNlcnZpY2UgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91dGlscyc7XG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcbmltcG9ydCB7IEp3a3NWYWxpZGF0aW9uSGFuZGxlciB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMtandrcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGVkUmVzdWx0U2VydmljZSB9IGZyb20gJy4vYXV0aGVudGljYXRlZC1yZXN1bHQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGxvY2F0aW9uOiBMb2NhdGlvbiA9IHRoaXMud2luZG93UmVmU2VydmljZS5uYXRpdmVXaW5kb3dcbiAgICAubG9jYXRpb247XG4gIHByaXZhdGUgcmVhZG9ubHkgYmFzZUhyZWYgPVxuICAgIHRoaXMubG9jYXRpb24ub3JpZ2luICsgdGhpcy5wbGF0Zm9ybUxvY2F0aW9uLmdldEJhc2VIcmVmRnJvbURPTSgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHdpbmRvd1JlZlNlcnZpY2U6IFdpbmRvd1JlZlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvYXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0ZWRSZXN1bHRTZXJ2aWNlOiBBdXRoZW50aWNhdGVkUmVzdWx0U2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtTG9jYXRpb246IFBsYXRmb3JtTG9jYXRpb25cbiAgKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnU2VydmljZS5jb25maWcuYXV0aC5ncmFudCA9PT0gJ2ltcGxpY2l0Jykge1xuICAgICAgdGhpcy5jb25maWd1cmVMb2dpbldpdGhTU08oKTtcbiAgICAgIHRoaXMubGlzdGVuT25FcnJvclJlY2VpdmVkQW5kTG9nb3V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgYXV0aGVudGljYXRpb24gZ3JhbnQnKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbldpdGhTaW5nbGVTaWduT24oKTogdm9pZCB7XG4gICAgdGhpcy5vYXV0aFNlcnZpY2UuaW5pdEltcGxpY2l0RmxvdygpO1xuICB9XG5cbiAgbG9nb3V0KHBhdGhCYXNlZFJlZGlyZWN0VXJpOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLm9hdXRoU2VydmljZS5yZWRpcmVjdFVyaSA9IHRoaXMuY2FsY3VsYXRlUmVkaXJlY3RVcmkoXG4gICAgICBwYXRoQmFzZWRSZWRpcmVjdFVyaVxuICAgICk7XG4gICAgdGhpcy5vYXV0aFNlcnZpY2UubG9nT3V0KCk7XG4gIH1cblxuICBsb2dvdXRXaXRob3V0UmVkaXJlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5vYXV0aFNlcnZpY2UubG9nT3V0KHRydWUpO1xuICB9XG5cbiAgc2V0UG9zdExvZ291dFJlZGlyZWN0VXJpKHVyaTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5vYXV0aFNlcnZpY2UucG9zdExvZ291dFJlZGlyZWN0VXJpID0gdXJpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVMb2dpbldpdGhTU08oKTogdm9pZCB7XG4gICAgY29uc3QgbGFuZ3VhZ2VQYXJhbSA9IHRoaXMuZ2V0TGFuZ3VhZ2VQYXJhbSgpO1xuXG4gICAgY29uc3QgYXV0aENvbmZpZyA9IHtcbiAgICAgIGNsaWVudElkOiB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnLmF1dGguY2xpZW50SWQsXG4gICAgICBpc3N1ZXI6IHRoaXMuY2FsY3VsYXRlSXNzdWVyKHRoaXMuY29uZmlnU2VydmljZS5jb25maWcpLFxuICAgICAgcmVkaXJlY3RVcmk6IHRoaXMuY2FsY3VsYXRlUmVkaXJlY3RVcmkodHJ1ZSksXG4gICAgICBzaWxlbnRSZWZyZXNoUmVkaXJlY3RVcmk6IHRoaXMuYmFzZUhyZWYgKyAnc2lsZW50LXJlZnJlc2guaHRtbCcsXG4gICAgICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6IHRoaXMuYmFzZUhyZWZcbiAgICB9O1xuICAgIHRoaXMub2F1dGhTZXJ2aWNlLmNvbmZpZ3VyZShhdXRoQ29uZmlnKTtcblxuICAgIGlmIChsYW5ndWFnZVBhcmFtKSB7XG4gICAgICB0aGlzLm9hdXRoU2VydmljZS5jdXN0b21RdWVyeVBhcmFtcyA9IHtcbiAgICAgICAgLy8ga2NfbG9jYWxlIGJlY2F1c2UgaXQgc2V0IGEgY29va2llIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgLy8gdGhhdCBjb250YWlucyB0aGUgbGFuZ3VhZ2UgcGFyYW1ldGVyIHNvIGl0J3Mgc2F2ZWRcbiAgICAgICAgLy8gd2hlbiB5b3UgcmVmcmVzaCBhbmQgd2FpdCB0byBsb25nIGJlZm9yZSB5b3UgdGFrZSBhbiBhY3Rpb25cbiAgICAgICAga2NfbG9jYWxlOiBsYW5ndWFnZVBhcmFtXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMub2F1dGhTZXJ2aWNlLnRva2VuVmFsaWRhdGlvbkhhbmRsZXIgPSBuZXcgSndrc1ZhbGlkYXRpb25IYW5kbGVyKCk7XG4gICAgdGhpcy5vYXV0aFNlcnZpY2VcbiAgICAgIC5sb2FkRGlzY292ZXJ5RG9jdW1lbnRBbmRUcnlMb2dpbigpXG4gICAgICAudGhlbigoKSA9PlxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWRSZXN1bHRTZXJ2aWNlLnNldEF1dGhlbnRpY2F0ZWRSZXN1bHQoXG4gICAgICAgICAgdGhpcy5vYXV0aFNlcnZpY2UuaGFzVmFsaWRJZFRva2VuKClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLmNhdGNoKCgpID0+XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZFJlc3VsdFNlcnZpY2Uuc2V0QXV0aGVudGljYXRlZFJlc3VsdChmYWxzZSlcbiAgICAgICk7XG4gICAgdGhpcy5vYXV0aFNlcnZpY2Uuc2V0dXBBdXRvbWF0aWNTaWxlbnRSZWZyZXNoKCk7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVJlZGlyZWN0VXJpKHBhdGhCYXNlZFJlZGlyZWN0VXJpOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0LCBwYXRobmFtZSwgc2VhcmNoIH0gPSB0aGlzLmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdH0ke1xuICAgICAgcGF0aEJhc2VkUmVkaXJlY3RVcmkgPyBwYXRobmFtZSArIHNlYXJjaCA6ICcnXG4gICAgfWA7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUlzc3Vlcihjb25maWc6IENvbmZpZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNvbmZpZy5hdXRoLmJhc2VVcmwgKyBjb25maWcuYXV0aC5yZWFsbTtcbiAgfVxuXG4gIHByaXZhdGUgbGlzdGVuT25FcnJvclJlY2VpdmVkQW5kTG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMub2F1dGhTZXJ2aWNlLmV2ZW50c1xuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICBldmVudCA9PlxuICAgICAgICAgICAgZXZlbnQudHlwZSA9PT0gJ3NpbGVudF9yZWZyZXNoX2Vycm9yJyB8fFxuICAgICAgICAgICAgZXZlbnQudHlwZSA9PT0gJ3Rva2VuX2Vycm9yJ1xuICAgICAgICApLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9nb3V0KHRydWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGFuZ3VhZ2VQYXJhbSgpOiBzdHJpbmcge1xuICAgIC8vIHRoZSByZWFzb24gd2h5IHdlJ3JlIHVzaW5nIHdpbmRvd1JlZlNlcnZpY2UgaW5zdGVhZCBvZiBhY3RpdmF0ZWRSb3V0ZXJcbiAgICAvLyB0byBnZXQgdGhlIHJvdXRlciBwYXJhbXMgaXMgYmVjYXVzZSBhY3RpdmF0ZWRSb3V0ZXIgcGFyYW1zIGhhcyBubyB2YWx1ZS5cbiAgICAvLyBUaGlzIGlzIGJlY2F1c2UgdGhlcmUgaXMgbm8gTmF2aWdhdGlvbkVuZCBldmVudCBvbiBSb3V0ZXJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHRoaXMud2luZG93UmVmU2VydmljZS5uYXRpdmVXaW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHVybFBhcmFtcy5nZXQoJ3VpX2xvY2FsZXMnKTtcbiAgfVxufVxuIl19