import { NzI18nService } from 'ng-zorro-antd/i18n';
export declare class UpdateLocalesNgZorroService {
    private i18n;
    constructor(i18n: NzI18nService);
    updateI18nService(lang: string): void;
    private updateDateLocale;
    private updateLocale;
}
