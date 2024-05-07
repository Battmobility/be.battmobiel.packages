import { of, ReplaySubject, Subject, Observable, throwError, concat, defer, EMPTY, BehaviorSubject, merge, fromEvent } from 'rxjs';
import { map, distinctUntilChanged, debounceTime, catchError, finalize, publishReplay, refCount, tap, concatMap, skipWhile, ignoreElements, switchMap, filter, auditTime, startWith, mapTo, scan, take } from 'rxjs/operators';
import { ɵɵdefineInjectable, Injectable, NgModule, Optional, SkipSelf, ɵɵinject, InjectionToken, Inject, Pipe, ChangeDetectorRef, LOCALE_ID } from '@angular/core';
import { __rest, __decorate } from 'tslib';
import { isFunction, get, orderBy, slice, isString } from 'lodash';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { CommonModule, getCurrencySymbol, ViewportScroller } from '@angular/common';
import { async } from 'rxjs/internal/scheduler/async';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

class CustomTranslationHandler {
    handle(params) {
        const defaultContext = '@COMMON';
        const missingContext = 'TRANSLATE:';
        const parts = 2;
        const translationKeyArray = params.key.split('.');
        if (translationKeyArray.length !== parts) {
            const error = `${missingContext} invalid key. It's made of ${translationKeyArray.length} part(s) should be ${parts} [${params.key}]`;
            console.error(error);
            return of(error);
        }
        if (['', 'undefined', 'null'].includes(translationKeyArray[0].trim())) {
            const error = `${missingContext} tc seems to be ${translationKeyArray[0]}. [${params.key}]`;
            console.error(error);
            return of(error);
        }
        if (translationKeyArray[0] === defaultContext) {
            return params.key;
        }
        translationKeyArray[0] = defaultContext;
        const newTranslationKey = translationKeyArray.join('.');
        return (params.translateService
            // when get doesn't find a translation, the handler is called again
            // the if statement above is then executed
            .get(newTranslationKey, params.interpolateParams)
            .pipe(map(v => (v === newTranslationKey ? missingContext + params.key : v))));
    }
}

let rootInjector;
function setRootInjector(injector) {
    rootInjector = injector;
}

class HttpStatusService {
    constructor() {
        this.loadingSub$ = new ReplaySubject(1);
        /**
         * When navigating to a page it can be possible that the last value of the loading is false
         * When the user navigates to that page and that page starts loading the new value of the loading is true
         * Because of that we get the ExpressionChangedAfterItHasBeenCheckedError and we get a flickr in some cases
         * For that reason we are using a debounceTime of 0 to ensure a fluent loading experience
         */
        this.loading$ = this.loadingSub$.pipe(distinctUntilChanged(), debounceTime(0));
        this.actingSub$ = new ReplaySubject(1);
        this.acting$ = this.actingSub$.pipe(distinctUntilChanged(), debounceTime(0));
        this.getErrorSub$ = new Subject();
        this.getError$ = this.getErrorSub$.pipe(distinctUntilChanged());
        this.actingErrorsSub$ = new Subject();
        this.actingErrors$ = this.actingErrorsSub$.pipe(distinctUntilChanged());
        this.attached = true;
    }
    set loading(val) {
        if (this.attached) {
            this.loadingSub$.next(val);
        }
    }
    set acting(val) {
        this.actingSub$.next(val);
    }
    set getError(val) {
        this.getErrorSub$.next(val);
    }
    set actingErrors(val) {
        this.actingErrorsSub$.next(val);
    }
    /**
     * Detaches the interceptor from the loading status.
     * This is used when we don't want to show loading spinners for
     * some actions of the page (like polling)
     * Don't forget to use the reattach function afterwards
     */
    detach() {
        this.attached = false;
        this.loadingSub$.next(false);
    }
    /**
     * Reattaches the interceptor to the loading status
     * Has to be called on every page that uses the detach functionality
     */
    reattach() {
        this.attached = true;
    }
}
HttpStatusService.ɵprov = ɵɵdefineInjectable({ factory: function HttpStatusService_Factory() { return new HttpStatusService(); }, token: HttpStatusService, providedIn: "root" });
HttpStatusService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

function Acting() {
    return (target, key) => {
        target[key] = Observable.create(observer => {
            const service = rootInjector.get(HttpStatusService);
            const sub = service.acting$.subscribe(v => {
                observer.next(v);
            });
            return () => sub.unsubscribe();
        });
    };
}

function ActingErrorMessages() {
    return (target, key) => {
        target[key] = Observable.create(observer => {
            const service = rootInjector.get(HttpStatusService);
            const sub = service.actingErrors$.subscribe(v => {
                observer.next(v);
            });
            return () => sub.unsubscribe();
        });
    };
}

function GetErrorMessage() {
    return (target, key) => {
        target[key] = Observable.create(observer => {
            const service = rootInjector.get(HttpStatusService);
            const sub = service.getError$.subscribe(v => {
                observer.next(v);
            });
            return () => sub.unsubscribe();
        });
    };
}

function getWindow() {
    return window;
}
class WindowRefService {
    get nativeWindow() {
        return getWindow();
    }
}
WindowRefService.decorators = [
    { type: Injectable }
];

function GetRouterState() {
    return (target, key) => {
        const secretSub = `_${key}$Sub`;
        const secretObs = `_${key}$Obs`;
        const accessorSub = `${key}$Sub`;
        const accessorObs = `${key}$Obs`;
        Object.defineProperty(target, accessorSub, {
            get() {
                var _a;
                if (this[secretSub]) {
                    return this[secretSub];
                }
                this[secretSub] = new ReplaySubject(1);
                const nativeWindow = rootInjector.get(WindowRefService).nativeWindow;
                if (((_a = nativeWindow.history.state) === null || _a === void 0 ? void 0 : _a.data) !== undefined) {
                    const _b = nativeWindow.history.state, { data } = _b, rest = __rest(_b, ["data"]);
                    this[secretSub].next(data);
                    nativeWindow.history.replaceState(rest, null);
                }
                else {
                    this[secretSub].next(undefined);
                }
                return this[secretSub];
            }
        });
        Object.defineProperty(target, accessorObs, {
            get() {
                if (this[secretObs]) {
                    return this[secretObs];
                }
                this[secretObs] = this[accessorSub].asObservable();
                return this[secretObs];
            }
        });
        Object.defineProperty(target, key, {
            get() {
                return this[accessorObs];
            },
            set() {
                throw new Error('You cannot set this property in the Component if you use @GetRouterState');
            }
        });
    };
}

function Loading() {
    return (target, key) => {
        target[key] = Observable.create(observer => {
            const service = rootInjector.get(HttpStatusService);
            const sub = service.loading$.subscribe(v => {
                observer.next(v);
            });
            return () => sub.unsubscribe();
        });
    };
}

