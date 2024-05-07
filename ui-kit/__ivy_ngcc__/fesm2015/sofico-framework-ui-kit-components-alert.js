import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@sofico-framework/ui-kit/components/svg-icon';
import * as ɵngcc2 from '@angular/common';

function AlertComponent_sof_svg_icon_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sof-svg-icon", 5);
} }
const _c0 = ["*"];
class AlertComponent {
    constructor() {
        /**
         * Type of alert that must be displayed. This has an impact on icons and colors.
         * Options: info, success, warning and danger.
         */
        this.type = 'info';
        /**
         * Whether or not the alert can be closed.
         */
        this.isDismissible = false;
        /**
         * Event that will inform when the alert is closed.
         */
        this.dismiss = new EventEmitter();
        this.alertIcons = {
            ['info']: 'icon-info-circle',
            ['success']: 'icon-checkmark-circle',
            ['warning']: 'icon-warning',
            ['danger']: 'icon-cross-circle'
        };
    }
    onClose() {
        this.display = 'none';
        this.dismiss.emit();
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["sof-alert"]], hostVars: 2, hostBindings: function AlertComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("display", ctx.display);
    } }, inputs: { type: "type", isDismissible: "isDismissible" }, outputs: { dismiss: "dismiss" }, ngContentSelectors: _c0, decls: 6, vars: 5, consts: [["role", "alert"], ["size", "20", 1, "alert-icon-type", 3, "icon"], [1, "alert-content"], [1, "btn", "btn-plain", 3, "click"], ["class", "alert-icon-dismiss", "icon", "icon-cross", "size", "12", 4, "ngIf"], ["icon", "icon-cross", "size", "12", 1, "alert-icon-dismiss"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "sof-svg-icon", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "button", 3);
        ɵngcc0.ɵɵlistener("click", function AlertComponent_Template_button_click_4_listener() { return ctx.onClose(); });
        ɵngcc0.ɵɵtemplate(5, AlertComponent_sof_svg_icon_5_Template, 1, 0, "sof-svg-icon", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("alert alert-", ctx.type, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("icon", ctx.alertIcons[ctx.type]);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isDismissible);
    } }, directives: [ɵngcc1.SvgIconComponent, ɵngcc2.NgIf], styles: ["[_nghost-%COMP%]{display:block}.alert[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0}.alert[_ngcontent-%COMP%]   .alert-icon-type[_ngcontent-%COMP%]{flex-shrink:0;margin-right:1rem}.alert[_ngcontent-%COMP%]   .alert-content[_ngcontent-%COMP%]{width:100%}.alert[_ngcontent-%COMP%]   .alert-icon-dismiss[_ngcontent-%COMP%]{flex-shrink:0;margin-left:1rem;cursor:pointer}"], changeDetection: 0 });
AlertComponent.propDecorators = {
    type: [{ type: Input }],
    isDismissible: [{ type: Input }],
    dismiss: [{ type: Output }],
    display: [{ type: HostBinding, args: ['style.display',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: 'sof-alert',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="alert alert-{{ type }}" role="alert">
      <sof-svg-icon
        class="alert-icon-type"
        [icon]="alertIcons[type]"
        size="20"
      ></sof-svg-icon>
      <div class="alert-content">
        <ng-content></ng-content>
      </div>
      <button class="btn btn-plain" (click)="onClose()">
        <sof-svg-icon
          *ngIf="isDismissible"
          class="alert-icon-dismiss"
          icon="icon-cross"
          size="12"
        ></sof-svg-icon>
      </button>
    </div>
  `,
                styles: [":host{display:block}.alert{display:flex;align-items:center;margin:0}.alert .alert-icon-type{flex-shrink:0;margin-right:1rem}.alert .alert-content{width:100%}.alert .alert-icon-dismiss{flex-shrink:0;margin-left:1rem;cursor:pointer}"]
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], isDismissible: [{
            type: Input
        }], dismiss: [{
            type: Output
        }], display: [{
            type: HostBinding,
            args: ['style.display']
        }] }); })();

class AlertModule {
}
AlertModule.ɵfac = function AlertModule_Factory(t) { return new (t || AlertModule)(); };
AlertModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AlertModule });
AlertModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, SvgIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AlertModule, { declarations: function () { return [AlertComponent]; }, imports: function () { return [CommonModule, SvgIconModule]; }, exports: function () { return [AlertComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AlertModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SvgIconModule],
                declarations: [AlertComponent],
                exports: [AlertComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AlertComponent, AlertModule };

//# sourceMappingURL=sofico-framework-ui-kit-components-alert.js.map