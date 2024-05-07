import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { flatten } from 'lodash';
import { Changes, takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
let StackedBarChartComponent = class StackedBarChartComponent {
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
            type: 'bar',
            data: this.barChartData,
            options: {
                tooltips: {
                    callbacks: {
                        label: (tooltipItem, data) => {
                            if (this.tooltipFn) {
                                const cur = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                const total = data.datasets
                                    .map(v => { var _a; return ((_a = v === null || v === void 0 ? void 0 : v.data[tooltipItem.index]) !== null && _a !== void 0 ? _a : 0); })
                                    .reduce((a, b) => a + b);
                                const percentage = (cur / total) * 100;
                                const stackItemLabel = data.datasets[tooltipItem.datasetIndex].label || '';
                                return this.tooltipFn(tooltipItem.xLabel, stackItemLabel, tooltipItem.value, data.datasets[tooltipItem.datasetIndex].identifier, Math.round(percentage * 100) / 100);
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
                    xAxes: [
                        {
                            stacked: true
                        }
                    ],
                    yAxes: [
                        {
                            stacked: true
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
                identifier,
                backgroundColor: config === null || config === void 0 ? void 0 : config.backgroundColor,
                data: values.map(value => { var _a; return (_a = value.yValues.find(yValue => yValue.identifier === identifier)) === null || _a === void 0 ? void 0 : _a.value; })
            };
        });
        this.barChartData = {
            labels,
            datasets
        };
        if (this.chart) {
            this.chart.data = this.barChartData;
            this.chart.update();
        }
    }
};
StackedBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-stacked-bar-chart',
                template: `
    <div class="chart-container" style="position: relative; width:100%">
      <canvas #chart></canvas>
    </div>
  `,
                styles: [":host{width:100%;height:100%}"]
            },] }
];
StackedBarChartComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StackedBarChartComponent.propDecorators = {
    chartElem: [{ type: ViewChild, args: ['chart', { static: true },] }],
    identifiersConfig: [{ type: Input }],
    tooltipFn: [{ type: Input }],
    chartData: [{ type: Input }]
};
__decorate([
    Changes('identifiersConfig')
], StackedBarChartComponent.prototype, "identifiersConfig$", void 0);
__decorate([
    Changes('chartData')
], StackedBarChartComponent.prototype, "chartData$", void 0);
StackedBarChartComponent = __decorate([
    UntilDestroy()
], StackedBarChartComponent);
export { StackedBarChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tlZC1iYXItY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9zdGFja2VkLWJhci1jaGFydC9zdGFja2VkLWJhci1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUVULEtBQUssRUFJTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7SUFZeEIsd0JBQXdCLFNBQXhCLHdCQUF3QjtJQW1CbkMsWUFBb0IsS0FBd0I7UUFBeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsUUFBUTtRQUNOLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUNWLGlCQUE0QyxFQUM1QyxNQUFnQyxDQUNqQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVyxLQUFVLENBQUM7SUFFdEIsV0FBVzs7UUFDVCxN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OzREQUFZO0FBakJ0Qix3QkFBd0I7SUFWcEMsWUFBWSxFQUFFO0dBVUYsd0JBQXdCLENBaUlwQztTQWpJWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2hhcnRJZGVudGlmaWVyQ29uZmlnLFxuICBNdWx0aVZhbHVlQ2hhcnRWYWx1ZVxufSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvdHlwZXMnO1xuaW1wb3J0ICogYXMgQ2hhcnQgZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBDaGFuZ2VzLCB0YWtlVW50aWxEZXN0cm95LCBVbnRpbERlc3Ryb3kgfSBmcm9tICduZ3gtcmVhY3RpdmV0b29sa2l0JztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcblxuQFVudGlsRGVzdHJveSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2Ytc3RhY2tlZC1iYXItY2hhcnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjaGFydC1jb250YWluZXJcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6MTAwJVwiPlxuICAgICAgPGNhbnZhcyAjY2hhcnQ+PC9jYW52YXM+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3N0YWNrZWQtYmFyLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhY2tlZEJhckNoYXJ0Q29tcG9uZW50XG4gIGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NoYXJ0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgY2hhcnRFbGVtOiBFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50PjtcblxuICBwcml2YXRlIGNoYXJ0OiBDaGFydDtcbiAgcHJpdmF0ZSBiYXJDaGFydERhdGE6IGFueTtcbiAgQElucHV0KCkgaWRlbnRpZmllcnNDb25maWc6IENoYXJ0SWRlbnRpZmllckNvbmZpZ1tdO1xuICBASW5wdXQoKSB0b29sdGlwRm46IChcbiAgICB4TGFiZWw6IHN0cmluZyB8IG51bWJlcixcbiAgICBpdGVtTGFiZWw6IHN0cmluZyxcbiAgICB5VmFsdWU6IG51bWJlcixcbiAgICBpZGVudGlmaWVyPzogc3RyaW5nLFxuICAgIHBlcmNlbnRhZ2U/OiBudW1iZXJcbiAgKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNoYXJ0RGF0YTogTXVsdGlWYWx1ZUNoYXJ0VmFsdWVbXTtcbiAgQENoYW5nZXMoJ2lkZW50aWZpZXJzQ29uZmlnJykgaWRlbnRpZmllcnNDb25maWckO1xuICBAQ2hhbmdlcygnY2hhcnREYXRhJykgY2hhcnREYXRhJDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuY2RSZWYuZGV0YWNoKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLmlkZW50aWZpZXJzQ29uZmlnJCwgdGhpcy5jaGFydERhdGEkXSlcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpXG4gICAgICAuc3Vic2NyaWJlKChbaWRlbnRpZmllcnNDb25maWcsIHZhbHVlc10pID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKFxuICAgICAgICAgIGlkZW50aWZpZXJzQ29uZmlnIGFzIENoYXJ0SWRlbnRpZmllckNvbmZpZ1tdLFxuICAgICAgICAgIHZhbHVlcyBhcyBNdWx0aVZhbHVlQ2hhcnRWYWx1ZVtdXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzPy5jaGFydD8uZGVzdHJveSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2hhcnRFbGVtLm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgdHlwZTogJ2JhcicsXG4gICAgICBkYXRhOiB0aGlzLmJhckNoYXJ0RGF0YSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIGxhYmVsOiAodG9vbHRpcEl0ZW06IGFueSwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy50b29sdGlwRm4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXIgPSBkYXRhLmRhdGFzZXRzW3Rvb2x0aXBJdGVtLmRhdGFzZXRJbmRleF0uZGF0YVtcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXBJdGVtLmluZGV4XG4gICAgICAgICAgICAgICAgXSBhcyBudW1iZXI7XG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBkYXRhLmRhdGFzZXRzXG4gICAgICAgICAgICAgICAgICAubWFwKHYgPT4gKHY/LmRhdGFbdG9vbHRpcEl0ZW0uaW5kZXhdID8/IDApIGFzIG51bWJlcilcbiAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKGN1ciAvIHRvdGFsKSAqIDEwMDtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFja0l0ZW1MYWJlbCA9XG4gICAgICAgICAgICAgICAgICBkYXRhLmRhdGFzZXRzW3Rvb2x0aXBJdGVtLmRhdGFzZXRJbmRleF0ubGFiZWwgfHwgJyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9vbHRpcEZuKFxuICAgICAgICAgICAgICAgICAgdG9vbHRpcEl0ZW0ueExhYmVsLFxuICAgICAgICAgICAgICAgICAgc3RhY2tJdGVtTGFiZWwsXG4gICAgICAgICAgICAgICAgICB0b29sdGlwSXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIChkYXRhLmRhdGFzZXRzW3Rvb2x0aXBJdGVtLmRhdGFzZXRJbmRleF0gYXMgYW55KS5pZGVudGlmaWVyLFxuICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChwZXJjZW50YWdlICogMTAwKSAvIDEwMFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzcGVjdFJhdGlvOiAxLFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICBhbGlnbjogJ3N0YXJ0JyxcbiAgICAgICAgICBydGw6IHRydWVcbiAgICAgICAgfSBhcyBhbnksXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHhBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RGF0YShcbiAgICBpZGVudGlmaWVyc0NvbmZpZzogQ2hhcnRJZGVudGlmaWVyQ29uZmlnW10sXG4gICAgdmFsdWVzOiBNdWx0aVZhbHVlQ2hhcnRWYWx1ZVtdXG4gICk6IHZvaWQge1xuICAgIGlmICghdmFsdWVzIHx8ICFpZGVudGlmaWVyc0NvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYWJlbHMgPSB2YWx1ZXMubWFwKHYgPT4gdj8ueExhYmVsKTtcbiAgICBjb25zdCBpZGVudGlmaWVycyA9IFtcbiAgICAgIC4uLm5ldyBTZXQoXG4gICAgICAgIGZsYXR0ZW4odmFsdWVzLm1hcCh2ID0+IHYueVZhbHVlcy5tYXAoeVZhbHVlID0+IHlWYWx1ZS5pZGVudGlmaWVyKSkpXG4gICAgICApXG4gICAgXTtcbiAgICBjb25zdCBkYXRhc2V0cyA9IGlkZW50aWZpZXJzLm1hcChpZGVudGlmaWVyID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IGlkZW50aWZpZXJzQ29uZmlnLmZpbmQoXG4gICAgICAgIGl0ZW0gPT4gaXRlbS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyXG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWw6IGNvbmZpZz8ubGFiZWwsXG4gICAgICAgIGlkZW50aWZpZXIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29uZmlnPy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGRhdGE6IHZhbHVlcy5tYXAoXG4gICAgICAgICAgdmFsdWUgPT5cbiAgICAgICAgICAgIHZhbHVlLnlWYWx1ZXMuZmluZCh5VmFsdWUgPT4geVZhbHVlLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpXG4gICAgICAgICAgICAgID8udmFsdWVcbiAgICAgICAgKVxuICAgICAgfTtcbiAgICB9KTtcbiAgICB0aGlzLmJhckNoYXJ0RGF0YSA9IHtcbiAgICAgIGxhYmVscyxcbiAgICAgIGRhdGFzZXRzXG4gICAgfTtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5jaGFydC5kYXRhID0gdGhpcy5iYXJDaGFydERhdGE7XG4gICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19