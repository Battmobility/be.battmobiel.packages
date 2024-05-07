import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';
import { UtilsPipesModule } from '@sofico-framework/utils';

/**
 * This component resembles a breadcrumb trail
 */
class BreadcrumbComponent {
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

class BreadcrumbModule {
}
BreadcrumbModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    SvgIconModule,
                    TranslateModule,
                    UtilsPipesModule
                ],
                declarations: [BreadcrumbComponent],
                exports: [BreadcrumbComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { BreadcrumbComponent, BreadcrumbModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-breadcrumb.js.map
