import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChild, NgModule } from '@angular/core';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SearchBarModule } from '@sofico-framework/ui-kit/components/search-bar';

class OverviewListSearchBarComponent {
    constructor() {
        this.changeTerm = new EventEmitter();
    }
    sofFocus() {
        this.searchBar.sofFocus();
    }
}
OverviewListSearchBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-overview-list-search-bar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-search-bar
      #searchBar
      [placeholder]="tc + '.' + 'FILTER' | translate"
      (search)="changeTerm.emit($event)"
    ></sof-search-bar>
  `,
                providers: [
                    {
                        provide: SOF_FOCUS_COMPONENT,
                        useExisting: OverviewListSearchBarComponent
                    }
                ],
                styles: [""]
            },] }
];
OverviewListSearchBarComponent.propDecorators = {
    tc: [{ type: Input }],
    changeTerm: [{ type: Output }],
    searchBar: [{ type: ViewChild, args: ['searchBar',] }]
};

class OverviewListSearchBarModule {
}
OverviewListSearchBarModule.decorators = [
    { type: NgModule, args: [{
                exports: [OverviewListSearchBarComponent],
                declarations: [OverviewListSearchBarComponent],
                imports: [CommonModule, TranslateModule, SearchBarModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { OverviewListSearchBarComponent, OverviewListSearchBarModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-overview-list-search-bar.js.map
