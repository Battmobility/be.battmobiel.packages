import { __decorate } from 'tslib';
import { Component, ChangeDetectorRef, ViewChild, Input, NgModule } from '@angular/core';
import { Chart } from 'chart.js';
import { takeUntilDestroy, Changes, UntilDestroy } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';

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

class PieChartModule {
}
PieChartModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PieChartComponent],
                exports: [PieChartComponent],
                imports: [CommonModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { PieChartComponent, PieChartModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-pie-chart.js.map
