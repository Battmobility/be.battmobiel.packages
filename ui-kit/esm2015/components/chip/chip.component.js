import { Component, EventEmitter, Input, Output } from '@angular/core';
export class ChipComponent {
    constructor() {
        this.isSelected = true;
        this.removed = new EventEmitter();
        this.selected = new EventEmitter();
    }
    onRemove(event) {
        this.removed.emit();
        event.stopPropagation();
    }
    onSelected(event) {
        if (!this.isDisabled && this.selectable) {
            this.selected.emit();
        }
        event.stopPropagation();
    }
}
ChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-chip',
                template: `
    <div
      class="chip"
      [class.small-chip]="smallChip"
      [class.disabled]="isDisabled"
      [class.unselected]="!isSelected"
      [class.selectable]="selectable"
      (click)="onSelected($event)"
    >
      <sof-svg-icon
        *ngIf="!!icon"
        class="mr-2"
        [size]="'12'"
        [icon]="icon"
      ></sof-svg-icon>
      <ng-content></ng-content>
      <button
        sofButton
        *ngIf="removable && !isDisabled"
        class="btn btn-plain ml-2 d-flex"
        icon="icon-cross"
        [iconSize]="'12'"
        [disabled]="isDisabled"
        (click)="onRemove($event)"
      ></button>
    </div>
  `,
                styles: [".chip{display:flex;align-items:center;white-space:nowrap;margin-bottom:.25rem;margin-right:.25rem;padding:.5rem;border-radius:20px;border-style:solid;border-width:1px}.selectable{cursor:pointer}.disabled{cursor:default}.small-chip{padding:.25rem .5rem}"]
            },] }
];
ChipComponent.propDecorators = {
    removable: [{ type: Input }],
    smallChip: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isSelected: [{ type: Input }],
    selectable: [{ type: Input }],
    icon: [{ type: Input }],
    removed: [{ type: Output }],
    selected: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2NoaXAvY2hpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWlDdkUsTUFBTSxPQUFPLGFBQWE7SUEvQjFCO1FBbUNXLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFJakIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFhMUMsQ0FBQztJQVhDLFFBQVEsQ0FBQyxLQUFZO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBWTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEI7UUFDRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCVDs7YUFFRjs7O3dCQUVFLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzttQkFDTCxLQUFLO3NCQUVMLE1BQU07dUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1jaGlwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImNoaXBcIlxuICAgICAgW2NsYXNzLnNtYWxsLWNoaXBdPVwic21hbGxDaGlwXCJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgIFtjbGFzcy51bnNlbGVjdGVkXT1cIiFpc1NlbGVjdGVkXCJcbiAgICAgIFtjbGFzcy5zZWxlY3RhYmxlXT1cInNlbGVjdGFibGVcIlxuICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0ZWQoJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPHNvZi1zdmctaWNvblxuICAgICAgICAqbmdJZj1cIiEhaWNvblwiXG4gICAgICAgIGNsYXNzPVwibXItMlwiXG4gICAgICAgIFtzaXplXT1cIicxMidcIlxuICAgICAgICBbaWNvbl09XCJpY29uXCJcbiAgICAgID48L3NvZi1zdmctaWNvbj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc29mQnV0dG9uXG4gICAgICAgICpuZ0lmPVwicmVtb3ZhYmxlICYmICFpc0Rpc2FibGVkXCJcbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLXBsYWluIG1sLTIgZC1mbGV4XCJcbiAgICAgICAgaWNvbj1cImljb24tY3Jvc3NcIlxuICAgICAgICBbaWNvblNpemVdPVwiJzEyJ1wiXG4gICAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgICAgKGNsaWNrKT1cIm9uUmVtb3ZlKCRldmVudClcIlxuICAgICAgPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9jaGlwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hpcENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHJlbW92YWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgc21hbGxDaGlwOiBib29sZWFuO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBpc1NlbGVjdGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgc2VsZWN0YWJsZTtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgb25SZW1vdmUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVkLmVtaXQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIG9uU2VsZWN0ZWQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgdGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLmVtaXQoKTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==