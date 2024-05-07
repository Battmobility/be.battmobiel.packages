import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ChartIdentifierConfig, SingleValueChartValue } from '@sofico-framework/ui-kit/types';
export declare class BarChartComponent implements OnDestroy, OnChanges, OnInit, AfterViewInit {
    private cdRef;
    chartElem: ElementRef<HTMLCanvasElement>;
    identifiersConfig: ChartIdentifierConfig[];
    tooltipFn: (label: string, value: string, identifier?: string) => string;
    chartData: SingleValueChartValue[];
    identifiersConfig$: any;
    chartData$: any;
    private chart;
    private barChartData;
    constructor(cdRef: ChangeDetectorRef);
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnInit(): void;
    private setData;
}
