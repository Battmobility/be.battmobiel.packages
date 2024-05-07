import { Directive, Input } from '@angular/core';
import { FormComponent } from '@sofico-framework/ui-kit/components/form';
export class InputDirective {
    constructor(form) {
        this.form = form;
    }
    set formControlName(name) {
        throw new Error('You should use the [formControl] directive instead of the formControlName directive');
    }
    ngOnInit() {
        if (!this.form) {
            throw new Error('The [sofInput] directive should be used inside a sof-form element');
        }
    }
}
InputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sofInput]'
            },] }
];
InputDirective.ctorParameters = () => [
    { type: FormComponent }
];
InputDirective.propDecorators = {
    sofInput: [{ type: Input }],
    formControl: [{ type: Input }],
    formControlName: [{ type: Input }],
    errorMap: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29maWNvLWZyYW1ld29yay91aS1raXQvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBS3pFLE1BQU0sT0FBTyxjQUFjO0lBY3pCLFlBQW1CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7SUFBRyxDQUFDO0lBVjFDLElBQWEsZUFBZSxDQUFDLElBQVk7UUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FDYixxRkFBcUYsQ0FDdEYsQ0FBQztJQUNKLENBQUM7SUFRRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUNiLG1FQUFtRSxDQUNwRSxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7WUFKUSxhQUFhOzs7dUJBTW5CLEtBQUs7MEJBQ0wsS0FBSzs4QkFFTCxLQUFLO3VCQU1MLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bzb2ZpY28tZnJhbWV3b3JrL3VpLWtpdC9jb21wb25lbnRzL2Zvcm0nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc29mSW5wdXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnB1dERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNvZklucHV0O1xuICBASW5wdXQoKSBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgQElucHV0KCkgc2V0IGZvcm1Db250cm9sTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnWW91IHNob3VsZCB1c2UgdGhlIFtmb3JtQ29udHJvbF0gZGlyZWN0aXZlIGluc3RlYWQgb2YgdGhlIGZvcm1Db250cm9sTmFtZSBkaXJlY3RpdmUnXG4gICAgKTtcbiAgfVxuXG4gIEBJbnB1dCgpIGVycm9yTWFwOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmb3JtOiBGb3JtQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgW3NvZklucHV0XSBkaXJlY3RpdmUgc2hvdWxkIGJlIHVzZWQgaW5zaWRlIGEgc29mLWZvcm0gZWxlbWVudCdcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=