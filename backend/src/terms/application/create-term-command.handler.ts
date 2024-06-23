import { CreateTermCommand } from './create-term.command';
import { CommandHandler } from '../../shared/command.handler';
import { TermsRepository } from '../domain/terms.repository';
import { Term } from '../domain/term';

export class CreateTermCommandHandler implements CommandHandler {
    private repository: TermsRepository;

    constructor(repository: TermsRepository) {
        this.repository = repository;
    }

    async execute(command: CreateTermCommand) {
        await this.repository.save(new Term());
    }
}
