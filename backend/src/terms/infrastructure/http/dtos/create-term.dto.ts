export class CreateTermDto {
    term: string;
    description: string;

    constructor(term: string, description: string) {
        this.term = term;
        this.description = description;
    }
}
