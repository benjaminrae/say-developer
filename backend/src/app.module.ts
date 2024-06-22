import { Module } from '@nestjs/common';
import { CreateTermController } from './terms/infrastructure/http/create-term.controller';

@Module({
    imports: [],
    controllers: [CreateTermController],
    providers: [],
})
export class AppModule {}
