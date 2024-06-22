import { Controller } from '@nestjs/common';
import { CreateTermDto } from './dtos/create-term.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTermCommand } from '../../application/create-term.command';

@Controller('create-term-controller')
export class CreateTermController {
    private commandBus: CommandBus;
    constructor(commandBus: CommandBus) {
        this.commandBus = commandBus;
    }

    async createTerm(createTermDto: CreateTermDto) {
        await this.commandBus.execute(new CreateTermCommand(createTermDto.term, createTermDto.description));
    }
}
