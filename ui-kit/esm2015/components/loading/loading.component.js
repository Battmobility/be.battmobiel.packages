import { Component, Input } from '@angular/core';
export class LoadingComponent {
    constructor() {
        this.size = 'md';
    }
}
LoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-loading',
                template: `
    <div class="text-center">
      <div class="spinner-border spinner-border-{{ size }}" role="status"></div>
    </div>
  `,
                styles: [""]
            },] }
];
LoadingComponent.propDecorators = {
    size: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXakQsTUFBTSxPQUFPLGdCQUFnQjtJQVQ3QjtRQVVXLFNBQUksR0FBZ0IsSUFBSSxDQUFDO0lBQ3BDLENBQUM7OztZQVhBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFFdkIsUUFBUSxFQUFFOzs7O0dBSVQ7O2FBQ0Y7OzttQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtbG9hZGluZycsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmcuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci17eyBzaXplIH19XCIgcm9sZT1cInN0YXR1c1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb21wb25lbnQge1xuICBASW5wdXQoKSBzaXplOiAnc20nIHwgJ21kJyA9ICdtZCc7XG59XG4iXX0=