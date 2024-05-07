import { ElementRef, EventEmitter } from '@angular/core';
import { OnSofFocus } from '@sofico-framework/ui-kit/directives/focus';
export declare class SearchBarComponent implements OnSofFocus {
    placeholder: string;
    search: EventEmitter<string>;
    internalValue: string;
    searchInput: ElementRef;
    onClear(): void;
    onKeyPress(): void;
    sofFocus(): void;
}
