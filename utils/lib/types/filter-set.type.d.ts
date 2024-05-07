export interface FilterSet extends Readonly<{
    path: string;
    label?: string;
    filterType: FilterSet.FilterType;
    data: Readonly<{
        key: string;
        label: string;
    }[]>;
}> {
}
export declare namespace FilterSet {
    enum FilterType {
        MultiSelect = "multi-select"
    }
}
