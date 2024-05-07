import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
export class TabComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvdGFiL3RhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBdUR2QixNQUFNLE9BQU8sWUFBWTtJQU12QixZQUFtQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRi9CLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRUksQ0FBQzs7O1lBMUQ5QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q1Q7O2FBRUY7OztZQTFEQyxVQUFVOzs7aUJBNERULEtBQUs7a0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWIgfSBmcm9tICcuL3R5cGVzL3RhYi50eXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLXRhYicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b25cbiAgICAgICpuZ0lmPVwidGFiPy5yb3V0ZXJMaW5rIHwgc29mSXNOdWxsT3JVbmRlZmluZWQ7IGVsc2Ugd2l0aExpbmtcIlxuICAgICAgc29mQnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIFtpY29uXT1cInRhYi5pY29uXCJcbiAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpc1NlbGVjdGVkXCJcbiAgICAgIChjbGljayk9XCJjbGlja1RhYi5lbWl0KClcIlxuICAgID5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzPVwicHItMlwiXG4gICAgICAgICpuZ0lmPVwiISh0YWIuY291bnQgfCBzb2ZJc051bGxPclVuZGVmaW5lZClcIlxuICAgICAgICBbY2xhc3MucGwtMl09XCIhKHRhYi5pY29uIHwgc29mSXNOdWxsT3JVbmRlZmluZWQpXCJcbiAgICAgICAgPnt7IHRhYi5jb3VudCB9fTwvc3BhblxuICAgICAgPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiICpuZ0lmPVwiISh0YWIubGFiZWwgfCBzb2ZJc051bGxPclVuZGVmaW5lZClcIj57e1xuICAgICAgICB0YyArICcuJyArIHRhYi5sYWJlbCB8IHRyYW5zbGF0ZVxuICAgICAgfX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCIgKm5nSWY9XCIhKHRhYi50cmFuc2xhdGlvbiB8IHNvZklzTnVsbE9yVW5kZWZpbmVkKVwiPnt7XG4gICAgICAgIHRhYi50cmFuc2xhdGlvblxuICAgICAgfX08L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPG5nLXRlbXBsYXRlICN3aXRoTGluaz5cbiAgICAgIDxhXG4gICAgICAgIHNvZkJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgW2ljb25dPVwidGFiLmljb25cIlxuICAgICAgICBbcm91dGVyTGlua109XCJ0YWIucm91dGVyTGlua1wiXG4gICAgICAgIFtxdWVyeVBhcmFtc109XCJ0YWIucXVlcnlQYXJhbXNcIlxuICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwic2VsZWN0ZWRcIlxuICAgICAgICAoY2xpY2spPVwiY2xpY2tUYWIuZW1pdCgpXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzcz1cImNvdW50ZXIgcHItMlwiXG4gICAgICAgICAgKm5nSWY9XCIhKHRhYi5jb3VudCB8IHNvZklzTnVsbE9yVW5kZWZpbmVkKVwiXG4gICAgICAgICAgW2NsYXNzLnBsLTJdPVwiISh0YWIuaWNvbiB8IHNvZklzTnVsbE9yVW5kZWZpbmVkKVwiXG4gICAgICAgICAgPnt7IHRhYi5jb3VudCB9fTwvc3BhblxuICAgICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhKHRhYi5sYWJlbCB8IHNvZklzTnVsbE9yVW5kZWZpbmVkKVwiPlxuICAgICAgICAgIHt7IHRjICsgJy4nICsgdGFiLmxhYmVsIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiISh0YWIudHJhbnNsYXRpb24gfCBzb2ZJc051bGxPclVuZGVmaW5lZClcIj5cbiAgICAgICAgICB7eyB0YWIudHJhbnNsYXRpb24gfX1cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGM6IHN0cmluZztcbiAgQElucHV0KCkgdGFiOiBUYWI7XG4gIEBJbnB1dCgpIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBjbGlja1RhYiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbn1cbiJdfQ==