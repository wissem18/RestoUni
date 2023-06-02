/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import helmet from 'helmet';

async function bootstrap() {

  const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
    }

  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  await app.listen(3006);

}
bootstrap();
