import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateTermController } from './http/create-term.controller';
import { NestCreateTermCommandHandler } from './handlers/nest-create-term-command.handler';
import { TermsKeys } from './terms.keys';
import { RandomUuidService } from '../../shared/infrastructure/RandomUuidService';
import { InMemoryTermsRepository } from './persistence/inMemoryTermsRepository';

const services: Provider[] = [
    {
        provide: TermsKeys.UUID_SERVICE,
        useFactory: () => {
            return new RandomUuidService();
        },
    },
];

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
    imports: [CqrsModule],
    controllers: [CreateTermController],
    providers: [...services, ...repositories, ...handlers],
})
export class TermsModule {}
