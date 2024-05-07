import { __decorate } from "tslib";
import { Component, ContentChildren, Input, Optional } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
import { InputDirective } from '@sofico-framework/ui-kit/components/input';
import { isObject } from '@sofico-framework/utils';
import { takeUntilDestroy, UntilDestroy } from 'ngx-reactivetoolkit';
import { debounceTime, filter, map, startWith, switchMap, tap } from 'rxjs/operators';
let InputWrapperComponent = class InputWrapperComponent {
    constructor(form) {
        this.form = form;
    }
    ngOnDestroy() { }
    ngAfterContentInit() {
        var _a;
        this.tc = (_a = this.form) === null || _a === void 0 ? void 0 : _a.tc;
        // we need a trigger when the formgroup adds or removes controls
        const trigger$ = this.form.formGroup.valueChanges.pipe(startWith(null));
        this.control$ = trigger$.pipe(switchMap(() => this.children.changes
            .pipe(startWith(this.children), debounceTime(0) // children is not updated yet by angular
        )
            .pipe(filter(children => (children === null || children === void 0 ? void 0 : children.length) > 0), // ignore if no children
        // this is to allow radiobuttons
        map(children => [
            ...new Set(children.map(v => v.formControl))
        ]), tap(children => {
            // throw error if length of distincted children is different then 1
            if (children.length !== 1) {
                throw new Error('A sof-input-wrapper component can only contain one InputDirective (unless its a radiobutton)');
            }
        }), map(children => children[0]) // only one distinct control supported
        )), takeUntilDestroy(this));
        this.required$ = this.control$.pipe(map(control => {
            var _a;
            return (control === null || control === void 0 ? void 0 : control.validator) &&
                ((_a = control === null || control === void 0 ? void 0 : control.validator(new FormControl(''))) === null || _a === void 0 ? void 0 : _a.required) === true;
        }));
        this.errorMessages$ = this.control$.pipe(switchMap(control => {
            return control === null || control === void 0 ? void 0 : control.statusChanges.pipe(startWith(control.status), map(status => this.mapErrorObjToMessages(control.errors, this.form.actualErrorMap)));
        }));
    }
    mapErrorObjToMessages(obj, errorMap) {
        return (errorMap &&
            obj &&
            Object.keys(obj).map(k => {
                const params = obj[k];
                return {
                    value: errorMap[k],
                    params: isObject(params) ? params : null
                };
            }));
    }
};
InputWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'sof-input-wrapper',
                template: `
    <div class="form-group">
      <label
        *ngIf="!(label | sofIsNullOrUndefined)"
        class="sb-form-control-wrapper-label"
      >
        {{ label }}
        <ng-container *ngIf="required$ | async"> *</ng-container>
      </label>

      <div>
        <ng-content></ng-content>
      </div>
      <small *ngIf="hint?.length > 0" class="form-text text-muted">
        {{ hint }}
      </small>
      <ng-container *ngIf="errorMessages$ | async as errorMessages">
        <ul
          *ngIf="
            errorMessages?.length > 0 &&
            ((control$ | async)?.touched || form?.submitted)
          "
        >
          <ng-container *ngFor="let message of errorMessages">
            <li class="invalid-feedback" [style.display]="'block'">
              {{ tc + '.' + message.value | translate: message.params }}
            </li>
          </ng-container>
        </ul>
      </ng-container>
    </div>
  `,
                styles: ["ul{list-style-type:none;padding:0}"]
            },] }
];
InputWrapperComponent.ctorParameters = () => [
    { type: FormComponent, decorators: [{ type: Optional }] }
];
InputWrapperComponent.propDecorators = {
    label: [{ type: Input }],
    hint: [{ type: Input }],
    children: [{ type: ContentChildren, args: [InputDirective,] }]
};
InputWrapperComponent = __decorate([
    UntilDestroy()
], InputWrapperComponent);
export { InputWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2lucHV0LXdyYXBwZXIvaW5wdXQtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFFTCxRQUFRLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFtQixXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckUsT0FBTyxFQUNMLFlBQVksRUFDWixNQUFNLEVBQ04sR0FBRyxFQUNILFNBQVMsRUFDVCxTQUFTLEVBQ1QsR0FBRyxFQUNKLE1BQU0sZ0JBQWdCLENBQUM7SUF3Q1gscUJBQXFCLFNBQXJCLHFCQUFxQjtJQWtCaEMsWUFFUyxJQUFtQjtRQUFuQixTQUFJLEdBQUosSUFBSSxDQUFlO0lBQ3pCLENBQUM7SUFFSixXQUFXLEtBQVUsQ0FBQztJQUV0QixrQkFBa0I7O1FBQ2hCLElBQUksQ0FBQyxFQUFFLFNBQUcsSUFBSSxDQUFDLElBQUksMENBQUUsRUFBRSxDQUFDO1FBQ3hCLGdFQUFnRTtRQUNoRSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FDM0IsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzthQUNsQixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLHlDQUF5QztTQUMxRDthQUNBLElBQUksQ0FDSCxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxNQUFNLElBQUcsQ0FBQyxDQUFDLEVBQUUsd0JBQXdCO1FBQ2xFLGdDQUFnQztRQUNoQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNkLEdBQUcsSUFBSSxHQUFHLENBQWMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMxRCxDQUFDLEVBQ0YsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2IsbUVBQW1FO1lBQ25FLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQ2IsOEZBQThGLENBQy9GLENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztTQUNwRSxDQUNKLEVBQ0QsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQ3ZCLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNqQyxHQUFHLENBQ0QsT0FBTyxDQUFDLEVBQUU7O1lBQ1IsT0FBQSxDQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxTQUFTO2dCQUNsQixPQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxTQUFTLENBQUMsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLDJDQUFHLFFBQVEsTUFBSyxJQUFJLENBQUE7U0FBQSxDQUM3RCxDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0QyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsYUFBYSxDQUFDLElBQUksQ0FDaEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQ1gsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FDckUsRUFDRDtRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRU8scUJBQXFCLENBQzNCLEdBQTJCLEVBQzNCLFFBQW1DO1FBRW5DLE9BQU8sQ0FDTCxRQUFRO1lBQ1IsR0FBRztZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE9BQU87b0JBQ0wsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSTtpQkFDekMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUE5SEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStCVDs7YUFFRjs7O1lBbkRRLGFBQWEsdUJBdUVqQixRQUFROzs7b0JBZlYsS0FBSzttQkFLTCxLQUFLO3VCQU9MLGVBQWUsU0FBQyxjQUFjOztBQWhCcEIscUJBQXFCO0lBckNqQyxZQUFZLEVBQUU7R0FxQ0YscUJBQXFCLENBMEZqQztTQTFGWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdWkta2l0L2NvbXBvbmVudHMvZm9ybSc7XG5pbXBvcnQgeyBJbnB1dERpcmVjdGl2ZSB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2lucHV0JztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnQHNvZmljby1mcmFtZXdvcmsvdXRpbHMnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSwgVW50aWxEZXN0cm95IH0gZnJvbSAnbmd4LXJlYWN0aXZldG9vbGtpdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzdGFydFdpdGgsXG4gIHN3aXRjaE1hcCxcbiAgdGFwXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZvcm1FcnJvck1lc3NhZ2UgfSBmcm9tICcuL3R5cGVzL2Zvcm0tZXJyb3ItbWVzc2FnZS50eXBlJztcblxuQFVudGlsRGVzdHJveSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtaW5wdXQtd3JhcHBlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICAqbmdJZj1cIiEobGFiZWwgfCBzb2ZJc051bGxPclVuZGVmaW5lZClcIlxuICAgICAgICBjbGFzcz1cInNiLWZvcm0tY29udHJvbC13cmFwcGVyLWxhYmVsXCJcbiAgICAgID5cbiAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlcXVpcmVkJCB8IGFzeW5jXCI+ICo8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNtYWxsICpuZ0lmPVwiaGludD8ubGVuZ3RoID4gMFwiIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cbiAgICAgICAge3sgaGludCB9fVxuICAgICAgPC9zbWFsbD5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlcnJvck1lc3NhZ2VzJCB8IGFzeW5jIGFzIGVycm9yTWVzc2FnZXNcIj5cbiAgICAgICAgPHVsXG4gICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXM/Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICgoY29udHJvbCQgfCBhc3luYyk/LnRvdWNoZWQgfHwgZm9ybT8uc3VibWl0dGVkKVxuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIGVycm9yTWVzc2FnZXNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIiBbc3R5bGUuZGlzcGxheV09XCInYmxvY2snXCI+XG4gICAgICAgICAgICAgIHt7IHRjICsgJy4nICsgbWVzc2FnZS52YWx1ZSB8IHRyYW5zbGF0ZTogbWVzc2FnZS5wYXJhbXMgfX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtd3JhcHBlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIElucHV0V3JhcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgd2lsbCBiZSBkaXNwbGF5ZWQgYWJvdmUgdGhlIGlucHV0IGZpZWxkLlxuICAgKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGhpbnQgaXMgdXNlZCB0byBhZGQgc29tZSBleHRyYSBpbmZvcm1hdGlvbiBiZWxvdyB0aGUgaW5wdXQgZmllbGQuXG4gICAqL1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmc7XG5cbiAgdGM6IHN0cmluZztcbiAgZXJyb3JNZXNzYWdlcyQ6IE9ic2VydmFibGU8Rm9ybUVycm9yTWVzc2FnZVtdPjtcbiAgY29udHJvbCQ6IE9ic2VydmFibGU8QWJzdHJhY3RDb250cm9sPjtcbiAgcmVxdWlyZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oSW5wdXREaXJlY3RpdmUpIGNoaWxkcmVuOiBRdWVyeUxpc3Q8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIHB1YmxpYyBmb3JtOiBGb3JtQ29tcG9uZW50XG4gICkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGMgPSB0aGlzLmZvcm0/LnRjO1xuICAgIC8vIHdlIG5lZWQgYSB0cmlnZ2VyIHdoZW4gdGhlIGZvcm1ncm91cCBhZGRzIG9yIHJlbW92ZXMgY29udHJvbHNcbiAgICBjb25zdCB0cmlnZ2VyJCA9IHRoaXMuZm9ybS5mb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpKTtcbiAgICB0aGlzLmNvbnRyb2wkID0gdHJpZ2dlciQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICB0aGlzLmNoaWxkcmVuLmNoYW5nZXNcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLmNoaWxkcmVuKSxcbiAgICAgICAgICAgIGRlYm91bmNlVGltZSgwKSAvLyBjaGlsZHJlbiBpcyBub3QgdXBkYXRlZCB5ZXQgYnkgYW5ndWxhclxuICAgICAgICAgIClcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihjaGlsZHJlbiA9PiBjaGlsZHJlbj8ubGVuZ3RoID4gMCksIC8vIGlnbm9yZSBpZiBubyBjaGlsZHJlblxuICAgICAgICAgICAgLy8gdGhpcyBpcyB0byBhbGxvdyByYWRpb2J1dHRvbnNcbiAgICAgICAgICAgIG1hcChjaGlsZHJlbiA9PiBbXG4gICAgICAgICAgICAgIC4uLm5ldyBTZXQ8Rm9ybUNvbnRyb2w+KGNoaWxkcmVuLm1hcCh2ID0+IHYuZm9ybUNvbnRyb2wpKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0YXAoY2hpbGRyZW4gPT4ge1xuICAgICAgICAgICAgICAvLyB0aHJvdyBlcnJvciBpZiBsZW5ndGggb2YgZGlzdGluY3RlZCBjaGlsZHJlbiBpcyBkaWZmZXJlbnQgdGhlbiAxXG4gICAgICAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAnQSBzb2YtaW5wdXQtd3JhcHBlciBjb21wb25lbnQgY2FuIG9ubHkgY29udGFpbiBvbmUgSW5wdXREaXJlY3RpdmUgKHVubGVzcyBpdHMgYSByYWRpb2J1dHRvbiknXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtYXAoY2hpbGRyZW4gPT4gY2hpbGRyZW5bMF0pIC8vIG9ubHkgb25lIGRpc3RpbmN0IGNvbnRyb2wgc3VwcG9ydGVkXG4gICAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHRha2VVbnRpbERlc3Ryb3kodGhpcylcbiAgICApO1xuICAgIHRoaXMucmVxdWlyZWQkID0gdGhpcy5jb250cm9sJC5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICBjb250cm9sID0+XG4gICAgICAgICAgY29udHJvbD8udmFsaWRhdG9yICYmXG4gICAgICAgICAgY29udHJvbD8udmFsaWRhdG9yKG5ldyBGb3JtQ29udHJvbCgnJykpPy5yZXF1aXJlZCA9PT0gdHJ1ZVxuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2VzJCA9IHRoaXMuY29udHJvbCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChjb250cm9sID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRyb2w/LnN0YXR1c0NoYW5nZXMucGlwZShcbiAgICAgICAgICBzdGFydFdpdGgoY29udHJvbC5zdGF0dXMpLFxuICAgICAgICAgIG1hcChzdGF0dXMgPT5cbiAgICAgICAgICAgIHRoaXMubWFwRXJyb3JPYmpUb01lc3NhZ2VzKGNvbnRyb2wuZXJyb3JzLCB0aGlzLmZvcm0uYWN0dWFsRXJyb3JNYXApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXBFcnJvck9ialRvTWVzc2FnZXMoXG4gICAgb2JqOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgIGVycm9yTWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICk6IEZvcm1FcnJvck1lc3NhZ2VbXSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGVycm9yTWFwICYmXG4gICAgICBvYmogJiZcbiAgICAgIE9iamVjdC5rZXlzKG9iaikubWFwKGsgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBvYmpba107XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGVycm9yTWFwW2tdLFxuICAgICAgICAgIHBhcmFtczogaXNPYmplY3QocGFyYW1zKSA/IHBhcmFtcyA6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19