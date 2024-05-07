import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChild, NgModule } from '@angular/core';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

class SearchBarComponent {
    constructor() {
        this.search = new EventEmitter();
        this.internalValue = '';
    }
    onClear() {
        this.internalValue = '';
        this.search.emit('');
    }
    onKeyPress() {
        this.search.emit(this.internalValue);
    }
    sofFocus() {
        this.searchInput.nativeElement.focus();
    }
}
SearchBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-search-bar',
                template: `
    <div class="input-group mb-3 sof-input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" (click)="searchInput.focus()">
          <sof-svg-icon icon="icon-search" class="search-icon"></sof-svg-icon>
        </span>
      </div>
      <input
        #searchInput
        [(ngModel)]="internalValue"
        (keyup)="onKeyPress()"
        type="text"
        class="form-control"
        [class.clear-input]="internalValue"
        placeholder="{{ placeholder }}"
      />
      <div *ngIf="internalValue" class="input-group-append">
        <span class="input-group-text">
          <button class="btn btn-plain" (click)="onClear()">
            <sof-svg-icon
              icon="icon-cross"
              class="sof-clear-icon"
              size="8"
            ></sof-svg-icon>
          </button>
        </span>
      </div>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: SOF_FOCUS_COMPONENT, useExisting: SearchBarComponent }],
                styles: [".input-group .sof-clear-icon:hover{cursor:pointer}.input-group .input-group-append .input-group-text .btn{display:flex}.input-group .clear-input,.input-group .input-group-prepend .input-group-text{border-right:none}.input-group .input-group-append .input-group-text,.input-group input.form-control{border-left:none}"]
            },] }
];
SearchBarComponent.propDecorators = {
    placeholder: [{ type: Input }],
    search: [{ type: Output }],
    searchInput: [{ type: ViewChild, args: ['searchInput',] }]
};

class SearchBarModule {
}
SearchBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    SvgIconModule,
                    TranslateModule
                ],
                declarations: [SearchBarComponent],
                exports: [SearchBarComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { SearchBarComponent, SearchBarModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-search-bar.js.map
