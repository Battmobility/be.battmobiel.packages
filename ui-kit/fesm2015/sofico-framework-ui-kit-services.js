import { ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import de from 'date-fns/locale/de';
import enGB from 'date-fns/locale/en-GB';
import es from 'date-fns/locale/es';
import fr from 'date-fns/locale/fr';
import ja from 'date-fns/locale/ja';
import nl from 'date-fns/locale/nl';
import { en_GB, ja_JP, es_ES, de_DE, fr_FR, nl_BE, NzI18nService } from 'ng-zorro-antd/i18n';

class UpdateLocalesNgZorroService {
    constructor(i18n) {
        this.i18n = i18n;
    }
    updateI18nService(lang) {
        switch (lang) {
            case 'ENG':
                this.updateDateLocale(enGB);
                this.updateLocale(en_GB);
                break;
            case 'NLD':
                this.updateDateLocale(nl);
                this.updateLocale(nl_BE);
                break;
            case 'FRA':
                this.updateDateLocale(fr);
                this.updateLocale(fr_FR);
                break;
            case 'DEU':
                this.updateDateLocale(de);
                this.updateLocale(de_DE);
                break;
            case 'SPA':
                this.updateDateLocale(es);
                this.updateLocale(es_ES);
                break;
            case 'JPN':
                this.updateDateLocale(ja);
                this.updateLocale(ja_JP);
                break;
            default:
                this.updateDateLocale(enGB);
                this.updateLocale(en_GB);
                break;
        }
    }
    updateDateLocale(locale) {
        this.i18n.setDateLocale(locale);
    }
    updateLocale(locale) {
        this.i18n.setLocale(locale);
    }
}
UpdateLocalesNgZorroService.ɵprov = ɵɵdefineInjectable({ factory: function UpdateLocalesNgZorroService_Factory() { return new UpdateLocalesNgZorroService(ɵɵinject(NzI18nService)); }, token: UpdateLocalesNgZorroService, providedIn: "root" });
UpdateLocalesNgZorroService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
UpdateLocalesNgZorroService.ctorParameters = () => [
    { type: NzI18nService }
];

/**
 * Generated bundle index. Do not edit.
 */

export { UpdateLocalesNgZorroService };
//# sourceMappingURL=sofico-framework-ui-kit-services.js.map