var CountryEnum;
(function (CountryEnum) {
    CountryEnum["AFGHANISTAN"] = "AF";
    CountryEnum["ALAND_ISLANDS"] = "AX";
    CountryEnum["ALBANIA"] = "AL";
    CountryEnum["ALGERIA"] = "DZ";
    CountryEnum["AMERICAN_SAMOA"] = "AS";
    CountryEnum["ANDORRA"] = "AD";
    CountryEnum["ANGOLA"] = "AO";
    CountryEnum["ANGUILLA"] = "AI";
    CountryEnum["ANTARCTICA"] = "AQ";
    CountryEnum["ANTIGUA_AND_BARBUDA"] = "AG";
    CountryEnum["ARGENTINA"] = "AR";
    CountryEnum["ARMENIA"] = "AM";
    CountryEnum["ARUBA"] = "AW";
    CountryEnum["AUSTRALIA"] = "AU";
    CountryEnum["AUSTRIA"] = "AT";
    CountryEnum["AZERBAIJAN"] = "AZ";
    CountryEnum["BAHAMAS_THE"] = "BS";
    CountryEnum["BAHRAIN"] = "BH";
    CountryEnum["BANGLADESH"] = "BD";
    CountryEnum["BARBADOS"] = "BB";
    CountryEnum["BELARUS"] = "BY";
    CountryEnum["BELGIUM"] = "BE";
    CountryEnum["BELIZE"] = "BZ";
    CountryEnum["BENIN"] = "BJ";
    CountryEnum["BERMUDA"] = "BM";
    CountryEnum["BHUTAN"] = "BT";
    CountryEnum["BOLIVIA_PLURINATIONAL_STATE_OF"] = "BO";
    CountryEnum["BONAIRE_SINT_EUSTATIUS_AND_SABA"] = "BQ";
    CountryEnum["BOSNIA_AND_HERZEGOVINA"] = "BA";
    CountryEnum["BOTSWANA"] = "BW";
    CountryEnum["BOUVET_ISLAND"] = "BV";
    CountryEnum["BRAZIL"] = "BR";
    CountryEnum["BRITISH_INDIAN_OCEAN_TERRITORY_THE"] = "IO";
    CountryEnum["BRUNEI_DARUSSALAM"] = "BN";
    CountryEnum["BULGARIA"] = "BG";
    CountryEnum["BURKINA_FASO"] = "BF";
    CountryEnum["BURUNDI"] = "BI";
    CountryEnum["CABO_VERDE"] = "CV";
    CountryEnum["CAMBODIA"] = "KH";
    CountryEnum["CAMEROON"] = "CM";
    CountryEnum["CANADA"] = "CA";
    CountryEnum["CAYMAN_ISLANDS_THE"] = "KY";
    CountryEnum["CENTRAL_AFRICAN_REPUBLIC_THE"] = "CF";
    CountryEnum["CHAD"] = "TD";
    CountryEnum["CHILE"] = "CL";
    CountryEnum["CHINA"] = "CN";
    CountryEnum["CHRISTMAS_ISLAND"] = "CX";
    CountryEnum["COCOS_KEELING_ISLANDS_THE"] = "CC";
    CountryEnum["COLOMBIA"] = "CO";
    CountryEnum["COMOROS_THE"] = "KM";
    CountryEnum["CONGO_THE_DEMOCRATIC_REPUBLIC_OF_THE"] = "CD";
    CountryEnum["CONGO_THE"] = "CG";
    CountryEnum["COOK_ISLANDS_THE"] = "CK";
    CountryEnum["COSTA_RICA"] = "CR";
    CountryEnum["CROATIA"] = "HR";
    CountryEnum["CUBA"] = "CU";
    CountryEnum["CURACAO"] = "CW";
    CountryEnum["CYPRUS"] = "CY";
    CountryEnum["CZECHIA"] = "CZ";
    CountryEnum["COTE_D_IVOIRE"] = "CI";
    CountryEnum["DENMARK"] = "DK";
    CountryEnum["DJIBOUTI"] = "DJ";
    CountryEnum["DOMINICA"] = "DM";
    CountryEnum["DOMINICAN_REPUBLIC_THE"] = "DO";
    CountryEnum["ECUADOR"] = "EC";
    CountryEnum["EGYPT"] = "EG";
    CountryEnum["EL_SALVADOR"] = "SV";
    CountryEnum["EQUATORIAL_GUINEA"] = "GQ";
    CountryEnum["ERITREA"] = "ER";
    CountryEnum["ESTONIA"] = "EE";
    CountryEnum["ESWATINI"] = "SZ";
    CountryEnum["ETHIOPIA"] = "ET";
    CountryEnum["FALKLAND_ISLANDS_THE_MALVINAS"] = "FK";
    CountryEnum["FAROE_ISLANDS_THE"] = "FO";
    CountryEnum["FIJI"] = "FJ";
    CountryEnum["FINLAND"] = "FI";
    CountryEnum["FRANCE"] = "FR";
    CountryEnum["FRENCH_GUIANA"] = "GF";
    CountryEnum["FRENCH_POLYNESIA"] = "PF";
    CountryEnum["FRENCH_SOUTHERN_TERRITORIES_THE"] = "TF";
    CountryEnum["GABON"] = "GA";
    CountryEnum["GAMBIA_THE"] = "GM";
    CountryEnum["GEORGIA"] = "GE";
    CountryEnum["GERMANY"] = "DE";
    CountryEnum["GHANA"] = "GH";
    CountryEnum["GIBRALTAR"] = "GI";
    CountryEnum["GREECE"] = "GR";
    CountryEnum["GREENLAND"] = "GL";
    CountryEnum["GRENADA"] = "GD";
    CountryEnum["GUADELOUPE"] = "GP";
    CountryEnum["GUAM"] = "GU";
    CountryEnum["GUATEMALA"] = "GT";
    CountryEnum["GUERNSEY"] = "GG";
    CountryEnum["GUINEA"] = "GN";
    CountryEnum["GUINEA_BISSAU"] = "GW";
    CountryEnum["GUYANA"] = "GY";
    CountryEnum["HAITI"] = "HT";
    CountryEnum["HEARD_ISLAND_AND_MCDONALD_ISLANDS"] = "HM";
    CountryEnum["HOLY_SEE_THE"] = "VA";
    CountryEnum["HONDURAS"] = "HN";
    CountryEnum["HONG_KONG"] = "HK";
    CountryEnum["HUNGARY"] = "HU";
    CountryEnum["ICELAND"] = "IS";
    CountryEnum["INDIA"] = "IN";
    CountryEnum["INDONESIA"] = "ID";
    CountryEnum["IRAN_ISLAMIC_REPUBLIC_OF"] = "IR";
    CountryEnum["IRAQ"] = "IQ";
    CountryEnum["IRELAND"] = "IE";
    CountryEnum["ISLE_OF_MAN"] = "IM";
    CountryEnum["ISRAEL"] = "IL";
    CountryEnum["ITALY"] = "IT";
    CountryEnum["JAMAICA"] = "JM";
    CountryEnum["JAPAN"] = "JP";
    CountryEnum["JERSEY"] = "JE";
    CountryEnum["JORDAN"] = "JO";
    CountryEnum["KAZAKHSTAN"] = "KZ";
    CountryEnum["KENYA"] = "KE";
    CountryEnum["KIRIBATI"] = "KI";
    CountryEnum["KOREA_THE_DEMOCRATIC_PEOPLES_REPUBLIC_OF"] = "KP";
    CountryEnum["KOREA_THE_REPUBLIC_OF"] = "KR";
    CountryEnum["KUWAIT"] = "KW";
    CountryEnum["KYRGYZSTAN"] = "KG";
    CountryEnum["LAO_PEOPLES_DEMOCRATIC_REPUBLIC_THE"] = "LA";
    CountryEnum["LATVIA"] = "LV";
    CountryEnum["LEBANON"] = "LB";
    CountryEnum["LESOTHO"] = "LS";
    CountryEnum["LIBERIA"] = "LR";
    CountryEnum["LIBYA"] = "LY";
    CountryEnum["LIECHTENSTEIN"] = "LI";
    CountryEnum["LITHUANIA"] = "LT";
    CountryEnum["LUXEMBOURG"] = "LU";
    CountryEnum["MACAO"] = "MO";
    CountryEnum["MADAGASCAR"] = "MG";
    CountryEnum["MALAWI"] = "MW";
    CountryEnum["MALAYSIA"] = "MY";
    CountryEnum["MALDIVES"] = "MV";
    CountryEnum["MALI"] = "ML";
    CountryEnum["MALTA"] = "MT";
    CountryEnum["MARSHALL_ISLANDS_THE"] = "MH";
    CountryEnum["MARTINIQUE"] = "MQ";
    CountryEnum["MAURITANIA"] = "MR";
    CountryEnum["MAURITIUS"] = "MU";
    CountryEnum["MAYOTTE"] = "YT";
    CountryEnum["MEXICO"] = "MX";
    CountryEnum["MICRONESIA_FEDERATED_STATES_OF"] = "FM";
    CountryEnum["MOLDOVA_THE_REPUBLIC_OF"] = "MD";
    CountryEnum["MONACO"] = "MC";
    CountryEnum["MONGOLIA"] = "MN";
    CountryEnum["MONTENEGRO"] = "ME";
    CountryEnum["MONTSERRAT"] = "MS";
    CountryEnum["MOROCCO"] = "MA";
    CountryEnum["MOZAMBIQUE"] = "MZ";
    CountryEnum["MYANMAR"] = "MM";
    CountryEnum["NAMIBIA"] = "NA";
    CountryEnum["NAURU"] = "NR";
    CountryEnum["NEPAL"] = "NP";
    CountryEnum["NETHERLANDS_THE"] = "NL";
    CountryEnum["NEW_CALEDONIA"] = "NC";
    CountryEnum["NEW_ZEALAND"] = "NZ";
    CountryEnum["NICARAGUA"] = "NI";
    CountryEnum["NIGER_THE"] = "NE";
    CountryEnum["NIGERIA"] = "NG";
    CountryEnum["NIUE"] = "NU";
    CountryEnum["NORFOLK_ISLAND"] = "NF";
    CountryEnum["NORTHERN_MARIANA_ISLANDS_THE"] = "MP";
    CountryEnum["NORWAY"] = "NO";
    CountryEnum["OMAN"] = "OM";
    CountryEnum["PAKISTAN"] = "PK";
    CountryEnum["PALAU"] = "PW";
    CountryEnum["PALESTINE_STATE_OF"] = "PS";
    CountryEnum["PANAMA"] = "PA";
    CountryEnum["PAPUA_NEW_GUINEA"] = "PG";
    CountryEnum["PARAGUAY"] = "PY";
    CountryEnum["PERU"] = "PE";
    CountryEnum["PHILIPPINES_THE"] = "PH";
    CountryEnum["PITCAIRN"] = "PN";
    CountryEnum["POLAND"] = "PL";
    CountryEnum["PORTUGAL"] = "PT";
    CountryEnum["PUERTO_RICO"] = "PR";
    CountryEnum["QATAR"] = "QA";
    CountryEnum["REPUBLIC_OF_NORTH_MACEDONIA"] = "MK";
    CountryEnum["ROMANIA"] = "RO";
    CountryEnum["RUSSIAN_FEDERATION_THE"] = "RU";
    CountryEnum["RWANDA"] = "RW";
    CountryEnum["REUNION"] = "RE";
    CountryEnum["SAINT_BARTHELEMY"] = "BL";
    CountryEnum["SAINT_HELENA_ASCENSION_AND_TRISTAN_DA_CUNHA"] = "SH";
    CountryEnum["SAINT_KITTS_AND_NEVIS"] = "KN";
    CountryEnum["SAINT_LUCIA"] = "LC";
    CountryEnum["SAINT_MARTIN_FRENCH_PART"] = "MF";
    CountryEnum["SAINT_PIERRE_AND_MIQUELON"] = "PM";
    CountryEnum["SAINT_VINCENT_AND_THE_GRENADINES"] = "VC";
    CountryEnum["SAMOA"] = "WS";
    CountryEnum["SAN_MARINO"] = "SM";
    CountryEnum["SAO_TOME_AND_PRINCIPE"] = "ST";
    CountryEnum["SAUDI_ARABIA"] = "SA";
    CountryEnum["SENEGAL"] = "SN";
    CountryEnum["SERBIA"] = "RS";
    CountryEnum["SEYCHELLES"] = "SC";
    CountryEnum["SIERRA_LEONE"] = "SL";
    CountryEnum["SINGAPORE"] = "SG";
    CountryEnum["SINT_MAARTEN_DUTCH_PART"] = "SX";
    CountryEnum["SLOVAKIA"] = "SK";
    CountryEnum["SLOVENIA"] = "SI";
    CountryEnum["SOLOMON_ISLANDS"] = "SB";
    CountryEnum["SOMALIA"] = "SO";
    CountryEnum["SOUTH_AFRICA"] = "ZA";
    CountryEnum["SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"] = "GS";
    CountryEnum["SOUTH_SUDAN"] = "SS";
    CountryEnum["SPAIN"] = "ES";
    CountryEnum["SRI_LANKA"] = "LK";
    CountryEnum["SUDAN_THE"] = "SD";
    CountryEnum["SURINAME"] = "SR";
    CountryEnum["SVALBARD_AND_JAN_MAYEN"] = "SJ";
    CountryEnum["SWEDEN"] = "SE";
    CountryEnum["SWITZERLAND"] = "CH";
    CountryEnum["SYRIAN_ARAB_REPUBLIC"] = "SY";
    CountryEnum["TAIWAN_PROVINCE_OF_CHINA"] = "TW";
    CountryEnum["TAJIKISTAN"] = "TJ";
    CountryEnum["TANZANIA_UNITED_REPUBLIC_OF"] = "TZ";
    CountryEnum["THAILAND"] = "TH";
    CountryEnum["TIMOR_LESTE"] = "TL";
    CountryEnum["TOGO"] = "TG";
    CountryEnum["TOKELAU"] = "TK";
    CountryEnum["TONGA"] = "TO";
    CountryEnum["TRINIDAD_AND_TOBAGO"] = "TT";
    CountryEnum["TUNISIA"] = "TN";
    CountryEnum["TURKEY"] = "TR";
    CountryEnum["TURKMENISTAN"] = "TM";
    CountryEnum["TURKS_AND_CAICOS_ISLANDS_THE"] = "TC";
    CountryEnum["TUVALU"] = "TV";
    CountryEnum["UGANDA"] = "UG";
    CountryEnum["UKRAINE"] = "UA";
    CountryEnum["UNITED_ARAB_EMIRATES_THE"] = "AE";
    CountryEnum["UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND_THE"] = "GB";
    CountryEnum["UNITED_STATES_MINOR_OUTLYING_ISLANDS_THE"] = "UM";
    CountryEnum["UNITED_STATES_OF_AMERICA_THE"] = "US";
    CountryEnum["URUGUAY"] = "UY";
    CountryEnum["UZBEKISTAN"] = "UZ";
    CountryEnum["VANUATU"] = "VU";
    CountryEnum["VENEZUELA_BOLIVARIAN_REPUBLIC_OF"] = "VE";
    CountryEnum["VIETNAM"] = "VN";
    CountryEnum["VIRGIN_ISLANDS_BRITISH"] = "VG";
    CountryEnum["VIRGIN_ISLANDS_US"] = "VI";
    CountryEnum["WALLIS_AND_FUTUNA"] = "WF";
    CountryEnum["WESTERN_SAHARA"] = "EH";
    CountryEnum["YEMEN"] = "YE";
    CountryEnum["ZAMBIA"] = "ZM";
    CountryEnum["ZIMBABWE"] = "ZW";
})(CountryEnum || (CountryEnum = {}));

