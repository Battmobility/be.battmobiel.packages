import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DocumentDownloadService } from './document-download.service';
import { DocumentRefService } from './document-ref.service';
import { FileSelectionService } from './file-selection.service';
import { FormGroupService } from './form-group.service';
import { ObjectService } from './object.service';
import { RouterToolsService } from './router-tools.service';
import { ScrollService } from './scroll.service';
import { WindowRefService } from './window-ref.service';
export class UtilServicesModule {
    constructor(parentModule, router, reactiveForms, translate) {
        if (parentModule) {
            throw new Error('UtilServicesModule is already loaded. Import in your base AppModule only.');
        }
        if (!router) {
            throw new Error('You need to import the RouterModule in your AppModule!');
        }
        if (!reactiveForms) {
            throw new Error('You need to import the ReactiveFormsModule in your AppModule!');
        }
        if (!translate) {
            throw new Error('You need to import the TranslateModule in your AppModule!');
        }
    }
}
UtilServicesModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    WindowRefService,
                    DocumentRefService,
                    DocumentDownloadService,
                    FileSelectionService,
                    FormGroupService,
                    ObjectService,
                    RouterToolsService,
                    ScrollService
                ]
            },] }
];
UtilServicesModule.ctorParameters = () => [
    { type: UtilServicesModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: Router, decorators: [{ type: Optional }] },
    { type: FormBuilder, decorators: [{ type: Optional }] },
    { type: TranslateService, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC1zZXJ2aWNlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3V0aWxzL3NyYy9saWIvc2VydmljZXMvdXRpbC1zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWN4RCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQzBCLFlBQWdDLEVBQzVDLE1BQWMsRUFDZCxhQUEwQixFQUMxQixTQUEyQjtRQUV2QyxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLDJFQUEyRSxDQUM1RSxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUNiLCtEQUErRCxDQUNoRSxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FDYiwyREFBMkQsQ0FDNUQsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7O1lBckNGLFFBQVEsU0FBQztnQkFDUixTQUFTLEVBQUU7b0JBQ1QsZ0JBQWdCO29CQUNoQixrQkFBa0I7b0JBQ2xCLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixhQUFhO2lCQUNkO2FBQ0Y7OztZQUd5QyxrQkFBa0IsdUJBQXZELFFBQVEsWUFBSSxRQUFRO1lBekJoQixNQUFNLHVCQTBCVixRQUFRO1lBM0JKLFdBQVcsdUJBNEJmLFFBQVE7WUExQkosZ0JBQWdCLHVCQTJCcEIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IERvY3VtZW50RG93bmxvYWRTZXJ2aWNlIH0gZnJvbSAnLi9kb2N1bWVudC1kb3dubG9hZC5zZXJ2aWNlJztcbmltcG9ydCB7IERvY3VtZW50UmVmU2VydmljZSB9IGZyb20gJy4vZG9jdW1lbnQtcmVmLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsZVNlbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuL2ZpbGUtc2VsZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUdyb3VwU2VydmljZSB9IGZyb20gJy4vZm9ybS1ncm91cC5zZXJ2aWNlJztcbmltcG9ydCB7IE9iamVjdFNlcnZpY2UgfSBmcm9tICcuL29iamVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlclRvb2xzU2VydmljZSB9IGZyb20gJy4vcm91dGVyLXRvb2xzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2Nyb2xsU2VydmljZSB9IGZyb20gJy4vc2Nyb2xsLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2luZG93UmVmU2VydmljZSB9IGZyb20gJy4vd2luZG93LXJlZi5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgV2luZG93UmVmU2VydmljZSxcbiAgICBEb2N1bWVudFJlZlNlcnZpY2UsXG4gICAgRG9jdW1lbnREb3dubG9hZFNlcnZpY2UsXG4gICAgRmlsZVNlbGVjdGlvblNlcnZpY2UsXG4gICAgRm9ybUdyb3VwU2VydmljZSxcbiAgICBPYmplY3RTZXJ2aWNlLFxuICAgIFJvdXRlclRvb2xzU2VydmljZSxcbiAgICBTY3JvbGxTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVXRpbFNlcnZpY2VzTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBVdGlsU2VydmljZXNNb2R1bGUsXG4gICAgQE9wdGlvbmFsKCkgcm91dGVyOiBSb3V0ZXIsXG4gICAgQE9wdGlvbmFsKCkgcmVhY3RpdmVGb3JtczogRm9ybUJ1aWxkZXIsXG4gICAgQE9wdGlvbmFsKCkgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1V0aWxTZXJ2aWNlc01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGluIHlvdXIgYmFzZSBBcHBNb2R1bGUgb25seS4nXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIXJvdXRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBpbXBvcnQgdGhlIFJvdXRlck1vZHVsZSBpbiB5b3VyIEFwcE1vZHVsZSEnKTtcbiAgICB9XG4gICAgaWYgKCFyZWFjdGl2ZUZvcm1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdZb3UgbmVlZCB0byBpbXBvcnQgdGhlIFJlYWN0aXZlRm9ybXNNb2R1bGUgaW4geW91ciBBcHBNb2R1bGUhJ1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCF0cmFuc2xhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1lvdSBuZWVkIHRvIGltcG9ydCB0aGUgVHJhbnNsYXRlTW9kdWxlIGluIHlvdXIgQXBwTW9kdWxlISdcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=