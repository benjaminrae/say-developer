import { Test, TestingModule } from '@nestjs/testing';
import { CreateTermController } from '../../src/terms/infrastructure/http/create-term.controller';
import { CreateTermDto } from '../../src/terms/infrastructure/http/dtos/create-term.dto';
import { TermsModule } from '../../src/terms/infrastructure/terms.module';
import { TermsKeys } from '../../src/terms/infrastructure/terms.keys';
import { TermsRepository } from '../../src/terms/domain/terms.repository';
import { UuidService } from '../../src/terms/application/uuid.service';
import { Term } from '../../src/terms/domain/term';

describe('Create Term Feature', () => {
    let controller: CreateTermController;
    let repository: TermsRepository;
    let uuidService: UuidService;

    beforeEach(async () => {
        repository = {
            save: jest.fn(),
        };
        uuidService = {
            newUuid: jest.fn(),
        };
        const module: TestingModule = await Test.createTestingModule({
            imports: [TermsModule],
        })
            .overrideProvider(TermsKeys.UUID_SERVICE)
            .useValue(uuidService)
            .overrideProvider(TermsKeys.TERMS_REPOSITORY)
            .useValue(repository)
            .compile();

        controller = module.get<CreateTermController>(CreateTermController);

        // This is needed to register handlers as per https://github.com/nestjs/nest/issues/4141
        await module.init();
    });

    it('User should be able to create a Term and save it to the database', async () => {
        const term = 'Git';
        const description = 'A version control system';
        const createTermDto = new CreateTermDto(term, description);
        const id = '3579c66e-91a1-4170-ad01-7186e4184f2b';
        uuidService.newUuid = jest.fn().mockReturnValue(id);

        await controller.createTerm(createTermDto);

        expect(repository.save).toHaveBeenCalledTimes(1);
        expect(repository.save).toHaveBeenCalledWith(
            new Term({
                id,
                props: {
                    term,
                    description,
                },
            }),
        );
    });
});
