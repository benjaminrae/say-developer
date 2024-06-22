import { Module } from '@nestjs/common';
import { CreateTermController } from './terms/infrastructure/http/create-term.controller';
import { TermsModule } from './terms/infrastructure/terms.module';

@Module({
    imports: [TermsModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
