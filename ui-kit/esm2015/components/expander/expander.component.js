import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
export class ExpanderComponent {
    constructor() {
        /**
         * Manually set whether the expander is open or closed.
         * Useful when you want to reset the expansion state.
         */
        this.isExpanded = false;
        /**
         * Output that will emit if the toggle is expanded or not.
         */
        this.expanded = new EventEmitter();
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
        this.expanded.emit(this.isExpanded);
    }
}
ExpanderComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-expander',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div [class.expanded]="!isExpanded">
      <ng-content></ng-content>
    </div>
    <div class="expander">
      <button (click)="toggle()">
        <span class="label">{{ isExpanded ? lessLabel : moreLabel }}</span>
        <sof-svg-icon
          [icon]="isExpanded ? 'icon-chevron-up' : 'icon-chevron-down'"
          size="8"
          class="ml-1"
        ></sof-svg-icon>
      </button>
    </div>
  `,
                styles: [".expanded{display:none}.expander{display:flex;flex-direction:row;justify-content:center}.expander .label{margin-right:.25rem;font-size:.8rem}.expander button{display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:center;height:auto;border:none;cursor:pointer;background:none}@media print{.expanded{display:block}.expander{display:none}}"]
            },] }
];
ExpanderComponent.ctorParameters = () => [];
ExpanderComponent.propDecorators = {
    moreLabel: [{ type: Input }],
    lessLabel: [{ type: Input }],
    isExpanded: [{ type: Input }],
    expanded: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9leHBhbmRlci9leHBhbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFzQnZCLE1BQU0sT0FBTyxpQkFBaUI7SUFzQjVCO1FBWEE7OztXQUdHO1FBQ00sZUFBVSxHQUFHLEtBQUssQ0FBQztRQUU1Qjs7V0FFRztRQUNPLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBRWxDLENBQUM7SUFFaEIsTUFBTTtRQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFFL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUOzthQUNGOzs7O3dCQUtFLEtBQUs7d0JBS0wsS0FBSzt5QkFNTCxLQUFLO3VCQUtMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1leHBhbmRlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZVVybHM6IFsnLi9leHBhbmRlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzLmV4cGFuZGVkXT1cIiFpc0V4cGFuZGVkXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV4cGFuZGVyXCI+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGUoKVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+e3sgaXNFeHBhbmRlZCA/IGxlc3NMYWJlbCA6IG1vcmVMYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgPHNvZi1zdmctaWNvblxuICAgICAgICAgIFtpY29uXT1cImlzRXhwYW5kZWQgPyAnaWNvbi1jaGV2cm9uLXVwJyA6ICdpY29uLWNoZXZyb24tZG93bidcIlxuICAgICAgICAgIHNpemU9XCI4XCJcbiAgICAgICAgICBjbGFzcz1cIm1sLTFcIlxuICAgICAgICA+PC9zb2Ytc3ZnLWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbmRlckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgdHJhbnNsYXRlZCBsYWJlbCBvZiB0aGUgdG9nZ2xlIHdoZW4gY29sbGFwc2VkLlxuICAgKi9cbiAgQElucHV0KCkgbW9yZUxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0cmFuc2xhdGVkIGxhYmVsIG9mIHRoZSB0b2dnbGUgd2hlbiBleHBhbmRlZC5cbiAgICovXG4gIEBJbnB1dCgpIGxlc3NMYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNYW51YWxseSBzZXQgd2hldGhlciB0aGUgZXhwYW5kZXIgaXMgb3BlbiBvciBjbG9zZWQuXG4gICAqIFVzZWZ1bCB3aGVuIHlvdSB3YW50IHRvIHJlc2V0IHRoZSBleHBhbnNpb24gc3RhdGUuXG4gICAqL1xuICBASW5wdXQoKSBpc0V4cGFuZGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIE91dHB1dCB0aGF0IHdpbGwgZW1pdCBpZiB0aGUgdG9nZ2xlIGlzIGV4cGFuZGVkIG9yIG5vdC5cbiAgICovXG4gIEBPdXRwdXQoKSBleHBhbmRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9ICF0aGlzLmlzRXhwYW5kZWQ7XG4gICAgdGhpcy5leHBhbmRlZC5lbWl0KHRoaXMuaXNFeHBhbmRlZCk7XG4gIH1cbn1cbiJdfQ==