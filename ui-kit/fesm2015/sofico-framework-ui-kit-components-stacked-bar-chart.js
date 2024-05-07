import { __decorate } from 'tslib';
import { Component, ChangeDetectorRef, ViewChild, Input, NgModule } from '@angular/core';
import * as Chart from 'chart.js';
import { flatten } from 'lodash';
import { takeUntilDestroy, Changes, UntilDestroy } from 'ngx-reactivetoolkit';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';

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

class StackedBarChartModule {
}
StackedBarChartModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StackedBarChartComponent],
                exports: [StackedBarChartComponent],
                imports: [CommonModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { StackedBarChartComponent, StackedBarChartModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-stacked-bar-chart.js.map
