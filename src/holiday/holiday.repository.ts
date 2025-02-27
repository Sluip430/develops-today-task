import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op, Optional, WhereOptions } from 'sequelize';
import { NullishPropertiesOf } from 'sequelize/types/utils';
import { Holiday } from './holiday.entity';

@Injectable()
export class HolidayRepository {
    constructor(@InjectModel(Holiday) private repository: typeof Holiday) {}

    async bulkCreate(data: Optional<Holiday, NullishPropertiesOf<Holiday>>[]) {
        return await this.repository.bulkCreate(data, { ignoreDuplicates: true });
    }

    async findOneByCountryCodeAndYear(countryCode: string, year: number) {
        return await this.repository.findOne({ where: { countryCode, year } });
    }

    async findAllHolidaysByNameAndYear(holidays: string[], year: number) {
        return await this.repository.findAll({
            where: {
                year,
                [Op.or]: [{ name: holidays }, { localName: holidays }],
            },
        });
    }
}