var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum["AFGHANI"] = "AFN";
    CurrencyEnum["ALGERIAN_DINAR"] = "DZD";
    CurrencyEnum["ARGENTINE_PESO"] = "ARS";
    CurrencyEnum["ARMENIAN_DRAM"] = "AMD";
    CurrencyEnum["ARUBAN_FLORIN"] = "AWG";
    CurrencyEnum["AUSTRALIAN_DOLLAR"] = "AUD";
    CurrencyEnum["AZERBAIJAN_MANAT"] = "AZN";
    CurrencyEnum["BAHAMIAN_DOLLAR"] = "BSD";
    CurrencyEnum["BAHRAINI_DINAR"] = "BHD";
    CurrencyEnum["BAHT"] = "THB";
    CurrencyEnum["BALBOA"] = "PAB";
    CurrencyEnum["BARBADOS_DOLLAR"] = "BBD";
    CurrencyEnum["BELARUSIAN_RUBLE"] = "BYN";
    CurrencyEnum["BELIZE_DOLLAR"] = "BZD";
    CurrencyEnum["BERMUDIAN_DOLLAR"] = "BMD";
    CurrencyEnum["BOLIVAR_SOBERANO"] = "VES";
    CurrencyEnum["BOLIVIANO"] = "BOB";
    CurrencyEnum["BRAZILIAN_REAL"] = "BRL";
    CurrencyEnum["BRUNEI_DOLLAR"] = "BND";
    CurrencyEnum["BULGARIAN_LEV"] = "BGN";
    CurrencyEnum["BURUNDI_FRANC"] = "BIF";
    CurrencyEnum["CABO_VERDE_ESCUDO"] = "CVE";
    CurrencyEnum["CANADIAN_DOLLAR"] = "CAD";
    CurrencyEnum["CAYMAN_ISLANDS_DOLLAR"] = "KYD";
    CurrencyEnum["CFA_FRANC_BCEAO"] = "XOF";
    CurrencyEnum["CFA_FRANC_BEAC"] = "XAF";
    CurrencyEnum["CFP_FRANC"] = "XPF";
    CurrencyEnum["CHILEAN_PESO"] = "CLP";
    CurrencyEnum["COLOMBIAN_PESO"] = "COP";
    CurrencyEnum["COMORIAN_FRANC"] = "KMF";
    CurrencyEnum["CONGOLESE_FRANC"] = "CDF";
    CurrencyEnum["CONVERTIBLE_MARK"] = "BAM";
    CurrencyEnum["CORDOBA_ORO"] = "NIO";
    CurrencyEnum["COSTA_RICAN_COLON"] = "CRC";
    CurrencyEnum["CUBAN_PESO"] = "CUP";
    CurrencyEnum["CZECH_KORUNA"] = "CZK";
    CurrencyEnum["DALASI"] = "GMD";
    CurrencyEnum["DANISH_KRONE"] = "DKK";
    CurrencyEnum["DENAR"] = "MKD";
    CurrencyEnum["DJIBOUTI_FRANC"] = "DJF";
    CurrencyEnum["DOBRA"] = "STN";
    CurrencyEnum["DOMINICAN_PESO"] = "DOP";
    CurrencyEnum["DONG"] = "VND";
    CurrencyEnum["EAST_CARIBBEAN_DOLLAR"] = "XCD";
    CurrencyEnum["EGYPTIAN_POUND"] = "EGP";
    CurrencyEnum["EL_SALVADOR_COLON"] = "SVC";
    CurrencyEnum["ETHIOPIAN_BIRR"] = "ETB";
    CurrencyEnum["EURO"] = "EUR";
    CurrencyEnum["FALKLAND_ISLANDS_POUND"] = "FKP";
    CurrencyEnum["FIJI_DOLLAR"] = "FJD";
    CurrencyEnum["FORINT"] = "HUF";
    CurrencyEnum["GHANA_CEDI"] = "GHS";
    CurrencyEnum["GIBRALTAR_POUND"] = "GIP";
    CurrencyEnum["GOURDE"] = "HTG";
    CurrencyEnum["GUARANI"] = "PYG";
    CurrencyEnum["GUINEAN_FRANC"] = "GNF";
    CurrencyEnum["GUYANA_DOLLAR"] = "GYD";
    CurrencyEnum["HONG_KONG_DOLLAR"] = "HKD";
    CurrencyEnum["HRYVNIA"] = "UAH";
    CurrencyEnum["ICELAND_KRONA"] = "ISK";
    CurrencyEnum["INDIAN_RUPEE"] = "INR";
    CurrencyEnum["IRANIAN_RIAL"] = "IRR";
    CurrencyEnum["IRAQI_DINAR"] = "IQD";
    CurrencyEnum["JAMAICAN_DOLLAR"] = "JMD";
    CurrencyEnum["JORDANIAN_DINAR"] = "JOD";
    CurrencyEnum["KENYAN_SHILLING"] = "KES";
    CurrencyEnum["KINA"] = "PGK";
    CurrencyEnum["KUNA"] = "HRK";
    CurrencyEnum["KUWAITI_DINAR"] = "KWD";
    CurrencyEnum["KWANZA"] = "AOA";
    CurrencyEnum["KYAT"] = "MMK";
    CurrencyEnum["LAO_KIP"] = "LAK";
    CurrencyEnum["LARI"] = "GEL";
    CurrencyEnum["LEBANESE_POUND"] = "LBP";
    CurrencyEnum["LEK"] = "ALL";
    CurrencyEnum["LEMPIRA"] = "HNL";
    CurrencyEnum["LEONE"] = "SLL";
    CurrencyEnum["LIBERIAN_DOLLAR"] = "LRD";
    CurrencyEnum["LIBYAN_DINAR"] = "LYD";
    CurrencyEnum["LILANGENI"] = "SZL";
    CurrencyEnum["LOTI"] = "LSL";
    CurrencyEnum["MALAGASY_ARIARY"] = "MGA";
    CurrencyEnum["MALAWI_KWACHA"] = "MWK";
    CurrencyEnum["MALAYSIAN_RINGGIT"] = "MYR";
    CurrencyEnum["MAURITIUS_RUPEE"] = "MUR";
    CurrencyEnum["MEXICAN_PESO"] = "MXN";
    CurrencyEnum["MOLDOVAN_LEU"] = "MDL";
    CurrencyEnum["MOROCCAN_DIRHAM"] = "MAD";
    CurrencyEnum["MOZAMBIQUE_METICAL"] = "MZN";
    CurrencyEnum["MVDOL"] = "BOV";
    CurrencyEnum["NAIRA"] = "NGN";
    CurrencyEnum["NAKFA"] = "ERN";
    CurrencyEnum["NAMIBIA_DOLLAR"] = "NAD";
    CurrencyEnum["NEPALESE_RUPEE"] = "NPR";
    CurrencyEnum["NETHERLANDS_ANTILLEAN_GUILDER"] = "ANG";
    CurrencyEnum["NEW_ISRAELI_SHEQEL"] = "ILS";
    CurrencyEnum["NEW_TAIWAN_DOLLAR"] = "TWD";
    CurrencyEnum["NEW_ZEALAND_DOLLAR"] = "NZD";
    CurrencyEnum["NGULTRUM"] = "BTN";
    CurrencyEnum["NORTH_KOREAN_WON"] = "KPW";
    CurrencyEnum["NORWEGIAN_KRONE"] = "NOK";
    CurrencyEnum["OUGUIYA"] = "MRU";
    CurrencyEnum["PA_ANGA"] = "TOP";
    CurrencyEnum["PAKISTAN_RUPEE"] = "PKR";
    CurrencyEnum["PATACA"] = "MOP";
    CurrencyEnum["PESO_CONVERTIBLE"] = "CUC";
    CurrencyEnum["PESO_URUGUAYO"] = "UYU";
    CurrencyEnum["PHILIPPINE_PESO"] = "PHP";
    CurrencyEnum["POUND_STERLING"] = "GBP";
    CurrencyEnum["PULA"] = "BWP";
    CurrencyEnum["QATARI_RIAL"] = "QAR";
    CurrencyEnum["QUETZAL"] = "GTQ";
    CurrencyEnum["RAND"] = "ZAR";
    CurrencyEnum["RIAL_OMANI"] = "OMR";
    CurrencyEnum["RIEL"] = "KHR";
    CurrencyEnum["ROMANIAN_LEU"] = "RON";
    CurrencyEnum["RUFIYAA"] = "MVR";
    CurrencyEnum["RUPIAH"] = "IDR";
    CurrencyEnum["RUSSIAN_RUBLE"] = "RUB";
    CurrencyEnum["RWANDA_FRANC"] = "RWF";
    CurrencyEnum["SAINT_HELENA_POUND"] = "SHP";
    CurrencyEnum["SAUDI_RIYAL"] = "SAR";
    CurrencyEnum["SERBIAN_DINAR"] = "RSD";
    CurrencyEnum["SEYCHELLES_RUPEE"] = "SCR";
    CurrencyEnum["SINGAPORE_DOLLAR"] = "SGD";
    CurrencyEnum["SOL"] = "PEN";
    CurrencyEnum["SOLOMON_ISLANDS_DOLLAR"] = "SBD";
    CurrencyEnum["SOM"] = "KGS";
    CurrencyEnum["SOMALI_SHILLING"] = "SOS";
    CurrencyEnum["SOMONI"] = "TJS";
    CurrencyEnum["SOUTH_SUDANESE_POUND"] = "SSP";
    CurrencyEnum["SRI_LANKA_RUPEE"] = "LKR";
    CurrencyEnum["SUCRE"] = "XSU";
    CurrencyEnum["SUDANESE_POUND"] = "SDG";
    CurrencyEnum["SURINAM_DOLLAR"] = "SRD";
    CurrencyEnum["SWEDISH_KRONA"] = "SEK";
    CurrencyEnum["SWISS_FRANC"] = "CHF";
    CurrencyEnum["SYRIAN_POUND"] = "SYP";
    CurrencyEnum["TAKA"] = "BDT";
    CurrencyEnum["TALA"] = "WST";
    CurrencyEnum["TANZANIAN_SHILLING"] = "TZS";
    CurrencyEnum["TENGE"] = "KZT";
    CurrencyEnum["TRINIDAD_AND_TOBAGO_DOLLAR"] = "TTD";
    CurrencyEnum["TUGRIK"] = "MNT";
    CurrencyEnum["TUNISIAN_DINAR"] = "TND";
    CurrencyEnum["TURKISH_LIRA"] = "TRY";
    CurrencyEnum["TURKMENISTAN_NEW_MANAT"] = "TMT";
    CurrencyEnum["UAE_DIRHAM"] = "AED";
    CurrencyEnum["UGANDA_SHILLING"] = "UGX";
    CurrencyEnum["US_DOLLAR"] = "USD";
    CurrencyEnum["UZBEKISTAN_SUM"] = "UZS";
    CurrencyEnum["VATU"] = "VUV";
    CurrencyEnum["WON"] = "KRW";
    CurrencyEnum["YEMENI_RIAL"] = "YER";
    CurrencyEnum["YEN"] = "JPY";
    CurrencyEnum["YUAN_RENMINBI"] = "CNY";
    CurrencyEnum["ZAMBIAN_KWACHA"] = "ZMW";
    CurrencyEnum["ZIMBABWE_DOLLAR"] = "ZWL";
    CurrencyEnum["ZLOTY"] = "PLN";
})(CurrencyEnum || (CurrencyEnum = {}));

