import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class AlertComponent {
    /**
     * Type of alert that must be displayed. This has an impact on icons and colors.
     * Options: info, success, warning and danger.
     */
    type: 'info' | 'success' | 'warning' | 'danger';
    /**
     * Whether or not the alert can be closed.
     */
    isDismissible: boolean;
    /**
     * Event that will inform when the alert is closed.
     */
    dismiss: EventEmitter<any>;
    display: string;
    alertIcons: {
        info: string;
        success: string;
        warning: string;
        danger: string;
    };
    onClose(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AlertComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AlertComponent, "sof-alert", never, { "type": "type"; "isDismissible": "isDismissible"; }, { "dismiss": "dismiss"; }, never, ["*"]>;
}

//# sourceMappingURL=alert.component.d.ts.map