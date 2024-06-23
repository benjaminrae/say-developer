import { CommandHandler } from '@nestjs/cqrs';
import { CreateTermCommandHandler } from '../../application/create-term-command.handler';
import { CreateTermCommand } from '../../application/create-term.command';
import { TermsRepository } from '../../domain/terms.repository';
import { Inject } from '@nestjs/common';
import { TermsKeys } from '../terms.keys';
import { UuidService } from '../../application/uuid.service';

@CommandHandler(CreateTermCommand)
export class NestCreateTermCommandHandler extends CreateTermCommandHandler {
    constructor(
        @Inject(TermsKeys.TERMS_REPOSITORY) termsRepository: TermsRepository,
        @Inject(TermsKeys.UUID_SERVICE) uuidService: UuidService,
    ) {
        super(termsRepository, uuidService);
    }
}