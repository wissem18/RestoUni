import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import * as dotenv from 'dotenv'
import {ConfigModule, ConfigService} from "@nestjs/config";
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({

      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3308,
      username: "root",
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
      ConfigModule.forRoot({
            isGlobal: true

      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
