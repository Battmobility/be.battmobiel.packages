import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
export class InViewComponent {
    constructor() {
        this.scrollableRef = null;
        this.preloadHeight = 0;
        this.inView = new EventEmitter();
    }
    ngOnInit() {
        // We should only emit the most recent event
        const fn = (entries) => {
            var _a, _b;
            return this.inView.emit((_b = (_a = entries.sort((a, b) => (a.time > b.time ? -1 : 1))) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.isIntersecting);
        };
        this.intersectionObserver = new IntersectionObserver(fn, {
            root: this.scrollableRef,
            rootMargin: `0px 0px ${this.preloadHeight}px 0px`
        });
        this.intersectionObserver.observe(this.targetRef.nativeElement);
    }
    ngOnDestroy() {
        this.intersectionObserver.disconnect();
    }
}
InViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-in-view',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-content></ng-content>
    <div class="in-slice">
      <div #targetRef></div>
    </div>
  `,
                styles: [":host .in-slice{display:flex;flex-wrap:nowrap}:host .in-slice div{width:1px}:host .in-slice:after,:host .in-slice:before{content:\"\";width:100%}"]
            },] }
];
InViewComponent.propDecorators = {
    scrollableRef: [{ type: Input }],
    preloadHeight: [{ type: Input }],
    inView: [{ type: Output }],
    targetRef: [{ type: ViewChild, args: ['targetRef', { read: ElementRef, static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2luLXZpZXcvaW4tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQWF2QixNQUFNLE9BQU8sZUFBZTtJQVg1QjtRQVlXLGtCQUFhLEdBQVEsSUFBSSxDQUFDO1FBQzFCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBeUJqRCxDQUFDO0lBbEJDLFFBQVE7UUFDTiw0Q0FBNEM7UUFDNUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxPQUFvQyxFQUFFLEVBQUU7O1lBQ2xELE9BQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGFBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMENBQUcsQ0FBQywyQ0FBRyxjQUFjLENBQ3hFLENBQUE7U0FBQSxDQUFDO1FBRUosSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsRUFBRSxFQUFFO1lBQ3ZELElBQUksRUFBRSxJQUFJLENBQUMsYUFBYTtZQUN4QixVQUFVLEVBQUUsV0FBVyxJQUFJLENBQUMsYUFBYSxRQUFRO1NBQ2xELENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7OztHQUtUOzthQUVGOzs7NEJBRUUsS0FBSzs0QkFDTCxLQUFLO3FCQUVMLE1BQU07d0JBRU4sU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc29mLWluLXZpZXcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzcz1cImluLXNsaWNlXCI+XG4gICAgICA8ZGl2ICN0YXJnZXRSZWY+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2luLXZpZXcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJblZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHNjcm9sbGFibGVSZWY6IGFueSA9IG51bGw7XG4gIEBJbnB1dCgpIHByZWxvYWRIZWlnaHQgPSAwO1xuXG4gIEBPdXRwdXQoKSBpblZpZXcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQFZpZXdDaGlsZCgndGFyZ2V0UmVmJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgdGFyZ2V0UmVmOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgaW50ZXJzZWN0aW9uT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IGVtaXQgdGhlIG1vc3QgcmVjZW50IGV2ZW50XG4gICAgY29uc3QgZm4gPSAoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdKSA9PlxuICAgICAgdGhpcy5pblZpZXcuZW1pdChcbiAgICAgICAgZW50cmllcy5zb3J0KChhLCBiKSA9PiAoYS50aW1lID4gYi50aW1lID8gLTEgOiAxKSk/LlswXT8uaXNJbnRlcnNlY3RpbmdcbiAgICAgICk7XG5cbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZuLCB7XG4gICAgICByb290OiB0aGlzLnNjcm9sbGFibGVSZWYsXG4gICAgICByb290TWFyZ2luOiBgMHB4IDBweCAke3RoaXMucHJlbG9hZEhlaWdodH1weCAwcHhgXG4gICAgfSk7XG5cbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy50YXJnZXRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfVxufVxuIl19