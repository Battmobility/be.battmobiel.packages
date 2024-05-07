(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/dynamic-form', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['dynamic-form'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var DynamicFormComponent = /** @class */ (function () {
        function DynamicFormComponent(componentFactoryResolver, viewContainerRef) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.viewContainerRef = viewContainerRef;
        }
        Object.defineProperty(DynamicFormComponent.prototype, "tc", {
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
        Object.defineProperty(DynamicFormComponent.prototype, "data", {
            /**
             * The data we want to pass to the dynamic attribute.
             */
            set: function (data) {
                this.localData = data;
                if (this.componentRef) {
                    this.componentRef.instance.data = this.localData;
                }
            },
            enumerable: false,
            configurable: true
        });
        DynamicFormComponent.prototype.ngOnInit = function () {
            var factory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicFormComponent);
            this.componentRef = this.viewContainerRef.createComponent(factory);
            this.componentRef.instance.tc = this.localTc;
            this.componentRef.instance.data = this.localData;
        };
        return DynamicFormComponent;
    }());
    DynamicFormComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sof-dynamic-form',
                    template: ""
                },] }
    ];
    DynamicFormComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ViewContainerRef }
    ]; };
    DynamicFormComponent.propDecorators = {
        dynamicFormComponent: [{ type: core.Input }],
        tc: [{ type: core.Input }],
        data: [{ type: core.Input }]
    };

    var DynamicFormModule = /** @class */ (function () {
        function DynamicFormModule() {
        }
        return DynamicFormModule;
    }());
    DynamicFormModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [DynamicFormComponent],
                    exports: [DynamicFormComponent],
                    imports: [common.CommonModule]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DynamicFormComponent = DynamicFormComponent;
    exports.DynamicFormModule = DynamicFormModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-dynamic-form.umd.js.map
