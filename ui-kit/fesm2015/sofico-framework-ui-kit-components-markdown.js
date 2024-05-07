import { __decorate } from 'tslib';
import { Component, Input, NgModule } from '@angular/core';
import { Changes } from 'ngx-reactivetoolkit';
import { map } from 'rxjs/operators';
import { Converter } from 'showdown';
import { CommonModule } from '@angular/common';
import { UtilsPipesModule } from '@sofico-framework/utils';

class MarkdownComponent {
    constructor() {
        this.converter = new Converter();
    }
    ngOnChanges() { }
    ngOnInit() {
        this.convertedValue$ = this.valueChanges$.pipe(map(value => this.converter.makeHtml(value)));
    }
}
MarkdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-markdown',
                template: ` <div [innerHTML]="convertedValue$ | async"></div> `
            },] }
];
MarkdownComponent.propDecorators = {
    value: [{ type: Input }]
};
__decorate([
    Changes('value')
], MarkdownComponent.prototype, "valueChanges$", void 0);

class MarkdownModule {
}
MarkdownModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, UtilsPipesModule],
                declarations: [MarkdownComponent],
                exports: [MarkdownComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { MarkdownComponent, MarkdownModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-markdown.js.map
