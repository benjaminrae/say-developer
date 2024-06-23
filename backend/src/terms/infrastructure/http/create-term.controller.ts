import { Body, Controller, HttpException, HttpStatus, Post, ValidationPipe } from '@nestjs/common';
import { CreateTermRequest } from './requests/create-term.request';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTermCommand } from '../../application/create-term.command';
import { ApiOperation, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { Term } from '../../domain/term';
import { Result } from '../../../shared/result';

@Controller('terms')
export class CreateTermController {
    private commandBus: CommandBus;

    constructor(commandBus: CommandBus) {
        this.commandBus = commandBus;
    }

    @Post()
    @ApiOperation({ summary: 'Create Term' })
    @ApiResponse({
        status: 201,
        description: 'Successfully created Term',
    })
    async createTerm(@Body(new ValidationPipe()) createTermDto: CreateTermRequest) {
        const createTermCommand = new CreateTermCommand(createTermDto.term, createTermDto.description);

        const result = await this.commandBus.execute<CreateTermCommand, Result<Term>>(createTermCommand);

        if (result.isFailure()) {
            throw new HttpException('Failed to create Term', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
