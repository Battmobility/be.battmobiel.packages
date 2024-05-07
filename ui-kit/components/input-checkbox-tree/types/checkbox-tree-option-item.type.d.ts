export interface CheckboxTreeOptionItem extends Readonly<{
    id: string;
    label: string;
    children?: CheckboxTreeOptionItem[];
    expanded?: boolean;
}> {
}
