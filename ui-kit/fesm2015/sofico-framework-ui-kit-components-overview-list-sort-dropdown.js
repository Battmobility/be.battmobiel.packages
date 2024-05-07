import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@sofico-framework/ui-kit/components/button';
import { InputSingleSelectModule } from '@sofico-framework/ui-kit/components/input-single-select';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class OverviewListSortDropdownComponent {
    constructor(translateService, fb) {
        this.translateService = translateService;
        this.fb = fb;
        this.form = this.fb.control(0);
        this.changeSorting = new EventEmitter();
        this.selectorLabel = x => x === null || x === void 0 ? void 0 : x.translation;
        this.selectorValue = x => x === null || x === void 0 ? void 0 : x.index;
    }
    set overviewListConfig(config) {
        var _a, _b, _c, _d, _e, _f;
        this.selectors = (_b = (_a = config === null || config === void 0 ? void 0 : config.functionalProps) === null || _a === void 0 ? void 0 : _a.filter(prop => prop.sortable)) === null || _b === void 0 ? void 0 : _b.map(prop => prop === null || prop === void 0 ? void 0 : prop.selector);
        this.plainSorts = (_d = (_c = config === null || config === void 0 ? void 0 : config.functionalProps) === null || _c === void 0 ? void 0 : _c.filter(prop => prop.sortable)) === null || _d === void 0 ? void 0 : _d.map(prop => prop === null || prop === void 0 ? void 0 : prop.plainSort);
        this.labels = (_f = (_e = config === null || config === void 0 ? void 0 : config.functionalProps) === null || _e === void 0 ? void 0 : _e.filter(prop => prop.sortable)) === null || _f === void 0 ? void 0 : _f.map(prop => prop === null || prop === void 0 ? void 0 : prop.label);
        this.dropDownChoices$ = this.mapToTranslatedDropDownChoices();
    }
    changeDirection() {
        var _a, _b, _c;
        this.changeSorting.emit({
            prop: (_a = this.sorting) === null || _a === void 0 ? void 0 : _a.prop,
            plainSort: (_b = this.sorting) === null || _b === void 0 ? void 0 : _b.plainSort,
            order: ((_c = this.sorting) === null || _c === void 0 ? void 0 : _c.order) === 'asc' ? 'desc' : 'asc'
        });
    }
    onChange(obj) {
        var _a;
        this.changeSorting.emit({
            prop: this.selectors[obj.index],
            plainSort: this.plainSorts[obj.index],
            order: (_a = this.sorting) === null || _a === void 0 ? void 0 : _a.order
        });
    }
    mapToTranslatedDropDownChoices() {
        const arrayReadyTranslate = this.labels.map(label => this.tc + '.' + label);
        return this.translateService.stream(arrayReadyTranslate).pipe(map(obj => Object.keys(obj).map((key, index) => {
            return {
                translation: obj[key],
                index
            };
        })));
    }
}
OverviewListSortDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-overview-list-sort-dropdown',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button
          sofButton
          [icon]="
            sorting?.order === 'asc'
              ? 'icon-sort-amount-asc'
              : 'icon-sort-amount-desc'
          "
          class="btn"
          type="button"
          (click)="changeDirection()"
        ></button>
      </div>
      <sof-input-single-select
        [tc]="tc"
        class="form-control"
        [formControl]="form"
        [options]="dropDownChoices$ | async"
        [selectorLabel]="selectorLabel"
        [selectorValue]="selectorValue"
        [clearable]="false"
        [showSearch]="false"
        (changeObjectValue)="onChange($event)"
      ></sof-input-single-select>
    </div>
  `,
                styles: [".input-group{background-color:#fff;border-radius:.25rem}.input-group .btn{display:flex;align-items:center;border:1px solid #ced4da;border-right:0}.input-group sof-input-single-select.form-control{padding:0;border:0}"]
            },] }
];
OverviewListSortDropdownComponent.ctorParameters = () => [
    { type: TranslateService },
    { type: FormBuilder }
];
OverviewListSortDropdownComponent.propDecorators = {
    tc: [{ type: Input }],
    sorting: [{ type: Input }],
    overviewListConfig: [{ type: Input }],
    changeSorting: [{ type: Output }]
};

class OverviewListSortDropdownModule {
}
OverviewListSortDropdownModule.decorators = [
    { type: NgModule, args: [{
                declarations: [OverviewListSortDropdownComponent],
                exports: [OverviewListSortDropdownComponent],
                imports: [
                    CommonModule,
                    SvgIconModule,
                    TranslateModule,
                    InputSingleSelectModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ButtonModule
                ]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { OverviewListSortDropdownComponent, OverviewListSortDropdownModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-overview-list-sort-dropdown.js.map
