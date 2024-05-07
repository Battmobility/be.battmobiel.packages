var InputEditorComponent_1;
import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Host, Input, Optional, Output, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { isNullOrUndefined } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import Quill from 'quill';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, mergeMap, take } from 'rxjs/operators';
import { Converter } from 'showdown';
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
export { InputEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvaW5wdXQtZWRpdG9yL2lucHV0LWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JFLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztJQXFCeEIsb0JBQW9CLGtDQUFwQixvQkFBb0I7SUF3RC9CLFlBQ3FCLElBQW1CLEVBQ1gsU0FBb0I7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNYLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFuRHpDLHVCQUFrQixHQUFHLElBQUksYUFBYSxDQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ25ELG1CQUFjLEdBQUcsSUFBSSxhQUFhLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFHdEQsd0RBQXdEO1FBQ3hELHVDQUF1QztRQUMvQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBb0IzQjs7V0FFRztRQUNNLFdBQU0sR0FBRyxPQUFPLENBQUM7UUFFMUI7O1dBRUc7UUFDTSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRTFCOztXQUVHO1FBQ08sZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBUXhDLHNCQUFpQixHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFNMUMsSUFBSSxTQUFTLEVBQUU7WUFDYixTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNoQztJQUNILENBQUM7SUFoREQ7O09BRUc7SUFDSCxJQUFhLEtBQUssQ0FBQyxLQUFhO1FBQzlCLG1HQUFtRztRQUNuRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUE0Q0QsUUFBUTtRQUNOLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhO2FBQ3hDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxXQUFXOztRQUNULFVBQUksSUFBSSxDQUFDLFNBQVMsMENBQUUsYUFBYSxFQUFFO1lBQ2pDLDZGQUE2RjtZQUM3RiwySUFBMkk7WUFDM0ksdUdBQXVHO1lBQ3ZHLDBHQUEwRztZQUMxRyx3RUFBd0U7WUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sc0RBQXNEO1FBQ3RELG1GQUFtRjtRQUNuRixJQUFJLENBQUMsa0JBQWtCO2FBQ3BCLElBQUksQ0FDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxFQUNoRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FDdkI7YUFDQSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7O1lBQ2pCLHNFQUFzRTtZQUN0RSxtRUFBbUU7WUFDbkUsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUN4QjtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxlQUN2QixJQUFJLENBQUMsaUJBQWlCO3FCQUNuQixRQUFRLENBQUMsS0FBSyxDQUFDLDBDQUNkLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUNsQixPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsb0NBQUssRUFBRSxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUM7YUFDekM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTyxHQUFHO2dCQUNSLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUM5QixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7Z0JBQ2xCLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQ3pDLENBQUMsTUFBTSxDQUFDO2dCQUNSLENBQUMsT0FBTyxDQUFDO2FBQ1YsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEdBQUc7Z0JBQ1IsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzlCLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDO2dCQUN6QyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUNsRCxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO2dCQUN6QyxDQUFDLE1BQU0sQ0FBQztnQkFDUixDQUFDLE9BQU8sQ0FBQzthQUNWLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsRUFBRTtZQUNsRSxPQUFPLEVBQUU7Z0JBQ1AsT0FBTzthQUNSO1lBQ0QsS0FBSyxFQUFFLE1BQU07WUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyw2QkFBNkI7U0FDeEQsQ0FBQyxDQUFDO1FBRUgscUVBQXFFO1FBQ3JFLHVDQUF1QztRQUN2QyxNQUFNLHFDQUFxQyxHQUN6Qyw4QkFBOEIsQ0FBQztRQUNqQyxNQUFNLGdDQUFnQyxHQUFHLHlCQUF5QixDQUFDO1FBQ25FLE1BQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUM1RSxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDbEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTs7WUFDaEMsNERBQTREO1lBQzVELDJFQUEyRTtZQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIseURBQXlEO2dCQUN6RCx3RUFBd0U7Z0JBQ3hFLDhCQUE4QjtnQkFDOUIsTUFBTSxJQUFJLGVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsMENBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLG9DQUFLLEVBQUUsQ0FBQztnQkFFNUQ7Ozs7OzttQkFNRztnQkFDSCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQyxNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sT0FBTyxHQUFXLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUVsRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILG1DQUFtQztRQUNuQyx5RUFBeUU7UUFDekUsK0dBQStHO1FBQy9HLCtDQUErQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQzVDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLGdCQUFnQixDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM5Qzs7O21CQUdHO2dCQUNILGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUI7cUJBQ3RDLFlBQVksQ0FBQyxLQUFLLENBQUM7cUJBQ25CLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDN0I7aUJBQU07Z0JBQ0wsZ0JBQWdCLEdBQUcsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksSUFBSSxDQUFDO2FBQ2xDO1lBRUQsYUFBYTtZQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFeEMsdUJBQXVCO1lBQ3ZCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWM7UUFDN0IsbUVBQW1FO1FBQ25FLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0NBQ0YsQ0FBQTs7WUEvUEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBRTVCLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsc0JBQW9CLEVBQUU7aUJBQ3BFOzthQUNGOzs7WUE5QlEsYUFBYSx1QkF3RmpCLFFBQVE7WUF6RmtCLFNBQVMsdUJBMEZuQyxRQUFRLFlBQUksSUFBSTs7O29CQXhDbEIsS0FBSzt5QkFRTCxLQUFLO3NCQUtMLEtBQUs7cUJBS0wsS0FBSzt1QkFLTCxLQUFLOzBCQUtMLE1BQU07dUNBRU4sU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztBQWhEckQsb0JBQW9CO0lBbkJoQyxZQUFZLEVBQUU7R0FtQkYsb0JBQW9CLENBNk9oQztTQTdPWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IHtcbiAgT25Tb2ZGb2N1cyxcbiAgU09GX0ZPQ1VTX0NPTVBPTkVOVFxufSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvZGlyZWN0aXZlcy9mb2N1cyc7XG5pbXBvcnQgeyBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3ksIFVudGlsRGVzdHJveSB9IGZyb20gJ25neC1yZWFjdGl2ZXRvb2xraXQnO1xuaW1wb3J0IFF1aWxsIGZyb20gJ3F1aWxsJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtZXJnZU1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJ3Nob3dkb3duJztcblxuQFVudGlsRGVzdHJveSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtaW5wdXQtZWRpdG9yJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtZWRpdG9yLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJlZGl0b3Itd3JhcHBlclwiXG4gICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJcbiAgICAgICAgaW52YWxpZCB8fFxuICAgICAgICAobmdDb250cm9sPy5pbnZhbGlkICYmIChuZ0NvbnRyb2w/LnRvdWNoZWQgfHwgZm9ybT8uc3VibWl0dGVkKSlcbiAgICAgIFwiXG4gICAgPlxuICAgICAgPGRpdiAjZWRpdG9yQ29udGFpbmVyIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogU09GX0ZPQ1VTX0NPTVBPTkVOVCwgdXNlRXhpc3Rpbmc6IElucHV0RWRpdG9yQ29tcG9uZW50IH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEVkaXRvckNvbXBvbmVudFxuICBpbXBsZW1lbnRzXG4gICAgT25Jbml0LFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgT25EZXN0cm95LFxuICAgIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgIE9uU29mRm9jdXMge1xuICBwcml2YXRlIHF1aWxsQXZhaWxhYmxlU3ViJCA9IG5ldyBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+KDEpO1xuICBwcml2YXRlIHdyaXRlVmFsdWVTdWIkID0gbmV3IFJlcGxheVN1YmplY3Q8c3RyaW5nPigxKTtcblxuICBwcml2YXRlIHF1aWxsOiBRdWlsbDtcbiAgLy8gRGV0ZXJtaW5lIHdoZW4gYSBjaGFuZ2UgbXVzdCBiZSBzZW50IHRvIHRoZSBjb25zdW1lci5cbiAgLy8gU2VlIG9uQ2hhbmdlKCkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gIHByaXZhdGUgc2tpcENoYW5nZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC5cbiAgICovXG4gIEBJbnB1dCgpIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgLy8gS25vd24gaXNzdWU6IHdoZW4gc2V0dGluZyB0aGUgdmFsdWUgbWFudWFsbHkgdGhlIGN1cnNvciBvZiB0aGUgZWRpdG9yIHN0YXJ0cyBhdCB0aGUgZnJvbnQgYWdhaW4uXG4gICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgRGV0ZXJtaW5lcyBpZiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGluIGEgdmFsaWQgc3RhdGUuXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRyb2wuXG4gICAqL1xuICBASW5wdXQoKSBoZWlnaHQgPSAnMTUwcHgnO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBpbi0gYW5kIG91dHB1dCBvZiB0aGlzIGZvcm1jb250cm9sIHNob3VsZCBiZSBtYXJrZG93blxuICAgKi9cbiAgQElucHV0KCkgbWFya2Rvd24gPSBmYWxzZTtcblxuICAvKipcbiAgICogRXZlbnRFbWl0dGVyIHRoYXQgd2lsbCBlbWl0IHRoZSB2YWx1ZSB3aGVuIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2hhbmdlVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdlZGl0b3JDb250YWluZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBlZGl0b3JDb250YWluZXJWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgcHJvcGFnYXRlQ2hhbmdlOiBhbnk7XG4gIHByb3BhZ2F0ZVRvdWNoOiBhbnk7XG5cbiAgcHJpdmF0ZSBtYXJrZG93bkNvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZm9ybTogRm9ybUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbFxuICApIHtcbiAgICBpZiAobmdDb250cm9sKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgc29mRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0b3JDb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudFxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3FsLWVkaXRvcicpWzBdXG4gICAgICAuZm9jdXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbD8udmFsdWVBY2Nlc3Nvcikge1xuICAgICAgLy8gRXZlcnkgdGltZSBhIGNvbnRyb2wgaXMgcmUtY3JlYXRlZCB0aGUgcHJldmlvdXMgd3JpdGVWYWx1ZSByZWZlcmVuY2UocykgaXMgbm90IGNsZWFuZWQgdXAuXG4gICAgICAvLyBTbywgb3ZlciB0aW1lLCBhIGxvdCBvZiB0aGVzZSByZWZlcmVuY2VzIGNhbiBiZSBidWlsdCB1cC4gVGhpcyBtZW1vcnkgbGVhayBpcyBhIGJ1ZyBpbiBBbmd1bGFyJ3MgaW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAgICAvLyBXZSBoaWRlIHRoYXQgcHJvYmxlbSBieSBhc3NpZ25pbmcgYW4gZW1wdHkgZnVuY3Rpb24gdG8gd3JpdGVWYWx1ZSBldmVyeSB0aW1lIHdlIGRlc3Ryb3kgdGhlIGNvbnRyb2wuXG4gICAgICAvLyBBbiBkZXRhaWxlZCBleHBsYW5hdGlvbiBvZiB0aGUgcHJvYmxlbSBjYW4gYmUgZm91bmQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzI5MzM1XG4gICAgICAvLyBUaGUgYnVnIGlzc3VlIGZvciBpdDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjAwMDdcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSA9ICgpID0+IHt9O1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIE9ubHkgYWxsb3cgd3JpdGluZyBvZiB2YWx1ZXMgd2hlbiBxdWlsbCBpcyBkZWZpbmVkLlxuICAgIC8vIEFzIGl0J3MgY3JlYXRlZCBpbiBuZ0FmdGVyVmlld0luaXQgaXQgY291bGQgYmUgdGhhdCB3ZSB3cml0ZSB0aGUgdmFsdWUgdG8gZWFybHkuXG4gICAgdGhpcy5xdWlsbEF2YWlsYWJsZVN1YiRcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtZXJnZU1hcCgoKSA9PiB0aGlzLndyaXRlVmFsdWVTdWIkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkpLFxuICAgICAgICB0YWtlVW50aWxEZXN0cm95KHRoaXMpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBza2lwIGEgdmFsdWUgd2hlbiB0aGVyZSBpc24ndCBhbiBpbml0aWFsIHZhbHVlIHNldFxuICAgICAgICAvLyB0aHJvdWdoIHdyaXRldmFsdWUuIElmIHdlIGRvbid0IGRvIHRoaXMsIHRoZSBmaXJzdCBjaGFuZ2UgaW4gdGhlXG4gICAgICAgIC8vIGVkaXRvciB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpICYmIHZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICB0aGlzLnNraXBDaGFuZ2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1hcmtkb3duKSB7XG4gICAgICAgICAgdGhpcy5xdWlsbC5yb290LmlubmVySFRNTCA9XG4gICAgICAgICAgICB0aGlzLm1hcmtkb3duQ29udmVydGVyXG4gICAgICAgICAgICAgIC5tYWtlSHRtbCh2YWx1ZSlcbiAgICAgICAgICAgICAgPy5yZXBsYWNlKC9cXG4vZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC88IS0tIC0tPi9nLCAnJykgPz8gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5xdWlsbC5yb290LmlubmVySFRNTCA9IHZhbHVlID8/ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBsZXQgdG9vbGJhcjtcbiAgICBpZiAodGhpcy5tYXJrZG93bikge1xuICAgICAgdG9vbGJhciA9IFtcbiAgICAgICAgW3sgaGVhZGVyOiBbMSwgMiwgMywgZmFsc2VdIH1dLFxuICAgICAgICBbJ2JvbGQnLCAnaXRhbGljJ10sXG4gICAgICAgIFt7IGxpc3Q6ICdvcmRlcmVkJyB9LCB7IGxpc3Q6ICdidWxsZXQnIH1dLFxuICAgICAgICBbJ2xpbmsnXSxcbiAgICAgICAgWydjbGVhbiddXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b29sYmFyID0gW1xuICAgICAgICBbeyBoZWFkZXI6IFsxLCAyLCAzLCBmYWxzZV0gfV0sXG4gICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZSddLFxuICAgICAgICBbeyBjb2xvcjogW10gfSwgeyBiYWNrZ3JvdW5kOiBbXSB9LCB7IGFsaWduOiBbXSB9XSxcbiAgICAgICAgW3sgbGlzdDogJ29yZGVyZWQnIH0sIHsgbGlzdDogJ2J1bGxldCcgfV0sXG4gICAgICAgIFsnbGluayddLFxuICAgICAgICBbJ2NsZWFuJ11cbiAgICAgIF07XG4gICAgfVxuICAgIHRoaXMucXVpbGwgPSBuZXcgUXVpbGwodGhpcy5lZGl0b3JDb250YWluZXJWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCwge1xuICAgICAgbW9kdWxlczoge1xuICAgICAgICB0b29sYmFyXG4gICAgICB9LFxuICAgICAgdGhlbWU6ICdzbm93JyxcbiAgICAgIHJlYWRPbmx5OiB0aGlzLmlzRGlzYWJsZWQgLy8gU2FtZSBhcyBkaXNhYmxlIG9yIGVuYWJsZS5cbiAgICB9KTtcblxuICAgIC8vIFJlcXVpcmVkIGZvciBhcHBsaWNhdGlvbnMgd2l0aCBJdnkgZW5hYmxlZCwgYW5kIGRlcGVuZGluZyBvbiB1aWtpdFxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS82NjcxMjcyM1xuICAgIGNvbnN0IHF1aWxsSW1wb3J0QXR0cmlidXRvcnNDbGFzc0JhY2tncm91bmQgPVxuICAgICAgJ2F0dHJpYnV0b3JzL2NsYXNzL2JhY2tncm91bmQnO1xuICAgIGNvbnN0IHF1aWxsSW1wb3J0QXR0cmlidXRvcnNDbGFzc0NvbG9yID0gJ2F0dHJpYnV0b3JzL2NsYXNzL2NvbG9yJztcbiAgICBjb25zdCBCYWNrZ3JvdW5kQ2xhc3MgPSBRdWlsbC5pbXBvcnQocXVpbGxJbXBvcnRBdHRyaWJ1dG9yc0NsYXNzQmFja2dyb3VuZCk7XG4gICAgY29uc3QgQ29sb3JDbGFzcyA9IFF1aWxsLmltcG9ydChxdWlsbEltcG9ydEF0dHJpYnV0b3JzQ2xhc3NDb2xvcik7XG4gICAgUXVpbGwucmVnaXN0ZXIoQmFja2dyb3VuZENsYXNzLCB0cnVlKTtcbiAgICBRdWlsbC5yZWdpc3RlcihDb2xvckNsYXNzLCB0cnVlKTtcblxuICAgIHRoaXMucXVpbGwub24oJ3RleHQtY2hhbmdlJywgKCkgPT4ge1xuICAgICAgLy8gV2hlbiB3cml0ZVZhbHVlKCkgaXMgY2FsbGVkIHRoZSB0ZXh0LWNoYW5nZSBpcyB0cmlnZ2VyZWQuXG4gICAgICAvLyBXZSBkb24ndCB3YW50IHRvIGluZm9ybSB0aGUgY29uc3VtZXIgYWJvdXQgYSBjaGFuZ2UgdGhleSBtYWRlIHRoZW0gc2VsZi5cbiAgICAgIGlmICghdGhpcy5za2lwQ2hhbmdlKSB7XG4gICAgICAgIC8vIFF1aWxsIGVkaXRvciBhbHdheXMgaGFzIGEgXCJcXG5cIiB3aGVuIHRoZXJlIGlzIG5vIHZhbHVlLlxuICAgICAgICAvLyBNdWx0aXBsZSBsaW5lIGJyZWFrcyBjYW4gYmUgYWN0aXZlLCBldmVuIHRob3VnaCB0aGVyZSBpc24ndCBhbnkgdGV4dC5cbiAgICAgICAgLy8gVGhlcmVmb3JlIHJlcGxhY2UgdGhlbSBhbGwuXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnF1aWxsLmdldFRleHQoKT8ucmVwbGFjZSgvXFxuL2csICcnKSA/PyAnJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogUXVpbGwgd291bGQgc29tZXRpbWVzIGNyZWF0ZSBhbiBlbXB0eSBzcGFuIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3NcbiAgICAgICAgICogJ3FsLWN1cnNvcicuIFRoaXMgaXMgYW4gcXVpbGwgc3BlY2lmaWMgdGhpbmcgdGhhdCBpdCB1c2VzIGludGVybmFsbHkuXG4gICAgICAgICAqIFRoaXMgc3BhbiBoYXMgbm8gdXNlIHRvIGJlIHNhdmVkLiBJdCBhbHNvIGdhdmUgcHJvYmxlbXMgd2hlblxuICAgICAgICAgKiBjb252ZXJ0aW5nIHRvIG1hcmtkb3duLiBUaGlzIHBpZWNlIG9mIGNvZGUgcmVtb3ZlcyB0aGVzZSBzcGFucy5cbiAgICAgICAgICogRm91bmQgdGhpcyBzb2x1dGlvbiBvbjogaHR0cHM6Ly9naXRodWIuY29tL3F1aWxsanMvcXVpbGwvaXNzdWVzLzkwM1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgdGVtcENvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGVtcEVkaXRvciA9IG5ldyBRdWlsbCh0ZW1wQ29udCk7XG4gICAgICAgIHRlbXBFZGl0b3Iuc2V0Q29udGVudHModGhpcy5xdWlsbC5nZXRDb250ZW50cygpKTtcbiAgICAgICAgY29uc3QgbmV3SHRtbDogc3RyaW5nID0gdGVtcEVkaXRvci5yb290LmlubmVySFRNTDtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRleHQgIT09ICcnID8gbmV3SHRtbCA6ICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2tpcENoYW5nZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUXVpbGwgZG9lc24ndCBoYXZlIGEgYmx1ciBldmVudCxcbiAgICAvLyBzbyB3ZSBsaXN0ZW4gb24gdGhlIGludGVybmFsIGh0bWwgdGFnIHdoZXJlIHRoZSB1c2VyIGVudGVycyBoaXMgdmFsdWUuXG4gICAgLy8gSXQncyBub3QgcG9zc2libGUgdG8gbGlzdGVuIG9uIFwic2VsZWN0aW9uLWNoYW5nZVwiIGFzIGl0IHRyaWdnZXJzIG5vdCBvbmx5IGFmdGVyIHRoZSB1c2VyIGxlYXZlcyB0aGUgY29udHJvbC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcXVpbGxqcy9xdWlsbC9pc3N1ZXMvMTY4MFxuICAgIHRoaXMucXVpbGwucm9vdC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblRvdWNoKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnF1aWxsQXZhaWxhYmxlU3ViJC5uZXh0KHRydWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLndyaXRlVmFsdWVTdWIkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgb25DaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICBsZXQgbmV3SW50ZXJuYWxWYWx1ZTtcbiAgICAgIGlmICh0aGlzLm1hcmtkb3duICYmICFpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gdHJhbnNsYXRpbmcgdG8gbWFya2Rvd24gdGhlIDxicj4gdGFncyBkb24ndCBnZXQgdHJhbnNsYXRlZCBzb1xuICAgICAgICAgKiB0aGV5IG5lZWQgdG8gYmUgcmVtb3ZlZC5cbiAgICAgICAgICovXG4gICAgICAgIG5ld0ludGVybmFsVmFsdWUgPSB0aGlzLm1hcmtkb3duQ29udmVydGVyXG4gICAgICAgICAgLm1ha2VNYXJrZG93bih2YWx1ZSlcbiAgICAgICAgICAucmVwbGFjZSgvPGJyPlxcblxcbi9nLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdJbnRlcm5hbFZhbHVlID0gdmFsdWUgPz8gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCB2YWx1ZVxuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZS5lbWl0KG5ld0ludGVybmFsVmFsdWUpO1xuXG4gICAgICAvLyBwcm9wYWdhdGUgdGhlIGNoYW5nZVxuICAgICAgaWYgKHRoaXMucHJvcGFnYXRlQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKG5ld0ludGVybmFsVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2goKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgdGhpcy5wcm9wYWdhdGVUb3VjaCkge1xuICAgICAgdGhpcy5wcm9wYWdhdGVUb3VjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyBRdWlsbCBpcyBzZXQgYWZ0ZXIgdmlldyBpbml0LCBpdCdzIHBvc3NpYmxlIGl0IGRvZXNudCBleGlzdCB5ZXQuXG4gICAgaWYgKHRoaXMucXVpbGwpIHtcbiAgICAgIHRoaXMucXVpbGwuZW5hYmxlKCF2YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gdmFsdWU7XG4gIH1cbn1cbiJdfQ==