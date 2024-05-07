import { OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
export declare class MarkdownComponent implements OnInit, OnChanges {
    value: string;
    valueChanges$: Observable<string>;
    private converter;
    convertedValue$: Observable<string>;
    ngOnChanges(): void;
    ngOnInit(): void;
}
