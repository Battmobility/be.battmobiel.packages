import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpStatusService } from '../services/http-status.service';
import * as ɵngcc0 from '@angular/core';
export declare class HttpStatusInterceptor implements HttpInterceptor {
    private httpStatusService;
    private loadingCalls;
    private actingCalls;
    private showToastsOn;
    constructor(httpStatusService: HttpStatusService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private changeStatus;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HttpStatusInterceptor, never>;
}

//# sourceMappingURL=http-status.interceptor.d.ts.map