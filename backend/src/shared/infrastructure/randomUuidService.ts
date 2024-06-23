import { UuidService } from '../../terms/application/uuid.service';

export class RandomUuidService implements UuidService {
    newUuid(): string {
        throw new Error('Method not implemented.');
    }
}
