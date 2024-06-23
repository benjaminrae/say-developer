import { Module } from '@nestjs/common';
import { configuration } from './configuration';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
    imports: [
        NestConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
        }),
    ],
})
export class ConfigModule {}
