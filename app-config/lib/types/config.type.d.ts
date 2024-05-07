import { ApiConfig } from './api-config.type';
import { AppConfig } from './app-config.type';
import { AuthConfig } from './auth-config.type';
export interface Config extends Readonly<{
    api: ApiConfig;
    auth: AuthConfig;
    app: AppConfig;
    debug?: boolean;
}> {
}
