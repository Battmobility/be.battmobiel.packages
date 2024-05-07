import { Component, ChangeDetectionStrategy, Input, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule } from '@sofico-framework/ui-kit/components/loading';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class ButtonDirectiveComponent {
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

class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, LoadingModule, SvgIconModule],
                declarations: [ButtonDirectiveComponent],
                exports: [ButtonDirectiveComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonDirectiveComponent, ButtonModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-button.js.map
