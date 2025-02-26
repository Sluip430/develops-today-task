import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class SingleCountryDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(2)
    countryCode: string;
}
