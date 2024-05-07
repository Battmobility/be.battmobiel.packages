import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { merge, of } from 'rxjs';
import { catchError, filter, finalize, share, switchMap } from 'rxjs/operators';
import { AcknowledgeDialogComponent } from '../acknowledge-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog.component';
import { InteractiveWarningDialogComponent } from '../interactive-warning-dialog.component';
import { DialogConfigService } from './dialog-config.service';
// providedIn: root, can't be used as the entryComponents registered inside the dialogService might be inside a lazy loaded module
// this has consequence that the DialogService will never be able to find a ConfirmDialogComponent as they live in a different injector,
// the solution is to provide the service inside the DialogService
// NOTE: When you make use of DialogService don't forget to import DialogModule in your *.module.ts file
export class DialogService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2RpYWxvZy9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsa0lBQWtJO0FBQ2xJLHdJQUF3STtBQUN4SSxrRUFBa0U7QUFFbEUsd0dBQXdHO0FBRXhHLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQ1UsUUFBa0IsRUFDbEIsT0FBZ0IsRUFDaEIsbUJBQXdDO1FBRnhDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQy9DLENBQUM7SUFF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QUNwQixVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPO1lBQ0wsWUFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtZQUM5RCxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNaLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEIsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBN0pGLFVBQVU7OztZQWJVLFFBQVE7WUFIcEIsT0FBTztZQVNQLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1lcmdlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmlsdGVyLCBmaW5hbGl6ZSwgc2hhcmUsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFja25vd2xlZGdlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vYWNrbm93bGVkZ2UtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEludGVyYWN0aXZlV2FybmluZ0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyYWN0aXZlLXdhcm5pbmctZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnLnNlcnZpY2UnO1xuXG4vLyBwcm92aWRlZEluOiByb290LCBjYW4ndCBiZSB1c2VkIGFzIHRoZSBlbnRyeUNvbXBvbmVudHMgcmVnaXN0ZXJlZCBpbnNpZGUgdGhlIGRpYWxvZ1NlcnZpY2UgbWlnaHQgYmUgaW5zaWRlIGEgbGF6eSBsb2FkZWQgbW9kdWxlXG4vLyB0aGlzIGhhcyBjb25zZXF1ZW5jZSB0aGF0IHRoZSBEaWFsb2dTZXJ2aWNlIHdpbGwgbmV2ZXIgYmUgYWJsZSB0byBmaW5kIGEgQ29uZmlybURpYWxvZ0NvbXBvbmVudCBhcyB0aGV5IGxpdmUgaW4gYSBkaWZmZXJlbnQgaW5qZWN0b3IsXG4vLyB0aGUgc29sdXRpb24gaXMgdG8gcHJvdmlkZSB0aGUgc2VydmljZSBpbnNpZGUgdGhlIERpYWxvZ1NlcnZpY2VcblxuLy8gTk9URTogV2hlbiB5b3UgbWFrZSB1c2Ugb2YgRGlhbG9nU2VydmljZSBkb24ndCBmb3JnZXQgdG8gaW1wb3J0IERpYWxvZ01vZHVsZSBpbiB5b3VyICoubW9kdWxlLnRzIGZpbGVcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgZGlhbG9nQ29uZmlnU2VydmljZTogRGlhbG9nQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgaGFuZGxlSW50ZXJhY3RpdmVGbG93PFQ+KFxuICAgIGluaXRpYWwkOiBPYnNlcnZhYmxlPFQ+LFxuICAgIHBvc3RBcHByb3ZhbCQ6IE9ic2VydmFibGU8VD4sXG4gICAgdGM6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCBpbml0aWFsUmVxdWVzdCQgPSBpbml0aWFsJC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihlcnJvcikpLFxuICAgICAgc2hhcmUoKVxuICAgICk7XG4gICAgY29uc3QgaW50aWFsUmVzcG9uc2UkID0gaW5pdGlhbFJlcXVlc3QkLnBpcGUoXG4gICAgICBmaWx0ZXIodiA9PiAhKHYgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkpXG4gICAgKTtcbiAgICBjb25zdCBpbnRlcmFjdGl2ZUFwcHJvdmFsUmVzcG9uc2UkID0gaW5pdGlhbFJlcXVlc3QkLnBpcGUoXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIGVycm9yID0+XG4gICAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSAmJlxuICAgICAgICAgIGVycm9yPy5lcnJvcj8uaXNJbnRlcmFjdGl2ZVdhcm5pbmdcbiAgICAgICksXG4gICAgICBzd2l0Y2hNYXAoZXJyb3IgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMub3BlbkludGVyYWN0aXZlV2FybmluZyh0YywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbW9kYWwuY29uZmlybSQucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gcG9zdEFwcHJvdmFsJCksXG4gICAgICAgICAgZmluYWxpemUoKCkgPT4gbW9kYWwuZGVzdHJveSgpKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIG1lcmdlKGludGlhbFJlc3BvbnNlJCwgaW50ZXJhY3RpdmVBcHByb3ZhbFJlc3BvbnNlJCk7XG4gIH1cblxuICBvcGVuSW50ZXJhY3RpdmVXYXJuaW5nKFxuICAgIHRjOiBzdHJpbmcsXG4gICAgZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlXG4gICk6IHtcbiAgICBjb25maXJtJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGRlY2xpbmUkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgZGVzdHJveTogKCkgPT4gYW55O1xuICB9IHtcbiAgICBjb25zdCBjb250YWluZXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKFxuICAgICAgSW50ZXJhY3RpdmVXYXJuaW5nRGlhbG9nQ29tcG9uZW50LFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXMuaW5qZWN0b3JcbiAgICApO1xuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKFxuICAgICAgdGhpcy5kaWFsb2dDb25maWdTZXJ2aWNlLm92ZXJsYXlDb25maWdcbiAgICApO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IG92ZXJsYXlSZWYuYXR0YWNoKGNvbnRhaW5lclBvcnRhbCk7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnRjID0gdGM7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmVycm9ycyA9IGVycm9yPy5lcnJvcj8ubWVzc2FnZVxuICAgICAgPyBbZXJyb3I/LmVycm9yPy5tZXNzYWdlPy50cmFuc2xhdGlvbl1cbiAgICAgIDogZXJyb3I/LmVycm9yPy5tZXNzYWdlcy5tYXAodiA9PiB2Py50cmFuc2xhdGlvbik7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmRlY2xpbmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIG92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICBvdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlybSQ6IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb25maXJtLmFzT2JzZXJ2YWJsZSgpLFxuICAgICAgZGVjbGluZSQ6IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kZWNsaW5lLmFzT2JzZXJ2YWJsZSgpLFxuICAgICAgZGVzdHJveTogKCkgPT4ge1xuICAgICAgICBvdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICBvdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgb3BlbkNvbmZpcm1Nb2RhbChcbiAgICB0Yzogc3RyaW5nLFxuICAgIGhlYWRlckxhYmVsOiBzdHJpbmcsXG4gICAgYm9keUxhYmVsOiBzdHJpbmcsXG4gICAgY2FuY2VsTGFiZWw6IHN0cmluZyxcbiAgICBjb25maXJtTGFiZWw6IHN0cmluZyxcbiAgICBwcmltYXJ5QWN0aW9uOiAnY29uZmlybScgfCAnY2FuY2VsJyA9ICdjb25maXJtJyxcbiAgICBsYWJlbFBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9LFxuICAgIGRpc2FibGVBY3RpbmcgPSBmYWxzZVxuICApOiB7XG4gICAgY29uZmlybSQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBkZWNsaW5lJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGRlc3Ryb3k6ICgpID0+IGFueTtcbiAgfSB7XG4gICAgY29uc3QgY29udGFpbmVyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChcbiAgICAgIENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5pbmplY3RvclxuICAgICk7XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoXG4gICAgICB0aGlzLmRpYWxvZ0NvbmZpZ1NlcnZpY2Uub3ZlcmxheUNvbmZpZ1xuICAgICk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gb3ZlcmxheVJlZi5hdHRhY2goY29udGFpbmVyUG9ydGFsKTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UudGMgPSB0YztcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuaGVhZGVyTGFiZWwgPSBoZWFkZXJMYWJlbDtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuYm9keUxhYmVsID0gYm9keUxhYmVsO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jYW5jZWxMYWJlbCA9IGNhbmNlbExhYmVsO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb25maXJtTGFiZWwgPSBjb25maXJtTGFiZWw7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnByaW1hcnlBY3Rpb24gPSBwcmltYXJ5QWN0aW9uO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5sYWJlbFBhcmFtcyA9IGxhYmVsUGFyYW1zO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kaXNhYmxlQWN0aW5nID0gZGlzYWJsZUFjdGluZztcblxuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kZWNsaW5lLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBvdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpcm0kOiBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29uZmlybS5hc09ic2VydmFibGUoKSxcbiAgICAgIGRlY2xpbmUkOiBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGVjbGluZS5hc09ic2VydmFibGUoKSxcbiAgICAgIGRlc3Ryb3k6ICgpID0+IHtcbiAgICAgICAgb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgICAgb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIG9wZW5BY2tub3dsZWRnZU1vZGFsKFxuICAgIHRjOiBzdHJpbmcsXG4gICAgaGVhZGVyTGFiZWw6IHN0cmluZyxcbiAgICBib2R5TGFiZWw6IHN0cmluZyxcbiAgICBhY2tub3dsZWRnZUxhYmVsOiBzdHJpbmcsXG4gICAgZGlzYWJsZUhlYWRlckxhYmVsVHJhbnNsYXRpb24gPSBmYWxzZSxcbiAgICBkaXNhYmxlQm9keUxhYmVsVHJhbnNsYXRpb24gPSBmYWxzZVxuICApOiB7XG4gICAgYWNrbm93bGVkZ2UkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgZGVzdHJveTogKCkgPT4gYW55O1xuICB9IHtcbiAgICBjb25zdCBjb250YWluZXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKFxuICAgICAgQWNrbm93bGVkZ2VEaWFsb2dDb21wb25lbnQsXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5pbmplY3RvclxuICAgICk7XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoXG4gICAgICB0aGlzLmRpYWxvZ0NvbmZpZ1NlcnZpY2Uub3ZlcmxheUNvbmZpZ1xuICAgICk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gb3ZlcmxheVJlZi5hdHRhY2goY29udGFpbmVyUG9ydGFsKTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UudGMgPSB0YztcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuaGVhZGVyTGFiZWwgPSBoZWFkZXJMYWJlbDtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuYm9keUxhYmVsID0gYm9keUxhYmVsO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kaXNhYmxlSGVhZGVyTGFiZWxUcmFuc2xhdGlvbiA9IGRpc2FibGVIZWFkZXJMYWJlbFRyYW5zbGF0aW9uO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kaXNhYmxlQm9keUxhYmVsVHJhbnNsYXRpb24gPSBkaXNhYmxlQm9keUxhYmVsVHJhbnNsYXRpb247XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmFja25vd2xlZGdlTGFiZWwgPSBhY2tub3dsZWRnZUxhYmVsO1xuXG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmFja25vd2xlZGdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBvdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFja25vd2xlZGdlJDogY29tcG9uZW50UmVmLmluc3RhbmNlLmFja25vd2xlZGdlLmFzT2JzZXJ2YWJsZSgpLFxuICAgICAgZGVzdHJveTogKCkgPT4ge1xuICAgICAgICBvdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICBvdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=