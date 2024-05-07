import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ActingErrorMessages } from '@sofico-framework/utils';
export class ActingErrorMessagesComponent {
}
ActingErrorMessagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-acting-error-messages',
                template: `
    <sof-alert type="danger" *ngFor="let err of actingErrorMessages$ | async">
      {{
        err?.translation
          ? err?.translation
          : (tc + '.' + err?.message | translate: err.messageParams)
      }}
    </sof-alert>
  `,
                styles: ["sof-alert{margin-bottom:1rem}sof-alert:last-of-type{margin-bottom:0}"]
            },] }
];
ActingErrorMessagesComponent.propDecorators = {
    tc: [{ type: Input }]
};
__decorate([
    ActingErrorMessages()
], ActingErrorMessagesComponent.prototype, "actingErrorMessages$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW5nLWVycm9yLW1lc3NhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvYWN0aW5nLWVycm9yLW1lc3NhZ2VzL2FjdGluZy1lcnJvci1tZXNzYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFFTCxtQkFBbUIsRUFDcEIsTUFBTSx5QkFBeUIsQ0FBQztBQWdCakMsTUFBTSxPQUFPLDRCQUE0Qjs7O1lBYnhDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7O2FBRUY7OztpQkFFRSxLQUFLOztBQUNpQjtJQUF0QixtQkFBbUIsRUFBRTswRUFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpbmdFcnJvck1lc3NhZ2UsXG4gIEFjdGluZ0Vycm9yTWVzc2FnZXNcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtYWN0aW5nLWVycm9yLW1lc3NhZ2VzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c29mLWFsZXJ0IHR5cGU9XCJkYW5nZXJcIiAqbmdGb3I9XCJsZXQgZXJyIG9mIGFjdGluZ0Vycm9yTWVzc2FnZXMkIHwgYXN5bmNcIj5cbiAgICAgIHt7XG4gICAgICAgIGVycj8udHJhbnNsYXRpb25cbiAgICAgICAgICA/IGVycj8udHJhbnNsYXRpb25cbiAgICAgICAgICA6ICh0YyArICcuJyArIGVycj8ubWVzc2FnZSB8IHRyYW5zbGF0ZTogZXJyLm1lc3NhZ2VQYXJhbXMpXG4gICAgICB9fVxuICAgIDwvc29mLWFsZXJ0PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9hY3RpbmctZXJyb3ItbWVzc2FnZXMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY3RpbmdFcnJvck1lc3NhZ2VzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGM6IHN0cmluZztcbiAgQEFjdGluZ0Vycm9yTWVzc2FnZXMoKSBhY3RpbmdFcnJvck1lc3NhZ2VzJDogT2JzZXJ2YWJsZTxBY3RpbmdFcnJvck1lc3NhZ2VbXT47XG59XG4iXX0=