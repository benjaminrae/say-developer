import { Controller, Post } from '@nestjs/common';
import { CreateTermDto } from './dtos/create-term.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTermCommand } from '../../application/create-term.command';

@Controller('terms')
export class CreateTermController {
    private commandBus: CommandBus;

    constructor(commandBus: CommandBus) {
        this.commandBus = commandBus;
    }

    @Post()
    async createTerm(createTermDto: CreateTermDto) {
        const createTermCommand = new CreateTermCommand(createTermDto.term, createTermDto.description);
        await this.commandBus.execute(createTermCommand);
    }
}
