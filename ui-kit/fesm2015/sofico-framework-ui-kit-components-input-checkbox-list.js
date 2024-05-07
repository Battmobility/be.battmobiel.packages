import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChildren, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { InputCheckboxModule } from '@sofico-framework/ui-kit/components/input-checkbox';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class InputCheckboxListComponent {
    constructor() {
        this.options$ = new BehaviorSubject([]);
        this.values$ = new BehaviorSubject([]);
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        this.enhancedOptions$ = combineLatest([
            this.options$.pipe(filter(v => !!v)),
            this.values$
        ]).pipe(map(([options, values]) => {
            return options.map(option => {
                return {
                    id: option.id,
                    label: option.label,
                    selected: (values === null || values === void 0 ? void 0 : values.indexOf(option.id)) > -1
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
    sofFocus() {
        var _a;
        (_a = this.checkboxes.first) === null || _a === void 0 ? void 0 : _a.sofFocus();
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
    writeValue(list) {
        this.values$.next(list);
    }
    onChange(option, selected) {
        var _a;
        if (!this.isDisabled) {
            const oldValues = (_a = this.values$.getValue()) !== null && _a !== void 0 ? _a : [];
            const newValues = selected
                ? oldValues.filter(value => value !== option.id)
                : [...oldValues, option.id];
            this.values$.next(newValues);
            if (this.propagateChange) {
                this.propagateChange(newValues);
            }
        }
    }
}
InputCheckboxListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-checkbox-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-input-checkbox
      #checkboxes
      *ngFor="let option of enhancedOptions$ | async; trackBy: trackByFn"
      [label]="option.label"
      [selected]="option.selected"
      [isDisabled]="isDisabled"
      (changeValue)="onChange(option, option.selected)"
    ></sof-input-checkbox>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: InputCheckboxListComponent,
                        multi: true
                    },
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputCheckboxListComponent }
                ],
                styles: [".icon-toggle{cursor:pointer}sof-input-checkbox{display:block;margin-bottom:.5rem}sof-input-checkbox:last-of-type{margin-bottom:0}"]
            },] }
];
InputCheckboxListComponent.propDecorators = {
    isDisabled: [{ type: Input }],
    options: [{ type: Input }],
    invalid: [{ type: Input }],
    value: [{ type: Input }],
    changeValue: [{ type: Output }],
    checkboxes: [{ type: ViewChildren, args: ['checkboxes',] }]
};

class InputCheckboxListModule {
}
InputCheckboxListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, InputCheckboxModule, SvgIconModule],
                declarations: [InputCheckboxListComponent],
                exports: [InputCheckboxListComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputCheckboxListComponent, InputCheckboxListModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-checkbox-list.js.map
