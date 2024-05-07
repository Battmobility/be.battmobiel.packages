import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class LoadingComponent {
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

class LoadingModule {
}
LoadingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [LoadingComponent],
                exports: [LoadingComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { LoadingComponent, LoadingModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-loading.js.map
