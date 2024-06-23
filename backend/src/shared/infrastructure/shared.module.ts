import { Module } from '@nestjs/common';
import { SharedKeys } from './shared.keys';
import { RandomUuidService } from './random-uuid.service';

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
})
export class SharedModule {}
