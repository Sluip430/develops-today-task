import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CalendarModule } from 'src/calendar/calendar.module';
import { HolidayModule } from 'src/holiday/holiday.module';

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [CalendarModule, HolidayModule],
})
export class UserModule {}
