import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
export declare class GetErrorMessagesComponent implements OnInit {
    tc: string;
    error$: Observable<string>;
    errorMessage$: Observable<string>;
    ngOnInit(): void;
}
