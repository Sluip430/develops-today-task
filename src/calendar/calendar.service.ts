import { Injectable } from '@nestjs/common';
import { CalendarRepository } from './calendar.repository';

@Injectable()
export class CalendarService {
    constructor(private readonly calendarRepository: CalendarRepository) {}

    async bulkCreate(userId: number, holidayIds: number[]) {
        const dataForCreate = holidayIds.map((holidayId) => ({ user_id: userId, holiday_id: holidayId }));
        return await this.calendarRepository.bulkCreate(dataForCreate);
    }
}
