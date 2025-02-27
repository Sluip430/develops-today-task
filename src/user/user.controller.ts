import { Body, Controller, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { AddHolidayToCalendarDto } from './dto/add-holiday-to-calendar.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post(':userId/calendar/holidays')
    async addHolidaysToCalendar(@Param('userId') userId: string, @Body() dto: AddHolidayToCalendarDto) {
        return await this.userService.addHolidaysToCalendar(userId, dto);
    }
}
