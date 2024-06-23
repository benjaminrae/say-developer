import { Term } from './term';

export interface TermsRepository {
    save(term: Term): Promise<Term>;
}
