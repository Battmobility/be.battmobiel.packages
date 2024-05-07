import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DocumentRefService } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
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
export { DialogInnerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy1pbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztJQThDM0Isb0JBQW9CLFNBQXBCLG9CQUFvQjtJQWlCL0IsWUFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFiakQsbUJBQWMsR0FRWixJQUFJLENBQUM7UUFFTixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUdzQixDQUFDO0lBRTlELFFBQVE7UUFDTixTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7YUFDekQsSUFBSSxDQUNILE1BQU0sQ0FBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLEVBQ3hELGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUN2QjthQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGVBQWU7UUFDYixnRUFBZ0U7UUFDaEUsbUhBQW1IO1FBQ25ILHVGQUF1RjtRQUN2RixVQUFVLENBQUMsR0FBRyxFQUFFLGtDQUFDLElBQUksQ0FBQyxjQUFjLDBDQUFFLGFBQWEsMENBQUUsSUFBSSxLQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELFdBQVcsS0FBVSxDQUFDO0NBQ3ZCLENBQUE7O1lBbkZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlDVDs7YUFFRjs7O1lBM0NRLGtCQUFrQjs7OzBCQWtEeEIsS0FBSzswQkFDTCxLQUFLO21CQUNMLEtBQUs7NkJBQ0wsS0FBSztzQkFVTCxNQUFNOzZCQUNOLFNBQVMsU0FBQyxhQUFhOztBQWZiLG9CQUFvQjtJQTVDaEMsWUFBWSxFQUFFO0dBNENGLG9CQUFvQixDQXdDaEM7U0F4Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb2N1bWVudFJlZlNlcnZpY2UgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91dGlscyc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95LCBVbnRpbERlc3Ryb3kgfSBmcm9tICduZ3gtcmVhY3RpdmV0b29sa2l0JztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1kaWFsb2ctaW5uZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJzb2YtZGlhbG9nLWlubmVyLXdyYXBwZXJcIiBjZGtUcmFwRm9jdXMgY2RrVHJhcEZvY3VzQXV0b0NhcHR1cmU+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwic29mLWRpYWxvZy1pbm5lci13cmFwcGVyLWhlYWRlclwiXG4gICAgICAgICpuZ0lmPVwiaGVhZGVyTGFiZWwgfHwgIWhpZGVEZXN0cm95XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxzb2Ytc3ZnLWljb25cbiAgICAgICAgICAgIFtpY29uXT1cImljb25cIlxuICAgICAgICAgICAgW3NpemVdPVwic2l6ZUhlYWRlckljb25cIlxuICAgICAgICAgICAgKm5nSWY9XCJpY29uXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IG1yLTMgbXktYXV0b1wiXG4gICAgICAgICAgPjwvc29mLXN2Zy1pY29uPlxuICAgICAgICAgIDxoMT57eyBoZWFkZXJMYWJlbCB9fTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wbGFpblwiIChjbGljayk9XCJkZXN0cm95LmVtaXQoKVwiICNjbG9zZUJ1dHRvbj5cbiAgICAgICAgICA8c29mLXN2Zy1pY29uICpuZ0lmPVwiIWhpZGVEZXN0cm95XCIgaWNvbj1cImljb24tY3Jvc3NcIj48L3NvZi1zdmctaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJzb2YtZGlhbG9nLWlubmVyLXdyYXBwZXItYm9keVwiXG4gICAgICAgIFtjbGFzcy5wYWRkaW5nLXRvcF09XCIhKGhlYWRlckxhYmVsIHx8ICFoaWRlRGVzdHJveSlcIlxuICAgICAgICBbY2xhc3MucGFkZGluZy1ib3R0b21dPVwiZm9vdGVyPy5jaGlsZE5vZGVzPy5sZW5ndGggPT09IDBcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc29mLWRpYWxvZy1ib2R5XVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBbY2xhc3Muc29mLWRpYWxvZy1pbm5lci13cmFwcGVyLWZvb3Rlcl09XCJmb290ZXI/LmNoaWxkTm9kZXM/Lmxlbmd0aCA+IDBcIlxuICAgICAgICAjZm9vdGVyXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzb2YtZGlhbG9nLWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLWlubmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG4vKlxuICogRm9yIG1vcmUgaW5mbyBvbiB0aGUgY2RrVHJhcEZvY3VzIGNka1RyYXBGb2N1c0F1dG9DYXB0dXJlIHVzZWQ6IGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9jZGsvYTExeS9vdmVydmlld1xuICogSXQgdHJhcHMgdGhlIHRhYi1hYmxlIGZvY3VzIG9mIHRoZSBkaWFsb2cgdG8gb25seSB3aGF0cyBpbiB0aGUgZGlhbG9nLFxuICogYW5kIG1ha2VzIHN1cmUgdGhhdCB1cG9uIG9wZW5pbmcgaXQgdGhlIGZvY3VzIGlzIHNldCB3aXRoaW4gdGhlIGRpYWxvZy5cbiAqL1xuZXhwb3J0IGNsYXNzIERpYWxvZ0lubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBoZWFkZXJMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBoaWRlRGVzdHJveTogYm9vbGVhbjtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplSGVhZGVySWNvbjpcbiAgICB8ICc4J1xuICAgIHwgJzEyJ1xuICAgIHwgJzE2J1xuICAgIHwgJzIwJ1xuICAgIHwgJzI0J1xuICAgIHwgJzI4J1xuICAgIHwgJzMyJ1xuICAgIHwgJzQ4JyA9ICcxNic7XG5cbiAgQE91dHB1dCgpIGRlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ2Nsb3NlQnV0dG9uJykgY2xvc2VCdXR0b25SZWY6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudFJlZlNlcnZpY2U6IERvY3VtZW50UmVmU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBmcm9tRXZlbnQodGhpcy5kb2N1bWVudFJlZlNlcnZpY2UubmF0aXZlRG9jdW1lbnQsICdrZXlkb3duJylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiBldmVudC5rZXkgPT09ICdFc2NhcGUnKSxcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveSh0aGlzKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5oaWRlRGVzdHJveSkge1xuICAgICAgICAgIHRoaXMuZGVzdHJveS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIFdlIGRvbid0IHdhbnQgdGhlIGNsb3NlIGJ1dHRvbiBmb2N1c2VkIHdoZW4gb3BlbmluZyBhIGRpYWxvZy5cbiAgICAvLyBTbyB3ZSByZW1vdmUgdGhlIGZvY3VzIGZyb20gdGhlIGNsb3NlIGJ1dHRvbiBhZnRlciBpdCB3YXMgYmVlbiBmb2N1c2VkIGJ5IHRoZSBjZGtUcmFwRm9jdXNBdXRvQ2FwdHVyZSBkaXJlY3RpdmUuXG4gICAgLy8gSW4gb3JkZXIgdG8gZ3VhcmFudGVlIHRoZSBvcmRlciBpbiB3aGljaCB0aGVzZSBhcmUgZXhlY3V0ZWQgdGhlIHNldFRpbWVvdXQgaXMgYWRkZWQuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsb3NlQnV0dG9uUmVmPy5uYXRpdmVFbGVtZW50Py5ibHVyKCksIDApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxufVxuIl19