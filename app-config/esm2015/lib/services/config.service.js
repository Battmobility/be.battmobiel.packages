import { Inject, Injectable } from '@angular/core';
import { ObjectService, WindowRefService } from '@sofico-framework/utils';
import { APP_CONFIG_TOKEN } from '../app-config.token';
export class ConfigService {
    constructor(appConfig, windowRefService, objectService) {
        var _a, _b, _c;
        this.appConfig = appConfig;
        this.windowRefService = windowRefService;
        this.objectService = objectService;
        /**
         * The config that is set on the nativeWindow
         */
        this.provisioningConfig = this.windowRefService
            .nativeWindow.config;
        // provisioning config requirement
        if (!this.provisioningConfig) {
            throw Error('No provisioning configuration found!');
        }
        if (!(((_a = this.provisioningConfig.auth) === null || _a === void 0 ? void 0 : _a.clientId) || ((_b = this.provisioningConfig.base) === null || _b === void 0 ? void 0 : _b.clientId))) {
            throw Error('auth.clientId is required in configuration!');
        }
        const location = this.windowRefService.nativeWindow.location;
        const defaultConfig = {
            api: {
                baseUrl: `${location.protocol}//${location.host}/api`
            },
            auth: {
                clientId: '',
                allowedUrls: [`${location.protocol}//${location.host}`],
                baseUrl: `${location.protocol}//${location.host}/auth/realms/`,
                grant: 'implicit',
                realm: 'master',
                logoutRedirectUrls: []
            },
            debug: false,
            app: appConfig
        };
        let baseConfig;
        if ((_c = this.provisioningConfig) === null || _c === void 0 ? void 0 : _c.base) {
            baseConfig = {
                api: {
                    baseUrl: `https://${this.provisioningConfig.base.domain}/api`
                },
                auth: {
                    clientId: this.provisioningConfig.base.clientId,
                    allowedUrls: [`https://${this.provisioningConfig.base.domain}/api`],
                    baseUrl: `https://${this.provisioningConfig.base.domain}/auth/realms/`,
                    grant: 'implicit',
                    realm: 'master',
                    logoutRedirectUrls: []
                },
                app: appConfig
            };
        }
        let config = this.objectService.mergeDeep(defaultConfig, baseConfig, this.provisioningConfig);
        // We ensure the API and AUTH baseUrl have a trailing slash
        config = Object.assign(Object.assign({}, config), { api: Object.assign(Object.assign({}, config.api), { baseUrl: this.getValidUrl(config.api.baseUrl) }), auth: Object.assign(Object.assign({}, config.auth), { baseUrl: this.getValidUrl(config.auth.baseUrl) }) });
        this.config = config;
    }
    getValidUrl(url) {
        if ((url === null || url === void 0 ? void 0 : url.substr(-1)) !== '/') {
            return `${url}/`;
        }
        return url;
    }
}
ConfigService.decorators = [
    { type: Injectable }
];
ConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [APP_CONFIG_TOKEN,] }] },
    { type: WindowRefService },
    { type: ObjectService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL2FwcC1jb25maWcvc3JjL2xpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFNdkQsTUFBTSxPQUFPLGFBQWE7SUFTeEIsWUFDb0MsU0FBb0IsRUFDOUMsZ0JBQWtDLEVBQ2xDLGFBQTRCOztRQUZGLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDOUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVR0Qzs7V0FFRztRQUNLLHVCQUFrQixHQUF1QixJQUFJLENBQUMsZ0JBQWdCO2FBQ25FLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFPckIsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsTUFBTSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQ0UsQ0FBQyxDQUNDLE9BQUEsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksMENBQUUsUUFBUSxZQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSwwQ0FBRSxRQUFRLENBQUEsQ0FDdkMsRUFDRDtZQUNBLE1BQU0sS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUM3RCxNQUFNLGFBQWEsR0FBVztZQUM1QixHQUFHLEVBQUU7Z0JBQ0gsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsSUFBSSxNQUFNO2FBQ3REO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFdBQVcsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZELE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLElBQUksZUFBZTtnQkFDOUQsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLEtBQUssRUFBRSxRQUFRO2dCQUNmLGtCQUFrQixFQUFFLEVBQUU7YUFDdkI7WUFDRCxLQUFLLEVBQUUsS0FBSztZQUNaLEdBQUcsRUFBRSxTQUFTO1NBQ2YsQ0FBQztRQUVGLElBQUksVUFBa0IsQ0FBQztRQUN2QixVQUFJLElBQUksQ0FBQyxrQkFBa0IsMENBQUUsSUFBSSxFQUFFO1lBQ2pDLFVBQVUsR0FBRztnQkFDWCxHQUFHLEVBQUU7b0JBQ0gsT0FBTyxFQUFFLFdBQVcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLE1BQU07aUJBQzlEO2dCQUNELElBQUksRUFBRTtvQkFDSixRQUFRLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRO29CQUMvQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxNQUFNLENBQUM7b0JBQ25FLE9BQU8sRUFBRSxXQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxlQUFlO29CQUN0RSxLQUFLLEVBQUUsVUFBVTtvQkFDakIsS0FBSyxFQUFFLFFBQVE7b0JBQ2Ysa0JBQWtCLEVBQUUsRUFBRTtpQkFDdkI7Z0JBQ0QsR0FBRyxFQUFFLFNBQVM7YUFDZixDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDL0MsYUFBYSxFQUNiLFVBQVUsRUFDVixJQUFJLENBQUMsa0JBQWtCLENBQ3hCLENBQUM7UUFFRiwyREFBMkQ7UUFDM0QsTUFBTSxtQ0FDRCxNQUFNLEtBQ1QsR0FBRyxrQ0FDRSxNQUFNLENBQUMsR0FBRyxLQUNiLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBRS9DLElBQUksa0NBQ0MsTUFBTSxDQUFDLElBQUksS0FDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUVqRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxHQUFXO1FBQzdCLElBQUksQ0FBQSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFNLEdBQUcsRUFBRTtZQUMzQixPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDbEI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OztZQTFGRixVQUFVOzs7NENBV04sTUFBTSxTQUFDLGdCQUFnQjtZQWpCSixnQkFBZ0I7WUFBL0IsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0U2VydmljZSwgV2luZG93UmVmU2VydmljZSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcbmltcG9ydCB7IEFQUF9DT05GSUdfVE9LRU4gfSBmcm9tICcuLi9hcHAtY29uZmlnLnRva2VuJztcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4uL3R5cGVzL2FwcC1jb25maWcudHlwZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi90eXBlcy9jb25maWcudHlwZSc7XG5pbXBvcnQgeyBQcm92aXNpb25pbmdDb25maWcgfSBmcm9tICcuLi90eXBlcy9wcm92aXNpb25pbmctY29uZmlnLnR5cGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG4gIHB1YmxpYyBjb25maWc6IENvbmZpZztcblxuICAvKipcbiAgICogVGhlIGNvbmZpZyB0aGF0IGlzIHNldCBvbiB0aGUgbmF0aXZlV2luZG93XG4gICAqL1xuICBwcml2YXRlIHByb3Zpc2lvbmluZ0NvbmZpZzogUHJvdmlzaW9uaW5nQ29uZmlnID0gdGhpcy53aW5kb3dSZWZTZXJ2aWNlXG4gICAgLm5hdGl2ZVdpbmRvdy5jb25maWc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChBUFBfQ09ORklHX1RPS0VOKSBwcml2YXRlIGFwcENvbmZpZzogQXBwQ29uZmlnLFxuICAgIHByaXZhdGUgd2luZG93UmVmU2VydmljZTogV2luZG93UmVmU2VydmljZSxcbiAgICBwcml2YXRlIG9iamVjdFNlcnZpY2U6IE9iamVjdFNlcnZpY2VcbiAgKSB7XG4gICAgLy8gcHJvdmlzaW9uaW5nIGNvbmZpZyByZXF1aXJlbWVudFxuICAgIGlmICghdGhpcy5wcm92aXNpb25pbmdDb25maWcpIHtcbiAgICAgIHRocm93IEVycm9yKCdObyBwcm92aXNpb25pbmcgY29uZmlndXJhdGlvbiBmb3VuZCEnKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhKFxuICAgICAgICB0aGlzLnByb3Zpc2lvbmluZ0NvbmZpZy5hdXRoPy5jbGllbnRJZCB8fFxuICAgICAgICB0aGlzLnByb3Zpc2lvbmluZ0NvbmZpZy5iYXNlPy5jbGllbnRJZFxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhyb3cgRXJyb3IoJ2F1dGguY2xpZW50SWQgaXMgcmVxdWlyZWQgaW4gY29uZmlndXJhdGlvbiEnKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IHRoaXMud2luZG93UmVmU2VydmljZS5uYXRpdmVXaW5kb3cubG9jYXRpb247XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZzogQ29uZmlnID0ge1xuICAgICAgYXBpOiB7XG4gICAgICAgIGJhc2VVcmw6IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fS9hcGlgXG4gICAgICB9LFxuICAgICAgYXV0aDoge1xuICAgICAgICBjbGllbnRJZDogJycsXG4gICAgICAgIGFsbG93ZWRVcmxzOiBbYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9YF0sXG4gICAgICAgIGJhc2VVcmw6IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fS9hdXRoL3JlYWxtcy9gLFxuICAgICAgICBncmFudDogJ2ltcGxpY2l0JyxcbiAgICAgICAgcmVhbG06ICdtYXN0ZXInLFxuICAgICAgICBsb2dvdXRSZWRpcmVjdFVybHM6IFtdXG4gICAgICB9LFxuICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgYXBwOiBhcHBDb25maWdcbiAgICB9O1xuXG4gICAgbGV0IGJhc2VDb25maWc6IENvbmZpZztcbiAgICBpZiAodGhpcy5wcm92aXNpb25pbmdDb25maWc/LmJhc2UpIHtcbiAgICAgIGJhc2VDb25maWcgPSB7XG4gICAgICAgIGFwaToge1xuICAgICAgICAgIGJhc2VVcmw6IGBodHRwczovLyR7dGhpcy5wcm92aXNpb25pbmdDb25maWcuYmFzZS5kb21haW59L2FwaWBcbiAgICAgICAgfSxcbiAgICAgICAgYXV0aDoge1xuICAgICAgICAgIGNsaWVudElkOiB0aGlzLnByb3Zpc2lvbmluZ0NvbmZpZy5iYXNlLmNsaWVudElkLFxuICAgICAgICAgIGFsbG93ZWRVcmxzOiBbYGh0dHBzOi8vJHt0aGlzLnByb3Zpc2lvbmluZ0NvbmZpZy5iYXNlLmRvbWFpbn0vYXBpYF0sXG4gICAgICAgICAgYmFzZVVybDogYGh0dHBzOi8vJHt0aGlzLnByb3Zpc2lvbmluZ0NvbmZpZy5iYXNlLmRvbWFpbn0vYXV0aC9yZWFsbXMvYCxcbiAgICAgICAgICBncmFudDogJ2ltcGxpY2l0JyxcbiAgICAgICAgICByZWFsbTogJ21hc3RlcicsXG4gICAgICAgICAgbG9nb3V0UmVkaXJlY3RVcmxzOiBbXVxuICAgICAgICB9LFxuICAgICAgICBhcHA6IGFwcENvbmZpZ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBsZXQgY29uZmlnOiBDb25maWcgPSB0aGlzLm9iamVjdFNlcnZpY2UubWVyZ2VEZWVwKFxuICAgICAgZGVmYXVsdENvbmZpZyxcbiAgICAgIGJhc2VDb25maWcsXG4gICAgICB0aGlzLnByb3Zpc2lvbmluZ0NvbmZpZ1xuICAgICk7XG5cbiAgICAvLyBXZSBlbnN1cmUgdGhlIEFQSSBhbmQgQVVUSCBiYXNlVXJsIGhhdmUgYSB0cmFpbGluZyBzbGFzaFxuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIGFwaToge1xuICAgICAgICAuLi5jb25maWcuYXBpLFxuICAgICAgICBiYXNlVXJsOiB0aGlzLmdldFZhbGlkVXJsKGNvbmZpZy5hcGkuYmFzZVVybClcbiAgICAgIH0sXG4gICAgICBhdXRoOiB7XG4gICAgICAgIC4uLmNvbmZpZy5hdXRoLFxuICAgICAgICBiYXNlVXJsOiB0aGlzLmdldFZhbGlkVXJsKGNvbmZpZy5hdXRoLmJhc2VVcmwpXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsaWRVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh1cmw/LnN1YnN0cigtMSkgIT09ICcvJykge1xuICAgICAgcmV0dXJuIGAke3VybH0vYDtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfVxufVxuIl19