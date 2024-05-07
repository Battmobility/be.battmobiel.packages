import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
export class ButtonDirectiveComponent {
    constructor() {
        /**
         * Defines what size the icon will have.
         * The default size will be 16px.
         */
        this.iconSize = '16';
        /**
         * Defines what size the suffix icon will have.
         * The default size will be 16px.
         */
        this.iconSuffixSize = '16';
        /**
         * Defines what the button type must be. Defaults to: 'button'.
         * Possible values are based on the HTML standard.
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
         */
        this.type = 'button';
    }
}
ButtonDirectiveComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[sofButton]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div
      class="button-wrapper d-flex justify-content-center align-items-center position-relative"
    >
      <sof-loading
        *ngIf="loading"
        size="sm"
        class="position-absolute"
      ></sof-loading>
      <sof-svg-icon
        *ngIf="icon"
        [icon]="icon"
        [size]="iconSize"
        [class.mr-2]="contentWrapper.childNodes.length !== 0 || iconSuffix"
        [class.invisible]="loading"
      >
      </sof-svg-icon>
      <span #contentWrapper [class.invisible]="loading">
        <ng-content></ng-content>
      </span>
      <sof-svg-icon
        *ngIf="iconSuffix"
        [icon]="iconSuffix"
        [size]="iconSuffixSize"
        [class.ml-2]="contentWrapper.childNodes.length !== 0"
        [class.invisible]="loading"
      >
      </sof-svg-icon>
    </div>
  `,
                styles: [""]
            },] }
];
ButtonDirectiveComponent.propDecorators = {
    loading: [{ type: Input }],
    icon: [{ type: Input }],
    iconSuffix: [{ type: Input }],
    iconSize: [{ type: Input }],
    iconSuffixSize: [{ type: Input }],
    type: [{ type: HostBinding, args: ['attr.type',] }, { type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTixNQUFNLGVBQWUsQ0FBQztBQXNDdkIsTUFBTSxPQUFPLHdCQUF3QjtJQXBDckM7UUF1REU7OztXQUdHO1FBQ00sYUFBUSxHQUNmLElBQUksQ0FBQztRQUVQOzs7V0FHRztRQUNNLG1CQUFjLEdBUVosSUFBSSxDQUFDO1FBRWhCOzs7O1dBSUc7UUFHSCxTQUFJLEdBQWtDLFFBQVEsQ0FBQztJQUNqRCxDQUFDOzs7WUFwRkEsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJUOzthQUVGOzs7c0JBTUUsS0FBSzttQkFNTCxLQUFLO3lCQU1MLEtBQUs7dUJBTUwsS0FBSzs2QkFPTCxLQUFLO21CQWVMLFdBQVcsU0FBQyxXQUFXLGNBQ3ZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW3NvZkJ1dHRvbl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImJ1dHRvbi13cmFwcGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiXG4gICAgPlxuICAgICAgPHNvZi1sb2FkaW5nXG4gICAgICAgICpuZ0lmPVwibG9hZGluZ1wiXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGVcIlxuICAgICAgPjwvc29mLWxvYWRpbmc+XG4gICAgICA8c29mLXN2Zy1pY29uXG4gICAgICAgICpuZ0lmPVwiaWNvblwiXG4gICAgICAgIFtpY29uXT1cImljb25cIlxuICAgICAgICBbc2l6ZV09XCJpY29uU2l6ZVwiXG4gICAgICAgIFtjbGFzcy5tci0yXT1cImNvbnRlbnRXcmFwcGVyLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwIHx8IGljb25TdWZmaXhcIlxuICAgICAgICBbY2xhc3MuaW52aXNpYmxlXT1cImxvYWRpbmdcIlxuICAgICAgPlxuICAgICAgPC9zb2Ytc3ZnLWljb24+XG4gICAgICA8c3BhbiAjY29udGVudFdyYXBwZXIgW2NsYXNzLmludmlzaWJsZV09XCJsb2FkaW5nXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzb2Ytc3ZnLWljb25cbiAgICAgICAgKm5nSWY9XCJpY29uU3VmZml4XCJcbiAgICAgICAgW2ljb25dPVwiaWNvblN1ZmZpeFwiXG4gICAgICAgIFtzaXplXT1cImljb25TdWZmaXhTaXplXCJcbiAgICAgICAgW2NsYXNzLm1sLTJdPVwiY29udGVudFdyYXBwZXIuY2hpbGROb2Rlcy5sZW5ndGggIT09IDBcIlxuICAgICAgICBbY2xhc3MuaW52aXNpYmxlXT1cImxvYWRpbmdcIlxuICAgICAgPlxuICAgICAgPC9zb2Ytc3ZnLWljb24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5kaXJlY3RpdmUuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkRpcmVjdGl2ZUNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgYnV0dG9uIGlzIGluIGxvYWRpbmcgc3RhdGUuXG4gICAqIENvbnRlbnQgb2YgdGhlIGJ1dHRvbiB3aWxsIGJlIGhpZGRlbiBhbmQgYSBzcGlubmVyIHdpbGwgc2hvdy5cbiAgICovXG4gIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERlZmluZXMgd2hpY2ggaWNvbiBtdXN0IGJlIHNob3duIG5leHQgdG8gdGhlIGJ1dHRvbiBsYWJlbC5cbiAgICogVGhlIGljb24gd2lsbCBiZSBwb3NpdGlvbmVkIGluIGZyb250IG9mIHRoZSBsYWJlbC5cbiAgICovXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lcyB3aGljaCBpY29uIG11c3QgYmUgc2hvd24gbmV4dCB0byB0aGUgYnV0dG9uIGxhYmVsLlxuICAgKiBUaGUgaWNvbiB3aWxsIGJlIHBvc2l0aW9uZWQgYWZ0ZXIgdGhlIGxhYmVsLlxuICAgKi9cbiAgQElucHV0KCkgaWNvblN1ZmZpeDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHdoYXQgc2l6ZSB0aGUgaWNvbiB3aWxsIGhhdmUuXG4gICAqIFRoZSBkZWZhdWx0IHNpemUgd2lsbCBiZSAxNnB4LlxuICAgKi9cbiAgQElucHV0KCkgaWNvblNpemU6ICc4JyB8ICcxMicgfCAnMTYnIHwgJzIwJyB8ICcyNCcgfCAnMjgnIHwgJzMyJyB8ICc0OCcgPVxuICAgICcxNic7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgd2hhdCBzaXplIHRoZSBzdWZmaXggaWNvbiB3aWxsIGhhdmUuXG4gICAqIFRoZSBkZWZhdWx0IHNpemUgd2lsbCBiZSAxNnB4LlxuICAgKi9cbiAgQElucHV0KCkgaWNvblN1ZmZpeFNpemU6XG4gICAgfCAnOCdcbiAgICB8ICcxMidcbiAgICB8ICcxNidcbiAgICB8ICcyMCdcbiAgICB8ICcyNCdcbiAgICB8ICcyOCdcbiAgICB8ICczMidcbiAgICB8ICc0OCcgPSAnMTYnO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHdoYXQgdGhlIGJ1dHRvbiB0eXBlIG11c3QgYmUuIERlZmF1bHRzIHRvOiAnYnV0dG9uJy5cbiAgICogUG9zc2libGUgdmFsdWVzIGFyZSBiYXNlZCBvbiB0aGUgSFRNTCBzdGFuZGFyZC5cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2J1dHRvblxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnR5cGUnKVxuICBASW5wdXQoKVxuICB0eXBlOiAnYnV0dG9uJyB8ICdyZXNldCcgfCAnc3VibWl0JyA9ICdidXR0b24nO1xufVxuIl19