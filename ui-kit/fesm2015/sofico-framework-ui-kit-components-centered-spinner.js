import { __decorate } from 'tslib';
import { Component, HostBinding, NgModule } from '@angular/core';
import { Loading } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { CommonModule } from '@angular/common';
import { LoadingModule } from '@sofico-framework/ui-kit/components/loading';

let CenteredSpinnerComponent = class CenteredSpinnerComponent {
    constructor() {
        this.show = false;
    }
    get showBinding() {
        return this.show;
    }
    ngOnInit() {
        this.loading$
            .pipe(takeUntilDestroy(this))
            .subscribe(loading => (this.show = loading));
    }
    ngOnDestroy() { }
};
CenteredSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-centered-spinner',
                template: `
    <div class="overlay"></div>
    <sof-loading></sof-loading>
  `,
                styles: [":host{display:none;z-index:999}:host.show{position:fixed;width:100px;height:100px;margin:auto;justify-content:center;align-items:center;display:flex;top:0;left:0;bottom:0;right:0}:host.show .overlay{position:absolute;background-color:#fff;width:100px;border-radius:.25rem;opacity:.7;height:100px}"]
            },] }
];
CenteredSpinnerComponent.ctorParameters = () => [];
CenteredSpinnerComponent.propDecorators = {
    showBinding: [{ type: HostBinding, args: ['class.show',] }]
};
__decorate([
    Loading()
], CenteredSpinnerComponent.prototype, "loading$", void 0);
CenteredSpinnerComponent = __decorate([
    UntilDestroy()
], CenteredSpinnerComponent);

class CenteredSpinnerModule {
}
CenteredSpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CenteredSpinnerComponent],
                exports: [CenteredSpinnerComponent],
                imports: [CommonModule, LoadingModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { CenteredSpinnerComponent, CenteredSpinnerModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-centered-spinner.js.map
