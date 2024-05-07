export declare class UnitComponent {
    value: number;
    minFraction: number;
    maxFraction: number;
    valueSigned: boolean;
    unit: string;
    get isNumber(): boolean;
    get format(): string;
}
