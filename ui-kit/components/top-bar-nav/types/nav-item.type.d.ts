export interface NavItem extends Readonly<{
    label?: string;
    translation?: string;
    params?: {
        [key: string]: any;
    };
    routerLink?: string | string[];
    icon?: string;
    iconClasses?: string | string[];
    children?: NavItem[];
}> {
}
