import { ApiProperty } from '@nestjs/swagger';

export class CreateTermRequest {
    @ApiProperty({ type: String })
    term: string;

    @ApiProperty({ type: String })
    description: string;

    constructor(term: string, description: string) {
        this.term = term;
        this.description = description;
    }
}
