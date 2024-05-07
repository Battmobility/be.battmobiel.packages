import { EventEmitter } from '@angular/core';
export declare class ExpanderComponent {
    /**
     * The translated label of the toggle when collapsed.
     */
    moreLabel: string;
    /**
     * The translated label of the toggle when expanded.
     */
    lessLabel: string;
    /**
     * Manually set whether the expander is open or closed.
     * Useful when you want to reset the expansion state.
     */
    isExpanded: boolean;
    /**
     * Output that will emit if the toggle is expanded or not.
     */
    expanded: EventEmitter<boolean>;
    constructor();
    toggle(): void;
}
