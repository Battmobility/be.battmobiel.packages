import { EventEmitter } from '@angular/core';
export declare class ToggleCardComponent {
    icon: string;
    title: string;
    selected: boolean;
    selectedIcon: string;
    isDisabled: boolean;
    invalid: boolean;
    toggle: EventEmitter<any>;
    open(): void;
    close(event: Event): void;
}
