import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { WindowRefService } from '../services/window-ref.service';
import { CacheOverrideConfigAbstract } from './cache-override-config.abstract';
import * as ɵngcc0 from '@angular/core';
export declare class CacheOverrideInterceptor implements HttpInterceptor {
    private windowRefService;
    private configService;
    private isIE;
    private blacklistedUrls;
    constructor(windowRefService: WindowRefService, configService: CacheOverrideConfigAbstract);
    intercept(req: HttpRequest<any>, next: HttpHandler): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CacheOverrideInterceptor, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CacheOverrideInterceptor>;
}

//# sourceMappingURL=cache-override.interceptor.d.ts.map