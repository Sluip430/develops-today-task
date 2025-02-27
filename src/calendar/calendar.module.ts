import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarRepository } from './calendar.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Calendar } from './calendar.entity';

@Module({
    controllers: [],
    providers: [CalendarService, CalendarRepository],
    imports: [SequelizeModule.forFeature([Calendar])],
    exports: [CalendarService],
})
export class CalendarModule {}
