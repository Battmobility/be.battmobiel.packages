import { Injectable } from '@angular/core';
import de from 'date-fns/locale/de';
import enGB from 'date-fns/locale/en-GB';
import es from 'date-fns/locale/es';
import fr from 'date-fns/locale/fr';
import ja from 'date-fns/locale/ja';
import nl from 'date-fns/locale/nl';
import { de_DE, en_GB, es_ES, fr_FR, ja_JP, nl_BE, NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
export class UpdateLocalesNgZorroService {
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
UpdateLocalesNgZorroService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UpdateLocalesNgZorroService_Factory() { return new UpdateLocalesNgZorroService(i0.ɵɵinject(i1.NzI18nService)); }, token: UpdateLocalesNgZorroService, providedIn: "root" });
UpdateLocalesNgZorroService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
UpdateLocalesNgZorroService.ctorParameters = () => [
    { type: NzI18nService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWxvY2FsZXMtbmctem9ycm8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L3NlcnZpY2VzL3NyYy9saWIvdXBkYXRlLWxvY2FsZXMtbmctem9ycm8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BDLE9BQU8sSUFBSSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BDLE9BQU8sRUFFTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssRUFFTCxhQUFhLEVBQ2QsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBSzVCLE1BQU0sT0FBTywyQkFBMkI7SUFDdEMsWUFBb0IsSUFBbUI7UUFBbkIsU0FBSSxHQUFKLElBQUksQ0FBZTtJQUFHLENBQUM7SUFFM0MsaUJBQWlCLENBQUMsSUFBWTtRQUM1QixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssS0FBSztnQkFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQixDQUFDLE1BQWtCO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTyxZQUFZLENBQUMsTUFBdUI7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztZQTdDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUxDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZGUgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2RlJztcbmltcG9ydCBlbkdCIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbi1HQic7XG5pbXBvcnQgZXMgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VzJztcbmltcG9ydCBmciBmcm9tICdkYXRlLWZucy9sb2NhbGUvZnInO1xuaW1wb3J0IGphIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9qYSc7XG5pbXBvcnQgbmwgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL25sJztcbmltcG9ydCB7XG4gIERhdGVMb2NhbGUsXG4gIGRlX0RFLFxuICBlbl9HQixcbiAgZXNfRVMsXG4gIGZyX0ZSLFxuICBqYV9KUCxcbiAgbmxfQkUsXG4gIE56STE4bkludGVyZmFjZSxcbiAgTnpJMThuU2VydmljZVxufSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVMb2NhbGVzTmdab3Jyb1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHt9XG5cbiAgdXBkYXRlSTE4blNlcnZpY2UobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICBjYXNlICdFTkcnOlxuICAgICAgICB0aGlzLnVwZGF0ZURhdGVMb2NhbGUoZW5HQik7XG4gICAgICAgIHRoaXMudXBkYXRlTG9jYWxlKGVuX0dCKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdOTEQnOlxuICAgICAgICB0aGlzLnVwZGF0ZURhdGVMb2NhbGUobmwpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsZShubF9CRSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRlJBJzpcbiAgICAgICAgdGhpcy51cGRhdGVEYXRlTG9jYWxlKGZyKTtcbiAgICAgICAgdGhpcy51cGRhdGVMb2NhbGUoZnJfRlIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0RFVSc6XG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZUxvY2FsZShkZSk7XG4gICAgICAgIHRoaXMudXBkYXRlTG9jYWxlKGRlX0RFKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTUEEnOlxuICAgICAgICB0aGlzLnVwZGF0ZURhdGVMb2NhbGUoZXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsZShlc19FUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSlBOJzpcbiAgICAgICAgdGhpcy51cGRhdGVEYXRlTG9jYWxlKGphKTtcbiAgICAgICAgdGhpcy51cGRhdGVMb2NhbGUoamFfSlApO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZUxvY2FsZShlbkdCKTtcbiAgICAgICAgdGhpcy51cGRhdGVMb2NhbGUoZW5fR0IpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURhdGVMb2NhbGUobG9jYWxlOiBEYXRlTG9jYWxlKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLnNldERhdGVMb2NhbGUobG9jYWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTG9jYWxlKGxvY2FsZTogTnpJMThuSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLnNldExvY2FsZShsb2NhbGUpO1xuICB9XG59XG4iXX0=