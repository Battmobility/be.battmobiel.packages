(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/simple-table-item', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['simple-table-item'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var SimpleTableItemComponent = /** @class */ (function () {
        function SimpleTableItemComponent(componentFactoryResolver, viewContainerRef) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.viewContainerRef = viewContainerRef;
        }
        Object.defineProperty(SimpleTableItemComponent.prototype, "tc", {
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
        Object.defineProperty(SimpleTableItemComponent.prototype, "entity", {
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
        SimpleTableItemComponent.prototype.ngOnInit = function () {
            var factory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicRowComponent);
            this.componentRef = this.viewContainerRef.createComponent(factory);
            this.componentRef.instance.tc = this.localTc;
            this.componentRef.instance.entity = this.localEntity;
        };
        return SimpleTableItemComponent;
    }());
    SimpleTableItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sof-simple-table-item',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "",
                    styles: [""]
                },] }
    ];
    SimpleTableItemComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ViewContainerRef }
    ]; };
    SimpleTableItemComponent.propDecorators = {
        tc: [{ type: core.Input }],
        entity: [{ type: core.Input }],
        dynamicRowComponent: [{ type: core.Input }]
    };

    var SimpleTableItemModule = /** @class */ (function () {
        function SimpleTableItemModule() {
        }
        return SimpleTableItemModule;
    }());
    SimpleTableItemModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [SimpleTableItemComponent],
                    exports: [SimpleTableItemComponent],
                    imports: [common.CommonModule]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SimpleTableItemComponent = SimpleTableItemComponent;
    exports.SimpleTableItemModule = SimpleTableItemModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-simple-table-item.umd.js.map
