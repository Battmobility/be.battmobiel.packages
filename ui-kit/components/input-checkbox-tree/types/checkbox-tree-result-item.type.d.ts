export interface CheckboxTreeResultItem extends Readonly<{
    id: string;
    children?: CheckboxTreeResultItem[];
    selected?: boolean;
}> {
}
