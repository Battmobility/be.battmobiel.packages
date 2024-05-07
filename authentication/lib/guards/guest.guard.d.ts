import { CanActivate, Router } from '@angular/router';
import { ConfigService } from '@sofico-framework/app-config';
import { Observable } from 'rxjs';
import { AuthenticatedResultService } from '../services/authenticated-result.service';
import { AuthenticationService } from '../services/authentication.service';
import * as ɵngcc0 from '@angular/core';
export declare class GuestGuard implements CanActivate {
    private authenticationService;
    private authenticatedResultService;
    private configService;
    private router;
    constructor(authenticationService: AuthenticationService, authenticatedResultService: AuthenticatedResultService, configService: ConfigService, router: Router);
    canActivate(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GuestGuard, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GuestGuard>;
}

//# sourceMappingURL=guest.guard.d.ts.map