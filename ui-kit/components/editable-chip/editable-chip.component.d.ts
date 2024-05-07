import { ElementRef, EventEmitter, OnInit } from '@angular/core';
export declare class EditableChipComponent implements OnInit {
    set label(label: string);
    set validationRegex(regex: RegExp);
    editChip: EventEmitter<string>;
    removeChip: EventEmitter<string>;
    invalidChip: EventEmitter<boolean>;
    internalLabel: string;
    internalValidationRegex: RegExp;
    wrongFormat: boolean;
    set chipEdit(element: ElementRef<HTMLDivElement>);
    chipEditElement: ElementRef;
    editMode: boolean;
    ngOnInit(): void;
    toggleEdit(): void;
    onSubmit(event: KeyboardEvent): void;
    onCancel(): void;
}
