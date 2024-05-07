import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@sofico-framework/ui-kit/components/button';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { UtilsPipesModule } from '@sofico-framework/utils';

class TabComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.clickTab = new EventEmitter();
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-tab',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <button
      *ngIf="tab?.routerLink | sofIsNullOrUndefined; else withLink"
      sofButton
      type="button"
      [icon]="tab.icon"
      [class.selected]="isSelected"
      (click)="clickTab.emit()"
    >
      <span
        class="pr-2"
        *ngIf="!(tab.count | sofIsNullOrUndefined)"
        [class.pl-2]="!(tab.icon | sofIsNullOrUndefined)"
        >{{ tab.count }}</span
      >
      <span class="title" *ngIf="!(tab.label | sofIsNullOrUndefined)">{{
        tc + '.' + tab.label | translate
      }}</span>
      <span class="title" *ngIf="!(tab.translation | sofIsNullOrUndefined)">{{
        tab.translation
      }}</span>
    </button>
    <ng-template #withLink>
      <a
        sofButton
        type="button"
        [icon]="tab.icon"
        [routerLink]="tab.routerLink"
        [queryParams]="tab.queryParams"
        routerLinkActive="selected"
        (click)="clickTab.emit()"
      >
        <span
          class="counter pr-2"
          *ngIf="!(tab.count | sofIsNullOrUndefined)"
          [class.pl-2]="!(tab.icon | sofIsNullOrUndefined)"
          >{{ tab.count }}</span
        >
        <ng-container *ngIf="!(tab.label | sofIsNullOrUndefined)">
          {{ tc + '.' + tab.label | translate }}
        </ng-container>
        <ng-container *ngIf="!(tab.translation | sofIsNullOrUndefined)">
          {{ tab.translation }}
        </ng-container>
      </a>
    </ng-template>
  `,
                styles: [":host{display:block}:host a,:host button{display:flex;align-items:center;padding:.375rem 1.5rem;border-width:1px 1px 2px;border-style:solid}:host a:hover,:host button:hover{text-decoration:none}:host a:focus,:host button:focus{outline:none;box-shadow:none}:host a.selected,:host button.selected{padding-top:.5rem;padding-bottom:.5rem;cursor:default;font-weight:700;border-bottom-width:4px}"]
            },] }
];
TabComponent.ctorParameters = () => [
    { type: ElementRef }
];
TabComponent.propDecorators = {
    tc: [{ type: Input }],
    tab: [{ type: Input }],
    isSelected: [{ type: Input }],
    clickTab: [{ type: Output }]
};

class TabModule {
}
TabModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SvgIconModule,
                    ButtonModule,
                    UtilsPipesModule,
                    RouterModule,
                    TranslateModule
                ],
                declarations: [TabComponent],
                exports: [TabComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { TabComponent, TabModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-tab.js.map
