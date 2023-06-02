import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Student } from './entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from 'src/vote/entities/vote.entity';
import { Option } from 'src/option/entities/option.entity';
import {VoteStudent} from "../vote-student/entities/vote-student.entity";
import {OptionModule} from "../option/option.module";
import {VoteModule} from "../vote/vote.module";
import {VoteStudentModule} from "../vote-student/vote-student.module";
import {VoteService} from "../vote/vote.service";
import {OptionService} from "../option/option.service";
import {VoteStudentService} from "../vote-student/vote-student.service";
import {RestaurantService} from "../restaurant/restaurant.service";
import {Restaurant} from "../restaurant/entities/restaurant.entity";
import {PassportModule} from "@nestjs/passport";
import {JwtModule, JwtService} from "@nestjs/jwt";
import * as dotenv from "dotenv";
dotenv.config();

@Module({
  controllers: [StudentController],
  providers: [StudentService,VoteService,OptionService,VoteStudentService,RestaurantService],
  imports: [TypeOrmModule.forFeature([Student, Vote,Option,VoteStudent,Restaurant]),
  PassportModule.register({defaultStrategy:'jwt'}),
  JwtModule.register({global:true,  secret: "secretkey", signOptions :{expiresIn : 3600}})],
  exports: [StudentService,TypeOrmModule]

})
export class StudentModule {}
