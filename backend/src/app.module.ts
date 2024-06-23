import { Module } from '@nestjs/common';
import { TermsModule } from './terms/infrastructure/terms.module';
import { SharedModule } from './shared/infrastructure/shared.module';
import { ConfigModule } from './config/config.module';

@Module({
    imports: [TermsModule, SharedModule, ConfigModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
