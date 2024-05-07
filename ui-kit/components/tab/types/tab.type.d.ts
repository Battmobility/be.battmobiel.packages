import { Params } from '@angular/router';
export interface Tab extends Readonly<{
    /** optional id, not used by tab(s) component */
    id?: any;
    /** translation label to be translated by tab */
    label?: string;
    /** already translated text */
    translation?: string;
    /** icon to be shown */
    icon?: string;
    /** counter to be shown */
    count?: number;
    /** if you want the tab to behave like a link */
    routerLink?: string[];
    /** add queryParams, only works if you at least define an empty array on routerLink */
    queryParams?: Params;
}> {
}
