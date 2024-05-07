import { FormGroup } from '@angular/forms';
export interface DynamicFormHelper extends Readonly<{
    form: FormGroup;
    errorMap?: Readonly<{
        [key: string]: string;
    }>;
}> {
}
