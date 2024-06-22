import { Test, TestingModule } from '@nestjs/testing';
import { CreateTermController } from '../../src/terms/infrastructure/http/create-term.controller';
import { CreateTermDto } from '../../src/terms/infrastructure/http/dtos/create-term.dto';
import { CqrsModule } from '@nestjs/cqrs';

describe('Create Term Feature', () => {
    let controller: CreateTermController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CreateTermController],
            imports: [CqrsModule],
        }).compile();

        controller = module.get<CreateTermController>(CreateTermController);
    });

    test('User should be able to create a Term', async () => {
        const term = 'Git';
        const description = 'A version control system';
        const createTermDto = new CreateTermDto(term, description);

        expect(async () => {
            await controller.createTerm(createTermDto);
        }).not.toThrow();
    });
});
