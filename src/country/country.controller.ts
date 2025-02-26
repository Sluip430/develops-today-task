import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';
import { SingleCountryDto } from './dto/single.dto';

@Controller('country')
export class CountryController {
    constructor(private readonly countryService: CountryService) {}

    @Get()
    async getCountries() {
        return await this.countryService.getCountries();
    }

    @Get(':countryCode')
    async getCountry(@Param() { countryCode }: SingleCountryDto) {
        return await this.countryService.getCountry(countryCode);
    }
}
