import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { DocumentRefService } from '@sofico-framework/utils';
import * as ɵngcc0 from '@angular/core';
export declare class DialogInnerComponent implements OnInit, OnDestroy, AfterViewInit {
    private documentRefService;
    headerLabel: string;
    hideDestroy: boolean;
    icon: string;
    sizeHeaderIcon: '8' | '12' | '16' | '20' | '24' | '28' | '32' | '48';
    destroy: EventEmitter<any>;
    closeButtonRef: ElementRef;
    constructor(documentRefService: DocumentRefService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DialogInnerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DialogInnerComponent, "sof-dialog-inner", never, { "sizeHeaderIcon": "sizeHeaderIcon"; "headerLabel": "headerLabel"; "hideDestroy": "hideDestroy"; "icon": "icon"; }, { "destroy": "destroy"; }, never, ["[sof-dialog-body]", "[sof-dialog-footer]"]>;
}

//# sourceMappingURL=dialog-inner.component.d.ts.map