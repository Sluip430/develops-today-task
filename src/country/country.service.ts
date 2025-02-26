import { Injectable } from '@nestjs/common';
import { DateNagerService } from 'src/services/date-nager/date-nager.service';

@Injectable()
export class CountryService {
    constructor(private readonly dateNagerService: DateNagerService) {}
    async getCountries() {
        return await this.dateNagerService.getCountries();
    }

    async getCountry(countryCode: string) {
        return await this.dateNagerService.getCountryInfo(countryCode);
    }
}
