import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Acting, ActingErrorMessages } from '@sofico-framework/utils';
export class AcknowledgeDialogComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNrbm93bGVkZ2UtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZGlhbG9nL2Fja25vd2xlZGdlLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUNMLE1BQU0sRUFFTixtQkFBbUIsRUFDcEIsTUFBTSx5QkFBeUIsQ0FBQztBQThDakMsTUFBTSxPQUFPLDBCQUEwQjtJQTNDdkM7UUFtRFksZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSTdDLENBQUM7OztZQXZEQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNDVDs7YUFFRjs7OzBCQUVFLEtBQUs7K0JBQ0wsS0FBSztpQkFDTCxLQUFLO3dCQUNMLEtBQUs7NENBQ0wsS0FBSzswQ0FDTCxLQUFLOzBCQUVMLE1BQU07O0FBRUc7SUFBVCxNQUFNLEVBQUU7MkRBQThCO0FBQ2hCO0lBQXRCLG1CQUFtQixFQUFFO3dFQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpbmcsXG4gIEFjdGluZ0Vycm9yTWVzc2FnZSxcbiAgQWN0aW5nRXJyb3JNZXNzYWdlc1xufSBmcm9tICdAc29maWNvLWZyYW1ld29yay91dGlscyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1hY2tub3dsZWRnZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzb2YtZGlhbG9nLWlubmVyXG4gICAgICAoZGVzdHJveSk9XCJhY2tub3dsZWRnZS5lbWl0KClcIlxuICAgICAgW2hlYWRlckxhYmVsXT1cIlxuICAgICAgICBkaXNhYmxlSGVhZGVyTGFiZWxUcmFuc2xhdGlvblxuICAgICAgICAgID8gaGVhZGVyTGFiZWxcbiAgICAgICAgICA6ICh0YyArICcuJyArIGhlYWRlckxhYmVsIHwgdHJhbnNsYXRlKVxuICAgICAgXCJcbiAgICA+XG4gICAgICA8ZGl2IHNvZi1kaWFsb2ctYm9keT5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgYWN0aW5nRXJyb3JNZXNzYWdlcyQgfCBhc3luY1wiIGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgIDxzb2YtYWxlcnQgdHlwZT1cImRhbmdlclwiPlxuICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgZXJyb3I/LnRyYW5zbGF0aW9uXG4gICAgICAgICAgICAgICAgPyBlcnJvcj8udHJhbnNsYXRpb25cbiAgICAgICAgICAgICAgICA6ICh0YyArICcuJyArIGVycm9yPy5tZXNzYWdlIHwgdHJhbnNsYXRlOiBlcnJvcj8ubWVzc2FnZVBhcmFtcylcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9zb2YtYWxlcnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7e1xuICAgICAgICAgIGRpc2FibGVCb2R5TGFiZWxUcmFuc2xhdGlvblxuICAgICAgICAgICAgPyBib2R5TGFiZWxcbiAgICAgICAgICAgIDogKHRjICsgJy4nICsgYm9keUxhYmVsIHwgdHJhbnNsYXRlKVxuICAgICAgICB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHNvZi1kaWFsb2ctZm9vdGVyIGNsYXNzPVwiYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHNvZkJ1dHRvblxuICAgICAgICAgIHNvZkZvY3VzXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLW1pbi13aWR0aCBvcmRlci0xXCJcbiAgICAgICAgICBbbG9hZGluZ109XCJhY3RpbmckIHwgYXN5bmNcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJhY3RpbmckIHwgYXN5bmNcIlxuICAgICAgICAgIChjbGljayk9XCJhY2tub3dsZWRnZS5lbWl0KClcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgdGMgKyAnLicgKyBhY2tub3dsZWRnZUxhYmVsIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9zb2YtZGlhbG9nLWlubmVyPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9hY2tub3dsZWRnZS1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY2tub3dsZWRnZURpYWxvZ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGhlYWRlckxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFja25vd2xlZGdlTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgdGM6IHN0cmluZztcbiAgQElucHV0KCkgYm9keUxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVIZWFkZXJMYWJlbFRyYW5zbGF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlQm9keUxhYmVsVHJhbnNsYXRpb246IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIGFja25vd2xlZGdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBBY3RpbmcoKSBhY3RpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBAQWN0aW5nRXJyb3JNZXNzYWdlcygpIGFjdGluZ0Vycm9yTWVzc2FnZXMkOiBPYnNlcnZhYmxlPEFjdGluZ0Vycm9yTWVzc2FnZVtdPjtcbn1cbiJdfQ==