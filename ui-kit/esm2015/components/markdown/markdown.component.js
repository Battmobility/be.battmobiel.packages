import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Changes } from 'ngx-reactivetoolkit';
import { map } from 'rxjs/operators';
import { Converter } from 'showdown';
export class MarkdownComponent {
    constructor() {
        this.converter = new Converter();
    }
    ngOnChanges() { }
    ngOnInit() {
        this.convertedValue$ = this.valueChanges$.pipe(map(value => this.converter.makeHtml(value)));
    }
}
MarkdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-markdown',
                template: ` <div [innerHTML]="convertedValue$ | async"></div> `
            },] }
];
MarkdownComponent.propDecorators = {
    value: [{ type: Input }]
};
__decorate([
    Changes('value')
], MarkdownComponent.prototype, "valueChanges$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9tYXJrZG93bi9tYXJrZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFNckMsTUFBTSxPQUFPLGlCQUFpQjtJQUo5QjtRQVNVLGNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBVXRDLENBQUM7SUFQQyxXQUFXLEtBQVUsQ0FBQztJQUV0QixRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDN0MsQ0FBQztJQUNKLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxxREFBcUQ7YUFDaEU7OztvQkFFRSxLQUFLOztBQUVZO0lBQWpCLE9BQU8sQ0FBQyxPQUFPLENBQUM7d0RBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYW5nZXMgfSBmcm9tICduZ3gtcmVhY3RpdmV0b29sa2l0JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJ3Nob3dkb3duJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLW1hcmtkb3duJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBbaW5uZXJIVE1MXT1cImNvbnZlcnRlZFZhbHVlJCB8IGFzeW5jXCI+PC9kaXY+IGBcbn0pXG5leHBvcnQgY2xhc3MgTWFya2Rvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cbiAgQENoYW5nZXMoJ3ZhbHVlJykgdmFsdWVDaGFuZ2VzJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIHByaXZhdGUgY29udmVydGVyID0gbmV3IENvbnZlcnRlcigpO1xuICBjb252ZXJ0ZWRWYWx1ZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb252ZXJ0ZWRWYWx1ZSQgPSB0aGlzLnZhbHVlQ2hhbmdlcyQucGlwZShcbiAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLmNvbnZlcnRlci5tYWtlSHRtbCh2YWx1ZSkpXG4gICAgKTtcbiAgfVxufVxuIl19