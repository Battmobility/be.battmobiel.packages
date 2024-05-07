import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { CdkPortal, ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, EventEmitter, Component, ViewChild, Input, Output, Injector, NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AlertModule } from '@sofico-framework/ui-kit/components/alert';
import { ButtonModule } from '@sofico-framework/ui-kit/components/button';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { FocusModule } from '@sofico-framework/ui-kit/directives/focus';
import { __decorate } from 'tslib';
import { Acting, ActingErrorMessages, DocumentRefService } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { fromEvent, of, merge } from 'rxjs';
import { filter, catchError, share, switchMap, finalize } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
import * as ɵngcc2 from '@angular/cdk/portal';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@sofico-framework/ui-kit/components/button';
import * as ɵngcc5 from '@sofico-framework/ui-kit/directives/focus';
import * as ɵngcc6 from '@sofico-framework/ui-kit/components/alert';
import * as ɵngcc7 from '@ngx-translate/core';
import * as ɵngcc8 from '@sofico-framework/utils';
import * as ɵngcc9 from '@angular/cdk/a11y';
import * as ɵngcc10 from '@sofico-framework/ui-kit/components/svg-icon';

function DialogComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "sof-dialog-inner", 1);
    ɵngcc0.ɵɵlistener("destroy", function DialogComponent_ng_template_0_Template_sof_dialog_inner_destroy_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.destroy.emit(); });
    ɵngcc0.ɵɵprojection(1, 0, ["sof-dialog-body", ""]);
    ɵngcc0.ɵɵprojection(2, 1, ["sof-dialog-footer", ""]);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r0.icon)("sizeHeaderIcon", ctx_r0.sizeHeaderIcon)("headerLabel", ctx_r0.headerLabel)("hideDestroy", ctx_r0.hideDestroy);
} }
const _c0 = [[["", "sof-dialog-body", ""]], [["", "sof-dialog-footer", ""]]];
const _c1 = ["[sof-dialog-body]", "[sof-dialog-footer]"];
function AcknowledgeDialogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵelementStart(1, "sof-alert", 6);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "translate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", (error_r1 == null ? null : error_r1.translation) ? error_r1 == null ? null : error_r1.translation : ɵngcc0.ɵɵpipeBind2(3, 1, ctx_r0.tc + "." + (error_r1 == null ? null : error_r1.message), error_r1 == null ? null : error_r1.messageParams), " ");
} }
function ConfirmDialogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵelementStart(1, "sof-alert", 7);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "translate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r4 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", (error_r4 == null ? null : error_r4.translation) ? error_r4 == null ? null : error_r4.translation : ɵngcc0.ɵɵpipeBind2(3, 1, ctx_r0.tc + "." + (error_r4 == null ? null : error_r4.message), error_r4 == null ? null : error_r4.messageParams), " ");
} }
function ConfirmDialogComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "button", 8);
    ɵngcc0.ɵɵlistener("click", function ConfirmDialogComponent_ng_container_8_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.confirm.emit(); });
    ɵngcc0.ɵɵpipe(2, "async");
    ɵngcc0.ɵɵpipe(3, "async");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵpipe(5, "translate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "button", 9);
    ɵngcc0.ɵɵlistener("click", function ConfirmDialogComponent_ng_container_8_Template_button_click_6_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.decline.emit(); });
    ɵngcc0.ɵɵpipe(7, "async");
    ɵngcc0.ɵɵtext(8);
    ɵngcc0.ɵɵpipe(9, "translate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("loading", !ctx_r1.disableActing && ɵngcc0.ɵɵpipeBind1(2, 5, ctx_r1.acting$))("disabled", !ctx_r1.disableActing && ɵngcc0.ɵɵpipeBind1(3, 7, ctx_r1.acting$));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(5, 9, ctx_r1.tc + "." + ctx_r1.confirmLabel), " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", !ctx_r1.disableActing && ɵngcc0.ɵɵpipeBind1(7, 11, ctx_r1.acting$));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(9, 13, ctx_r1.tc + "." + ctx_r1.cancelLabel), " ");
} }
function ConfirmDialogComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 10);
    ɵngcc0.ɵɵlistener("click", function ConfirmDialogComponent_ng_template_9_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.decline.emit(); });
    ɵngcc0.ɵɵpipe(1, "async");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "translate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "button", 11);
    ɵngcc0.ɵɵlistener("click", function ConfirmDialogComponent_ng_template_9_Template_button_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.confirm.emit(); });
    ɵngcc0.ɵɵpipe(5, "async");
    ɵngcc0.ɵɵpipe(6, "async");
    ɵngcc0.ɵɵtext(7);
    ɵngcc0.ɵɵpipe(8, "translate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ɵngcc0.ɵɵpipeBind1(1, 5, ctx_r3.acting$));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(3, 7, ctx_r3.tc + "." + ctx_r3.cancelLabel), " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("loading", !ctx_r3.disableActing && ɵngcc0.ɵɵpipeBind1(5, 9, ctx_r3.acting$))("disabled", !ctx_r3.disableActing && ɵngcc0.ɵɵpipeBind1(6, 11, ctx_r3.acting$));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(8, 13, ctx_r3.tc + "." + ctx_r3.confirmLabel), " ");
} }
const _c2 = ["closeButton"];
function DialogInnerComponent_div_1_sof_svg_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sof-svg-icon", 10);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("icon", ctx_r2.icon)("size", ctx_r2.sizeHeaderIcon);
} }
function DialogInnerComponent_div_1_sof_svg_icon_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "sof-svg-icon", 11);
} }
function DialogInnerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵtemplate(2, DialogInnerComponent_div_1_sof_svg_icon_2_Template, 1, 2, "sof-svg-icon", 6);
    ɵngcc0.ɵɵelementStart(3, "h1");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "button", 7, 8);
    ɵngcc0.ɵɵlistener("click", function DialogInnerComponent_div_1_Template_button_click_5_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.destroy.emit(); });
    ɵngcc0.ɵɵtemplate(7, DialogInnerComponent_div_1_sof_svg_icon_7_Template, 1, 0, "sof-svg-icon", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.icon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.headerLabel);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.hideDestroy);
} }
function InteractiveWarningDialogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelementStart(1, "sof-alert", 8);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "translate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r2 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", (error_r2 == null ? null : error_r2.translation) ? error_r2 == null ? null : error_r2.translation : ɵngcc0.ɵɵpipeBind2(3, 1, ctx_r0.tc + "." + (error_r2 == null ? null : error_r2.message), error_r2 == null ? null : error_r2.messageParams), " ");
} }
function InteractiveWarningDialogComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r3 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(error_r3);
} }
const _c3 = "[_nghost-%COMP%]{display:flex;width:100%}.button-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:.25rem}.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{margin-right:0}@media (max-width:575px){.button-wrapper[_ngcontent-%COMP%]{flex-direction:column;width:100%}.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-right:0;margin-bottom:.5rem}.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{margin-bottom:0}}";
class DialogConfigService {
    constructor(overlay) {
        this.overlay = overlay;
        this.positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        this.overlayConfig = {
            maxHeight: 'auto',
            height: 'auto',
            width: '600px',
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.positionStrategy
        };
    }
}
DialogConfigService.ɵfac = function DialogConfigService_Factory(t) { return new (t || DialogConfigService)(ɵngcc0.ɵɵinject(ɵngcc1.Overlay)); };
DialogConfigService.ɵprov = ɵɵdefineInjectable({ factory: function DialogConfigService_Factory() { return new DialogConfigService(ɵɵinject(Overlay)); }, token: DialogConfigService, providedIn: "root" });
DialogConfigService.ctorParameters = () => [
    { type: Overlay }
];

