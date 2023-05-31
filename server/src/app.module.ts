/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { RestaurantModule } from './restaurant/restaurant.module';
import { StudentModule } from './student/student.module';
import { MenuModule } from './menu/menu.module';
import { VoteModule } from './vote/vote.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({

      type: 'mysql',
      host: "localhost",
      port: 3308,
      username: "root",
      password: "",
      database: "tpnest",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    RestaurantModule,
    StudentModule,
    MenuModule,
    VoteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
