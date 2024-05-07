import { __decorate } from 'tslib';
import { Component, Input, ContentChild, NgModule } from '@angular/core';
import { Changes } from 'ngx-reactivetoolkit';
import { CommonModule } from '@angular/common';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class VerticalStepsComponent {
    constructor() {
        /**
         * The size of the bullets.
         * Can be 8 - 12 - 16.
         * 12 by default
         */
        this.sizeBullets = '12';
        /**
         * Input to reverse the direction of the steppers.
         * Meaning that the stepper will start at the bottom, and not at the top (default).
         */
        this.reverse = false;
    }
    set steps(items) {
        this.activeIndex = items.indexOf([...items].reverse().find(x => x.active));
        this.internalSteps = items.map((step, index) => (Object.assign(Object.assign({}, step), { active: index === this.activeIndex })));
    }
    ngOnChanges() { }
}
VerticalStepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-vertical-steps',
                template: `
    <ul>
      <li
        *ngFor="let item of internalSteps; let i = index"
        [class.active]="
          (i <= activeIndex && !reverse) || (i >= activeIndex && reverse)
        "
        [class.last-active]="i === activeIndex"
      >
        <span class="bullet bullet-{{ sizeBullets }}">
          <sof-svg-icon
            icon="icon-check"
            [size]="sizeBullets"
            *ngIf="
              (i <= activeIndex && !reverse) || (i >= activeIndex && reverse)
            "
          ></sof-svg-icon>
        </span>
        <div class="content content-{{ sizeBullets }}">
          <ng-container
            *ngIf="headerTemplateRef"
            [ngTemplateOutlet]="headerTemplateRef"
            [ngTemplateOutletContext]="{ $implicit: item }"
          >
          </ng-container>
        </div>
      </li>
    </ul>
  `,
                styles: ["ul{list-style:none;-webkit-padding-start:0;padding-inline-start:0}ul li{padding-bottom:15px;position:relative;display:flex;align-items:flex-start}ul li:last-child{padding-bottom:0}ul li:last-child .bullet:before{content:none}ul li .bullet{border-width:1px;border-style:solid;background-color:#fff;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-top:4px;flex-shrink:0}ul li .bullet-8{height:17px;width:17px}ul li .bullet-12{height:22px;width:22px}ul li .bullet-16{height:28px;width:28px}ul li .bullet-8:before{left:8px;top:21px;height:calc(100% - 17px)}ul li .bullet-12:before{left:11px;top:25px;height:calc(100% - 21px)}ul li .bullet-16:before{left:14px;top:31px;height:calc(100% - 27px)}ul li .bullet sof-svg-icon div svg path{stroke-width:4px}ul li .bullet:before{content:\"\";position:absolute;border-left-width:1px;border-left-style:dashed;bottom:0}ul li .content{margin-left:15px}ul li .content-12{margin-top:2px}ul li .content-16{margin-top:5px}"]
            },] }
];
VerticalStepsComponent.propDecorators = {
    sizeBullets: [{ type: Input }],
    reverse: [{ type: Input }],
    steps: [{ type: Input }],
    headerTemplateRef: [{ type: ContentChild, args: ['step', { static: false },] }]
};
__decorate([
    Changes('steps')
], VerticalStepsComponent.prototype, "steps$", void 0);

class VerticalStepsModule {
}
VerticalStepsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [VerticalStepsComponent],
                imports: [CommonModule, SvgIconModule],
                exports: [VerticalStepsComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { VerticalStepsComponent, VerticalStepsModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-vertical-steps.js.map
