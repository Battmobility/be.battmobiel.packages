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
DialogConfigService.ɵprov = ɵɵdefineInjectable({ factory: function DialogConfigService_Factory() { return new DialogConfigService(ɵɵinject(Overlay)); }, token: DialogConfigService, providedIn: "root" });
DialogConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
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
DialogComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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
AcknowledgeDialogComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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
ConfirmDialogComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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
DialogInnerComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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
InteractiveWarningDialogComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
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
DialogService.decorators = [
    { type: Injectable }
];
DialogService.ctorParameters = () => [
    { type: Injector },
    { type: Overlay },
    { type: DialogConfigService }
];

class DialogModule {
}
DialogModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { AcknowledgeDialogComponent, ConfirmDialogComponent, DialogComponent, DialogConfigService, DialogInnerComponent, DialogModule, DialogService, InteractiveWarningDialogComponent };
//# sourceMappingURL=sofico-framework-ui-kit-components-dialog.js.map
