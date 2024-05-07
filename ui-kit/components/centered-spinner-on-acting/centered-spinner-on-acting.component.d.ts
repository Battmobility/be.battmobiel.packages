import { OnDestroy, OnInit } from '@angular/core';
export declare class CenteredSpinnerOnActingComponent implements OnInit, OnDestroy {
    acting$: any;
    noClickThrough: boolean;
    get showBinding(): boolean;
    show: boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(event: MouseEvent): void;
}
