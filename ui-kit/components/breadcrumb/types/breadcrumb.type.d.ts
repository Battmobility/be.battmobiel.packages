export interface Breadcrumb extends Readonly<{
    /**
     * Translation key.
     */
    label?: string;
    /**
     * Translated value. If the translation value is already known this property can be used.
     */
    translation?: string;
    /**
     * Router path.
     */
    path?: string;
    /**
     * Translation parameters. This is used in combination with the "label" property.
     */
    params?: any;
    /**
     * Whether or not the query params are preserved when the user navigates using the breadcrumbs.
     */
    preserveQueryParams?: boolean;
}> {
}
