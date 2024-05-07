import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ChartIdentifierConfig, MultiValueChartValue } from '@sofico-framework/ui-kit/types';
export declare class LineChartComponent implements OnDestroy, OnChanges, OnInit, AfterViewInit {
    private cdRef;
    private chart;
    chartElem: ElementRef<HTMLCanvasElement>;
    lineChartData: any;
    tooltipFn: (xLabel: string, itemLabel: string, yValue: number, identifier?: string) => string;
    identifiersConfig: ChartIdentifierConfig[];
    suggestedMin: number;
    suggestedMax: number;
    chartData: MultiValueChartValue[];
    identifiersConfig$: any;
    chartData$: any;
    constructor(cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private setData;
}
