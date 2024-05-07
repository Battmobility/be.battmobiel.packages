import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
export class EditableChipComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2VkaXRhYmxlLWNoaXAvZWRpdGFibGUtY2hpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBd0N2QixNQUFNLE9BQU8scUJBQXFCO0lBdENsQztRQTBEWSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN0QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFJcEQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFVcEIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQStCbkIsQ0FBQztJQWxFQyxJQUFhLEtBQUssQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FDMUMsSUFBSSxDQUFDLHVCQUF1QixDQUM3QixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsSUFBYSxlQUFlLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBRXJDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQzFDLElBQUksQ0FBQyx1QkFBdUIsQ0FDN0IsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQVVELElBQTJCLFFBQVEsQ0FBQyxPQUFtQztRQUNyRSxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBS0QsUUFBUSxLQUFVLENBQUM7SUFFbkIsVUFBVTtRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBb0I7O1FBQzNCLE1BQU0sU0FBUyxTQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSwwQ0FBRSxTQUFTLENBQUM7UUFDaEUsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLFlBQVksRUFBRTtZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQXhHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQ1Q7O2FBRUY7OztvQkFFRSxLQUFLOzhCQVNMLEtBQUs7dUJBVUwsTUFBTTt5QkFDTixNQUFNOzBCQUNOLE1BQU07dUJBTU4sU0FBUyxTQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtZWRpdGFibGUtY2hpcCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKGNsaWNrKT1cInRvZ2dsZUVkaXQoKVwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImJhZGdlIGJhZGdlLXBpbGwgZC1ibG9ja1wiXG4gICAgICAgIFtjbGFzcy5iYWRnZS1waWxsLXZhbGlkXT1cIiF3cm9uZ0Zvcm1hdFwiXG4gICAgICAgIFtjbGFzcy5iYWRnZS1lZGl0XT1cImVkaXRNb2RlXCJcbiAgICAgICAgW2NsYXNzLmJhZGdlLXBpbGwtaW52YWxpZF09XCJ3cm9uZ0Zvcm1hdFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZS1sYWJlbFwiICpuZ0lmPVwiIWVkaXRNb2RlOyBlbHNlIGVkaXRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsLXRleHRcIj57eyBpbnRlcm5hbExhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDxzb2Ytc3ZnLWljb25cbiAgICAgICAgICAgIGNsYXNzPVwibWwtMVwiXG4gICAgICAgICAgICBpY29uPVwiaWNvbi1jcm9zc1wiXG4gICAgICAgICAgICBzaXplPVwiOFwiXG4gICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlQ2hpcC5lbWl0KGludGVybmFsTGFiZWwpXCJcbiAgICAgICAgICA+PC9zb2Ytc3ZnLWljb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmctdGVtcGxhdGUgI2VkaXQ+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgI2NoaXBFZGl0XG4gICAgICAgICAgICBjbGFzcz1cImNoaXAtZWRpdFwiXG4gICAgICAgICAgICBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJvblN1Ym1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgIChrZXlkb3duLmVzY2FwZSk9XCJvbkNhbmNlbCgpXCJcbiAgICAgICAgICAgIChibHVyKT1cIm9uQ2FuY2VsKClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGludGVybmFsTGFiZWwgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9lZGl0YWJsZS1jaGlwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRWRpdGFibGVDaGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2V0IGxhYmVsKGxhYmVsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmludGVybmFsTGFiZWwgPSBsYWJlbDtcblxuICAgIGlmICh0aGlzLmludGVybmFsVmFsaWRhdGlvblJlZ2V4KSB7XG4gICAgICB0aGlzLndyb25nRm9ybWF0ID0gIXRoaXMuaW50ZXJuYWxMYWJlbC5tYXRjaChcbiAgICAgICAgdGhpcy5pbnRlcm5hbFZhbGlkYXRpb25SZWdleFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgc2V0IHZhbGlkYXRpb25SZWdleChyZWdleDogUmVnRXhwKSB7XG4gICAgdGhpcy5pbnRlcm5hbFZhbGlkYXRpb25SZWdleCA9IHJlZ2V4O1xuXG4gICAgaWYgKHRoaXMuaW50ZXJuYWxMYWJlbCkge1xuICAgICAgdGhpcy53cm9uZ0Zvcm1hdCA9ICF0aGlzLmludGVybmFsTGFiZWwubWF0Y2goXG4gICAgICAgIHRoaXMuaW50ZXJuYWxWYWxpZGF0aW9uUmVnZXhcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgpIGVkaXRDaGlwID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZW1vdmVDaGlwID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBpbnZhbGlkQ2hpcCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBpbnRlcm5hbExhYmVsOiBzdHJpbmc7XG4gIGludGVybmFsVmFsaWRhdGlvblJlZ2V4OiBSZWdFeHA7XG4gIHdyb25nRm9ybWF0ID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnY2hpcEVkaXQnKSBzZXQgY2hpcEVkaXQoZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD4pIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdGhpcy5jaGlwRWRpdEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgY2hpcEVkaXRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBlZGl0TW9kZSA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICB0b2dnbGVFZGl0KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xuICB9XG5cbiAgb25TdWJtaXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjaGlwVmFsdWUgPSB0aGlzLmNoaXBFZGl0RWxlbWVudC5uYXRpdmVFbGVtZW50Py5pbm5lclRleHQ7XG4gICAgY29uc3QgbWF0Y2hlc1JlZ2V4ID0gISFjaGlwVmFsdWUubWF0Y2godGhpcy5pbnRlcm5hbFZhbGlkYXRpb25SZWdleCk7XG5cbiAgICBpZiAoISFjaGlwVmFsdWUgJiYgbWF0Y2hlc1JlZ2V4KSB7XG4gICAgICB0aGlzLmVkaXRDaGlwLmVtaXQoY2hpcFZhbHVlKTtcbiAgICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW52YWxpZENoaXAuZW1pdChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW52YWxpZENoaXAuZW1pdCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoaXBFZGl0RWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMubGFiZWw7XG4gICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuaW52YWxpZENoaXAuZW1pdChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==