var DataTypeEnum;
(function (DataTypeEnum) {
    DataTypeEnum["CUSTOM"] = "Custom";
    DataTypeEnum["STRING"] = "String";
    DataTypeEnum["BOOLEAN"] = "Boolean";
    DataTypeEnum["NUMBER"] = "Number";
    DataTypeEnum["LOCAL_DATE"] = "LocalDate";
    DataTypeEnum["LOCAL_DATE_TIME"] = "LocalDateTime";
    DataTypeEnum["DATE_TIME"] = "DateTime";
    DataTypeEnum["MULTI_CURRENCY_VALUE"] = "MultiCurrencyValue";
    DataTypeEnum["MULTI_LANGUAGE_VALUE"] = "MultiLanguageValue";
    DataTypeEnum["UNIT_VALUE"] = "UnitValue";
    DataTypeEnum["DOUBLE_UNIT_VALUE"] = "DoubleUnitValue";
    DataTypeEnum["ENUM_VALUE"] = "EnumValue";
})(DataTypeEnum || (DataTypeEnum = {}));

var DateFormatEnum;
(function (DateFormatEnum) {
    DateFormatEnum["BIG_ENDIAN_DASH"] = "yyyy-MM-dd";
    DateFormatEnum["BIG_ENDIAN_SLASH"] = "yyyy/MM/dd";
    DateFormatEnum["BIG_ENDIAN_DOT"] = "yyyy.MM.dd";
    DateFormatEnum["BIG_ENDIAN_FULL"] = "yyyy MMMM dd";
    DateFormatEnum["LITTLE_ENDIAN_DASH"] = "dd-MM-yyyy";
    DateFormatEnum["LITTLE_ENDIAN_SLASH"] = "dd/MM/yyyy";
    DateFormatEnum["LITTLE_ENDIAN_DOT"] = "dd.MM.yyyy";
    DateFormatEnum["LITTLE_ENDIAN_FULL"] = "d MMMM yyyy";
    DateFormatEnum["MIDDLE_ENDIAN_SLASH"] = "MM/dd/yyyy";
    DateFormatEnum["MIDDLE_ENDIAN_FULL"] = "MMMM d, yyyy";
})(DateFormatEnum || (DateFormatEnum = {}));

var TimeFormatEnum;
(function (TimeFormatEnum) {
    TimeFormatEnum["HH_TIME_M"] = "HH:mm";
    TimeFormatEnum["HH_TIME_M_S"] = "HH:mm:ss";
    TimeFormatEnum["H_TIME_M"] = "h:mm a";
    TimeFormatEnum["H_TIME_M_S"] = "h:mm:ss a";
})(TimeFormatEnum || (TimeFormatEnum = {}));

function getConfigurationParameters(environment, apiPath) {
    var _a, _b, _c, _d, _e;
    const baseUrl = window.config
        ? ((_b = (_a = window.config.api) === null || _a === void 0 ? void 0 : _a.baseUrl) !== null && _b !== void 0 ? _b : `https://${window.config.base.domain}/api`)
        : ((_d = (_c = environment.config.api) === null || _c === void 0 ? void 0 : _c.baseUrl) !== null && _d !== void 0 ? _d : `https://${(_e = environment.config.base) === null || _e === void 0 ? void 0 : _e.domain}/api`);
    const addTrailingFlash = baseUrl.substr(-1) === '/' ? '' : '/';
    return {
        basePath: `${baseUrl}${addTrailingFlash}${apiPath}`
    };
}

/**
 * Sorts an object and all its sub-objects based on the key-value
 */
function sortObject(o) {
    return Object.keys(o)
        .sort()
        .reduce((acc, curr, i) => {
        return Object.assign(Object.assign({}, acc), { [curr]: typeof o[curr] === 'object' && o[curr] !== null ? sortObject(o[curr]) : o[curr] });
    }, {});
}

/**
 * Stringifies the object after sorting on key
 * currently only used for testing purposes
 */
function sortedStringify(obj) {
    return JSON.stringify(sortObject(obj));
}

class RoutingAllowedGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        return component.routingAllowed(currentState, nextState);
    }
}
RoutingAllowedGuard.decorators = [
    { type: Injectable }
];

class UtilGuardsModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('UtilGuardsModule is already loaded. Import in your base AppModule only.');
        }
    }
}
UtilGuardsModule.decorators = [
    { type: NgModule, args: [{
                providers: [RoutingAllowedGuard]
            },] }
];
UtilGuardsModule.ctorParameters = () => [
    { type: UtilGuardsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

class CacheOverrideConfigAbstract {
}

class CacheOverrideInterceptor {
    constructor(windowRefService, configService) {
        this.windowRefService = windowRefService;
        this.configService = configService;
        // If we are in IE, or we do requests for JSON files (i18n) we do not want cache to be used.
        this.isIE = this.windowRefService.nativeWindow.navigator.userAgent
            .toUpperCase()
            .indexOf('TRIDENT') >= 0;
        this.blacklistedUrls = this.configService.getBlacklistedUrls();
    }
    intercept(req, next) {
        if (!this.isIE) {
            return next.handle(req);
        }
        const blacklisted = !!this.blacklistedUrls.filter(url => req.url.startsWith(url)).length;
        if (blacklisted) {
            return next.handle(req);
        }
        const headers = req.headers
            .append('Cache-Control', 'no-cache')
            .append('Pragma', 'no-cache')
            .append('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT');
        return next.handle(req.clone({ headers }));
    }
}
CacheOverrideInterceptor.decorators = [
    { type: Injectable }
];
CacheOverrideInterceptor.ctorParameters = () => [
    { type: WindowRefService },
    { type: CacheOverrideConfigAbstract }
];

class CacheOverrideModule {
    constructor(parentModule, windowRefService, cacheOverrideConfig) {
        if (parentModule) {
            throw new Error('CacheOverrideModule is already loaded. Import in your base AppModule only with .forRoot(cacheOverrideConfig: Type<CacheOverrideConfigAbstract>).');
        }
        if (!cacheOverrideConfig) {
            throw new Error('CacheOverrideModule could not be loaded. You need to use the .forRoot(cacheOverrideConfig: Type<CacheOverrideConfigAbstract>) method and provide an implementation of CacheOverrideConfigAbstract');
        }
        if (!windowRefService) {
            throw new Error('You need to import the UtilServicesModule in your AppModule!');
        }
    }
    static forRoot(cacheOverrideConfig) {
        return {
            ngModule: CacheOverrideModule,
            providers: [
                CacheOverrideInterceptor,
                {
                    provide: CacheOverrideConfigAbstract,
                    useClass: cacheOverrideConfig
                }
            ]
        };
    }
}
CacheOverrideModule.decorators = [
    { type: NgModule }
];
CacheOverrideModule.ctorParameters = () => [
    { type: CacheOverrideModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: WindowRefService, decorators: [{ type: Optional }] },
    { type: CacheOverrideConfigAbstract, decorators: [{ type: Optional }] }
];

class HttpStatusInterceptor {
    constructor(httpStatusService) {
        this.httpStatusService = httpStatusService;
        this.loadingCalls = 0;
        this.actingCalls = 0;
        this.showToastsOn = [500, 404, 0];
    }
    intercept(req, next) {
        const actingMethods = ['PUT', 'POST', 'DELETE'];
        // ignore images
        if (req.responseType === 'blob') {
            return next.handle(req.clone());
        }
        this.changeStatus(true, req.method);
        return next.handle(req.clone()).pipe(catchError(e => {
            var _a, _b, _c, _d;
            if (req.method === 'GET' && this.showToastsOn.indexOf(e.status) > -1) {
                this.httpStatusService.getError = 'SOMETHING-WENT-WRONG-GET';
            }
            else if (actingMethods.indexOf(req.method) > -1) {
                if ((_a = e === null || e === void 0 ? void 0 : e.error) === null || _a === void 0 ? void 0 : _a.isInteractiveWarning) {
                    return throwError(e);
                }
                let errors;
                if ((_b = e === null || e === void 0 ? void 0 : e.error) === null || _b === void 0 ? void 0 : _b.message) {
                    errors = [
                        {
                            translation: e === null || e === void 0 ? void 0 : e.error.message.translation
                        }
                    ];
                }
                else if (((_c = e === null || e === void 0 ? void 0 : e.error) === null || _c === void 0 ? void 0 : _c.messages) && Array.isArray((_d = e === null || e === void 0 ? void 0 : e.error) === null || _d === void 0 ? void 0 : _d.messages)) {
                    errors = e === null || e === void 0 ? void 0 : e.error.messages.map(x => ({
                        translation: x.translation
                    }));
                }
                else {
                    errors = [
                        {
                            message: `ERROR_SOMETHING-WENT-WRONG-${req === null || req === void 0 ? void 0 : req.method}`
                        }
                    ];
                }
                this.httpStatusService.actingErrors = errors;
            }
            return throwError(e);
        }), finalize(() => {
            this.changeStatus(false, req.method);
        }));
    }
    changeStatus(v, method) {
        if (['POST', 'PUT', 'DELETE', 'PATCH'].indexOf(method) > -1) {
            v
                ? this.actingCalls++
                : this.actingCalls > 0
                    ? this.actingCalls--
                    : (this.actingCalls = 0);
            this.httpStatusService.acting = this.actingCalls > 0;
        }
        else if (method === 'GET') {
            v
                ? this.loadingCalls++
                : this.loadingCalls > 0
                    ? this.loadingCalls--
                    : (this.loadingCalls = 0);
            this.httpStatusService.loading = this.loadingCalls > 0;
        }
    }
}
HttpStatusInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function HttpStatusInterceptor_Factory() { return new HttpStatusInterceptor(ɵɵinject(HttpStatusService)); }, token: HttpStatusInterceptor, providedIn: "root" });
HttpStatusInterceptor.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
HttpStatusInterceptor.ctorParameters = () => [
    { type: HttpStatusService }
];

// COMPLEX ARRAYS WILL SUFFER PERFORMANCE LOSS
const distinctUntilChangedArray = () => {
    return source$ => source$.pipe(distinctUntilChanged((x, y) => JSON.stringify(x) === JSON.stringify(y)));
};

/**
 * Share source and replay specified number of emissions on subscription.
 *
 * This operator connects to a source observable and multicasts through
 * a `ReplaySubject` constructed with the specified arguments.
 * When there are no subscribers (refCount = 0) left the source stream will complete.
 *
 * ## Why use hotSafe?
 * You generally want to use `hotSafe` when you have
 * computations (ex. http calls, calculations, algorithms, ...)
 * that you do not wish to be executed amongst multiple subscribers.
 * It may also be valuable in situations where you know you will have late subscribers to
 * a stream that need access to previously emitted values.
 *
 * @param [bufferSize=Number.POSITIVE_INFINITY] Maximum element count of the replay buffer.
 */
function hotSafe(bufferSize = 1) {
    return (source) => source.pipe(publishReplay(bufferSize), refCount());
}

const latestSourceWithoutCancellationMap = project => {
    let count = 0;
    return source => source.pipe(tap(() => count++), concatMap((e, i) => concat(defer(() => count === 1 ? project(e, i).pipe(skipWhile(() => count > 1)) : EMPTY), of(0).pipe(tap(() => count--), ignoreElements()))));
};

// creating a custom operator
// declarative way of programming, it's easy to read the flow of this
// function
/**
 * Search for objects in an array - caches, so if destroyed, cache is lost
 * The source stream is the list of objects
 * @param term$ a stream of string(s), each string is a search action. If a new string is sent before the last one was resolved, the old one will be skiped
 * @param props an array of strings and/or functions that point to properties with the values to be searched. Be aware, the functions may not error, or it will break the search.
 */
function search(term$, props) {
    return source => source.pipe(
    // create indexMap for all items in the source stream
    map(results => results && Array.isArray(results)
        ? results.map(original => ({
            original,
            terms: getTermsFromObject(original, props)
        }))
        : results), switchMap(indexMap => 
    // indexMap is cached in the closure of this function
    term$.pipe(
    // call filterResults on every term change
    map((term) => indexMap && Array.isArray(indexMap)
        ? filterResults(indexMap, term)
        : indexMap))));
}
// it's important that the following functions are private
// we don't want to use them anywhere else then here
// we can also see that the functions are written in a more functional manner
// .map.filter.map makes it declarative instead of imperative
// this makes the code more readable
function getTermsFromObject(obj, props) {
    const terms = [];
    props.forEach(prop => typeof prop === 'string' || prop instanceof String
        ? getValues([obj], prop.split('.')).forEach(val => terms.push(val))
        : terms.push(prop(obj)));
    return terms
        .filter(value => typeof value === 'string' || typeof value === 'number')
        .map(value => normalizeToken(value.toString()));
}
function getValues(obj, path) {
    // filter out null and undefined
    obj = obj.filter(v => !!v);
    // if path has the length of 0, the obj is the value
    if (path.length === 0) {
        return obj;
    }
    let children = [];
    for (const item of obj) {
        const child = item[path[0]];
        // if it is an array, we consider all its items as child
        if (Array.isArray(child)) {
            children = [...children, ...child];
        }
        else {
            // if that's an object / primitive, add it as child
            children = [...children, child];
        }
    }
    path.shift();
    return getValues(children, path);
}
function filterResults(indexMap, searchTerm) {
    const terms = searchTerm.split(RegExp(` +`)).map(normalizeToken);
    return indexMap
        .filter(row => rowMatchesTerms(row, terms))
        .map(v => v.original);
}
function normalizeToken(token) {
    return token.toLowerCase().replace(/[-_'",;.!? ]/g, '');
}
function rowMatchesTerms(row, searchTerms) {
    for (const term of searchTerms) {
        if (row.terms.find(documentTerm => termsMatch(term, documentTerm)) ===
            undefined) {
            return false;
        }
    }
    return true;
}
function termsMatch(requestTerm, documentTerm) {
    return documentTerm.includes(requestTerm);
}

/* Seek convention for naming this */
function sortList(list, sortingOrderConfig) {
    if (!list) {
        return list;
    }
    if (!sortingOrderConfig.order) {
        sortingOrderConfig.order = 'asc';
    }
    const copyList = [...list];
    let sortingPropArray;
    if (Array.isArray(sortingOrderConfig.prop)) {
        sortingPropArray = sortingOrderConfig.prop;
    }
    else {
        sortingPropArray = [sortingOrderConfig.prop];
    }
    if (sortingOrderConfig.plainSort && sortingPropArray.length === 1) {
        // Currently only works with 1 single sorting property defined
        const isFunc = isFunction(sortingPropArray[0]);
        const copyListWithoutUndefineds = copyList.filter(d => (isFunc
            ? sortingPropArray[0](d)
            : get(d, sortingPropArray[0])) !== undefined);
        const copyListUndefinedsOnly = copyList.filter(d => (isFunc
            ? sortingPropArray[0](d)
            : get(d, sortingPropArray[0])) === undefined);
        return sortingOrderConfig.order === 'asc'
            ? [
                ...copyListUndefinedsOnly,
                ...orderBy(copyListWithoutUndefineds, sortingPropArray, sortingOrderConfig.order)
            ]
            : [
                ...orderBy(copyListWithoutUndefineds, sortingPropArray, sortingOrderConfig.order),
                ...copyListUndefinedsOnly
            ];
    }
    if (sortingOrderConfig.order === 'asc') {
        return copyList.sort((a, b) => {
            return compareForDeeperComparison(sortingPropArray, a, b);
        });
    }
    return copyList.sort((a, b) => {
        return compareForDeeperComparison(sortingPropArray, b, a);
    });
}
function compareForDeeperComparison(sortingPropArray, a, b) {
    var _a, _b;
    const collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base'
    });
    let index = 0;
    while (index < sortingPropArray.length) {
        const isFunc = isFunction(sortingPropArray[index]);
        const compareItem = collator.compare(isFunc
            ? (_a = sortingPropArray[index](a)) !== null && _a !== void 0 ? _a : '' : get(a, sortingPropArray[index], ''), isFunc
            ? (_b = sortingPropArray[index](b)) !== null && _b !== void 0 ? _b : '' : get(b, sortingPropArray[index], ''));
        if (compareItem === 0 && index < sortingPropArray.length) {
            index++;
        }
        else {
            return compareItem;
        }
    }
}

