export type Configuration = {
    port: number;
    postgres: {
        database: string;
        username: string;
        password: string;
        host: string;
        port: number;
    };
    redis: {
        address: string;
        password: string;
        database: number;
    };
    cors: {
        originAllowlist: string[];
    };
    serviceURL: string;
    clientUrl: string;
    oidc: OidcConfiguration;
    aws: {
        accessKeyId: string;
        secretKey: string;
        region: string;
        s3Bucket: string;
    };
};

export type OidcConfiguration = Record<
    string,
    {
        clientId: string;
        clientSecret: string;
    }
>;
