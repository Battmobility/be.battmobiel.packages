import { ConfigService } from '@sofico-framework/app-config';
import { WindowRefService } from '@sofico-framework/utils';
import { OAuthStorage } from 'angular-oauth2-oidc';
import * as ɵngcc0 from '@angular/core';
export declare class SessionStorageOAuthStore implements OAuthStorage {
    private configService;
    private windowRefService;
    private readonly prefix;
    private readonly storage;
    constructor(configService: ConfigService, windowRefService: WindowRefService);
    getItem(key: string): string | null;
    removeItem(key: string): void;
    setItem(key: string, data: string): void;
    private calculateKey;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SessionStorageOAuthStore, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<SessionStorageOAuthStore>;
}

//# sourceMappingURL=session-storage-oauth.store.d.ts.map