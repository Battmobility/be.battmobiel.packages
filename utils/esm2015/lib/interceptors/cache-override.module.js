import { NgModule, Optional, SkipSelf } from '@angular/core';
import { WindowRefService } from '../services/window-ref.service';
import { CacheOverrideConfigAbstract } from './cache-override-config.abstract';
import { CacheOverrideInterceptor } from './cache-override.interceptor';
export class CacheOverrideModule {
    constructor(parentModule, windowRefService, cacheOverrideConfig) {
        if (parentModule) {
            throw new Error('CacheOverrideModule is already loaded. Import in your base AppModule only with .forRoot(cacheOverrideConfig: Type<CacheOverrideConfigAbstract>).');
        }
        if (!cacheOverrideConfig) {
            throw new Error('CacheOverrideModule could not be loaded. You need to use the .forRoot(cacheOverrideConfig: Type<CacheOverrideConfigAbstract>) method and provide an implementation of CacheOverrideConfigAbstract');
        }
        if (!windowRefService) {
            throw new Error('You need to import the UtilServicesModule in your AppModule!');
        }
    }
    static forRoot(cacheOverrideConfig) {
        return {
            ngModule: CacheOverrideModule,
            providers: [
                CacheOverrideInterceptor,
                {
                    provide: CacheOverrideConfigAbstract,
                    useClass: cacheOverrideConfig
                }
            ]
        };
    }
}
CacheOverrideModule.decorators = [
    { type: NgModule }
];
CacheOverrideModule.ctorParameters = () => [
    { type: CacheOverrideModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: WindowRefService, decorators: [{ type: Optional }] },
    { type: CacheOverrideConfigAbstract, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUtb3ZlcnJpZGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91dGlscy9zcmMvbGliL2ludGVyY2VwdG9ycy9jYWNoZS1vdmVycmlkZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3hFLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFDMEIsWUFBaUMsRUFDN0MsZ0JBQWtDLEVBQ2xDLG1CQUFnRDtRQUU1RCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLGtKQUFrSixDQUNuSixDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FDYixtTUFBbU0sQ0FDcE0sQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQ2IsOERBQThELENBQy9ELENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUNaLG1CQUFzRDtRQUV0RCxPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUU7Z0JBQ1Qsd0JBQXdCO2dCQUN4QjtvQkFDRSxPQUFPLEVBQUUsMkJBQTJCO29CQUNwQyxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXJDRixRQUFROzs7WUFHaUMsbUJBQW1CLHVCQUF4RCxRQUFRLFlBQUksUUFBUTtZQVBoQixnQkFBZ0IsdUJBUXBCLFFBQVE7WUFQSiwyQkFBMkIsdUJBUS9CLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBUeXBlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3dpbmRvdy1yZWYuc2VydmljZSc7XG5pbXBvcnQgeyBDYWNoZU92ZXJyaWRlQ29uZmlnQWJzdHJhY3QgfSBmcm9tICcuL2NhY2hlLW92ZXJyaWRlLWNvbmZpZy5hYnN0cmFjdCc7XG5pbXBvcnQgeyBDYWNoZU92ZXJyaWRlSW50ZXJjZXB0b3IgfSBmcm9tICcuL2NhY2hlLW92ZXJyaWRlLmludGVyY2VwdG9yJztcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBDYWNoZU92ZXJyaWRlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDYWNoZU92ZXJyaWRlTW9kdWxlLFxuICAgIEBPcHRpb25hbCgpIHdpbmRvd1JlZlNlcnZpY2U6IFdpbmRvd1JlZlNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgY2FjaGVPdmVycmlkZUNvbmZpZzogQ2FjaGVPdmVycmlkZUNvbmZpZ0Fic3RyYWN0XG4gICkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0NhY2hlT3ZlcnJpZGVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpbiB5b3VyIGJhc2UgQXBwTW9kdWxlIG9ubHkgd2l0aCAuZm9yUm9vdChjYWNoZU92ZXJyaWRlQ29uZmlnOiBUeXBlPENhY2hlT3ZlcnJpZGVDb25maWdBYnN0cmFjdD4pLidcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghY2FjaGVPdmVycmlkZUNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ2FjaGVPdmVycmlkZU1vZHVsZSBjb3VsZCBub3QgYmUgbG9hZGVkLiBZb3UgbmVlZCB0byB1c2UgdGhlIC5mb3JSb290KGNhY2hlT3ZlcnJpZGVDb25maWc6IFR5cGU8Q2FjaGVPdmVycmlkZUNvbmZpZ0Fic3RyYWN0PikgbWV0aG9kIGFuZCBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uIG9mIENhY2hlT3ZlcnJpZGVDb25maWdBYnN0cmFjdCdcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghd2luZG93UmVmU2VydmljZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnWW91IG5lZWQgdG8gaW1wb3J0IHRoZSBVdGlsU2VydmljZXNNb2R1bGUgaW4geW91ciBBcHBNb2R1bGUhJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChcbiAgICBjYWNoZU92ZXJyaWRlQ29uZmlnOiBUeXBlPENhY2hlT3ZlcnJpZGVDb25maWdBYnN0cmFjdD5cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYWNoZU92ZXJyaWRlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDYWNoZU92ZXJyaWRlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENhY2hlT3ZlcnJpZGVJbnRlcmNlcHRvcixcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENhY2hlT3ZlcnJpZGVDb25maWdBYnN0cmFjdCxcbiAgICAgICAgICB1c2VDbGFzczogY2FjaGVPdmVycmlkZUNvbmZpZ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19