function sort(sortingOrderConfig) {
    return list => list.pipe(map(item => {
        return sortList(item, sortingOrderConfig);
    }));
}

/**
 * Stringifies the value of the source observable
 */
const stringify = () => source$ => source$.pipe(map(v => sortedStringify(v)));

class ObjectService {
    mergeDeep(target, ...sources) {
        if (!sources.length) {
            return target;
        }
        const source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
            for (const key in source) {
                if (source.hasOwnProperty(key)) {
                    if (this.isObject(source[key])) {
                        if (!target[key]) {
                            Object.assign(target, { [key]: {} });
                        }
                        this.mergeDeep(target[key], source[key]);
                    }
                    else {
                        Object.assign(target, { [key]: source[key] });
                    }
                }
            }
        }
        return this.mergeDeep(target, ...sources);
    }
    isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    }
}
ObjectService.decorators = [
    { type: Injectable }
];

function isNullOrUndefined(value) {
    return value === null || value === undefined;
}

const PAGE_TITLE_TOKEN = new InjectionToken('page-title-token');

let singletonLock = false;
let PageTitleService = class PageTitleService {
    constructor(title, translateService, objectService, pageTitleConfig) {
        this.title = title;
        this.translateService = translateService;
        this.objectService = objectService;
        this.pageTitleConfig = pageTitleConfig;
        this.defaultPageTitleConfig = {
            separator: '-',
            reverseOrder: false
        };
        this.config = this.objectService.mergeDeep(this.defaultPageTitleConfig, this.pageTitleConfig || {});
        this.labelsAndParams = new BehaviorSubject(null);
        if (singletonLock) {
            throw Error('You can only have one PageTitleService.');
        }
        singletonLock = true;
        // We need to update the title when/if the language changes after setting a title.
        this.labelsAndParams
            .pipe(filter(x => !!x), switchMap(({ tc, labels, params }) => this.translateService
            .stream([tc + '.APP_NAME', ...labels.map(l => tc + '.' + l)], params)
            .pipe(map(translations => (this.config.reverseOrder
            ? translations[tc + '.APP_NAME']
            : '') +
            this.getTextFromLabels(labels, translations, tc) +
            (!this.config.reverseOrder
                ? translations[tc + '.APP_NAME']
                : '')))), takeUntilDestroy(this))
            .subscribe(t => this.title.setTitle(t));
    }
    /**
     * Set the title on the document. (<title>...</title>)
     * Combination of provided label(s) and tc + '.APP_NAME'
     * If no label(s) are provided, the label TITLE will be used
     * @param tc Translation context
     * @param label label or labels
     * @param params params for translation
     */
    setTitle(tc, label, params) {
        let labels;
        try {
            // We assume multiple labels, so if a string is given we normalize it to an array of strings
            labels = isNullOrUndefined(label)
                ? ['TITLE']
                : this.stringArrayNormalize(label);
        }
        catch (_a) {
            throw Error('PageTitleService - Invalid label, could not translate.');
        }
        this.labelsAndParams.next({ tc, labels, params });
    }
    ngOnDestroy() {
        singletonLock = false;
    }
    getTextFromLabels(labels, translations, tc) {
        const result = labels.map((l, i) => (this.config.reverseOrder ? ` ${this.config.separator} ` : '') +
            translations[tc + '.' + l] +
            (!this.config.reverseOrder ? ` ${this.config.separator} ` : ''));
        if (this.config.reverseOrder) {
            return result.reverse().join('');
        }
        else {
            return result.join('');
        }
    }
    stringArrayNormalize(o) {
        if (typeof o === 'string') {
            return [o];
        }
        else if (Array.isArray(o) && o.every(x => typeof x === 'string')) {
            return o;
        }
        else {
            throw Error('Invalid object - only string or array of string allowed');
        }
    }
};
PageTitleService.decorators = [
    { type: Injectable }
];
PageTitleService.ctorParameters = () => [
    { type: Title },
    { type: TranslateService },
    { type: ObjectService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PAGE_TITLE_TOKEN,] }] }
];
PageTitleService = __decorate([
    UntilDestroy()
], PageTitleService);

class PageTitleModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('PageTitleModule is already loaded. Import in your base AppModule only.');
        }
    }
    /**
     * Optional configuration
     * @param pageTitleConfig some basic settings used by PageTitleService
     */
    static forRoot(pageTitleConfig) {
        return {
            ngModule: PageTitleModule,
            providers: [
                {
                    provide: PAGE_TITLE_TOKEN,
                    useValue: pageTitleConfig
                }
            ]
        };
    }
}
PageTitleModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TranslateModule],
                providers: [PageTitleService]
            },] }
];
PageTitleModule.ctorParameters = () => [
    { type: PageTitleModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

class BlobToImgSrcPipe {
    constructor(sanitizer, windowRefService) {
        this.sanitizer = sanitizer;
        this.windowRefService = windowRefService;
    }
    transform(blob) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.windowRefService.nativeWindow.URL.createObjectURL(blob));
    }
}
BlobToImgSrcPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofBlobToImgSrc' },] }
];
BlobToImgSrcPipe.ctorParameters = () => [
    { type: DomSanitizer },
    { type: WindowRefService }
];

class ConcatPipe {
    transform(value, ...args) {
        return value.concat(...args);
    }
}
ConcatPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofConcat' },] }
];

/**
 * @deprecated Use lodash function use : https://lodash.com/docs/4.17.15#get
 */
function deepFetchProperty(item, propertyPath) {
    return get(item, propertyPath, null);
}

class DeepFetchPropertyPipe {
    transform(item, propertyPath) {
        return deepFetchProperty(item, propertyPath);
    }
}
DeepFetchPropertyPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofDeepFetchProperty' },] }
];

class ExecutePipe {
    transform(value, func) {
        if (!value) {
            return undefined;
        }
        return func(value);
    }
}
ExecutePipe.decorators = [
    { type: Pipe, args: [{ name: 'sofExecute' },] }
];

class FindPipe {
    transform(items, propertyPath, toFind) {
        return items.find(item => deepFetchProperty(item, propertyPath) === toFind);
    }
}
FindPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofFind' },] }
];

class IncludesPipe {
    constructor() { }
    transform(array, valueToFind, fromIndex) {
        if (array && Array.isArray(array)) {
            return array.includes(valueToFind, fromIndex);
        }
        else {
            return false;
        }
    }
}
IncludesPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofIncludes' },] }
];
IncludesPipe.ctorParameters = () => [];

function getDocument() {
    return document;
}
class DocumentRefService {
    get nativeDocument() {
        return getDocument();
    }
}
DocumentRefService.decorators = [
    { type: Injectable }
];

let InfiniteScrollPipe = class InfiniteScrollPipe {
    constructor(windowRefService, documentRefService, changeDetectorRef) {
        this.windowRefService = windowRefService;
        this.documentRefService = documentRefService;
        this.changeDetectorRef = changeDetectorRef;
        this.auditTime = 500;
        this.preloadHeight = 500;
        this.scheduler = async;
        this.thresholdNumberOfItems = 35;
        this.dataSet$ = new Subject();
    }
    transform(value, thresholdNumberOfItems, preloadHeight, auditTimeValue, elementRef) {
        if (value === null || value === undefined) {
            return value;
        }
        if (!Array.isArray(value)) {
            throw new Error('sofInfiniteScroll only accepts: null, undefined or any[]');
        }
        if (thresholdNumberOfItems &&
            this.thresholdNumberOfItems !== thresholdNumberOfItems) {
            this.thresholdNumberOfItems = thresholdNumberOfItems;
        }
        if (elementRef && this.elementRef !== elementRef) {
            this.elementRef = elementRef;
        }
        // makes it hard to test when defined in the constructor
        if (!this.subscription) {
            this.scrollOrResize$ = this.getScrollOrResize$();
            this.pageByScrollOrResize$ = this.getPageByScrollOrResize$();
            this.numberOfItems$ = this.getNumberOfItems$();
            this.subscription = this.getLimitedDataSet$()
                .pipe(takeUntilDestroy(this))
                .subscribe(v => {
                this.limitedDataSet = v;
                this.changeDetectorRef.markForCheck();
            });
        }
        // only when the data set changes in an immutable way reset the data set
        // this is important because otherwise numberOfItems will be reset change after change
        // which results in the same limited data set when scrolling
        if (this.dataSet !== value) {
            this.dataSet = value;
            this.dataSet$.next(value);
        }
        if (preloadHeight && this.preloadHeight !== preloadHeight) {
            this.preloadHeight = preloadHeight;
        }
        if (auditTimeValue && this.auditTime !== auditTimeValue) {
            this.auditTime = auditTimeValue;
        }
        if (elementRef && this.elementRef !== elementRef) {
            this.elementRef = elementRef;
        }
        return this.limitedDataSet;
    }
    ngOnDestroy() { }
    getScrollOrResize$() {
        return merge(fromEvent(this.elementRef || this.windowRefService.nativeWindow, 'scroll'), fromEvent(this.windowRefService.nativeWindow, 'resize')).pipe(auditTime(this.auditTime, this.scheduler));
    }
    getPageByScrollOrResize$() {
        return this.scrollOrResize$.pipe(map(() => {
            const scrollTop = (this.elementRef && this.elementRef.scrollTop) ||
                (this.documentRefService.nativeDocument.documentElement &&
                    this.documentRefService.nativeDocument.documentElement.scrollTop) ||
                this.documentRefService.nativeDocument.body.scrollTop;
            const scrollHeight = (this.elementRef && this.elementRef.scrollHeight) ||
                (this.documentRefService.nativeDocument.documentElement &&
                    this.documentRefService.nativeDocument.documentElement
                        .scrollHeight) ||
                this.documentRefService.nativeDocument.body.scrollHeight;
            return (scrollTop + this.windowRefService.nativeWindow.innerHeight >=
                scrollHeight - this.preloadHeight);
        }), filter(b => !!b));
    }
    getNumberOfItems$() {
        return this.pageByScrollOrResize$.pipe(startWith(null), mapTo(this.thresholdNumberOfItems), // make sure scan doesn't get a boolean
        scan(acc => acc + this.thresholdNumberOfItems, 0));
    }
    getLimitedDataSet$() {
        return this.dataSet$.pipe(switchMap(dataSet => this.numberOfItems$.pipe(map(count => slice(dataSet, 0, count)))));
    }
};
InfiniteScrollPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofInfiniteScroll', pure: false },] }
];
InfiniteScrollPipe.ctorParameters = () => [
    { type: WindowRefService },
    { type: DocumentRefService },
    { type: ChangeDetectorRef }
];
InfiniteScrollPipe = __decorate([
    UntilDestroy()
], InfiniteScrollPipe);

