import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { flatten } from 'lodash';
import { Changes, takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
let LineChartComponent = class LineChartComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.cdRef.detach();
    }
    ngOnInit() {
        combineLatest([this.identifiersConfig$, this.chartData$])
            .pipe(takeUntilDestroy(this))
            .subscribe(([identifiersConfig, values]) => {
            this.setData(identifiersConfig, values);
        });
    }
    ngOnChanges() { }
    ngOnDestroy() {
        var _a;
        (_a = this === null || this === void 0 ? void 0 : this.chart) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    ngAfterViewInit() {
        const ctx = this.chartElem.nativeElement.getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'line',
            data: this.lineChartData,
            options: {
                tooltips: {
                    callbacks: {
                        label: (tooltipItem, data) => {
                            if (this.tooltipFn) {
                                const stackItemLabel = data.datasets[tooltipItem.datasetIndex].label || '';
                                return this.tooltipFn(tooltipItem.xLabel, stackItemLabel, tooltipItem.value, data.datasets[tooltipItem.datasetIndex].identifier);
                            }
                        }
                    }
                },
                aspectRatio: 1,
                responsive: true,
                legend: {
                    align: 'start',
                    rtl: true
                },
                scales: {
                    yAxes: [
                        {
                            display: true,
                            ticks: {
                                suggestedMax: this.suggestedMax,
                                suggestedMin: this.suggestedMin || 0
                            }
                        }
                    ]
                }
            }
        });
    }
    setData(identifiersConfig, values) {
        if (!values || !identifiersConfig) {
            return;
        }
        const labels = values.map(v => v === null || v === void 0 ? void 0 : v.xLabel);
        const identifiers = [
            ...new Set(flatten(values.map(v => v.yValues.map(yValue => yValue.identifier))))
        ];
        const datasets = identifiers.map(identifier => {
            const config = identifiersConfig.find(item => item.identifier === identifier);
            return {
                label: config === null || config === void 0 ? void 0 : config.label,
                fill: false,
                identifier,
                lineTension: 0.1,
                pointBorderWidth: 4,
                backgroundColor: config === null || config === void 0 ? void 0 : config.backgroundColor,
                borderColor: config === null || config === void 0 ? void 0 : config.backgroundColor,
                data: values.map(value => { var _a; return (_a = value.yValues.find(yValue => yValue.identifier === identifier)) === null || _a === void 0 ? void 0 : _a.value; })
            };
        });
        this.lineChartData = {
            labels,
            datasets
        };
        if (this.chart) {
            this.chart.data = this.lineChartData;
            this.chart.update();
        }
    }
};
LineChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-line-chart',
                template: `
    <div class="chart-container" style="position: relative; width:100%">
      <canvas #chart></canvas>
    </div>
  `,
                styles: [":host{width:100%;height:100%}"]
            },] }
];
LineChartComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
LineChartComponent.propDecorators = {
    chartElem: [{ type: ViewChild, args: ['chart', { static: true },] }],
    tooltipFn: [{ type: Input }],
    identifiersConfig: [{ type: Input }],
    suggestedMin: [{ type: Input }],
    suggestedMax: [{ type: Input }],
    chartData: [{ type: Input }]
};
__decorate([
    Changes('identifiersConfig')
], LineChartComponent.prototype, "identifiersConfig$", void 0);
__decorate([
    Changes('chartData')
], LineChartComponent.prototype, "chartData$", void 0);
LineChartComponent = __decorate([
    UntilDestroy()
], LineChartComponent);
export { LineChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUVULEtBQUssRUFJTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztJQVl4QixrQkFBa0IsU0FBbEIsa0JBQWtCO0lBb0I3QixZQUFvQixLQUF3QjtRQUF4QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxRQUFRO1FBQ04sYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQ1YsaUJBQTRDLEVBQzVDLE1BQWdDLENBQ2pDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXLEtBQVUsQ0FBQztJQUV0QixXQUFXOztRQUNULE1BQUEsSUFBSSxhQUFKLElB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QUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsMENBQzFELEtBQUssR0FBQSxDQUNaO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNuQixNQUFNO1lBQ04sUUFBUTtTQUNULENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUF0SUEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7OztHQUlUOzthQUVGOzs7WUEzQkMsaUJBQWlCOzs7d0JBK0JoQixTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt3QkFJbkMsS0FBSztnQ0FNTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOztBQUN3QjtJQUE3QixPQUFPLENBQUMsbUJBQW1CLENBQUM7OERBQW9CO0FBQzNCO0lBQXJCLE9BQU8sQ0FBQyxXQUFXLENBQUM7c0RBQVk7QUFsQnRCLGtCQUFrQjtJQVY5QixZQUFZLEVBQUU7R0FVRixrQkFBa0IsQ0E2SDlCO1NBN0hZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDaGFydElkZW50aWZpZXJDb25maWcsXG4gIE11bHRpVmFsdWVDaGFydFZhbHVlXG59IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC90eXBlcyc7XG5pbXBvcnQgeyBDaGFydCB9IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQ2hhbmdlcywgdGFrZVVudGlsRGVzdHJveSwgVW50aWxEZXN0cm95IH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWxpbmUtY2hhcnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjaGFydC1jb250YWluZXJcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6MTAwJVwiPlxuICAgICAgPGNhbnZhcyAjY2hhcnQ+PC9jYW52YXM+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaW5lQ2hhcnRDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG4gIEBWaWV3Q2hpbGQoJ2NoYXJ0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgY2hhcnRFbGVtOiBFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50PjtcblxuICBsaW5lQ2hhcnREYXRhOiBhbnk7XG4gIEBJbnB1dCgpIHRvb2x0aXBGbjogKFxuICAgIHhMYWJlbDogc3RyaW5nLFxuICAgIGl0ZW1MYWJlbDogc3RyaW5nLFxuICAgIHlWYWx1ZTogbnVtYmVyLFxuICAgIGlkZW50aWZpZXI/OiBzdHJpbmdcbiAgKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkZW50aWZpZXJzQ29uZmlnOiBDaGFydElkZW50aWZpZXJDb25maWdbXTtcbiAgQElucHV0KCkgc3VnZ2VzdGVkTWluOiBudW1iZXI7XG4gIEBJbnB1dCgpIHN1Z2dlc3RlZE1heDogbnVtYmVyO1xuICBASW5wdXQoKSBjaGFydERhdGE6IE11bHRpVmFsdWVDaGFydFZhbHVlW107XG4gIEBDaGFuZ2VzKCdpZGVudGlmaWVyc0NvbmZpZycpIGlkZW50aWZpZXJzQ29uZmlnJDtcbiAgQENoYW5nZXMoJ2NoYXJ0RGF0YScpIGNoYXJ0RGF0YSQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmNkUmVmLmRldGFjaCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5pZGVudGlmaWVyc0NvbmZpZyQsIHRoaXMuY2hhcnREYXRhJF0pXG4gICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95KHRoaXMpKVxuICAgICAgLnN1YnNjcmliZSgoW2lkZW50aWZpZXJzQ29uZmlnLCB2YWx1ZXNdKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YShcbiAgICAgICAgICBpZGVudGlmaWVyc0NvbmZpZyBhcyBDaGFydElkZW50aWZpZXJDb25maWdbXSxcbiAgICAgICAgICB2YWx1ZXMgYXMgTXVsdGlWYWx1ZUNoYXJ0VmFsdWVbXVxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcz8uY2hhcnQ/LmRlc3Ryb3koKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNoYXJ0RWxlbS5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgIGRhdGE6IHRoaXMubGluZUNoYXJ0RGF0YSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIGxhYmVsOiAodG9vbHRpcEl0ZW0sIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMudG9vbHRpcEZuKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tJdGVtTGFiZWwgPVxuICAgICAgICAgICAgICAgICAgZGF0YS5kYXRhc2V0c1t0b29sdGlwSXRlbS5kYXRhc2V0SW5kZXhdLmxhYmVsIHx8ICcnO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvb2x0aXBGbihcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXBJdGVtLnhMYWJlbCBhcyBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICBzdGFja0l0ZW1MYWJlbCxcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXBJdGVtLnZhbHVlIGFzIGFueSxcbiAgICAgICAgICAgICAgICAgIChkYXRhLmRhdGFzZXRzW3Rvb2x0aXBJdGVtLmRhdGFzZXRJbmRleF0gYXMgYW55KS5pZGVudGlmaWVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXNwZWN0UmF0aW86IDEsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgIGFsaWduOiAnc3RhcnQnLFxuICAgICAgICAgIHJ0bDogdHJ1ZVxuICAgICAgICB9IGFzIGFueSxcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0ZWRNYXg6IHRoaXMuc3VnZ2VzdGVkTWF4LFxuICAgICAgICAgICAgICAgIHN1Z2dlc3RlZE1pbjogdGhpcy5zdWdnZXN0ZWRNaW4gfHwgMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldERhdGEoXG4gICAgaWRlbnRpZmllcnNDb25maWc6IENoYXJ0SWRlbnRpZmllckNvbmZpZ1tdLFxuICAgIHZhbHVlczogTXVsdGlWYWx1ZUNoYXJ0VmFsdWVbXVxuICApOiB2b2lkIHtcbiAgICBpZiAoIXZhbHVlcyB8fCAhaWRlbnRpZmllcnNDb25maWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGFiZWxzID0gdmFsdWVzLm1hcCh2ID0+IHY/LnhMYWJlbCk7XG4gICAgY29uc3QgaWRlbnRpZmllcnMgPSBbXG4gICAgICAuLi5uZXcgU2V0KFxuICAgICAgICBmbGF0dGVuKHZhbHVlcy5tYXAodiA9PiB2LnlWYWx1ZXMubWFwKHlWYWx1ZSA9PiB5VmFsdWUuaWRlbnRpZmllcikpKVxuICAgICAgKVxuICAgIF07XG4gICAgY29uc3QgZGF0YXNldHMgPSBpZGVudGlmaWVycy5tYXAoaWRlbnRpZmllciA9PiB7XG4gICAgICBjb25zdCBjb25maWcgPSBpZGVudGlmaWVyc0NvbmZpZy5maW5kKFxuICAgICAgICBpdGVtID0+IGl0ZW0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllclxuICAgICAgKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhYmVsOiBjb25maWc/LmxhYmVsLFxuICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgaWRlbnRpZmllcixcbiAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogNCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb25maWc/LmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvbmZpZz8uYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBkYXRhOiB2YWx1ZXMubWFwKFxuICAgICAgICAgIHZhbHVlID0+XG4gICAgICAgICAgICB2YWx1ZS55VmFsdWVzLmZpbmQoeVZhbHVlID0+IHlWYWx1ZS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKVxuICAgICAgICAgICAgICA/LnZhbHVlXG4gICAgICAgIClcbiAgICAgIH07XG4gICAgfSk7XG4gICAgdGhpcy5saW5lQ2hhcnREYXRhID0ge1xuICAgICAgbGFiZWxzLFxuICAgICAgZGF0YXNldHNcbiAgICB9O1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRhdGEgPSB0aGlzLmxpbmVDaGFydERhdGE7XG4gICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19