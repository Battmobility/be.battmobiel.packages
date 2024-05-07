import { __decorate } from 'tslib';
import { EventEmitter, Component, Optional, Host, Input, Output, ViewChild, ElementRef, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { isNullOrUndefined } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import Quill from 'quill';
import { ReplaySubject } from 'rxjs';
import { take, mergeMap, distinctUntilChanged } from 'rxjs/operators';
import { Converter } from 'showdown';
import { CommonModule } from '@angular/common';

var InputEditorComponent_1;
let InputEditorComponent = InputEditorComponent_1 = class InputEditorComponent {
    constructor(form, ngControl) {
        this.form = form;
        this.ngControl = ngControl;
        this.quillAvailableSub$ = new ReplaySubject(1);
        this.writeValueSub$ = new ReplaySubject(1);
        // Determine when a change must be sent to the consumer.
        // See onChange() for more information.
        this.skipChange = false;
        /**
         * Determines the height of the control.
         */
        this.height = '150px';
        /**
         * Determines if the in- and output of this formcontrol should be markdown
         */
        this.markdown = false;
        /**
         * EventEmitter that will emit the value when changed.
         */
        this.changeValue = new EventEmitter();
        this.markdownConverter = new Converter();
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    /**
     * Determines the value of the control.
     */
    set value(value) {
        // Known issue: when setting the value manually the cursor of the editor starts at the front again.
        this.writeValue(value);
    }
    sofFocus() {
        this.editorContainerViewChild.nativeElement
            .getElementsByClassName('ql-editor')[0]
            .focus();
    }
    ngOnDestroy() {
        var _a;
        if ((_a = this.ngControl) === null || _a === void 0 ? void 0 : _a.valueAccessor) {
            // Every time a control is re-created the previous writeValue reference(s) is not cleaned up.
            // So, over time, a lot of these references can be built up. This memory leak is a bug in Angular's implementation of ControlValueAccessor.
            // We hide that problem by assigning an empty function to writeValue every time we destroy the control.
            // An detailed explanation of the problem can be found here: https://github.com/angular/angular/pull/29335
            // The bug issue for it: https://github.com/angular/angular/issues/20007
            this.ngControl.valueAccessor.writeValue = () => { };
        }
    }
    ngOnInit() {
        // Only allow writing of values when quill is defined.
        // As it's created in ngAfterViewInit it could be that we write the value to early.
        this.quillAvailableSub$
            .pipe(take(1), mergeMap(() => this.writeValueSub$.pipe(distinctUntilChanged())), takeUntilDestroy(this))
            .subscribe(value => {
            var _a, _b;
            // We don't want to skip a value when there isn't an initial value set
            // through writevalue. If we don't do this, the first change in the
            // editor will be ignored.
            if (!isNullOrUndefined(value) && value.trim() !== '') {
                this.skipChange = true;
            }
            if (this.markdown) {
                this.quill.root.innerHTML = (_b = (_a = this.markdownConverter
                    .makeHtml(value)) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, '').replace(/<!-- -->/g, '')) !== null && _b !== void 0 ? _b : '';
            }
            else {
                this.quill.root.innerHTML = value !== null && value !== void 0 ? value : '';
            }
        });
    }
    ngAfterViewInit() {
        let toolbar;
        if (this.markdown) {
            toolbar = [
                [{ header: [1, 2, 3, false] }],
                ['bold', 'italic'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link'],
                ['clean']
            ];
        }
        else {
            toolbar = [
                [{ header: [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ color: [] }, { background: [] }, { align: [] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link'],
                ['clean']
            ];
        }
        this.quill = new Quill(this.editorContainerViewChild.nativeElement, {
            modules: {
                toolbar
            },
            theme: 'snow',
            readOnly: this.isDisabled // Same as disable or enable.
        });
        // Required for applications with Ivy enabled, and depending on uikit
        // https://stackoverflow.com/a/66712723
        const quillImportAttributorsClassBackground = 'attributors/class/background';
        const quillImportAttributorsClassColor = 'attributors/class/color';
        const BackgroundClass = Quill.import(quillImportAttributorsClassBackground);
        const ColorClass = Quill.import(quillImportAttributorsClassColor);
        Quill.register(BackgroundClass, true);
        Quill.register(ColorClass, true);
        this.quill.on('text-change', () => {
            var _a, _b;
            // When writeValue() is called the text-change is triggered.
            // We don't want to inform the consumer about a change they made them self.
            if (!this.skipChange) {
                // Quill editor always has a "\n" when there is no value.
                // Multiple line breaks can be active, even though there isn't any text.
                // Therefore replace them all.
                const text = (_b = (_a = this.quill.getText()) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, '')) !== null && _b !== void 0 ? _b : '';
                /**
                 * Quill would sometimes create an empty span element with the class
                 * 'ql-cursor'. This is an quill specific thing that it uses internally.
                 * This span has no use to be saved. It also gave problems when
                 * converting to markdown. This piece of code removes these spans.
                 * Found this solution on: https://github.com/quilljs/quill/issues/903
                 */
                const tempCont = document.createElement('div');
                const tempEditor = new Quill(tempCont);
                tempEditor.setContents(this.quill.getContents());
                const newHtml = tempEditor.root.innerHTML;
                this.onChange(text !== '' ? newHtml : '');
            }
            else {
                this.skipChange = false;
            }
        });
        // Quill doesn't have a blur event,
        // so we listen on the internal html tag where the user enters his value.
        // It's not possible to listen on "selection-change" as it triggers not only after the user leaves the control.
        // https://github.com/quilljs/quill/issues/1680
        this.quill.root.addEventListener('blur', () => {
            this.onTouch();
        });
        this.quillAvailableSub$.next(true);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouch = fn;
    }
    writeValue(value) {
        this.writeValueSub$.next(value);
    }
    onChange(value) {
        if (!this.isDisabled) {
            let newInternalValue;
            if (this.markdown && !isNullOrUndefined(value)) {
                /**
                 * When translating to markdown the <br> tags don't get translated so
                 * they need to be removed.
                 */
                newInternalValue = this.markdownConverter
                    .makeMarkdown(value)
                    .replace(/<br>\n\n/g, '');
            }
            else {
                newInternalValue = value !== null && value !== void 0 ? value : null;
            }
            // emit value
            this.changeValue.emit(newInternalValue);
            // propagate the change
            if (this.propagateChange) {
                this.propagateChange(newInternalValue);
            }
        }
    }
    onTouch() {
        if (!this.isDisabled && this.propagateTouch) {
            this.propagateTouch();
        }
    }
    setDisabledState(value) {
        // Quill is set after view init, it's possible it doesnt exist yet.
        if (this.quill) {
            this.quill.enable(!value);
        }
        this.isDisabled = value;
    }
};
InputEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-editor',
                template: `
    <div
      class="editor-wrapper"
      [class.is-invalid]="
        invalid ||
        (ngControl?.invalid && (ngControl?.touched || form?.submitted))
      "
    >
      <div #editorContainer [style.height]="height"></div>
    </div>
  `,
                providers: [
                    { provide: SOF_FOCUS_COMPONENT, useExisting: InputEditorComponent_1 }
                ],
                styles: [":host{display:block}"]
            },] }
];
InputEditorComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Host }] }
];
InputEditorComponent.propDecorators = {
    value: [{ type: Input }],
    isDisabled: [{ type: Input }],
    invalid: [{ type: Input }],
    height: [{ type: Input }],
    markdown: [{ type: Input }],
    changeValue: [{ type: Output }],
    editorContainerViewChild: [{ type: ViewChild, args: ['editorContainer', { read: ElementRef, static: true },] }]
};
InputEditorComponent = InputEditorComponent_1 = __decorate([
    UntilDestroy()
], InputEditorComponent);

class InputEditorModule {
}
InputEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [InputEditorComponent],
                exports: [InputEditorComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputEditorComponent, InputEditorModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-input-editor.js.map
