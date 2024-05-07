import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Changes, takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
let PieChartComponent = class PieChartComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.cdRef.detach();
    }
    ngOnChanges() { }
    ngOnInit() {
        combineLatest([this.identifiersConfig$, this.chartData$])
            .pipe(takeUntilDestroy(this))
            .subscribe(([identifiersConfig, values]) => {
            this.setData(identifiersConfig, values);
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this === null || this === void 0 ? void 0 : this.chart) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    ngAfterViewInit() {
        const ctx = this.chartElem.nativeElement.getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'pie',
            data: this.barChartData,
            options: {
                tooltips: {
                    callbacks: {
                        label: (tooltipItem, data) => {
                            if (this.tooltipFn) {
                                const label = data.labels[tooltipItem.index];
                                const value = data.datasets[0].data[tooltipItem.index];
                                const identifier = data.datasets[0].identifiers[tooltipItem.index];
                                return this.tooltipFn(label, value, identifier);
                            }
                        }
                    }
                },
                legend: {
                    align: 'start',
                    rtl: true
                },
                aspectRatio: 1,
                responsive: true
            }
        });
    }
    setData(identifiersConfig, values) {
        if (!values || !identifiersConfig) {
            return;
        }
        const labels = identifiersConfig.map(v => v.label);
        this.barChartData = {
            labels,
            datasets: [
                {
                    data: values.map(v => v === null || v === void 0 ? void 0 : v.value),
                    identifiers: identifiersConfig.map(v => v.identifier),
                    backgroundColor: identifiersConfig.map(config => config.backgroundColor)
                }
            ]
        };
        if (this.chart) {
            this.chart.data = this.barChartData;
            this.chart.update();
        }
    }
};
PieChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-pie-chart',
                template: `
    <div class="chart-container" style="position: relative;  width:100%">
      <canvas #chart></canvas>
    </div>
  `,
                styles: [":host{width:100%;height:100%}"]
            },] }
];
PieChartComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
PieChartComponent.propDecorators = {
    chartElem: [{ type: ViewChild, args: ['chart', { static: true },] }],
    identifiersConfig: [{ type: Input }],
    tooltipFn: [{ type: Input }],
    chartData: [{ type: Input }]
};
__decorate([
    Changes('identifiersConfig')
], PieChartComponent.prototype, "identifiersConfig$", void 0);
__decorate([
    Changes('chartData')
], PieChartComponent.prototype, "chartData$", void 0);
PieChartComponent = __decorate([
    UntilDestroy()
], PieChartComponent);
export { PieChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUVULEtBQUssRUFJTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7SUFZeEIsaUJBQWlCLFNBQWpCLGlCQUFpQjtJQWdCNUIsWUFBb0IsS0FBd0I7UUFBeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVyxLQUFVLENBQUM7SUFFdEIsUUFBUTtRQUNOLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUNWLGlCQUE0QyxFQUM1QyxNQUFpQyxDQUNsQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVzs7UUFDVCxNQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxLQUFLLDBDQUFFLE9BQU8sR0FBRztJQUN6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dGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2hhcnRJZGVudGlmaWVyQ29uZmlnLFxuICBTaW5nbGVWYWx1ZUNoYXJ0VmFsdWVcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L3R5cGVzJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgQ2hhbmdlcywgdGFrZVVudGlsRGVzdHJveSwgVW50aWxEZXN0cm95IH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLXBpZS1jaGFydCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNvbnRhaW5lclwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyAgd2lkdGg6MTAwJVwiPlxuICAgICAgPGNhbnZhcyAjY2hhcnQ+PC9jYW52YXM+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3BpZS1jaGFydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBpZUNoYXJ0Q29tcG9uZW50XG4gIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NoYXJ0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgY2hhcnRFbGVtOiBFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50PjtcbiAgQElucHV0KCkgaWRlbnRpZmllcnNDb25maWc6IENoYXJ0SWRlbnRpZmllckNvbmZpZ1tdO1xuICBASW5wdXQoKSB0b29sdGlwRm46IChcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgaWRlbnRpZmllcj86IHN0cmluZ1xuICApID0+IHN0cmluZztcbiAgQElucHV0KCkgY2hhcnREYXRhOiBTaW5nbGVWYWx1ZUNoYXJ0VmFsdWVbXTtcbiAgQENoYW5nZXMoJ2lkZW50aWZpZXJzQ29uZmlnJykgaWRlbnRpZmllcnNDb25maWckO1xuICBAQ2hhbmdlcygnY2hhcnREYXRhJykgY2hhcnREYXRhJDtcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG4gIHByaXZhdGUgYmFyQ2hhcnREYXRhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmNkUmVmLmRldGFjaCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMuaWRlbnRpZmllcnNDb25maWckLCB0aGlzLmNoYXJ0RGF0YSRdKVxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSlcbiAgICAgIC5zdWJzY3JpYmUoKFtpZGVudGlmaWVyc0NvbmZpZywgdmFsdWVzXSkgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoXG4gICAgICAgICAgaWRlbnRpZmllcnNDb25maWcgYXMgQ2hhcnRJZGVudGlmaWVyQ29uZmlnW10sXG4gICAgICAgICAgdmFsdWVzIGFzIFNpbmdsZVZhbHVlQ2hhcnRWYWx1ZVtdXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXM/LmNoYXJ0Py5kZXN0cm95KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jaGFydEVsZW0ubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICB0eXBlOiAncGllJyxcbiAgICAgIGRhdGE6IHRoaXMuYmFyQ2hhcnREYXRhLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgbGFiZWw6ICh0b29sdGlwSXRlbSwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy50b29sdGlwRm4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRhdGEubGFiZWxzW3Rvb2x0aXBJdGVtLmluZGV4XSBhcyBhbnk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhLmRhdGFzZXRzWzBdLmRhdGFbdG9vbHRpcEl0ZW0uaW5kZXhdIGFzIGFueTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gKGRhdGEuZGF0YXNldHNbMF0gYXMgYW55KS5pZGVudGlmaWVyc1tcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXBJdGVtLmluZGV4XG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b29sdGlwRm4obGFiZWwsIHZhbHVlLCBpZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgYWxpZ246ICdzdGFydCcsXG4gICAgICAgICAgcnRsOiB0cnVlXG4gICAgICAgIH0gYXMgYW55LFxuICAgICAgICBhc3BlY3RSYXRpbzogMSxcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREYXRhKFxuICAgIGlkZW50aWZpZXJzQ29uZmlnOiBDaGFydElkZW50aWZpZXJDb25maWdbXSxcbiAgICB2YWx1ZXM6IFNpbmdsZVZhbHVlQ2hhcnRWYWx1ZVtdXG4gICk6IHZvaWQge1xuICAgIGlmICghdmFsdWVzIHx8ICFpZGVudGlmaWVyc0NvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYWJlbHMgPSBpZGVudGlmaWVyc0NvbmZpZy5tYXAodiA9PiB2LmxhYmVsKTtcbiAgICB0aGlzLmJhckNoYXJ0RGF0YSA9IHtcbiAgICAgIGxhYmVscyxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiB2YWx1ZXMubWFwKHYgPT4gdj8udmFsdWUpLFxuICAgICAgICAgIGlkZW50aWZpZXJzOiBpZGVudGlmaWVyc0NvbmZpZy5tYXAodiA9PiB2LmlkZW50aWZpZXIpLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaWRlbnRpZmllcnNDb25maWcubWFwKFxuICAgICAgICAgICAgY29uZmlnID0+IGNvbmZpZy5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRhdGEgPSB0aGlzLmJhckNoYXJ0RGF0YTtcbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=