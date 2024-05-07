import { Overlay } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class DialogConfigService {
    constructor(overlay) {
        this.overlay = overlay;
        this.positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        this.overlayConfig = {
            maxHeight: 'auto',
            height: 'auto',
            width: '600px',
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.positionStrategy
        };
    }
}
DialogConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DialogConfigService_Factory() { return new DialogConfigService(i0.ɵɵinject(i1.Overlay)); }, token: DialogConfigService, providedIn: "root" });
DialogConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
DialogConfigService.ctorParameters = () => [
    { type: Overlay }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kaWFsb2cvc2VydmljZXMvZGlhbG9nLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQWlCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSzNDLE1BQU0sT0FBTyxtQkFBbUI7SUFlOUIsWUFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQWRwQyxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTzthQUM1QixRQUFRLEVBQUU7YUFDVixNQUFNLEVBQUU7YUFDUixrQkFBa0IsRUFBRTthQUNwQixnQkFBZ0IsRUFBRSxDQUFDO1FBQ3RCLGtCQUFhLEdBQWtCO1lBQzdCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLE9BQU87WUFDZCxXQUFXLEVBQUUsSUFBSTtZQUNqQixjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDckQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUN4QyxDQUFDO0lBRXFDLENBQUM7Ozs7WUFsQnpDLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTFEsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbmZpZ1NlcnZpY2Uge1xuICBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XG4gICAgLnBvc2l0aW9uKClcbiAgICAuZ2xvYmFsKClcbiAgICAuY2VudGVySG9yaXpvbnRhbGx5KClcbiAgICAuY2VudGVyVmVydGljYWxseSgpO1xuICBvdmVybGF5Q29uZmlnOiBPdmVybGF5Q29uZmlnID0ge1xuICAgIG1heEhlaWdodDogJ2F1dG8nLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIHdpZHRoOiAnNjAwcHgnLFxuICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxuICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMucG9zaXRpb25TdHJhdGVneVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cbn1cbiJdfQ==