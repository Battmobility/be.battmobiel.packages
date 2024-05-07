import { Overlay } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DialogConfigService } from './services/dialog-config.service';
/**
 * This component is the inline template way of working with dialogs. This means it can be
 * consumed by the `sof-dialog` selector.
 * It has a placeholder for the body called `sof-dialog-body` and a placeholder
 * for the footer called `sof-dialog-footer`
 */
export class DialogComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV2RTs7Ozs7R0FLRztBQW1CSCxNQUFNLE9BQU8sZUFBZTtJQStDMUIsWUFDVSxPQUFnQixFQUNoQixtQkFBd0M7UUFEeEMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBekNsRDs7OztXQUlHO1FBQ00sU0FBSSxHQUE4QixJQUFJLENBQUM7UUFFaEQ7OztXQUdHO1FBQ00sbUJBQWMsR0FRWixJQUFJLENBQUM7UUFhaEI7O1dBRUc7UUFDTyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU9wQyxDQUFDO0lBRUosUUFBUTtRQUNOLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLElBQUk7Z0JBQ1AsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUN2RCxNQUFNO1lBQ1IsS0FBSyxJQUFJO2dCQUNQLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztnQkFDdkQsTUFBTTtZQUNSLEtBQUssSUFBSTtnQkFDUCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7Z0JBQ3hELE1BQU07WUFDUixLQUFLLElBQUk7Z0JBQ1AsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUN4RCxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQzFEO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FDdkMsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQXBHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUOzthQUVGOzs7WUFyQ1EsT0FBTztZQVlQLG1CQUFtQjs7O3FCQTJCekIsU0FBUyxTQUFDLFNBQVM7MEJBS25CLEtBQUs7bUJBT0wsS0FBSzs2QkFNTCxLQUFLO21CQWFMLEtBQUs7MEJBTUwsS0FBSztzQkFLTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENka1BvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaWFsb2dDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kaWFsb2ctY29uZmlnLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGlzIHRoZSBpbmxpbmUgdGVtcGxhdGUgd2F5IG9mIHdvcmtpbmcgd2l0aCBkaWFsb2dzLiBUaGlzIG1lYW5zIGl0IGNhbiBiZVxuICogY29uc3VtZWQgYnkgdGhlIGBzb2YtZGlhbG9nYCBzZWxlY3Rvci5cbiAqIEl0IGhhcyBhIHBsYWNlaG9sZGVyIGZvciB0aGUgYm9keSBjYWxsZWQgYHNvZi1kaWFsb2ctYm9keWAgYW5kIGEgcGxhY2Vob2xkZXJcbiAqIGZvciB0aGUgZm9vdGVyIGNhbGxlZCBgc29mLWRpYWxvZy1mb290ZXJgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSBjZGtQb3J0YWw+XG4gICAgICA8c29mLWRpYWxvZy1pbm5lclxuICAgICAgICBbaWNvbl09XCJpY29uXCJcbiAgICAgICAgW3NpemVIZWFkZXJJY29uXT1cInNpemVIZWFkZXJJY29uXCJcbiAgICAgICAgKGRlc3Ryb3kpPVwiZGVzdHJveS5lbWl0KClcIlxuICAgICAgICBbaGVhZGVyTGFiZWxdPVwiaGVhZGVyTGFiZWxcIlxuICAgICAgICBbaGlkZURlc3Ryb3ldPVwiaGlkZURlc3Ryb3lcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGVudCBzb2YtZGlhbG9nLWJvZHkgc2VsZWN0PVwiW3NvZi1kaWFsb2ctYm9keV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250ZW50IHNvZi1kaWFsb2ctZm9vdGVyIHNlbGVjdD1cIltzb2YtZGlhbG9nLWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L3NvZi1kaWFsb2ctaW5uZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKENka1BvcnRhbCkgcG9ydGFsO1xuICAvKipcbiAgICogVGhlIGxhYmVsIHRoYXQgaXMgc2hvd24gaW4gdGhlIGhlYWRlci5cbiAgICogRm9yIGNvbnNpc3RlbmN5IHJlYXNvbnMgd2Ugb25seSB3YW50IHBsYWluIHRleHQgaW4gaGVyZSByYXRoZXIgdGhhbiBodG1sXG4gICAqL1xuICBASW5wdXQoKSBoZWFkZXJMYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZGlhbG9nLlxuICAgKiBDYW4gYmUgc20gLSBtZCAtIGxnIC0geGwuXG4gICAqIHNtIGJ5IGRlZmF1bHRcbiAgICovXG4gIEBJbnB1dCgpIHNpemU6ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgPSAnc20nO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZGlhbG9nIGhlYWRlciBpY29uLlxuICAgKiAxNiBieSBkZWZhdWx0XG4gICAqL1xuICBASW5wdXQoKSBzaXplSGVhZGVySWNvbjpcbiAgICB8ICc4J1xuICAgIHwgJzEyJ1xuICAgIHwgJzE2J1xuICAgIHwgJzIwJ1xuICAgIHwgJzI0J1xuICAgIHwgJzI4J1xuICAgIHwgJzMyJ1xuICAgIHwgJzQ4JyA9ICcxNic7XG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIGluIHRoZSBoZWFkZXIgb2YgdGhlIGRpYWxvZy5cbiAgICovXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogSGlkZSB0aGUgY3Jvc3MgaW4gdGhlIHJpZ2h0IHRvcCBjb3JuZXIgdGhhdCBlbWl0cyBvbiB0aGUgZGVzdHJveSBvdXRwdXRcbiAgICogRmFsc2UgYnkgZGVmYXVsdFxuICAgKi9cbiAgQElucHV0KCkgaGlkZURlc3Ryb3k6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE91dHB1dCB0aGF0IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjbG9zZSBpY29uIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKSBkZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgZGlhbG9nQ29uZmlnU2VydmljZTogRGlhbG9nQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3dpdGNoICh0aGlzLnNpemUpIHtcbiAgICAgIGNhc2UgJ3NtJzpcbiAgICAgICAgdGhpcy5kaWFsb2dDb25maWdTZXJ2aWNlLm92ZXJsYXlDb25maWcud2lkdGggPSAnNjAwcHgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21kJzpcbiAgICAgICAgdGhpcy5kaWFsb2dDb25maWdTZXJ2aWNlLm92ZXJsYXlDb25maWcud2lkdGggPSAnODAwcHgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xnJzpcbiAgICAgICAgdGhpcy5kaWFsb2dDb25maWdTZXJ2aWNlLm92ZXJsYXlDb25maWcud2lkdGggPSAnMTAwMHB4JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd4bCc6XG4gICAgICAgIHRoaXMuZGlhbG9nQ29uZmlnU2VydmljZS5vdmVybGF5Q29uZmlnLndpZHRoID0gJzEyMDBweCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5kaWFsb2dDb25maWdTZXJ2aWNlLm92ZXJsYXlDb25maWcud2lkdGggPSAnNjAwcHgnO1xuICAgIH1cblxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoXG4gICAgICB0aGlzLmRpYWxvZ0NvbmZpZ1NlcnZpY2Uub3ZlcmxheUNvbmZpZ1xuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgfVxufVxuIl19