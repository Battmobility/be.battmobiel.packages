export interface AuthenticationResult extends Readonly<{
    access_token: string;
    refresh_token: string;
    access_expirydate: string;
    refresh_expirydate: string;
    userprofile: Readonly<{
        name: string;
        email: string;
    }>;
}> {
}
