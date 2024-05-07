(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@sofico-framework/ui-kit/components/svg-icon')) :
  typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/editable-chip', ['exports', '@angular/core', '@angular/common', '@sofico-framework/ui-kit/components/svg-icon'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['editable-chip'] = {}), global.ng.core, global.ng.common, global['sofico-framework']['ui-kit'].components['svg-icon']));
}(this, (function (exports, core, common, svgIcon) { 'use strict';

  var EditableChipComponent = /** @class */ (function () {
      function EditableChipComponent() {
          this.editChip = new core.EventEmitter();
          this.removeChip = new core.EventEmitter();
          this.invalidChip = new core.EventEmitter();
          this.wrongFormat = false;
          this.editMode = false;
      }
      Object.defineProperty(EditableChipComponent.prototype, "label", {
          set: function (label) {
              this.internalLabel = label;
              if (this.internalValidationRegex) {
                  this.wrongFormat = !this.internalLabel.match(this.internalValidationRegex);
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(EditableChipComponent.prototype, "validationRegex", {
          set: function (regex) {
              this.internalValidationRegex = regex;
              if (this.internalLabel) {
                  this.wrongFormat = !this.internalLabel.match(this.internalValidationRegex);
              }
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(EditableChipComponent.prototype, "chipEdit", {
          set: function (element) {
              if (element) {
                  this.chipEditElement = element;
                  element.nativeElement.focus();
              }
          },
          enumerable: false,
          configurable: true
      });
      EditableChipComponent.prototype.ngOnInit = function () { };
      EditableChipComponent.prototype.toggleEdit = function () {
          this.editMode = true;
      };
      EditableChipComponent.prototype.onSubmit = function (event) {
          var _a;
          var chipValue = (_a = this.chipEditElement.nativeElement) === null || _a === void 0 ? void 0 : _a.innerText;
          var matchesRegex = !!chipValue.match(this.internalValidationRegex);
          if (!!chipValue && matchesRegex) {
              this.editChip.emit(chipValue);
              this.editMode = false;
              this.invalidChip.emit(false);
          }
          else {
              this.invalidChip.emit(true);
          }
          if (event) {
              event.preventDefault();
              event.stopPropagation();
          }
      };
      EditableChipComponent.prototype.onCancel = function () {
          this.chipEditElement.nativeElement.innerText = this.label;
          this.editMode = false;
          this.invalidChip.emit(false);
      };
      return EditableChipComponent;
  }());
  EditableChipComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'sof-editable-chip',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  template: "\n    <div (click)=\"toggleEdit()\">\n      <div\n        class=\"badge badge-pill d-block\"\n        [class.badge-pill-valid]=\"!wrongFormat\"\n        [class.badge-edit]=\"editMode\"\n        [class.badge-pill-invalid]=\"wrongFormat\"\n      >\n        <div class=\"badge-label\" *ngIf=\"!editMode; else edit\">\n          <span class=\"label-text\">{{ internalLabel }}</span>\n          <sof-svg-icon\n            class=\"ml-1\"\n            icon=\"icon-cross\"\n            size=\"8\"\n            (click)=\"removeChip.emit(internalLabel)\"\n          ></sof-svg-icon>\n        </div>\n        <ng-template #edit>\n          <div\n            #chipEdit\n            class=\"chip-edit\"\n            contenteditable=\"true\"\n            spellcheck=\"false\"\n            (keydown.enter)=\"onSubmit($event)\"\n            (keydown.escape)=\"onCancel()\"\n            (blur)=\"onCancel()\"\n          >\n            {{ internalLabel }}\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  ",
                  styles: [".badge{min-width:30px}.badge-pill{font-size:.75rem;border:1px solid;padding:.5rem;margin:.25rem}.badge-edit{background-color:#fff}.badge-label{display:flex;flex-wrap:nowrap;align-items:center}.label-text{text-overflow:ellipsis}.chip-edit,.label-text{overflow:hidden}.chip-edit:focus{outline:none;background-color:#fff}sof-svg-icon{cursor:pointer}"]
              },] }
  ];
  EditableChipComponent.propDecorators = {
      label: [{ type: core.Input }],
      validationRegex: [{ type: core.Input }],
      editChip: [{ type: core.Output }],
      removeChip: [{ type: core.Output }],
      invalidChip: [{ type: core.Output }],
      chipEdit: [{ type: core.ViewChild, args: ['chipEdit',] }]
  };

  var EditableChipModule = /** @class */ (function () {
      function EditableChipModule() {
      }
      return EditableChipModule;
  }());
  EditableChipModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [EditableChipComponent],
                  imports: [common.CommonModule, svgIcon.SvgIconModule],
                  exports: [EditableChipComponent]
              },] }
  ];

  /**
   * Generated bundle index. Do not edit.
   */

  exports.EditableChipComponent = EditableChipComponent;
  exports.EditableChipModule = EditableChipModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-editable-chip.umd.js.map
