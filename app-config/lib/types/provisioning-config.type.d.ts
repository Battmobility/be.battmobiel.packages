import { ApiConfig } from './api-config.type';
import { AppConfig } from './app-config.type';
import { AuthConfig } from './auth-config.type';
import { BaseConfig } from './base-config.type';
export interface ProvisioningConfig extends Readonly<{
    base: BaseConfig;
    api?: ApiConfig;
    auth?: AuthConfig;
    app?: AppConfig;
    debug?: boolean;
}> {
}
