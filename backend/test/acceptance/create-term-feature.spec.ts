import { Test, TestingModule } from '@nestjs/testing';
import { CreateTermController } from '../../src/terms/infrastructure/http/create-term.controller';
import { CreateTermDto } from '../../src/terms/infrastructure/http/dtos/create-term.dto';
import { CqrsModule } from '@nestjs/cqrs';
import { TermsKeys } from '../../src/terms/infrastructure/terms.keys';
import { InMemoryTermsRepository } from '../../src/terms/infrastructure/persistence/inMemoryTermsRepository';
import { RandomUuidService } from '../../src/shared/infrastructure/randomUuidService';
import { NestCreateTermCommandHandler } from '../../src/terms/infrastructure/handlers/nest-create-term-command.handler';
import { AppModule } from '../../src/app.module';
import { TermsModule } from '../../src/terms/infrastructure/terms.module';

describe('Create Term Feature', () => {
    let controller: CreateTermController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [TermsModule],
        }).compile();

        controller = module.get<CreateTermController>(CreateTermController);

        // This is needed to register handlers as per https://github.com/nestjs/nest/issues/4141
        await module.init();
    });

    test('User should be able to create a Term', async () => {
        const term = 'Git';
        const description = 'A version control system';
        const createTermDto = new CreateTermDto(term, description);

        await controller.createTerm(createTermDto);
    });
});
