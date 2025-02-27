import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { DateNagerLinksEnum } from './enums/links.enum';
import { ICountry } from './interfaces/country.interface';
import { ICountryInfo } from './interfaces/country-info.interface';
import { IPublicHoliday } from './interfaces/public-holiday.interface';

@Injectable()
export class DateNagerService {
    async getCountries() {
        try {
            const response = await axios.get(process.env.DATE_NAGER_API_URL + DateNagerLinksEnum.AVAILABLE_COUNTRIES);
            const countries: ICountry = response?.data || [];
            return countries;
        } catch (error) {
            throw new HttpException(`date_nager_get_countries_error`, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getCountryInfo(countryCode: string) {
        try {
            const response = await axios.get(
                process.env.DATE_NAGER_API_URL + DateNagerLinksEnum.COUNTRY_INFO + '/' + countryCode,
            );
            const countries: ICountryInfo = response?.data || null;
            return countries;
        } catch (error) {
            throw new HttpException(`date_nager_get_country_info_error`, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getCountryHolidays(countryCode: string, year: number) {
        try {
            const response = await axios.get(
                process.env.DATE_NAGER_API_URL + DateNagerLinksEnum.PUBLIC_HOLIDAYS + '/' + year + '/' + countryCode,
            );
            const holidays: IPublicHoliday[] = response?.data || null;
            return holidays;
        } catch (error) {
            throw new HttpException(`date_nager_get_country_info_error`, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
