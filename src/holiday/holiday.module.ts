import { Module } from '@nestjs/common';
import { HolidayService } from './holiday.service';
import { DateNagerModule } from 'src/services/date-nager/date-nager.module';
import { HolidayRepository } from './holiday.repository';
import { Holiday } from './holiday.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    controllers: [],
    providers: [HolidayService, HolidayRepository],
    imports: [SequelizeModule.forFeature([Holiday]), DateNagerModule],
    exports: [HolidayService],
})
export class HolidayModule {}
