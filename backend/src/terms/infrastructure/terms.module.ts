import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateTermController } from './http/create-term.controller';
import { NestCreateTermCommandHandler } from './handlers/nest-create-term-command.handler';
import { TermsKeys } from './terms.keys';
import { InMemoryTermsRepository } from './persistence/in-memory-terms.repository';
import { SharedModule } from '../../shared/infrastructure/shared.module';

const repositories: Provider[] = [
    {
        provide: TermsKeys.TERMS_REPOSITORY,
        useFactory: () => {
            return new InMemoryTermsRepository();
        },
    },
];

const handlers: Provider[] = [NestCreateTermCommandHandler];

@Module({
    imports: [CqrsModule, SharedModule],
    controllers: [CreateTermController],
    providers: [...repositories, ...handlers],
})
export class TermsModule {}
