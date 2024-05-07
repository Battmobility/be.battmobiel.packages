import { CountryEnum, CurrencyEnum, DateFormatEnum, TimeFormatEnum } from '@sofico-framework/utils';
export interface AppConfig extends Readonly<{
    dateFormat: DateFormatEnum;
    defaultCountry: CountryEnum;
    currencyCode: CurrencyEnum;
    timeFormat: TimeFormatEnum;
}> {
}