/**
 * This component is the inline template way of working with dialogs. This means it can be
 * consumed by the `sof-dialog` selector.
 * It has a placeholder for the body called `sof-dialog-body` and a placeholder
 * for the footer called `sof-dialog-footer`
 */
class DialogComponent {
    constructor(overlay, dialogConfigService) {
        this.overlay = overlay;
        this.dialogConfigService = dialogConfigService;
        /**
         * The size of the dialog.
         * Can be sm - md - lg - xl.
         * sm by default
         */
        this.size = 'sm';
        /**
         * The size of the dialog header icon.
         * 16 by default
         */
        this.sizeHeaderIcon = '16';
        /**
         * Output that is triggered when the close icon is clicked
         */
        this.destroy = new EventEmitter();
    }
    ngOnInit() {
        switch (this.size) {
            case 'sm':
                this.dialogConfigService.overlayConfig.width = '600px';
                break;
            case 'md':
                this.dialogConfigService.overlayConfig.width = '800px';
                break;
            case 'lg':
                this.dialogConfigService.overlayConfig.width = '1000px';
                break;
            case 'xl':
                this.dialogConfigService.overlayConfig.width = '1200px';
                break;
            default:
                this.dialogConfigService.overlayConfig.width = '600px';
        }
        this.overlayRef = this.overlay.create(this.dialogConfigService.overlayConfig);
    }
    ngAfterViewInit() {
        this.overlayRef.attach(this.portal);
    }
    ngOnDestroy() {
        this.overlayRef.detach();
        this.overlayRef.dispose();
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Overlay), ɵngcc0.ɵɵdirectiveInject(DialogConfigService)); };
DialogComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DialogComponent, selectors: [["sof-dialog"]], viewQuery: function DialogComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(CdkPortal, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.portal = _t.first);
    } }, inputs: { size: "size", sizeHeaderIcon: "sizeHeaderIcon", headerLabel: "headerLabel", icon: "icon", hideDestroy: "hideDestroy" }, outputs: { destroy: "destroy" }, ngContentSelectors: _c1, decls: 1, vars: 0, consts: [["cdkPortal", ""], [3, "icon", "sizeHeaderIcon", "headerLabel", "hideDestroy", "destroy"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵtemplate(0, DialogComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
    } }, directives: function () { return [ɵngcc2.CdkPortal, DialogInnerComponent]; }, styles: [""] });
DialogComponent.ctorParameters = () => [
    { type: Overlay },
    { type: DialogConfigService }
];
DialogComponent.propDecorators = {
    portal: [{ type: ViewChild, args: [CdkPortal,] }],
    headerLabel: [{ type: Input }],
    size: [{ type: Input }],
    sizeHeaderIcon: [{ type: Input }],
    icon: [{ type: Input }],
    hideDestroy: [{ type: Input }],
    destroy: [{ type: Output }]
};

