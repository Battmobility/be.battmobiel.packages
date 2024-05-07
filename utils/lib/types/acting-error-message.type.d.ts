export interface ActingErrorMessage extends Readonly<{
    translation?: string;
    message?: string;
    messageParams?: {
        [key: string]: any;
    };
}> {
}
