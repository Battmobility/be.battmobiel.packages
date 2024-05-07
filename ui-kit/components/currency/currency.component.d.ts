export declare class CurrencyComponent {
    /**
     * The value we want to show
     */
    value: number;
    /**
     * The currency code
     */
    currencyCode: string;
    /**
     * The minimal fraction
     */
    minFraction: number;
    /**
     * The maximal fraction
     */
    maxFraction: number;
    get isNumber(): boolean;
    get format(): string;
}