class AcknowledgeDialogComponent {
    constructor() {
        this.acknowledge = new EventEmitter();
    }
}
AcknowledgeDialogComponent.ɵfac = function AcknowledgeDialogComponent_Factory(t) { return new (t || AcknowledgeDialogComponent)(); };
AcknowledgeDialogComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AcknowledgeDialogComponent, selectors: [["sof-acknowledge-dialog"]], inputs: { headerLabel: "headerLabel", acknowledgeLabel: "acknowledgeLabel", tc: "tc", bodyLabel: "bodyLabel", disableHeaderLabelTranslation: "disableHeaderLabelTranslation", disableBodyLabelTranslation: "disableBodyLabelTranslation" }, outputs: { acknowledge: "acknowledge" }, decls: 13, vars: 18, consts: [[3, "headerLabel", "destroy"], ["sof-dialog-body", ""], ["class", "mb-3", 4, "ngFor", "ngForOf"], ["sof-dialog-footer", "", 1, "button-wrapper"], ["sofButton", "", "sofFocus", "", 1, "btn", "btn-primary", "btn-min-width", "order-1", 3, "loading", "disabled", "click"], [1, "mb-3"], ["type", "danger"]], template: function AcknowledgeDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "sof-dialog-inner", 0);
        ɵngcc0.ɵɵlistener("destroy", function AcknowledgeDialogComponent_Template_sof_dialog_inner_destroy_0_listener() { return ctx.acknowledge.emit(); });
        ɵngcc0.ɵɵpipe(1, "translate");
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, AcknowledgeDialogComponent_div_3_Template, 4, 4, "div", 2);
        ɵngcc0.ɵɵpipe(4, "async");
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵpipe(6, "translate");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 3);
        ɵngcc0.ɵɵelementStart(8, "button", 4);
        ɵngcc0.ɵɵlistener("click", function AcknowledgeDialogComponent_Template_button_click_8_listener() { return ctx.acknowledge.emit(); });
        ɵngcc0.ɵɵpipe(9, "async");
        ɵngcc0.ɵɵpipe(10, "async");
        ɵngcc0.ɵɵtext(11);
        ɵngcc0.ɵɵpipe(12, "translate");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("headerLabel", ctx.disableHeaderLabelTranslation ? ctx.headerLabel : ɵngcc0.ɵɵpipeBind1(1, 6, ctx.tc + "." + ctx.headerLabel));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(4, 8, ctx.actingErrorMessages$));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.disableBodyLabelTranslation ? ctx.bodyLabel : ɵngcc0.ɵɵpipeBind1(6, 10, ctx.tc + "." + ctx.bodyLabel), " ");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("loading", ɵngcc0.ɵɵpipeBind1(9, 12, ctx.acting$))("disabled", ɵngcc0.ɵɵpipeBind1(10, 14, ctx.acting$));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(12, 16, ctx.tc + "." + ctx.acknowledgeLabel), " ");
    } }, directives: function () { return [DialogInnerComponent, ɵngcc3.NgForOf, ɵngcc4.ButtonDirectiveComponent, ɵngcc5.FocusDirective, ɵngcc6.AlertComponent]; }, pipes: function () { return [ɵngcc7.TranslatePipe, ɵngcc3.AsyncPipe]; }, styles: ["[_nghost-%COMP%]{display:flex;width:100%}.button-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;margin-top:1rem;margin-bottom:1rem}.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:.25rem}.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{margin-right:0}@media (max-width:575px){.button-wrapper[_ngcontent-%COMP%]{flex-direction:column;width:100%}.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:.5rem}.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{margin-bottom:0}}"] });
AcknowledgeDialogComponent.propDecorators = {
    headerLabel: [{ type: Input }],
    acknowledgeLabel: [{ type: Input }],
    tc: [{ type: Input }],
    bodyLabel: [{ type: Input }],
    disableHeaderLabelTranslation: [{ type: Input }],
    disableBodyLabelTranslation: [{ type: Input }],
    acknowledge: [{ type: Output }]
};
__decorate([
    Acting()
], AcknowledgeDialogComponent.prototype, "acting$", void 0);
__decorate([
    ActingErrorMessages()
], AcknowledgeDialogComponent.prototype, "actingErrorMessages$", void 0);

class ConfirmDialogComponent {
    constructor() {
        this.decline = new EventEmitter();
        this.confirm = new EventEmitter();
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(); };
ConfirmDialogComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ConfirmDialogComponent, selectors: [["sof-confirm-dialog"]], inputs: { headerLabel: "headerLabel", cancelLabel: "cancelLabel", confirmLabel: "confirmLabel", disableActing: "disableActing", tc: "tc", bodyLabel: "bodyLabel", primaryAction: "primaryAction", labelParams: "labelParams" }, outputs: { decline: "decline", confirm: "confirm" }, decls: 11, vars: 13, consts: [[3, "headerLabel", "destroy"], ["sof-dialog-body", ""], ["class", "mb-3", 4, "ngFor", "ngForOf"], ["sof-dialog-footer", "", 1, "button-wrapper"], [4, "ngIf", "ngIfElse"], ["otherAction", ""], [1, "mb-3"], ["type", "danger"], ["sofButton", "", "sofFocus", "", 1, "btn", "btn-primary", "btn-min-width", "order-1", 3, "loading", "disabled", "click"], ["sofButton", "", 1, "btn", "btn-outline-primary", "btn-min-width", "mr-2", "order-0", 3, "disabled", "click"], ["sofButton", "", "sofFocus", "", 1, "btn", "btn-primary", "btn-min-width", "order-1", 3, "disabled", "click"], ["sofButton", "", 1, "btn", "btn-outline-primary", "btn-min-width", "mr-2", "order-0", 3, "loading", "disabled", "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "sof-dialog-inner", 0);
        ɵngcc0.ɵɵlistener("destroy", function ConfirmDialogComponent_Template_sof_dialog_inner_destroy_0_listener() { return ctx.decline.emit(); });
        ɵngcc0.ɵɵpipe(1, "translate");
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, ConfirmDialogComponent_div_3_Template, 4, 4, "div", 2);
        ɵngcc0.ɵɵpipe(4, "async");
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵpipe(6, "translate");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 3);
        ɵngcc0.ɵɵtemplate(8, ConfirmDialogComponent_ng_container_8_Template, 10, 15, "ng-container", 4);
        ɵngcc0.ɵɵtemplate(9, ConfirmDialogComponent_ng_template_9_Template, 9, 15, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = ɵngcc0.ɵɵreference(10);
        ɵngcc0.ɵɵproperty("headerLabel", ɵngcc0.ɵɵpipeBind2(1, 5, ctx.tc + "." + ctx.headerLabel, ctx.labelParams));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(4, 8, ctx.actingErrorMessages$));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(6, 10, ctx.tc + "." + ctx.bodyLabel, ctx.labelParams), " ");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.primaryAction === "confirm")("ngIfElse", _r2);
    } }, directives: function () { return [DialogInnerComponent, ɵngcc3.NgForOf, ɵngcc3.NgIf, ɵngcc6.AlertComponent, ɵngcc4.ButtonDirectiveComponent, ɵngcc5.FocusDirective]; }, pipes: function () { return [ɵngcc7.TranslatePipe, ɵngcc3.AsyncPipe]; }, styles: [_c3] });
