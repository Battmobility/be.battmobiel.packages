import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { InputCheckboxModule } from '@sofico-framework/ui-kit/components/input-checkbox';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class InputCheckboxTreeComponent {
    constructor() {
        this.options$ = new BehaviorSubject([]);
        this.values$ = new BehaviorSubject([]);
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        /**
         * EventEmitter that will emit the options who have expanded and who not.
         */
        this.changeOptionExpanded = new EventEmitter();
        this.enhancedOptions$ = combineLatest([
            this.options$.pipe(filter(v => !!v)),
            this.values$
        ]).pipe(map(([options, values]) => {
            return options.map(option => {
                var _a, _b;
                const hasSelectedChildren = (_a = option.children) === null || _a === void 0 ? void 0 : _a.some(childOption => {
                    var _a, _b, _c;
                    return !!((_c = (_b = (_a = values === null || values === void 0 ? void 0 : values.find(v => v.id === option.id)) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.find(childValue => childValue.id === childOption.id)) === null || _c === void 0 ? void 0 : _c.selected);
                });
                return {
                    id: option.id,
                    expanded: option.expanded,
                    indeterminate: hasSelectedChildren,
                    label: option.label,
                    selected: !!(values === null || values === void 0 ? void 0 : values.find(v => v.id === option.id && v.selected)),
                    children: (_b = option.children) === null || _b === void 0 ? void 0 : _b.map(childOption => {
                        var _a, _b, _c;
                        return {
                            id: childOption.id,
                            label: childOption.label,
                            selected: !!((_c = (_b = (_a = values === null || values === void 0 ? void 0 : values.find(v => v.id === option.id)) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.find(childValue => childValue.id === childOption.id)) === null || _c === void 0 ? void 0 : _c.selected)
                        };
                    })
                };
            });
        }));
        this.trackByFn = i => i;
    }
    /**
     *  Sets the the available options (checkboxes).
     */
    set options(v) {
        this.options$.next(v);
    }
    /**
     * Determines if the input is checked or not.
     */
    set value(value) {
        this.writeValue(value);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    writeValue(tree) {
        this.values$.next(tree);
    }
    onChange(parent, current) {
        var _a;
        if (!this.isDisabled) {
            const oldValues = this.values$.getValue();
            let updatedParent;
            if (parent === null) {
                // update parent
                updatedParent = {
                    id: current.id,
                    selected: !(current === null || current === void 0 ? void 0 : current.selected),
                    children: current.children.map(child => ({
                        id: child.id,
                        selected: false
                    }))
                };
            }
            else {
                updatedParent = {
                    id: parent.id,
                    selected: false,
                    children: (_a = parent.children) === null || _a === void 0 ? void 0 : _a.map(child => (child === null || child === void 0 ? void 0 : child.id) === (current === null || current === void 0 ? void 0 : current.id)
                        ? { id: current.id, selected: !(current === null || current === void 0 ? void 0 : current.selected) }
                        : { id: child.id, selected: child.selected })
                };
            }
            const newValues = oldValues.map(value => (value === null || value === void 0 ? void 0 : value.id) === updatedParent.id ? updatedParent : value);
            this.values$.next(newValues);
            if (this.propagateChange) {
                this.propagateChange(newValues);
            }
        }
    }
    toggleCollapseState(option) {
        const options = this.options$
            .getValue()
            .map(o => o.id === option.id ? Object.assign(Object.assign({}, option), { expanded: !o.expanded }) : o);
        this.options$.next(options);
        this.changeOptionExpanded.emit(options);
    }
}
InputCheckboxTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-checkbox-tree',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div
      *ngFor="let parent of enhancedOptions$ | async; trackBy: trackByFn"
      class="mb-2"
    >
      <div class="d-flex align-items-center">
        <sof-input-checkbox
          [label]="parent.label"
          [selected]="parent?.selected"
          [indeterminate]="parent?.indeterminate"
          [isDisabled]="isDisabled"
          class="d-block mr-2"
          (changeValue)="onChange(null, parent)"
        ></sof-input-checkbox>
        <button
          class="btn btn-plain ml-1"
          *ngIf="parent?.children?.length > 0"
          (click)="toggleCollapseState(parent)"
          type="button"
        >
          <sof-svg-icon
            class="icon-toggle"
            size="12"
            [icon]="'icon-chevron-' + (parent.expanded ? 'up' : 'down')"
          ></sof-svg-icon>
        </button>
      </div>
      <div *ngIf="parent?.expanded" class="pl-4">
        <ng-container *ngFor="let child of parent.children; trackBy: trackByFn">
          <sof-input-checkbox
            class="d-block mt-1"
            [label]="child.label"
            [selected]="child.selected"
            [isDisabled]="isDisabled"
            (changeValue)="onChange(parent, child)"
          ></sof-input-checkbox>
        </ng-container>
      </div>
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: InputCheckboxTreeComponent,
                        multi: true
                    }
                ],
                styles: [".icon-toggle{cursor:pointer}"]
            },] }
];
InputCheckboxTreeComponent.propDecorators = {
    isDisabled: [{ type: Input }],
    options: [{ type: Input }],
    invalid: [{ type: Input }],
    value: [{ type: Input }],
    changeValue: [{ type: Output }],
    changeOptionExpanded: [{ type: Output }]
};

class InputCheckboxTreeModule {
}
InputCheckboxTreeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, InputCheckboxModule, SvgIconModule],
                declarations: [InputCheckboxTreeComponent],
                exports: [InputCheckboxTreeComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputCheckboxTreeComponent, InputCheckboxTreeModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-checkbox-tree.js.map
