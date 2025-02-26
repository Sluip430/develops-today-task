import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Optional } from 'sequelize';
import { NullishPropertiesOf } from 'sequelize/types/utils';
import { Calendar } from './calendar.entity';

@Injectable()
export class CalendarRepository {
    constructor(@InjectModel(Calendar) private repository: typeof Calendar) {}

    async bulkCreate(data: Optional<Calendar, NullishPropertiesOf<Calendar>>[]) {
        return await this.repository.bulkCreate(data, { ignoreDuplicates: true });
    }

    async findOneByUserIdAndHolidayId(userId: number, holidayId: number) {
        return await this.repository.findOne({ where: { user_id: userId, holiday_id: holidayId } });
    }
}
