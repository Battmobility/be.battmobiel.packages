import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
export interface RoutingAllowedInterface extends Readonly<{
    routingAllowed(currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | boolean;
}> {
}
