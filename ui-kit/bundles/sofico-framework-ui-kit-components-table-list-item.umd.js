(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/components/table-list-item', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].components = global['sofico-framework']['ui-kit'].components || {}, global['sofico-framework']['ui-kit'].components['table-list-item'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var TableListItemComponent = /** @class */ (function () {
        function TableListItemComponent(componentFactoryResolver, viewContainerRef) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.viewContainerRef = viewContainerRef;
        }
        Object.defineProperty(TableListItemComponent.prototype, "tc", {
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
        Object.defineProperty(TableListItemComponent.prototype, "entity", {
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
        TableListItemComponent.prototype.ngOnInit = function () {
            var factory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicRowComponent);
            this.componentRef = this.viewContainerRef.createComponent(factory);
            this.componentRef.instance.tc = this.localTc;
            this.componentRef.instance.entity = this.localEntity;
        };
        return TableListItemComponent;
    }());
    TableListItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sof-table-list-item',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "",
                    styles: [""]
                },] }
    ];
    TableListItemComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ViewContainerRef }
    ]; };
    TableListItemComponent.propDecorators = {
        tc: [{ type: core.Input }],
        entity: [{ type: core.Input }],
        dynamicRowComponent: [{ type: core.Input }]
    };

    var TableListItemModule = /** @class */ (function () {
        function TableListItemModule() {
        }
        return TableListItemModule;
    }());
    TableListItemModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [TableListItemComponent],
                    exports: [TableListItemComponent],
                    imports: [common.CommonModule]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TableListItemComponent = TableListItemComponent;
    exports.TableListItemModule = TableListItemModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-components-table-list-item.umd.js.map
