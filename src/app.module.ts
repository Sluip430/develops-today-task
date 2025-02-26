import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CountryModule } from './country/country.module';


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
            models: [],
            autoLoadModels: true,
        }),
        CountryModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
