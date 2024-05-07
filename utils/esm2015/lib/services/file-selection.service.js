import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DocumentRefService } from './document-ref.service';
import * as i0 from "@angular/core";
import * as i1 from "./document-ref.service";
export class FileSelectionService {
    constructor(documentRefService) {
        this.documentRefService = documentRefService;
    }
    /**
     * @param acceptedMimeTypes example: [ 'application/pdf', 'image/jpeg', 'image/x-png' ]
     * @param multiple allow selection of multiple files
     */
    getFileSelector(acceptedMimeTypes, multiple = false) {
        const form = this.documentRefService.nativeDocument.createElement('form');
        const fileSelector = this.documentRefService.nativeDocument.createElement('input');
        fileSelector.setAttribute('type', 'file');
        if (multiple) {
            fileSelector.setAttribute('multiple', '');
        }
        if (Array.isArray(acceptedMimeTypes)) {
            fileSelector.setAttribute('accept', acceptedMimeTypes.join(', '));
        }
        form.appendChild(fileSelector);
        form.reset();
        fileSelector.click();
        return fromEvent(fileSelector, 'change').pipe(take(1), map((e) => e.target.files));
    }
}
FileSelectionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FileSelectionService_Factory() { return new FileSelectionService(i0.ɵɵinject(i1.DocumentRefService)); }, token: FileSelectionService, providedIn: "root" });
FileSelectionService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
FileSelectionService.ctorParameters = () => [
    { type: DocumentRefService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZWxlY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdXRpbHMvc3JjL2xpYi9zZXJ2aWNlcy9maWxlLXNlbGVjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFHNUQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUFHLENBQUM7SUFFOUQ7OztPQUdHO0lBQ0gsZUFBZSxDQUNiLGlCQUE0QixFQUM1QixRQUFRLEdBQUcsS0FBSztRQUVoQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FDdkUsT0FBTyxDQUNSLENBQUM7UUFDRixZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUxQyxJQUFJLFFBQVEsRUFBRTtZQUNaLFlBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDcEMsWUFBWSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDbkU7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVyQixPQUFPLFNBQVMsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUMzQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUNoQyxDQUFDO0lBQ0osQ0FBQzs7OztZQWxDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7WUFGekIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEb2N1bWVudFJlZlNlcnZpY2UgfSBmcm9tICcuL2RvY3VtZW50LXJlZi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBGaWxlU2VsZWN0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdW1lbnRSZWZTZXJ2aWNlOiBEb2N1bWVudFJlZlNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBhY2NlcHRlZE1pbWVUeXBlcyBleGFtcGxlOiBbICdhcHBsaWNhdGlvbi9wZGYnLCAnaW1hZ2UvanBlZycsICdpbWFnZS94LXBuZycgXVxuICAgKiBAcGFyYW0gbXVsdGlwbGUgYWxsb3cgc2VsZWN0aW9uIG9mIG11bHRpcGxlIGZpbGVzXG4gICAqL1xuICBnZXRGaWxlU2VsZWN0b3IoXG4gICAgYWNjZXB0ZWRNaW1lVHlwZXM/OiBzdHJpbmdbXSxcbiAgICBtdWx0aXBsZSA9IGZhbHNlXG4gICk6IE9ic2VydmFibGU8RmlsZUxpc3Q+IHtcbiAgICBjb25zdCBmb3JtID0gdGhpcy5kb2N1bWVudFJlZlNlcnZpY2UubmF0aXZlRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IGZpbGVTZWxlY3RvciA9IHRoaXMuZG9jdW1lbnRSZWZTZXJ2aWNlLm5hdGl2ZURvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnaW5wdXQnXG4gICAgKTtcbiAgICBmaWxlU2VsZWN0b3Iuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKTtcblxuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgZmlsZVNlbGVjdG9yLnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnJyk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYWNjZXB0ZWRNaW1lVHlwZXMpKSB7XG4gICAgICBmaWxlU2VsZWN0b3Iuc2V0QXR0cmlidXRlKCdhY2NlcHQnLCBhY2NlcHRlZE1pbWVUeXBlcy5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpbGVTZWxlY3Rvcik7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGZpbGVTZWxlY3Rvci5jbGljaygpO1xuXG4gICAgcmV0dXJuIGZyb21FdmVudChmaWxlU2VsZWN0b3IsICdjaGFuZ2UnKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIG1hcCgoZTogYW55KSA9PiBlLnRhcmdldC5maWxlcylcbiAgICApO1xuICB9XG59XG4iXX0=