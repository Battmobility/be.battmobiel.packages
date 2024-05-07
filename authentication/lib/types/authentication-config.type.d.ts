export interface AuthenticationConfig extends Readonly<{
    resolve(): Readonly<{
        apiEndpoint: string;
    }>;
}> {
}
