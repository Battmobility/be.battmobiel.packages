import { EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { OverviewListConfig } from '@sofico-framework/ui-kit/classes';
import { SortingOrderConfig } from '@sofico-framework/utils';
import { Observable } from 'rxjs';
export declare class OverviewListSortDropdownComponent<T> {
    private translateService;
    private fb;
    labels: string[];
    plainSorts: boolean[];
    selectors: ((entity: T) => any)[];
    dropDownChoices$: Observable<{
        translation: string;
        index: number;
    }[]>;
    form: import("@angular/forms").FormControl;
    tc: string;
    sorting: SortingOrderConfig<T>;
    set overviewListConfig(config: OverviewListConfig<T>);
    changeSorting: EventEmitter<SortingOrderConfig<T>>;
    selectorLabel: (x: any) => any;
    selectorValue: (x: any) => any;
    constructor(translateService: TranslateService, fb: FormBuilder);
    changeDirection(): void;
    onChange(obj: {
        translation: string;
        index: number;
    }): void;
    mapToTranslatedDropDownChoices(): Observable<{
        translation: string;
        index: number;
    }[]>;
}
