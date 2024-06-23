import { CreateTermCommandHandler } from './create-term-command.handler';
import { CreateTermCommand } from './create-term.command';
import { TermsRepository } from '../domain/terms.repository';
import { Term } from '../domain/term';
import { UuidService } from './uuid.service';

describe('CreateTermCommandHandler', () => {
    const term = 'Git';
    const description = 'A version control system';
    const expectedId = '3579c66e-91a1-4170-ad01-7186e4184f2b';
    let repository: TermsRepository;
    let uuidService: UuidService;

    let handler: CreateTermCommandHandler;
    beforeEach(() => {
        jest.clearAllMocks();
        repository = { save: jest.fn() };
        uuidService = { newUuid: jest.fn() };
        handler = new CreateTermCommandHandler(repository, uuidService);
    });

    it('should create a term and save it to the database with the name and description from the received command', async () => {
        uuidService.newUuid = jest.fn().mockReturnValue(expectedId);
        const createTermCommand = new CreateTermCommand(term, description);
        const expectedTerm = new Term({
            id: expectedId,
            props: { term, description },
        });

        await handler.execute(createTermCommand);

        expect(repository.save).toHaveBeenCalledTimes(1);
        expect(repository.save).toHaveBeenCalledWith(expectedTerm);
    });

    it('should return a successful result when save to database is successful', async () => {
        uuidService.newUuid = jest.fn().mockReturnValue(expectedId);
        const createTermCommand = new CreateTermCommand(term, description);
        const expectedTerm = new Term({
            id: expectedId,
            props: { term, description },
        });
        repository.save = jest.fn().mockResolvedValue(expectedTerm);

        const result = await handler.execute(createTermCommand);

        expect(result.isSuccess()).toBe(true);
        expect(result.value()).toStrictEqual(expectedTerm);
    });

    it('should return a failure result when save to database is unsuccessful', async () => {
        uuidService.newUuid = jest.fn().mockReturnValue(expectedId);
        const createTermCommand = new CreateTermCommand(term, description);
        const expectedTerm = new Term({
            id: expectedId,
            props: { term, description },
        });
        const expectedError = new Error();
        repository.save = jest.fn().mockRejectedValue(expectedError);

        const result = await handler.execute(createTermCommand);

        expect(result.isSuccess()).toBe(false);
        expect(result.error()).toBeInstanceOf(Error);
        expect(result.error()).toStrictEqual(expectedError);
    });
});
