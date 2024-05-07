import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingAllowedInterface } from '../interfaces/routing-allowed.interface';
import * as ɵngcc0 from '@angular/core';
export declare class RoutingAllowedGuard implements CanDeactivate<RoutingAllowedInterface> {
    canDeactivate(component: RoutingAllowedInterface, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoutingAllowedGuard, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<RoutingAllowedGuard>;
}

//# sourceMappingURL=routing-allowed.guard.d.ts.map