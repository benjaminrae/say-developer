import { CreateTermCommand } from './create-term.command';
import { CommandHandler } from '../../shared/command.handler';
import { TermsRepository } from '../domain/terms.repository';
import { Term } from '../domain/term';
import { UuidService } from './uuid.service';
import { Result } from '../../shared/result';

export class CreateTermCommandHandler implements CommandHandler {
    private repository: TermsRepository;
    private uuidService: UuidService;

    constructor(repository: TermsRepository, uuidService: UuidService) {
        this.repository = repository;
        this.uuidService = uuidService;
    }

    async execute(command: CreateTermCommand): Promise<Result<Term>> {
        const id = this.uuidService.newUuid();

        try {
            let term = new Term({
                id,
                props: {
                    term: command.term,
                    description: command.description,
                },
            });
            await this.repository.save(term);

            return Result.success(term);
        } catch {}
    }
}
