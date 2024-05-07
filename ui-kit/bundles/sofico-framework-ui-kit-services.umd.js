(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('date-fns/locale/de'), require('date-fns/locale/en-GB'), require('date-fns/locale/es'), require('date-fns/locale/fr'), require('date-fns/locale/ja'), require('date-fns/locale/nl'), require('ng-zorro-antd/i18n')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/services', ['exports', '@angular/core', 'date-fns/locale/de', 'date-fns/locale/en-GB', 'date-fns/locale/es', 'date-fns/locale/fr', 'date-fns/locale/ja', 'date-fns/locale/nl', 'ng-zorro-antd/i18n'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].services = {}), global.ng.core, global.de, global.enGB, global.es, global.fr, global.ja, global.nl, global.i1));
}(this, (function (exports, i0, de, enGB, es, fr, ja, nl, i1) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var de__default = /*#__PURE__*/_interopDefaultLegacy(de);
    var enGB__default = /*#__PURE__*/_interopDefaultLegacy(enGB);
    var es__default = /*#__PURE__*/_interopDefaultLegacy(es);
    var fr__default = /*#__PURE__*/_interopDefaultLegacy(fr);
    var ja__default = /*#__PURE__*/_interopDefaultLegacy(ja);
    var nl__default = /*#__PURE__*/_interopDefaultLegacy(nl);

    var UpdateLocalesNgZorroService = /** @class */ (function () {
        function UpdateLocalesNgZorroService(i18n) {
            this.i18n = i18n;
        }
        UpdateLocalesNgZorroService.prototype.updateI18nService = function (lang) {
            switch (lang) {
                case 'ENG':
                    this.updateDateLocale(enGB__default['default']);
                    this.updateLocale(i1.en_GB);
                    break;
                case 'NLD':
                    this.updateDateLocale(nl__default['default']);
                    this.updateLocale(i1.nl_BE);
                    break;
                case 'FRA':
                    this.updateDateLocale(fr__default['default']);
                    this.updateLocale(i1.fr_FR);
                    break;
                case 'DEU':
                    this.updateDateLocale(de__default['default']);
                    this.updateLocale(i1.de_DE);
                    break;
                case 'SPA':
                    this.updateDateLocale(es__default['default']);
                    this.updateLocale(i1.es_ES);
                    break;
                case 'JPN':
                    this.updateDateLocale(ja__default['default']);
                    this.updateLocale(i1.ja_JP);
                    break;
                default:
                    this.updateDateLocale(enGB__default['default']);
                    this.updateLocale(i1.en_GB);
                    break;
            }
        };
        UpdateLocalesNgZorroService.prototype.updateDateLocale = function (locale) {
            this.i18n.setDateLocale(locale);
        };
        UpdateLocalesNgZorroService.prototype.updateLocale = function (locale) {
            this.i18n.setLocale(locale);
        };
        return UpdateLocalesNgZorroService;
    }());
    UpdateLocalesNgZorroService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UpdateLocalesNgZorroService_Factory() { return new UpdateLocalesNgZorroService(i0.ɵɵinject(i1.NzI18nService)); }, token: UpdateLocalesNgZorroService, providedIn: "root" });
    UpdateLocalesNgZorroService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    UpdateLocalesNgZorroService.ctorParameters = function () { return [
        { type: i1.NzI18nService }
    ]; };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.UpdateLocalesNgZorroService = UpdateLocalesNgZorroService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-services.umd.js.map
