import { DatePipe } from '@angular/common';
import { Pipe } from '@angular/core';
import { ConfigService } from '../services/config.service';
export class DateTimeConfigPipe {
    constructor(configService, datePipe) {
        this.configService = configService;
        this.datePipe = datePipe;
    }
    transform(value) {
        return this.datePipe.transform(value, this.configService.config.app.dateFormat +
            ' ' +
            this.configService.config.app.timeFormat);
    }
}
DateTimeConfigPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofDateTimeConfig' },] }
];
DateTimeConfigPipe.ctorParameters = () => [
    { type: ConfigService },
    { type: DatePipe }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLWNvbmZpZy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay9hcHAtY29uZmlnL3NyYy9saWIvcGlwZXMvZGF0ZS10aW1lLWNvbmZpZy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHM0QsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUNVLGFBQTRCLEVBQzVCLFFBQWtCO1FBRGxCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDekIsQ0FBQztJQUVKLFNBQVMsQ0FBQyxLQUFVO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzVCLEtBQUssRUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVTtZQUN0QyxHQUFHO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FDM0MsQ0FBQztJQUNKLENBQUM7OztZQWRGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTs7O1lBRjFCLGFBQWE7WUFGYixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJztcblxuQFBpcGUoeyBuYW1lOiAnc29mRGF0ZVRpbWVDb25maWcnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVDb25maWdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZVxuICApIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShcbiAgICAgIHZhbHVlLFxuICAgICAgdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZy5hcHAuZGF0ZUZvcm1hdCArXG4gICAgICAgICcgJyArXG4gICAgICAgIHRoaXMuY29uZmlnU2VydmljZS5jb25maWcuYXBwLnRpbWVGb3JtYXRcbiAgICApO1xuICB9XG59XG4iXX0=