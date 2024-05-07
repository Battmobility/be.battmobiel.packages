(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/no-autocomplete', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['no-autocomplete'] = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var NoAutocompleteDirective = /** @class */ (function () {
        function NoAutocompleteDirective(elementRef) {
            this.elementRef = elementRef;
        }
        NoAutocompleteDirective.prototype.ngAfterViewInit = function () {
            this.elementRef.nativeElement.autocomplete =
                '' + Math.random() + Math.random();
        };
        return NoAutocompleteDirective;
    }());
    NoAutocompleteDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[sofNoAutocomplete]'
                },] }
    ];
    NoAutocompleteDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };

    var NoAutocompleteModule = /** @class */ (function () {
        function NoAutocompleteModule() {
        }
        return NoAutocompleteModule;
    }());
    NoAutocompleteModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NoAutocompleteDirective],
                    exports: [NoAutocompleteDirective]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NoAutocompleteDirective = NoAutocompleteDirective;
    exports.NoAutocompleteModule = NoAutocompleteModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-no-autocomplete.umd.js.map
