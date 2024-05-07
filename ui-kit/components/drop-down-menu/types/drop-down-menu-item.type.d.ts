export interface DropDownMenuItem extends Readonly<{
    id?: string;
    label?: string;
    translation?: string;
    params?: {
        [key: string]: any;
    };
    routerLink?: string | string[];
    click?: (e: MouseEvent) => any;
    itemIcon?: {
        icon: string;
        size: string;
        classes?: string | string[];
    };
}> {
}
