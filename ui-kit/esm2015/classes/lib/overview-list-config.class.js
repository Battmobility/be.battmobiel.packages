/**
 * Configuration/builder to build an overviewList config
 * This object contains all the configuration regarding searching and
 * sorting of an object
 */
export class OverviewListConfig {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXctbGlzdC1jb25maWcuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jbGFzc2VzL3NyYy9saWIvb3ZlcnZpZXctbGlzdC1jb25maWcuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7Ozs7R0FJRztBQUNILE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUFDRSxvQkFBZSxHQU1ULEVBQUUsQ0FBQztRQUNULG1CQUFjLEdBQTBCO1lBQ3RDLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztRQUNGLHdCQUFtQixHQUErQixJQUFJLENBQUM7UUFDL0MsOEJBQXlCLEdBQUcsSUFBSSxDQUFDO0lBK0QzQyxDQUFDO0lBN0RDLGlCQUFpQixDQUFDLFFBQTRCO1FBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ3hCLEtBQUssRUFBRSxJQUFJO1lBQ1gsUUFBUTtZQUNSLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0UsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsa0RBQWtEO0lBQ2xELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFhO1FBQzlCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0UsWUFBWSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDM0IsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDN0IsWUFBWSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO1NBQ25FO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBYTtRQUM1QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNFLFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzNCLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzdCLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztTQUNuRTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQXFCO1FBQ3BDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNwQixJQUFJLEVBQUUsWUFBWSxDQUFDLFFBQVE7WUFDM0IsS0FBSztZQUNMLFNBQVMsRUFBRSxZQUFZLENBQUMsU0FBUztTQUNULENBQUM7UUFDM0IsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFlBQVksQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxzQkFBc0IsQ0FDcEIsU0FBcUM7UUFFckMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L3R5cGVzJztcbmltcG9ydCB7IFNvcnRpbmdPcmRlckNvbmZpZyB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3V0aWxzJztcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uL2J1aWxkZXIgdG8gYnVpbGQgYW4gb3ZlcnZpZXdMaXN0IGNvbmZpZ1xuICogVGhpcyBvYmplY3QgY29udGFpbnMgYWxsIHRoZSBjb25maWd1cmF0aW9uIHJlZ2FyZGluZyBzZWFyY2hpbmcgYW5kXG4gKiBzb3J0aW5nIG9mIGFuIG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXdMaXN0Q29uZmlnPFQ+IHtcbiAgZnVuY3Rpb25hbFByb3BzOiB7XG4gICAgc2VsZWN0b3I6IChlbnRpdHk6IFQpID0+IGFueTtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHNlYXJjaGFibGU6IGJvb2xlYW47XG4gICAgc29ydGFibGU6IGJvb2xlYW47XG4gICAgcGxhaW5Tb3J0OiBib29sZWFuO1xuICB9W10gPSBbXTtcbiAgaW5pdGlhbFNvcnRpbmc6IFNvcnRpbmdPcmRlckNvbmZpZzxUPiA9IHtcbiAgICBwcm9wOiBudWxsXG4gIH07XG4gIGR5bmFtaWNSb3dDb21wb25lbnQ6IFR5cGU8TGlzdEl0ZW1Db21wb25lbnQ8VD4+ID0gbnVsbDtcbiAgcHJpdmF0ZSBpbml0aWFsU29ydGluZ0Z1bmNQcm9wUmVmID0gbnVsbDtcblxuICBhZGRGdW5jdGlvbmFsUHJvcChzZWxlY3RvcjogKGVudGl0eTogVCkgPT4gYW55KTogT3ZlcnZpZXdMaXN0Q29uZmlnPFQ+IHtcbiAgICB0aGlzLmZ1bmN0aW9uYWxQcm9wcy5wdXNoKHtcbiAgICAgIGxhYmVsOiBudWxsLFxuICAgICAgc2VsZWN0b3IsXG4gICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcbiAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgIHBsYWluU29ydDogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdpdGhTZWFyY2goKTogT3ZlcnZpZXdMaXN0Q29uZmlnPFQ+IHtcbiAgICBjb25zdCBwcm9wVG9VcGRhdGUgPSB0aGlzLmZ1bmN0aW9uYWxQcm9wc1t0aGlzLmZ1bmN0aW9uYWxQcm9wcy5sZW5ndGggLSAxXTtcbiAgICBwcm9wVG9VcGRhdGUuc2VhcmNoYWJsZSA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayB3aXRoTmF0dXJhbFNvcnRpbmd9ICAqL1xuICB3aXRoU29ydGluZyhsYWJlbDogc3RyaW5nKTogT3ZlcnZpZXdMaXN0Q29uZmlnPFQ+IHtcbiAgICByZXR1cm4gdGhpcy53aXRoTmF0dXJhbFNvcnRpbmcobGFiZWwpO1xuICB9XG5cbiAgd2l0aE5hdHVyYWxTb3J0aW5nKGxhYmVsOiBzdHJpbmcpOiBPdmVydmlld0xpc3RDb25maWc8VD4ge1xuICAgIGNvbnN0IHByb3BUb1VwZGF0ZSA9IHRoaXMuZnVuY3Rpb25hbFByb3BzW3RoaXMuZnVuY3Rpb25hbFByb3BzLmxlbmd0aCAtIDFdO1xuICAgIHByb3BUb1VwZGF0ZS5sYWJlbCA9IGxhYmVsO1xuICAgIHByb3BUb1VwZGF0ZS5zb3J0YWJsZSA9IHRydWU7XG4gICAgcHJvcFRvVXBkYXRlLnBsYWluU29ydCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmluaXRpYWxTb3J0aW5nRnVuY1Byb3BSZWYpIHtcbiAgICAgIHRoaXMuaW5pdGlhbFNvcnRpbmdGdW5jUHJvcFJlZi5wbGFpblNvcnQgPSBwcm9wVG9VcGRhdGUucGxhaW5Tb3J0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdpdGhQbGFpblNvcnRpbmcobGFiZWw6IHN0cmluZyk6IE92ZXJ2aWV3TGlzdENvbmZpZzxUPiB7XG4gICAgY29uc3QgcHJvcFRvVXBkYXRlID0gdGhpcy5mdW5jdGlvbmFsUHJvcHNbdGhpcy5mdW5jdGlvbmFsUHJvcHMubGVuZ3RoIC0gMV07XG4gICAgcHJvcFRvVXBkYXRlLmxhYmVsID0gbGFiZWw7XG4gICAgcHJvcFRvVXBkYXRlLnNvcnRhYmxlID0gdHJ1ZTtcbiAgICBwcm9wVG9VcGRhdGUucGxhaW5Tb3J0ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pbml0aWFsU29ydGluZ0Z1bmNQcm9wUmVmKSB7XG4gICAgICB0aGlzLmluaXRpYWxTb3J0aW5nRnVuY1Byb3BSZWYucGxhaW5Tb3J0ID0gcHJvcFRvVXBkYXRlLnBsYWluU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhc0luaXRpYWxTb3J0aW5nKG9yZGVyOiAnYXNjJyB8ICdkZXNjJyk6IE92ZXJ2aWV3TGlzdENvbmZpZzxUPiB7XG4gICAgY29uc3QgcHJvcFRvVXBkYXRlID0gdGhpcy5mdW5jdGlvbmFsUHJvcHNbdGhpcy5mdW5jdGlvbmFsUHJvcHMubGVuZ3RoIC0gMV07XG4gICAgdGhpcy5pbml0aWFsU29ydGluZyA9IHtcbiAgICAgIHByb3A6IHByb3BUb1VwZGF0ZS5zZWxlY3RvcixcbiAgICAgIG9yZGVyLFxuICAgICAgcGxhaW5Tb3J0OiBwcm9wVG9VcGRhdGUucGxhaW5Tb3J0XG4gICAgfSBhcyBTb3J0aW5nT3JkZXJDb25maWc8VD47XG4gICAgdGhpcy5pbml0aWFsU29ydGluZ0Z1bmNQcm9wUmVmID0gcHJvcFRvVXBkYXRlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0RHluYW1pY1Jvd0NvbXBvbmVudChcbiAgICBjb21wb25lbnQ6IFR5cGU8TGlzdEl0ZW1Db21wb25lbnQ8VD4+XG4gICk6IE92ZXJ2aWV3TGlzdENvbmZpZzxUPiB7XG4gICAgdGhpcy5keW5hbWljUm93Q29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=