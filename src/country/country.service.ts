import { Injectable } from '@nestjs/common';
import { CountriesnowService } from 'src/services/countriesnow/countriesnow.service';
import { DateNagerService } from 'src/services/date-nager/date-nager.service';

@Injectable()
export class CountryService {
    constructor(private readonly dateNagerService: DateNagerService, private readonly countriesnowService: CountriesnowService) {}
    async getCountries() {
        return await this.dateNagerService.getCountries();
    }

    async getCountry(countryCode: string) {
        const { borders: borderCountries, commonName } = await this.dateNagerService.getCountryInfo(countryCode);
        const population = await this.countriesnowService.getCountryPopulation(commonName);
        const flagUrl = await this.countriesnowService.getCountryFlagUrl(countryCode);
        return { borderCountries, population, flagUrl };
    }
}
