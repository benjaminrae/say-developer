export class CreateTermDto {
    private term: string;
    private description: string;

    constructor(term: string, description: string) {
        this.term = term;
        this.description = description;
    }
}
