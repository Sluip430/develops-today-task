import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { CountriesnowLinksEnum } from './enums/links.enum';
import { ICountryPopulation } from './interfaces/country-population.interface';
import { ICountryFlag } from './interfaces/country-flag.interface';

@Injectable()
export class CountriesnowService {
    async getCountryPopulation(country: string) {
        try {
            const response = await axios.post(process.env.COUNTRIESNOW_API_URL + CountriesnowLinksEnum.COUNTRIES_POPULATION, {
                country,
            });
            const data: ICountryPopulation = response?.data || [];
            return data.data.populationCounts;
        } catch (error) {
            throw new HttpException(
                `countries_now_get_country_population_error`,
                error.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async getCountryFlagUrl(countryCode: string) {
        try {
            const response = await axios.post(process.env.COUNTRIESNOW_API_URL + CountriesnowLinksEnum.COUNTRIES_FLAG_IMAGES, {
                iso2: countryCode,
            });
            const data: ICountryFlag = response?.data || null;
            return data.data.flag;
        } catch (error) {
            throw new HttpException(`date_nager_get_country_info_error`, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
