import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
export class SimpleListComponent {
    constructor() {
        // input streams
        this.entities$ = new ReplaySubject(1);
        this.config$ = new ReplaySubject(1);
        this.sorting$ = new ReplaySubject(1);
        this.trackByFn = i => i;
    }
    /**
     * The simple list config.
     */
    set config(config) {
        if (config) {
            this.config$.next(config);
            this.sorting$.next(config.initialSorting);
        }
    }
    /**
     * The entities we want to render in this list.
     */
    set entities(entities) {
        if (entities) {
            this.entities$.next(entities);
        }
    }
}
SimpleListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-simple-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="config$ | async as config">
      <ng-container *ngIf="entities$ | async as entities">
        <ng-container *ngIf="entities && entities.length > 0; else noResults">
          <sof-overview-list-item
            *ngFor="
              let entity of entities | sofSort: (sorting$ | async);
              trackBy: trackByFn
            "
            [entity]="entity"
            [tc]="tc"
            [dynamicRowComponent]="config?.dynamicRowComponent"
          >
          </sof-overview-list-item>
        </ng-container>
      </ng-container>
      <ng-template #noResults>
        {{ tc + '.' + 'NO-RESULTS' | translate }}
      </ng-template>
    </ng-container>
  `
            },] }
];
SimpleListComponent.propDecorators = {
    tc: [{ type: Input }],
    config: [{ type: Input }],
    entities: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9zaW1wbGUtbGlzdC9zaW1wbGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQTRCckMsTUFBTSxPQUFPLG1CQUFtQjtJQXpCaEM7UUFrREUsZ0JBQWdCO1FBQ2hCLGNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBTSxDQUFDLENBQUMsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxhQUFhLENBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ3BELGFBQVEsR0FBeUMsSUFBSSxhQUFhLENBRWhFLENBQUMsQ0FBQyxDQUFDO1FBRUwsY0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUEzQkM7O09BRUc7SUFDSCxJQUFhLE1BQU0sQ0FBQyxNQUEyQjtRQUM3QyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILElBQWEsUUFBUSxDQUFDLFFBQWE7UUFDakMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQlQ7YUFDRjs7O2lCQUtFLEtBQUs7cUJBS0wsS0FBSzt1QkFVTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvcnRpbmdPcmRlckNvbmZpZyB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNpbXBsZUxpc3RDb25maWcgfSBmcm9tICcuL2NsYXNzZXMvc2ltcGxlLWxpc3QtY29uZmlnLmNsYXNzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLXNpbXBsZS1saXN0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZyQgfCBhc3luYyBhcyBjb25maWdcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbnRpdGllcyQgfCBhc3luYyBhcyBlbnRpdGllc1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50aXRpZXMgJiYgZW50aXRpZXMubGVuZ3RoID4gMDsgZWxzZSBub1Jlc3VsdHNcIj5cbiAgICAgICAgICA8c29mLW92ZXJ2aWV3LWxpc3QtaXRlbVxuICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgIGxldCBlbnRpdHkgb2YgZW50aXRpZXMgfCBzb2ZTb3J0OiAoc29ydGluZyQgfCBhc3luYyk7XG4gICAgICAgICAgICAgIHRyYWNrQnk6IHRyYWNrQnlGblxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIFtlbnRpdHldPVwiZW50aXR5XCJcbiAgICAgICAgICAgIFt0Y109XCJ0Y1wiXG4gICAgICAgICAgICBbZHluYW1pY1Jvd0NvbXBvbmVudF09XCJjb25maWc/LmR5bmFtaWNSb3dDb21wb25lbnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3NvZi1vdmVydmlldy1saXN0LWl0ZW0+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctdGVtcGxhdGUgI25vUmVzdWx0cz5cbiAgICAgICAge3sgdGMgKyAnLicgKyAnTk8tUkVTVUxUUycgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlTGlzdENvbXBvbmVudDxUPiB7XG4gIC8qKlxuICAgKiBUaGUgdHJhbnNsYXRpb24gY29udGV4dC5cbiAgICovXG4gIEBJbnB1dCgpIHRjOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzaW1wbGUgbGlzdCBjb25maWcuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgY29uZmlnKGNvbmZpZzogU2ltcGxlTGlzdENvbmZpZzxUPikge1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnJC5uZXh0KGNvbmZpZyk7XG4gICAgICB0aGlzLnNvcnRpbmckLm5leHQoY29uZmlnLmluaXRpYWxTb3J0aW5nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIGVudGl0aWVzIHdlIHdhbnQgdG8gcmVuZGVyIGluIHRoaXMgbGlzdC5cbiAgICovXG4gIEBJbnB1dCgpIHNldCBlbnRpdGllcyhlbnRpdGllczogVFtdKSB7XG4gICAgaWYgKGVudGl0aWVzKSB7XG4gICAgICB0aGlzLmVudGl0aWVzJC5uZXh0KGVudGl0aWVzKTtcbiAgICB9XG4gIH1cblxuICAvLyBpbnB1dCBzdHJlYW1zXG4gIGVudGl0aWVzJCA9IG5ldyBSZXBsYXlTdWJqZWN0PFRbXT4oMSk7XG4gIGNvbmZpZyQgPSBuZXcgUmVwbGF5U3ViamVjdDxTaW1wbGVMaXN0Q29uZmlnPFQ+PigxKTtcbiAgc29ydGluZyQ6IFJlcGxheVN1YmplY3Q8U29ydGluZ09yZGVyQ29uZmlnPFQ+PiA9IG5ldyBSZXBsYXlTdWJqZWN0PFxuICAgIFNvcnRpbmdPcmRlckNvbmZpZzxUPlxuICA+KDEpO1xuXG4gIHRyYWNrQnlGbiA9IGkgPT4gaTtcbn1cbiJdfQ==