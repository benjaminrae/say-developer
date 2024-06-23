import { UuidService } from '../uuid.service';

export class RandomUuidService implements UuidService {
    newUuid(): string {
        return crypto.randomUUID();
    }
}
