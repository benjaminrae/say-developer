import { Command } from '../../shared/command';

export class CreateTermCommand extends Command {
    private term: string;
    private description: string;

    constructor(term: string, description: string) {
        super();
        this.term = term;
        this.description = description;
    }
}
