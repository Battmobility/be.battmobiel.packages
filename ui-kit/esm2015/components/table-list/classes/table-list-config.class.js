export class TableListConfig {
    constructor() {
        /**
         * FunctionalProps:
         * id: Used as a unique identifier for sorting as we can't assume the translations in column headers are uniaue.
         */
        this.functionalProps = [];
        this.initialSorting = {
            prop: null
        };
        this.dynamicRowComponent = null;
        this.initialSortingFuncPropRef = null;
        this.functionalPropCount = 0;
    }
    setDynamicRowComponent(component) {
        this.dynamicRowComponent = component;
        return this;
    }
    withNaturalSorting() {
        const propToUpdate = this.functionalProps[this.functionalProps.length - 1];
        propToUpdate.sortable = true;
        propToUpdate.plainSort = false;
        if (this.initialSortingFuncPropRef) {
            this.initialSortingFuncPropRef.plainSort = propToUpdate.plainSort;
        }
        return this;
    }
    withPlainSorting(label) {
        const propToUpdate = this.functionalProps[this.functionalProps.length - 1];
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
    addFunctionalProp(selector) {
        this.functionalProps.push({
            id: this.functionalPropCount,
            header: '',
            selector,
            searchable: false,
            sortable: false,
            plainSort: false
        });
        this.functionalPropCount++;
        return this;
    }
    setHeader(header) {
        const propToUpdate = this.functionalProps[this.functionalProps.length - 1];
        propToUpdate.header = header;
        return this;
    }
    withSearch() {
        const propToUpdate = this.functionalProps[this.functionalProps.length - 1];
        propToUpdate.searchable = true;
        return this;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbGlzdC1jb25maWcuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL3RhYmxlLWxpc3QvY2xhc3Nlcy90YWJsZS1saXN0LWNvbmZpZy5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQSxNQUFNLE9BQU8sZUFBZTtJQUE1QjtRQUNFOzs7V0FHRztRQUNILG9CQUFlLEdBT1QsRUFBRSxDQUFDO1FBQ1QsbUJBQWMsR0FBMEI7WUFDdEMsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDO1FBQ0Ysd0JBQW1CLEdBQWdDLElBQUksQ0FBQztRQUN4RCw4QkFBeUIsR0FBRyxJQUFJLENBQUM7UUFDekIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO0lBaUVsQyxDQUFDO0lBL0RDLHNCQUFzQixDQUNwQixTQUFzQztRQUV0QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTNFLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzdCLFlBQVksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztTQUNuRTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWE7UUFDNUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzRSxZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3QixZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUNsQyxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7U0FDbkU7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFxQjtRQUNwQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDcEIsSUFBSSxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQzNCLEtBQUs7WUFDTCxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7U0FDVCxDQUFDO1FBQzNCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxZQUFZLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsUUFBNEI7UUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDeEIsRUFBRSxFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDNUIsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRO1lBQ1IsVUFBVSxFQUFFLEtBQUs7WUFDakIsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsS0FBSztTQUNqQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN0QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNFLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNFLFlBQVksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb25maWd1cmF0aW9uL2J1aWxkZXIgdG8gYnVpbGQgYW4gdGFibGUgY29uZmlnXG4gKiBUaGlzIG9iamVjdCBjb250YWlucyBjb25maWd1cmF0aW9uIHJlZ2FyZGluZyBpbml0aWFsIHNvcnRpbmcgb2YgYW4gb2JqZWN0XG4gKi9cbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlSXRlbUNvbXBvbmVudCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL3RhYmxlLWxpc3QtaXRlbSc7XG5pbXBvcnQgeyBTb3J0aW5nT3JkZXJDb25maWcgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUxpc3RDb25maWc8VD4ge1xuICAvKipcbiAgICogRnVuY3Rpb25hbFByb3BzOlxuICAgKiBpZDogVXNlZCBhcyBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBzb3J0aW5nIGFzIHdlIGNhbid0IGFzc3VtZSB0aGUgdHJhbnNsYXRpb25zIGluIGNvbHVtbiBoZWFkZXJzIGFyZSB1bmlhdWUuXG4gICAqL1xuICBmdW5jdGlvbmFsUHJvcHM6IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGhlYWRlcjogc3RyaW5nO1xuICAgIHNlbGVjdG9yOiAoZW50aXR5OiBUKSA9PiBhbnk7XG4gICAgc2VhcmNoYWJsZTogYm9vbGVhbjtcbiAgICBzb3J0YWJsZTogYm9vbGVhbjtcbiAgICBwbGFpblNvcnQ6IGJvb2xlYW47XG4gIH1bXSA9IFtdO1xuICBpbml0aWFsU29ydGluZzogU29ydGluZ09yZGVyQ29uZmlnPFQ+ID0ge1xuICAgIHByb3A6IG51bGxcbiAgfTtcbiAgZHluYW1pY1Jvd0NvbXBvbmVudDogVHlwZTxUYWJsZUl0ZW1Db21wb25lbnQ8VD4+ID0gbnVsbDtcbiAgaW5pdGlhbFNvcnRpbmdGdW5jUHJvcFJlZiA9IG51bGw7XG4gIHByaXZhdGUgZnVuY3Rpb25hbFByb3BDb3VudCA9IDA7XG5cbiAgc2V0RHluYW1pY1Jvd0NvbXBvbmVudChcbiAgICBjb21wb25lbnQ6IFR5cGU8VGFibGVJdGVtQ29tcG9uZW50PFQ+PlxuICApOiBUYWJsZUxpc3RDb25maWc8VD4ge1xuICAgIHRoaXMuZHluYW1pY1Jvd0NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdpdGhOYXR1cmFsU29ydGluZygpOiBUYWJsZUxpc3RDb25maWc8VD4ge1xuICAgIGNvbnN0IHByb3BUb1VwZGF0ZSA9IHRoaXMuZnVuY3Rpb25hbFByb3BzW3RoaXMuZnVuY3Rpb25hbFByb3BzLmxlbmd0aCAtIDFdO1xuXG4gICAgcHJvcFRvVXBkYXRlLnNvcnRhYmxlID0gdHJ1ZTtcbiAgICBwcm9wVG9VcGRhdGUucGxhaW5Tb3J0ID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuaW5pdGlhbFNvcnRpbmdGdW5jUHJvcFJlZikge1xuICAgICAgdGhpcy5pbml0aWFsU29ydGluZ0Z1bmNQcm9wUmVmLnBsYWluU29ydCA9IHByb3BUb1VwZGF0ZS5wbGFpblNvcnQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2l0aFBsYWluU29ydGluZyhsYWJlbDogc3RyaW5nKTogVGFibGVMaXN0Q29uZmlnPFQ+IHtcbiAgICBjb25zdCBwcm9wVG9VcGRhdGUgPSB0aGlzLmZ1bmN0aW9uYWxQcm9wc1t0aGlzLmZ1bmN0aW9uYWxQcm9wcy5sZW5ndGggLSAxXTtcbiAgICBwcm9wVG9VcGRhdGUuc29ydGFibGUgPSB0cnVlO1xuICAgIHByb3BUb1VwZGF0ZS5wbGFpblNvcnQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmluaXRpYWxTb3J0aW5nRnVuY1Byb3BSZWYpIHtcbiAgICAgIHRoaXMuaW5pdGlhbFNvcnRpbmdGdW5jUHJvcFJlZi5wbGFpblNvcnQgPSBwcm9wVG9VcGRhdGUucGxhaW5Tb3J0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFzSW5pdGlhbFNvcnRpbmcob3JkZXI6ICdhc2MnIHwgJ2Rlc2MnKTogVGFibGVMaXN0Q29uZmlnPFQ+IHtcbiAgICBjb25zdCBwcm9wVG9VcGRhdGUgPSB0aGlzLmZ1bmN0aW9uYWxQcm9wc1t0aGlzLmZ1bmN0aW9uYWxQcm9wcy5sZW5ndGggLSAxXTtcbiAgICB0aGlzLmluaXRpYWxTb3J0aW5nID0ge1xuICAgICAgcHJvcDogcHJvcFRvVXBkYXRlLnNlbGVjdG9yLFxuICAgICAgb3JkZXIsXG4gICAgICBwbGFpblNvcnQ6IHByb3BUb1VwZGF0ZS5wbGFpblNvcnRcbiAgICB9IGFzIFNvcnRpbmdPcmRlckNvbmZpZzxUPjtcbiAgICB0aGlzLmluaXRpYWxTb3J0aW5nRnVuY1Byb3BSZWYgPSBwcm9wVG9VcGRhdGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRGdW5jdGlvbmFsUHJvcChzZWxlY3RvcjogKGVudGl0eTogVCkgPT4gYW55KTogVGFibGVMaXN0Q29uZmlnPFQ+IHtcbiAgICB0aGlzLmZ1bmN0aW9uYWxQcm9wcy5wdXNoKHtcbiAgICAgIGlkOiB0aGlzLmZ1bmN0aW9uYWxQcm9wQ291bnQsXG4gICAgICBoZWFkZXI6ICcnLFxuICAgICAgc2VsZWN0b3IsXG4gICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcbiAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgIHBsYWluU29ydDogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLmZ1bmN0aW9uYWxQcm9wQ291bnQrKztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEhlYWRlcihoZWFkZXI6IHN0cmluZyk6IFRhYmxlTGlzdENvbmZpZzxUPiB7XG4gICAgY29uc3QgcHJvcFRvVXBkYXRlID0gdGhpcy5mdW5jdGlvbmFsUHJvcHNbdGhpcy5mdW5jdGlvbmFsUHJvcHMubGVuZ3RoIC0gMV07XG4gICAgcHJvcFRvVXBkYXRlLmhlYWRlciA9IGhlYWRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdpdGhTZWFyY2goKTogVGFibGVMaXN0Q29uZmlnPFQ+IHtcbiAgICBjb25zdCBwcm9wVG9VcGRhdGUgPSB0aGlzLmZ1bmN0aW9uYWxQcm9wc1t0aGlzLmZ1bmN0aW9uYWxQcm9wcy5sZW5ndGggLSAxXTtcbiAgICBwcm9wVG9VcGRhdGUuc2VhcmNoYWJsZSA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdfQ==