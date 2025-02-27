import { Module } from '@nestjs/common';
import { DateNagerService } from './date-nager.service';

@Module({
    providers: [DateNagerService],
    exports: [DateNagerService],
})
export class DateNagerModule {}
