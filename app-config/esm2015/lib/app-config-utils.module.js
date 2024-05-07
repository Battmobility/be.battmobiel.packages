import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CurrencyConfigPipe } from './pipes/currency-config.pipe';
import { DateConfigPipe } from './pipes/date-config.pipe';
import { DateTimeConfigPipe } from './pipes/date-time-config.pipe';
import { TimeConfigPipe } from './pipes/time-config.pipe';
export class AppConfigUtilsModule {
}
AppConfigUtilsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    CurrencyConfigPipe,
                    DateConfigPipe,
                    TimeConfigPipe,
                    DateTimeConfigPipe
                ],
                exports: [
                    CurrencyConfigPipe,
                    DateConfigPipe,
                    TimeConfigPipe,
                    DateTimeConfigPipe
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpZy11dGlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL2FwcC1jb25maWcvc3JjL2xpYi9hcHAtY29uZmlnLXV0aWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBaUIxRCxNQUFNLE9BQU8sb0JBQW9COzs7WUFmaEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxjQUFjO29CQUNkLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxjQUFjO29CQUNkLGtCQUFrQjtpQkFDbkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VycmVuY3lDb25maWdQaXBlIH0gZnJvbSAnLi9waXBlcy9jdXJyZW5jeS1jb25maWcucGlwZSc7XG5pbXBvcnQgeyBEYXRlQ29uZmlnUGlwZSB9IGZyb20gJy4vcGlwZXMvZGF0ZS1jb25maWcucGlwZSc7XG5pbXBvcnQgeyBEYXRlVGltZUNvbmZpZ1BpcGUgfSBmcm9tICcuL3BpcGVzL2RhdGUtdGltZS1jb25maWcucGlwZSc7XG5pbXBvcnQgeyBUaW1lQ29uZmlnUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS1jb25maWcucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDdXJyZW5jeUNvbmZpZ1BpcGUsXG4gICAgRGF0ZUNvbmZpZ1BpcGUsXG4gICAgVGltZUNvbmZpZ1BpcGUsXG4gICAgRGF0ZVRpbWVDb25maWdQaXBlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDdXJyZW5jeUNvbmZpZ1BpcGUsXG4gICAgRGF0ZUNvbmZpZ1BpcGUsXG4gICAgVGltZUNvbmZpZ1BpcGUsXG4gICAgRGF0ZVRpbWVDb25maWdQaXBlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29uZmlnVXRpbHNNb2R1bGUge31cbiJdfQ==