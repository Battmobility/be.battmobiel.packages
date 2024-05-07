import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ChartIdentifierConfig, SingleValueChartValue } from '@sofico-framework/ui-kit/types';
export declare class PieChartComponent implements OnDestroy, OnInit, OnChanges, AfterViewInit {
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
    ngOnChanges(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private setData;
}
