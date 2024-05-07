import { Component, Input } from '@angular/core';
export class SvgIconComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9zdmctaWNvbi9zdmctaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFhakQsTUFBTSxPQUFPLGdCQUFnQjtJQVg3QjtRQWFXLFNBQUksR0FBeUQsSUFBSSxDQUFDO0lBQzdFLENBQUM7OztZQWRBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFFeEIsUUFBUSxFQUFFOzs7Ozs7R0FNVDs7YUFDRjs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLXN2Zy1pY29uJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ZnLWljb24uY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic3ZnLWljb24td3JhcHBlciBzaXplLXt7IHNpemUgfX1cIj5cbiAgICAgIDxzdmc+XG4gICAgICAgIDx1c2UgYXR0ci54bGluazpocmVmPVwiI3t7IGljb24gfX1cIiBhdHRyLmhyZWY9XCIje3sgaWNvbiB9fVwiPjwvdXNlPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU3ZnSWNvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogJzgnIHwgJzEyJyB8ICcxNicgfCAnMjAnIHwgJzI0JyB8ICcyOCcgfCAnMzInIHwgJzQ4JyA9ICcxNic7XG59XG4iXX0=