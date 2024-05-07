export interface AuthConfig extends Readonly<{
    baseUrl: string;
    realm: string;
    clientId: string;
    allowedUrls: string[];
    grant: 'implicit';
    logoutRedirectUrls: {
        id: string;
        url: string;
    }[];
}> {
}
