import { Injectable } from '@angular/core';
import { DocumentRefService } from './document-ref.service';
import { WindowRefService } from './window-ref.service';
export class DocumentDownloadService {
    constructor(documentRefService, windowRefService) {
        this.documentRefService = documentRefService;
        this.windowRefService = windowRefService;
    }
    downloadDocument(blob, documentName) {
        const download = this.documentRefService.nativeDocument.createElement('a');
        this.documentRefService.nativeDocument.body.appendChild(download);
        if (this.windowRefService.nativeWindow.navigator.appVersion
            .toString()
            .includes('Trident')) {
            this.windowRefService.nativeWindow.navigator.msSaveBlob(blob, documentName);
        }
        else {
            // for other browsers
            const fileURL = this.windowRefService.nativeWindow.URL.createObjectURL(blob);
            download.href = fileURL;
            download.download = documentName;
            download.click();
            download.remove();
        }
    }
}
DocumentDownloadService.decorators = [
    { type: Injectable }
];
DocumentDownloadService.ctorParameters = () => [
    { type: DocumentRefService },
    { type: WindowRefService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtZG93bmxvYWQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdXRpbHMvc3JjL2xpYi9zZXJ2aWNlcy9kb2N1bWVudC1kb3dubG9hZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHeEQsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUNVLGtCQUFzQyxFQUN0QyxnQkFBa0M7UUFEbEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3pDLENBQUM7SUFFSixnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsWUFBWTtRQUNqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEUsSUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFVO2FBQ3BELFFBQVEsRUFBRTthQUNWLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDdEI7WUFDQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQ3JELElBQUksRUFDSixZQUFZLENBQ2IsQ0FBQztTQUNIO2FBQU07WUFDTCxxQkFBcUI7WUFDckIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUNwRSxJQUFJLENBQ0wsQ0FBQztZQUNGLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3hCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7WUE3QkYsVUFBVTs7O1lBSEYsa0JBQWtCO1lBQ2xCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvY3VtZW50UmVmU2VydmljZSB9IGZyb20gJy4vZG9jdW1lbnQtcmVmLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2luZG93UmVmU2VydmljZSB9IGZyb20gJy4vd2luZG93LXJlZi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50RG93bmxvYWRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkb2N1bWVudFJlZlNlcnZpY2U6IERvY3VtZW50UmVmU2VydmljZSxcbiAgICBwcml2YXRlIHdpbmRvd1JlZlNlcnZpY2U6IFdpbmRvd1JlZlNlcnZpY2VcbiAgKSB7fVxuXG4gIGRvd25sb2FkRG9jdW1lbnQoYmxvYiwgZG9jdW1lbnROYW1lKTogdm9pZCB7XG4gICAgY29uc3QgZG93bmxvYWQgPSB0aGlzLmRvY3VtZW50UmVmU2VydmljZS5uYXRpdmVEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdGhpcy5kb2N1bWVudFJlZlNlcnZpY2UubmF0aXZlRG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZCk7XG4gICAgaWYgKFxuICAgICAgdGhpcy53aW5kb3dSZWZTZXJ2aWNlLm5hdGl2ZVdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvblxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAuaW5jbHVkZXMoJ1RyaWRlbnQnKVxuICAgICkge1xuICAgICAgdGhpcy53aW5kb3dSZWZTZXJ2aWNlLm5hdGl2ZVdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYihcbiAgICAgICAgYmxvYixcbiAgICAgICAgZG9jdW1lbnROYW1lXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3Igb3RoZXIgYnJvd3NlcnNcbiAgICAgIGNvbnN0IGZpbGVVUkwgPSB0aGlzLndpbmRvd1JlZlNlcnZpY2UubmF0aXZlV2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoXG4gICAgICAgIGJsb2JcbiAgICAgICk7XG4gICAgICBkb3dubG9hZC5ocmVmID0gZmlsZVVSTDtcbiAgICAgIGRvd25sb2FkLmRvd25sb2FkID0gZG9jdW1lbnROYW1lO1xuICAgICAgZG93bmxvYWQuY2xpY2soKTtcbiAgICAgIGRvd25sb2FkLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19