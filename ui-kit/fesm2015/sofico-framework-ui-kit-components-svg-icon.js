import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class SvgIconComponent {
    constructor() {
        this.size = '16';
    }
}
SvgIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-svg-icon',
                template: `
    <div class="svg-icon-wrapper size-{{ size }}">
      <svg>
        <use attr.xlink:href="#{{ icon }}" attr.href="#{{ icon }}"></use>
      </svg>
    </div>
  `,
                styles: [":host{display:inline-block}.svg-icon-wrapper svg{display:block;width:inherit;height:inherit;border:inherit}.size-8{width:8px;height:8px}.size-12{width:12px;height:12px}.size-16{width:16px;height:16px}.size-20{width:20px;height:20px}.size-24{width:24px;height:24px}.size-28{width:28px;height:28px}.size-32{width:32px;height:32px}.size-48{width:48px;height:48px}"]
            },] }
];
SvgIconComponent.propDecorators = {
    icon: [{ type: Input }],
    size: [{ type: Input }]
};

class SvgIconModule {
}
SvgIconModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SvgIconComponent],
                exports: [SvgIconComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { SvgIconComponent, SvgIconModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-svg-icon.js.map
