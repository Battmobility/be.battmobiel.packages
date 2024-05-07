import { PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from '@sofico-framework/app-config';
import { WindowRefService } from '@sofico-framework/utils';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthenticatedResultService } from './authenticated-result.service';
import * as ɵngcc0 from '@angular/core';
export declare class AuthenticationService {
    private httpClient;
    private windowRefService;
    private oauthService;
    private router;
    private configService;
    private authenticatedResultService;
    private platformLocation;
    private readonly location;
    private readonly baseHref;
    constructor(httpClient: HttpClient, windowRefService: WindowRefService, oauthService: OAuthService, router: Router, configService: ConfigService, authenticatedResultService: AuthenticatedResultService, platformLocation: PlatformLocation);
    loginWithSingleSignOn(): void;
    logout(pathBasedRedirectUri?: boolean): void;
    logoutWithoutRedirect(): void;
    setPostLogoutRedirectUri(uri: string): void;
    private configureLoginWithSSO;
    private calculateRedirectUri;
    private calculateIssuer;
    private listenOnErrorReceivedAndLogout;
    private getLanguageParam;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthenticationService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AuthenticationService>;
}

//# sourceMappingURL=authentication.service.d.ts.map