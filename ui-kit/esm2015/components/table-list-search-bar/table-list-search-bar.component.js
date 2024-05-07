import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
export class TableListSearchBarComponent {
    constructor() {
        this.changeTerm = new EventEmitter();
    }
    sofFocus() {
        this.searchBar.sofFocus();
    }
}
TableListSearchBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-table-list-search-bar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-search-bar
      #searchBar
      [placeholder]="tc + '.FILTER' | translate"
      (search)="changeTerm.emit($event)"
    ></sof-search-bar>
  `,
                providers: [
                    {
                        provide: SOF_FOCUS_COMPONENT,
                        useExisting: TableListSearchBarComponent
                    }
                ],
                styles: [""]
            },] }
];
TableListSearchBarComponent.ctorParameters = () => [];
TableListSearchBarComponent.propDecorators = {
    tc: [{ type: Input }],
    changeTerm: [{ type: Output }],
    searchBar: [{ type: ViewChild, args: ['searchBar',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbGlzdC1zZWFyY2gtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvdGFibGUtbGlzdC1zZWFyY2gtYmFyL3RhYmxlLWxpc3Qtc2VhcmNoLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFFTCxtQkFBbUIsRUFDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQW9CbkQsTUFBTSxPQUFPLDJCQUEyQjtJQUt0QztRQUhVLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBR25DLENBQUM7SUFFaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7R0FNVDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjt3QkFDNUIsV0FBVyxFQUFFLDJCQUEyQjtxQkFDekM7aUJBQ0Y7O2FBRUY7Ozs7aUJBRUUsS0FBSzt5QkFDTCxNQUFNO3dCQUVOLFNBQVMsU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hCYXJDb21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9zZWFyY2gtYmFyJztcbmltcG9ydCB7XG4gIE9uU29mRm9jdXMsXG4gIFNPRl9GT0NVU19DT01QT05FTlRcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2RpcmVjdGl2ZXMvZm9jdXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtdGFibGUtbGlzdC1zZWFyY2gtYmFyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNvZi1zZWFyY2gtYmFyXG4gICAgICAjc2VhcmNoQmFyXG4gICAgICBbcGxhY2Vob2xkZXJdPVwidGMgKyAnLkZJTFRFUicgfCB0cmFuc2xhdGVcIlxuICAgICAgKHNlYXJjaCk9XCJjaGFuZ2VUZXJtLmVtaXQoJGV2ZW50KVwiXG4gICAgPjwvc29mLXNlYXJjaC1iYXI+XG4gIGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsXG4gICAgICB1c2VFeGlzdGluZzogVGFibGVMaXN0U2VhcmNoQmFyQ29tcG9uZW50XG4gICAgfVxuICBdLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1saXN0LXNlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUxpc3RTZWFyY2hCYXJDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPblNvZkZvY3VzIHtcbiAgQElucHV0KCkgdGM6IHN0cmluZztcbiAgQE91dHB1dCgpIGNoYW5nZVRlcm0gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBAVmlld0NoaWxkKCdzZWFyY2hCYXInKSBzZWFyY2hCYXI6IFNlYXJjaEJhckNvbXBvbmVudDtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNvZkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoQmFyLnNvZkZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==