class IsArrayPipe {
    constructor() { }
    transform(value) {
        return !!value && Array.isArray(value);
    }
}
IsArrayPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofIsArray' },] }
];
IsArrayPipe.ctorParameters = () => [];

class IsNullOrUndefinedPipe {
    transform(value) {
        return isNullOrUndefined(value);
    }
}
IsNullOrUndefinedPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofIsNullOrUndefined' },] }
];

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

class IsNumberPipe {
    transform(value) {
        return isNumber(value);
    }
}
IsNumberPipe.decorators = [
    { type: Pipe, args: [{
                name: 'sofIsNumber'
            },] }
];

class KeysPipe {
    transform(obj) {
        return Object.keys(obj);
    }
}
KeysPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofKeys' },] }
];

class LocalNumberPipe {
    constructor() { }
    transform(num, fractionDigits = 2) {
        return num.toLocaleString(undefined, {
            minimumFractionDigits: fractionDigits,
            maximumFractionDigits: fractionDigits
        });
    }
}
LocalNumberPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofLocalNumber' },] }
];
LocalNumberPipe.ctorParameters = () => [];

class MaxPipe {
    transform(list) {
        if (list && Array.isArray(list)) {
            return Math.max(...list);
        }
        else {
            return undefined;
        }
    }
}
MaxPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofMax' },] }
];

class MaxStringLengthPipe {
    // we use word.normalize('NFC') instead of Array.form because of other characters
    // wouldn't be sliced correctly. See test for examples of characters
    transform(word, maxLength = 50) {
        if (!!word) {
            const normalizedWord = word.normalize('NFC');
            return normalizedWord.length >= maxLength
                ? normalizedWord.slice(0, maxLength) + '…'
                : word;
        }
        return word;
    }
}
MaxStringLengthPipe.decorators = [
    { type: Pipe, args: [{
                name: 'sofMaxStringLength'
            },] }
];

class ReplaceAllPipe {
    constructor() { }
    transform(text, toReplace, replaceWith) {
        if (text) {
            return text.split(toReplace).join(replaceWith);
        }
        else {
            return text;
        }
    }
}
ReplaceAllPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofReplaceAll' },] }
];
ReplaceAllPipe.ctorParameters = () => [];

class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofSafeUrl' },] }
];
SafeUrlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

class SortPipe {
    transform(list, sortingOrderConfig) {
        return sortList(list, sortingOrderConfig);
    }
}
SortPipe.decorators = [
    { type: Pipe, args: [{ name: 'sofSort' },] }
];

class CurrencySymbolPipe {
    constructor(locale) {
        this.locale = locale;
    }
    transform(code, format = 'narrow') {
        return getCurrencySymbol(code, format, this.locale);
    }
}
CurrencySymbolPipe.decorators = [
    { type: Pipe, args: [{
                name: 'sofCurrencySymbol'
            },] }
];
CurrencySymbolPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];

const pipes = [
    SortPipe,
    SafeUrlPipe,
    ReplaceAllPipe,
    MaxPipe,
    LocalNumberPipe,
    KeysPipe,
    IsNullOrUndefinedPipe,
    IsArrayPipe,
    IsNumberPipe,
    InfiniteScrollPipe,
    IncludesPipe,
    FindPipe,
    ExecutePipe,
    DeepFetchPropertyPipe,
    ConcatPipe,
    BlobToImgSrcPipe,
    MaxStringLengthPipe,
    CurrencySymbolPipe
];
class UtilsPipesModule {
}
UtilsPipesModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...pipes],
                exports: [...pipes]
            },] }
];

class DocumentDownloadService {
    constructor(documentRefService, windowRefService) {
        this.documentRefService = documentRefService;
        this.windowRefService = windowRefService;
    }
    downloadDocument(blob, documentName) {
        const download = this.documentRefService.nativeDocument.createElement('a');
        this.documentRefService.nativeDocument.body.appendChild(download);
        if (this.windowRefService.nativeWindow.navigator.appVersion
            .toString()
            .includes('Trident')) {
            this.windowRefService.nativeWindow.navigator.msSaveBlob(blob, documentName);
        }
        else {
            // for other browsers
            const fileURL = this.windowRefService.nativeWindow.URL.createObjectURL(blob);
            download.href = fileURL;
            download.download = documentName;
            download.click();
            download.remove();
        }
    }
}
DocumentDownloadService.decorators = [
    { type: Injectable }
];
DocumentDownloadService.ctorParameters = () => [
    { type: DocumentRefService },
    { type: WindowRefService }
];

class FileSelectionService {
    constructor(documentRefService) {
        this.documentRefService = documentRefService;
    }
    /**
     * @param acceptedMimeTypes example: [ 'application/pdf', 'image/jpeg', 'image/x-png' ]
     * @param multiple allow selection of multiple files
     */
    getFileSelector(acceptedMimeTypes, multiple = false) {
        const form = this.documentRefService.nativeDocument.createElement('form');
        const fileSelector = this.documentRefService.nativeDocument.createElement('input');
        fileSelector.setAttribute('type', 'file');
        if (multiple) {
            fileSelector.setAttribute('multiple', '');
        }
        if (Array.isArray(acceptedMimeTypes)) {
            fileSelector.setAttribute('accept', acceptedMimeTypes.join(', '));
        }
        form.appendChild(fileSelector);
        form.reset();
        fileSelector.click();
        return fromEvent(fileSelector, 'change').pipe(take(1), map((e) => e.target.files));
    }
}
FileSelectionService.ɵprov = ɵɵdefineInjectable({ factory: function FileSelectionService_Factory() { return new FileSelectionService(ɵɵinject(DocumentRefService)); }, token: FileSelectionService, providedIn: "root" });
FileSelectionService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
FileSelectionService.ctorParameters = () => [
    { type: DocumentRefService }
];

// tslint:disable-next-line:no-namespace
var FilterSet;
(function (FilterSet) {
    let FilterType;
    (function (FilterType) {
        FilterType["MultiSelect"] = "multi-select";
    })(FilterType = FilterSet.FilterType || (FilterSet.FilterType = {}));
})(FilterSet || (FilterSet = {}));

class FilterService {
    filterList(items, activeFilterSet) {
        return items.filter(item => activeFilterSet.every(x => this.checkIfIncluded(x, item)));
    }
    checkIfIncluded(filterSet, item) {
        switch (filterSet.filterType) {
            case FilterSet.FilterType.MultiSelect:
                return filterSet.data.includes(deepFetchProperty(item, filterSet.path));
            default:
                throw Error('FilterType not implemented');
        }
    }
}
FilterService.decorators = [
    { type: Injectable }
];

function validatorPhone(validationMessage = 'ERROR_PHONE') {
    return (c) => {
        const { country, zonalPhoneNumber, localPhoneNumber } = c.value;
        if ((zonalPhoneNumber && (!country || !localPhoneNumber)) ||
            (localPhoneNumber && (!country || !zonalPhoneNumber))) {
            return {
                phone: {
                    validationMessage
                }
            };
        }
        return null;
    };
}
function validatorAddress(validationMessage = 'ERROR_ADDRESS') {
    return (c) => {
        const { country, postalCodeAndCity, addressLineOne, addressLineTwo } = c.value;
        if ((postalCodeAndCity &&
            postalCodeAndCity.postalCode &&
            (!country || !postalCodeAndCity.city || !addressLineOne)) ||
            (postalCodeAndCity &&
                postalCodeAndCity.city &&
                (!country || !postalCodeAndCity.postalCode || !addressLineOne)) ||
            (addressLineOne &&
                (!country ||
                    !postalCodeAndCity ||
                    !postalCodeAndCity.postalCode ||
                    !postalCodeAndCity.city))) {
            return {
                address: {
                    validationMessage
                }
            };
        }
        return null;
    };
}

