import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class EditableChipComponent {
    constructor() {
        this.editChip = new EventEmitter();
        this.removeChip = new EventEmitter();
        this.invalidChip = new EventEmitter();
        this.wrongFormat = false;
        this.editMode = false;
    }
    set label(label) {
        this.internalLabel = label;
        if (this.internalValidationRegex) {
            this.wrongFormat = !this.internalLabel.match(this.internalValidationRegex);
        }
    }
    set validationRegex(regex) {
        this.internalValidationRegex = regex;
        if (this.internalLabel) {
            this.wrongFormat = !this.internalLabel.match(this.internalValidationRegex);
        }
    }
    set chipEdit(element) {
        if (element) {
            this.chipEditElement = element;
            element.nativeElement.focus();
        }
    }
    ngOnInit() { }
    toggleEdit() {
        this.editMode = true;
    }
    onSubmit(event) {
        var _a;
        const chipValue = (_a = this.chipEditElement.nativeElement) === null || _a === void 0 ? void 0 : _a.innerText;
        const matchesRegex = !!chipValue.match(this.internalValidationRegex);
        if (!!chipValue && matchesRegex) {
            this.editChip.emit(chipValue);
            this.editMode = false;
            this.invalidChip.emit(false);
        }
        else {
            this.invalidChip.emit(true);
        }
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    onCancel() {
        this.chipEditElement.nativeElement.innerText = this.label;
        this.editMode = false;
        this.invalidChip.emit(false);
    }
}
EditableChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-editable-chip',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div (click)="toggleEdit()">
      <div
        class="badge badge-pill d-block"
        [class.badge-pill-valid]="!wrongFormat"
        [class.badge-edit]="editMode"
        [class.badge-pill-invalid]="wrongFormat"
      >
        <div class="badge-label" *ngIf="!editMode; else edit">
          <span class="label-text">{{ internalLabel }}</span>
          <sof-svg-icon
            class="ml-1"
            icon="icon-cross"
            size="8"
            (click)="removeChip.emit(internalLabel)"
          ></sof-svg-icon>
        </div>
        <ng-template #edit>
          <div
            #chipEdit
            class="chip-edit"
            contenteditable="true"
            spellcheck="false"
            (keydown.enter)="onSubmit($event)"
            (keydown.escape)="onCancel()"
            (blur)="onCancel()"
          >
            {{ internalLabel }}
          </div>
        </ng-template>
      </div>
    </div>
  `,
                styles: [".badge{min-width:30px}.badge-pill{font-size:.75rem;border:1px solid;padding:.5rem;margin:.25rem}.badge-edit{background-color:#fff}.badge-label{display:flex;flex-wrap:nowrap;align-items:center}.label-text{text-overflow:ellipsis}.chip-edit,.label-text{overflow:hidden}.chip-edit:focus{outline:none;background-color:#fff}sof-svg-icon{cursor:pointer}"]
            },] }
];
EditableChipComponent.propDecorators = {
    label: [{ type: Input }],
    validationRegex: [{ type: Input }],
    editChip: [{ type: Output }],
    removeChip: [{ type: Output }],
    invalidChip: [{ type: Output }],
    chipEdit: [{ type: ViewChild, args: ['chipEdit',] }]
};

class EditableChipModule {
}
EditableChipModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EditableChipComponent],
                imports: [CommonModule, SvgIconModule],
                exports: [EditableChipComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { EditableChipComponent, EditableChipModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-editable-chip.js.map
