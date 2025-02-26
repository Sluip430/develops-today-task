import { Module } from '@nestjs/common';
import { CountriesnowService } from './countriesnow.service';

@Module({
    providers: [CountriesnowService],
    exports: [CountriesnowService],
})
export class CountriesnowModule {}
