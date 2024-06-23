import { UuidService } from '../../terms/application/uuid.service';

export class RandomUuidServicee implements UuidService {
    newUuid(): string {
        return crypto.randomUUID();
    }
}
