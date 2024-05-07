import { Directive, ElementRef, NgModule } from '@angular/core';

class NoAutocompleteDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.autocomplete =
            '' + Math.random() + Math.random();
    }
}
NoAutocompleteDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sofNoAutocomplete]'
            },] }
];
NoAutocompleteDirective.ctorParameters = () => [
    { type: ElementRef }
];

class NoAutocompleteModule {
}
NoAutocompleteModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NoAutocompleteDirective],
                exports: [NoAutocompleteDirective]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { NoAutocompleteDirective, NoAutocompleteModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-no-autocomplete.js.map
