import { Injectable } from '@nestjs/common';
import { CalendarService } from 'src/calendar/calendar.service';
import { AddHolidayToCalendarDto } from './dto/add-holiday-to-calendar.dto';
import { HolidayService } from 'src/holiday/holiday.service';

@Injectable()
export class UserService {
    constructor(private readonly calendarService: CalendarService, private readonly holidayService: HolidayService) {}
    async addHolidaysToCalendar(userId: string, dto: AddHolidayToCalendarDto) {
        const holiday = await this.holidayService.checkAndGetHoliday(dto);
        const holidayIds = holiday.map((holiday) => holiday.id);
        await this.calendarService.bulkCreate(Number(userId), holidayIds);
        return 'success';
    }
}
