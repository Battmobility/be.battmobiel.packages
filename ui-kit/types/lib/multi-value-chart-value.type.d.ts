export interface MultiValueChartValue extends Readonly<{
    xLabel: string;
    yValues: {
        identifier: string;
        value: number;
    }[];
}> {
}
