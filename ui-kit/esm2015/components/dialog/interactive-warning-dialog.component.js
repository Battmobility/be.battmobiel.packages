import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Acting, ActingErrorMessages } from '@sofico-framework/utils';
export class InteractiveWarningDialogComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3RpdmUtd2FybmluZy1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kaWFsb2cvaW50ZXJhY3RpdmUtd2FybmluZy1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCxNQUFNLEVBRU4sbUJBQW1CLEVBQ3BCLE1BQU0seUJBQXlCLENBQUM7QUFvRGpDLE1BQU0sT0FBTyxpQ0FBaUM7SUFqRDlDO1FBcURZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSXpDLENBQUM7OztZQTFEQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRDVDs7YUFFRjs7O3FCQUVFLEtBQUs7aUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLE1BQU07c0JBQ04sTUFBTTs7QUFFRztJQUFULE1BQU0sRUFBRTtrRUFBOEI7QUFDaEI7SUFBdEIsbUJBQW1CLEVBQUU7K0VBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGluZyxcbiAgQWN0aW5nRXJyb3JNZXNzYWdlLFxuICBBY3RpbmdFcnJvck1lc3NhZ2VzXG59IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWludGVyYWN0aXZlLXdhcm5pbmctZGlhbG9nJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c29mLWRpYWxvZy1pbm5lclxuICAgICAgKGRlc3Ryb3kpPVwiZGVjbGluZS5lbWl0KClcIlxuICAgICAgW2hlYWRlckxhYmVsXT1cInRjICsgJy5JTlRFUkFDVElWRS1XQVJOSU5HLUhFQURFUicgfCB0cmFuc2xhdGVcIlxuICAgID5cbiAgICAgIDxkaXYgc29mLWRpYWxvZy1ib2R5PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiICpuZ0Zvcj1cImxldCBlcnJvciBvZiBhY3RpbmdFcnJvck1lc3NhZ2VzJCB8IGFzeW5jXCI+XG4gICAgICAgICAgPHNvZi1hbGVydCB0eXBlPVwiZGFuZ2VyXCI+XG4gICAgICAgICAgICB7e1xuICAgICAgICAgICAgICBlcnJvcj8udHJhbnNsYXRpb25cbiAgICAgICAgICAgICAgICA/IGVycm9yPy50cmFuc2xhdGlvblxuICAgICAgICAgICAgICAgIDogKHRjICsgJy4nICsgZXJyb3I/Lm1lc3NhZ2UgfCB0cmFuc2xhdGU6IGVycm9yPy5tZXNzYWdlUGFyYW1zKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L3NvZi1hbGVydD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt7IHRjICsgJy5JTlRFUkFDVElWRS1XQVJOSU5HLUJPRFknIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGVycm9yIG9mIGVycm9yc1wiPnt7IGVycm9yIH19PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzb2YtZGlhbG9nLWZvb3RlclxuICAgICAgICBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBzb2ZCdXR0b25cbiAgICAgICAgICBzb2ZGb2N1c1xuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1taW4td2lkdGggb3JkZXItMVwiXG4gICAgICAgICAgKGNsaWNrKT1cImNvbmZpcm0uZW1pdCgpXCJcbiAgICAgICAgICBbbG9hZGluZ109XCJhY3RpbmckIHwgYXN5bmNcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJhY3RpbmckIHwgYXN5bmNcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgdGMgKyAnLkNPTlRJTlVFJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHNvZkJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnRuLW1pbi13aWR0aCBtci0yIG9yZGVyLTBcIlxuICAgICAgICAgIChjbGljayk9XCJkZWNsaW5lLmVtaXQoKVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImFjdGluZyQgfCBhc3luY1wiXG4gICAgICAgID5cbiAgICAgICAgICB7eyB0YyArICcuQ0FOQ0VMJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc29mLWRpYWxvZy1pbm5lcj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGl2ZVdhcm5pbmdEaWFsb2dDb21wb25lbnQge1xuICBASW5wdXQoKSBlcnJvcnM6IHN0cmluZ1tdO1xuICBASW5wdXQoKSB0Yzogc3RyaW5nO1xuICBASW5wdXQoKSBib2R5TGFiZWw6IHN0cmluZztcbiAgQE91dHB1dCgpIGRlY2xpbmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBBY3RpbmcoKSBhY3RpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBAQWN0aW5nRXJyb3JNZXNzYWdlcygpIGFjdGluZ0Vycm9yTWVzc2FnZXMkOiBPYnNlcnZhYmxlPEFjdGluZ0Vycm9yTWVzc2FnZVtdPjtcbn1cbiJdfQ==