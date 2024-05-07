import { EventEmitter } from '@angular/core';
export declare class ChipComponent {
    removable: boolean;
    smallChip: boolean;
    isDisabled: boolean;
    isSelected: boolean;
    selectable: any;
    icon: string;
    removed: EventEmitter<any>;
    selected: EventEmitter<any>;
    onRemove(event: Event): void;
    onSelected(event: Event): void;
}
