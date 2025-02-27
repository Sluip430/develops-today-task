import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
        }),
    );
    app.use(express.json({ limit: '200mb' }));
    app.use(express.urlencoded({ limit: '200mb', extended: true }));

    const port = process.env.PORT || 3000;
    app.enableCors({
        origin: true,
        credentials: true,
        exposedHeaders: 'Set-Cookie',
    });
    await app.listen(port, () => console.log(`Server started on ${port}`));
}
bootstrap();
