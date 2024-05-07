import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
export class AlertComponent {
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
AlertComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
AlertComponent.propDecorators = {
    type: [{ type: Input }],
    isDismissible: [{ type: Input }],
    dismiss: [{ type: Output }],
    display: [{ type: HostBinding, args: ['style.display',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBMkJ2QixNQUFNLE9BQU8sY0FBYztJQXpCM0I7UUEwQkU7OztXQUdHO1FBQ00sU0FBSSxHQUE4QyxNQUFNLENBQUM7UUFFbEU7O1dBRUc7UUFDTSxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUUvQjs7V0FFRztRQUNPLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXZDLGVBQVUsR0FBRztZQUNYLENBQUMsTUFBTSxDQUFDLEVBQUUsa0JBQWtCO1lBQzVCLENBQUMsU0FBUyxDQUFDLEVBQUUsdUJBQXVCO1lBQ3BDLENBQUMsU0FBUyxDQUFDLEVBQUUsY0FBYztZQUMzQixDQUFDLFFBQVEsQ0FBQyxFQUFFLG1CQUFtQjtTQUNoQyxDQUFDO0lBTUosQ0FBQztJQUpDLE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUUvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7O2FBQ0Y7OzttQkFNRSxLQUFLOzRCQUtMLEtBQUs7c0JBS0wsTUFBTTtzQkFFTixXQUFXLFNBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1hbGVydCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC17eyB0eXBlIH19XCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICA8c29mLXN2Zy1pY29uXG4gICAgICAgIGNsYXNzPVwiYWxlcnQtaWNvbi10eXBlXCJcbiAgICAgICAgW2ljb25dPVwiYWxlcnRJY29uc1t0eXBlXVwiXG4gICAgICAgIHNpemU9XCIyMFwiXG4gICAgICA+PC9zb2Ytc3ZnLWljb24+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQtY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXBsYWluXCIgKGNsaWNrKT1cIm9uQ2xvc2UoKVwiPlxuICAgICAgICA8c29mLXN2Zy1pY29uXG4gICAgICAgICAgKm5nSWY9XCJpc0Rpc21pc3NpYmxlXCJcbiAgICAgICAgICBjbGFzcz1cImFsZXJ0LWljb24tZGlzbWlzc1wiXG4gICAgICAgICAgaWNvbj1cImljb24tY3Jvc3NcIlxuICAgICAgICAgIHNpemU9XCIxMlwiXG4gICAgICAgID48L3NvZi1zdmctaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFR5cGUgb2YgYWxlcnQgdGhhdCBtdXN0IGJlIGRpc3BsYXllZC4gVGhpcyBoYXMgYW4gaW1wYWN0IG9uIGljb25zIGFuZCBjb2xvcnMuXG4gICAqIE9wdGlvbnM6IGluZm8sIHN1Y2Nlc3MsIHdhcm5pbmcgYW5kIGRhbmdlci5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGU6ICdpbmZvJyB8ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdkYW5nZXInID0gJ2luZm8nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgYWxlcnQgY2FuIGJlIGNsb3NlZC5cbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzbWlzc2libGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogRXZlbnQgdGhhdCB3aWxsIGluZm9ybSB3aGVuIHRoZSBhbGVydCBpcyBjbG9zZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgZGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5OiBzdHJpbmc7XG5cbiAgYWxlcnRJY29ucyA9IHtcbiAgICBbJ2luZm8nXTogJ2ljb24taW5mby1jaXJjbGUnLFxuICAgIFsnc3VjY2VzcyddOiAnaWNvbi1jaGVja21hcmstY2lyY2xlJyxcbiAgICBbJ3dhcm5pbmcnXTogJ2ljb24td2FybmluZycsXG4gICAgWydkYW5nZXInXTogJ2ljb24tY3Jvc3MtY2lyY2xlJ1xuICB9O1xuXG4gIG9uQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuZGlzbWlzcy5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==