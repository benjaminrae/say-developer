import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateTermController } from './http/create-term.controller';

@Module({})
export class TermsModule {
    imports: [CqrsModule];
    controllers: [CreateTermController];
}
