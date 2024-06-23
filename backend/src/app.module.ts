import { Module } from '@nestjs/common';
import { TermsModule } from './terms/infrastructure/terms.module';
import { SharedModule } from './shared/infrastructure/shared.module';

@Module({
    imports: [TermsModule, SharedModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
