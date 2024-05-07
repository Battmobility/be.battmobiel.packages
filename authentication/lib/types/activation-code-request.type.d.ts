export interface ActivationCodeRequest extends Readonly<{
    email: string;
    url_scheme: 'https';
}> {
}
