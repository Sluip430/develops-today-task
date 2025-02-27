import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CountryModule } from './country/country.module';
import { HolidayModule } from './holiday/holiday.module';
import { Holiday } from './holiday/holiday.entity';
import { CalendarModule } from './calendar/calendar.module';
import { UserModule } from './user/user.module';
import { Calendar } from './calendar/calendar.entity';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
        SequelizeModule.forRoot({
            dialectOptions: {
                useUTC: false,
                timezone: '+02:00',
            },
            timezone: '+02:00',
            dialect: 'postgres',
            logging: false,
            protocol: 'postgres',
            host: process.env.PG_HOST,
            port: Number(process.env.PG_PORT),
            username: process.env.PG_USERNAME,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DATABASE,
            synchronize: true,
            models: [Holiday, Calendar],
            autoLoadModels: true,
        }),
        CountryModule,
        HolidayModule,
        CalendarModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
