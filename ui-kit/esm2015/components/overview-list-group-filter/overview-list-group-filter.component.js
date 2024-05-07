import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { hotSafe } from '@sofico-framework/utils';
import { Changes } from 'ngx-reactivetoolkit';
import { combineLatest, of, ReplaySubject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
export class OverviewListGroupFilterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctbGlzdC1ncm91cC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9vdmVydmlldy1saXN0LWdyb3VwLWZpbHRlci9vdmVydmlldy1saXN0LWdyb3VwLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU12RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQTRCeEQsTUFBTSxPQUFPLGdDQUFnQztJQTJCM0MsWUFDVSxnQkFBa0MsRUFDbEMsRUFBZTtRQURmLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQTVCekIsZ0JBQVcsR0FBZ0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsbUJBQWMsR0FBRyxJQUFJLGFBQWEsRUFBbUIsQ0FBQztRQVc3QyxxQkFBZ0IsR0FBc0IsRUFBRSxDQUFDO1FBQ3hDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQW1C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LENBQUMsUUFBUSxDQUFDLE1BQU0sSUFDbkIsQ0FBQyxDQUNOLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUFwTUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUUvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JUOzthQUNGOzs7WUFwQ1EsZ0JBQWdCO1lBRGhCLFdBQVc7OztpQkEwQ2pCLEtBQUs7NEJBQ0wsS0FBSzs0QkFFTCxLQUFLO3VCQUtMLEtBQUs7K0JBQ0wsS0FBSzswQkFDTCxNQUFNOztBQUVjO0lBQXBCLE9BQU8sQ0FBQyxVQUFVLENBQUM7bUVBQTRCO0FBQ25CO0lBQTVCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQzsyRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvdGFiJztcbmltcG9ydCB7XG4gIEdyb3VwRGVmaW5pdGlvbixcbiAgR3JvdXBEZWZpbml0aW9uV2l0aElkZW50aWZpZXJzXG59IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC90eXBlcyc7XG5pbXBvcnQgeyBob3RTYWZlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuaW1wb3J0IHsgQ2hhbmdlcyB9IGZyb20gJ25neC1yZWFjdGl2ZXRvb2xraXQnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1vdmVydmlldy1saXN0LWdyb3VwLXRhYnMnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVVcmxzOiBbJy4vb3ZlcnZpZXctbGlzdC1ncm91cC1maWx0ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtdGFic1wiPlxuICAgICAgPHNvZi10YWJzXG4gICAgICAgIFt0Y109XCJ0Y1wiXG4gICAgICAgIFt0YWJzXT1cInRhYnMkIHwgYXN5bmNcIlxuICAgICAgICBbYWN0aXZlXT1cImFjdGl2ZVRhYiQgfCBhc3luY1wiXG4gICAgICAgIChjbGlja2VkVGFiKT1cIm9uQ2xpY2tlZFRhYigkZXZlbnQpXCJcbiAgICAgID48L3NvZi10YWJzPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJncm91cC1saXN0XCI+XG4gICAgICA8c29mLWlucHV0LXNpbmdsZS1zZWxlY3RcbiAgICAgICAgW3RjXT1cInRjXCJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgICAgICAgW29wdGlvbnNdPVwib3B0aW9ucyQgfCBhc3luY1wiXG4gICAgICAgIFtzZWxlY3RvckxhYmVsXT1cImxhYmVsRm5cIlxuICAgICAgICBbc2VsZWN0b3JWYWx1ZV09XCJ2YWx1ZUZuXCJcbiAgICAgICAgW2NsZWFyYWJsZV09XCJmYWxzZVwiXG4gICAgICAgIChjaGFuZ2VWYWx1ZSk9XCJvbkNoYW5nZVZhbHVlTGlzdCgkZXZlbnQpXCJcbiAgICAgID48L3NvZi1pbnB1dC1zaW5nbGUtc2VsZWN0PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJ2aWV3TGlzdEdyb3VwRmlsdGVyQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSB0aGlzLmZiLmNvbnRyb2wobnVsbCk7XG4gIHNlbGVjdGVkR3JvdXAkID0gbmV3IFJlcGxheVN1YmplY3Q8R3JvdXBEZWZpbml0aW9uPigpO1xuXG4gIEBJbnB1dCgpIHRjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGdyb3VwU2VsZWN0b3I6IChUKSA9PiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgQElucHV0KCkgc2V0IHNlbGVjdGVkR3JvdXAodmFsdWU6IEdyb3VwRGVmaW5pdGlvbikge1xuICAgIHRoaXMuc2VsZWN0ZWRHcm91cCQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh2YWx1ZT8uaWQpO1xuICB9XG5cbiAgQElucHV0KCkgZW50aXRpZXM6IFRbXTtcbiAgQElucHV0KCkgZ3JvdXBEZWZpbml0aW9uczogR3JvdXBEZWZpbml0aW9uW10gPSBbXTtcbiAgQE91dHB1dCgpIHNlbGVjdEdyb3VwID0gbmV3IEV2ZW50RW1pdHRlcjxHcm91cERlZmluaXRpb24+KCk7XG5cbiAgQENoYW5nZXMoJ2VudGl0aWVzJykgZW50aXRpZXMkOiBPYnNlcnZhYmxlPFRbXT47XG4gIEBDaGFuZ2VzKCdncm91cERlZmluaXRpb25zJykgZ3JvdXBEZWZpbml0aW9ucyQ6IE9ic2VydmFibGU8R3JvdXBEZWZpbml0aW9uW10+O1xuXG4gIC8vIHByZXNlbnRhdGlvbiBzdHJlYW1zXG4gIHRhYnMkOiBPYnNlcnZhYmxlPFRhYltdPjtcbiAgYWN0aXZlVGFiJDogT2JzZXJ2YWJsZTxUYWI+O1xuICBvcHRpb25zJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIGxhYmVsRm4gPSB4ID0+IGAke3gubGFiZWx9ICgke3guY291bnR9KWA7XG4gIHZhbHVlRm4gPSB4ID0+IHguaWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBwcmVzZW50YXRpb24gc3RyZWFtc1xuICAgIHRoaXMudGFicyQgPSB0aGlzLmdldFRhYnMkKCk7XG4gICAgdGhpcy5hY3RpdmVUYWIkID0gdGhpcy5nZXRBY3RpdmVUYWIkKCk7XG4gICAgdGhpcy5vcHRpb25zJCA9IHRoaXMuZ2V0T3B0aW9ucyQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge31cblxuICBvbkNoYW5nZVZhbHVlTGlzdChncm91cERlZmluaXRpb25JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RHcm91cC5lbWl0KFxuICAgICAgdGhpcy5ncm91cERlZmluaXRpb25zLmZpbmQoeCA9PiB4LmlkID09PSBncm91cERlZmluaXRpb25JZClcbiAgICApO1xuICB9XG5cbiAgb25DbGlja2VkVGFiKHRhYjogVGFiKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RHcm91cC5lbWl0KHRoaXMuZ3JvdXBEZWZpbml0aW9ucy5maW5kKHggPT4geC5pZCA9PT0gdGFiLmlkKSk7XG4gICAgdGhpcy5zZWxlY3RlZEdyb3VwJC5uZXh0KHRoaXMuZ3JvdXBEZWZpbml0aW9ucy5maW5kKHggPT4geC5pZCA9PT0gdGFiLmlkKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRhYnMkKCk6IE9ic2VydmFibGU8VGFiW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmVudGl0aWVzJC5waXBlKGZpbHRlcih2ID0+ICEhdikpLFxuICAgICAgdGhpcy5ncm91cERlZmluaXRpb25zJC5waXBlKGZpbHRlcih2ID0+ICEhdikpXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW2VudGl0aWVzLCBncm91cERlZmluaXRpb25zXSkgPT4ge1xuICAgICAgICByZXR1cm4gZ3JvdXBEZWZpbml0aW9ucy5tYXAoZ3JvdXBEZWZpbml0aW9uID0+ICh7XG4gICAgICAgICAgbGFiZWw6IGdyb3VwRGVmaW5pdGlvbi5sYWJlbCxcbiAgICAgICAgICB0cmFuc2xhdGlvbjogZ3JvdXBEZWZpbml0aW9uLnRyYW5zbGF0aW9uLFxuICAgICAgICAgIGljb246IGdyb3VwRGVmaW5pdGlvbi5pY29uLFxuICAgICAgICAgIGlkOiBncm91cERlZmluaXRpb24uaWQsXG4gICAgICAgICAgY291bnQ6XG4gICAgICAgICAgICAvLyB0b2RvOiBSZW1vdmUgJ2dyb3VwSWRlbnRpZmllcnMnIGluIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAgICAgICAgICAgIGdyb3VwRGVmaW5pdGlvbi5oYXNPd25Qcm9wZXJ0eSgnZ3JvdXBJZGVudGlmaWVycycpIHx8XG4gICAgICAgICAgICBncm91cERlZmluaXRpb24uaGFzT3duUHJvcGVydHkoJ2dyb3VwSWRlbnRpZmllcnNJbmNsJykgfHxcbiAgICAgICAgICAgIGdyb3VwRGVmaW5pdGlvbi5oYXNPd25Qcm9wZXJ0eSgnZ3JvdXBJZGVudGlmaWVyc0V4Y2wnKVxuICAgICAgICAgICAgICA/IGVudGl0aWVzPy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuZ3JvdXBTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwRGVmaW5pdGlvblRtcCA9IGdyb3VwRGVmaW5pdGlvbiBhcyBHcm91cERlZmluaXRpb25XaXRoSWRlbnRpZmllcnM7XG4gICAgICAgICAgICAgICAgICBsZXQgZ3JvdXBJZGVudGlmaWVyc0luY2x1ZGVkOiAoc3RyaW5nIHwgbnVtYmVyKVtdO1xuICAgICAgICAgICAgICAgICAgbGV0IGdyb3VwSWRlbnRpZmllcnNFeGNsdWRlZDogKHN0cmluZyB8IG51bWJlcilbXTtcblxuICAgICAgICAgICAgICAgICAgLy8gdG9kbzogUmVtb3ZlICdncm91cElkZW50aWZpZXJzJyBpbiBuZXh0IG1ham9yIHJlbGVhc2UuXG4gICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBEZWZpbml0aW9uVG1wLmhhc093blByb3BlcnR5KCdncm91cElkZW50aWZpZXJzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZGVudGlmaWVyc0luY2x1ZGVkID1cbiAgICAgICAgICAgICAgICAgICAgICBncm91cERlZmluaXRpb25UbXAuZ3JvdXBJZGVudGlmaWVycztcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSWRlbnRpZmllcnNJbmNsdWRlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgZ3JvdXBEZWZpbml0aW9uVG1wLmdyb3VwSWRlbnRpZmllcnNJbmNsO1xuICAgICAgICAgICAgICAgICAgICBncm91cElkZW50aWZpZXJzRXhjbHVkZWQgPVxuICAgICAgICAgICAgICAgICAgICAgIGdyb3VwRGVmaW5pdGlvblRtcC5ncm91cElkZW50aWZpZXJzRXhjbDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgICAgICBncm91cElkZW50aWZpZXJzSW5jbFN0cmF0ZWd5LFxuICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSWRlbnRpZmllcnNFeGNsU3RyYXRlZ3lcbiAgICAgICAgICAgICAgICAgICAgfSA9IGdyb3VwRGVmaW5pdGlvblRtcDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5jbHVkZXNGbiA9ICh2OiBzdHJpbmcgfCBudW1iZXIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IuaW5jbHVkZXModik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZWl0aGVyIGluY2wuIG9yIGV4Y2wuIGlzIHVuZGVmaW5lZCB3ZSB3YW50IHRvIGlnbm9yZSBzYWlkIGZpbHRlciBhbmQgcmV0dXJuIHRydWUgKHNlZTogPz8gdHJ1ZSkuXG4gICAgICAgICAgICAgICAgICAgIC8vIEl0J3Mgb25seSBuZWVkZWQgZm9yIHRoZSBpbmNsLiBmaWx0ZXJzIGFzIGZvciBleGNsLiAhdW5kZWZpbmVkID0gdHJ1ZS5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAoKGdyb3VwSWRlbnRpZmllcnNJbmNsU3RyYXRlZ3kgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSWRlbnRpZmllcnNJbmNsU3RyYXRlZ3kgPT09ICdvcidcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZ3JvdXBJZGVudGlmaWVyc0luY2x1ZGVkPy5zb21lKGluY2x1ZGVzRm4pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGdyb3VwSWRlbnRpZmllcnNJbmNsdWRlZD8uZXZlcnkoaW5jbHVkZXNGbikpID8/XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgIChncm91cElkZW50aWZpZXJzRXhjbFN0cmF0ZWd5ID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICBncm91cElkZW50aWZpZXJzRXhjbFN0cmF0ZWd5ID09PSAnb3InXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICFncm91cElkZW50aWZpZXJzRXhjbHVkZWQ/LnNvbWUoaW5jbHVkZXNGbilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogIWdyb3VwSWRlbnRpZmllcnNFeGNsdWRlZD8uZXZlcnkoaW5jbHVkZXNGbikpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSWRlbnRpZmllcnNJbmNsdWRlZD8uaW5jbHVkZXMoc2VsZWN0b3IpICYmXG4gICAgICAgICAgICAgICAgICAgICFncm91cElkZW50aWZpZXJzRXhjbHVkZWQ/LmluY2x1ZGVzKHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KS5sZW5ndGhcbiAgICAgICAgICAgICAgOiBlbnRpdGllcy5sZW5ndGhcbiAgICAgICAgfSkpO1xuICAgICAgfSksXG4gICAgICBob3RTYWZlKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBY3RpdmVUYWIkKCk6IE9ic2VydmFibGU8VGFiPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3RoaXMuc2VsZWN0ZWRHcm91cCQsIHRoaXMudGFicyRdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW3NlbGVjdGVkR3JvdXAsIHRhYnNdKSA9PlxuICAgICAgICAgIHRhYnMuZmluZCh4ID0+IHguaWQgPT09IHNlbGVjdGVkR3JvdXA/LmlkKSB8fCB0YWJzWzBdXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3B0aW9ucyQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmVudGl0aWVzJC5waXBlKGZpbHRlcih2ID0+ICEhdikpLFxuICAgICAgdGhpcy5ncm91cERlZmluaXRpb25zJC5waXBlKGZpbHRlcih2ID0+ICEhdikpXG4gICAgXSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoW2VudGl0aWVzLCBncm91cERlZmluaXRpb25zXSkgPT4ge1xuICAgICAgICBjb25zdCBrZXlzID0gZ3JvdXBEZWZpbml0aW9ucy5tYXAoZ3JvdXBEZWZpbml0aW9uID0+XG4gICAgICAgICAgZ3JvdXBEZWZpbml0aW9uLmxhYmVsXG4gICAgICAgICAgICA/IGAke3RoaXMudGN9LiR7Z3JvdXBEZWZpbml0aW9uLmxhYmVsfWBcbiAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAga2V5cy5tYXAoKHgsIGkpID0+XG4gICAgICAgICAgICB4XG4gICAgICAgICAgICAgID8gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnN0cmVhbSh4KVxuICAgICAgICAgICAgICA6IG9mKGdyb3VwRGVmaW5pdGlvbnNbaV0/LnRyYW5zbGF0aW9uKVxuICAgICAgICAgIClcbiAgICAgICAgKS5waXBlKFxuICAgICAgICAgIG1hcCh0cmFuc2xhdGlvbnMgPT5cbiAgICAgICAgICAgIHRyYW5zbGF0aW9uc1xuICAgICAgICAgICAgICAvLyBhZGQgdHJhbnNsYXRpb25cbiAgICAgICAgICAgICAgLm1hcCgodHJhbnNsYXRpb24sIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLmdyb3VwRGVmaW5pdGlvbnNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0cmFuc2xhdGlvblxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgLy8gYWRkIGNvdW50IChub3QgcGFydCBvZiB0aGUgZ3JvdXAgaWRlbnRpZmllciB0eXBlKVxuICAgICAgICAgICAgICAubWFwKGdyb3VwRGVmaW5pdGlvbiA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLmdyb3VwRGVmaW5pdGlvbixcbiAgICAgICAgICAgICAgICBjb3VudDogZ3JvdXBEZWZpbml0aW9uLmhhc093blByb3BlcnR5KCdncm91cElkZW50aWZpZXJzJylcbiAgICAgICAgICAgICAgICAgID8gZW50aXRpZXM/LmZpbHRlcihpdGVtID0+XG4gICAgICAgICAgICAgICAgICAgICAgKGdyb3VwRGVmaW5pdGlvbiBhcyBHcm91cERlZmluaXRpb25XaXRoSWRlbnRpZmllcnMpPy5ncm91cElkZW50aWZpZXJzPy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBTZWxlY3RvcihpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgIDogZW50aXRpZXMubGVuZ3RoXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19