import { Test, TestingModule } from '@nestjs/testing';
import { CreateTermController } from './create-term.controller';
import { CreateTermDto } from './dtos/create-term.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTermCommand } from '../../application/create-term.command';

describe('CreateTermController', () => {
    let controller: CreateTermController;
    const commandBus = {
        execute: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CreateTermController],
            providers: [{ provide: CommandBus, useValue: commandBus }],
        }).compile();

        controller = module.get<CreateTermController>(CreateTermController);
    });

    it('should execute a CreateTermCommand with the received CreateTermDto', async () => {
        const term = 'Git';
        const description = 'A version control system';
        const createTermDto = new CreateTermDto(term, description);

        await controller.createTerm(createTermDto);

        expect(commandBus.execute).toHaveBeenCalledTimes(1);
        expect(commandBus.execute).toHaveBeenCalledWith(new CreateTermCommand(term, description));
    });
});
