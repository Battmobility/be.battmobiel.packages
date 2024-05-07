import { Injectable } from '@angular/core';
import { SimpleTableConfig } from '../classes/simple-table-config.class';
import * as i0 from "@angular/core";
/**
 * We use this builder to create an tableConfig
 * ```typescript
 *
 * builder.createConfig().withFunctionalProp(...)
 *
 * ```
 */
export class SimpleTableConfigBuilder {
    createConfig() {
        return new SimpleTableConfig();
    }
}
SimpleTableConfigBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function SimpleTableConfigBuilder_Factory() { return new SimpleTableConfigBuilder(); }, token: SimpleTableConfigBuilder, providedIn: "root" });
SimpleTableConfigBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLWNvbmZpZy1idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL3NpbXBsZS10YWJsZS9zZXJ2aWNlcy9zaW1wbGUtdGFibGUtY29uZmlnLWJ1aWxkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQUV6RTs7Ozs7OztHQU9HO0FBSUgsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxZQUFZO1FBQ1YsT0FBTyxJQUFJLGlCQUFpQixFQUFLLENBQUM7SUFDcEMsQ0FBQzs7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpbXBsZVRhYmxlQ29uZmlnIH0gZnJvbSAnLi4vY2xhc3Nlcy9zaW1wbGUtdGFibGUtY29uZmlnLmNsYXNzJztcblxuLyoqXG4gKiBXZSB1c2UgdGhpcyBidWlsZGVyIHRvIGNyZWF0ZSBhbiB0YWJsZUNvbmZpZ1xuICogYGBgdHlwZXNjcmlwdFxuICpcbiAqIGJ1aWxkZXIuY3JlYXRlQ29uZmlnKCkud2l0aEZ1bmN0aW9uYWxQcm9wKC4uLilcbiAqXG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlVGFibGVDb25maWdCdWlsZGVyPFQ+IHtcbiAgY3JlYXRlQ29uZmlnKCk6IFNpbXBsZVRhYmxlQ29uZmlnPFQ+IHtcbiAgICByZXR1cm4gbmV3IFNpbXBsZVRhYmxlQ29uZmlnPFQ+KCk7XG4gIH1cbn1cbiJdfQ==