import { Module } from '@nestjs/common';
import { SharedKeys } from './shared.keys';
import { RandomUuidService } from './random-uuid.service';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
    providers: [
        {
            provide: SharedKeys.UUID_SERVICE,
            useFactory: () => {
                return new RandomUuidService();
            },
        },
    ],
    exports: [SharedKeys.UUID_SERVICE],
    imports: [PersistenceModule],
})
export class SharedModule {}
