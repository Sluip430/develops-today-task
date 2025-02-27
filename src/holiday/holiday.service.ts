import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HolidayRepository } from './holiday.repository';
import { DateNagerService } from 'src/services/date-nager/date-nager.service';
import { AddHolidayToCalendarDto } from 'src/user/dto/add-holiday-to-calendar.dto';

@Injectable()
export class HolidayService {
    constructor(private readonly holidayRepository: HolidayRepository, private readonly dateNagerService: DateNagerService) {}

    async checkAndGetHoliday(data: AddHolidayToCalendarDto) {
        const holiday = await this.holidayRepository.findOneByCountryCodeAndYear(data.countryCode, data.year);
        if (!holiday) {
            await this.fetchAndCreateHolidaysForCountry(data.countryCode, data.year);
        }
        return await this.holidayRepository.findAllHolidaysByNameAndYear(data.holidays, data.year);
    }

    async fetchAndCreateHolidaysForCountry(countryCode: string, year: number) {
        const holidays = await this.dateNagerService.getCountryHolidays(countryCode, year);
        const holidaysToCreate = holidays.map((holiday) => {
            return {
                date: holiday.date,
                localName: holiday.localName,
                name: holiday.name,
                countryCode: holiday.countryCode,
                year,
            };
        });
        await this.holidayRepository.bulkCreate(holidaysToCreate);
    }
}
