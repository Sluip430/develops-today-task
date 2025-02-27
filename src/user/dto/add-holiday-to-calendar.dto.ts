import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength } from 'class-validator';

export class AddHolidayToCalendarDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(2)
    countryCode: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    year: number;

    @ArrayNotEmpty()
    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    holidays: string[];
}