ConfirmDialogComponent.propDecorators = {
    headerLabel: [{ type: Input }],
    cancelLabel: [{ type: Input }],
    confirmLabel: [{ type: Input }],
    disableActing: [{ type: Input }],
    tc: [{ type: Input }],
    bodyLabel: [{ type: Input }],
    primaryAction: [{ type: Input }],
    labelParams: [{ type: Input }],
    decline: [{ type: Output }],
    confirm: [{ type: Output }]
};
__decorate([
    Acting()
], ConfirmDialogComponent.prototype, "acting$", void 0);
__decorate([
    ActingErrorMessages()
], ConfirmDialogComponent.prototype, "actingErrorMessages$", void 0);

let DialogInnerComponent = class DialogInnerComponent {
    constructor(documentRefService) {
        this.documentRefService = documentRefService;
        this.sizeHeaderIcon = '16';
        this.destroy = new EventEmitter();
    }
    ngOnInit() {
        fromEvent(this.documentRefService.nativeDocument, 'keydown')
            .pipe(filter((event) => event.key === 'Escape'), takeUntilDestroy(this))
            .subscribe(() => {
            if (!this.hideDestroy) {
                this.destroy.emit();
            }
        });
    }
    ngAfterViewInit() {
        // We don't want the close button focused when opening a dialog.
        // So we remove the focus from the close button after it was been focused by the cdkTrapFocusAutoCapture directive.
        // In order to guarantee the order in which these are executed the setTimeout is added.
        setTimeout(() => { var _a, _b; return (_b = (_a = this.closeButtonRef) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.blur(); }, 0);
    }
    ngOnDestroy() { }
};
DialogInnerComponent.ɵfac = function DialogInnerComponent_Factory(t) { return new (t || DialogInnerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc8.DocumentRefService)); };
DialogInnerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DialogInnerComponent, selectors: [["sof-dialog-inner"]], viewQuery: function DialogInnerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c2, 1);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.closeButtonRef = _t.first);
    } }, inputs: { sizeHeaderIcon: "sizeHeaderIcon", headerLabel: "headerLabel", hideDestroy: "hideDestroy", icon: "icon" }, outputs: { destroy: "destroy" }, ngContentSelectors: _c1, decls: 7, vars: 7, consts: [["cdkTrapFocus", "", "cdkTrapFocusAutoCapture", "", 1, "sof-dialog-inner-wrapper"], ["class", "sof-dialog-inner-wrapper-header", 4, "ngIf"], [1, "sof-dialog-inner-wrapper-body"], ["footer", ""], [1, "sof-dialog-inner-wrapper-header"], [1, "d-flex", "flex-row"], ["class", "d-flex mr-3 my-auto", 3, "icon", "size", 4, "ngIf"], [1, "btn", "btn-plain", 3, "click"], ["closeButton", ""], ["icon", "icon-cross", 4, "ngIf"], [1, "d-flex", "mr-3", "my-auto", 3, "icon", "size"], ["icon", "icon-cross"]], template: function DialogInnerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, DialogInnerComponent_div_1_Template, 8, 3, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", null, 3);
        ɵngcc0.ɵɵprojection(6, 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(5);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.headerLabel || !ctx.hideDestroy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("padding-top", !(ctx.headerLabel || !ctx.hideDestroy))("padding-bottom", (_r1 == null ? null : _r1.childNodes == null ? null : _r1.childNodes.length) === 0);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("sof-dialog-inner-wrapper-footer", (_r1 == null ? null : _r1.childNodes == null ? null : _r1.childNodes.length) > 0);
    } }, directives: [ɵngcc9.CdkTrapFocus, ɵngcc3.NgIf, ɵngcc10.SvgIconComponent], styles: ["[_nghost-%COMP%]{display:flex;width:100%}.sof-dialog-inner-wrapper[_ngcontent-%COMP%]{flex-direction:column;display:flex;width:100%;background:#fff;box-shadow:0 4px 4px hsla(0,0%,76.9%,.6)}.sof-dialog-inner-wrapper-header[_ngcontent-%COMP%]{padding:20px 20px 1rem;display:flex;justify-content:space-between;align-items:flex-start}.sof-dialog-inner-wrapper-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.sof-dialog-inner-wrapper-body[_ngcontent-%COMP%]{overflow-y:auto;flex:1;width:100%;padding:0 20px}.sof-dialog-inner-wrapper-body.padding-top[_ngcontent-%COMP%]{padding-top:20px}.sof-dialog-inner-wrapper-body.padding-bottom[_ngcontent-%COMP%]{padding-bottom:20px}.sof-dialog-inner-wrapper-footer[_ngcontent-%COMP%]{padding:1rem 20px 20px;display:flex;justify-content:flex-end;align-items:center}"] });
