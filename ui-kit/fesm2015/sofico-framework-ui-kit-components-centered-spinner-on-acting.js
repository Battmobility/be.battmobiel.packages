import { __decorate } from 'tslib';
import { Component, Input, HostBinding, NgModule } from '@angular/core';
import { Acting } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { CommonModule } from '@angular/common';
import { LoadingModule } from '@sofico-framework/ui-kit/components/loading';

let CenteredSpinnerOnActingComponent = class CenteredSpinnerOnActingComponent {
    constructor() {
        this.noClickThrough = false;
        this.show = false;
    }
    get showBinding() {
        return this.show && this.noClickThrough;
    }
    ngOnInit() {
        this.acting$
            .pipe(takeUntilDestroy(this))
            .subscribe(acting => (this.show = acting));
    }
    ngOnDestroy() { }
    onClick(event) {
        event.stopPropagation();
    }
};
CenteredSpinnerOnActingComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-centered-spinner-on-acting',
                template: `
    <div class="base" [class.show]="show">
      <div class="overlay" (click)="onClick($event)"></div>
      <sof-loading></sof-loading>
    </div>
  `,
                styles: [":host.block{position:fixed;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:999}:host .base{display:none;z-index:999}:host .show{position:fixed;width:100px;height:100px;margin:auto;justify-content:center;align-items:center;display:flex;top:0;left:0;bottom:0;right:0}:host .show .overlay{position:absolute;background-color:#fff;width:100px;border-radius:.25rem;opacity:.7;height:100px}"]
            },] }
];
CenteredSpinnerOnActingComponent.propDecorators = {
    noClickThrough: [{ type: Input }],
    showBinding: [{ type: HostBinding, args: ['class.block',] }]
};
__decorate([
    Acting()
], CenteredSpinnerOnActingComponent.prototype, "acting$", void 0);
CenteredSpinnerOnActingComponent = __decorate([
    UntilDestroy()
], CenteredSpinnerOnActingComponent);

class CenteredSpinnerOnActingModule {
}
CenteredSpinnerOnActingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CenteredSpinnerOnActingComponent],
                exports: [CenteredSpinnerOnActingComponent],
                imports: [CommonModule, LoadingModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { CenteredSpinnerOnActingComponent, CenteredSpinnerOnActingModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-centered-spinner-on-acting.js.map
