import { Command } from '../../shared/command';

export class CreateTermCommand extends Command {
    term: string;
    description: string;

    constructor(term: string, description: string) {
        super();
        this.term = term;
        this.description = description;
    }
}
