import { Configuration } from './types';
import * as process from 'node:process';

export const configuration = (): Configuration => ({
    port: Number(process.env.PORT ?? 3000),
    postgres: {
        database: process.env.DB_DATABASE ?? 'postgres',
        username: process.env.DB_USERNAME ?? 'postgres',
        password: process.env.DB_PASSWORD ?? 'postgres',
        host: process.env.DB_HOST ?? 'localhost',
        port: Number(process.env.DB_PORT ?? 5432),
    },
    aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        s3Bucket: process.env.S3_BUCKET_NAME,
    },
    cors: {
        originAllowlist: (process.env.ORIGIN_ALLOWLIST ?? 'http://localhost:5173').split(','),
    },
    oidc: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
    },
    redis: {
        address: process.env.REDIS_ADDRESS ?? 'localhost:6379',
        password: process.env.REDIS_PASSWORD,
        database: Number(process.env.REDIS_DATABASE ?? 0),
    },
    clientUrl: process.env.CLIENT_URL ?? 'http://localhost:5173',
    serviceURL: process.env.SERVICE_URL ?? 'http://localhost:3000',
});
