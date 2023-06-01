import { Module } from '@nestjs/common';
import { VoteStudentService } from './vote-student.service';
import { VoteStudentController } from './vote-student.controller';
import {StudentService} from "../student/student.service";
import {VoteService} from "../vote/vote.service";
import {OptionService} from "../option/option.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Student} from "../student/entities/student.entity";
import {Vote} from "../vote/entities/vote.entity";
import {VoteStudent} from "./entities/vote-student.entity";
import {Option} from "../option/entities/option.entity";
import {RestaurantService} from "../restaurant/restaurant.service";
import {Restaurant} from "../restaurant/entities/restaurant.entity";

@Module({
  controllers: [VoteStudentController],
  providers: [VoteStudentService,StudentService,VoteService,OptionService,RestaurantService],
imports: [TypeOrmModule.forFeature([Student,Vote,VoteStudent,Option,Restaurant])],
  exports: [VoteStudentService,TypeOrmModule]
})
export class VoteStudentModule {}
