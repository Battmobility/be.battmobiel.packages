import { Params } from '@angular/router';
export interface FlowStep extends Readonly<{
    label: string;
    disabled?: boolean;
    routePath: string;
    queryParams?: Params;
}> {
}
