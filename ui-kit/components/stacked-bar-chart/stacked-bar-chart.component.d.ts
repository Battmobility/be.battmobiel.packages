import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ChartIdentifierConfig, MultiValueChartValue } from '@sofico-framework/ui-kit/types';
export declare class StackedBarChartComponent implements OnDestroy, AfterViewInit, OnChanges, OnInit {
    private cdRef;
    chartElem: ElementRef<HTMLCanvasElement>;
    private chart;
    private barChartData;
    identifiersConfig: ChartIdentifierConfig[];
    tooltipFn: (xLabel: string | number, itemLabel: string, yValue: number, identifier?: string, percentage?: number) => string;
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
