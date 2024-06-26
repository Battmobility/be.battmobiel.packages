/**
 * Configuration/builder to build an table config
 * This object contains configuration regarding initial sorting of an object
 */
export class SimpleTableConfig {
    constructor() {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLWNvbmZpZy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvc2ltcGxlLXRhYmxlL2NsYXNzZXMvc2ltcGxlLXRhYmxlLWNvbmZpZy5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTs7O0dBR0c7QUFDSCxNQUFNLE9BQU8saUJBQWlCO0lBQTlCO1FBQ0Usb0JBQWUsR0FPVCxFQUFFLENBQUM7UUFDVCxtQkFBYyxHQUEwQjtZQUN0QyxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7UUFDRix3QkFBbUIsR0FBZ0MsSUFBSSxDQUFDO1FBQ3hELDhCQUF5QixHQUFHLElBQUksQ0FBQztRQUN6Qix3QkFBbUIsR0FBRyxDQUFDLENBQUM7SUEyRGxDLENBQUM7SUF6REMsc0JBQXNCLENBQ3BCLFNBQXNDO1FBRXRDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFM0UsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDN0IsWUFBWSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO1NBQ25FO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBYTtRQUM1QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNFLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzdCLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztTQUNuRTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQXFCO1FBQ3BDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNwQixJQUFJLEVBQUUsWUFBWSxDQUFDLFFBQVE7WUFDM0IsS0FBSztZQUNMLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FBUztTQUNULENBQUM7UUFDM0IsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFlBQVksQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxRQUE0QjtRQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztZQUN4QixFQUFFLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUM1QixNQUFNLEVBQUUsRUFBRTtZQUNWLFFBQVE7WUFDUixVQUFVLEVBQUUsS0FBSztZQUNqQixRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0UsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZUl0ZW1Db21wb25lbnQgfSBmcm9tICdAc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy90YWJsZS1saXN0LWl0ZW0nO1xuaW1wb3J0IHsgU29ydGluZ09yZGVyQ29uZmlnIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24vYnVpbGRlciB0byBidWlsZCBhbiB0YWJsZSBjb25maWdcbiAqIFRoaXMgb2JqZWN0IGNvbnRhaW5zIGNvbmZpZ3VyYXRpb24gcmVnYXJkaW5nIGluaXRpYWwgc29ydGluZyBvZiBhbiBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZVRhYmxlQ29uZmlnPFQ+IHtcbiAgZnVuY3Rpb25hbFByb3BzOiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBoZWFkZXI6IHN0cmluZztcbiAgICBzZWxlY3RvcjogKGVudGl0eTogVCkgPT4gYW55O1xuICAgIHNlYXJjaGFibGU6IGJvb2xlYW47XG4gICAgc29ydGFibGU6IGJvb2xlYW47XG4gICAgcGxhaW5Tb3J0OiBib29sZWFuO1xuICB9W10gPSBbXTtcbiAgaW5pdGlhbFNvcnRpbmc6IFNvcnRpbmdPcmRlckNvbmZpZzxUPiA9IHtcbiAgICBwcm9wOiBudWxsXG4gIH07XG4gIGR5bmFtaWNSb3dDb21wb25lbnQ6IFR5cGU8VGFibGVJdGVtQ29tcG9uZW50PFQ+PiA9IG51bGw7XG4gIGluaXRpYWxTb3J0aW5nRnVuY1Byb3BSZWYgPSBudWxsO1xuICBwcml2YXRlIGZ1bmN0aW9uYWxQcm9wQ291bnQgPSAwO1xuXG4gIHNldER5bmFtaWNSb3dDb21wb25lbnQoXG4gICAgY29tcG9uZW50OiBUeXBlPFRhYmxlSXRlbUNvbXBvbmVudDxUPj5cbiAgKTogU2ltcGxlVGFibGVDb25maWc8VD4ge1xuICAgIHRoaXMuZHluYW1pY1Jvd0NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdpdGhOYXR1cmFsU29ydGluZygpOiBTaW1wbGVUYWJsZUNvbmZpZzxUPiB7XG4gICAgY29uc3QgcHJvcFRvVXBkYXRlID0gdGhpcy5mdW5jdGlvbmFsUHJvcHNbdGhpcy5mdW5jdGlvbmFsUHJvcHMubGVuZ3RoIC0gMV07XG5cbiAgICBwcm9wVG9VcGRhdGUuc29ydGFibGUgPSB0cnVlO1xuICAgIHByb3BUb1VwZGF0ZS5wbGFpblNvcnQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pbml0aWFsU29ydGluZ0Z1bmNQcm9wUmVmKSB7XG4gICAgICB0aGlzLmluaXRpYWxTb3J0aW5nRnVuY1Byb3BSZWYucGxhaW5Tb3J0ID0gcHJvcFRvVXBkYXRlLnBsYWluU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3aXRoUGxhaW5Tb3J0aW5nKGxhYmVsOiBzdHJpbmcpOiBTaW1wbGVUYWJsZUNvbmZpZzxUPiB7XG4gICAgY29uc3QgcHJvcFRvVXBkYXRlID0gdGhpcy5mdW5jdGlvbmFsUHJvcHNbdGhpcy5mdW5jdGlvbmFsUHJvcHMubGVuZ3RoIC0gMV07XG4gICAgcHJvcFRvVXBkYXRlLnNvcnRhYmxlID0gdHJ1ZTtcbiAgICBwcm9wVG9VcGRhdGUucGxhaW5Tb3J0ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pbml0aWFsU29ydGluZ0Z1bmNQcm9wUmVmKSB7XG4gICAgICB0aGlzLmluaXRpYWxTb3J0aW5nRnVuY1Byb3BSZWYucGxhaW5Tb3J0ID0gcHJvcFRvVXBkYXRlLnBsYWluU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhc0luaXRpYWxTb3J0aW5nKG9yZGVyOiAnYXNjJyB8ICdkZXNjJyk6IFNpbXBsZVRhYmxlQ29uZmlnPFQ+IHtcbiAgICBjb25zdCBwcm9wVG9VcGRhdGUgPSB0aGlzLmZ1bmN0aW9uYWxQcm9wc1t0aGlzLmZ1bmN0aW9uYWxQcm9wcy5sZW5ndGggLSAxXTtcbiAgICB0aGlzLmluaXRpYWxTb3J0aW5nID0ge1xuICAgICAgcHJvcDogcHJvcFRvVXBkYXRlLnNlbGVjdG9yLFxuICAgICAgb3JkZXIsXG4gICAgICBwbGFpblNvcnQ6IHByb3BUb1VwZGF0ZS5wbGFpblNvcnRcbiAgICB9IGFzIFNvcnRpbmdPcmRlckNvbmZpZzxUPjtcbiAgICB0aGlzLmluaXRpYWxTb3J0aW5nRnVuY1Byb3BSZWYgPSBwcm9wVG9VcGRhdGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRGdW5jdGlvbmFsUHJvcChzZWxlY3RvcjogKGVudGl0eTogVCkgPT4gYW55KTogU2ltcGxlVGFibGVDb25maWc8VD4ge1xuICAgIHRoaXMuZnVuY3Rpb25hbFByb3BzLnB1c2goe1xuICAgICAgaWQ6IHRoaXMuZnVuY3Rpb25hbFByb3BDb3VudCxcbiAgICAgIGhlYWRlcjogJycsXG4gICAgICBzZWxlY3RvcixcbiAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxuICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgcGxhaW5Tb3J0OiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMuZnVuY3Rpb25hbFByb3BDb3VudCsrO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0SGVhZGVyKGhlYWRlcjogc3RyaW5nKTogU2ltcGxlVGFibGVDb25maWc8VD4ge1xuICAgIGNvbnN0IHByb3BUb1VwZGF0ZSA9IHRoaXMuZnVuY3Rpb25hbFByb3BzW3RoaXMuZnVuY3Rpb25hbFByb3BzLmxlbmd0aCAtIDFdO1xuICAgIHByb3BUb1VwZGF0ZS5oZWFkZXIgPSBoZWFkZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdfQ==