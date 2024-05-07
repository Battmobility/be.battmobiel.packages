import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FileSelectionService } from '@sofico-framework/utils';
import { Observable } from 'rxjs';
export declare class DropFileAreaComponent implements AfterViewInit, OnInit, OnDestroy {
    private fileSelectionService;
    tc: string;
    dragAndDropText: string;
    browseFilesLinkText: string;
    singleFileWarningMsg: string;
    multipleFiles: boolean;
    /**
     * The default accepted MIME types are pdf, jpeg and png.
     */
    acceptedMimeTypes: string[];
    addedFiles: EventEmitter<FileList>;
    dropArea: ElementRef;
    dropAreaDropEvent$: Observable<DragEvent>;
    dropAreaDragEnterEvent$: Observable<DragEvent>;
    dropAreaDragOverEvent$: Observable<DragEvent>;
    dropAreaDragLeaveEvent$: Observable<DragEvent>;
    highlight$: Observable<boolean>;
    droppedFiles$: Observable<FileList>;
    constructor(fileSelectionService: FileSelectionService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    showFileSelect(): void;
    private getDroppedFiles$;
    private getHighlight$;
    private getDropEvent$;
}
