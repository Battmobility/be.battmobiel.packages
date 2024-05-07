import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { HttpStatusService } from '../services/http-status.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/http-status.service";
export class HttpStatusInterceptor {
    constructor(httpStatusService) {
        this.httpStatusService = httpStatusService;
        this.loadingCalls = 0;
        this.actingCalls = 0;
        this.showToastsOn = [500, 404, 0];
    }
    intercept(req, next) {
        const actingMethods = ['PUT', 'POST', 'DELETE'];
        // ignore images
        if (req.responseType === 'blob') {
            return next.handle(req.clone());
        }
        this.changeStatus(true, req.method);
        return next.handle(req.clone()).pipe(catchError(e => {
            var _a, _b, _c, _d;
            if (req.method === 'GET' && this.showToastsOn.indexOf(e.status) > -1) {
                this.httpStatusService.getError = 'SOMETHING-WENT-WRONG-GET';
            }
            else if (actingMethods.indexOf(req.method) > -1) {
                if ((_a = e === null || e === void 0 ? void 0 : e.error) === null || _a === void 0 ? void 0 : _a.isInteractiveWarning) {
                    return throwError(e);
                }
                let errors;
                if ((_b = e === null || e === void 0 ? void 0 : e.error) === null || _b === void 0 ? void 0 : _b.message) {
                    errors = [
                        {
                            translation: e === null || e === void 0 ? void 0 : e.error.message.translation
                        }
                    ];
                }
                else if (((_c = e === null || e === void 0 ? void 0 : e.error) === null || _c === void 0 ? void 0 : _c.messages) && Array.isArray((_d = e === null || e === void 0 ? void 0 : e.error) === null || _d === void 0 ? void 0 : _d.messages)) {
                    errors = e === null || e === void 0 ? void 0 : e.error.messages.map(x => ({
                        translation: x.translation
                    }));
                }
                else {
                    errors = [
                        {
                            message: `ERROR_SOMETHING-WENT-WRONG-${req === null || req === void 0 ? void 0 : req.method}`
                        }
                    ];
                }
                this.httpStatusService.actingErrors = errors;
            }
            return throwError(e);
        }), finalize(() => {
            this.changeStatus(false, req.method);
        }));
    }
    changeStatus(v, method) {
        if (['POST', 'PUT', 'DELETE', 'PATCH'].indexOf(method) > -1) {
            v
                ? this.actingCalls++
                : this.actingCalls > 0
                    ? this.actingCalls--
                    : (this.actingCalls = 0);
            this.httpStatusService.acting = this.actingCalls > 0;
        }
        else if (method === 'GET') {
            v
                ? this.loadingCalls++
                : this.loadingCalls > 0
                    ? this.loadingCalls--
                    : (this.loadingCalls = 0);
            this.httpStatusService.loading = this.loadingCalls > 0;
        }
    }
}
HttpStatusInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function HttpStatusInterceptor_Factory() { return new HttpStatusInterceptor(i0.ɵɵinject(i1.HttpStatusService)); }, token: HttpStatusInterceptor, providedIn: "root" });
HttpStatusInterceptor.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
HttpStatusInterceptor.ctorParameters = () => [
    { type: HttpStatusService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zdGF0dXMuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvaW50ZXJjZXB0b3JzL2h0dHAtc3RhdHVzLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFNcEUsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQyxZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUpoRCxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixpQkFBWSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVzQixDQUFDO0lBRTVELFNBQVMsQ0FDUCxHQUFxQixFQUNyQixJQUFpQjtRQUVqQixNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDaEQsZ0JBQWdCO1FBQ2hCLElBQUksR0FBRyxDQUFDLFlBQVksS0FBSyxNQUFNLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxF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QUNyQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDOzs7O1lBMUVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTFEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaHR0cC1zdGF0dXMuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpbmdFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi90eXBlcy9hY3RpbmctZXJyb3ItbWVzc2FnZS50eXBlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSHR0cFN0YXR1c0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgcHJpdmF0ZSBsb2FkaW5nQ2FsbHMgPSAwO1xuICBwcml2YXRlIGFjdGluZ0NhbGxzID0gMDtcbiAgcHJpdmF0ZSBzaG93VG9hc3RzT24gPSBbNTAwLCA0MDQsIDBdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFN0YXR1c1NlcnZpY2U6IEh0dHBTdGF0dXNTZXJ2aWNlKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnN0IGFjdGluZ01ldGhvZHMgPSBbJ1BVVCcsICdQT1NUJywgJ0RFTEVURSddO1xuICAgIC8vIGlnbm9yZSBpbWFnZXNcbiAgICBpZiAocmVxLnJlc3BvbnNlVHlwZSA9PT0gJ2Jsb2InKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxLmNsb25lKCkpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZVN0YXR1cyh0cnVlLCByZXEubWV0aG9kKTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxLmNsb25lKCkpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKGUgPT4ge1xuICAgICAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcgJiYgdGhpcy5zaG93VG9hc3RzT24uaW5kZXhPZihlLnN0YXR1cykgPiAtMSkge1xuICAgICAgICAgIHRoaXMuaHR0cFN0YXR1c1NlcnZpY2UuZ2V0RXJyb3IgPSAnU09NRVRISU5HLVdFTlQtV1JPTkctR0VUJztcbiAgICAgICAgfSBlbHNlIGlmIChhY3RpbmdNZXRob2RzLmluZGV4T2YocmVxLm1ldGhvZCkgPiAtMSkge1xuICAgICAgICAgIGlmIChlPy5lcnJvcj8uaXNJbnRlcmFjdGl2ZVdhcm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBlcnJvcnM6IEFjdGluZ0Vycm9yTWVzc2FnZVtdO1xuXG4gICAgICAgICAgaWYgKGU/LmVycm9yPy5tZXNzYWdlKSB7XG4gICAgICAgICAgICBlcnJvcnMgPSBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbjogZT8uZXJyb3IubWVzc2FnZS50cmFuc2xhdGlvblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZT8uZXJyb3I/Lm1lc3NhZ2VzICYmIEFycmF5LmlzQXJyYXkoZT8uZXJyb3I/Lm1lc3NhZ2VzKSkge1xuICAgICAgICAgICAgZXJyb3JzID0gZT8uZXJyb3IubWVzc2FnZXMubWFwKHggPT4gKHtcbiAgICAgICAgICAgICAgdHJhbnNsYXRpb246IHgudHJhbnNsYXRpb25cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3JzID0gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYEVSUk9SX1NPTUVUSElORy1XRU5ULVdST05HLSR7cmVxPy5tZXRob2R9YFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmh0dHBTdGF0dXNTZXJ2aWNlLmFjdGluZ0Vycm9ycyA9IGVycm9ycztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlKTtcbiAgICAgIH0pLFxuICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVN0YXR1cyhmYWxzZSwgcmVxLm1ldGhvZCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVN0YXR1cyh2OiBib29sZWFuLCBtZXRob2Q6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChbJ1BPU1QnLCAnUFVUJywgJ0RFTEVURScsICdQQVRDSCddLmluZGV4T2YobWV0aG9kKSA+IC0xKSB7XG4gICAgICB2XG4gICAgICAgID8gdGhpcy5hY3RpbmdDYWxscysrXG4gICAgICAgIDogdGhpcy5hY3RpbmdDYWxscyA+IDBcbiAgICAgICAgPyB0aGlzLmFjdGluZ0NhbGxzLS1cbiAgICAgICAgOiAodGhpcy5hY3RpbmdDYWxscyA9IDApO1xuICAgICAgdGhpcy5odHRwU3RhdHVzU2VydmljZS5hY3RpbmcgPSB0aGlzLmFjdGluZ0NhbGxzID4gMDtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgIHZcbiAgICAgICAgPyB0aGlzLmxvYWRpbmdDYWxscysrXG4gICAgICAgIDogdGhpcy5sb2FkaW5nQ2FsbHMgPiAwXG4gICAgICAgID8gdGhpcy5sb2FkaW5nQ2FsbHMtLVxuICAgICAgICA6ICh0aGlzLmxvYWRpbmdDYWxscyA9IDApO1xuICAgICAgdGhpcy5odHRwU3RhdHVzU2VydmljZS5sb2FkaW5nID0gdGhpcy5sb2FkaW5nQ2FsbHMgPiAwO1xuICAgIH1cbiAgfVxufVxuIl19