DialogInnerComponent.ctorParameters = () => [
    { type: DocumentRefService }
];
DialogInnerComponent.propDecorators = {
    headerLabel: [{ type: Input }],
    hideDestroy: [{ type: Input }],
    icon: [{ type: Input }],
    sizeHeaderIcon: [{ type: Input }],
    destroy: [{ type: Output }],
    closeButtonRef: [{ type: ViewChild, args: ['closeButton',] }]
};
DialogInnerComponent = __decorate([
    UntilDestroy()
], DialogInnerComponent);

class InteractiveWarningDialogComponent {
    constructor() {
        this.decline = new EventEmitter();
        this.confirm = new EventEmitter();
    }
}
InteractiveWarningDialogComponent.ɵfac = function InteractiveWarningDialogComponent_Factory(t) { return new (t || InteractiveWarningDialogComponent)(); };
InteractiveWarningDialogComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InteractiveWarningDialogComponent, selectors: [["sof-interactive-warning-dialog"]], inputs: { errors: "errors", tc: "tc", bodyLabel: "bodyLabel" }, outputs: { decline: "decline", confirm: "confirm" }, decls: 19, vars: 25, consts: [[3, "headerLabel", "destroy"], ["sof-dialog-body", ""], ["class", "mb-3", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["sof-dialog-footer", "", 1, "d-flex", "justify-content-end", "align-items-center"], ["sofButton", "", "sofFocus", "", 1, "btn", "btn-primary", "btn-min-width", "order-1", 3, "loading", "disabled", "click"], ["sofButton", "", 1, "btn", "btn-outline-primary", "btn-min-width", "mr-2", "order-0", 3, "disabled", "click"], [1, "mb-3"], ["type", "danger"]], template: function InteractiveWarningDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "sof-dialog-inner", 0);
        ɵngcc0.ɵɵlistener("destroy", function InteractiveWarningDialogComponent_Template_sof_dialog_inner_destroy_0_listener() { return ctx.decline.emit(); });
        ɵngcc0.ɵɵpipe(1, "translate");
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, InteractiveWarningDialogComponent_div_3_Template, 4, 4, "div", 2);
        ɵngcc0.ɵɵpipe(4, "async");
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵpipe(6, "translate");
        ɵngcc0.ɵɵelementStart(7, "ul");
        ɵngcc0.ɵɵtemplate(8, InteractiveWarningDialogComponent_li_8_Template, 2, 1, "li", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 4);
        ɵngcc0.ɵɵelementStart(10, "button", 5);
        ɵngcc0.ɵɵlistener("click", function InteractiveWarningDialogComponent_Template_button_click_10_listener() { return ctx.confirm.emit(); });
        ɵngcc0.ɵɵpipe(11, "async");
        ɵngcc0.ɵɵpipe(12, "async");
        ɵngcc0.ɵɵtext(13);
        ɵngcc0.ɵɵpipe(14, "translate");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(15, "button", 6);
        ɵngcc0.ɵɵlistener("click", function InteractiveWarningDialogComponent_Template_button_click_15_listener() { return ctx.decline.emit(); });
        ɵngcc0.ɵɵpipe(16, "async");
        ɵngcc0.ɵɵtext(17);
        ɵngcc0.ɵɵpipe(18, "translate");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("headerLabel", ɵngcc0.ɵɵpipeBind1(1, 9, ctx.tc + ".INTERACTIVE-WARNING-HEADER"));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(4, 11, ctx.actingErrorMessages$));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(6, 13, ctx.tc + ".INTERACTIVE-WARNING-BODY"), " ");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.errors);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("loading", ɵngcc0.ɵɵpipeBind1(11, 15, ctx.acting$))("disabled", ɵngcc0.ɵɵpipeBind1(12, 17, ctx.acting$));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(14, 19, ctx.tc + ".CONTINUE"), " ");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("disabled", ɵngcc0.ɵɵpipeBind1(16, 21, ctx.acting$));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind1(18, 23, ctx.tc + ".CANCEL"), " ");
    } }, directives: [DialogInnerComponent, ɵngcc3.NgForOf, ɵngcc4.ButtonDirectiveComponent, ɵngcc5.FocusDirective, ɵngcc6.AlertComponent], pipes: [ɵngcc7.TranslatePipe, ɵngcc3.AsyncPipe], styles: [_c3] });
