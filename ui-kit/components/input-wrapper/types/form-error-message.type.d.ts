export interface FormErrorMessage extends Readonly<{
    value: string;
    params: Readonly<{
        [key: string]: any;
    }>;
}> {
}
