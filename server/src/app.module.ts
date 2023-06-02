/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { RestaurantModule } from './restaurant/restaurant.module';
import { StudentModule } from './student/student.module';
import { MenuModule } from './menu/menu.module';
import { VoteModule } from './vote/vote.module';
import { OptionModule } from './option/option.module';
import { VoteStudentModule } from './vote-student/vote-student.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({

      type: 'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",   
      database: "webproject",
      autoLoadEntities:true,
      synchronize: false,   
    }),
    RestaurantModule, 
    StudentModule,
    MenuModule,
    VoteModule,
    OptionModule,
    VoteStudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