class FormGroupService {
    constructor(fb) {
        this.fb = fb;
    }
    createPhoneGroup(defaultCountry = null) {
        return this.fb.group({
            country: [defaultCountry],
            zonalPhoneNumber: [''],
            localPhoneNumber: ['']
        }, {
            validator: [validatorPhone()]
        });
    }
    createAddressGroup(defaultCountry = null) {
        return this.fb.group({
            country: [defaultCountry],
            postalCodeAndCity: [null],
            addressLineOne: [''],
            addressLineTwo: ['']
        }, {
            validator: [validatorAddress()]
        });
    }
}
FormGroupService.decorators = [
    { type: Injectable }
];
FormGroupService.ctorParameters = () => [
    { type: FormBuilder }
];

class RouterToolsService {
    constructor(router, viewportScroller) {
        this.router = router;
        this.viewportScroller = viewportScroller;
        this.position = [0, 0];
    }
    navigateWithPositionRestore(commands, extras) {
        this.position = this.viewportScroller.getScrollPosition();
        return this.internalNavigateWithPositionRestore(commands, extras);
    }
    navigateWithPreviousPositionRestore(commands, extras) {
        return this.internalNavigateWithPositionRestore(commands, extras);
    }
    internalNavigateWithPositionRestore(commands, extras) {
        return this.router.navigate(commands, extras).then(() => {
            this.viewportScroller.scrollToPosition(this.position);
        });
    }
}
RouterToolsService.decorators = [
    { type: Injectable }
];
RouterToolsService.ctorParameters = () => [
    { type: Router },
    { type: ViewportScroller }
];

class ScrollService {
    constructor(windowRefService) {
        this.windowRefService = windowRefService;
    }
    scrollToTop() {
        this.windowRefService.nativeWindow.scrollTo(0, 0);
    }
}
ScrollService.decorators = [
    { type: Injectable }
];
ScrollService.ctorParameters = () => [
    { type: WindowRefService }
];

class UtilServicesModule {
    constructor(parentModule, router, reactiveForms, translate) {
        if (parentModule) {
            throw new Error('UtilServicesModule is already loaded. Import in your base AppModule only.');
        }
        if (!router) {
            throw new Error('You need to import the RouterModule in your AppModule!');
        }
        if (!reactiveForms) {
            throw new Error('You need to import the ReactiveFormsModule in your AppModule!');
        }
        if (!translate) {
            throw new Error('You need to import the TranslateModule in your AppModule!');
        }
    }
}
UtilServicesModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    WindowRefService,
                    DocumentRefService,
                    DocumentDownloadService,
                    FileSelectionService,
                    FormGroupService,
                    ObjectService,
                    RouterToolsService,
                    ScrollService
                ]
            },] }
];
UtilServicesModule.ctorParameters = () => [
    { type: UtilServicesModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: Router, decorators: [{ type: Optional }] },
    { type: FormBuilder, decorators: [{ type: Optional }] },
    { type: TranslateService, decorators: [{ type: Optional }] }
];

function dateWithoutTimeEquals(date1, date2) {
    if (isNullOrUndefined(date1) && isNullOrUndefined(date2)) {
        return true;
    }
    if (!isNullOrUndefined(date1) && !isNullOrUndefined(date2)) {
        const cleanDate1 = getCleanDate(date1);
        const cleanDate2 = getCleanDate(date2);
        return cleanDate1.getTime() === cleanDate2.getTime();
    }
    return false;
}
function dateWithoutTimeBefore(date1, date2) {
    if (!isNullOrUndefined(date1) && !isNullOrUndefined(date2)) {
        const cleanDate1 = getCleanDate(date1);
        const cleanDate2 = getCleanDate(date2);
        return cleanDate1.getTime() < cleanDate2.getTime();
    }
    return false;
}
function dateWithoutTimeAfter(date1, date2) {
    if (!isNullOrUndefined(date1) && !isNullOrUndefined(date2)) {
        const cleanDate1 = getCleanDate(date1);
        const cleanDate2 = getCleanDate(date2);
        return cleanDate1.getTime() > cleanDate2.getTime();
    }
    return false;
}
function timeWithoutDateEquals(time1, time2) {
    if (isNullOrUndefined(time1) && isNullOrUndefined(time2)) {
        return true;
    }
    if (!isNullOrUndefined(time1) && !isNullOrUndefined(time2)) {
        const cleanTime1 = getCleanTime(time1);
        const cleanTime2 = getCleanTime(time2);
        return cleanTime1.getTime() === cleanTime2.getTime();
    }
    return false;
}
function timeWithoutDateBefore(time1, time2) {
    if (!isNullOrUndefined(time1) && !isNullOrUndefined(time2)) {
        const cleanTime1 = getCleanTime(time1);
        const cleanTime2 = getCleanTime(time2);
        return cleanTime1.getTime() < cleanTime2.getTime();
    }
}
function timeWithoutDateAfter(time1, time2) {
    if (!isNullOrUndefined(time1) && !isNullOrUndefined(time2)) {
        const cleanTime1 = getCleanTime(time1);
        const cleanTime2 = getCleanTime(time2);
        return cleanTime1.getTime() > cleanTime2.getTime();
    }
}
function getCleanTime(time) {
    const cleanTime = new Date(time.getTime());
    cleanTime.setFullYear(2020, 0, 1);
    cleanTime.setMilliseconds(0);
    return cleanTime;
}
function getCleanDate(date) {
    const cleanDate = new Date(date.getTime());
    cleanDate.setHours(0, 0, 0, 0);
    return cleanDate;
}

function isObject(value) {
    return !!value && typeof value === 'object' && value.constructor === Object;
}

function inRangeValidator(min, max) {
    return (control) => {
        const duration = control.value;
        if (isNullOrUndefined(duration)) {
            return null;
        }
        return duration >= min && duration <= max
            ? null
            : { inRange: { min, max } };
    };
}

const isIntegerValidator = (control) => {
    const duration = control.value;
    if (isNullOrUndefined(duration)) {
        return null;
    }
    return Number.isInteger(duration) ? null : { isInteger: true };
};

function maxLengthNumberValidator(max) {
    return (control) => {
        const number = control.value;
        if (isNullOrUndefined(number) || !isNumber(number)) {
            return null;
        }
        return number.toString().length > max ? { maxLengthNumber: max } : null;
    };
}

class DateMapper {
    // The default behavior of the Date constructor with a string of the
    // format YYYY-MM-DD is to interpret this as a UTC date. To keep the same
    // behavior as before with the dateStruct we want this kind of format to be
    // interpreted as a local date. For that we need to use the
    // Date(yearNumber, monthNumber, dateNumber) constructor.
    stringToDate(date) {
        if (date && isString(date) && date.match('^[0-9]{4}-[0-9]{2}-[0-9]{2}')) {
            const [year, month, day] = date.split('-');
            const numberYear = parseInt(year, 10);
            const numberMonth = parseInt(month, 10);
            const numberDay = parseInt(day, 10);
            return new Date(numberYear, numberMonth - 1, numberDay);
        }
        return null;
    }
    // When you have a full string the default Date constructor will see
    // this as a local dateTime. This can also be used with localized
    // dateTime strings.
    fullStringToDate(date) {
        if (date &&
            isString(date) &&
            date.match('^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}')) {
            return new Date(date);
        }
        return null;
    }
    // This will transform the local date to a string in the format YYYY-MM-DD
    dateToString(date) {
        if (!isNullOrUndefined(date)) {
            return `${date.getFullYear()}-${this.getFullNumber(date.getMonth() + 1)}-${this.getFullNumber(date.getDate())}`;
        }
        return null;
    }
    // This will return the local datetime to a string in the format HH:MM:SS
    dateToTimeString(date) {
        if (!isNullOrUndefined(date)) {
            return date.toTimeString().split(' ')[0];
        }
        return null;
    }
    // This transforms single character numbers to double character numbers
    // Used for getting correct formats
    getFullNumber(number) {
        if (!isNullOrUndefined(number)) {
            return ('0' + number).slice(-2);
        }
    }
}
DateMapper.ɵprov = ɵɵdefineInjectable({ factory: function DateMapper_Factory() { return new DateMapper(); }, token: DateMapper, providedIn: "root" });
DateMapper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];

/*
 * Public API Surface of utils
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Acting, ActingErrorMessages, BlobToImgSrcPipe, CacheOverrideConfigAbstract, CacheOverrideInterceptor, CacheOverrideModule, ConcatPipe, CountryEnum, CurrencyEnum, CurrencySymbolPipe, CustomTranslationHandler, DataTypeEnum, DateFormatEnum, DateMapper, DeepFetchPropertyPipe, DocumentDownloadService, DocumentRefService, ExecutePipe, FileSelectionService, FilterService, FilterSet, FindPipe, FormGroupService, GetErrorMessage, GetRouterState, HttpStatusInterceptor, HttpStatusService, IncludesPipe, InfiniteScrollPipe, IsArrayPipe, IsNullOrUndefinedPipe, IsNumberPipe, KeysPipe, Loading, LocalNumberPipe, MaxPipe, MaxStringLengthPipe, ObjectService, PAGE_TITLE_TOKEN, PageTitleModule, PageTitleService, ReplaceAllPipe, RouterToolsService, RoutingAllowedGuard, SafeUrlPipe, ScrollService, SortPipe, TimeFormatEnum, UtilGuardsModule, UtilServicesModule, UtilsPipesModule, WindowRefService, dateWithoutTimeAfter, dateWithoutTimeBefore, dateWithoutTimeEquals, deepFetchProperty, distinctUntilChangedArray, getConfigurationParameters, hotSafe, inRangeValidator, isIntegerValidator, isNullOrUndefined, isNumber, isObject, latestSourceWithoutCancellationMap, maxLengthNumberValidator, rootInjector, search, setRootInjector, sort, sortList, sortObject, sortedStringify, stringify, timeWithoutDateAfter, timeWithoutDateBefore, timeWithoutDateEquals, validatorAddress, validatorPhone };
//# sourceMappingURL=sofico-framework-utils.js.map
