/**
 * Configuration/builder to build an overviewList config
 * This object contains all the configuration regarding searching and
 * sorting of an object
 */
class OverviewListConfig {
    constructor() {
        this.functionalProps = [];
        this.initialSorting = {
            prop: null
        };
        this.dynamicRowComponent = null;
        this.initialSortingFuncPropRef = null;
    }
    addFunctionalProp(selector) {
        this.functionalProps.push({
            label: null,
            selector,
            searchable: false,
            sortable: false,
            plainSort: false
        });
        return this;
    }
    withSearch() {
        const propToUpdate = this.functionalProps[this.functionalProps.length - 1];
        propToUpdate.searchable = true;
        return this;
    }
    /** @deprecated use {@link withNaturalSorting}  */
    withSorting(label) {
        return this.withNaturalSorting(label);
    }
    withNaturalSorting(label) {
        const propToUpdate = this.functionalProps[this.functionalProps.length - 1];
        propToUpdate.label = label;
        propToUpdate.sortable = true;
        propToUpdate.plainSort = false;
        if (this.initialSortingFuncPropRef) {
            this.initialSortingFuncPropRef.plainSort = propToUpdate.plainSort;
        }
        return this;
    }
    withPlainSorting(label) {
        const propToUpdate = this.functionalProps[this.functionalProps.length - 1];
        propToUpdate.label = label;
        propToUpdate.sortable = true;
        propToUpdate.plainSort = true;
        if (this.initialSortingFuncPropRef) {
            this.initialSortingFuncPropRef.plainSort = propToUpdate.plainSort;
        }
        return this;
    }
    asInitialSorting(order) {
        const propToUpdate = this.functionalProps[this.functionalProps.length - 1];
        this.initialSorting = {
            prop: propToUpdate.selector,
            order,
            plainSort: propToUpdate.plainSort
        };
        this.initialSortingFuncPropRef = propToUpdate;
        return this;
    }
    setDynamicRowComponent(component) {
        this.dynamicRowComponent = component;
        return this;
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { OverviewListConfig };
//# sourceMappingURL=sofico-framework-ui-kit-classes.js.map
