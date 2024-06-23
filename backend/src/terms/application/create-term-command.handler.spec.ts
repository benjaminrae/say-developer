import { CreateTermCommandHandler } from './create-term-command.handler';
import { CreateTermCommand } from './create-term.command';
import { TermsRepository } from '../domain/terms.repository';
import { Term } from '../domain/term';

describe('CreateTermCommandHandler', () => {
    let repository: TermsRepository = {
        save: jest.fn(),
    };

    it('should create a term and save it to the database', async () => {
        const handler = new CreateTermCommandHandler(repository);

        await handler.execute(new CreateTermCommand('Git', 'A version control system'));

        expect(repository.save).toHaveBeenCalledTimes(1);
        expect(repository.save).toHaveBeenCalledWith(new Term());
    });
});
