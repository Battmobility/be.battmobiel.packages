import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FileSelectionService } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { EMPTY, fromEvent, merge, timer } from 'rxjs';
import { debounce, distinctUntilChanged, filter, map, mapTo, tap } from 'rxjs/operators';
let DropFileAreaComponent = class DropFileAreaComponent {
    constructor(fileSelectionService) {
        this.fileSelectionService = fileSelectionService;
        this.multipleFiles = true;
        /**
         * The default accepted MIME types are pdf, jpeg and png.
         */
        this.acceptedMimeTypes = [
            'application/pdf',
            'image/jpeg',
            'image/x-png'
        ];
        this.addedFiles = new EventEmitter();
    }
    ngOnDestroy() { }
    ngOnInit() {
        this.dropAreaDropEvent$ = this.getDropEvent$(this.dropArea.nativeElement, 'drop');
        this.dropAreaDragEnterEvent$ = this.getDropEvent$(this.dropArea.nativeElement, 'dragenter');
        this.dropAreaDragOverEvent$ = this.getDropEvent$(this.dropArea.nativeElement, 'dragover');
        this.dropAreaDragLeaveEvent$ = this.getDropEvent$(this.dropArea.nativeElement, 'dragleave');
        this.highlight$ = this.getHighlight$();
        this.droppedFiles$ = this.getDroppedFiles$();
    }
    ngAfterViewInit() {
        if (this.multipleFiles) {
            this.droppedFiles$.pipe(takeUntilDestroy(this)).subscribe(fileList => {
                this.addedFiles.emit(fileList);
            });
        }
        else {
            this.droppedFiles$
                .pipe(filter(fileList => (fileList === null || fileList === void 0 ? void 0 : fileList.length) <= 1), takeUntilDestroy(this))
                .subscribe(fileList => {
                this.addedFiles.emit(fileList);
            });
        }
    }
    showFileSelect() {
        this.fileSelectionService
            .getFileSelector(this.acceptedMimeTypes, this.multipleFiles)
            .pipe(takeUntilDestroy(this))
            .subscribe(fileList => this.addedFiles.emit(fileList));
    }
    getDroppedFiles$() {
        return this.dropAreaDropEvent$.pipe(map((e) => e.dataTransfer.files), filter(files => Array.from(files).every(file => this.acceptedMimeTypes.includes(file.type))));
    }
    getHighlight$() {
        return merge(merge(this.dropAreaDragEnterEvent$, this.dropAreaDragOverEvent$).pipe(mapTo(true)), merge(this.dropAreaDropEvent$, this.dropAreaDragLeaveEvent$).pipe(mapTo(false))).pipe(
        // This delays un-highlighting the drop zone,
        // first added as a fix to eliminate flickering by dragLeave Events
        distinctUntilChanged(), debounce(startDevice => (startDevice ? EMPTY : timer(100))), distinctUntilChanged());
    }
    getDropEvent$(elementRef, eventName) {
        return fromEvent(elementRef, eventName).pipe(tap((e) => {
            e.preventDefault();
            e.stopPropagation();
        }));
    }
};
DropFileAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-drop-file-area',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div #dropArea class="drop-area p-3" [class.highlight]="highlight$ | async">
      <h4 class="mt-2">
        <sof-svg-icon icon="icon-file-empty" size="24"></sof-svg-icon>
        {{ dragAndDropText }}
        <a href="javascript:void(0)" (click)="showFileSelect()">{{
          browseFilesLinkText
        }}</a>
      </h4>
      <p>
        <ng-container *ngIf="!multipleFiles">
          {{ singleFileWarningMsg }}<br />
        </ng-container>
        <ng-content></ng-content>
      </p>
    </div>
  `,
                styles: [":host .drop-area{z-index:11}:host .drop-area.highlight{border-color:#343a40;background-color:#e9ecef}:host .container{width:100%;position:relative}:host .drop-area{border:1.5px dashed #343a40;width:100%;color:#343a40;display:flex;align-items:center;flex-direction:column}:host .drop-area p{text-align:center}"]
            },] }
];
DropFileAreaComponent.ctorParameters = () => [
    { type: FileSelectionService }
];
DropFileAreaComponent.propDecorators = {
    tc: [{ type: Input }],
    dragAndDropText: [{ type: Input }],
    browseFilesLinkText: [{ type: Input }],
    singleFileWarningMsg: [{ type: Input }],
    multipleFiles: [{ type: Input }],
    acceptedMimeTypes: [{ type: Input }],
    addedFiles: [{ type: Output }],
    dropArea: [{ type: ViewChild, args: ['dropArea', { static: true },] }]
};
DropFileAreaComponent = __decorate([
    UntilDestroy()
], DropFileAreaComponent);
export { DropFileAreaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1maWxlLWFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9kcm9wLWZpbGUtYXJlYS9kcm9wLWZpbGUtYXJlYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQ0wsUUFBUSxFQUNSLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILEtBQUssRUFDTCxHQUFHLEVBQ0osTUFBTSxnQkFBZ0IsQ0FBQztJQXlCWCxxQkFBcUIsU0FBckIscUJBQXFCO0lBNEJoQyxZQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQXZCckQsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDOUI7O1dBRUc7UUFDTSxzQkFBaUIsR0FBYTtZQUNyQyxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLGFBQWE7U0FDZCxDQUFDO1FBQ1EsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7SUFjYSxDQUFDO0lBRWxFLFdBQVcsS0FBVSxDQUFDO0lBRXRCLFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVB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QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQzNELG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRU8sYUFBYSxDQUNuQixVQUFlLEVBQ2YsU0FRVTtRQUVWLE9BQU8sU0FBUyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQzFDLEdBQUcsQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFO1lBQ2YsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FDc0IsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQTs7WUFwSkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUUvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7O2FBQ0Y7OztZQWxDUSxvQkFBb0I7OztpQkFvQzFCLEtBQUs7OEJBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQUNMLEtBQUs7NEJBQ0wsS0FBSztnQ0FJTCxLQUFLO3lCQUtMLE1BQU07dUJBRU4sU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0FBaEI1QixxQkFBcUI7SUF2QmpDLFlBQVksRUFBRTtHQXVCRixxQkFBcUIsQ0E4SGpDO1NBOUhZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbGVTZWxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSwgVW50aWxEZXN0cm95IH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5pbXBvcnQgeyBFTVBUWSwgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIG1hcFRvLFxuICB0YXBcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NvZi1kcm9wLWZpbGUtYXJlYScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wLWZpbGUtYXJlYS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgI2Ryb3BBcmVhIGNsYXNzPVwiZHJvcC1hcmVhIHAtM1wiIFtjbGFzcy5oaWdobGlnaHRdPVwiaGlnaGxpZ2h0JCB8IGFzeW5jXCI+XG4gICAgICA8aDQgY2xhc3M9XCJtdC0yXCI+XG4gICAgICAgIDxzb2Ytc3ZnLWljb24gaWNvbj1cImljb24tZmlsZS1lbXB0eVwiIHNpemU9XCIyNFwiPjwvc29mLXN2Zy1pY29uPlxuICAgICAgICB7eyBkcmFnQW5kRHJvcFRleHQgfX1cbiAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJzaG93RmlsZVNlbGVjdCgpXCI+e3tcbiAgICAgICAgICBicm93c2VGaWxlc0xpbmtUZXh0XG4gICAgICAgIH19PC9hPlxuICAgICAgPC9oND5cbiAgICAgIDxwPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW11bHRpcGxlRmlsZXNcIj5cbiAgICAgICAgICB7eyBzaW5nbGVGaWxlV2FybmluZ01zZyB9fTxiciAvPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERyb3BGaWxlQXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdGM6IHN0cmluZztcbiAgQElucHV0KCkgZHJhZ0FuZERyb3BUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJyb3dzZUZpbGVzTGlua1RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgc2luZ2xlRmlsZVdhcm5pbmdNc2c6IHN0cmluZztcbiAgQElucHV0KCkgbXVsdGlwbGVGaWxlcyA9IHRydWU7XG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBhY2NlcHRlZCBNSU1FIHR5cGVzIGFyZSBwZGYsIGpwZWcgYW5kIHBuZy5cbiAgICovXG4gIEBJbnB1dCgpIGFjY2VwdGVkTWltZVR5cGVzOiBzdHJpbmdbXSA9IFtcbiAgICAnYXBwbGljYXRpb24vcGRmJyxcbiAgICAnaW1hZ2UvanBlZycsXG4gICAgJ2ltYWdlL3gtcG5nJ1xuICBdO1xuICBAT3V0cHV0KCkgYWRkZWRGaWxlcyA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZUxpc3Q+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZHJvcEFyZWEnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBkcm9wQXJlYTogRWxlbWVudFJlZjtcblxuICBkcm9wQXJlYURyb3BFdmVudCQ6IE9ic2VydmFibGU8RHJhZ0V2ZW50PjtcbiAgZHJvcEFyZWFEcmFnRW50ZXJFdmVudCQ6IE9ic2VydmFibGU8RHJhZ0V2ZW50PjtcbiAgZHJvcEFyZWFEcmFnT3ZlckV2ZW50JDogT2JzZXJ2YWJsZTxEcmFnRXZlbnQ+O1xuICBkcm9wQXJlYURyYWdMZWF2ZUV2ZW50JDogT2JzZXJ2YWJsZTxEcmFnRXZlbnQ+O1xuXG4gIGhpZ2hsaWdodCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgZHJvcHBlZEZpbGVzJDogT2JzZXJ2YWJsZTxGaWxlTGlzdD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlU2VsZWN0aW9uU2VydmljZTogRmlsZVNlbGVjdGlvblNlcnZpY2UpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZHJvcEFyZWFEcm9wRXZlbnQkID0gdGhpcy5nZXREcm9wRXZlbnQkKFxuICAgICAgdGhpcy5kcm9wQXJlYS5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2Ryb3AnXG4gICAgKTtcbiAgICB0aGlzLmRyb3BBcmVhRHJhZ0VudGVyRXZlbnQkID0gdGhpcy5nZXREcm9wRXZlbnQkKFxuICAgICAgdGhpcy5kcm9wQXJlYS5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2RyYWdlbnRlcidcbiAgICApO1xuICAgIHRoaXMuZHJvcEFyZWFEcmFnT3ZlckV2ZW50JCA9IHRoaXMuZ2V0RHJvcEV2ZW50JChcbiAgICAgIHRoaXMuZHJvcEFyZWEubmF0aXZlRWxlbWVudCxcbiAgICAgICdkcmFnb3ZlcidcbiAgICApO1xuICAgIHRoaXMuZHJvcEFyZWFEcmFnTGVhdmVFdmVudCQgPSB0aGlzLmdldERyb3BFdmVudCQoXG4gICAgICB0aGlzLmRyb3BBcmVhLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnZHJhZ2xlYXZlJ1xuICAgICk7XG5cbiAgICB0aGlzLmhpZ2hsaWdodCQgPSB0aGlzLmdldEhpZ2hsaWdodCQoKTtcblxuICAgIHRoaXMuZHJvcHBlZEZpbGVzJCA9IHRoaXMuZ2V0RHJvcHBlZEZpbGVzJCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpcGxlRmlsZXMpIHtcbiAgICAgIHRoaXMuZHJvcHBlZEZpbGVzJC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpLnN1YnNjcmliZShmaWxlTGlzdCA9PiB7XG4gICAgICAgIHRoaXMuYWRkZWRGaWxlcy5lbWl0KGZpbGVMaXN0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyb3BwZWRGaWxlcyRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKGZpbGVMaXN0ID0+IGZpbGVMaXN0Py5sZW5ndGggPD0gMSksXG4gICAgICAgICAgdGFrZVVudGlsRGVzdHJveSh0aGlzKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoZmlsZUxpc3QgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkZWRGaWxlcy5lbWl0KGZpbGVMaXN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0ZpbGVTZWxlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5maWxlU2VsZWN0aW9uU2VydmljZVxuICAgICAgLmdldEZpbGVTZWxlY3Rvcih0aGlzLmFjY2VwdGVkTWltZVR5cGVzLCB0aGlzLm11bHRpcGxlRmlsZXMpXG4gICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95KHRoaXMpKVxuICAgICAgLnN1YnNjcmliZShmaWxlTGlzdCA9PiB0aGlzLmFkZGVkRmlsZXMuZW1pdChmaWxlTGlzdCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREcm9wcGVkRmlsZXMkKCk6IE9ic2VydmFibGU8RmlsZUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5kcm9wQXJlYURyb3BFdmVudCQucGlwZShcbiAgICAgIG1hcCgoZTogRHJhZ0V2ZW50KSA9PiBlLmRhdGFUcmFuc2Zlci5maWxlcyksXG4gICAgICBmaWx0ZXIoZmlsZXMgPT5cbiAgICAgICAgQXJyYXkuZnJvbShmaWxlcykuZXZlcnkoZmlsZSA9PlxuICAgICAgICAgIHRoaXMuYWNjZXB0ZWRNaW1lVHlwZXMuaW5jbHVkZXMoZmlsZS50eXBlKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGlnaGxpZ2h0JCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICBtZXJnZSh0aGlzLmRyb3BBcmVhRHJhZ0VudGVyRXZlbnQkLCB0aGlzLmRyb3BBcmVhRHJhZ092ZXJFdmVudCQpLnBpcGUoXG4gICAgICAgIG1hcFRvKHRydWUpXG4gICAgICApLFxuICAgICAgbWVyZ2UodGhpcy5kcm9wQXJlYURyb3BFdmVudCQsIHRoaXMuZHJvcEFyZWFEcmFnTGVhdmVFdmVudCQpLnBpcGUoXG4gICAgICAgIG1hcFRvKGZhbHNlKVxuICAgICAgKVxuICAgICkucGlwZShcbiAgICAgIC8vIFRoaXMgZGVsYXlzIHVuLWhpZ2hsaWdodGluZyB0aGUgZHJvcCB6b25lLFxuICAgICAgLy8gZmlyc3QgYWRkZWQgYXMgYSBmaXggdG8gZWxpbWluYXRlIGZsaWNrZXJpbmcgYnkgZHJhZ0xlYXZlIEV2ZW50c1xuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIGRlYm91bmNlKHN0YXJ0RGV2aWNlID0+IChzdGFydERldmljZSA/IEVNUFRZIDogdGltZXIoMTAwKSkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldERyb3BFdmVudCQoXG4gICAgZWxlbWVudFJlZjogYW55LFxuICAgIGV2ZW50TmFtZTpcbiAgICAgIHwgJ2RyYWcnXG4gICAgICB8ICdkcmFnZW5kJ1xuICAgICAgfCAnZHJhZ2VudGVyJ1xuICAgICAgfCAnZHJhZ2V4aXQnXG4gICAgICB8ICdkcmFnbGVhdmUnXG4gICAgICB8ICdkcmFnb3ZlcidcbiAgICAgIHwgJ2RyYWdzdGFydCdcbiAgICAgIHwgJ2Ryb3AnXG4gICk6IE9ic2VydmFibGU8RHJhZ0V2ZW50PiB7XG4gICAgcmV0dXJuIGZyb21FdmVudChlbGVtZW50UmVmLCBldmVudE5hbWUpLnBpcGUoXG4gICAgICB0YXAoKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pXG4gICAgKSBhcyBPYnNlcnZhYmxlPERyYWdFdmVudD47XG4gIH1cbn1cbiJdfQ==