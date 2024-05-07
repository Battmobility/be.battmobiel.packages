import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '@sofico-framework/app-config';
import { WindowRefService } from '@sofico-framework/utils';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'angular-oauth2-oidc';
export declare class AuthenticationModule {
    constructor(parentModule: AuthenticationModule, windowRefService: WindowRefService, httpClient: HttpClientModule, configService: ConfigService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthenticationModule, [{ optional: true; skipSelf: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<AuthenticationModule, never, [typeof ɵngcc1.CommonModule, typeof ɵngcc2.OAuthModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<AuthenticationModule>;
}

//# sourceMappingURL=authentication.module.d.ts.map