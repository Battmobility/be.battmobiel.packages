import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SOF_FOCUS_COMPONENT } from '@sofico-framework/ui-kit/directives/focus';
export class SearchBarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxtQkFBbUIsRUFDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQXFDbkQsTUFBTSxPQUFPLGtCQUFrQjtJQW5DL0I7UUFxQ1ksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDOUMsa0JBQWEsR0FBRyxFQUFFLENBQUM7SUFnQnJCLENBQUM7SUFaQyxPQUFPO1FBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBRTFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLENBQUM7O2FBQy9FOzs7MEJBRUUsS0FBSztxQkFDTCxNQUFNOzBCQUdOLFNBQVMsU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBPblNvZkZvY3VzLFxuICBTT0ZfRk9DVVNfQ09NUE9ORU5UXG59IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9kaXJlY3RpdmVzL2ZvY3VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLXNlYXJjaC1iYXInLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTMgc29mLWlucHV0LWdyb3VwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIiAoY2xpY2spPVwic2VhcmNoSW5wdXQuZm9jdXMoKVwiPlxuICAgICAgICAgIDxzb2Ytc3ZnLWljb24gaWNvbj1cImljb24tc2VhcmNoXCIgY2xhc3M9XCJzZWFyY2gtaWNvblwiPjwvc29mLXN2Zy1pY29uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgICAjc2VhcmNoSW5wdXRcbiAgICAgICAgWyhuZ01vZGVsKV09XCJpbnRlcm5hbFZhbHVlXCJcbiAgICAgICAgKGtleXVwKT1cIm9uS2V5UHJlc3MoKVwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICBbY2xhc3MuY2xlYXItaW5wdXRdPVwiaW50ZXJuYWxWYWx1ZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwie3sgcGxhY2Vob2xkZXIgfX1cIlxuICAgICAgLz5cbiAgICAgIDxkaXYgKm5nSWY9XCJpbnRlcm5hbFZhbHVlXCIgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcGxhaW5cIiAoY2xpY2spPVwib25DbGVhcigpXCI+XG4gICAgICAgICAgICA8c29mLXN2Zy1pY29uXG4gICAgICAgICAgICAgIGljb249XCJpY29uLWNyb3NzXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJzb2YtY2xlYXItaWNvblwiXG4gICAgICAgICAgICAgIHNpemU9XCI4XCJcbiAgICAgICAgICAgID48L3NvZi1zdmctaWNvbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNPRl9GT0NVU19DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBTZWFyY2hCYXJDb21wb25lbnQgfV1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Tb2ZGb2N1cyB7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBzZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgaW50ZXJuYWxWYWx1ZSA9ICcnO1xuXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaElucHV0Jykgc2VhcmNoSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgb25DbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmludGVybmFsVmFsdWUgPSAnJztcbiAgICB0aGlzLnNlYXJjaC5lbWl0KCcnKTtcbiAgfVxuXG4gIG9uS2V5UHJlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2guZW1pdCh0aGlzLmludGVybmFsVmFsdWUpO1xuICB9XG5cbiAgc29mRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==