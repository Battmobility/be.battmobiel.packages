import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ConfigService } from '@sofico-framework/app-config';
import { OAuthResourceServerErrorHandler, OAuthStorage } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { AuthenticatedResultService } from '../services/authenticated-result.service';
import * as ɵngcc0 from '@angular/core';
export declare class CustomOAuthInterceptor implements HttpInterceptor {
    private authStorage;
    private errorHandler;
    private configService;
    private authenticatedResultService;
    constructor(authStorage: OAuthStorage, errorHandler: OAuthResourceServerErrorHandler, configService: ConfigService, authenticatedResultService: AuthenticatedResultService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private checkUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomOAuthInterceptor, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CustomOAuthInterceptor>;
}

//# sourceMappingURL=custom-oauth.interceptor.d.ts.map