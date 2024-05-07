import { EventEmitter } from '@angular/core';
import { SearchBarComponent } from '@sofico-framework/ui-kit/components/search-bar';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
export declare class TableListSearchBarComponent<T> implements OnSofFocus {
    tc: string;
    changeTerm: EventEmitter<string>;
    searchBar: SearchBarComponent;
    constructor();
    sofFocus(): void;
}