InteractiveWarningDialogComponent.propDecorators = {
    errors: [{ type: Input }],
    tc: [{ type: Input }],
    bodyLabel: [{ type: Input }],
    decline: [{ type: Output }],
    confirm: [{ type: Output }]
};
__decorate([
    Acting()
], InteractiveWarningDialogComponent.prototype, "acting$", void 0);
__decorate([
    ActingErrorMessages()
], InteractiveWarningDialogComponent.prototype, "actingErrorMessages$", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DialogConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.Overlay }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DialogComponent, [{
        type: Component,
        args: [{
                selector: 'sof-dialog',
                template: `
    <ng-template cdkPortal>
      <sof-dialog-inner
        [icon]="icon"
        [sizeHeaderIcon]="sizeHeaderIcon"
        (destroy)="destroy.emit()"
        [headerLabel]="headerLabel"
        [hideDestroy]="hideDestroy"
      >
        <ng-content sof-dialog-body select="[sof-dialog-body]"></ng-content>
        <ng-content sof-dialog-footer select="[sof-dialog-footer]"></ng-content>
      </sof-dialog-inner>
    </ng-template>
  `,
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc1.Overlay }, { type: DialogConfigService }]; }, { size: [{
            type: Input
        }], sizeHeaderIcon: [{
            type: Input
        }], destroy: [{
            type: Output
        }], portal: [{
            type: ViewChild,
            args: [CdkPortal]
        }], headerLabel: [{
            type: Input
        }], icon: [{
            type: Input
        }], hideDestroy: [{
            type: Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AcknowledgeDialogComponent, [{
        type: Component,
        args: [{
                selector: 'sof-acknowledge-dialog',
                template: `
    <sof-dialog-inner
      (destroy)="acknowledge.emit()"
      [headerLabel]="
        disableHeaderLabelTranslation
          ? headerLabel
          : (tc + '.' + headerLabel | translate)
      "
    >
      <div sof-dialog-body>
        <div *ngFor="let error of actingErrorMessages$ | async" class="mb-3">
          <sof-alert type="danger">
            {{
              error?.translation
                ? error?.translation
                : (tc + '.' + error?.message | translate: error?.messageParams)
            }}
          </sof-alert>
        </div>
        {{
          disableBodyLabelTranslation
            ? bodyLabel
            : (tc + '.' + bodyLabel | translate)
        }}
      </div>
      <div sof-dialog-footer class="button-wrapper">
        <button
          sofButton
          sofFocus
          class="btn btn-primary btn-min-width order-1"
          [loading]="acting$ | async"
          [disabled]="acting$ | async"
          (click)="acknowledge.emit()"
        >
          {{ tc + '.' + acknowledgeLabel | translate }}
        </button>
      </div>
    </sof-dialog-inner>
  `,
                styles: [":host{display:flex;width:100%}.button-wrapper{display:flex;justify-content:flex-end;align-items:center;margin-top:1rem;margin-bottom:1rem}.button-wrapper button{margin-right:.25rem}.button-wrapper button:first-of-type{margin-right:0}@media (max-width:575px){.button-wrapper{flex-direction:column;width:100%}.button-wrapper button{width:100%;margin-bottom:.5rem}.button-wrapper button:first-of-type{margin-bottom:0}}"]
            }]
    }], function () { return []; }, { acknowledge: [{
            type: Output
        }], headerLabel: [{
            type: Input
        }], acknowledgeLabel: [{
            type: Input
        }], tc: [{
            type: Input
        }], bodyLabel: [{
            type: Input
        }], disableHeaderLabelTranslation: [{
            type: Input
        }], disableBodyLabelTranslation: [{
            type: Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ConfirmDialogComponent, [{
        type: Component,
        args: [{
                selector: 'sof-confirm-dialog',
                template: `
    <sof-dialog-inner
      (destroy)="decline.emit()"
      [headerLabel]="tc + '.' + headerLabel | translate: labelParams"
    >
      <div sof-dialog-body>
        <div *ngFor="let error of actingErrorMessages$ | async" class="mb-3">
          <sof-alert type="danger">
            {{
              error?.translation
                ? error?.translation
                : (tc + '.' + error?.message | translate: error?.messageParams)
            }}
          </sof-alert>
        </div>
        {{ tc + '.' + bodyLabel | translate: labelParams }}
      </div>
      <div sof-dialog-footer class="button-wrapper">
        <ng-container *ngIf="primaryAction === 'confirm'; else otherAction">
          <button
            sofButton
            sofFocus
            class="btn btn-primary btn-min-width order-1"
            (click)="confirm.emit()"
            [loading]="!disableActing && (acting$ | async)"
            [disabled]="!disableActing && (acting$ | async)"
          >
            {{ tc + '.' + confirmLabel | translate }}
          </button>
          <button
            sofButton
            class="btn btn-outline-primary btn-min-width mr-2 order-0"
            (click)="decline.emit()"
            [disabled]="!disableActing && (acting$ | async)"
          >
            {{ tc + '.' + cancelLabel | translate }}
          </button>
        </ng-container>
        <ng-template #otherAction>
          <button
            sofButton
            sofFocus
            class="btn btn-primary btn-min-width order-1"
            (click)="decline.emit()"
            [disabled]="acting$ | async"
          >
            {{ tc + '.' + cancelLabel | translate }}
          </button>
          <button
            sofButton
            class="btn btn-outline-primary btn-min-width mr-2 order-0"
            (click)="confirm.emit()"
            [loading]="!disableActing && (acting$ | async)"
            [disabled]="!disableActing && (acting$ | async)"
          >
            {{ tc + '.' + confirmLabel | translate }}
          </button>
        </ng-template>
      </div>
    </sof-dialog-inner>
  `,
                styles: [":host{display:flex;width:100%}.button-wrapper{display:flex;justify-content:flex-end;align-items:center}.button-wrapper button{margin-right:.25rem}.button-wrapper button:first-of-type{margin-right:0}@media (max-width:575px){.button-wrapper{flex-direction:column;width:100%}.button-wrapper button{width:100%;margin-right:0;margin-bottom:.5rem}.button-wrapper button:first-of-type{margin-bottom:0}}"]
            }]
    }], function () { return []; }, { decline: [{
            type: Output
        }], confirm: [{
            type: Output
        }], headerLabel: [{
            type: Input
        }], cancelLabel: [{
            type: Input
        }], confirmLabel: [{
            type: Input
        }], disableActing: [{
            type: Input
        }], tc: [{
            type: Input
        }], bodyLabel: [{
            type: Input
        }], primaryAction: [{
            type: Input
        }], labelParams: [{
            type: Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DialogInnerComponent, [{
        type: Component,
        args: [{
                selector: 'sof-dialog-inner',
                template: `
    <div class="sof-dialog-inner-wrapper" cdkTrapFocus cdkTrapFocusAutoCapture>
      <div
        class="sof-dialog-inner-wrapper-header"
        *ngIf="headerLabel || !hideDestroy"
      >
        <div class="d-flex flex-row">
          <sof-svg-icon
            [icon]="icon"
            [size]="sizeHeaderIcon"
            *ngIf="icon"
            class="d-flex mr-3 my-auto"
          ></sof-svg-icon>
          <h1>{{ headerLabel }}</h1>
        </div>
        <button class="btn btn-plain" (click)="destroy.emit()" #closeButton>
          <sof-svg-icon *ngIf="!hideDestroy" icon="icon-cross"></sof-svg-icon>
        </button>
      </div>
      <div
        class="sof-dialog-inner-wrapper-body"
        [class.padding-top]="!(headerLabel || !hideDestroy)"
        [class.padding-bottom]="footer?.childNodes?.length === 0"
      >
        <ng-content select="[sof-dialog-body]"></ng-content>
      </div>
      <div
        [class.sof-dialog-inner-wrapper-footer]="footer?.childNodes?.length > 0"
        #footer
      >
        <ng-content select="[sof-dialog-footer]"></ng-content>
      </div>
    </div>
  `,
                styles: [":host{display:flex;width:100%}.sof-dialog-inner-wrapper{flex-direction:column;display:flex;width:100%;background:#fff;box-shadow:0 4px 4px hsla(0,0%,76.9%,.6)}.sof-dialog-inner-wrapper-header{padding:20px 20px 1rem;display:flex;justify-content:space-between;align-items:flex-start}.sof-dialog-inner-wrapper-header h2{margin:0}.sof-dialog-inner-wrapper-body{overflow-y:auto;flex:1;width:100%;padding:0 20px}.sof-dialog-inner-wrapper-body.padding-top{padding-top:20px}.sof-dialog-inner-wrapper-body.padding-bottom{padding-bottom:20px}.sof-dialog-inner-wrapper-footer{padding:1rem 20px 20px;display:flex;justify-content:flex-end;align-items:center}"]
            }]
    }], function () { return [{ type: ɵngcc8.DocumentRefService }]; }, { sizeHeaderIcon: [{
            type: Input
        }], destroy: [{
            type: Output
        }], headerLabel: [{
            type: Input
        }], hideDestroy: [{
            type: Input
        }], icon: [{
            type: Input
        }], closeButtonRef: [{
            type: ViewChild,
            args: ['closeButton']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InteractiveWarningDialogComponent, [{
        type: Component,
        args: [{
                selector: 'sof-interactive-warning-dialog',
                template: `
    <sof-dialog-inner
      (destroy)="decline.emit()"
      [headerLabel]="tc + '.INTERACTIVE-WARNING-HEADER' | translate"
    >
      <div sof-dialog-body>
        <div class="mb-3" *ngFor="let error of actingErrorMessages$ | async">
          <sof-alert type="danger">
            {{
              error?.translation
                ? error?.translation
                : (tc + '.' + error?.message | translate: error?.messageParams)
            }}
          </sof-alert>
        </div>
        {{ tc + '.INTERACTIVE-WARNING-BODY' | translate }}
        <ul>
          <li *ngFor="let error of errors">{{ error }}</li>
        </ul>
      </div>
      <div
        sof-dialog-footer
        class="d-flex justify-content-end align-items-center"
      >
        <button
          sofButton
          sofFocus
          class="btn btn-primary btn-min-width order-1"
          (click)="confirm.emit()"
          [loading]="acting$ | async"
          [disabled]="acting$ | async"
        >
          {{ tc + '.CONTINUE' | translate }}
        </button>
        <button
          sofButton
          class="btn btn-outline-primary btn-min-width mr-2 order-0"
          (click)="decline.emit()"
          [disabled]="acting$ | async"
        >
          {{ tc + '.CANCEL' | translate }}
        </button>
      </div>
    </sof-dialog-inner>
  `,
                styles: [":host{display:flex;width:100%}.button-wrapper{display:flex;justify-content:flex-end;align-items:center}.button-wrapper button{margin-right:.25rem}.button-wrapper button:first-of-type{margin-right:0}@media (max-width:575px){.button-wrapper{flex-direction:column;width:100%}.button-wrapper button{width:100%;margin-right:0;margin-bottom:.5rem}.button-wrapper button:first-of-type{margin-bottom:0}}"]
            }]
    }], function () { return []; }, { decline: [{
            type: Output
        }], confirm: [{
            type: Output
        }], errors: [{
            type: Input
        }], tc: [{
            type: Input
        }], bodyLabel: [{
            type: Input
        }] }); })();

// providedIn: root, can't be used as the entryComponents registered inside the dialogService might be inside a lazy loaded module
// this has consequence that the DialogService will never be able to find a ConfirmDialogComponent as they live in a different injector,
// the solution is to provide the service inside the DialogService
// NOTE: When you make use of DialogService don't forget to import DialogModule in your *.module.ts file
class DialogService {
    constructor(injector, overlay, dialogConfigService) {
        this.injector = injector;
        this.overlay = overlay;
        this.dialogConfigService = dialogConfigService;
    }
    handleInteractiveFlow(initial$, postApproval$, tc) {
        const initialRequest$ = initial$.pipe(catchError(error => of(error)), share());
        const intialResponse$ = initialRequest$.pipe(filter(v => !(v instanceof HttpErrorResponse)));
        const interactiveApprovalResponse$ = initialRequest$.pipe(filter(error => {
            var _a;
            return error instanceof HttpErrorResponse && ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.isInteractiveWarning);
        }), switchMap(error => {
            const modal = this.openInteractiveWarning(tc, error);
            return modal.confirm$.pipe(switchMap(() => postApproval$), finalize(() => modal.destroy()));
        }));
        return merge(intialResponse$, interactiveApprovalResponse$);
    }
    openInteractiveWarning(tc, error) {
        var _a, _b, _c, _d;
        const containerPortal = new ComponentPortal(InteractiveWarningDialogComponent, null, this.injector);
        const overlayRef = this.overlay.create(this.dialogConfigService.overlayConfig);
        const componentRef = overlayRef.attach(containerPortal);
        componentRef.instance.tc = tc;
        componentRef.instance.errors = ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) ? [(_c = (_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.translation]
            : (_d = error === null || error === void 0 ? void 0 : error.error) === null || _d === void 0 ? void 0 : _d.messages.map(v => v === null || v === void 0 ? void 0 : v.translation);
        componentRef.instance.decline.subscribe(() => {
            overlayRef.detach();
            overlayRef.dispose();
        });
        return {
            confirm$: componentRef.instance.confirm.asObservable(),
            decline$: componentRef.instance.decline.asObservable(),
            destroy: () => {
                overlayRef.detach();
                overlayRef.dispose();
            }
        };
    }
    openConfirmModal(tc, headerLabel, bodyLabel, cancelLabel, confirmLabel, primaryAction = 'confirm', labelParams = {}, disableActing = false) {
        const containerPortal = new ComponentPortal(ConfirmDialogComponent, null, this.injector);
        const overlayRef = this.overlay.create(this.dialogConfigService.overlayConfig);
        const componentRef = overlayRef.attach(containerPortal);
        componentRef.instance.tc = tc;
        componentRef.instance.headerLabel = headerLabel;
        componentRef.instance.bodyLabel = bodyLabel;
        componentRef.instance.cancelLabel = cancelLabel;
        componentRef.instance.confirmLabel = confirmLabel;
        componentRef.instance.primaryAction = primaryAction;
        componentRef.instance.labelParams = labelParams;
        componentRef.instance.disableActing = disableActing;
        componentRef.instance.decline.subscribe(() => {
            overlayRef.detach();
            overlayRef.dispose();
        });
        return {
            confirm$: componentRef.instance.confirm.asObservable(),
            decline$: componentRef.instance.decline.asObservable(),
            destroy: () => {
                overlayRef.detach();
                overlayRef.dispose();
            }
        };
    }
    openAcknowledgeModal(tc, headerLabel, bodyLabel, acknowledgeLabel, disableHeaderLabelTranslation = false, disableBodyLabelTranslation = false) {
        const containerPortal = new ComponentPortal(AcknowledgeDialogComponent, null, this.injector);
        const overlayRef = this.overlay.create(this.dialogConfigService.overlayConfig);
        const componentRef = overlayRef.attach(containerPortal);
        componentRef.instance.tc = tc;
        componentRef.instance.headerLabel = headerLabel;
        componentRef.instance.bodyLabel = bodyLabel;
        componentRef.instance.disableHeaderLabelTranslation = disableHeaderLabelTranslation;
        componentRef.instance.disableBodyLabelTranslation = disableBodyLabelTranslation;
        componentRef.instance.acknowledgeLabel = acknowledgeLabel;
        componentRef.instance.acknowledge.subscribe(() => {
            overlayRef.detach();
            overlayRef.dispose();
        });
        return {
            acknowledge$: componentRef.instance.acknowledge.asObservable(),
            destroy: () => {
                overlayRef.detach();
                overlayRef.dispose();
            }
        };
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc1.Overlay), ɵngcc0.ɵɵinject(DialogConfigService)); };
DialogService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DialogService, factory: DialogService.ɵfac });
DialogService.ctorParameters = () => [
    { type: Injector },
    { type: Overlay },
    { type: DialogConfigService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DialogService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc0.Injector }, { type: ɵngcc1.Overlay }, { type: DialogConfigService }]; }, null); })();

class DialogModule {
}
DialogModule.ɵfac = function DialogModule_Factory(t) { return new (t || DialogModule)(); };
DialogModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DialogModule });
DialogModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ providers: [DialogService], imports: [[
            CommonModule,
            PortalModule,
            OverlayModule,
            SvgIconModule,
            TranslateModule,
            ButtonModule,
            AlertModule,
            A11yModule,
            FocusModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DialogModule, { declarations: function () { return [DialogComponent, DialogInnerComponent, ConfirmDialogComponent, AcknowledgeDialogComponent, InteractiveWarningDialogComponent]; }, imports: function () { return [CommonModule,
        PortalModule,
        OverlayModule,
        SvgIconModule,
        TranslateModule,
        ButtonModule,
        AlertModule,
        A11yModule,
        FocusModule]; }, exports: function () { return [DialogComponent, DialogInnerComponent, ConfirmDialogComponent, AcknowledgeDialogComponent, InteractiveWarningDialogComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DialogModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    DialogComponent,
                    DialogInnerComponent,
                    ConfirmDialogComponent,
                    AcknowledgeDialogComponent,
                    InteractiveWarningDialogComponent
                ],
                exports: [
                    DialogComponent,
                    DialogInnerComponent,
                    ConfirmDialogComponent,
                    AcknowledgeDialogComponent,
                    InteractiveWarningDialogComponent
                ],
                imports: [
                    CommonModule,
                    PortalModule,
                    OverlayModule,
                    SvgIconModule,
                    TranslateModule,
                    ButtonModule,
                    AlertModule,
                    A11yModule,
                    FocusModule
                ],
                providers: [DialogService]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AcknowledgeDialogComponent, ConfirmDialogComponent, DialogComponent, DialogConfigService, DialogInnerComponent, DialogModule, DialogService, InteractiveWarningDialogComponent };

//# sourceMappingURL=sofico-framework-ui-kit-components-dialog.js.map