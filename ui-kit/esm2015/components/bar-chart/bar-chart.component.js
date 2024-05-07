import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Changes, takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
let BarChartComponent = class BarChartComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.cdRef.detach();
    }
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
                                const label = data.labels[tooltipItem.index];
                                const value = data.datasets[0].data[tooltipItem.index];
                                const identifier = data.datasets[0].identifiers[tooltipItem.index];
                                return this.tooltipFn(label, value, identifier);
                            }
                        }
                    }
                },
                aspectRatio: 1,
                legend: {
                    align: 'start',
                    rtl: true
                },
                responsive: true
            }
        });
    }
    ngOnChanges() { }
    ngOnInit() {
        combineLatest([this.identifiersConfig$, this.chartData$])
            .pipe(takeUntilDestroy(this))
            .subscribe(([identifiersConfig, values]) => {
            this.setData(identifiersConfig, values);
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
BarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-bar-chart',
                template: `
    <div class="chart-container" style="position: relative;  width:100%">
      <canvas #chart></canvas>
    </div>
  `,
                styles: [""]
            },] }
];
BarChartComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
BarChartComponent.propDecorators = {
    chartElem: [{ type: ViewChild, args: ['chart', { static: true },] }],
    identifiersConfig: [{ type: Input }],
    tooltipFn: [{ type: Input }],
    chartData: [{ type: Input }]
};
__decorate([
    Changes('identifiersConfig')
], BarChartComponent.prototype, "identifiersConfig$", void 0);
__decorate([
    Changes('chartData')
], BarChartComponent.prototype, "chartData$", void 0);
BarChartComponent = __decorate([
    UntilDestroy()
], BarChartComponent);
export { BarChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUVULEtBQUssRUFJTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7SUFZeEIsaUJBQWlCLFNBQWpCLGlCQUFpQjtJQWdCNUIsWUFBb0IsS0FBd0I7UUFBeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVzs7UUFDVCxNQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxLQUFLLDBDQUFFLE9BQU8sR0FBRztJQUN6QixDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUMxQixJQUFJLEVBQUUsS0FBSztZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN2QixPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFO29CQUNSLFNBQVMsRUFBRTt3QkFDVCxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVB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dGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2hhcnRJZGVudGlmaWVyQ29uZmlnLFxuICBTaW5nbGVWYWx1ZUNoYXJ0VmFsdWVcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L3R5cGVzJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgQ2hhbmdlcywgdGFrZVVudGlsRGVzdHJveSwgVW50aWxEZXN0cm95IH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWJhci1jaGFydCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0LWNvbnRhaW5lclwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyAgd2lkdGg6MTAwJVwiPlxuICAgICAgPGNhbnZhcyAjY2hhcnQ+PC9jYW52YXM+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2Jhci1jaGFydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJhckNoYXJ0Q29tcG9uZW50XG4gIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NoYXJ0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgY2hhcnRFbGVtOiBFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50PjtcbiAgQElucHV0KCkgaWRlbnRpZmllcnNDb25maWc6IENoYXJ0SWRlbnRpZmllckNvbmZpZ1tdO1xuICBASW5wdXQoKSB0b29sdGlwRm46IChcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgaWRlbnRpZmllcj86IHN0cmluZ1xuICApID0+IHN0cmluZztcbiAgQElucHV0KCkgY2hhcnREYXRhOiBTaW5nbGVWYWx1ZUNoYXJ0VmFsdWVbXTtcbiAgQENoYW5nZXMoJ2lkZW50aWZpZXJzQ29uZmlnJykgaWRlbnRpZmllcnNDb25maWckO1xuICBAQ2hhbmdlcygnY2hhcnREYXRhJykgY2hhcnREYXRhJDtcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG4gIHByaXZhdGUgYmFyQ2hhcnREYXRhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmNkUmVmLmRldGFjaCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcz8uY2hhcnQ/LmRlc3Ryb3koKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNoYXJ0RWxlbS5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgZGF0YTogdGhpcy5iYXJDaGFydERhdGEsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICBsYWJlbDogKHRvb2x0aXBJdGVtLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnRvb2x0aXBGbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZGF0YS5sYWJlbHNbdG9vbHRpcEl0ZW0uaW5kZXhdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YS5kYXRhc2V0c1swXS5kYXRhW3Rvb2x0aXBJdGVtLmluZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gKGRhdGEuZGF0YXNldHNbMF0gYXMgYW55KS5pZGVudGlmaWVyc1tcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXBJdGVtLmluZGV4XG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b29sdGlwRm4obGFiZWwgYXMgYW55LCB2YWx1ZSBhcyBhbnksIGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3BlY3RSYXRpbzogMSxcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgYWxpZ246ICdzdGFydCcsXG4gICAgICAgICAgcnRsOiB0cnVlXG4gICAgICAgIH0gYXMgYW55LFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5pZGVudGlmaWVyc0NvbmZpZyQsIHRoaXMuY2hhcnREYXRhJF0pXG4gICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95KHRoaXMpKVxuICAgICAgLnN1YnNjcmliZSgoW2lkZW50aWZpZXJzQ29uZmlnLCB2YWx1ZXNdKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YShcbiAgICAgICAgICBpZGVudGlmaWVyc0NvbmZpZyBhcyBDaGFydElkZW50aWZpZXJDb25maWdbXSxcbiAgICAgICAgICB2YWx1ZXMgYXMgU2luZ2xlVmFsdWVDaGFydFZhbHVlW11cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREYXRhKFxuICAgIGlkZW50aWZpZXJzQ29uZmlnOiBDaGFydElkZW50aWZpZXJDb25maWdbXSxcbiAgICB2YWx1ZXM6IFNpbmdsZVZhbHVlQ2hhcnRWYWx1ZVtdXG4gICk6IHZvaWQge1xuICAgIGlmICghdmFsdWVzIHx8ICFpZGVudGlmaWVyc0NvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYWJlbHMgPSBpZGVudGlmaWVyc0NvbmZpZy5tYXAodiA9PiB2LmxhYmVsKTtcbiAgICB0aGlzLmJhckNoYXJ0RGF0YSA9IHtcbiAgICAgIGxhYmVscyxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiB2YWx1ZXMubWFwKHYgPT4gdj8udmFsdWUpLFxuICAgICAgICAgIGlkZW50aWZpZXJzOiBpZGVudGlmaWVyc0NvbmZpZy5tYXAodiA9PiB2LmlkZW50aWZpZXIpLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaWRlbnRpZmllcnNDb25maWcubWFwKFxuICAgICAgICAgICAgY29uZmlnID0+IGNvbmZpZy5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRhdGEgPSB0aGlzLmJhckNoYXJ0RGF0YTtcbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=