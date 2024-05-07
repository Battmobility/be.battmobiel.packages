(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/core'), require('@sofico-framework/ui-kit/directives/focus'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/overview-list-item', ['exports', '@angular/cdk/a11y', '@angular/core', '@sofico-framework/ui-kit/directives/focus', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['overview-list-item'] = {}), global.ng.cdk.a11y, global.ng.core, global['sofico-framework']['ui-kit'].directives.focus, global.ng.common));
}(this, (function (exports, a11y, core, focus, common) { 'use strict';

    var OverviewListItemComponent = /** @class */ (function () {
        function OverviewListItemComponent(componentFactoryResolver, viewContainerRef, interactivityChecker) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.viewContainerRef = viewContainerRef;
            this.interactivityChecker = interactivityChecker;
        }
        Object.defineProperty(OverviewListItemComponent.prototype, "tc", {
            /**
             * The translation context.
             */
            set: function (tc) {
                this.localTc = tc;
                if (this.componentRef) {
                    this.componentRef.instance.tc = this.localTc;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OverviewListItemComponent.prototype, "entity", {
            /**
             * The entity we want to set.
             */
            set: function (entity) {
                this.localEntity = entity;
                if (this.componentRef) {
                    this.componentRef.instance.entity = this.localEntity;
                }
            },
            enumerable: false,
            configurable: true
        });
        OverviewListItemComponent.prototype.ngOnInit = function () {
            var factory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicRowComponent);
            this.componentRef = this.viewContainerRef.createComponent(factory);
            this.componentRef.instance.tc = this.localTc;
            this.componentRef.instance.entity = this.localEntity;
        };
        OverviewListItemComponent.prototype.sofFocus = function () {
            var _a;
            if (this.componentRef.instance &&
                typeof this.componentRef.instance.sofFocus ===
                    'function') {
                this.componentRef.instance.sofFocus();
            }
            else if (this.interactivityChecker.isFocusable(this.componentRef.location.nativeElement)) {
                this.componentRef.location.nativeElement.focus();
            }
            else if (this.interactivityChecker.isFocusable((_a = this.componentRef.location.nativeElement) === null || _a === void 0 ? void 0 : _a.firstChild)) {
                this.componentRef.location.nativeElement.firstChild.focus();
            }
            else {
                throw Error('The dynamic row component nor its first child is focusable.');
            }
        };
        return OverviewListItemComponent;
    }());
    OverviewListItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sof-overview-list-item',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "",
                    providers: [
                        { provide: focus.SOF_FOCUS_COMPONENT, useExisting: OverviewListItemComponent }
                    ],
                    styles: [""]
                },] }
    ];
    OverviewListItemComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ViewContainerRef },
        { type: a11y.InteractivityChecker }
    ]; };
    OverviewListItemComponent.propDecorators = {
        tc: [{ type: core.Input }],
        entity: [{ type: core.Input }],
        dynamicRowComponent: [{ type: core.Input }]
    };

    var OverviewListItemModule = /** @class */ (function () {
        function OverviewListItemModule() {
        }
        return OverviewListItemModule;
    }());
    OverviewListItemModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [OverviewListItemComponent],
                    exports: [OverviewListItemComponent],
                    imports: [common.CommonModule]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OverviewListItemComponent = OverviewListItemComponent;
    exports.OverviewListItemModule = OverviewListItemModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-overview-list-item.umd.js.map
