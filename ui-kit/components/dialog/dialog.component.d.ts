import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { AfterViewInit, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { DialogConfigService } from './services/dialog-config.service';
/**
 * This component is the inline template way of working with dialogs. This means it can be
 * consumed by the `sof-dialog` selector.
 * It has a placeholder for the body called `sof-dialog-body` and a placeholder
 * for the footer called `sof-dialog-footer`
 */
import * as ɵngcc0 from '@angular/core';
export declare class DialogComponent implements OnInit, AfterViewInit, OnDestroy {
    private overlay;
    private dialogConfigService;
    portal: any;
    /**
     * The label that is shown in the header.
     * For consistency reasons we only want plain text in here rather than html
     */
    headerLabel: string;
    /**
     * The size of the dialog.
     * Can be sm - md - lg - xl.
     * sm by default
     */
    size: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * The size of the dialog header icon.
     * 16 by default
     */
    sizeHeaderIcon: '8' | '12' | '16' | '20' | '24' | '28' | '32' | '48';
    /**
     * The icon in the header of the dialog.
     */
    icon: string;
    /**
     * Hide the cross in the right top corner that emits on the destroy output
     * False by default
     */
    hideDestroy: boolean;
    /**
     * Output that is triggered when the close icon is clicked
     */
    destroy: EventEmitter<any>;
    overlayRef: OverlayRef;
    constructor(overlay: Overlay, dialogConfigService: DialogConfigService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DialogComponent, "sof-dialog", never, { "size": "size"; "sizeHeaderIcon": "sizeHeaderIcon"; "headerLabel": "headerLabel"; "icon": "icon"; "hideDestroy": "hideDestroy"; }, { "destroy": "destroy"; }, never, ["[sof-dialog-body]", "[sof-dialog-footer]"]>;
}

//# sourceMappingURL=dialog.component.d.ts.map