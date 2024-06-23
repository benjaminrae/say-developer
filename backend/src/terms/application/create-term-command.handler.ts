import { CreateTermCommand } from './create-term.command';
import { CommandHandler } from '../../shared/command.handler';
import { TermsRepository } from '../domain/terms.repository';
import { Term } from '../domain/term';
import { UuidService } from './uuid.service';

export class CreateTermCommandHandler implements CommandHandler {
    private repository: TermsRepository;
    private uuidService: UuidService;

    constructor(repository: TermsRepository, uuidService: UuidService) {
        this.repository = repository;
        this.uuidService = uuidService;
    }

    async execute(command: CreateTermCommand) {
        const id = this.uuidService.newUuid();
        await this.repository.save(
            new Term({
                id,
                props: {
                    term: command.term,
                    description: command.description,
                },
            }),
        );
    }
}
