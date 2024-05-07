import { __decorate } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { hotSafe } from '@sofico-framework/utils';
import { Changes } from 'ngx-reactivetoolkit';
import { ReplaySubject, combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { InputSingleSelectModule } from '@sofico-framework/ui-kit/components/input-single-select';
import { TabsModule } from '@sofico-framework/ui-kit/components/tabs';

class OverviewListGroupFilterComponent {
    constructor(translateService, fb) {
        this.translateService = translateService;
        this.fb = fb;
        this.formControl = this.fb.control(null);
        this.selectedGroup$ = new ReplaySubject();
        this.groupDefinitions = [];
        this.selectGroup = new EventEmitter();
        this.labelFn = x => `${x.label} (${x.count})`;
        this.valueFn = x => x.id;
    }
    set selectedGroup(value) {
        this.selectedGroup$.next(value);
        this.formControl.setValue(value === null || value === void 0 ? void 0 : value.id);
    }
    ngOnInit() {
        // presentation streams
        this.tabs$ = this.getTabs$();
        this.activeTab$ = this.getActiveTab$();
        this.options$ = this.getOptions$();
    }
    ngOnChanges() { }
    onChangeValueList(groupDefinitionId) {
        this.selectGroup.emit(this.groupDefinitions.find(x => x.id === groupDefinitionId));
    }
    onClickedTab(tab) {
        this.selectGroup.emit(this.groupDefinitions.find(x => x.id === tab.id));
        this.selectedGroup$.next(this.groupDefinitions.find(x => x.id === tab.id));
    }
    getTabs$() {
        return combineLatest([
            this.entities$.pipe(filter(v => !!v)),
            this.groupDefinitions$.pipe(filter(v => !!v))
        ]).pipe(map(([entities, groupDefinitions]) => {
            return groupDefinitions.map(groupDefinition => ({
                label: groupDefinition.label,
                translation: groupDefinition.translation,
                icon: groupDefinition.icon,
                id: groupDefinition.id,
                count: 
                // todo: Remove 'groupIdentifiers' in next major release.
                groupDefinition.hasOwnProperty('groupIdentifiers') ||
                    groupDefinition.hasOwnProperty('groupIdentifiersIncl') ||
                    groupDefinition.hasOwnProperty('groupIdentifiersExcl')
                    ? entities === null || entities === void 0 ? void 0 : entities.filter(item => {
                        var _a;
                        const selector = this.groupSelector(item);
                        const groupDefinitionTmp = groupDefinition;
                        let groupIdentifiersIncluded;
                        let groupIdentifiersExcluded;
                        // todo: Remove 'groupIdentifiers' in next major release.
                        if (groupDefinitionTmp.hasOwnProperty('groupIdentifiers')) {
                            groupIdentifiersIncluded =
                                groupDefinitionTmp.groupIdentifiers;
                        }
                        else {
                            groupIdentifiersIncluded =
                                groupDefinitionTmp.groupIdentifiersIncl;
                            groupIdentifiersExcluded =
                                groupDefinitionTmp.groupIdentifiersExcl;
                        }
                        if (Array.isArray(selector)) {
                            const { groupIdentifiersInclStrategy, groupIdentifiersExclStrategy } = groupDefinitionTmp;
                            const includesFn = (v) => selector.includes(v);
                            // If either incl. or excl. is undefined we want to ignore said filter and return true (see: ?? true).
                            // It's only needed for the incl. filters as for excl. !undefined = true.
                            return (((_a = (groupIdentifiersInclStrategy === undefined ||
                                groupIdentifiersInclStrategy === 'or'
                                ? groupIdentifiersIncluded === null || groupIdentifiersIncluded === void 0 ? void 0 : groupIdentifiersIncluded.some(includesFn) : groupIdentifiersIncluded === null || groupIdentifiersIncluded === void 0 ? void 0 : groupIdentifiersIncluded.every(includesFn))) !== null && _a !== void 0 ? _a : true) &&
                                (groupIdentifiersExclStrategy === undefined ||
                                    groupIdentifiersExclStrategy === 'or'
                                    ? !(groupIdentifiersExcluded === null || groupIdentifiersExcluded === void 0 ? void 0 : groupIdentifiersExcluded.some(includesFn))
                                    : !(groupIdentifiersExcluded === null || groupIdentifiersExcluded === void 0 ? void 0 : groupIdentifiersExcluded.every(includesFn))));
                        }
                        return ((groupIdentifiersIncluded === null || groupIdentifiersIncluded === void 0 ? void 0 : groupIdentifiersIncluded.includes(selector)) &&
                            !(groupIdentifiersExcluded === null || groupIdentifiersExcluded === void 0 ? void 0 : groupIdentifiersExcluded.includes(selector)));
                    }).length : entities.length
            }));
        }), hotSafe());
    }
    getActiveTab$() {
        return combineLatest([this.selectedGroup$, this.tabs$]).pipe(map(([selectedGroup, tabs]) => tabs.find(x => x.id === (selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.id)) || tabs[0]));
    }
    getOptions$() {
        return combineLatest([
            this.entities$.pipe(filter(v => !!v)),
            this.groupDefinitions$.pipe(filter(v => !!v))
        ]).pipe(switchMap(([entities, groupDefinitions]) => {
            const keys = groupDefinitions.map(groupDefinition => groupDefinition.label
                ? `${this.tc}.${groupDefinition.label}`
                : undefined);
            return combineLatest(keys.map((x, i) => {
                var _a;
                return x
                    ? this.translateService.stream(x)
                    : of((_a = groupDefinitions[i]) === null || _a === void 0 ? void 0 : _a.translation);
            })).pipe(map(translations => translations
                // add translation
                .map((translation, index) => (Object.assign(Object.assign({}, groupDefinitions[index]), { label: translation })))
                // add count (not part of the group identifier type)
                .map(groupDefinition => (Object.assign(Object.assign({}, groupDefinition), { count: groupDefinition.hasOwnProperty('groupIdentifiers')
                    ? entities === null || entities === void 0 ? void 0 : entities.filter(item => { var _a, _b; return (_b = (_a = groupDefinition) === null || _a === void 0 ? void 0 : _a.groupIdentifiers) === null || _b === void 0 ? void 0 : _b.includes(this.groupSelector(item)); }).length : entities.length })))));
        }));
    }
}
OverviewListGroupFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-overview-list-group-tabs',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="group-tabs">
      <sof-tabs
        [tc]="tc"
        [tabs]="tabs$ | async"
        [active]="activeTab$ | async"
        (clickedTab)="onClickedTab($event)"
      ></sof-tabs>
    </div>
    <div class="group-list">
      <sof-input-single-select
        [tc]="tc"
        [formControl]="formControl"
        [options]="options$ | async"
        [selectorLabel]="labelFn"
        [selectorValue]="valueFn"
        [clearable]="false"
        (changeValue)="onChangeValueList($event)"
      ></sof-input-single-select>
    </div>
  `,
                styles: [".group-tabs{display:flex}.group-tabs sof-overview-list-group-tab{margin-right:1.5rem}.group-tabs sof-overview-list-group-tab:last-of-type{margin-right:0}.group-list{display:none}@media screen and (max-width:991px){.group-tabs{display:none}.group-list{display:block}}"]
            },] }
];
OverviewListGroupFilterComponent.ctorParameters = () => [
    { type: TranslateService },
    { type: FormBuilder }
];
OverviewListGroupFilterComponent.propDecorators = {
    tc: [{ type: Input }],
    groupSelector: [{ type: Input }],
    selectedGroup: [{ type: Input }],
    entities: [{ type: Input }],
    groupDefinitions: [{ type: Input }],
    selectGroup: [{ type: Output }]
};
__decorate([
    Changes('entities')
], OverviewListGroupFilterComponent.prototype, "entities$", void 0);
__decorate([
    Changes('groupDefinitions')
], OverviewListGroupFilterComponent.prototype, "groupDefinitions$", void 0);

class OverviewListGroupFilterModule {
}
OverviewListGroupFilterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [OverviewListGroupFilterComponent],
                exports: [OverviewListGroupFilterComponent],
                imports: [
                    CommonModule,
                    TranslateModule.forChild(),
                    InputSingleSelectModule,
                    ReactiveFormsModule,
                    TabsModule
                ]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { OverviewListGroupFilterComponent, OverviewListGroupFilterModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-overview-list-group-filter.js.map
