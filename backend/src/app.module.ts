import { Module } from '@nestjs/common';
import { TermsModule } from './terms/infrastructure/terms.module';

@Module({
    imports: [TermsModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
