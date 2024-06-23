import { TermsRepository } from '../../domain/terms.repository';
import { Term } from '../../domain/term';

export class InMemoryTermsRepository implements TermsRepository {
    save(term: Term): Promise<Term> {
        throw new Error('Method not implemented.');
    }
}
