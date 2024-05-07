import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticatedResultService } from '../services/authenticated-result.service';
import { AuthenticationService } from '../services/authentication.service';
import * as ɵngcc0 from '@angular/core';
export declare class AuthenticatedGuard implements CanActivate {
    private authenticationService;
    private authenticatedResultService;
    constructor(authenticationService: AuthenticationService, authenticatedResultService: AuthenticatedResultService);
    canActivate(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthenticatedGuard, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AuthenticatedGuard>;
}

//# sourceMappingURL=authenticated.guard.d.ts.map