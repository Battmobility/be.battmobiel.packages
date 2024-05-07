export declare type SearchFnSelect = (term: string, option: SearchOption) => boolean;
export interface SearchOption extends Readonly<{
    label: string;
    value: string;
}> {
}
