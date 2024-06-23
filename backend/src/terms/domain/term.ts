import { Entity } from '../../shared/entity';

type TermProps = {
    term: string;
    description: string;
};

export class Term extends Entity<TermProps> {}
