(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/detail', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components.detail = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var DetailComponent = /** @class */ (function () {
        function DetailComponent(componentFactoryResolver, viewContainerRef) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.viewContainerRef = viewContainerRef;
        }
        Object.defineProperty(DetailComponent.prototype, "tc", {
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
        Object.defineProperty(DetailComponent.prototype, "entity", {
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
        DetailComponent.prototype.ngOnInit = function () {
            var factory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicDetailComponent);
            this.componentRef = this.viewContainerRef.createComponent(factory);
            this.componentRef.instance.tc = this.localTc;
            this.componentRef.instance.entity = this.localEntity;
        };
        return DetailComponent;
    }());
    DetailComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sof-detail',
                    template: ''
                },] }
    ];
    DetailComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ViewContainerRef }
    ]; };
    DetailComponent.propDecorators = {
        dynamicDetailComponent: [{ type: core.Input }],
        tc: [{ type: core.Input }],
        entity: [{ type: core.Input }]
    };

    var DetailModule = /** @class */ (function () {
        function DetailModule() {
        }
        return DetailModule;
    }());
    DetailModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [DetailComponent],
                    exports: [DetailComponent],
                    imports: [common.CommonModule]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DetailComponent = DetailComponent;
    exports.DetailModule = DetailModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-detail.umd.js.map
