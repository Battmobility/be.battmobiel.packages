import { __decorate } from 'tslib';
import { Component, ChangeDetectorRef, ViewChild, Input, NgModule } from '@angular/core';
import { Chart } from 'chart.js';
import { flatten } from 'lodash';
import { takeUntilDestroy, Changes, UntilDestroy } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';

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

class LineChartModule {
}
LineChartModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LineChartComponent],
                exports: [LineChartComponent],
                imports: [CommonModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { LineChartComponent, LineChartModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-line-chart.js.map
