import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
export class OverviewListSearchBarComponent {
    constructor() {
        this.changeTerm = new EventEmitter();
    }
    sofFocus() {
        this.searchBar.sofFocus();
    }
}
OverviewListSearchBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-overview-list-search-bar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <sof-search-bar
      #searchBar
      [placeholder]="tc + '.' + 'FILTER' | translate"
      (search)="changeTerm.emit($event)"
    ></sof-search-bar>
  `,
                providers: [
                    {
                        provide: SOF_FOCUS_COMPONENT,
                        useExisting: OverviewListSearchBarComponent
                    }
                ],
                styles: [""]
            },] }
];
OverviewListSearchBarComponent.propDecorators = {
    tc: [{ type: Input }],
    changeTerm: [{ type: Output }],
    searchBar: [{ type: ViewChild, args: ['searchBar',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctbGlzdC1zZWFyY2gtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvb3ZlcnZpZXctbGlzdC1zZWFyY2gtYmFyL292ZXJ2aWV3LWxpc3Qtc2VhcmNoLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFFTCxtQkFBbUIsRUFDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQW9CbkQsTUFBTSxPQUFPLDhCQUE4QjtJQWxCM0M7UUFvQlksZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFPcEQsQ0FBQztJQUhDLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFFeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7Z0JBQ0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxtQkFBbUI7d0JBQzVCLFdBQVcsRUFBRSw4QkFBOEI7cUJBQzVDO2lCQUNGOzthQUNGOzs7aUJBRUUsS0FBSzt5QkFDTCxNQUFNO3dCQUVOLFNBQVMsU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hCYXJDb21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9zZWFyY2gtYmFyJztcbmltcG9ydCB7XG4gIE9uU29mRm9jdXMsXG4gIFNPRl9GT0NVU19DT01QT05FTlRcbn0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2RpcmVjdGl2ZXMvZm9jdXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2Ytb3ZlcnZpZXctbGlzdC1zZWFyY2gtYmFyJyxcbiAgc3R5bGVVcmxzOiBbJy4vb3ZlcnZpZXctbGlzdC1zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzb2Ytc2VhcmNoLWJhclxuICAgICAgI3NlYXJjaEJhclxuICAgICAgW3BsYWNlaG9sZGVyXT1cInRjICsgJy4nICsgJ0ZJTFRFUicgfCB0cmFuc2xhdGVcIlxuICAgICAgKHNlYXJjaCk9XCJjaGFuZ2VUZXJtLmVtaXQoJGV2ZW50KVwiXG4gICAgPjwvc29mLXNlYXJjaC1iYXI+XG4gIGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsXG4gICAgICB1c2VFeGlzdGluZzogT3ZlcnZpZXdMaXN0U2VhcmNoQmFyQ29tcG9uZW50XG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJ2aWV3TGlzdFNlYXJjaEJhckNvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uU29mRm9jdXMge1xuICBASW5wdXQoKSB0Yzogc3RyaW5nO1xuICBAT3V0cHV0KCkgY2hhbmdlVGVybSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaEJhcicpIHNlYXJjaEJhcjogU2VhcmNoQmFyQ29tcG9uZW50O1xuXG4gIHNvZkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoQmFyLnNvZkZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==