import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChild, NgModule } from '@angular/core';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SearchBarModule } from '@sofico-framework/ui-kit/components/search-bar';

class TableListSearchBarComponent {
    constructor() {
        this.changeTerm = new EventEmitter();
    }
    sofFocus() {
        this.searchBar.sofFocus();
    }
}
TableListSearchBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-table-list-search-bar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-search-bar
      #searchBar
      [placeholder]="tc + '.FILTER' | translate"
      (search)="changeTerm.emit($event)"
    ></sof-search-bar>
  `,
                providers: [
                    {
                        provide: SOF_FOCUS_COMPONENT,
                        useExisting: TableListSearchBarComponent
                    }
                ],
                styles: [""]
            },] }
];
TableListSearchBarComponent.ctorParameters = () => [];
TableListSearchBarComponent.propDecorators = {
    tc: [{ type: Input }],
    changeTerm: [{ type: Output }],
    searchBar: [{ type: ViewChild, args: ['searchBar',] }]
};

class TableListSearchBarModule {
}
TableListSearchBarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TableListSearchBarComponent],
                exports: [TableListSearchBarComponent],
                imports: [CommonModule, TranslateModule, SearchBarModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { TableListSearchBarComponent, TableListSearchBarModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-table-list-search-bar.js.map
