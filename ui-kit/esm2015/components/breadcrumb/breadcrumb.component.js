import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
/**
 * This component resembles a breadcrumb trail
 */
export class BreadcrumbComponent {
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-breadcrumb',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <!--  todo: Check once sof-breadcrumbs class can be removed. Currently it seems to be in use by the promotions project.  -->
    <div
      class="d-flex flex-wrap justify-content-start align-items-center sof-breadcrumbs"
    >
      <ng-container *ngFor="let breadcrumb of breadcrumbs; let last = last">
        <div
          class="d-flex justify-content-start align-items-center"
          *ngIf="!last"
        >
          <a
            class="sof-link"
            [queryParamsHandling]="
              breadcrumb.preserveQueryParams ? 'preserve' : ''
            "
            [routerLink]="breadcrumb.path"
          >
            {{
              breadcrumb.label
                ? (tc + '.' + breadcrumb.label
                  | translate: breadcrumb.params
                  | sofMaxStringLength)
                : (breadcrumb.translation | sofMaxStringLength)
            }}
          </a>
          <sof-svg-icon
            icon="icon-chevron-right"
            class="sof-icon-light mx-1"
            size="8"
          ></sof-svg-icon>
        </div>
        <div *ngIf="last" class="sof-link">
          <p class="m-0">
            {{
              breadcrumb.label
                ? (tc + '.' + breadcrumb.label
                  | translate: breadcrumb.params
                  | sofMaxStringLength)
                : (breadcrumb.translation | sofMaxStringLength)
            }}
          </p>
        </div>
      </ng-container>
    </div>
  `,
                styles: [":host a.sof-link{text-decoration:underline}:host .sof-link{font-size:.875rem;color:#6c757d}"]
            },] }
];
BreadcrumbComponent.propDecorators = {
    tc: [{ type: Input }],
    breadcrumbs: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUU7O0dBRUc7QUFtREgsTUFBTSxPQUFPLG1CQUFtQjs7O1lBbEQvQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFFMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Q1Q7O2FBQ0Y7OztpQkFLRSxLQUFLOzBCQUtMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gJy4vdHlwZXMvYnJlYWRjcnVtYi50eXBlJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCByZXNlbWJsZXMgYSBicmVhZGNydW1iIHRyYWlsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1icmVhZGNydW1iJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tICB0b2RvOiBDaGVjayBvbmNlIHNvZi1icmVhZGNydW1icyBjbGFzcyBjYW4gYmUgcmVtb3ZlZC4gQ3VycmVudGx5IGl0IHNlZW1zIHRvIGJlIGluIHVzZSBieSB0aGUgcHJvbW90aW9ucyBwcm9qZWN0LiAgLS0+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJkLWZsZXggZmxleC13cmFwIGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXIgc29mLWJyZWFkY3J1bWJzXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBicmVhZGNydW1iIG9mIGJyZWFkY3J1bWJzOyBsZXQgbGFzdCA9IGxhc3RcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICpuZ0lmPVwiIWxhc3RcIlxuICAgICAgICA+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzPVwic29mLWxpbmtcIlxuICAgICAgICAgICAgW3F1ZXJ5UGFyYW1zSGFuZGxpbmddPVwiXG4gICAgICAgICAgICAgIGJyZWFkY3J1bWIucHJlc2VydmVRdWVyeVBhcmFtcyA/ICdwcmVzZXJ2ZScgOiAnJ1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cImJyZWFkY3J1bWIucGF0aFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgYnJlYWRjcnVtYi5sYWJlbFxuICAgICAgICAgICAgICAgID8gKHRjICsgJy4nICsgYnJlYWRjcnVtYi5sYWJlbFxuICAgICAgICAgICAgICAgICAgfCB0cmFuc2xhdGU6IGJyZWFkY3J1bWIucGFyYW1zXG4gICAgICAgICAgICAgICAgICB8IHNvZk1heFN0cmluZ0xlbmd0aClcbiAgICAgICAgICAgICAgICA6IChicmVhZGNydW1iLnRyYW5zbGF0aW9uIHwgc29mTWF4U3RyaW5nTGVuZ3RoKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHNvZi1zdmctaWNvblxuICAgICAgICAgICAgaWNvbj1cImljb24tY2hldnJvbi1yaWdodFwiXG4gICAgICAgICAgICBjbGFzcz1cInNvZi1pY29uLWxpZ2h0IG14LTFcIlxuICAgICAgICAgICAgc2l6ZT1cIjhcIlxuICAgICAgICAgID48L3NvZi1zdmctaWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJsYXN0XCIgY2xhc3M9XCJzb2YtbGlua1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibS0wXCI+XG4gICAgICAgICAgICB7e1xuICAgICAgICAgICAgICBicmVhZGNydW1iLmxhYmVsXG4gICAgICAgICAgICAgICAgPyAodGMgKyAnLicgKyBicmVhZGNydW1iLmxhYmVsXG4gICAgICAgICAgICAgICAgICB8IHRyYW5zbGF0ZTogYnJlYWRjcnVtYi5wYXJhbXNcbiAgICAgICAgICAgICAgICAgIHwgc29mTWF4U3RyaW5nTGVuZ3RoKVxuICAgICAgICAgICAgICAgIDogKGJyZWFkY3J1bWIudHJhbnNsYXRpb24gfCBzb2ZNYXhTdHJpbmdMZW5ndGgpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFRoZSB0cmFuc2xhdGlvbiBjb250ZXh0XG4gICAqL1xuICBASW5wdXQoKSB0Yzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgYnJlYWRjcnVtYiBjb25maWd1cmF0aW9uXG4gICAqL1xuICBASW5wdXQoKSBicmVhZGNydW1iczogQnJlYWRjcnVtYltdO1xufVxuIl19