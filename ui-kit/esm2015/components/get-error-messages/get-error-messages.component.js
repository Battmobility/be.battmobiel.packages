import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { GetErrorMessage } from '@sofico-framework/utils';
import { map } from 'rxjs/operators';
export class GetErrorMessagesComponent {
    ngOnInit() {
        this.errorMessage$ = this.error$.pipe(map(error => `${this.tc}.${error}`));
    }
}
GetErrorMessagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-get-error-messages',
                template: `
    <sof-alert
      type="danger"
      *ngIf="errorMessage$ | async as msg"
      [isDismissible]="false"
    >
      {{ msg | translate }}
    </sof-alert>
  `,
                styles: [""]
            },] }
];
GetErrorMessagesComponent.propDecorators = {
    tc: [{ type: Input }]
};
__decorate([
    GetErrorMessage()
], GetErrorMessagesComponent.prototype, "error$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVycm9yLW1lc3NhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZ2V0LWVycm9yLW1lc3NhZ2VzL2dldC1lcnJvci1tZXNzYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFlckMsTUFBTSxPQUFPLHlCQUF5QjtJQUtwQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7OztHQVFUOzthQUVGOzs7aUJBRUUsS0FBSzs7QUFDYTtJQUFsQixlQUFlLEVBQUU7eURBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHZXRFcnJvck1lc3NhZ2UgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91dGlscyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1nZXQtZXJyb3ItbWVzc2FnZXMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzb2YtYWxlcnRcbiAgICAgIHR5cGU9XCJkYW5nZXJcIlxuICAgICAgKm5nSWY9XCJlcnJvck1lc3NhZ2UkIHwgYXN5bmMgYXMgbXNnXCJcbiAgICAgIFtpc0Rpc21pc3NpYmxlXT1cImZhbHNlXCJcbiAgICA+XG4gICAgICB7eyBtc2cgfCB0cmFuc2xhdGUgfX1cbiAgICA8L3NvZi1hbGVydD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vZ2V0LWVycm9yLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2V0RXJyb3JNZXNzYWdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRjOiBzdHJpbmc7XG4gIEBHZXRFcnJvck1lc3NhZ2UoKSBlcnJvciQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgZXJyb3JNZXNzYWdlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlJCA9IHRoaXMuZXJyb3IkLnBpcGUobWFwKGVycm9yID0+IGAke3RoaXMudGN9LiR7ZXJyb3J9YCkpO1xuICB9XG59XG4iXX0=