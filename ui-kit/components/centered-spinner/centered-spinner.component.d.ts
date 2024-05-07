import { OnDestroy, OnInit } from '@angular/core';
export declare class CenteredSpinnerComponent implements OnInit, OnDestroy {
    loading$: any;
    private show;
    get showBinding(): boolean;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
}
