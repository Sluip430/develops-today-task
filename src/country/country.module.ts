import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { DateNagerModule } from 'src/services/date-nager/date-nager.module';
import { CountriesnowModule } from 'src/services/countriesnow/countriesnow.module';

@Module({
    controllers: [CountryController],
    providers: [CountryService],
    imports: [DateNagerModule, CountriesnowModule],
})
export class CountryModule {}
