import { HttpResponse } from '@angular/common/http';
import { WindowRefService } from '@sofico-framework/utils';
import { OAuthResourceServerErrorHandler, OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class ResourceServerAutoLogoutErrorHandler implements OAuthResourceServerErrorHandler {
    private oauthService;
    private windowRefService;
    private readonly location;
    constructor(oauthService: OAuthService, windowRefService: WindowRefService);
    handleError(err: HttpResponse<any>): Observable<any>;
    private logout;
    private calculateRedirectUri;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ResourceServerAutoLogoutErrorHandler, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ResourceServerAutoLogoutErrorHandler>;
}

//# sourceMappingURL=resource-server-auto-logout-error-handler.d.ts.map