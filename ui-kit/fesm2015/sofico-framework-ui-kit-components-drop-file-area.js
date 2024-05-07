import { __decorate } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChild, NgModule } from '@angular/core';
import { FileSelectionService } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { merge, EMPTY, timer, fromEvent } from 'rxjs';
import { filter, map, mapTo, distinctUntilChanged, debounce, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { SvgIconModule } from '@sofico-framework/ui-kit/components/svg-icon';

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

class DropFileAreaModule {
}
DropFileAreaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DropFileAreaComponent],
                exports: [DropFileAreaComponent],
                imports: [CommonModule, SvgIconModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DropFileAreaComponent, DropFileAreaModule };
//# sourceMappingURL=sofico-framework-ui-kit-components-drop-file-area.js.map
