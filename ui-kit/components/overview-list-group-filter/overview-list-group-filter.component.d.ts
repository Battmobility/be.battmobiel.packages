import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Tab } from '@sofico-framework/ui-kit/components/tab';
import { GroupDefinition } from '@sofico-framework/ui-kit/types';
import { Observable, ReplaySubject } from 'rxjs';
export declare class OverviewListGroupFilterComponent<T> implements OnInit, OnChanges {
    private translateService;
    private fb;
    formControl: FormControl;
    selectedGroup$: ReplaySubject<GroupDefinition>;
    tc: string;
    groupSelector: (T: any) => string | number;
    set selectedGroup(value: GroupDefinition);
    entities: T[];
    groupDefinitions: GroupDefinition[];
    selectGroup: EventEmitter<GroupDefinition>;
    entities$: Observable<T[]>;
    groupDefinitions$: Observable<GroupDefinition[]>;
    tabs$: Observable<Tab[]>;
    activeTab$: Observable<Tab>;
    options$: Observable<any>;
    labelFn: (x: any) => string;
    valueFn: (x: any) => any;
    constructor(translateService: TranslateService, fb: FormBuilder);
    ngOnInit(): void;
    ngOnChanges(): void;
    onChangeValueList(groupDefinitionId: string): void;
    onClickedTab(tab: Tab): void;
    private getTabs$;
    private getActiveTab$;
    private getOptions$;
}
