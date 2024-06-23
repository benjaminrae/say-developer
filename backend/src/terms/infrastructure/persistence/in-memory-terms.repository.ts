import { TermsRepository } from '../../domain/terms.repository';
import { Term } from '../../domain/term';

export class InMemoryTermsRepository implements TermsRepository {
    private terms: Term[] = [];

    async save(term: Term): Promise<Term> {
        this.terms.push(term);

        return term;
    }
}
