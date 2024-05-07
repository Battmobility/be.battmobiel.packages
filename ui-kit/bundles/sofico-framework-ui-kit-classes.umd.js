(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@sofico-framework/ui-kit/classes', ['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['sofico-framework'] = global['sofico-framework'] || {}, global['sofico-framework']['ui-kit'] = global['sofico-framework']['ui-kit'] || {}, global['sofico-framework']['ui-kit'].classes = {})));
}(this, (function (exports) { 'use strict';

    /**
     * Configuration/builder to build an overviewList config
     * This object contains all the configuration regarding searching and
     * sorting of an object
     */
    var OverviewListConfig = /** @class */ (function () {
        function OverviewListConfig() {
            this.functionalProps = [];
            this.initialSorting = {
                prop: null
            };
            this.dynamicRowComponent = null;
            this.initialSortingFuncPropRef = null;
        }
        OverviewListConfig.prototype.addFunctionalProp = function (selector) {
            this.functionalProps.push({
                label: null,
                selector: selector,
                searchable: false,
                sortable: false,
                plainSort: false
            });
            return this;
        };
        OverviewListConfig.prototype.withSearch = function () {
            var propToUpdate = this.functionalProps[this.functionalProps.length - 1];
            propToUpdate.searchable = true;
            return this;
        };
        /** @deprecated use {@link withNaturalSorting}  */
        OverviewListConfig.prototype.withSorting = function (label) {
            return this.withNaturalSorting(label);
        };
        OverviewListConfig.prototype.withNaturalSorting = function (label) {
            var propToUpdate = this.functionalProps[this.functionalProps.length - 1];
            propToUpdate.label = label;
            propToUpdate.sortable = true;
            propToUpdate.plainSort = false;
            if (this.initialSortingFuncPropRef) {
                this.initialSortingFuncPropRef.plainSort = propToUpdate.plainSort;
            }
            return this;
        };
        OverviewListConfig.prototype.withPlainSorting = function (label) {
            var propToUpdate = this.functionalProps[this.functionalProps.length - 1];
            propToUpdate.label = label;
            propToUpdate.sortable = true;
            propToUpdate.plainSort = true;
            if (this.initialSortingFuncPropRef) {
                this.initialSortingFuncPropRef.plainSort = propToUpdate.plainSort;
            }
            return this;
        };
        OverviewListConfig.prototype.asInitialSorting = function (order) {
            var propToUpdate = this.functionalProps[this.functionalProps.length - 1];
            this.initialSorting = {
                prop: propToUpdate.selector,
                order: order,
                plainSort: propToUpdate.plainSort
            };
            this.initialSortingFuncPropRef = propToUpdate;
            return this;
        };
        OverviewListConfig.prototype.setDynamicRowComponent = function (component) {
            this.dynamicRowComponent = component;
            return this;
        };
        return OverviewListConfig;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OverviewListConfig = OverviewListConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sofico-framework-ui-kit-classes.umd.js.map
