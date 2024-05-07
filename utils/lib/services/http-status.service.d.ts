import { ActingErrorMessage } from '../types/acting-error-message.type';
import * as ɵngcc0 from '@angular/core';
export declare class HttpStatusService {
    private loadingSub$;
    /**
     * When navigating to a page it can be possible that the last value of the loading is false
     * When the user navigates to that page and that page starts loading the new value of the loading is true
     * Because of that we get the ExpressionChangedAfterItHasBeenCheckedError and we get a flickr in some cases
     * For that reason we are using a debounceTime of 0 to ensure a fluent loading experience
     */
    loading$: import("rxjs").Observable<boolean>;
    private actingSub$;
    acting$: import("rxjs").Observable<boolean>;
    private getErrorSub$;
    getError$: import("rxjs").Observable<string>;
    private actingErrorsSub$;
    actingErrors$: import("rxjs").Observable<ActingErrorMessage[]>;
    private attached;
    set loading(val: boolean);
    set acting(val: boolean);
    set getError(val: string);
    set actingErrors(val: ActingErrorMessage[]);
    /**
     * Detaches the interceptor from the loading status.
     * This is used when we don't want to show loading spinners for
     * some actions of the page (like polling)
     * Don't forget to use the reattach function afterwards
     */
    detach(): void;
    /**
     * Reattaches the interceptor to the loading status
     * Has to be called on every page that uses the detach functionality
     */
    reattach(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HttpStatusService, never>;
}

//# sourceMappingURL=http-status.service.d.ts.map