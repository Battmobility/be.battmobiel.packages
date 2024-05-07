import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Acting, ActingErrorMessages } from '@sofico-framework/utils';
export class ConfirmDialogComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCxNQUFNLEVBRU4sbUJBQW1CLEVBQ3BCLE1BQU0seUJBQXlCLENBQUM7QUFvRWpDLE1BQU0sT0FBTyxzQkFBc0I7SUFqRW5DO1FBMkVZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSXpDLENBQUM7OztZQWhGQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0RFQ7O2FBRUY7OzswQkFFRSxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO2lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7c0JBRUwsTUFBTTtzQkFDTixNQUFNOztBQUVHO0lBQVQsTUFBTSxFQUFFO3VEQUE4QjtBQUNoQjtJQUF0QixtQkFBbUIsRUFBRTtvRUFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aW5nLFxuICBBY3RpbmdFcnJvck1lc3NhZ2UsXG4gIEFjdGluZ0Vycm9yTWVzc2FnZXNcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtY29uZmlybS1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzb2YtZGlhbG9nLWlubmVyXG4gICAgICAoZGVzdHJveSk9XCJkZWNsaW5lLmVtaXQoKVwiXG4gICAgICBbaGVhZGVyTGFiZWxdPVwidGMgKyAnLicgKyBoZWFkZXJMYWJlbCB8IHRyYW5zbGF0ZTogbGFiZWxQYXJhbXNcIlxuICAgID5cbiAgICAgIDxkaXYgc29mLWRpYWxvZy1ib2R5PlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBhY3RpbmdFcnJvck1lc3NhZ2VzJCB8IGFzeW5jXCIgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgPHNvZi1hbGVydCB0eXBlPVwiZGFuZ2VyXCI+XG4gICAgICAgICAgICB7e1xuICAgICAgICAgICAgICBlcnJvcj8udHJhbnNsYXRpb25cbiAgICAgICAgICAgICAgICA/IGVycm9yPy50cmFuc2xhdGlvblxuICAgICAgICAgICAgICAgIDogKHRjICsgJy4nICsgZXJyb3I/Lm1lc3NhZ2UgfCB0cmFuc2xhdGU6IGVycm9yPy5tZXNzYWdlUGFyYW1zKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L3NvZi1hbGVydD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt7IHRjICsgJy4nICsgYm9keUxhYmVsIHwgdHJhbnNsYXRlOiBsYWJlbFBhcmFtcyB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHNvZi1kaWFsb2ctZm9vdGVyIGNsYXNzPVwiYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInByaW1hcnlBY3Rpb24gPT09ICdjb25maXJtJzsgZWxzZSBvdGhlckFjdGlvblwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHNvZkJ1dHRvblxuICAgICAgICAgICAgc29mRm9jdXNcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1taW4td2lkdGggb3JkZXItMVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiY29uZmlybS5lbWl0KClcIlxuICAgICAgICAgICAgW2xvYWRpbmddPVwiIWRpc2FibGVBY3RpbmcgJiYgKGFjdGluZyQgfCBhc3luYylcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFkaXNhYmxlQWN0aW5nICYmIChhY3RpbmckIHwgYXN5bmMpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyB0YyArICcuJyArIGNvbmZpcm1MYWJlbCB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHNvZkJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidG4tbWluLXdpZHRoIG1yLTIgb3JkZXItMFwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZGVjbGluZS5lbWl0KClcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFkaXNhYmxlQWN0aW5nICYmIChhY3RpbmckIHwgYXN5bmMpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyB0YyArICcuJyArIGNhbmNlbExhYmVsIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI290aGVyQWN0aW9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHNvZkJ1dHRvblxuICAgICAgICAgICAgc29mRm9jdXNcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1taW4td2lkdGggb3JkZXItMVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZGVjbGluZS5lbWl0KClcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImFjdGluZyQgfCBhc3luY1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgdGMgKyAnLicgKyBjYW5jZWxMYWJlbCB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHNvZkJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidG4tbWluLXdpZHRoIG1yLTIgb3JkZXItMFwiXG4gICAgICAgICAgICAoY2xpY2spPVwiY29uZmlybS5lbWl0KClcIlxuICAgICAgICAgICAgW2xvYWRpbmddPVwiIWRpc2FibGVBY3RpbmcgJiYgKGFjdGluZyQgfCBhc3luYylcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFkaXNhYmxlQWN0aW5nICYmIChhY3RpbmckIHwgYXN5bmMpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyB0YyArICcuJyArIGNvbmZpcm1MYWJlbCB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgPC9zb2YtZGlhbG9nLWlubmVyPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1EaWFsb2dDb21wb25lbnQge1xuICBASW5wdXQoKSBoZWFkZXJMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBjYW5jZWxMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBjb25maXJtTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZUFjdGluZzogYm9vbGVhbjtcbiAgQElucHV0KCkgdGM6IHN0cmluZztcbiAgQElucHV0KCkgYm9keUxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByaW1hcnlBY3Rpb246ICdjb25maXJtJyB8ICdjYW5jZWwnO1xuICBASW5wdXQoKSBsYWJlbFBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICBAT3V0cHV0KCkgZGVjbGluZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEFjdGluZygpIGFjdGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIEBBY3RpbmdFcnJvck1lc3NhZ2VzKCkgYWN0aW5nRXJyb3JNZXNzYWdlcyQ6IE9ic2VydmFibGU8QWN0aW5nRXJyb3JNZXNzYWdlW10+O1xufVxuIl19